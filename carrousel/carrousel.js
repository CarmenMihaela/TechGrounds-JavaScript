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

picIndex = 1

function swipeRight() {
  setTimeout(function changePictureRight() {
  if (picIndex == 2) {
    document.getElementById('right').classList.remove("hover")
  }
  if (picIndex >= 1) {
    document.getElementById('left').classList.add("hover")
  }
  if (picIndex >= 2) {
    picIndex = 2
  }
  imageSource1 = 'url("' + pictureList[picIndex] + '")'
  document.getElementById('picture2').style.backgroundImage = imageSource1
  if (picIndex == 2){
    imageSource2 = 'url("' + pictureList[picIndex] + '")'
  } else {imageSource2 = 'url("' + pictureList[picIndex + 1] + '")'} 
  document.getElementById('picture3').style.backgroundImage = imageSource2
  picIndex++
}, 5000)}

function animateRight() {
  if (picIndex<=2) {
  document.getElementById('picture2').classList.add('animateRight2')
  document.getElementById('picture3').classList.add('animateRight3')
}}

function waitDisanimate() { 
  setTimeout(function disanimateRight(){
  document.getElementById('picture2').classList.remove('animateRight2')
  document.getElementById('picture3').classList.remove('animateRight3')
}, 5000)}


document.getElementById('right').addEventListener("click",() => {
  animateRight()
  swipeRight()
  waitDisanimate()
})

