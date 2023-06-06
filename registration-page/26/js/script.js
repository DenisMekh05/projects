debugger
const swiper = new Swiper(' .swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'cards', // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards',
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`
    }
});