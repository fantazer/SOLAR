$(function(){$(".galary-wraper").mixItUp()}),$(document).ready(function(){function e(){var e=parseInt($(".owl-item").eq(0).css("height"));console.log(e),$(".owl-item").each(function(){var t=parseInt($(this).css("height"));e=t>=e?e:t}),$(".owl-wrapper-outer").css("height",e+"px")}function t(t){var i=$(t);i.owlCarousel({afterUpdate:function(){e(),console.log("asdasd")},afterInit:function(){e(),console.log("asdasd")},items:1,dots:!1,autoPlay:!1,singleItem:!0,nav:!0,navText:['<div class="icon icon-angle-left"></div>','<div class="icon icon-angle-right"></div>']})}function i(e,t){var i=$(window).width(),a=$(t);i>e-1?(a.trigger("destroy.owl.carousel"),a.removeClass("owl-carousel")):e>i&&(a.addClass("owl-carousel"),a.owlCarousel({items:1,autoHeight:!0,autoPlay:!1,singleItem:!0}))}$(".planet-el").click(function(){$(".planet-el").addClass("reset-position"),$(".planet-wraper").addClass("main-cont"),$(".planet-wraper").addClass("planet-wraper--mid"),$(".rows-cont").css("height","auto"),$(".section-main__title").hide(),o.parallax("disable");var e=$(this).data("type");$(".planet-content").each(function(){$(this).hide(),$(this).data("module")==e&&$(this).show()})});var a=function(e,t){$(e).click(function(e){e.stopPropagation(),$(t).slideToggle("fast")}),$(t).on("click",function(e){e.stopPropagation()}),$(document).on("click",function(){$(t).hide()})};a(".top-menu__bar",".top-menu-order"),a(".top-menu__bar",".top-menu__sub"),a(".top-menu__toggle",".top-menu__cont"),a(".galary-head__toggle",".galary-head__wraper");var o=$(".section-main").parallax();$(window).resize(function(){i(768,".people"),i(768,".fluid"),i(768,".aplication-type"),i(768,".other-service"),i(768,".syte-type"),i(768,".repair-discr")}),i(768,".fluid"),i(768,".people"),i(768,".aplication-type"),i(768,".other-service"),i(768,".syte-type"),i(768,".repair-discr"),t(".promotion-slider"),$(".planet-content__seo,.planet-content__web").owlCarousel({responsive:{0:{items:1},768:{items:2},960:{items:2},1200:{items:4}},autoHeight:!0,dots:!1,autoplay:!0,singleItem:!0,nav:!0,navText:['<div class="icon icon-angle-left"></div>','<div class="icon icon-angle-right"></div>']}),$(".planet-content__smm").owlCarousel({responsive:{0:{items:1},768:{items:2},960:{items:2},1200:{items:5}},autoHeight:!0,dots:!1,autoplay:!0,singleItem:!0,nav:!0,navText:['<div class="icon icon-angle-left"></div>','<div class="icon icon-angle-right"></div>']}),$(".work-template").owlCarousel({responsive:{0:{items:1},768:{items:2},960:{items:2},1200:{items:3}},margin:50,autoHeight:!0,dots:!0,autoplay:!0,singleItem:!0,nav:!1}),$(".partners").owlCarousel({responsive:{0:{items:1},768:{items:2},960:{items:2},1200:{items:5}},margin:50,autoHeight:!0,dots:!1,autoplay:!0,singleItem:!0,nav:!0,navText:['<div class="icon icon-angle-left"></div>','<div class="icon icon-angle-right"></div>']}),/MSIE \d|Trident.*rv:/.test(navigator.userAgent)&&$(".planet-el:eq(1)").click()});