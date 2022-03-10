let dakika = document.querySelector('.dakika')
let saniye = document.querySelector('.saniye')
let milisaniye = document.querySelector('.milisaniye')
let saat = document.querySelector('.saat')
let startbtn = document.querySelector('.start')
let stopbtn = document.querySelector('.stop')
let resets = document.querySelector('.reset')


startbtn.addEventListener('click',timer);
stopbtn.addEventListener('click',timerstop)
resets.addEventListener('click',resetTimeOut)
let timme = true
let sny = 0;
let milsny = 0;
let dk = 0;
let saaat = 0;

function timer(){
    if(timme == true){
        milsny = parseInt(milsny)
        sny = parseInt(sny)
        dk = parseInt(dk)
        saaat = parseInt(saaat)

        milsny ++;

        if(milsny == 99){
            sny ++ ;
            milsny = 0;
        }
        if(sny == 60){
            dk ++;
            sny = 0;
            milsny = 0;
        }
        if(dk == 60){
            saaat ++;
            sny = 0;
            milsny = 0;
            dk = 0;
        }

        dakika.textContent =  dk;
        saniye.textContent =  sny;
        milisaniye.textContent =  milsny;
        saat.textContent = saaat;

        saniye.textContent= saniye.textContent.padStart(2,'0')
        dakika.textContent= dakika.textContent.padStart(2,'0')
        milisaniye.textContent= milisaniye.textContent.padStart(2,'0')
        saat.textContent= saat.textContent.padStart(2,'0')

    timeOut =  setTimeout(timer,10)
    }
}

function timerstop(){
    if(timme == true){
        clearTimeout(timeOut)
    }
}

function resetTimeOut(){
    if(timme == true){
        
        dakika.textContent =  "00";
        saniye.textContent = "00";
        milisaniye.textContent =  "00";
        saat.textContent = "00";
}}