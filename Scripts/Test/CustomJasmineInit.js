var env = jasmine.getEnv();

var oldCallback = jsApiReporter.jasmineDone;
jsApiReporter.jasmineDone = function () {
    oldCallback.apply(this, arguments);
    applyLayout();
};

function waitsFor(testFn, callback, delay) {
    if (testFn()) {
        return callback();
    }

    setTimeout(function() {
        waitsFor(testFn, callback, delay);
    }, delay)
}

//
// Layout Enhancements
//
function applyLayout() {
    waitsFor(function () {
        return $('.duration').length > 0;
    }, function () {
        var $summaryContainer = $('.summary'),
            unhide = false;

        if ($summaryContainer.is(':visible')) {
            $summaryContainer.hide();
            unhide = true;
        }

        $summaryContainer.children('.suite')
            .each(function (i, element) {
                var $el = $(element);
                var expandedIfSkipped = ($('.skipped').length > 0 ? 'expanded' : '');

                if ($el.find('.failed').length > 0)
                {
                    $el.prepend('<span class="toggle-suite failed-color expanded"></span>');
                }
                else if ($el.find('.passed').length > 0)
                {
                    $el.prepend('<span class="toggle-suite passed-color ' + expandedIfSkipped + '"></span>');
                }
                else
                {
                    $el.prepend('<span class="toggle-suite"></span>');
                }
            });

        if (unhide) {
            $summaryContainer.show();
        }

        $('.toggle-suite').on('click', function (e) {
            $(e.currentTarget).toggleClass('expanded');
        });

        $('.suite-detail').on('click', function (e) {
            $(e.currentTarget)
                .prev('.toggle-suite')
                .toggleClass('expanded');
        });
    }, 100);
}