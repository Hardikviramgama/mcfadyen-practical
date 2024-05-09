define([
    "jquery"
], function ($) {
    "use strict";

    let mixin = {
        _init: function () {

            this._super();
            var swatchLength = $('.swatch-attribute.color').length; // if color attribute 
            if(swatchLength == 1){
                if($('.swatch-attribute').hasClass("color")){
                    $('.swatch-option').first().trigger('click');
                }
            }
        },
    };

    return function (widget) {
        $.widget("mage.SwatchRenderer", widget, mixin);

        return $.mage.SwatchRenderer;
    };
});
