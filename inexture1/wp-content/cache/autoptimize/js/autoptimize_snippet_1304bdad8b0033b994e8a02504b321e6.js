function recallme(){jQuery(".ult_dual_button").each(function(a){var b=jQuery(this).attr("id"),c=jQuery(this).data("response");if(("undefined"==c||""==c)&&(c="on"),"on"==c){var d=b;d=document.createElement("style"),d.type="text/css",d.innerHTML="@media(min-width:300px) and (max-width:768px) {#"+b+".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper { margin: 0px;float: none;position: relative}.ult_main_dualbtn { display: inline-block}.ult_dualbutton-wrapper { display: block }#"+b+".ult_dual_button .middle-text {top: 100%;right: 50%}#"+b+".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-bottom-right-radius: 0!important; border-bottom-left-radius: 0!important; border-top-right-radius: inherit; border-bottom: 0px!important;}#"+b+".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button { border-top-left-radius: 0!important;border-top-right-radius: 0!important}}@media(min-width:0px) and (max-width:0px) {#"+b+".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper { float: left; position: relative}.ult_dual1 {     border-right: none!important } .ult_dualbutton-wrapper {display: block}#"+b+".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-top-right-radius: 0!important;  border-bottom-right-radius: 0!important}#"+b+".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button { border-top-left-radius: 0!important;  border-bottom-left-radius: 0!important  }}@media(min-width:768px) and (max-width:970px) { #"+b+".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper { margin: -4px; float: none; position: relative }.ult_dualbutton-wrapper { display: block} #"+b+".ult_dual_button .middle-text { top: 100%; right: 50% }#"+b+".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-bottom-right-radius: 0!important; border-bottom-left-radius: 0!important; border-top-right-radius: inherit }#"+b+".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button {     border-top-left-radius: 0!important;   border-top-right-radius: 0!important  }}@media(min-width:970px){ #"+b+".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-top-right-radius: 0!important; border-bottom-right-radius: 0!important}#"+b+".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button { border-top-left-radius: 0!important; border-bottom-left-radius: 0!important }#"+b+".ult_dual_button .ult_dual1 { border-right: none!important}}",document.getElementsByTagName("head")[0].appendChild(d),document.getElementsByTagName("head")[0].appendChild(d);var e=jQuery(window).width(),f=jQuery(this).find(".ult_dual1").outerWidth(),g=jQuery(this).find(".ult_dual2").outerWidth();if(e>300&&768>=e)var h="inset 0px -"+f+"px 0px 0px ",i=" inset 0px "+g+"px 0px 0px ";else if(e>768&&1015>e)var h="inset 0px -"+f+"px 0px 0px ",i=" inset 0px "+g+"px 0px 0px ";else var h="inset -"+f+"px 0 0 0 ",i="inset "+g+"px 0 0 0";jQuery("#"+b).find(".ult_dual1").mouseenter(function(){var a=jQuery(this).find(".ult-dual-btn-1").attr("class"),b=a.split(" "),a=b[1]+b[2];if("Style2"==a){var c=jQuery(this).find(".ult-dual-btn-1").data("bghovercolor");jQuery(this).css({"box-shadow":h+c})}}),jQuery("#"+b).find(".ult_dual1").mouseleave(function(){var a=jQuery(this).find(".ult-dual-btn-1").attr("class"),b=a.split(" "),a=b[1]+b[2];if("Style2"==a){var c=jQuery(this).find(".ult-dual-btn-1").data("bgcolor");jQuery(this).css({"box-shadow":"inset 0px 0 0 0 "+c})}}),jQuery("#"+b).find(".ult_dual2").mouseenter(function(){var a=jQuery(this).find(".ult-dual-btn-2").attr("class"),b=a.split(" "),a=b[1]+b[2];if("Style2"==a){var c=jQuery(this).find(".ult-dual-btn-2").data("bghovercolor");jQuery(this).css({"box-shadow":i+c})}}),jQuery("#"+b).find(".ult_dual2").mouseleave(function(){var a=jQuery(this).find(".ult-dual-btn-2").attr("class"),b=a.split(" "),a=b[1]+b[2];if("Style2"==a){var c=jQuery(this).find(".ult-dual-btn-2").data("bgcolor");jQuery(this).css({"box-shadow":"inset 0px 0 0 0 "+c})}})}else{var d=b;d=document.createElement("style"),d.type="text/css",d.innerHTML="#"+b+".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:first-child .ult_ivan_button { border-top-right-radius: 0!important; border-bottom-right-radius: 0!important }#"+b+".ult_dual_button .ulitmate_dual_buttons .ult_dualbutton-wrapper:last-child .ult_ivan_button { border-top-left-radius: 0!important; border-bottom-left-radius: 0!important }#"+b+".ult_dual_button .ult_dual1 { border-right: none!important}",document.getElementsByTagName("head")[0].appendChild(d),document.getElementsByTagName("head")[0].appendChild(d),jQuery("#"+b).find(".ult_dual1").mouseenter(function(){var a=jQuery(this).find(".ult-dual-btn-1").attr("class"),b=a.split(" "),a=b[1]+b[2],c=jQuery(this).outerWidth();if("Style2"==a){var d="inset -"+c+"px 0 0 0 ",e=jQuery(this).find(".ult-dual-btn-1").data("bghovercolor");jQuery(this).css({"box-shadow":d+e})}}),jQuery("#"+b).find(".ult_dual1").mouseleave(function(){var a=jQuery(this).find(".ult-dual-btn-1").attr("class"),b=a.split(" "),a=b[1]+b[2];if("Style2"==a){var c=jQuery(this).find(".ult-dual-btn-1").data("bgcolor");jQuery(this).css({"box-shadow":"inset 0px 0 0 0 "+c})}}),jQuery("#"+b).find(".ult_dual2").mouseenter(function(){var a=jQuery(this).find(".ult-dual-btn-2").attr("class"),b=a.split(" "),a=b[1]+b[2],c=jQuery(this).outerWidth();if("Style2"==a){var d="inset "+c+"px 0 0 0",e=jQuery(this).find(".ult-dual-btn-2").data("bghovercolor");jQuery(this).css({"box-shadow":d+e})}}),jQuery("#"+b).find(".ult_dual2").mouseleave(function(){var a=jQuery(this).find(".ult-dual-btn-2").attr("class"),b=a.split(" "),a=b[1]+b[2];if("Style2"==a){var c=jQuery(this).find(".ult-dual-btn-2").data("bgcolor");jQuery(this).css({"box-shadow":"inset 0px 0 0 0 "+c})}})}})}!function(a){a(document).ready(function(){var b=a(window).width();if(b>300&&768>b);else if(b>768&&1015>b);else;a(document).on("mouseenter",".ult_dual1",function(){var b=a(this).find(".ult-dual-btn-1").attr("class"),c=b.split(" "),b=c[1]+c[2];if("Style1"==b){var d=a(this).find(".ult-dual-btn-1").data("bghovercolor");a(this)[0].style.setProperty("background-color",d,"important")}if("Style2"==b)var d=a(this).find(".ult-dual-btn-1").data("bghovercolor");if("Style3"==b){var d=a(this).find(".ult-dual-btn-1").data("bghovercolor");a(this).css({"box-shadow":" inset 0 0 20px 50px "+d})}if("undefined"!=b){var e=a(this).find(".ult-dual-btn-1").data("icon_hover_color");a(this).find(".ult-dual-btn-1").find(".aio-icon").css({color:e});var f=a(this).find(".ult-dual-btn-1").data("iconbghovercolor");a(this).find(".ult-dual-btn-1").find(".aio-icon").css({background:f});var g=a(this).find(".ult-dual-btn-1").data("iconhoverborder");a(this).find(".ult-dual-btn-1").find(".aio-icon").css({"border-color":g}),a(this).find(".ult-dual-btn-1").find(".aio-icon-img").css({background:f}),a(this).find(".ult-dual-btn-1").find(".aio-icon-img").css({"border-color":g});var h=a(this).find(".ult-dual-btn-1").data("texthovercolor");a(this).find(".ult-dual-btn-1").find(".ult-dual-button-title").css({color:h})}}),a(document).on("mouseleave",".ult_dual1",function(){var b=a(this).find(".ult-dual-btn-1").attr("class"),c=b.split(" "),b=c[1]+c[2];if("Style1"==b){var d=a(this).find(".ult-dual-btn-1").data("bgcolor");a(this)[0].style.setProperty("background-color",d,"important")}if("Style2"==b)var d=a(this).find(".ult-dual-btn-1").data("bgcolor");if("Style3"==b){var d=a(this).find(".ult-dual-btn-1").data("bgcolor");a(this).css({"box-shadow":"inset 0px 0 0 0 "+d})}if("undefined"!=b){var e=a(this).find(".ult-dual-btn-1").data("icon_color");a(this).find(".ult-dual-btn-1").find(".aio-icon").css({color:e});var f=a(this).find(".ult-dual-btn-1").data("textcolor");a(this).find(".ult-dual-btn-1").find(".ult-dual-button-title").css({color:f});var g=a(this).find(".ult-dual-btn-1").data("iconbgcolor");a(this).find(".ult-dual-btn-1").find(".aio-icon").css({background:g});var h=a(this).find(".ult-dual-btn-1").data("iconborder");a(this).find(".ult-dual-btn-1").find(".aio-icon").css({"border-color":h}),a(this).find(".ult-dual-btn-1").find(".aio-icon-img").css({background:g}),a(this).find(".ult-dual-btn-1").find(".aio-icon-img").css({"border-color":h})}}),a(document).on("mouseenter",".ult_dual2",function(){var b=a(this).find(".ult-dual-btn-2").attr("class"),c=b.split(" "),b=c[1]+c[2];if("Style1"==b){var d=a(this).find(".ult-dual-btn-2").data("bghovercolor");a(this)[0].style.setProperty("background-color",d,"important")}if("Style2"==b)var d=a(this).find(".ult-dual-btn-2").data("bghovercolor");if("Style3"==b){var d=a(this).find(".ult-dual-btn-2").data("bghovercolor");a(this).css({"box-shadow":" inset 0 0 20px 50px "+d})}if("undefined"!=b){var e=a(this).find(".ult-dual-btn-2").data("icon_hover_color");a(this).find(".ult-dual-btn-2").find(".aio-icon").css({color:e});var f=a(this).find(".ult-dual-btn-2").data("texthovercolor");a(this).find(".ult-dual-btn-2").find(".ult-dual-button-title").css({color:f});var g=a(this).find(".ult-dual-btn-2").data("iconbghovercolor");a(this).find(".ult-dual-btn-2").find(".aio-icon").css({background:g});var h=a(this).find(".ult-dual-btn-2").data("iconhoverborder");a(this).find(".ult-dual-btn-2").find(".aio-icon").css({"border-color":h}),a(this).find(".ult-dual-btn-2").find(".aio-icon-img").css({background:g}),a(this).find(".ult-dual-btn-2").find(".aio-icon-img").css({"border-color":h})}}),a(document).on("mouseleave",".ult_dual2",function(){var b=a(this).find(".ult-dual-btn-2").attr("class"),c=b.split(" "),b=c[1]+c[2];if("Style1"==b){var d=a(this).find(".ult-dual-btn-2").data("bgcolor");a(this)[0].style.setProperty("background-color",d,"important")}if("Style2"==b)var d=a(this).find(".ult-dual-btn-2").data("bgcolor");if("Style3"==b){var d=a(this).find(".ult-dual-btn-2").data("bghovercolor");a(this).css({"box-shadow":" inset 0 0 0 0 "+d})}if("undefined"!=b){var e=a(this).find(".ult-dual-btn-2").data("icon_color");a(this).find(".ult-dual-btn-2").find(".aio-icon").css({color:e});var f=a(this).find(".ult-dual-btn-2").data("textcolor");a(this).find(".ult-dual-btn-2").find(".ult-dual-button-title").css({color:f});var g=a(this).find(".ult-dual-btn-2").data("iconbgcolor");a(this).find(".ult-dual-btn-2").find(".aio-icon").css({background:g});var h=a(this).find(".ult-dual-btn-2").data("iconborder");a(this).find(".ult-dual-btn-2").find(".aio-icon").css({"border-color":h}),a(this).find(".ult-dual-btn-2").find(".aio-icon-img").css({background:g}),a(this).find(".ult-dual-btn-2").find(".aio-icon-img").css({"border-color":h})}})}),a(document).on("mouseenter",".ult_main_dualbtn",function(){a(this).data("bhcolor")}),a(document).on("mouseleave",".ult_main_dualbtn",function(){a(this).data("bcolor")})}(jQuery),jQuery(document).ready(function(a){jQuery(".ult_main_dualbtn").each(function(a){var b=jQuery(this).find(".ult_dual1").outerHeight();b=parseInt(b);var c=jQuery(this).find(".ult_dual2").outerHeight();c=parseInt(c),b>c?(jQuery(this).find(".ult_dual2").css({height:b}),jQuery(this).find(".ult_dual1").css({height:b})):c>b?(jQuery(this).find(".ult_dual1").css({height:c}),jQuery(this).find(".ult_dual2").css({height:c})):b==c&&(jQuery(this).find(".ult_dual1").css({height:c}),jQuery(this).find(".ult_dual2").css({height:c}))})}),jQuery(document).ready(function(a){recallme(),jQuery(window).load(function(){recallme()}),jQuery(window).resize(function(){recallme()})});