x=0
y=0
n=0

while n >= 0:
  move="move"
  move=input("Which way do you want to go?")
  if move =="exit":
    print("Program exited. You left the grid at " + f"({x},{y})")
    n -= 1
  elif move == "n":
    x += 1
    if (x>4):
      print("Program exited. You left the grid at " + f"({x},{y})")
      n -= 1
  elif move == "s":
    x -= 1
    if (x<-4):
      print("Program exited. You left the grid at " + f"({x},{y})")
      n -= 1
  elif move == "e":
    y += 1
    if (y>4):
      print("Program exited. You left the grid at " + f"({x},{y})")
      n -= 1
  elif move == "w":
    y -= 1
    if (y<-4):
      print("Program exited. You left the grid at " + f"({x},{y})")
      n -=1
  elif move != "w" or move != "n" or move != "s" or move != "e" or move != "exit":
    print("Input Error")
  else:
    print(f"({x},{y})")




