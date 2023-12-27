const input = document.querySelector('#input')
const month = document.querySelector('#month')
const btn = document.querySelector('#btn')

btn.addEventListener('click' ,  () => {
        const number = input.value
        const mnth = month.value
    for (let i = 1; i <= 31; i++) {
        if (['Январь' , 'Март' , 'Май', 'Июль' , 'Август' , 'Октябрь', 'Декабрь'].includes(mnth))  {
            const result1 = number / 31
            console.log(`${i} день = ${result1}`)
        }
    }
    for (let i = 1; i <= 30; i++) {
        if (['Апрель' , 'Июнь' , 'Сентябрь' , 'Ноябрь'].includes(mnth)) {
            const result2 = number / 30
            console.log(`${i} день = ${result2}`)
        } else {
            (['Февраль'].includes(mnth))
            const result3 = number / 28
            console.log(`${i} день = ${result3}`)
        }
        }
    }
)
