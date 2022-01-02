$(document).ready(function () {
    //Init Owl Carousel
    $('.owl-carousel').owlCarousel({
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,
            },
            1440: {
                items: 4,
            },
        },
    });

    /*
    $('.featured-item a').addClass('btn btn-primary');
    $('.featured-item a').removeClass('btn-primary').addClass('btn-dark');
    $('.featured-item:first h4').append(' <span class="badge bg-secondary">Novo</span>');
    $('.featured-item h4').after('<span>Tamanho M</span>');
    $('.featured-item h4').html('<span>Tamanho M</span>');
    $('.featured-item h4').hide();
    $('.featured-item h4').show();
    $('.featured-item h4').fadeOut(2000);
    $('.featured-item h4').fadeIn(3000);
    $('.featured-item h6').css('color', '#0000ff');
    $('.featured-item h6').css({
         color: '#ffffff',
         backgroundColor: '#000000',
         padding: '20px',
         fontSize: '1rem',
     });
    //Eventos .click .dblclick .mouseenter .mouseleave .hover
    $('.featured-item h4').click(function () {
        $(this).css({
            color: '#ffffff',
            backgroundColor: '#000000',
            padding: '20px',
            fontSize: '1rem',
        });
    });
    // Manipulando eventos
    $('.featured-item:first a').on('click', function (evento) {
        evento.preventDefault();
        $(this).after('<p class="btn-warning">produto esgotado!</p>');
    });
    */
});
