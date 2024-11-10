const audio = new Audio();
audio.src = '../sounds/click.wav';
audio.play();

const count = document.querySelector('.count');
const zikr = document.querySelector('.count__content__zikr');
const btn = document.querySelector('.count__content__btn');

let countValue = 0;

btn.addEventListener('click', () => {
    countValue++;
    count.innerHTML = countValue;
    audio.play();
    if (countValue >= 33){
        zikr.innerHTML = 'Ikkinchi 33 talik : Alhamdulilloh';
    }
     if (countValue >= 66){
        zikr.innerHTML = 'Uchinchi 33 talik : Allohu Akbar';

    }
    if (countValue >= 99){
       countValue = 0;
    }

});
 const reset = document.querySelector('.reset__btn');

 reset.addEventListener('click', () => {
    countValue = 0;
    count.innerHTML = countValue;
 });




 
