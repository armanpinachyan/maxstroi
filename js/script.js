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
