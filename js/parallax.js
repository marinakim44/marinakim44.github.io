!(function (n) {
  var t = n(window),
    o = t.height();
  t.resize(function () {
    o = t.height();
  }),
    (n.fn.parallax = function (i, e, r) {
      var u,
        h,
        l = n(this);
      function c() {
        var r = t.scrollTop();
        l.each(function () {
          var t = n(this),
            c = t.offset().top;
          c + u(t) < r ||
            c > r + o ||
            l.css(
              "backgroundPosition",
              i + " " + Math.round((h - r) * e) + "px"
            );
        });
      }
      l.each(function () {
        h = l.offset().top;
      }),
        (u = r
          ? function (n) {
              return n.outerHeight(!0);
            }
          : function (n) {
              return n.height();
            }),
        (arguments.length < 1 || null === i) && (i = "50%"),
        (arguments.length < 2 || null === e) && (e = 0.1),
        (arguments.length < 3 || null === r) && (r = !0),
        t.bind("scroll", c).resize(c),
        c();
    });
})(jQuery);
