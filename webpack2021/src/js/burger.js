$(document).ready(function () {
    $('.nav__burger').click(function (event) {
        $('.nav__burger,.nav__list').toggleClass('active')
        $('body').toggleClass('lock')
    });
    $('.nav__link').click(function (event) {
        $('.nav__burger,.nav__list').toggleClass('active')
        $('body').toggleClass('lock')
    });
});
