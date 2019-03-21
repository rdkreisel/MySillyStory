var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}


var storyText = 'It was :insertv:, so Donald Trump turned on the TV. When he saw the face of :insertx:, he :inserty:, then :insertz:. Bob read about it on the Washington Post website and thought, "Well, that was to be expected."';
var insertV = ['11:00 p.m.',"2:00 a.m","11:00 a.m."];
var insertX = ['John McCain','Hillary Clinton','Ronald McDonald','Robert Mueller'];
var insertY = ['was enraged','smacked himself in the head','became excited','cried'];
var insertZ = ['spontaneously combusted','melted into a puddle in the Oval Office','turned into a slug and crawled away','got out his cellphone and tweeted something insulting'];

randomize.addEventListener('click',result);

function result() {
var newStory = storyText;

var vItem = randomValueFromArray(insertV);
var xItem = randomValueFromArray(insertX);
var yItem = randomValueFromArray(insertY);
var zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(':insertv:', vItem);
newStory = newStory.replace(':insertx:', xItem);
newStory = newStory.replace(':insertx:', xItem);
newStory = newStory.replace(':inserty:', yItem);
newStory = newStory.replace(':insertz:', zItem);


if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
