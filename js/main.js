
var flipper = {
    init: function(){
        flipper.scroller.init();

        $("#testamonial-slider").owlCarousel({
            navigation : false, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true
        });
    }
};

/**
 * Simple Scroller Library for navigation
 * @type {{time: number, init: init, bind: bind, scroll: scroll}}
 */
flipper.scroller = {
    time: 2000,

    init: function() {
        this.bind();
    },

    bind: function(){
        var self=this;

        $(".scroll").click(function (event) {
            event.preventDefault();
            self.scroll(this.hash)

        });

    },

    scroll: function(destination) {
        var dest = 0;
        var self=this;

        if ($(destination).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(destination).offset().top;
        }
        //go to destination
        $('html,body').animate({
            scrollTop: dest
        }, self.time, 'swing');
    }
};

$(function(){
    flipper.init();
});
