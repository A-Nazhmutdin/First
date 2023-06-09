'use strict'
let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.button_left').addEventListener('click', function(){
    offset+=273;
    if(offset > 0){
        offset = -546;
    }
    sliderLine.style.left = offset + 'px';
});

document.querySelector('.button_right').addEventListener('click', function(){
    offset-=273;
    if(offset < -546){
        offset = 0;
    }
    sliderLine.style.left = offset + 'px';
});

const modal = $.modal({
    title: 'Выберите локацию',
    closable: true,
    content: `<h3>Выберите локацию</h3>`,
    width: '600px'

});

document.querySelector('.change_location').addEventListener('click', function(){
    return modal.open()
})
