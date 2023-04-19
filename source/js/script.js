/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
    'use strict';

    // navbarDropdown
    if ($(window).width() < 992) {
        $('.navigation .dropdown-toggle').on('click', function () {
            $(this).siblings('.dropdown-menu').animate({
                height: 'toggle'
            }, 300);
        });
    }

    //  Count Up
    function counter() {
        var oTop;
        if ($('.counter').length !== 0) {
            oTop = $('.counter').offset().top - window.innerHeight;
        }
        if ($(window).scrollTop() > oTop) {
            $('.counter').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    }
    $(window).on('scroll', function () {
        counter();
        //.Scroll to top show/hide
        var scrollToTop = $('.scroll-top-to'),
            scroll = $(window).scrollTop();
        if (scroll >= 200) {
            scrollToTop.fadeIn(200);
        } else {
            scrollToTop.fadeOut(100);
        }
    });
    // scroll-to-top
    $('.scroll-top-to').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // -----------------------------
    //  Video Replace
    // -----------------------------
    $('.video-box').click(function () {
        var video = '<div class="embed-responsive embed-responsive-16by9 mb-4"><iframe class="embed-responsive-item" src="' + $(this).attr('data-video-url') + '" allowfullscreen></iframe></div>';
        $(this).parent('.video').replaceWith(video);
    });

    // niceSelect

    $('select:not(.ignore)').niceSelect();

    // blog post-slider
    $('.post-slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        fade: true
    });

    // Client Slider 
    $('.category-slider').slick({
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        nextArrow: '<i class="fa fa-chevron-right arrow-right"></i>',
        prevArrow: '<i class="fa fa-chevron-left arrow-left"></i>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // trending-ads-slide 

    $('.trending-ads-slide').slick({
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 800,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    // product-slider
    $('.product-slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: false,
        nextArrow: '<i class="fa fa-chevron-right arrow-right"></i>',
        prevArrow: '<i class="fa fa-chevron-left arrow-left"></i>',
        customPaging: function (slider, i) {
            var image = $(slider.$slides[i]).data('image');
            return '<img class="img-fluid" src="' + image + '" alt="product-img">';
        }
    });



    // tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    // bootstrap slider range
    $('.range-track').slider({});
    $('.range-track').on('slide', function (slideEvt) {
        $('.value').text('$' + slideEvt.value[0] + ' - ' + '$' + slideEvt.value[1]);
    });
    $('#range-track').on('slideStop', function () {
        // 获取 range-track 的最小值和最大值
        var range = $('#range-track').slider('getValue');

        // 筛选列表
        $('.ad-listing-list').each(function () {
            var price = parseInt($(this).attr('price'));

            if (price >= range[0] && price <= range[1]) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    $('#sort-select').on('change', function () {
        // 获取下拉列表的值
        var sortValue = $(this).val();

        // 获取所有的 ad-listing-list 元素
        var items = $('.ad-listing-list');

        // 根据选择的排序方法进行排序
        items.sort(function (a, b) {
            return parseInt($(b).attr(sortValue)) - parseInt($(a).attr(sortValue));
        });

        // 将排序后的元素重新添加到页面中
        $('#ad-listing-data').html(items);
    });

    // 获取所有的复选框元素
    var checkboxes = $('.widget.product-shorting input[type="checkbox"]');

    // 默认情况下，所有复选框都是选中的
    checkboxes.prop('checked', true);

    // 监听复选框的变化事件
    checkboxes.on('change', function () {
        // 获取所有选中的复选框的值
        var checkedValues = checkboxes.filter(':checked').map(function () {
            return $(this).parent().text().trim();
        }).get();

        // 如果没有选中的复选框，就显示所有的 ad-listing-list 元素
        if (checkedValues.length === 0) {
            $('.ad-listing-list').show();
            return;
        }

        // 遍历所有的 ad-listing-list 元素，根据选中的复选框进行筛选
        $('.ad-listing-list').each(function () {
            var condition = $(this).attr('condition');
            if ($.inArray(condition, checkedValues) === -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });

})(jQuery);