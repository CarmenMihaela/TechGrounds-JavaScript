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
    bigContainer.appendChild(subTitle)
    let question = document.createElement('h2')
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
    let numberOfQuestions = Math.floor(Math.random() * 10)+1 //the number of questions is between 1 and 10
    let questionIndex = 1



    for (i=0; i<numberOfQuestions; i++) {
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
                 correctAnswer = firstNumber - secondNumber
             } else if (operation == "+") {
                 correctAnswer = firstNumber + secondNumber
              } return correctAnswer
         }

         correctAnswer = correctAnswer(firstNumber, operation,secondNumber)

         let answers = [correctAnswer] // the correct answer is included in the possible answers array
        while (answers.length < 5) {
        let answer = Math.floor(Math.random() * 200) + 1
        answer *= Math.round(Math.random()) ? 1 : -1
        if(answers.indexOf(answer) === -1) answers.push(answer) //an array with unique positive and negative numbers is generated
    }

    let firstAnswer = answers[Math.floor(Math.random() * answers.length)] //selecting a random number from array
    let firstAnswerIndex = answers.indexOf(firstAnswer)
    answers.splice(firstAnswerIndex, 1) //removing the selected value from the array

    let secondAnswer = answers[Math.floor(Math.random() * answers.length)] //selecting a random number from array
    let secondAnswerIndex = answers.indexOf(secondAnswer)
    answers.splice(secondAnswerIndex, 1) //removing the selected value from the array

    let thirdAnswer = answers[Math.floor(Math.random() * answers.length)] //selecting a random number from array
    
    let thirdAnswerIndex = answers.indexOf(thirdAnswer)
    answers.splice(thirdAnswerIndex, 1) //removing the selected value from the array

    let fourthAnswer = answers[Math.floor(Math.random() * answers.length)] //selecting a random number from array
    
    let fourthAnswerIndex = answers.indexOf(fourthAnswer)
    answers.splice(fourthAnswerIndex, 1) //removing the selected value from the array

    let fifthAnswer = answers[0]

    let Question = new Object()
    Question.numberOfQuestions = numberOfQuestions
    Question.questionIndex = questionIndex
    Question.firstNumber = firstNumber
    Question.secondNumber = secondNumber
    Question.operation = operation
    Question.correctAnswer = correctAnswer
    Question.firstAnswer = firstAnswer
    Question.secondAnswer = secondAnswer
    Question.thirdAnswer = thirdAnswer
    Question.fourthAnswer = fourthAnswer
    Question.fifthAnswer = fifthAnswer
    Question.firstColor = window.getComputedStyle(firstRectangle, null).getPropertyValue('background-color')
    Question.secondColor = window.getComputedStyle(secondRectangle, null).getPropertyValue('background-color')
    Question.thirdColor = window.getComputedStyle(thirdRectangle, null).getPropertyValue('background-color')
    Question.fourthColor = window.getComputedStyle(fourthRectangle, null).getPropertyValue('background-color')
    Question.fifthColor = window.getComputedStyle(fifthRectangle, null).getPropertyValue('background-color')

    questions.push(Question)
    console.log(questions)

    questionIndex++ 


    subTitle.innerText = questions[0].questionIndex + "/" + numberOfQuestions
    question.innerHTML = "What is " + questions[0].firstNumber + " " + questions[0].operation + " " + questions[0].secondNumber
    firstRectangle.innerText = questions[0].firstAnswer
    secondRectangle.innerText = questions[0].secondAnswer
    thirdRectangle.innerText = questions[0].thirdAnswer
    fourthRectangle.innerText = questions[0].fourthAnswer
    fifthRectangle.innerText = questions[0].fifthAnswer

}

