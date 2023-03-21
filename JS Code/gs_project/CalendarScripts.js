/*may be a helpful StackOverflow page
//https://stackoverflow.com/questions/27107903/use-onedit-trigger-on-a-specific-sheet-within-google-scripts-for-google-sheets
//There are quota limits for using Apps Script
//https://developers.google.com/apps-script/guides/services/quotas
*/
function createEditTriggerForCalendar() {
    /*
      Creates an installable trigger for this Spreadsheet (The Auto Sheet/Autosheets) to bypass permissions and authorizations
      https://developers.google.com/apps-script/guides/triggers/installable#google_apps_triggers
      Using the Triggers Section or the Simple Trigger of (onEdit) doesn't allow for the proper permissions and authorizations.
      However, this installable trigger still shows up in the triggers section (in case you wanted to delete it), or, if you really wanted to, 
      you could make a method to check all triggers, which I might do eventually.
    */
    var ss = SpreadsheetApp.getActive();
    ScriptApp.newTrigger('onEditForCalendar')
      .forSpreadsheet(ss)
      .onEdit()
      .create();
  }
  
  function readDateFormat(row)
  {
    /*
      Reads the spreadsheet that is formatted like the PROD spreadsheet and gets the dates.
      @param {Number} row - row that is being read
      @return {Date[]} - start as the first item and end as the second item
    */
    //Assume that cols {B,C} are start time and cols {D,E} are end time
    //B & D are dates, C & E are times
    var rangeString = "B" + row + ":" + "E" + row;
    var dateRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("PROD").getRange(rangeString);
    var startDate = new Date();
    var endDate = new Date();
    var dateArray = [];
    for (var j = 0; j < 4; j++)
    {
      dateArray.push(new Date(dateRange.getValues()[0][j]));
    }
    //https://developers.google.com/google-ads/scripts/docs/features/dates
    startDate.setFullYear(dateArray[0].getFullYear(), dateArray[0].getMonth(), dateArray[0].getDate());
    startDate.setHours(dateArray[1].getHours(), dateArray[1].getMinutes(), 0, 0);
    endDate.setFullYear(dateArray[2].getFullYear(), dateArray[2].getMonth(), dateArray[2].getDate());
    endDate.setHours(dateArray[3].getHours(), dateArray[3].getMinutes(), 0, 0);
    var ret = [startDate, endDate];
    return ret;
  }
  
  function onEditForCalendar(e) {
    /*
      @param {Event} e - event object
  
      This onEdit function takes the event object, and then checks to see what the user is editing. If they are editing the "PROD" Spreadsheet, then
      it will set the cell at I2 (in the "Calendar Template" Spreadsheet) to the last edited time, and then call the synchronousUpdateEvent method to 
      update all of the calendar events on the sheet
  
      This method functionality doesn't touch the logic for updating events on the calendar. To change how that is performed, look at the synchronousUpdateEvent method
      to change the way it syncs.
  
      Even though we edit the sheet before calling the synchronousUpdateEvent, I'm like 90% sure that doing API calls and Script calls does not trigger the Simple Triggers
      or an onEdit(e) call.
    */
    var sheetName = e.source.getActiveSheet().getName();
    // Only get the prod sheet, otherwise it will read all the sheets
    if (sheetName != "PROD") return;
    Logger.log("Called onEdit");
    synchronousUpdateEvent(e);
  }
  
  function synchronousUpdateEvent(event) {
    /*
      The plan is to be able to select whatever the user is editing, and then update that row that they are editing. Not sure
      if this is really possible, but we will see.
  
      @param {Event} event - takes in an event object, should be a Google Sheet event object
  
      Right now, it goes through the entire sheet, and updates the rows with events filled out
      Does this manually
  
      Will crash if the event doesn't have a range/row that is valid
    */
    //Use a switch statement so that you can add the event to different calendars when needed
    var calendarid = "";
    
    var updateCalendar = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("PROD").getRange("R102").getDisplayValue();
  
  
    console.log(updateCalendar);
  
  // Function to call an alert box

  function noCalendarAlert() {

    const ui = SpreadsheetApp.getUi();
    ui.alert({
      title: 'Warning',
      message: 'No calendar is selected, please select a calendar to post the event to.',
      icon: ui.Icon.WARNING,
      timeout: 5 
    });
  }


    switch (updateCalendar)
    {
      case 'Release Calendar':
        // console.log("you chose the release calendar");
        calendarid= "costco.com_702bumd6ko5tnbfh9gi0k56a94@group.calendar.google.com";
        var calendar = CalendarApp.getCalendarById(calendarid);
        break;
      case 'EU Calendar':
        // console.log("you chose the eu calendar");
        calendarid = "c_ecacb282c26d8b1227e4bcb4b58d4bb1430f1a9252711ce199125fecfd5e428e@group.calendar.google.com";
        var calendar = CalendarApp.getCalendarById(calendarid);
  
        break;
      case 'SAP Global':
        console.log("you chose the sap global calendar");
        calendarid = "costco.com_5v22af6ffotps15vd9f6ke8ukc@group.calendar.google.com";
        var calendar = CalendarApp.getCalendarById(calendarid);
        break;
      default:
        Logger.log("Invalid Calendar");
    }
  
    //var changedSheetRangeRow = event.range.getRow();
  
    //checks when the events on the sheet are done
    //var boundary = getNextAvailableLine("PROD");
    //Logger.log("Next available line/Updated Events until: " + boundary);
  
    console.log(calendarid);
    console.log(calendar);
  
  
  
  
    //updates each row of the sheet until the next available line ------ Hardcoded for Row 102
    //nested for loop for seeing if the event is in the calendar, if the details are updated, 
    for (var i = 102; i < 103; i++)
    {
      //get the cell at the given row and at column 17 or column Q, which contains the Event ID
      var eventID = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("PROD").getRange(i, 17).getDisplayValue();
      var event = calendar.getEventById(eventID);
      if (!event) return;
  
      //grab values for the row
      var infoRangeString = 'F' + i + ":" + 'K' + i;
      var infoRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("PROD").getRange(infoRangeString).getValues();
      var dates = toDateArray(i);
      var formattedDate = readDateFormat(i);
  
      //build the description
      var descriptionBuilder = "";
      var descriptionDictionary = {
        "System Maintenance": infoRange[0][0],
        "Impact During Outage": infoRange[0][1],
        "Outage Start": dates[0],
        "Outage End": dates[1],
        "Duration": dates[2],
        "Action Required": infoRange[0][2],
        "Services Affected & Impacted": infoRange[0][3],
        "RFC": infoRange[0][4],
        "Next Update": infoRange[0][5]
      };
      for (var [key,value] of Object.entries(descriptionDictionary))
      {
        descriptionBuilder += "\n\n" + key + ": " + "\n" + value;
      }
  
      //set the values for the event
      event
        .setTime(formattedDate[0], formattedDate[1])
        .setTitle(infoRange[0][0])
        //.setGuests(eventData[0][3]) there is no set guest method; TODO: figure out a workaround
        .setDescription(descriptionBuilder);
    }
  }
  
  function createEventOnCalendar() {
    /*
      Takes in a range from the UI prompt and then creates a new item on the calendar
    */
    var ui = SpreadsheetApp.getUi();
    var prompter = ui.prompt("Input Row", "Please input the row that you would like to sync to the calendar.", ui.ButtonSet.OK);
    var response = prompter.getResponseText();
    var buttonPress = prompter.getSelectedButton();
    //exits out of the function if there is no response, or if they close the dialog box with the default upper right close button
    if (!response || buttonPress == ui.Button.CLOSE) return;
  
    //grabs information from the sheet regarding the user choice
    var infoRangeString = 'F' + response + ":" + 'K' + response;
    var infoRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("PROD").getRange(infoRangeString).getValues();
    var dates = toDateArray(response);
    var formattedDate = readDateFormat(response);
  
    //build the description
    var descriptionBuilder = "";
    var descriptionDictionary = {
      "System Maintenance": infoRange[0][0],
      "Impact During Outage": infoRange[0][1],
      "Outage Start": dates[0],
      "Outage End": dates[1],
      "Duration": dates[2],
      "Action Required": infoRange[0][2],
      "Services Affected & Impacted": infoRange[0][3],
      "RFC": infoRange[0][4],
      "Next Update": infoRange[0][5]
    };
    for (var [key,value] of Object.entries(descriptionDictionary))
    {
      descriptionBuilder += "\n\n" + key + ": " + "\n" + value;
    }
  
  
    //confirmation with information on the event information
    var confirmer = ui.alert("Calendar Confirmation",
        "Please confirm that you would like to create the following event:\n\n\
        Start Time: " + dates[0] + "\n\n\
        End Time: " + dates[1] + "\n\n\
        Name of Event: " + infoRange[0][0] + "\n\n\
        Description: " + descriptionBuilder, ui.ButtonSet.YES_NO);
    if (confirmer != ui.Button.YES) return;
  
    //grabs calendar information and creates the event
    var calendarid = "c_b8814daee9cddd215303da19694302d34c0e09cc89551b4d979fe9d4278809eb@group.calendar.google.com";
    var calendar = CalendarApp.getCalendarById(calendarid);
  
    //https://developers.google.com/apps-script/reference/calendar/calendar#createEvent(String,Date,Date,Object) 
    var createdEvent = calendar.createEvent(infoRange[0][0], formattedDate[0], formattedDate[1], {
      //guests: eventData[0][3],
      //location: eventData[0][4],
      description: descriptionBuilder,
      sendInvites: false
    });
  
    //modify the cell at column Q or column 17, and whatever row was selected with the Event ID
    var newEventID = createdEvent.getId();
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("PROD").getRange(response, 17).setValue(newEventID);
  
    Logger.log("Created Event at: " + dates[0]);
  }
  