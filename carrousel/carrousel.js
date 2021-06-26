// let pictureList = ["media/image1.jpg",
// "media/image2.jpg",
// "media/image3.jpg", 
// ]

// let picIndex = 0
// document.getElementById('right').classList.add("hover")
// document.getElementById('left').classList.remove("hover")


// function changePictureRight() {setTimeout(function changePictureRight() {
//   disanimateRight()
//   if (picIndex >= 2) {
//     picIndex = 1}
//     imageSource1 = 'url("' + nextPic() + '")'
//     document.getElementById('picture1').style.backgroundImage = imageSource1;
//     imageSource2 = 'url("' + nextPic() + '")'
//     document.getElementById('picture2').style.backgroundImage = imageSource2;
//     document.getElementById('left').classList.add("hover")
//     if (picIndex == 3){
//       document.getElementById('right').classList.remove("hover")
//       animateRight()
//     }
// }, 5000)
// }

// function animateRight() {
//   document.getElementById('picture1').classList.add('animateRight')
//   document.getElementById('picture2').classList.add('animateRight')
// }

// function disanimateRight(){
//   document.getElementById('picture1').classList.remove('animateRight')
//   document.getElementById('picture2').classList.remove('animateRight')
// }

// function animateLeft() {
//   document.getElementById('picture1').classList.add('animateLeft')
//   document.getElementById('picture2').classList.add('animateLeft')
// }

// function disanimateLeft(){
//   document.getElementById('picture1').classList.remove('animateLeft')
//   document.getElementById('picture2').classList.remove('animateLeft')
// }

// let nextPic = (function() {
//     return function() {
//       return pictureList[++picIndex % pictureList.length];
//     }
//   }());

//   document.getElementById('right').addEventListener("click",() => {
//     animateRight() 
//     changePictureRight()
//   }) 
  
// let previousPic = (function() {
//     return function() {
//       return pictureList[--picIndex % pictureList.length];
//     }
//   }());

//   function changePictureLeft() {
//     imageSource1 = 'url("' + nextPic() + '")'
//     document.getElementById('picture1').style.backgroundImage = imageSource1;
//     imageSource2 = 'url("' + nextPic() + '")'
//     document.getElementById('picture2').style.backgroundImage = imageSource2;
//     document.getElementById('picture1').style.marginLeft = "-60vw"
//     setTimeout(function changePictureLeft() {
//     if (picIndex <= 1) {
//         picIndex = 1}
//     imageSource1 = 'url("' + nextPic() + '")'
//     document.getElementById('picture1').style.backgroundImage = imageSource1;
//     imageSource2 = 'url("' + nextPic() + '")'
//     document.getElementById('picture2').style.backgroundImage = imageSource2;
//     if (picIndex == 0){
//       document.getElementById('left').classList.remove("hover")
//     }
//     document.getElementById('right').classList.add("hover")
// }, 5000)
//   }


// document.getElementById('left').addEventListener("click",() => {
//   animateLeft() 
//   changePictureLeft()
// })

let pictureList = ["media/image1.jpg",
"media/image2.jpg",
"media/image3.jpg", 
]

document.getElementById('right').classList.add("hover")
document.getElementById('left').classList.remove("hover")

picIndex = 1 //it starts with 1 b/c the initial backgorund images are given in the css

function swipeRight() {
  setTimeout(function changePictureRight() {
    
  if (picIndex == (pictureList.length - 1)) {
    document.getElementById('right').classList.remove("hover")
  }
  if (picIndex >= 1) {
    document.getElementById('left').classList.add("hover")
  }
  if (picIndex >= (pictureList.length - 1)) {
    picIndex = (pictureList.length - 1)
  }
  imageSource1 = 'url("' + pictureList[picIndex] + '")'
  document.getElementById('picture2').style.backgroundImage = imageSource1
  if (picIndex == (pictureList.length - 1)){
    imageSource2 = 'url("' + pictureList[picIndex] + '")'
    imageSource0 = 'url("' + pictureList[picIndex - 1] + '")'
    document.getElementById('picture1').style.backgroundImage = imageSource0
  } else {imageSource2 = 'url("' + pictureList[picIndex + 1] + '")'} 
  document.getElementById('picture3').style.backgroundImage = imageSource2
  picIndex++
}, 5000)
console.log(picIndex)} //the change is performed only after the animation takes place.

function animateRight() {
  if (picIndex <= (pictureList.length - 1)) {
  document.getElementById('picture2').classList.add('animateRight2')
  document.getElementById('picture3').classList.add('animateRight3')
}}

function waitDisanimate() { 
  setTimeout(function disanimateRight(){
  document.getElementById('picture2').classList.remove('animateRight2')
  document.getElementById('picture3').classList.remove('animateRight3')
}, 5000)} //the animaton is removed after it takes place (5s)



document.getElementById('right').addEventListener("click",() => {
  animateRight()
  swipeRight()
  waitDisanimate() //the animation is removed for when the list is to the list item
})

function swipeLeft() {
  setTimeout(function changePictureLeft() {
    if (picIndex > 1 && picIndex <= pictureList.length) {
          if(picIndex == 2) {
  imageSource0 = 'url("' + pictureList[picIndex - 2] + '")'
  document.getElementById('picture1').style.backgroundImage = imageSource0
  imageSource2 = 'url("' + pictureList[picIndex - 2] + '")'
  document.getElementById('picture2').style.backgroundImage = imageSource2
  imageSource3 = 'url("' + pictureList[picIndex - 1] + '")'
  document.getElementById('picture3').style.backgroundImage = imageSource3
  document.getElementById('right').classList.add("hover")
    } else {
  imageSource2 = 'url("' + pictureList[picIndex - 2] + '")'
  document.getElementById('picture2').style.backgroundImage = imageSource2
  imageSource3 = 'url("' + pictureList[picIndex - 1] + '")'
  document.getElementById('picture3').style.backgroundImage = imageSource3
  imageSource0 = 'url("' + pictureList[picIndex - 3] + '")'
  document.getElementById('picture1').style.backgroundImage = imageSource0}
  picIndex--
  if (picIndex == 1) {
    document.getElementById('left').classList.remove("hover")
  }
}}, 5000)
console.log(picIndex)}

function animateLeft() {
  if (picIndex > 1) {
  document.getElementById('picture1').classList.add('animateLeft1')
  document.getElementById('picture2').classList.add('animateLeft2')
}}

function waitDisanimateLeft() { 
  setTimeout(function disanimateLeft(){
  document.getElementById('picture1').classList.remove('animateLeft1')
  document.getElementById('picture2').classList.remove('animateLeft2')
}, 5000)} //the animaton is removed after it takes place (5s)

document.getElementById('left').addEventListener("click",() => {
  animateLeft()
  swipeLeft()
  waitDisanimateLeft()
})

