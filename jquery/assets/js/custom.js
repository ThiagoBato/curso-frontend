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
     * Ouvinte de eventos .nav-modal-open
     */
    $('.nav-modal-open').on('click', function (e) {
        e.preventDefault();
        let elemento = $(this).attr('rel');
        $('.modal-body').html($('#' + elemento).html());
        $('.modal-header h5.modal-title').html($(this).text());
        let myModal = new bootstrap.Modal($('#modelId'));
        myModal.show();
    });

    //Validação do Formulário
    function validaFormulario(elemento) {
        if (elemento.val() == '') {
            //console.log('o campo de ' + elemento.attr('name') + ' é obrigatório');
            elemento.addClass('invalido');
        } else {
            elemento.removeClass('invalido');
        }
    }

    $('body').on('submit', '.modal-body .form', function (e) {
        e.preventDefault();

        const inputNome = $('#nome');
        const inputEmail = $('#email');

        validaFormulario(inputNome);
        validaFormulario(inputEmail);

        if (inputNome.hasClass('invalido') || inputEmail.hasClass('invalido')) {
            //console.log('verificar campos obrigatórios');
            return false;
        } else {
            //$(this)[0].submit();
            $(this).submit();
            return true;
        }
    });

    $('body').on('blur', '#nome', function () {
        validaFormulario($(this));
    });
    $('body').on('blur', '#email', function () {
        validaFormulario($(this));
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
