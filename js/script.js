$(document).ready(function(){
    // управлять меню мобильной навигации

    // Отключаем автоматическое переключение
    $('#testimonialCarousel').carousel({
        interval: false,
        wrap: true
    });

    /* ........... start form page ........... */
    $(".course-option .form-check-input").change(function(){
        const innerHtml=$(this).parents(".course-option").find(".course-description").html();
        $("#course-details").html(innerHtml);
    });
    /* ........... end form page ........... */
})