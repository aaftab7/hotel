jQuery(document).ready(function(e) {
    e('.menu-primary-container a:contains("Food Menu")').on('click', function(event) {
        e('#listingContent').data("type",'FOOD');        
        event.stopPropagation();
        event.stopImmediatePropagation();
        T();
    });

    e('.menu-primary-container a:contains("Wine Menu")').on('click', function(event) {
        console.log('Wine Menu clicked');
        event.stopPropagation();
        event.stopImmediatePropagation();
        T('Cocktails',null,'WINE');
    });

    function a(e) {
        var a = e[0].getTotalLength();
        e.css("stroke-dasharray", a), e.css("stroke-dashoffset", a), o(e)
    }

    function o(a) {
        e(document).find(a).css("visibility", "hidden")
        e(document).find(a).css("visibility", "hidden")
    }

    function t(a) {
        e(document).find(a).css("visibility", "visible")
    }

    function n(e) {
        TweenMax.killTweensOf(e)
    }

    function s(a) {
        e(a).remove()
    }

    function r() {
        var e = {
            zoom: 17,
//            center: Y,
            styles: [{
                featureType: "all",
                elementType: "all",
                stylers: [{
                    hue: "#00c6ff"
                }]
            }, {
                featureType: "all",
                elementType: "geometry.fill",
                stylers: [{
                    hue: "#ff0000"
                }, {
                    saturation: "-100"
                }]
            }, {
                featureType: "poi",
                elementType: "all",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "road",
                elementType: "all",
                stylers: [{
                    saturation: -100
                }, {
                    hue: "#ffffff"
                }]
            }, {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: [{
                    visibility: "on"
                }]
            }, {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{
                    hue: "#ff0000"
                }]
            }, {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [{
                    lightness: "20"
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [{
                    visibility: "on"
                }, {
                    color: "#ffffff"
                }]
            }, {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{
                    color: "#d0d0d0"
                }]
            }, {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{
                    lightness: "-0"
                }, {
                    hue: "#ff0000"
                }]
            }, {
                featureType: "road.highway",
                elementType: "labels.icon",
                stylers: [{
                    hue: "#ff0000"
                }, {
                    lightness: "10"
                }]
            }, {
                featureType: "transit",
                elementType: "all",
                stylers: [{
                    visibility: "off"
                }]
            }, {
                featureType: "water",
                elementType: "all",
                stylers: [{
                    visibility: "simplified"
                }, {
                    saturation: -60
                }, {
                    color: "#bde3ee"
                }]
            }],
            scrollwheel: !1,
            disableDefaultUI: !0
        };
    }

    function l() {
        F = 100
    }

    function c() {
        X = 0, F = 100
    }

    function d() {
        clearTimeout(D), X = 0, e(window).scrollTop() < j[3] && TweenMax.to(window, .5 + Math.abs(e(window).scrollTop() / C - Math.round(e(window).scrollTop() / C)), {
            scrollTo: {
                y: Math.round(e(window).scrollTop() / C) * C
            },
            ease: Quad.easeInOut
        }), e(window).scrollTop() > j[4] - C / 2 && e(window).scrollTop() < j[4] + C / 2 && TweenMax.to(window, .5 + Math.abs(e(window).scrollTop() / C - Math.round(e(window).scrollTop() / C)), {
            scrollTo: {
                y: j[4] + Math.round((e(window).scrollTop() - j[4]) / C) * C
            },
            ease: Quad.easeInOut
        }), e(window).scrollTop() > j[6] - C / 2 && e(window).scrollTop() < j[6] + C / 2 && TweenMax.to(window, .5 + Math.abs(e(window).scrollTop() / C - Math.round(e(window).scrollTop() / C)), {
            scrollTo: {
                y: j[6] + Math.round((e(window).scrollTop() - j[6]) / C) * C
            },
            ease: Quad.easeInOut
        }), e(window).scrollTop() > j[7] - C / 2 && e(window).scrollTop() < j[7] && TweenMax.to(window, .5 + Math.abs(e(window).scrollTop() / C - Math.round(e(window).scrollTop() / C)), {
            scrollTo: {
                y: j[7] + Math.round((e(window).scrollTop() - j[7]) / C) * C
            },
            ease: Quad.easeInOut
        })
    }

    function w(a) {
        if (L) {
            var o = a.data("id"),
                t = Math.abs(e(window).scrollTop() - j[o - 1]);
            TweenMax.to(window, 2 + t / (5 * C), {
                scrollTo: {
                    y: j[o - 1]
                },
                ease: Power4.easeInOut
            }), L = !1
        }
        e(".mainmenu li").each(function() {
            e(this).hasClass("current") && e(this)[0] != a[0] && e(this).removeClass("current"), e(this).hasClass("current") ? TweenMax.to(e(this).children("div"), .5, {
                scaleX: .5,
                scaleY: .5,
                opacity: 1,
                ease: Back.easeOut
            }) : TweenMax.to(e(this).children("div"), .5, {
                scaleX: 1,
                scaleY: 1,
                opacity: .5,
                ease: Back.easeOut
            })
        })
    }

    function p() {
        TweenMax.to(e(".white-bg"), .5, {
            opacity: 0,
            onComplete: o,
            onCompleteParams: [e(".carte")],
            ease: Power2.easeIn
        }), TweenMax.to(e(".black-bg"), .5, {
            opacity: 0
        })
    }

    function bestCopyEver(src) {
        return Object.assign({}, src);
    }

    function filterByType(data,type) {
        var filteredMenu = bestCopyEver(data);
        console.log('before setting'+type);
        if(!type) {
            type = e('#listingContent').data("type")
        }
        console.log('after setting'+type);
        if(type) {
            filteredMenu.categories = filteredMenu.categories.filter(function(el) {
                console.log(el.menuType);
                return el.menuType == type;
            });
        }
        e('.fullMenu a').attr("href",(type=='FOOD')?full_menu_food_url:full_menu_wine_url);

        return filteredMenu
    }

    function renderRestaurantMenu(data, cname, type) {
        var filteredMenu = filterByType(data,type)

        jQuery.each(filteredMenu.categories,function(index, value){
            //console.log(value.name + '' + categoryName);
            if(value.name == cname) {
                console.log('category '+value.name+' update type data'+type);
                e('#listingContent').data("type",type);
                e("#listingContent .title h3").html(value.name)
                console.log(base_path + value.imageUrl);
                var cnt = 1;
                if(value.imageName!=null) {
                    e("#slideshowMenu").append('<li class="slide slide' + cnt + '"></li>'), e(".slide" + cnt).html('<div class="slide-img"></div>'), e(".slide" + cnt + " .slide-img").css("background-image", 'url("' + base_path + value.imageUrl + '")'), e(".slide" + cnt).append('<div class="caption"><p>' + value.name + "</p></div>");
                }
                populateMenuItem(value);
            }
        });
    }

    function populateMenuItem(category) {
        var cnt = 2;
        jQuery.each(category.menuItems, function(index, value) {
            var s = e("#cloneCell").clone();
            s.attr("id", value.name), s.removeClass("hidden"), s.find(".blocLeft h5").html(value.name), s.find(".blocLeft").append(value.description), s.find(".blocRight").append(value.price+' '+value.currencySymbol), s.appendTo(".listing ul")
            console.log(base_path + value.imageUrl);
            if(value.imageName!=null) {
                e("#slideshowMenu").append('<li class="slide slide' + cnt + '"></li>')
                e(".slide" + cnt).html('<div class="slide-img"></div>')
                e(".slide" + cnt + " .slide-img").css("background-image", 'url("' + base_path + value.imageUrl + '")')
                e(".slide" + cnt).append('<div class="caption"><p>' + value.name + "</p></div>");
                cnt = cnt+1;
            }
        });
    }

    function findPrev(data,type,cname) {
        var a;
        var filteredMenu = filterByType(data,type)
        jQuery.each(filteredMenu.categories,function(index, value){
            console.log('in find next '+value.name + ' '+cname);
            if(value.name == cname) {
                if(index == 0) {
                    a = filteredMenu.categories[filteredMenu.categories.length-1].name;
                }
                else {
                    a = filteredMenu.categories[index-1].name;
                }
                return false;
            }
        });
        return a;
    }

    function findNext(data,type,cname) {
        var a;
        var filteredMenu = filterByType(data,type)
        jQuery.each(filteredMenu.categories,function(index, value){
            console.log('in find next '+value.name + ' '+cname);
            if(value.name == cname) {
                if(index == filteredMenu.categories.length-1) {
                    a = filteredMenu.categories[0].name;
                }
                else {
                    a = filteredMenu.categories[index+1].name;
                }
                return false;
            }
        });
        return a;
    }

	function T(a, o, type) {
        e(".rslides_tabs").remove(), e("#slideshowMenu").empty().removeClass(), e("#listingContent ul").empty(), e("#listingContent .arrow-up").css("opacity", 0), null == o ? (e(".carte").css("visibility", "visible"), TweenMax.fromTo(e(".black-bg"), 1, {
            opacity: 0
        }, {
            delay: .5,
            opacity: .8
        }), TweenMax.fromTo(e(".carte").find(".white-bg"), .5, {
            width: 0,
            opacity: 1
        }, {
            width: "80%",
            ease: Power2.easeOut
        }), TweenMax.fromTo(".picture", .3, {
            opacity: 0,
            x: 100
        }, {
            opacity: 1,
            x: 0,
            ease: Power1.easeOut
        }), TweenMax.fromTo(".listing", .3, {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            ease: Power1.easeOut,
            delay: .05
        })) : "right" == o ? (TweenMax.fromTo(".white-bg", .3, {
            opacity: 0,
            x: 100
        }, {
            opacity: 1,
            x: 0,
            ease: Power2.easeOut,
            transformOrigin: "right"
        }), TweenMax.fromTo(".picture", .3, {
            opacity: 0,
            x: 100
        }, {
            opacity: 1,
            x: 0,
            ease: Power1.easeOut
        }), TweenMax.fromTo(".listing", .3, {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            ease: Power1.easeOut,
            delay: .05
        })) : (TweenMax.fromTo(".white-bg", .3, {
            opacity: 0,
            x: -100
        }, {
            opacity: 1,
            x: 0,
            ease: Power2.easeOut,
            transformOrigin: "left"
        }), TweenMax.fromTo(".picture", .3, {
            opacity: 0,
            x: -100
        }, {
            opacity: 1,
            x: 0,
            ease: Power1.easeOut
        }), TweenMax.fromTo(".listing", .3, {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            ease: Power1.easeOut,
            delay: .05
        }));
        console.log(base_path+"/restaurantmenu/"+site_id);
        if(!a && restMenu) {
            if(!o) {
                a = restMenu.categories[0].name;
            } else {
                cname = e("#listingContent .title h3").text();
                if(o == "right") {
                    a = findNext(restMenu,type,cname);
                }
                else {
                    a = findPrev(restMenu,type,cname);
                }
            }
        }
        console.log('type'+type);
        if(!restMenu) {
            e.get(base_path+"/restaurantmenu/"+site_id, function(data, status){
                 restMenu =  data;
                 console.log(JSON.stringify(restMenu));
                 if(!a) {
                    a = restMenu.categories[0].name;
                 }
                 renderRestaurantMenu(restMenu,a, type);
                 initSlider();
            });
        } else {
            renderRestaurantMenu(restMenu, a, type);
            initSlider();
        }
        console.log('sliedshowMenu initialize');
    }

    function initSlider()
    {
        m(), e("#slideshowMenu").responsiveSlides({
            auto: !0,
            speed: 1e3,
            timeout: 3e3,
            pager: !0,
            nav: !1,
            random: !1,
            pauseControls: !0,
            prevText: "",
            nextText: "",
            pauseControls: !0,
            before: function() {},
            after: function() {}
        }), e("#slideshowMenu").css("overflow", "visible"), e(".rslides_tabs li a").html('<div class="puce"></div>'), setTimeout(g, 100)
    }

function m() {
        0 == e(".listing .list-item").scrollTop() ? e(".listing .arrow-up").css("opacity", "0") : e(".listing .arrow-up").css("opacity", "1"), e(".listing .list-item").scrollTop() == e(".listing ul").height() - e(".listing .list-item").height() ? e(".listing .arrow-down").css("opacity", "0") : e(".listing .arrow-down").css("opacity", "1")
    }

    function g() {
        e(".listing ul").height() > e(".listing .list-item").height() ? (e(".listing .arrow-down").removeClass("hidden"), e(".listing .arrow-up").removeClass("hidden")) : (e(".listing .arrow-down").addClass("hidden"), e(".listing .arrow-up").addClass("hidden"))
    }
   
    Pace.start();
    var x = e("#wrapper img").length,
        f = 0;
    e("#wrapper img").one("load", function() {
        f++
    }), e("#wrapper img").one("error", function() {
        f++
    }), e("#wrapper img").each(function() {
        this.complete && e(this).trigger("load")
    }), e("#logoLoading path").each(function() {
        a(e(this))
    });
    var h, M = ["#ffe09c", "#cde4b0", "#e98e7d", "#6d969c"],
        v = 0,
        O = 0;
    e("body").hasClass("pace-running") && (e("#logoLoading").css("opacity", 1), h = setInterval(function() {
        var a = e(".pace-progress").attr("data-progress-text");
        if (progressPace = parseFloat(a) / 10, progressImg = 0, progressImg = f / x * 100, progressTotal = progressImg, progressTotalFloor = Math.floor(progressTotal), e("#percent h1").html(progressTotalFloor + "%"), O != progressTotalFloor && (v++, 4 == v && (v = 0), TweenMax.to("#percent h1", .5, {
                css: {
                    color: M[v]
                }
            }), O = progressTotalFloor), 100 == progressTotal) {
            clearInterval(h); {
                (new TimelineMax).add([TweenMax.to("#loading", .5, {
                    delay: .5,
                    opacity: 0
                })]).add([TweenMax.staggerTo("#logoLoading path", 1, {
                    delay: .5,
                    onStart: t,
                    onStartParams: ["#logoLoading path"],
                    strokeDashoffset: 0,
                    ease: Power1.easeInOut
                }, .5), TweenMax.to(".titleunder", 1, {
                    startAt: {
                        y: 10
                    },
                    y: 0,
                    delay: 1,
                    opacity: 1
                })]).add([TweenMax.fromTo(e(".point1"), .5, {
                    opacity: 0,
                    x: 7,
                    y: -10
                }, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    ease: Power1.easeOut,
                    delay: -.4
                })]).add([TweenMax.fromTo(e(".point2"), .5, {
                    opacity: 0,
                    x: 10,
                    y: -10
                }, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    ease: Power1.easeOut,
                    delay: -.3
                })]).add([TweenMax.to(".blackscreen2", 1, {
                    opacity: 0,
                    ease: Power1.easeOut,
                    delay: .3,
                    onComplete: s,
                    onCompleteParams: [".blackscreen2"],
                    delay: .5
                })]).add([TweenMax.fromTo(".arrow", 1, {
                    opacity: 0
                }, {
                    opacity: 1,
                    delay: 1
                }), TweenMax.to(".arrow img", .5, {
                    y: 10,
                    yoyo: !0,
                    repeat: -1,
                    ease: Power3.easeIn
                })])
            }
        }
    }, 100));
    var restMenu;
    var b, P = [];
    e("#tracesvg path").each(function() {
        a(e(this))
    });
    var S, k, I, L = !1,
        C = e(".section1").height(),
        E = [0, 2 * C, 3 * C, 3 * C, 4400, C, 2 * C, C, C],
        N = 0,
        j = [];
    for (i = 0; i <= 8; i++) N += E[i], j[i] = N;
    e(window).bind("resize", function() {
        for (g(), C = e(".section1").height(), E = [0, 2 * C, 3 * C, 3 * C, 4400, C, 2 * C, C, C], N = 0, i = 0; i <= 8; i++) N += E[i], j[i] = N;
        S.update(!0), B.panTo(Y), k.parallax("updateLayers")
    });
    var D, B, Q,
        X = 0,
        F = 100,
        q = new Lethargy;
    e(window).bind("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(a) {
        if ("visible" == e(".carte").css("visibility") && (a.preventDefault(), a.stopPropagation()), e(window).scrollTop() < j[3]) a.preventDefault(), a.stopPropagation(), Q = q.check(a), Q !== !1 && Q != X && (X = Q, TweenMax.to(window, 1.2, {
            scrollTo: {
                y: Math.round(e(window).scrollTop() / C) * C + C * Q * -1
            },
            ease: Quad.easeInOut,
            onComplete: c
        }));
        else {
            var o = navigator.userAgent.toLowerCase().indexOf("chrome") > -1,
                t = navigator.userAgent.toLowerCase().indexOf("windows") > -1;
            o && t && (Q = Math.abs(a.deltaY) / a.deltaY, "undefined" == typeof a.deltaY ? Q = X : X = Q, a.preventDefault(), a.stopPropagation(), setTimeout(l, 300), F += 20, 120 == F ? TweenMax.to(window, .3, {
                scrollTo: {
                    y: e(window).scrollTop() - Q * F
                },
                ease: Quad.easeInOut,
                onComplete: c
            }) : TweenMax.to(window, .3, {
                scrollTo: {
                    y: e(window).scrollTop() - Q * F
                },
                ease: Quad.easeOut,
                onComplete: c
            }))
        }
    }), e(window).bind("scroll", function() {
        S.update(!0), e(window).scrollTop() < j[5] && e(window).scrollTop() > j[4] - C ? e(".slideshow").addClass("play").removeClass("pause") : e(".slideshow").addClass("pause").removeClass("play"), clearTimeout(D), D = setTimeout(d, 500), e(window).scrollTop() < j[1] - C / 2 ? e(".m1").hasClass("current") || (e(".m1").addClass("current"), w(e(".m1"))) : e(window).scrollTop() < j[2] - C / 2 ? e(".m2").hasClass("current") || (e(".m2").addClass("current"), w(e(".m2"))) : e(window).scrollTop() < j[3] - C / 2 ? e(".m3").hasClass("current") || (e(".m3").addClass("current"), w(e(".m3"))) : e(window).scrollTop() < j[4] - C / 2 ? e(".m4").hasClass("current") || (e(".m4").addClass("current"), w(e(".m4"))) : e(window).scrollTop() < j[5] - C / 2 ? e(".m5").hasClass("current") || (e(".m5").addClass("current"), w(e(".m5"))) : e(window).scrollTop() < j[6] - C / 2 ? e(".m6").hasClass("current") || (e(".m6").addClass("current"), w(e(".m6"))) : e(window).scrollTop() < j[7] - C / 2 ? e(".m7").hasClass("current") || (e(".m7").addClass("current"), w(e(".m7"))) : e(window).scrollTop() < j[8] - C / 2 && (e(".m8").hasClass("current") || (e(".m8").addClass("current"), w(e(".m8"))))
    }), e(".carte").bind("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(a) {
        a.preventDefault(), a.stopPropagation(), Q = q.check(a), Q !== !1 && TweenMax.to(".listing .list-item", .3, {
            scrollTo: {
                y: e(".listing .list-item").scrollTop() + 100 * Q * -1
            },
            ease: Quad.easeInOut,
            onUpdate: m
        })
    }), e(".carte .arrow-up").click(function() {
        TweenMax.to(".listing .list-item", .3, {
            scrollTo: {
                y: e(".listing .list-item").scrollTop() + -100
            },
            ease: Quad.easeInOut,
            onUpdate: m
        })
    }), e(".carte .arrow-down").click(function() {
        TweenMax.to(".listing .list-item", .3, {
            scrollTo: {
                y: e(".listing .list-item").scrollTop() + 100
            },
            ease: Quad.easeInOut,
            onUpdate: m
        })
    }), e(".carte .arrow-up").mouseenter(function() {
        TweenMax.fromTo(e(this).find("img"), .3, {
            y: 0
        }, {
            y: -5,
            ease: Power2.easeOut,
            yoyo: !0,
            repeat: -1
        })
    }), e(".carte .arrow-down").mouseenter(function() {
        TweenMax.fromTo(e(this).find("img"), .3, {
            y: 0
        }, {
            y: 5,
            ease: Power2.easeOut,
            yoyo: !0,
            repeat: -1
        })
    }), e(".carte .arrow-up").mouseleave(function() {
        TweenMax.killTweensOf(e(this).find("img")), TweenMax.to(e(this).find("img"), .3, {
            y: 0,
            ease: Power2.easeInOut
        })
    }), e(".carte .arrow-down").mouseleave(function() {
        TweenMax.killTweensOf(e(this).find("img")), TweenMax.to(e(this).find("img"), .3, {
            y: 0,
            ease: Power2.easeInOut
        })
    }), e(".carte .arrow-left").click(function() {
        1 == b ? b = 7 : b--, TweenMax.to(".white-bg", .3, {
            x: 100,
            opacity: 0,
            ease: Power2.easeIn,
            onComplete: T,
            onCompleteParams: [b, "left"]
        })
    }), e(".carte .arrow-right").click(function() {
        7 == b ? b = 1 : b++, TweenMax.to(".white-bg", .3, {
            x: -100,
            opacity: 0,
            ease: Power2.easeIn,
            onComplete: T,
            onCompleteParams: [b, "right"]
        })
    }), e(".carte .arrow-left").mouseenter(function() {
        TweenMax.fromTo(e(this).find("img"), .3, {
            x: 0
        }, {
            x: -20,
            ease: Power2.easeOut,
            yoyo: !0,
            repeat: -1
        })
    }), e(".carte .arrow-right").mouseenter(function() {
        TweenMax.fromTo(e(this).find("img"), .3, {
            x: 0
        }, {
            x: 20,
            ease: Power2.easeOut,
            yoyo: !0,
            repeat: -1
        })
    }), e(".carte .arrow-left").mouseleave(function() {
        TweenMax.killTweensOf(e(this).find("img")), TweenMax.to(e(this).find("img"), .3, {
            x: 0,
            ease: Power2.easeInOut
        })
    }), e(".carte .arrow-right").mouseleave(function() {
        TweenMax.killTweensOf(e(this).find("img")), TweenMax.to(e(this).find("img"), .3, {
            x: 0,
            ease: Power2.easeInOut
        })
    }), r(), e(".slideshow").responsiveSlides({
        auto: !0,
        speed: 1e3,
        timeout: 3e3,
        pager: !1,
        nav: !0,
        random: !1,
        prevText: "",
        nextText: "",
        pauseControls: !0,
        before: function() {},
        after: function() {}
    }), k = e(".section1 #scene").parallax(), authenticScene = e(".authentic #scene").parallax(),reserveScene = e(".reserve #scene").parallax(), 
    S = new ScrollMagic.Controller;
    if (e(".section1")[0])
    {
        var z = (new TimelineMax).add([TweenMax.fromTo(".blackscreen", 1, {
            opacity: .1
        }, {
            opacity: .8
        }), TweenMax.fromTo(".section1 .titleslide", .5, {
            y: 0,
            opacity: 1
        }, {
            opacity: 0,
            y: -300,
            ease: Power1.easeIn
        })]);
        new ScrollMagic.Scene({
            triggerElement: ".section1",
            triggerHook: "onLeave",
            duration: "100%"
        }).setPin(".section1").setTween(z).addTo(S), e(".section1 .arrow").click(function() {
            if (0 === e(window).scrollTop()) {
                {
                    Math.abs(e(window).scrollTop() - C)
                }
                TweenMax.to(window, 1, {
                    scrollTo: {
                        y: C
                    },
                    ease: Power1.easeInOut
                })
            } else {
                {
                    var a = 2;
                    Math.abs(e(window).scrollTop() - j[a - 1])
                }
                TweenMax.to(window, 1, {
                    scrollTo: {
                        y: j[a - 1]
                    },
                    ease: Power1.easeInOut
                })
            }
        });
        var A = (new TimelineMax).add([TweenMax.fromTo(".bg1", 1, {
                y: "0%"
            }, {
                y: "100%",
                ease: Linear.easeNone
            }), TweenMax.fromTo(".bg2", 1, {
                y: "-100%"
            }, {
                y: "0%",
                ease: Linear.easeNone
            })]).add([TweenMax.fromTo(".bg2", 1, {
                x: "0%"
            }, {
                x: "-100%",
                ease: Linear.easeNone
            }), TweenMax.fromTo(".bg3", 1, {
                x: "100%"
            }, {
                x: "0%",
                ease: Linear.easeNone
            })]);
    }
    if (e(".walkin")[0])
    {
	    var _ = (new TimelineMax).add([TweenMax.fromTo(".walkin .parallax-window", 1, {
		y: "-50%"
	    }, {
		y: "0%",
		ease: Linear.easeNone
	    }), TweenMax.fromTo(".walkin .textOverparallax", 1, {
		y: -100,
		opacity: 0
	    }, {
		y: 0,
		opacity: 1,
		ease: Linear.easeNone
	    }), TweenMax.fromTo(".lampe", 1, {
		y: "20%"
	    }, {
		y: "0%",
		ease: Linear.easeNone
	    })]).add([TweenMax.fromTo(".walkin .parallax-window", 1, {
		y: "0%"
	    }, {
		y: "50%",
		ease: Linear.easeNone
	    }), TweenMax.fromTo(".walkin .textOverparallax", 1, {
		y: 0
	    }, {
		y: 100,
		ease: Linear.easeNone
	    }), TweenMax.fromTo(".lampe", 1, {
		y: "0%"
	    }, {
		y: "-20%",
		ease: Linear.easeNone
	    })]);
	    scenewalkin = new ScrollMagic.Scene({
		triggerElement: ".walkin",
		triggerHook: "onEnter",
		duration: "200%"
	    }).setTween(_).addTo(S);
    }
    
    if (e(".theRestaurant")[0])
    {
	    var R = (new TimelineMax).add([TweenMax.fromTo(".theRestaurant .parallax-window", 1, {
		y: "-50%"
	    }, {
		y: "0%",
		ease: Linear.easeNone
	    }), TweenMax.fromTo(".theRestaurant .textOverparallax", 1, {
		y: -250
	    }, {
		y: 0,
		ease: Linear.easeNone
	    })]).add([TweenMax.fromTo(".theRestaurant .parallax-window", 1, {
		y: "0%"
	    }, {
		y: "50%",
		ease: Linear.easeNone
	    }), TweenMax.fromTo(".theRestaurant .textOverparallax", 1, {
		y: 0
	    }, {
		y: 250,
		ease: Linear.easeNone
	    })]);
	    scenetheRestaurant = new ScrollMagic.Scene({
		triggerElement: ".theRestaurant",
		triggerHook: "onEnter",
		duration: "200%"
	    }).setTween(R).addTo(S);
    }

    if (e(".theRestaurant")[0])
    {
	    var G = (new TimelineMax).add([TweenMax.fromTo(".parassol.rouge", 1.3, {
		x: 150,
		y: 50,
		rotation: 30
	    }, {
		x: -150,
		y: -50,
		rotation: -30,
		ease: Power1.easeInOut
	    }), TweenMax.fromTo(".parassol.vert", 1.5, {
		x: -250,
		y: 170,
		rotation: -30
	    }, {
		x: 250,
		y: -170,
		rotation: 45,
		ease: Power1.easeInOut
	    }), TweenMax.fromTo(".parassol.creme", 1.2, {
		x: -150,
		y: -15,
		rotation: 40
	    }, {
		x: 150,
		y: 15,
		rotation: 0,
		ease: Power1.easeInOut
	    }), TweenMax.fromTo(".verre", 1.2, {
		x: 120,
		y: -25,
		rotation: -25
	    }, {
		x: 120,
		y: 100,
		rotation: 25,
		ease: Power1.easeInOut
	    }), TweenMax.fromTo(".goutte", 1.2, {
		y: 0
	    }, {
		scaleX: .8,
		scaleY: .8,
		y: 150,
		ease: Power1.easeInOut
	    }), TweenMax.fromTo(".calme .title", 1.5, {
		x: 150,
		opacity: 0
	    }, {
		x: -150,
		opacity: 3,
		ease: Power1.easeInOut
	    })]);
	    scenetheBar = new ScrollMagic.Scene({
		triggerElement: ".theBar",
		triggerHook: "onEnter",
		duration: "200%"
	    }).setTween(G).addTo(S);

	    var W = (new TimelineMax).add([TweenMax.fromTo(".theBarpara .parallax-window", 1, {
		x: 0
	    }, {
		x: -200,
		ease: Linear.easeNone
	    })]).add([TweenMax.fromTo(".theBarpara .parallax-window", 1, {
		x: -200
	    }, {
		x: -400,
		ease: Linear.easeNone
	    })]);
	    scenetheBarParallax = new ScrollMagic.Scene({
		triggerElement: ".theBar",
		triggerHook: "onEnter",
		duration: "200%"
	    }).setTween(W).addTo(S);
    }

    if (e(".theRestaurant")[0])
    {
	    var Z = new TimelineMax({
		delay: 23
	    });
	  Z.to("#tracesvg path#p1", 14, {
		onStart: t,
		onStartParams: ["path#p1"],
		strokeDashoffset: 0,
		ease: Linear.easeNone
	    }).to("#tracesvg path#p2", 2, {
		onStart: t,
		onStartParams: ["path#p2"],
		strokeDashoffset: 0,
		ease: Linear.easeNone,
		delay: 1.5
	    }).to("#tracesvg path#p3",12, {
		onStart: t,
		onStartParams: ["path#p3"],
		strokeDashoffset: 0,
		ease: Linear.easeNone,
		delay: 1.5
	    }).to("#tracesvg path#p4", 7, {
		onStart: t,
		onStartParams: ["path#p4"],
		strokeDashoffset: 0,
		ease: Linear.easeNone,
		delay: 1.5
	    }).to("#tracesvg path#p5", 14, {
		onStart: t,
		onStartParams: ["path#p5"],
		strokeDashoffset: 0,
		ease: Linear.easeNone,
		delay: 1.5
	    }).to("#tracesvg path#p6", 12, {
		onStart: t,
		onStartParams: ["path#p6"],
		strokeDashoffset: 0,
		ease: Linear.easeNone,
		delay: 1.5
	    }).to("#tracesvg path#p7", 11, {
		onStart: t,
		onStartParams: ["path#p7"],
		strokeDashoffset: 0,
		ease: Linear.easeNone,
		delay: 1.5
	    });
	    var J = new TimelineMax({
		delay: 18
	    });
	    
	    var K = new TimelineMax({
		delay: 0
	    });
	    K.add([TweenMax.fromTo(".plate1", 30, {
		x: -20,
		rotation: -15
	    }, {
		x: 0,
		rotation: 0,
		ease: Power1.easeInOut
	    }), TweenMax.fromTo(".plate2", 30, {
		x: 20,
		rotation: 15
	    }, {
		x: 0,
		rotation: 0,
		ease: Power1.easeInOut,
		delay: 10
	    }), TweenMax.fromTo(".plate3", 30, {
		y: -50,
		x: -20,
		rotation: -15
	    }, {
		y: 0,
		x: 0,
		rotation: 0,
		ease: Power1.easeInOut,
		delay: 30
	    }), TweenMax.fromTo(".plate4", 30, {
		x: 20,
		rotation: 15
	    }, {
		x: 0,
		rotation: 0,
		ease: Power1.easeInOut,
		delay: 34
	    }), TweenMax.fromTo(".plate5", 30, {
		x: 20,
		rotation: -15
	    }, {
		x: 0,
		rotation: 0,
		ease: Power1.easeInOut,
		delay: 34
	    })]);
	    var V = (new TimelineMax).add([Z, J, K]);
	    sceneatTheMenu = new ScrollMagic.Scene({
		triggerElement: ".atTheMenu",
		triggerHook: "onEnter",
		duration: "4000px"
	    }).setTween(V).addTo(S);
    }

    if (e(".cathering")[0])
    {
	    var aa = (new TimelineMax).fromTo(".cathering .equipe1", .7, {
		opacity: 0,
		y: 100
	    }, {
		opacity: 1,
		y: 0,
		ease: Quad.easeOut
	    });
	    sceneSection9Equipe1 = new ScrollMagic.Scene({
		triggerElement: ".cathering .equipe1",
		triggerHook: "onEnter"
	    }).setTween(aa).addTo(S);
	    var oa = (new TimelineMax).fromTo(".cathering .equipe2", .7, {
		opacity: 0,
		y: 100
	    }, {
		opacity: 1,
		y: 0,
		ease: Quad.easeOut
	    });
	    sceneSection9Equipe2 = new ScrollMagic.Scene({
		triggerElement: ".cathering .equipe2",
		triggerHook: "onEnter"
	    }).setTween(oa).addTo(S);
	
		var sa = (new TimelineMax).add([TweenMax.from(".translayer", 1, {
		y: 300,
		ease: Linear.easeNone
	    }, {
		y: -200,
		ease: Linear.easeNone
	    })]);
	    sceneSection10Paragraph = new ScrollMagic.Scene({
		triggerElement: ".authentic",
		triggerHook: "onEnter"
	    }).setTween(sa).addTo(S);
    }

    if (e(".testimonial")[0])
    {
	    var ia = (new TimelineMax).add([TweenMax.from(".infoSlider", 1, {
		y: 300,
		ease: Linear.easeNone
	    }, {
		y: -200,
		ease: Linear.easeNone
	    })]);
	    sceneSection12 = new ScrollMagic.Scene({
		triggerElement: ".testimonial",
		triggerHook: "onEnter"
	    }).setTween(ia).addTo(S), e(".rollover").each(function() {
		e(this).mouseenter(function() {
		    e(this).css("cursor", "pointer"), TweenMax.killTweensOf(e(this).find(".roundbtn")), TweenMax.to(e(this).find(".roundbtn"), .3, {
		        opacity: 1,
		        scaleX: 1,
		        scaleY: 1,
		        ease: Back.easeOut,
		        delay: .03
		    }), TweenMax.to(e(this).find(".roundbtn #decouvrir"), .2, {
		        delay: .3,
		        opacity: 1
		    })
		}), e(this).mouseleave(function() {
		    TweenMax.killTweensOf(e(this).find(".roundbtn")), TweenMax.to(e(this).find(".roundbtn #decouvrir"), .2, {
		        opacity: 0
		    }), TweenMax.to(e(this).find(".roundbtn"), .3, {
		        scaleX: 0,
		        scaleY: 0,
		        ease: Back.easeIn,
		        delay: .3
		    })
		}), e(this).click(function() {
		    b = e(this).data("id"), type = e(this).data("type") , T(b,null,type)
		})
	    }), e(".mainmenu li").mouseover(function() {
		TweenMax.to(e(this).children("span"), .2, {
		    opacity: 1,
		    x: -100
		}), TweenMax.to(e(this).children("div"), .5, {
		    scaleX: .5,
		    scaleY: .5,
		    opacity: 1,
		    ease: Back.easeOut
		}), e(this).css("cursor", "pointer")
	    }), e(".mainmenu li").mouseout(function() {
		TweenMax.to(e(this), .2, {
		    x: 0,
		    ease: Back.easeOut
		}), TweenMax.to(e(this).children("span"), 1, {
		    opacity: 0
		}), e(this).hasClass("current") ? TweenMax.to(e(this).children("div"), .5, {
		    scaleX: .5,
		    scaleY: .5,
		    opacity: 1,
		    ease: Back.easeOut
		}) : TweenMax.to(e(this).children("div"), .5, {
		    scaleX: 1,
		    scaleY: 1,
		    opacity: .5,
		    ease: Back.easeOut
		})
	    }), e(".mainmenu li").click(function() {
		e(this).addClass("current"), L = !0, w(e(this))
	    })
    }
        e(".carte .black-bg").click(function() {
		p()
	    }), e(".closeBtn").mouseenter(function() {
		e(this).css("cursor", "pointer"), TweenMax.to(e(this).find("img"), .3, {
		    opacity: 1,
		    rotation: 90,
		    scale: .8,
		    ease: Back.easeOut
		})
	    }), e(".closeBtn").mouseleave(function() {
		TweenMax.to(e(this).find("img"), .3, {
		    opacity: 1,
		    rotation: 0,
		    scale: 1,
		    ease: Back.easeOut
		})
	    }), e(".closeBtn").click(function() {
		p()
	    })
	e(function() {
		e(".rslides").responsiveSlides({
		  auto: true,             // Boolean: Animate automatically, true or false
		  speed: 3000,            // Integer: Speed of the transition, in milliseconds
		  timeout: 8000,          // Integer: Time between slide transitions, in milliseconds
		  pager: true,           // Boolean: Show pager, true or false
		});
	});	
});
function openNav() {
  console.log('open nav invoked..!');
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}