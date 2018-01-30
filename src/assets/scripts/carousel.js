/*
    HERO.JS - Last updated: 29.01.18
*/
//-----------------------------------------------------------------
// LAUNCH CAROUSEL
//-----------------------------------------------------------------

function launchCarousel() {
    $('[data-carousel]').each(function(){

        //==================================================
        // VARS
        //==================================================

        var $this = $(this);
        var $carousel  = $('.lv-hero', $this);
        var $prevArrow = $('.lv-hero-carousel-prev-btn', $this);
        var $nextArrow = $('.lv-hero-carousel-next-btn', $this);

        //==================================================
        // FLICKITY
        //==================================================

        var $flickity = $carousel.flickity({
            adaptiveHeight: true,
            autoPlay: false,
            cellAlign: 'left',
            contain: true,
            dragThreshold: 3,
            freeScroll: false,
            freeScrollFriction: 0.075, // lower friction, slides easier
            friction: 0.28, // Higher friction makes the slider feel stickier and less bouncy
            imagesLoaded: true,
            pageDots: true,
            prevNextButtons: false,
            pauseAutoPlayOnHover: false,
            selectedAttraction: 0.025, // Higher attraction makes the slider move faster
            // watchCSS: true, // run/destroy
            wrapAround: true, // infinite
        });

        //==================================================
        // ARROWS
        //==================================================

        $prevArrow.on('click', function() {
            $carousel.flickity('previous');
        });

        $nextArrow.on('click', function() {
            $carousel.flickity('next');
        });
    //--
    });
}

launchCarousel();

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//==================================================
//
//==================================================