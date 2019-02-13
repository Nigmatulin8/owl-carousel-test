$(function () {

    $('.faq').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    })


    var answer = $(".answer");
    var answerHeight = new Array;

    for (let i = 0; i < answer.length; i++){
        answerHeight[i] = answer.eq(i).css("height");
    }

    //Преобразование строкового значения в массиве в числовое 
    answerHeight = answerHeight.join("").split("px");
    answerHeight.splice(-1, 1);

    //Преобразование строкового значения в числовое
    for(let i = 0; i < answerHeight.length; i++) {
        answerHeight[i] = parseInt(answerHeight[i]);
    }

    //Установка новой высоты дивам
    answer.css("min-height", answerHeight.max() + "px");
});

//Поиск максимума в масисве
Array.prototype.max = function () {
    return Math.max.apply(Math, this);
}


