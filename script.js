var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM


var updateClock = function () {

var message = document.getElementById("timeEvent");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
var lolcat = document.getElementById('lolcat');

if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME…";
} else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
} else if (time < noon) {
  image = "https://dannscraftingwhims.files.wordpress.com/2016/10/blankie.jpg";
    messageText = "Good morning!";
} else if (time > evening) {
    image = "data:image/jpeg;base64,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";
    messageText = "Good Evening!";
} else {
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBxuy-URWLwUoRhwYcGV7OD_JUnS3yrguwP21z7VrNj00cWBp&s";
    messageText = "Good afternoon!";
}

message.innerText = messageText;
lolcat.src = image;


var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
     if (hours > noon){
          hours = hours - 12;
     }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

showCurrentTime();
};
updateClock();

var oneSecond = 1000; 
setInterval( updateClock, oneSecond);



var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#222";
      // text in the button should read "Party Over"
      // color of the button should be "#0A8DAB" 
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY OVER";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
      // text in the button should read "PARTY TIME!"
      // color of the button should be "#222" 
   }
};

partyTimeButton.addEventListener('click', partyEvent);


var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");



var wakeUpEvent = function()
{
    wakeupTime = wakeUpTimeSelector.value;
};

var lunchEvent = function()
{
     lunchTime = lunchTimeSelector.value;
};

var napEvent = function()
{
     napTime = napTimeSelector.value;     
};


wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

lunchTimeSelector.addEventListener('change', lunchEvent);

napTimeSelector.addEventListener('change', napEvent);


