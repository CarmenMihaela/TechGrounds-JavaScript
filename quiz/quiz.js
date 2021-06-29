let initialDiv = document.getElementById('initial')
console.log(initialDiv)
let startButton = document.createElement('button')
let startButtonText = document.createTextNode("Start")

startButton.appendChild(startButtonText)
startButton.setAttribute("id", "start")

initialDiv.appendChild(startButton)
startButton.classList.add('btn')

function buildGameLayout() {
    initialDiv.removeChild(startButton)
    let bigContainer = document.createElement('div')
    bigContainer.classList.add('container')
    initialDiv.appendChild(bigContainer)

    let title = document.createElement('h1')
    title.style.backgroundColor = "transparent"
    let titleText = document.createTextNode("Math Problem")
    title.appendChild(titleText)
    bigContainer.appendChild(title)

    let subTitle = document.createElement('h2')
    let subTitleText = document.createTextNode("1/6")
    subTitle.appendChild(subTitleText)
    bigContainer.appendChild(subTitle)

    let question = document.createElement('h2')
    let firstNumber = 70
    let operation = "-"
    let secondNumber = 14
    question.innerHTML = "What is " + firstNumber + " " + operation + " " + secondNumber
    bigContainer.appendChild(question)

    let firstAnswerContainer = document.createElement('div')
    firstAnswerContainer.classList.add('answerContainer')
    let firstCircle = document.createElement('div')
    firstCircle.classList.add('circle1')
    let firstCircleText = document.createTextNode("1")
    firstCircle.appendChild(firstCircleText)
    firstAnswerContainer.appendChild(firstCircle)
    let firstRectangle = document.createElement('div')
    firstRectangle.classList.add('rectangle1')
    let firstAnswer = Math.floor(Math.random() * 100)
    firstRectangle.innerText = firstAnswer
    firstAnswerContainer.appendChild(firstRectangle)
    bigContainer.appendChild(firstAnswerContainer)

    let secondAnswerContainer = document.createElement('div')
    secondAnswerContainer.classList.add('answerContainer')
    let secondRectangle = document.createElement('div')
    secondRectangle.classList.add('rectangle2')
    let secondCircle = document.createElement('div')
    let secondCircleText = document.createTextNode("2")
    secondCircle.appendChild(secondCircleText)
    secondAnswerContainer.appendChild(secondCircle)
    secondCircle.classList.add('circle2')
    let secondAnswer 
    secondAnswer != firstAnswer
    secondAnswer = Math.floor(Math.random() * 100)
    secondRectangle.innerText = secondAnswer
    secondAnswerContainer.appendChild(secondRectangle)
    bigContainer.appendChild(secondAnswerContainer)

    let thirdAnswerContainer = document.createElement('div')
    thirdAnswerContainer.classList.add('answerContainer')
    let thirdCircle = document.createElement('div')
    let thirdCircleText = document.createTextNode("3")
    thirdCircle.appendChild(thirdCircleText)
    thirdAnswerContainer.appendChild(thirdCircle)
    thirdCircle.classList.add('circle3')
    let thirdRectangle = document.createElement('div')
    let thirdAnswer 
    thirdAnswer != secondAnswer != firstAnswer
    thirdAnswer = Math.floor(Math.random() * 100)
    thirdRectangle.innerText = thirdAnswer
    thirdAnswerContainer.appendChild(thirdRectangle)
    thirdRectangle.classList.add('rectangle3')
    bigContainer.appendChild(thirdAnswerContainer)

    let fourthAnswerContainer = document.createElement('div')
    fourthAnswerContainer.classList.add('answerContainer')
    let fourthCircle = document.createElement('div')
    let fourthCircleText = document.createTextNode("4")
    fourthCircle.appendChild(fourthCircleText)
    fourthAnswerContainer.appendChild(fourthCircle)
    let fourthRectangle = document.createElement('div')
    fourthRectangle.classList.add('rectangle2')
    let fourthAnswer 
    fourthAnswer != secondAnswer != firstAnswer != thirdAnswer
    fourthAnswer = Math.floor(Math.random() * 100)
    fourthRectangle.innerText = fourthAnswer
    fourthAnswerContainer.appendChild(fourthRectangle)
    bigContainer.appendChild(fourthAnswerContainer)
    fourthCircle.classList.add('circle2')
    

    let fifthAnswerContainer = document.createElement('div')
    fifthAnswerContainer.classList.add('answerContainer')
    let fifthCircle = document.createElement('div')
    let fifthCircleText = document.createTextNode("5")
    fifthCircle.classList.add('circle5')
    fifthCircle.appendChild(fifthCircleText)
    fifthAnswerContainer.appendChild(fifthCircle)
    let fifthRectangle = document.createElement('div')
    fifthRectangle.classList.add('rectangle5')
    let fifthAnswer 
    fifthAnswer != secondAnswer != firstAnswer != thirdAnswer != fourthAnswer
    fifthAnswer = Math.floor(Math.random() * 100)
    fifthRectangle.innerText = fifthAnswer
    fifthAnswerContainer.appendChild(fifthRectangle)
    bigContainer.appendChild(fifthAnswerContainer)

    let previousButton = document.createElement('button')
    let previousButtonText = document.createTextNode("previous")
    previousButton.appendChild(previousButtonText)
    document.body.appendChild(previousButton)
    previousButton.classList.add('btn')
    previousButton.setAttribute("id", "previous")

    let nextButton = document.createElement('button')
    let nextButtonText = document.createTextNode("next")
    nextButton.appendChild(nextButtonText)
    document.body.appendChild(nextButton)
    nextButton.classList.add('btn')
    nextButton.setAttribute("id", "next")

}

startButton.addEventListener("click", () => {
    buildGameLayout()
})

