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
            elemento.parent().find('.form-text').show();
            elemento.addClass('invalido');
        } else {
            elemento.parent().find('.form-text').hide();
            elemento.removeClass('invalido');
        }
    }

    $('body').on('submit', '.modal-body .form', function (e) {
        e.preventDefault();

        const inputNome = $('#nome');
        const inputEmail = $('#email');
        const inputData = $('#data');
        const inputHora = $('#hora');
        const inputCEP = $('#cep');
        const inputCelular = $('#celular');
        const inputCPF = $('#cpf');

        validaFormulario(inputNome);
        validaFormulario(inputEmail);
        validaFormulario(inputData);
        validaFormulario(inputHora);
        validaFormulario(inputCEP);
        validaFormulario(inputCelular);
        validaFormulario(inputCPF);

        if (inputNome.hasClass('invalido') || inputEmail.hasClass('invalido')) {
            //console.log('verificar campos obrigatórios');
            return false;
        } else {
            //Utilizar para não dar erro
            //$(this)[0].submit();
            $(this).submit();
            return true;
        }
    });

    //Quaando o modal do boostrap abre, ele valida o formulário
    $('#modelId').on('shown.bs.modal', function () {
        $(this).on('blur', '#nome', function () {
            validaFormulario($(this));
        });
        $(this).on('blur', '#email', function () {
            validaFormulario($(this));
        });
        $(this).on('blur', '#data', function () {
            validaFormulario($(this));
        });
        $(this).on('blur', '#hora', function () {
            validaFormulario($(this));
        });
        $(this).on('blur', '#cep', function () {
            validaFormulario($(this));
        });
        $(this).on('blur', '#celular', function () {
            validaFormulario($(this));
        });
        $(this).on('blur', '#cpf', function () {
            validaFormulario($(this));
        });

        $(this).on('focus', '#data', function () {
            $(this).datepicker();
        });
        //Jquery Mask Plugin de validação de campos
        $('#data').mask('00/00/0000');
        $('#hora').mask('00:00');
        $('#cep').mask('00000-000');
        $('#celular').mask('(00) 00000-0000');
        $('#cpf').mask('000.000.000-00');
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