function checkAnswerFifth(event) {
    if (isClicked == "no") {
if (event.currentTarget.innerText == questions[0].correctAnswer) {
    event.currentTarget.style.backgroundColor = 'green'
    fifthCircle.style.backgroundColor = 'green'
        goodAnswer++
    isClicked = "yes"
    clickedList.push(isClicked)
    questions[0].fifthColor = window.getComputedStyle(fifthRectangle, null).getPropertyValue('background-color')
} else {event.currentTarget.style.backgroundColor = 'red'
fifthCircle.style.backgroundColor = 'red'
isClicked = "yes"
clickedList.push(isClicked)
questions[0].fifthColor = window.getComputedStyle(fifthRectangle, null).getPropertyValue('background-color')
if (questions[0].firstAnswer == questions[0].correctAnswer) {
    firstRectangle.style.backgroundColor = 'green'
    firstCircle.style.backgroundColor = 'green'
    questions[0].firstColor = window.getComputedStyle(firstRectangle, null).getPropertyValue('background-color')
}
if (questions[0].secondAnswer == questions[0].correctAnswer) {
    secondRectangle.style.backgroundColor = 'green'
    secondCircle.style.backgroundColor = 'green'
     questions[0].secondColor = window.getComputedStyle(secondRectangle, null).getPropertyValue('background-color')
}
if (questions[0].thirdAnswer == questions[0].correctAnswer) {
    thirdRectangle.style.backgroundColor = 'green'
    thirdCircle.style.backgroundColor = 'green'
     questions[0].thirdColor = window.getComputedStyle(thirdRectangle, null).getPropertyValue('background-color')
}
if (questions[0].fourthAnswer == questions[0].correctAnswer) {
    fourthRectangle.style.backgroundColor = 'green'
    fourthCircle.style.backgroundColor = 'green'
     questions[0].fourthColor = window.getComputedStyle(fourthRectangle, null).getPropertyValue('background-color')
}}}}

fifthRectangle.addEventListener("click", () => {
    checkAnswerFifth(event)
})
function checkAnswerFourth(event) {
    if (isClicked == "no"){
    if (event.currentTarget.innerText == questions[0].correctAnswer) {
        event.currentTarget.style.backgroundColor = 'green'
        fourthCircle.style.backgroundColor = 'green'
        goodAnswer++
    isClicked = "yes"
    clickedList.push(isClicked)
     questions[0].fourthColor = window.getComputedStyle(fourthRectangle, null).getPropertyValue('background-color')
    } else {event.currentTarget.style.backgroundColor = 'red'
    fourthCircle.style.backgroundColor = 'red'
    isClicked = "yes"
    clickedList.push(isClicked)
    console.log(isClicked, clickedList)
     questions[0].fourthColor = window.getComputedStyle(fourthRectangle, null).getPropertyValue('background-color')
    if (questions[0].firstAnswer == questions[0].correctAnswer) {
        firstRectangle.style.backgroundColor = 'green'
        firstCircle.style.backgroundColor = 'green'
         questions[0].firstColor = window.getComputedStyle(firstRectangle, null).getPropertyValue('background-color')
    }
    if (questions[0].secondAnswer == questions[0].correctAnswer) {
        secondRectangle.style.backgroundColor = 'green'
        secondCircle.style.backgroundColor = 'green'
         questions[0].secondColor = window.getComputedStyle(secondRectangle, null).getPropertyValue('background-color')
    }
    if (questions[0].thirdAnswer == questions[0].correctAnswer) {
        thirdRectangle.style.backgroundColor = 'green'
        thirdCircle.style.backgroundColor = 'green'
         questions[0].thirdColor = window.getComputedStyle(thirdRectangle, null).getPropertyValue('background-color')
    }
    if (questions[0].fifthAnswer == questions[0].correctAnswer) {
        fifthRectangle.style.backgroundColor = 'green'
        fifthCircle.style.backgroundColor = 'green'
         questions[0].fifthColor = window.getComputedStyle(fifthRectangle, null).getPropertyValue('background-color')
    }}}}
    
    fourthRectangle.addEventListener("click", () => {
        checkAnswerFourth(event)
    })

