function takeANumber(currentLine,newPerson)
{
  currentLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine)
{
  
  if(currentLine.length===0)
  {
  return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${currentLine.shift()}.`)
}

function currentLine(current)
{
  if(current.length===0)
  return "The line is currently empty."
}



var adil=[]
console.log(nowServing(adil))
console.log(adil)