﻿!function (J, I) {

    function H() {
        var d = E.getBoundingClientRect().width;
        d / B > 540 && (d = 540 * B);
        var e = d / 10;
        E.style.fontSize = e + "px",
        z.rem = J.rem = e;
    }
    var G, F = J.document,
    E = F.documentElement,
    D = F.querySelector('meta[name="viewport"]'),
    C = F.querySelector('meta[name="flexible"]'),
    B = 0,
    A = 0,
    z = I.flexible || (I.flexible = {});
    if (D) {
        console.warn("将根据已有的meta标签来设置缩放比例");
        var y = D.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
        y && (A = parseFloat(y[1]), B = parseInt(1 / A))
    } else {
        if (C) {
            var x = C.getAttribute("content");
            if (x) {
                var w = x.match(/initial\-dpr=([\d\.]+)/),
                v = x.match(/maximum\-dpr=([\d\.]+)/);
                w && (B = parseFloat(w[1]), A = parseFloat((1 / B).toFixed(2))),
                v && (B = parseFloat(v[1]), A = parseFloat((1 / B).toFixed(2)))
            }
        }
    }
    if (!B && !A) {
        var u = (J.navigator.appVersion.match(/android/gi), J.navigator.appVersion.match(/iphone/gi)),
        t = J.devicePixelRatio;
        B = u ? t >= 3 && (!B || B >= 3) ? 3 : t >= 2 && (!B || B >= 2) ? 2 : 1 : 1,
        A = 1 / B
    }
    if (E.setAttribute("data-dpr", B), !D) {
        if (D = F.createElement("meta"), D.setAttribute("name", "viewport"), D.setAttribute("content", "initial-scale=" + A + ", maximum-scale=" + A + ", minimum-scale=" + A + ", user-scalable=no"), E.firstElementChild) {
            E.firstElementChild.appendChild(D)
        } else {
            var s = F.createElement("div");
            s.appendChild(D),
            F.write(s.innerHTML)
        }
    }
    J.addEventListener("resize",
    function () {
        clearTimeout(G),
        G = setTimeout(H, 300)
    },
    !1),
    J.addEventListener("pageshow",
    function (b) {
        b.persisted && (clearTimeout(G), G = setTimeout(H, 300))
    },
    !1),
    "complete" === F.readyState ? F.body.style.fontSize = 12 * B + "px" : F.addEventListener("DOMContentLoaded",
    function () {
        F.body.style.fontSize = 12 * B + "px"


    },
    !1),
    H(),
    z.dpr = J.dpr = B,
    z.refreshRem = H,
    z.rem2px = function (d) {
        var c = parseFloat(d) * this.rem;
        return "string" == typeof d && d.match(/rem$/) && (c += "px"),
        c
    },
    z.px2rem = function (d) {
        var c = parseFloat(d) / this.rem;
        return "string" == typeof d && d.match(/px$/) && (c += "rem"),
        c
    }
}(window, window.lib || (window.lib = {}));