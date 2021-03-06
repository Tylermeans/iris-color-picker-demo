/*!
* Iris Color Picker Demo Script
* @author: Rachel Baker ( rachel@rachelbaker.me )
*/
(function ($) {
    "use strict";

    var default_color = 'fbfbfb';

    function pickColor(color) {
        $('#link-color').val(color);
    }
    function toggle_text() {
        link_color = $('#link-color');
        if ('' === link_color.val().replace('#', '')) {
            link_color.val(default_color);
            pickColor(default_color);
        } else {
            pickColor(link_color.val());
        }
    }

    $(document).ready(function () {
        var link_color = $('#link-color');
        link_color.wpColorPicker({
            change: function (event, ui) {
                pickColor(link_color.wpColorPicker('color'));
            },
            clear: function () {
                pickColor('');
            }
        });
        $('#link-color').click(toggle_text);

        toggle_text();

    });

}(jQuery));