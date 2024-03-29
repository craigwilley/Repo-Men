const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// Selecting DOM elements
const btn = document.querySelector(`.btn-open`);
const form = document.querySelector(`.fact-form`);
const factsList = document.querySelector(`.facts-list`);

//Create DOM elements: Render facts in list
factsList.innerHTML = ``;

loadFacts();
async function loadFacts() {
  const res = await fetch(
    "https://ukqlugyetshtxoodfhoc.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrcWx1Z3lldHNodHhvb2RmaG9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc2MzgxMDcsImV4cCI6MTk5MzIxNDEwN30.E2owPgd3V0wURxkVB6VklqC5dx6nn1b1_o5rhi5r2PU",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrcWx1Z3lldHNodHhvb2RmaG9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc2MzgxMDcsImV4cCI6MTk5MzIxNDEwN30.E2owPgd3V0wURxkVB6VklqC5dx6nn1b1_o5rhi5r2PU",
      },
    }
  );
  const data = await res.json();
  // const filteredData = data.filter((fact) => fact.category === `technology`);
  createFactsList(data);
}
function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
<p>
${fact.text}
<a
class="source"
href="${fact.source}"
target="_blank"
>(Source)</a>
</p>
<span class="tag" style="background-color:#3b82f6">${fact.category}</span>
</li>`
  );

  // console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// const htmlArr = initialFacts.map(
//   (fact) => `<li class="fact">${fact.text}</li>`
// );
// const html = htmlArr.join(``);
// factsList.insertAdjacentHTML(`afterbegin`, html);

//Toggle form visibility
btn.addEventListener(`click`, function () {
  if (form.classList.contains(`hidden`)) {
    form.classList.remove(`hidden`);
    btn.textContent = `Close`;
  } else {
    form.classList.add(`hidden`);
    btn.textContent = `Share a fact`;
  }
});

console.log([7, 63, 6, -23, 11].filter((el) => el > 10));
