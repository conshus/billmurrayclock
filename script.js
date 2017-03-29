function addZero(checkThis){
  if (checkThis < 10){
    checkThis = "0" + checkThis;
  }
  return checkThis;

}
function startClock(){
  let time = new Date();
  let hour = time.getHours();
  let mins = time.getMinutes();
  let secs = time.getSeconds();
  mins = addZero(mins);
  secs = addZero(secs);
  if (secs == 00){
    console.log("change background");
    background.style.backgroundImage = "url(http://fillmurray.com/"+hour*100+"/"+mins*20+")";
  }
  if (hour > 12){
    hour = hour - 12;
    ampm.textContent = "PM";
  }else {ampm.textContent = "AM"}

  clock.textContent = hour + ":" + mins + ":" + secs;
  setTimeout(startClock, 1000);

}
let background = document.querySelector("#billmurray");
let clock = document.querySelector("#clock");
let ampm = document.querySelector("#ampm");
let quote = document.querySelector("#quote")
//clock.textContent = "this is a clock";
quote.textContent = "this is a random quote";
setTimeout(startClock, 100);
