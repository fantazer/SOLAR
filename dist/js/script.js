$(document).ready(function(){$(".planet-el").click(function(){$(".planet-el").addClass("reset-position"),$(".planet-wraper").addClass("main-cont"),$(".planet-wraper").addClass("planet-wraper--mid"),$(".rows-cont").css("height","auto"),$(".section-main__title").hide(),n.parallax("disable");var t=$(this).data("type");$(".planet-content").each(function(){$(this).hide(),$(this).data("module")==t&&$(this).show()})});var t=function(t,n){$(t).click(function(t){t.stopPropagation(),$(n).slideToggle("fast")}),$(n).on("click",function(t){t.stopPropagation()}),$(document).on("click",function(){$(n).hide()})};t(".top-menu__bar",".top-menu-order"),t(".top-menu__bar",".top-menu__sub"),t(".top-menu__toggle",".top-menu__cont");var n=$(".section-main").parallax();$(".planet-content__seo,.planet-content__web").owlCarousel({responsive:{0:{items:1},768:{items:2},960:{items:2},1200:{items:4}},autoHeight:!0,pagination:!1,autoplay:!0,singleItem:!0,nav:!0,navText:['<div class="icon icon-angle-left"></div>','<div class="icon icon-angle-right"></div>']}),$(".planet-content__smm").owlCarousel({responsive:{0:{items:1},768:{items:2},960:{items:2},1200:{items:5}},autoHeight:!0,pagination:!1,autoplay:!0,singleItem:!0,nav:!0,navText:['<div class="icon icon-angle-left"></div>','<div class="icon icon-angle-right"></div>']})});