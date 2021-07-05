let initialDiv = document.getElementById('initial')
console.log(initialDiv)
let startButton = document.createElement('button')
let startButtonText = document.createTextNode("Start")
let timesPlayed = 0
let score
let goodAnswer = 0



startButton.appendChild(startButtonText)
startButton.setAttribute("id", "start")

initialDiv.appendChild(startButton)
startButton.classList.add('btn')

function buildGameLayout() {

    clickedList = []
    let isClicked = "no" //on-off switch so that once a choice is made, it cannot be changed or counted more than once
    if(timesPlayed >0) {
        initialDiv.removeChild(score)
    }
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

    let numberOfQuestions = Math.floor(Math.random() * 10)+1 //the number of questions is between 1 and 10

    let questionIndex = 1

    subTitle.innerText = questionIndex + "/" + numberOfQuestions
    

    bigContainer.appendChild(subTitle)

    let question = document.createElement('h2')

    let operations = ["+", "-"]
    let numbers = []

    while (numbers.length < 2) {
        let number = Math.floor(Math.random() * 100) + 1
        if(numbers.indexOf(number) === -1) numbers.push(number) //an array with unique positive numbers is generated
    }


    let firstNumber = numbers[0]
    let operation = operations[Math.floor(Math.random() * operations.length)]
    let secondNumber = numbers[1]

    
    function correctAnswer(firstNumber, operation, secondNumber) {
        if (operation =="-") {
            result = firstNumber - secondNumber
        } else if (operation == "+") {
            result = firstNumber + secondNumber
         } return result
    }

    correctAnswer = correctAnswer(firstNumber, operation, secondNumber)

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

    let answers = [correctAnswer] // the correct answer is included in the possible answers array
    while (answers.length < 5) {
        let answer = Math.floor(Math.random() * 200) + 1
        answer *= Math.round(Math.random()) ? 1 : -1
        if(answers.indexOf(answer) === -1) answers.push(answer) //an array with unique positive and negative numbers is generated
    }

    let firstAnswer = answers[Math.floor(Math.random() * answers.length)] //selecting a random number from array
    firstRectangle.innerText = firstAnswer
    let firstAnswerIndex = answers.indexOf(firstAnswer)
    answers.splice(firstAnswerIndex, 1) //removing the selected value from the array

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
    secondRectangle.setAttribute("id", "secondr")
    secondCircle.setAttribute("id", "secondc")

    let secondAnswer = answers[Math.floor(Math.random() * answers.length)] //selecting a random number from array
    secondRectangle.innerText = secondAnswer
    let secondAnswerIndex = answers.indexOf(secondAnswer)
    answers.splice(secondAnswerIndex, 1) //removing the selected value from the array

    
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
    thirdRectangle.setAttribute("id", "thirdr")
    thirdCircle.setAttribute("id", "thirdc")

    
    let thirdAnswer = answers[Math.floor(Math.random() * answers.length)] //selecting a random number from array
    thirdRectangle.innerText = thirdAnswer
    let thirdAnswerIndex = answers.indexOf(thirdAnswer)
    answers.splice(thirdAnswerIndex, 1) //removing the selected value from the array

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
    fourthRectangle.setAttribute("id", "fourthr")
    fourthCircle.setAttribute("id", "fourthc")

    let fourthAnswer = answers[Math.floor(Math.random() * answers.length)] //selecting a random number from array
    fourthRectangle.innerText = fourthAnswer
    let fourthAnswerIndex = answers.indexOf(fourthAnswer)
    fourthRectangle.classList.add('rectangle2')
    answers.splice(fourthAnswerIndex, 1) //removing the selected value from the array

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

    let fifthAnswer = answers[0]
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

    let questions = []
    for (i=0; i<numberOfQuestions; i++) {
    let Question1 = new Object()
    Question1.numberOfQuestions = numberOfQuestions
    Question1.questionIndex = questionIndex
    Question1.firstNumber = firstNumber
    Question1.secondNumber = secondNumber
    Question1.operation = operation
    Question1.correctAnswer = correctAnswer(firstNumber, operation, secondNumber)
    Question1.firstAnswer = firstAnswer
    Question1.secondAnswer = secondAnswer
    Question1.thirdAnswer = thirdAnswer
    Question1.fourthAnswer = fourthAnswer
    Question1.fifthAnswer = fifthAnswer
    Question1.firstColor = window.getComputedStyle(firstRectangle, null).getPropertyValue('background-color')
    Question1.secondColor = window.getComputedStyle(secondRectangle, null).getPropertyValue('background-color')
    Question1.thirdColor = window.getComputedStyle(thirdRectangle, null).getPropertyValue('background-color')
    Question1.fourthColor = window.getComputedStyle(fourthRectangle, null).getPropertyValue('background-color')
    Question1.fifthColor = window.getComputedStyle(fifthRectangle, null).getPropertyValue('background-color')

    questions.push(Question1)
    console.log(questions)

    questionIndex++ 

    operations = ["+", "-"]
    numbers = []

    while (numbers.length < 2) {
        let number = Math.floor(Math.random() * 100) + 1
        if(numbers.indexOf(number) === -1) numbers.push(number) //an array with unique positive numbers is generated
    }


    firstNumber = numbers[0]
    operation = operations[Math.floor(Math.random() * operations.length)]
    secondNumber = numbers[1]
    
    function correctAnswer(firstNumber, operation, secondNumber) {
        if (operation =="-") {
            correctAnswer = firstNumber - secondNumber
        } else if (operation == "+") {
            correctAnswer = firstNumber + secondNumber
         } return correctAnswer
    }

}

function checkAnswerFifth(event) {
    if (isClicked == "no") {
if (event.currentTarget.innerText == correctAnswer) {
    event.currentTarget.style.backgroundColor = 'green'
    fifthCircle.style.backgroundColor = 'green'
        goodAnswer++
    isClicked = "yes"
    clickedList.push(isClicked)
    Question1.fifthColor = window.getComputedStyle(fifthRectangle, null).getPropertyValue('background-color')
} else {event.currentTarget.style.backgroundColor = 'red'
fifthCircle.style.backgroundColor = 'red'
isClicked = "yes"
clickedList.push(isClicked)
Question1.fifthColor = window.getComputedStyle(fifthRectangle, null).getPropertyValue('background-color')
if (firstAnswer == correctAnswer) {
    firstRectangle.style.backgroundColor = 'green'
    firstCircle.style.backgroundColor = 'green'
    Question1.firstColor = window.getComputedStyle(firstRectangle, null).getPropertyValue('background-color')
}
if (secondAnswer == correctAnswer) {
    secondRectangle.style.backgroundColor = 'green'
    secondCircle.style.backgroundColor = 'green'
    Question1.secondColor = window.getComputedStyle(secondRectangle, null).getPropertyValue('background-color')
}
if (thirdAnswer == correctAnswer) {
    thirdRectangle.style.backgroundColor = 'green'
    thirdCircle.style.backgroundColor = 'green'
    Question1.thirdColor = window.getComputedStyle(thirdRectangle, null).getPropertyValue('background-color')
}
if (fourthAnswer == correctAnswer) {
    fourthRectangle.style.backgroundColor = 'green'
    fourthCircle.style.backgroundColor = 'green'
    Question1.fourthColor = window.getComputedStyle(fourthRectangle, null).getPropertyValue('background-color')
}}}}

fifthRectangle.addEventListener("click", () => {
    checkAnswerFifth(event)
})
function checkAnswerFourth(event) {
    if (isClicked == "no"){
    if (event.currentTarget.innerText == correctAnswer) {
        event.currentTarget.style.backgroundColor = 'green'
        fourthCircle.style.backgroundColor = 'green'
        goodAnswer++
    isClicked = "yes"
    clickedList.push(isClicked)
    Question1.fourthColor = window.getComputedStyle(fourthRectangle, null).getPropertyValue('background-color')
    } else {event.currentTarget.style.backgroundColor = 'red'
    fourthCircle.style.backgroundColor = 'red'
    isClicked = "yes"
    clickedList.push(isClicked)
    console.log(isClicked, clickedList)
    Question1.fourthColor = window.getComputedStyle(fourthRectangle, null).getPropertyValue('background-color')
    if (firstAnswer == correctAnswer) {
        firstRectangle.style.backgroundColor = 'green'
        firstCircle.style.backgroundColor = 'green'
        Question1.firstColor = window.getComputedStyle(firstRectangle, null).getPropertyValue('background-color')
    }
    if (secondAnswer == correctAnswer) {
        secondRectangle.style.backgroundColor = 'green'
        secondCircle.style.backgroundColor = 'green'
        Question1.secondColor = window.getComputedStyle(secondRectangle, null).getPropertyValue('background-color')
    }
    if (thirdAnswer == correctAnswer) {
        thirdRectangle.style.backgroundColor = 'green'
        thirdCircle.style.backgroundColor = 'green'
        Question1.thirdColor = window.getComputedStyle(thirdRectangle, null).getPropertyValue('background-color')
    }
    if (fifthAnswer == correctAnswer) {
        fifthRectangle.style.backgroundColor = 'green'
        fifthCircle.style.backgroundColor = 'green'
        Question1.fifthColor = window.getComputedStyle(fifthRectangle, null).getPropertyValue('background-color')
    }}}}
    
    fourthRectangle.addEventListener("click", () => {
        checkAnswerFourth(event)
    })

function checkAnswerThird(event) {
    if (isClicked == "no"){
    if (event.currentTarget.innerText == correctAnswer) {
        event.currentTarget.style.backgroundColor = 'green'
        thirdCircle.style.backgroundColor = 'green'
        goodAnswer++
        isClicked = "yes"
        clickedList.push(isClicked)
        Question1.thirdColor = window.getComputedStyle(thirdRectangle, null).getPropertyValue('background-color')
    } else {event.currentTarget.style.backgroundColor = 'red'
    thirdCircle.style.backgroundColor = 'red'
    isClicked = "yes"
    clickedList.push(isClicked)
    console.log(isClicked, clickedList)
    Question1.thirdColor = window.getComputedStyle(thirdRectangle, null).getPropertyValue('background-color')
    if (firstAnswer == correctAnswer) {
        firstRectangle.style.backgroundColor = 'green'
        firstCircle.style.backgroundColor = 'green'
        Question1.firstColor = window.getComputedStyle(firstRectangle, null).getPropertyValue('background-color')
    }
    if (secondAnswer == correctAnswer) {
        secondRectangle.style.backgroundColor = 'green'
        secondCircle.style.backgroundColor = 'green'
        Question1.secondColor = window.getComputedStyle(secondRectangle, null).getPropertyValue('background-color')
    }
    if (fourthAnswer == correctAnswer) {
        fourthRectangle.style.backgroundColor = 'green'
        fourthCircle.style.backgroundColor = 'green'
        Question1.fourthColor = window.getComputedStyle(fourthRectangle, null).getPropertyValue('background-color')
    }
    if (fifthAnswer == correctAnswer) {
        fifthRectangle.style.backgroundColor = 'green'
        fifthCircle.style.backgroundColor = 'green'
        Question1.fifthColor = window.getComputedStyle(fifthRectangle, null).getPropertyValue('background-color')
    }}}}
    
thirdRectangle.addEventListener("click", () => {
        checkAnswerThird(event)
    })

function checkAnswerSecond(event) {
    if (isClicked == "no") {
    if (event.currentTarget.innerText == correctAnswer) {
        event.currentTarget.style.backgroundColor = 'green'
        secondCircle.style.backgroundColor = 'green'
        goodAnswer++
        isClicked = "yes"
        clickedList.push(isClicked)
        Question1.secondColor = window.getComputedStyle(secondRectangle, null).getPropertyValue('background-color')
    } else {event.currentTarget.style.backgroundColor = 'red'
    secondCircle.style.backgroundColor = 'red'
    isClicked = "yes"
    clickedList.push(isClicked)
    console.log(isClicked, clickedList)
    Question1.secondColor = window.getComputedStyle(secondRectangle, null).getPropertyValue('background-color')
    if (firstAnswer == correctAnswer) {
        firstRectangle.style.backgroundColor = 'green'
        firstCircle.style.backgroundColor = 'green'
        Question1.firstColor = window.getComputedStyle(firstRectangle, null).getPropertyValue('background-color')
    }
    if (thirdAnswer == correctAnswer) {
        thirdRectangle.style.backgroundColor = 'green'
        thirdCircle.style.backgroundColor = 'green'
        Question1.thirdColor = window.getComputedStyle(thirdRectangle, null).getPropertyValue('background-color')
    }
    if (fourthAnswer == correctAnswer) {
        fourthRectangle.style.backgroundColor = 'green'
        fourthCircle.style.backgroundColor = 'green'
        Question1.fourthColor = window.getComputedStyle(fourthRectangle, null).getPropertyValue('background-color')
    }
    if (fifthAnswer == correctAnswer) {
        fifthRectangle.style.backgroundColor = 'green'
        fifthCircle.style.backgroundColor = 'green'
        Question1.fifthColor = window.getComputedStyle(fifthRectangle, null).getPropertyValue('background-color')
    }}}}
    
secondRectangle.addEventListener("click", () => {
        checkAnswerSecond(event)
    })

function checkAnswerFirst(event) {
    if (isClicked == "no") {
    if (event.currentTarget.innerText == correctAnswer) {
        event.currentTarget.style.backgroundColor = 'green'
        firstCircle.style.backgroundColor = 'green'
        goodAnswer++
        isClicked = "yes"
        clickedList.push(isClicked)
        Question1.firstColor = window.getComputedStyle(firstRectangle, null).getPropertyValue('background-color')
    } else {event.currentTarget.style.backgroundColor = 'red'
    firstCircle.style.backgroundColor = 'red'
    isClicked = "yes"
    clickedList.push(isClicked)
    Question1.firstColor = window.getComputedStyle(firstRectangle, null).getPropertyValue('background-color')
    if (secondAnswer == correctAnswer) {
        secondRectangle.style.backgroundColor = 'green'
        secondCircle.style.backgroundColor = 'green'
        Question1.secondColor = window.getComputedStyle(secondRectangle, null).getPropertyValue('background-color')
    }
    if (thirdAnswer == correctAnswer) {
        thirdRectangle.style.backgroundColor = 'green'
        thirdCircle.style.backgroundColor = 'green'
        Question1.thirdColor = window.getComputedStyle(thirdRectangle, null).getPropertyValue('background-color')
    }
    if (fourthAnswer == correctAnswer) {
        fourthRectangle.style.backgroundColor = 'green'
        fourthCircle.style.backgroundColor = 'green'
        Question1.fourthColor = window.getComputedStyle(fourthRectangle, null).getPropertyValue('background-color')
    }
    if (fifthAnswer == correctAnswer) {
        fifthRectangle.style.backgroundColor = 'green'
        fifthCircle.style.backgroundColor = 'green'
        Question1.fifthColor = window.getComputedStyle(fifthRectangle, null).getPropertyValue('background-color')
    }}}}
    
firstRectangle.addEventListener("click", () => {
        checkAnswerFirst(event)
    })


function showQuestionNumber() {
    if (questionIndex <= numberOfQuestions) {
        subTitle.innerText = questionIndex + "/" + numberOfQuestions 
    }
}

function nextQuestion() {
    previousButton.addEventListener("click", () => {
        subTitle.innerText = Question1.questionIndex + "/" + Question1.numberOfQuestions
        question.innerHTML = "What is " + Question1.firstNumber + " " + Question1.operation + " " + Question1.secondNumber
        firstRectangle.innerText = Question1.firstAnswer
        secondRectangle.innerText = Question1.secondAnswer
        thirdRectangle.innerText = Question1.thirdAnswer
        fourthRectangle.innerText = Question1.fourthAnswer
        fifthRectangle.innerText = Question1.fifthAnswer
        firstCircle.style.backgroundColor = Question1.firstColor
        firstRectangle.style.backgroundColor = Question1.firstColor
        secondCircle.style.backgroundColor = Question1.secondColor
        secondRectangle.style.backgroundColor = Question1.secondColor
        thirdCircle.style.backgroundColor = Question1.thirdColor
        thirdRectangle.style.backgroundColor = Question1.thirdColor
        fourthCircle.style.backgroundColor = Question1.fourthColor
        fourthRectangle.style.backgroundColor = Question1.fourthColor
        fifthCircle.style.backgroundColor = Question1.fifthColor
        fifthRectangle.style.backgroundColor = Question1.fifthColor
        newIsClicked = "yes"
        console.log(Question1)
    })

let newIsClicked = "no"

    if (questionIndex <= numberOfQuestions) {
    operations = ["+", "-"]
    numbers = []

    while (numbers.length < 2) {
        let number = Math.floor(Math.random() * 100) + 1
        if(numbers.indexOf(number) === -1) numbers.push(number) //an array with unique positive numbers is generated
    }


    firstNumber = numbers[0]
    operation = operations[Math.floor(Math.random() * operations.length)]
    secondNumber = numbers[1]

    question.innerText = "What is " + firstNumber + " " + operation + " " + secondNumber
    questionIndex++ 
    firstRectangle.style.backgroundColor = 'white'
    secondRectangle.style.backgroundColor = 'white'
    thirdRectangle.style.backgroundColor = 'white'
    fourthRectangle.style.backgroundColor = 'white'
    fifthRectangle.style.backgroundColor = 'white'

    firstCircle.style.backgroundColor = 'white'
    secondCircle.style.backgroundColor = 'white'
    thirdCircle.style.backgroundColor = 'white'
    fourthCircle.style.backgroundColor = 'white'
    fifthCircle.style.backgroundColor = 'white'

        function correctAnswer(firstNumber, operation, secondNumber) {
            if (operation =="-") {
                result = firstNumber - secondNumber
            } else if (operation == "+") {
                result = firstNumber + secondNumber
             } return result
        }
    
        correctAnswer = correctAnswer(firstNumber, operation, secondNumber)
        answers = [correctAnswer] // the correct answer is included in the possible answers array
        while (answers.length < 5) {
            let answer = Math.floor(Math.random() * 200) + 1
            answer *= Math.round(Math.random()) ? 1 : -1
            if(answers.indexOf(answer) === -1) answers.push(answer) //an array with unique positive and negative numbers is generated
        }
    
        firstAnswer = answers[Math.floor(Math.random() * answers.length)] //selecting a random number from array
        firstRectangle.innerText = firstAnswer
        firstAnswerIndex = answers.indexOf(firstAnswer)
        answers.splice(firstAnswerIndex, 1) //removing the selected value from the array 


        secondAnswer = answers[Math.floor(Math.random() * answers.length)] //selecting a random number from array
        secondRectangle.innerText = secondAnswer
        secondAnswerIndex = answers.indexOf(secondAnswer)
        answers.splice(secondAnswerIndex, 1) //removing the selected value from the array


        thirdAnswer = answers[Math.floor(Math.random() * answers.length)] //selecting a random number from array
        thirdRectangle.innerText = thirdAnswer
        thirdAnswerIndex = answers.indexOf(thirdAnswer)
        answers.splice(thirdAnswerIndex, 1) //removing the selected value from the array


        fourthAnswer = answers[Math.floor(Math.random() * answers.length)] //selecting a random number from array
        fourthRectangle.innerText = fourthAnswer
        fourthAnswerIndex = answers.indexOf(fourthAnswer)
        fourthRectangle.classList.add('rectangle2')
        answers.splice(fourthAnswerIndex, 1) //removing the selected value from the array


        fifthAnswer = answers[0]
        fifthRectangle.innerText = fifthAnswer


        function checkAnswerFifth(event) {
            if(newIsClicked == "no") {
            if (event.currentTarget.innerText == correctAnswer) {
                event.currentTarget.style.backgroundColor = 'green'
                fifthCircle.style.backgroundColor = 'green'
                goodAnswer++
                newIsClicked = "yes"
                clickedList.push(newIsClicked)
            } else {event.currentTarget.style.backgroundColor = 'red'
            fifthCircle.style.backgroundColor = 'red'
            newIsClicked = "yes"
            clickedList.push(newIsClicked)
            if (firstAnswer == correctAnswer) {
                firstRectangle.style.backgroundColor = 'green'
                firstCircle.style.backgroundColor = 'green'
            }
            if (secondAnswer == correctAnswer) {
                secondRectangle.style.backgroundColor = 'green'
                secondCircle.style.backgroundColor = 'green'
            }
            if (thirdAnswer == correctAnswer) {
                thirdRectangle.style.backgroundColor = 'green'
                thirdCircle.style.backgroundColor = 'green'
            }
            if (fourthAnswer == correctAnswer) {
                fourthRectangle.style.backgroundColor = 'green'
                fourthCircle.style.backgroundColor = 'green'
            }}}}
            
            fifthRectangle.addEventListener("click", () => {
                checkAnswerFifth(event)
            })
            function checkAnswerFourth(event) {
                if(newIsClicked == "no") {
                if (event.currentTarget.innerText == correctAnswer) {
                    event.currentTarget.style.backgroundColor = 'green'
                    fourthCircle.style.backgroundColor = 'green'
                    goodAnswer++
                    newIsClicked = "yes"
                    clickedList.push(newIsClicked)
                } else {event.currentTarget.style.backgroundColor = 'red'
                fourthCircle.style.backgroundColor = 'red'
                newIsClicked = "yes"
                clickedList.push(newIsClicked)
                if (firstAnswer == correctAnswer) {
                    firstRectangle.style.backgroundColor = 'green'
                    firstCircle.style.backgroundColor = 'green'
                }
                if (secondAnswer == correctAnswer) {
                    secondRectangle.style.backgroundColor = 'green'
                    secondCircle.style.backgroundColor = 'green'
                }
                if (thirdAnswer == correctAnswer) {
                    thirdRectangle.style.backgroundColor = 'green'
                    thirdCircle.style.backgroundColor = 'green'
                }
                if (fifthAnswer == correctAnswer) {
                    fifthRectangle.style.backgroundColor = 'green'
                    fifthCircle.style.backgroundColor = 'green'
                }}}}
                
                fourthRectangle.addEventListener("click", () => {
                    checkAnswerFourth(event)
                })
            
            function checkAnswerThird(event) {
                if(newIsClicked == "no") {
                if (event.currentTarget.innerText == correctAnswer) {
                    event.currentTarget.style.backgroundColor = 'green'
                    thirdCircle.style.backgroundColor = 'green'
                    goodAnswer++
                    newIsClicked = "yes"
                    clickedList.push(newIsClicked)
                } else {event.currentTarget.style.backgroundColor = 'red'
                thirdCircle.style.backgroundColor = 'red'
                newIsClicked = "yes"
                clickedList.push(newIsClicked)
                if (firstAnswer == correctAnswer) {
                    firstRectangle.style.backgroundColor = 'green'
                    firstCircle.style.backgroundColor = 'green'
                }
                if (secondAnswer == correctAnswer) {
                    secondRectangle.style.backgroundColor = 'green'
                    secondCircle.style.backgroundColor = 'green'
                }
                if (fourthAnswer == correctAnswer) {
                    fourthRectangle.style.backgroundColor = 'green'
                    fourthCircle.style.backgroundColor = 'green'
                }
                if (fifthAnswer == correctAnswer) {
                    fifthRectangle.style.backgroundColor = 'green'
                    fifthCircle.style.backgroundColor = 'green'
                }}}}
                
            thirdRectangle.addEventListener("click", () => {
                    checkAnswerThird(event)
                })
            
            function checkAnswerSecond(event) {
                if(newIsClicked == "no") {
                if (event.currentTarget.innerText == correctAnswer) {
                    event.currentTarget.style.backgroundColor = 'green'
                    secondCircle.style.backgroundColor = 'green'
                    goodAnswer++
                    newIsClicked = "yes"
                    clickedList.push(newIsClicked)
                } else {event.currentTarget.style.backgroundColor = 'red'
                secondCircle.style.backgroundColor = 'red'
                newIsClicked = "yes"
                clickedList.push(newIsClicked)
                if (firstAnswer == correctAnswer) {
                    firstRectangle.style.backgroundColor = 'green'
                    firstCircle.style.backgroundColor = 'green'
                }
                if (thirdAnswer == correctAnswer) {
                    thirdRectangle.style.backgroundColor = 'green'
                    thirdCircle.style.backgroundColor = 'green'
                }
                if (fourthAnswer == correctAnswer) {
                    fourthRectangle.style.backgroundColor = 'green'
                    fourthCircle.style.backgroundColor = 'green'
                }
                if (fifthAnswer == correctAnswer) {
                    fifthRectangle.style.backgroundColor = 'green'
                    fifthCircle.style.backgroundColor = 'green'
                }}}}
                
            secondRectangle.addEventListener("click", () => {
                    checkAnswerSecond(event)
                })
            
            function checkAnswerFirst(event) {
                if(newIsClicked == "no") {
                if (event.currentTarget.innerText == correctAnswer) {
                    event.currentTarget.style.backgroundColor = 'green'
                    firstCircle.style.backgroundColor = 'green'
                    goodAnswer++
                    newIsClicked = "yes"
                    clickedList.push(newIsClicked)
                } else {event.currentTarget.style.backgroundColor = 'red'
                firstCircle.style.backgroundColor = 'red'
                newIsClicked = "yes"
                clickedList.push(newIsClicked)
                console.log(correctAnswer)
                if (secondAnswer == correctAnswer) {
                    secondRectangle.style.backgroundColor = 'green'
                    secondCircle.style.backgroundColor = 'green'
                    
                }
                if (thirdAnswer == correctAnswer) {
                    thirdRectangle.style.backgroundColor = 'green'
                    thirdCircle.style.backgroundColor = 'green'
                }
                if (fourthAnswer == correctAnswer) {
                    fourthRectangle.style.backgroundColor = 'green'
                    fourthCircle.style.backgroundColor = 'green'
                }
                if (fifthAnswer == correctAnswer) {
                    fifthRectangle.style.backgroundColor = 'green'
                    fifthCircle.style.backgroundColor = 'green'
                }}}}
                
            firstRectangle.addEventListener("click", () => {
                    checkAnswerFirst(event)
                    
                })

            
            }else if (clickedList.length == numberOfQuestions) {initialDiv.removeChild(bigContainer)
                        document.body.removeChild(previousButton)
                        document.body.removeChild(nextButton)

                        score = document.createElement('p')
                        score.style.backgroundColor = "transparent"
                        let message
                        if(goodAnswer > numberOfQuestions) {
                            goodAnswer = numberOfQuestions
                        }
                        if (goodAnswer > 0){
                            message = "Congratulations! You answered correctly to " + goodAnswer + " out of " + numberOfQuestions + " questions."
                        }
                        if (goodAnswer == 0){
                            message = "You did not answer correctly to any of the questions. Try again!"
                        }

                        score.innerText = message
                        initialDiv.appendChild(score)
                        timesPlayed++

                        initialDiv.appendChild(startButton)
                        startButton.innerText = "Restart"

}
    
}


nextButton.addEventListener("click", () => {
    showQuestionNumber()
    nextQuestion()
})

}

startButton.addEventListener("click", () => {
    buildGameLayout()
})


