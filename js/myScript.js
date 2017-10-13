/**
 * Created by oksymets on 10/13/17.
 */

$(document).ready(function() {

    $('.underlined').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't forget to change the duration also in CSS
        }
    });

});