function checkAnswerThird(event) {
    if (isClicked == "no"){
    if (event.currentTarget.innerText == questions[0].correctAnswer) {
        event.currentTarget.style.backgroundColor = 'green'
        thirdCircle.style.backgroundColor = 'green'
        goodAnswer++
        isClicked = "yes"
        clickedList.push(isClicked)
         questions[0].thirdColor = window.getComputedStyle(thirdRectangle, null).getPropertyValue('background-color')
    } else {event.currentTarget.style.backgroundColor = 'red'
    thirdCircle.style.backgroundColor = 'red'
    isClicked = "yes"
    clickedList.push(isClicked)
     questions[0].thirdColor = window.getComputedStyle(thirdRectangle, null).getPropertyValue('background-color')
    if (questions[0].firstAnswer == questions[0].correctAnswer) {
        firstRectangle.style.backgroundColor = 'green'
        firstCircle.style.backgroundColor = 'green'
         questions[0].firstColor = window.getComputedStyle(firstRectangle, null).getPropertyValue('background-color')
    }
    if (questions[0].secondAnswer == questions[0].correctAnswer) {
        secondRectangle.style.backgroundColor = 'green'
        secondCircle.style.backgroundColor = 'green'
         questions[0].secondColor = window.getComputedStyle(secondRectangle, null).getPropertyValue('background-color')
    }
    if (questions[0].fourthAnswer == questions[0].correctAnswer) {
        fourthRectangle.style.backgroundColor = 'green'
        fourthCircle.style.backgroundColor = 'green'
         questions[0].fourthColor = window.getComputedStyle(fourthRectangle, null).getPropertyValue('background-color')
    }
    if (questions[0].fifthAnswer == questions[0].correctAnswer) {
        fifthRectangle.style.backgroundColor = 'green'
        fifthCircle.style.backgroundColor = 'green'
         questions[0].fifthColor = window.getComputedStyle(fifthRectangle, null).getPropertyValue('background-color')
    }}}}
    
thirdRectangle.addEventListener("click", () => {
        checkAnswerThird(event)
    })

function checkAnswerSecond(event) {
    if (isClicked == "no") {
    if (event.currentTarget.innerText == questions[0].correctAnswer) {
        event.currentTarget.style.backgroundColor = 'green'
        secondCircle.style.backgroundColor = 'green'
        goodAnswer++
        isClicked = "yes"
        clickedList.push(isClicked)
         questions[0].secondColor = window.getComputedStyle(secondRectangle, null).getPropertyValue('background-color')
    } else {event.currentTarget.style.backgroundColor = 'red'
    secondCircle.style.backgroundColor = 'red'
    isClicked = "yes"
    clickedList.push(isClicked)
     questions[0].secondColor = window.getComputedStyle(secondRectangle, null).getPropertyValue('background-color')
    if (questions[0].firstAnswer == questions[0].correctAnswer) {
        firstRectangle.style.backgroundColor = 'green'
        firstCircle.style.backgroundColor = 'green'
         questions[0].firstColor = window.getComputedStyle(firstRectangle, null).getPropertyValue('background-color')
    }
    if (questions[0].thirdAnswer == questions[0].correctAnswer) {
        thirdRectangle.style.backgroundColor = 'green'
        thirdCircle.style.backgroundColor = 'green'
         questions[0].thirdColor = window.getComputedStyle(thirdRectangle, null).getPropertyValue('background-color')
    }
    if (questions[0].fourthAnswer == questions[0].correctAnswer) {
        fourthRectangle.style.backgroundColor = 'green'
        fourthCircle.style.backgroundColor = 'green'
         questions[0].fourthColor = window.getComputedStyle(fourthRectangle, null).getPropertyValue('background-color')
    }
    if (questions[0].fifthAnswer == questions[0].correctAnswer) {
        fifthRectangle.style.backgroundColor = 'green'
        fifthCircle.style.backgroundColor = 'green'
         questions[0].fifthColor = window.getComputedStyle(fifthRectangle, null).getPropertyValue('background-color')
    }}}}
    
secondRectangle.addEventListener("click", () => {
        checkAnswerSecond(event)
    })

