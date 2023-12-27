const input = document.querySelector('#input')
const month = document.querySelector('#month')
const btn = document.querySelector('#btn')

btn.addEventListener('click' ,  () => {
        const number = input.value
        const mnth = month.value
       if (['Январь' , 'Март' , 'Май', 'Июль' , 'Август' , 'Октябрь', 'Декабрь'].includes(mnth))  {
            const result1 = number / 31
            alert(result1)
       } else if (['Апрель' , 'Июнь' , 'Сентябрь' , 'Ноябрь'].includes(mnth)) {
           const result2 = number / 30
           alert(result2)
       } else {
           const result3 = number / 28
           alert(result3)
       }
    }
)
