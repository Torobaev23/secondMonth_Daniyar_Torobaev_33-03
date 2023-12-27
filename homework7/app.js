const  question = document.querySelector('.quest')
const btn = document.querySelector('.btn')
const answer = document.querySelector('.answer')

const result = () => {
   const check =  answer.classList.toggle('answer')

    if (check) {
        btn.innerHTML = 'показать ответ'
    } else {
        btn.innerHTML = 'скрыть ответ'
    }
}
btn.addEventListener('click',result)


const  question2 = document.querySelector('.quest-2')
const btn2 = document.querySelector('.btn-2')
const answer2 = document.querySelector('.answer-2')
const result2 = () => {
    const check2 =  answer2.classList.toggle('answer-2')

    if (check2) {
        btn2.innerHTML = 'показать ответ'
    } else {
        btn2.innerHTML = 'скрыть ответ'
    }
}
btn2.addEventListener('click',result2)


const  question3 = document.querySelector('.quest-3')
const btn3 = document.querySelector('.btn-3')
const answer3 = document.querySelector('.answer-3')
const result3 = () => {
    const check3 =  answer3.classList.toggle('answer-3')
    if (check3) {
        btn3.innerHTML = 'показать ответ'
    } else {
        btn3.innerHTML = 'скрыть ответ'
    }
}
btn3.addEventListener('click',result3)


const  question4 = document.querySelector('.quest-4')
const btn4 = document.querySelector('.btn-4')
const answer4 = document.querySelector('.answer-4')
const result4 = () => {
    const check4 =  answer4.classList.toggle('answer-4')
    if (check4) {
        btn4.innerHTML = 'показать ответ'
    } else {
        btn4.innerHTML = 'скрыть ответ'
    }
}
btn4.addEventListener('click',result4)


const  question5 = document.querySelector('.quest-5')
const btn5 = document.querySelector('.btn-5')
const answer5 = document.querySelector('.answer-5')
const result5 = () => {
    const check5 =  answer5.classList.toggle('answer-5')
    if (check5) {
        btn5.innerHTML = 'показать ответ'
    } else {
        btn5.innerHTML = 'скрыть ответ'
    }
}
btn5.addEventListener('click',result5)


const  question6 = document.querySelector('.quest-6')
const btn6 = document.querySelector('.btn-6')
const answer6 = document.querySelector('.answer-6')
const result6 = () => {
    const check6 =  answer6.classList.toggle('answer-6')
    if (check6) {
        btn6.innerHTML = 'показать ответ'
    } else {
        btn6.innerHTML = 'скрыть ответ'
    }
}
btn6.addEventListener('click',result6)