function checkAnswerFirst(event) {
    if (isClicked == "no") {
    if (event.currentTarget.innerText == questions[0].correctAnswer) {
        event.currentTarget.style.backgroundColor = 'green'
        firstCircle.style.backgroundColor = 'green'
        goodAnswer++
        isClicked = "yes"
        clickedList.push(isClicked)
         questions[0].firstColor = window.getComputedStyle(firstRectangle, null).getPropertyValue('background-color')
    } else {event.currentTarget.style.backgroundColor = 'red'
    firstCircle.style.backgroundColor = 'red'
    isClicked = "yes"
    clickedList.push(isClicked)
     questions[0].firstColor = window.getComputedStyle(firstRectangle, null).getPropertyValue('background-color')
    if (questions[0].secondAnswer == questions[0].correctAnswer) {
        secondRectangle.style.backgroundColor = 'green'
        secondCircle.style.backgroundColor = 'green'
         questions[0].secondColor = window.getComputedStyle(secondRectangle, null).getPropertyValue('background-color')
    }
    if (questions[0].thirdAnswer == questions[0].correctAnswer) {
        thirdRectangle.style.backgroundColor = 'green'
        thirdCircle.style.backgroundColor = 'green'
         questions[0].thirdColor = window.getComputedStyle(thirdRectangle, null).getPropertyValue('background-color')
    }
    if (questions[0].fourthAnswer == questions[0].correctAnswer) {
        fourthRectangle.style.backgroundColor = 'green'
        fourthCircle.style.backgroundColor = 'green'
         questions[0].fourthColor = window.getComputedStyle(fourthRectangle, null).getPropertyValue('background-color')
    }
    if (questions[0].fifthAnswer == questions[0].correctAnswer) {
        fifthRectangle.style.backgroundColor = 'green'
        fifthCircle.style.backgroundColor = 'green'
         questions[0].fifthColor = window.getComputedStyle(fifthRectangle, null).getPropertyValue('background-color')
    }}}}
    
firstRectangle.addEventListener("click", () => {
        checkAnswerFirst(event)
    })


function nextQuestion() {


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

previousButton.addEventListener("click", () => {
    subTitle.innerText = questions[questionIndex-1].questionIndex + "/" + questions[questionIndex-1].numberOfQuestions
    question.innerHTML = "What is " +  questions[questionIndex-1].firstNumber + " " +  questions[questionIndex-1].operation + " " +  questions[questionIndex-1].secondNumber
    firstRectangle.innerText =  questions[questionIndex-1].firstAnswer
    secondRectangle.innerText =  questions[questionIndex-1].secondAnswer
    thirdRectangle.innerText =  questions[questionIndex-1].thirdAnswer
    fourthRectangle.innerText =  questions[questionIndex-1].fourthAnswer
    fifthRectangle.innerText =  questions[questionIndex-1].fifthAnswer
    firstCircle.style.backgroundColor =  questions[questionIndex-1].firstColor
    firstRectangle.style.backgroundColor =  questions[questionIndex-1].firstColor
    secondCircle.style.backgroundColor =  questions[questionIndex-1].secondColor
    secondRectangle.style.backgroundColor =  questions[questionIndex-1].secondColor
    thirdCircle.style.backgroundColor =  questions[questionIndex-1].thirdColor
    thirdRectangle.style.backgroundColor =  questions[questionIndex-1].thirdColor
    fourthCircle.style.backgroundColor =  questions[questionIndex-1].fourthColor
    fourthRectangle.style.backgroundColor =  questions[questionIndex-1].fourthColor
    fifthCircle.style.backgroundColor =  questions[questionIndex-1].fifthColor
    fifthRectangle.style.backgroundColor =  questions[questionIndex-1].fifthColor
    newIsClicked = "yes"
    console.log( questions[questionIndex-1])
})
    
}


nextButton.addEventListener("click", () => {
    nextQuestion()
})

}

startButton.addEventListener("click", () => {
    buildGameLayout()
})


