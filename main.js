var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}


var storyText = 'It was :insertw: fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
var insertW = [105,74,-10];
var insertX = ['an elephant','Father Christmas','Frosty the Snowman'];
var insertY = ['the soup kitchen','Disneyland','the White House','the North Pole'];
var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click',result);

function result() {
var newStory = storyText;

var wItem = randomValueFromArray(insertW);
var xItem = randomValueFromArray(insertX);
var yItem = randomValueFromArray(insertY);
var zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(':insertw:', wItem);
newStory = newStory.replace(':insertx:', xItem);
newStory = newStory.replace(':insertx:', xItem);
newStory = newStory.replace(':inserty:', yItem);
newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(wItem <= 25) {
    newStory = newStory.replace('hot','bitterly cold');
  }

  if(wItem <= 0) {
    newStory = newStory.replace(zItem,'froze into a huge block of ice');
  }

 if (wItem >= 70 && wItem < 85 ){
 	newStory = newStory.replace(zItem, 'enjoyed a nice dinner at a sidewalk cafe');
 }

 if (wItem >=70 && wItem < 85){
 	newStory = newStory.replace('hot','pleasant');
 }

if (xItem == 'an elephant'){
  newStory = newStory.replace('300','12,000');
}
  if(document.getElementById('uk').checked) {
    var weight = Math.round(300/14) + ' stone';
    var temperature =  Math.round((94-32) * 5 / 9) + ' degrees centigrade';
	newStory = newStory.replace('300 pounds',weight);
	newStory = newStory.replace('94 fahrenheit',temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
