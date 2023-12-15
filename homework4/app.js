var input = document.querySelector('input')
var plus = document.querySelector('#btn-1')
var minus = document.querySelector('#btn-2')
var delete1 = document.querySelector('#delete')


    plus.addEventListener('click' ,  () =>  {
           var color1 =  input.value++
        if (color1 => 0 ) {
            input.style.backgroundColor = 'green'
         }
    }
     )
    minus.addEventListener('click' ,  () => {
         var color2 = input.value--
        if (color2 <= 0) {
            input.style.backgroundColor = 'red'
        }
    }
     )
    delete1.addEventListener('click' , () => {
        var color3 = input.value = '0'
        if (color3 === '0') {
            input.style.backgroundColor = 'gray'
        }
    }
     )



