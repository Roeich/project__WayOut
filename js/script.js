$(document).ready(function(){
    /* ........... start home page ........... */
    // Отключаем автоматическое переключение
    $('#testimonialCarousel').carousel({
        interval: false,
        wrap: true
    });

    // video/image lightbox
    const lightbox = GLightbox();
    /* ........... end home page ........... */
    
    /* ........... start form page ........... */
    $(".course-option .form-check-input").change(function(){
        const innerHtml=$(this).parents(".course-option").find(".course-description").html();
        $("#course-details").html(innerHtml);
    });
    /* ........... end form page ........... */
})