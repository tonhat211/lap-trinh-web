const sliders = document.querySelectorAll('.item');
const showSliders = document.querySelectorAll('.carousel-indicators li');
// console.log(showSliders);
const leftSlider = document.querySelector('.fui-arrow-left');
const rightSlider = document.querySelector('.fui-arrow-right');

function changeSliderToRight() {
    var index;
    var len = sliders.length;
    for (var i= 0; i < len; i++) {
        if(sliders[i].classList.contains('active')) {
            index = i;
            break;
        }
    }
    sliders[index].classList.remove('active');
    showSliders[index].classList.remove('active');
        if(index === (len-1)){
            index = 0;
            sliders[index].classList.add('active');
            showSliders[index].classList.add('active');

        } else {
            sliders[++index].classList.add('active');
            showSliders[index].classList.add('active');

        }


}

function changeSliderToLeft() {
    var index;
    var len = sliders.length;
    for (var i= 0; i < len; i++) {
        if(sliders[i].classList.contains('active')) {
            index = i;
            break;
        }
    }
    sliders[index].classList.remove('active');
    sliders[index].classList.remove('active');

    if(index === 0){
        index = len-1;
        sliders[index].classList.add('active');
        showSliders[index].classList.add('active');

    } else {
        sliders[--index].classList.add('active');
        showSliders[index].classList.add('active');

    }


}


leftSlider.addEventListener('click', changeSliderToLeft);
rightSlider.addEventListener('click', changeSliderToRight);
