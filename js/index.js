$(function () {
    // 文档加载渐变
    $('html').hide()
    $('html').fadeIn(1000)
    $('header').hide()
    setInterval(function () {
        $('header').slideDown(600)
    }, 400)
    // 滚动渐变动画
    // $(window).scroll(function () {

    //     var boxTop = $('section').eq(3).offset().top-500
    //     if ($(document).scrollTop() >= boxTop) {
    //         $('section').eq(3).animate({
    //             opacity: 1
    //         })
    //     } else {
    //         $('section').eq(3).animate({
    //             opacity: 0
    //         })
    //     }
    //     console.log($(document).scrollTop());
    // })
    // console.log($('section').eq(3).offset().top);






})