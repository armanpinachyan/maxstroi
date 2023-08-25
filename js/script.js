const { none, show, active, hidden, opacity25, disabled } = {
    none: "d-none",
    show: 'show',
    active: 'active',
    hidden: 'overflow-hidden',
    opacity25: 'opacity-25',
    disabled: 'disabled'
}



///...... menu


const menuItemMobile = $('.menu-item-mobile');

$('.mobile-menu-board').on('click', function (){
    if($(this).hasClass(active)){
        $(this).removeClass(active);
        menuItemMobile.removeClass(active);
        $('body').css('overflow', '')
    } else {
        $(this).addClass(active);
        menuItemMobile.addClass(active);
        $('body').css('overflow', 'hidden')
    }
})


//  ... Modal out serviser


const modalProducts = new bootstrap.Modal('#full-desktop', {
    keyboard: false
})


const modalOpenFull = $('.modal-open-full')

modalOpenFull.on('click', function (){
    const id = $(this).attr('href');

    openModalCategory(id);
})

function openModalCategory(id) {
    modalProducts.show();
    $('.modal-body-item').addClass('d-none');
    $(id).removeClass('d-none');
}

// slider


$('.slider').slick({
    dots: true,
    lazyLoad: 'progressive',
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.gallery-photo').on('click', function (e) {

    e.preventDefault();

    const items = [],
      options = {
          index: $(this).index()
      };

    $('.gallery-photo').each(function () {
        let src = $(this).attr('href');
        items.push({
            src: src
        });
    });

    new PhotoViewer(items, options);

});
