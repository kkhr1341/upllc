!function (a) { "use strict"; function b() { a("audio.mkdf-blog-audio").mediaelementplayer({ audioWidth: "100%" }) } function c() { if (a(".mkdf-blog-holder.mkdf-blog-type-masonry").length) { var b = a(".mkdf-blog-holder.mkdf-blog-type-masonry"); b.isotope({ itemSelector: "article", resizable: !1, masonry: { columnWidth: ".mkdf-blog-masonry-grid-sizer", gutter: ".mkdf-blog-masonry-grid-gutter" } }), setTimeout(function () { b.animate({ opacity: 1 }, 400) }, 200); var c = a(".mkdf-filter-blog-holder"); a(".mkdf-filter").on("click", function () { var d = a(this), e = d.attr("data-filter"); return c.find(".mkdf-active").removeClass("mkdf-active"), d.addClass("mkdf-active"), b.isotope({ filter: e }), !1 }) } } function d() { if (a(".mkdf-blog-holder.mkdf-blog-type-masonry").length) { var b = a(".mkdf-blog-holder.mkdf-blog-type-masonry"); if (b.hasClass("mkdf-masonry-pagination-infinite-scroll")) b.infinitescroll({ navSelector: ".mkdf-blog-infinite-scroll-button", nextSelector: ".mkdf-blog-infinite-scroll-button a", itemSelector: "article", loading: { finishedMsg: mkdfGlobalVars.vars.mkdfFinishedMessage, msgText: mkdfGlobalVars.vars.mkdfMessage } }, function (c) { b.append(c).isotope("appended", a(c)), mkdf.modules.blog.mkdfInitAudioPlayer(), mkdf.modules.common.mkdfOwlSlider(), setTimeout(function () { b.isotope("layout") }, 400) }); else if (b.hasClass("mkdf-masonry-pagination-load-more")) { var c = 1; a(".mkdf-blog-load-more-button a").on("click", function (d) { d.preventDefault(); var e = a(this), f = a(".mkdf-load-more-btn-holder .mkdf-pulse-loader-holder"); e.addClass("mkdf-load-more-btn-active"), f.addClass("mkdf-spinner-active"); var g = e.attr("href"), h = ".mkdf-blog-load-more-button a", i = a(h).attr("href"); a.get(g + "", function (d) { var g = a(".mkdf-masonry-pagination-load-more", d).wrapInner("").html(); b.append(g).isotope("reloadItems").isotope({ sortBy: "original-order" }), mkdf.modules.blog.mkdfInitAudioPlayer(), mkdf.modules.common.mkdfOwlSlider(), setTimeout(function () { a(".mkdf-masonry-pagination-load-more").isotope("layout") }, 400), e.parent().data("rel") > c ? (e.attr("href", i), e.removeClass("mkdf-load-more-btn-active"), f.removeClass("mkdf-spinner-active")) : e.parent().remove() }), c++ }) } } } var e = {}; mkdf.modules.blog = e, e.mkdfInitAudioPlayer = b, a(document).ready(function () { b(), d() }), a(window).load(function () { c() }) }(jQuery);