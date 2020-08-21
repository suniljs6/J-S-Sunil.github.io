var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var controlPanelFlag = false;
var openedReadMe = false;
var images = [
  {
    image: 'images/track-iris.jpg',
    link: "https://github.com/suniljs6/Track-eye-iris-and-draw-the-movements-accordingly",
    text: "Track Eye Iris and Draw movements accordingly"
  },
  {
    image: "images/hand_gesture.jpeg",
    link: "https://github.com/suniljs6/hand-gesture-recognition-system-using-matlab",
    text: "Hand Gesture Recognition system"
  },
  {
    image: "images/tollbooth.jpeg",
    link: "https://github.com/suniljs6/automated-tollbooth-system",
    text: "Automated tollbooth system"
  },
  {
    image: "images/automated-plant.jpg",
    link: "https://github.com/suniljs6/automatic-watering-system-using-django",
    text: "Automated Plant monitoring and watering system "
  }
];
var index = 0;
var once = false;
function display_time() {
  if (!this.once) {
    document.getElementById("carouselImage").src = this.images[0].image;
    document.getElementById("linkProject").href = this.images[0].link;
    document.getElementById("linkProject").text = this.images[0].text;
    this.once = !this.once
  }
  const x = new Date();
  const time = months[x.getMonth()] + " " + x.getDate() + " " + x.getHours() + ":" + x.getMinutes();
  document.getElementById('dateAndTime').innerHTML = time;
  display_c();
}

function show(element) {
  var elementToHide = document.getElementById(element);
    elementToHide.style.display = "inline";
    elementToHide.style.opacity = 0;
    var intervalId = setInterval(function(){
        if(elementToHide.style.opacity >= 1)
        {
          clearInterval(intervalId);
        }else{
          elementToHide.style.opacity = parseFloat(elementToHide.style.opacity) + 0.1;
        }
      },50);
}

function hide(element) {
  var elementToHide = document.getElementById(element);
  elementToHide.style.opacity = 1;
  var intervalId = setInterval(function(){
      if(elementToHide.style.opacity <= 0)
      {
        elementToHide.style.display = "none";
        clearInterval(intervalId);
      }else{
        elementToHide.style.opacity = parseFloat(elementToHide.style.opacity) - 0.1;
      }
    },50);
}

function showPdf() {
    this.show('pdfViewer');
}

function hidePdf() {
   if (this.openedReadMe){
    document.getElementById('pdfViewer').style.display = "none";
    document.getElementById('file').style.display = "inline";
    this.openedReadMe = !this.openedReadMe;
   } else {
    this.hide('pdfViewer');
   }
}

function shutDown() {
    var elementToHide = document.getElementById('body');
    elementToHide.style.opacity = 1;
    var intervalId = setInterval(function(){
        console.log("shutdown")
        if(elementToHide.style.opacity <= 0)
        {
          elementToHide.style.opacity = 0;
          clearInterval(intervalId);
        }else{
          elementToHide.style.opacity = parseFloat(elementToHide.style.opacity) - 0.1;
        }
      },70);
    elementToHide.style.backgroundImage = "url('images/Black_screen.jpg')";
    return true;
}

function restart() {
    const x = shutDown();
    if (x) {
        var elementToHide = document.getElementById('body');
        elementToHide.style.opacity = 0;
        elementToHide.style.backgroundImage = "url('images/wallpaper.png')";
        var intervalId = setInterval(function(){
            if(elementToHide.style.opacity >= 1)
            {
                elementToHide.style.opacity = 1;
            clearInterval(intervalId);
            }else{
            elementToHide.style.opacity = parseFloat(elementToHide.style.opacity) + 0.1;
            }
        },100);
    }
}

function showControlPanel() {
  var element = document.getElementById('control-panel-div');
  if (!this.controlPanelFlag){
    element.style.display = "inline";
  } else {
    element.style.display = "none";
  }
  this.controlPanelFlag = !this.controlPanelFlag;

}

function openBrowser(){
  this.show('browser');
}

function closeBrowser() {
  this.hide('browser');
}

function openFile() {
  this.show('file');
}

function closeFile() {
  this.hide('file');
}

function home() {
  document.getElementById('Desktop').style.display = "none";
  document.getElementById('Projects').style.display = "none";
  document.getElementById('Home').style.display = "flex";
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  document.getElementById('homeButton').classList.add("active");
  document.getElementById("windowName").innerHTML = "Home";
}

function desktop() {
  document.getElementById('Desktop').style.display = "flex";
  document.getElementById('Projects').style.display = "none";
  document.getElementById('Home').style.display = "none";
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  document.getElementById('desktopButton').classList.add("active");
  document.getElementById("windowName").innerHTML = "Desktop";
}

function showDesktopPdf() {
  document.getElementById('file').style.display = "none";
  this.show('pdfViewer');
  this.openedReadMe = true;
}

function projects() {
  document.getElementById('Desktop').style.display = "none";
  document.getElementById('Projects').style.display = "flex";
  document.getElementById('Home').style.display = "none";
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  document.getElementById('homeButton').classList.add("active");
  document.getElementById("windowName").innerHTML = "Projects";
}

function next() {
  if (this.index+1 > this.images.length ){
    this.index = 0;
  } else {
    this.index += 1;
  }
  document.getElementById("carouselImage").src = this.images[this.index].image;
  document.getElementById("linkProject").href = this.images[this.index].link;
  document.getElementById("linkProject").text = this.images[this.index].text;
}

function prev() {
  if (this.index-1 < 0) {
    this.index = this.images.length-1;
  } else {
    this.index -= 1; 
  }
  document.getElementById("carouselImage").src = this.images[this.index].image;
  document.getElementById("linkProject").href = this.images[this.index].link;
  document.getElementById("linkProject").text = this.images[this.index].text;
}