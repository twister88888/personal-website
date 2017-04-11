(function(a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cv(a) {
        if (!ck[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                cl || (cl = c.createElement("iframe"), cl.frameBorder = cl.width = cl.height = 0), b.appendChild(cl);
                if (!cm || !cl.createElement) cm = (cl.contentWindow || cl.contentDocument).document, cm.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), cm.close();
                d = cm.createElement(a), cm.body.appendChild(d),
                    e = f.css(d, "display"), b.removeChild(cl)
            }
            ck[a] = e
        }
        return ck[a]
    }

    function cu(a, b) {
        var c = {};
        f.each(cq.concat.apply([], cq.slice(0, b)), function() {
            c[this] = a
        });
        return c
    }

    function ct() {
        cr = b
    }

    function cs() {
        setTimeout(ct, 0);
        return cr = f.now()
    }

    function cj() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function ci() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function cc(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {},
            g, h, i = d.length,
            j, k = d[0],
            l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g ===
                1)
                for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*") k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }!n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }

    function cb(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] ===
            "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)
            for (i in e)
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
        if (f[0] in d) j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function ca(a, b, c, d) {
        if (f.isArray(b)) f.each(b, function(b, e) {
            c || bE.test(a) ? d(a, e) : ca(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
        });
        else if (!c && b != null && typeof b == "object")
            for (var e in b) ca(a + "[" + e + "]", b[e], c, d);
        else d(a,
            b)
    }

    function b_(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function b$(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === bT,
            l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = b$(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = b$(a, c, d, e, "*", g));
        return l
    }

    function bZ(a) {
        return function(b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bP),
                    e = 0,
                    g = d.length,
                    h, i, j;
                for (; e < g; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }

    function bC(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? bx : by,
            g = 0,
            h = e.length;
        if (d > 0) {
            if (c !== "border")
                for (; g < h; g++) c || (d -= parseFloat(f.css(a, "padding" + e[g])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + e[g])) || 0 : d -= parseFloat(f.css(a, "border" + e[g] + "Width")) || 0;
            return d + "px"
        }
        d = bz(a, b, b);
        if (d < 0 || d == null) d = a.style[b] || 0;
        d = parseFloat(d) || 0;
        if (c)
            for (; g < h; g++) d +=
                parseFloat(f.css(a, "padding" + e[g])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + e[g] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + e[g])) || 0);
        return d + "px"
    }

    function bp(a, b) {
        b.src ? f.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }

    function bk(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
            if (c === "object") b.outerHTML = a.outerHTML;
            else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio")
                if (c === "option") b.selected = a.defaultSelected;
                else {
                    if (c === "input" || c === "textarea") b.defaultValue = a.defaultValue
                } else a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
            b.removeAttribute(f.expando)
        }
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a),
                h = f._data(b, g),
                i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i)
                    for (d = 0, e = i[c].length; d <
                        e; d++) f.event.add(b, c + (i[c][d].namespace ? "." : "") + i[c][d].namespace, i[c][d], i[c][d].data)
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function U(a) {
        var b = V.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a, function(a, d) {
            var e = !!b.call(a, d, a);
            return e ===
                c
        });
        if (b.nodeType) return f.grep(a, function(a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function(a) {
                return a.nodeType === 1
            });
            if (O.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function(a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return !0
    }

    function J() {
        return !1
    }

    function n(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            g = b + "mark",
            h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function() {
            !f._data(a,
                e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) continue;
            if (b !== "toJSON") return !1
        }
        return !0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? parseFloat(d) : j.test(d) ? f.parseJSON(d) : d
                } catch (g) {}
                f.data(a, c, d)
            } else d = b
        }
        return d
    }

    function h(a) {
        var b = g[a] = {},
            c, d;
        a = a.split(/\s+/);
        for (c =
            0, d = a.length; c < d; c++) b[a[c]] = !0;
        return b
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function() {
            function J() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(J, 1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function(a, b) {
                    return new e.fn.init(a, b, h)
                },
                f = a.jQuery,
                g = a.$,
                h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                n = /^[\],:{}\s]*$/,
                o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                q = /(?:^|:|,)(?:\s*\[)+/g,
                r = /(webkit)[ \/]([\w.]+)/,
                s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                t = /(msie) ([\w.]+)/,
                u = /(mozilla)(?:.*? rv:([\w.]+))?/,
                v = /-([a-z]|[0-9])/ig,
                w = /^-ms-/,
                x = function(a, b) {
                    return (b + "").toUpperCase()
                },
                y = d.userAgent,
                z, A, B, C = Object.prototype.toString,
                D = Object.prototype.hasOwnProperty,
                E = Array.prototype.push,
                F = Array.prototype.slice,
                G = String.prototype.trim,
                H = Array.prototype.indexOf,
                I = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function(a, d, f) {
                    var g, h, j, k;
                    if (!a) return this;
                    if (a.nodeType) {
                        this.context =
                            this[0] = a, this.length = 1;
                        return this
                    }
                    if (a === "body" && !d && c.body) {
                        this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                        return this
                    }
                    if (typeof a == "string") {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                        if (g && (g[1] || !d)) {
                            if (g[1]) {
                                d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                                return e.merge(this, a)
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2]) return f.find(a);
                                this.length = 1, this[0] = h
                            }
                            this.context = c, this.selector = a;
                            return this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    if (e.isFunction(a)) return f.ready(a);
                    a.selector !== b && (this.selector = a.selector, this.context = a.context);
                    return e.makeArray(a, this)
                },
                selector: "",
                jquery: "1.7.1",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return F.call(this, 0)
                },
                get: function(a) {
                    return a == null ?
                        this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function(a, b, c) {
                    var d = this.constructor();
                    e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                    return d
                },
                each: function(a, b) {
                    return e.each(this, a, b)
                },
                ready: function(a) {
                    e.bindReady(), A.add(a);
                    return this
                },
                eq: function(a) {
                    a = +a;
                    return a === -1 ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
                },
                map: function(a) {
                    return this.pushStack(e.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: E,
                sort: [].sort,
                splice: [].splice
            }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function() {
                var a, c, d, f, g, h, i = arguments[0] || {},
                    j = 1,
                    k = arguments.length,
                    l = !1;
                typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
                for (; j < k; j++)
                    if ((a = arguments[j]) != null)
                        for (c in a) {
                            d = i[c], f = a[c];
                            if (i === f) continue;
                            l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                        }
                    return i
            }, e.extend({
                noConflict: function(b) {
                    a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                    return e
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? e.readyWait++ : e.ready(!0)
                },
                ready: function(a) {
                    if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                        if (!c.body) return setTimeout(e.ready,
                            1);
                        e.isReady = !0;
                        if (a !== !0 && --e.readyWait > 0) return;
                        A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready")
                    }
                },
                bindReady: function() {
                    if (!A) {
                        A = e.Callbacks("once memory");
                        if (c.readyState === "complete") return setTimeout(e.ready, 1);
                        if (c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1);
                        else if (c.attachEvent) {
                            c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
                            var b = !1;
                            try {
                                b = a.frameElement == null
                            } catch (d) {}
                            c.documentElement.doScroll &&
                                b && J()
                        }
                    }
                },
                isFunction: function(a) {
                    return e.type(a) === "function"
                },
                isArray: Array.isArray || function(a) {
                    return e.type(a) === "array"
                },
                isWindow: function(a) {
                    return a && typeof a == "object" && "setInterval" in a
                },
                isNumeric: function(a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function(a) {
                    return a == null ? String(a) : I[C.call(a)] || "object"
                },
                isPlainObject: function(a) {
                    if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a);
                    return d === b || D.call(a, d)
                },
                isEmptyObject: function(a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function(a) {
                    throw new Error(a);
                },
                parseJSON: function(b) {
                    if (typeof b != "string" || !b) return null;
                    b = e.trim(b);
                    if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                    if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return (new Function("return " + b))();
                    e.error("Invalid JSON: " + b)
                },
                parseXML: function(c) {
                    var d, f;
                    try {
                        a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"),
                            d.async = "false", d.loadXML(c))
                    } catch (g) {
                        d = b
                    }(!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                    return d
                },
                noop: function() {},
                globalEval: function(b) {
                    b && j.test(b) && (a.execScript || function(b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function(a) {
                    return a.replace(w, "ms-").replace(v, x)
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function(a, c, d) {
                    var f, g = 0,
                        h = a.length,
                        i = h === b || e.isFunction(a);
                    if (d)
                        if (i)
                            for (f in a) {
                                if (c.apply(a[f],
                                        d) === !1) break
                            } else
                                for (; g < h;) {
                                    if (c.apply(a[g++], d) === !1) break
                                } else if (i)
                                    for (f in a) {
                                        if (c.call(a[f], f, a[f]) === !1) break
                                    } else
                                        for (; g < h;)
                                            if (c.call(a[g], g, a[g++]) === !1) break;
                    return a
                },
                trim: G ? function(a) {
                    return a == null ? "" : G.call(a)
                } : function(a) {
                    return a == null ? "" : (a + "").replace(k, "").replace(l, "")
                },
                makeArray: function(a, b) {
                    var c = b || [];
                    if (a != null) {
                        var d = e.type(a);
                        a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                    }
                    return c
                },
                inArray: function(a, b, c) {
                    var d;
                    if (b) {
                        if (H) return H.call(b,
                            a, c);
                        d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                        for (; c < d; c++)
                            if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function(a, c) {
                    var d = a.length,
                        e = 0;
                    if (typeof c.length == "number")
                        for (var f = c.length; e < f; e++) a[d++] = c[e];
                    else
                        while (c[e] !== b) a[d++] = c[e++];
                    a.length = d;
                    return a
                },
                grep: function(a, b, c) {
                    var d = [],
                        e;
                    c = !!c;
                    for (var f = 0, g = a.length; f < g; f++) e = !!b(a[f], f), c !== e && d.push(a[f]);
                    return d
                },
                map: function(a, c, d) {
                    var f, g, h = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                    if (k)
                        for (; i < j; i++) f = c(a[i], i, d), f != null && (h[h.length] = f);
                    else
                        for (g in a) f = c(a[g], g, d), f != null && (h[h.length] = f);
                    return h.concat.apply([], h)
                },
                guid: 1,
                proxy: function(a, c) {
                    if (typeof c == "string") {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!e.isFunction(a)) return b;
                    var f = F.call(arguments, 2),
                        g = function() {
                            return a.apply(c, f.concat(F.call(arguments)))
                        };
                    g.guid = a.guid = a.guid || g.guid || e.guid++;
                    return g
                },
                access: function(a, c, d, f, g, h) {
                    var i = a.length;
                    if (typeof c == "object") {
                        for (var j in c) e.access(a, j, c[j], f, g, d);
                        return a
                    }
                    if (d !== b) {
                        f = !h && f && e.isFunction(d);
                        for (var k = 0; k < i; k++) g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                        return a
                    }
                    return i ? g(a[0], c) : b
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(a) {
                    a = a.toLowerCase();
                    var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function() {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(d, f) {
                        f && f instanceof
                        e && !(f instanceof a) && (f = a(f));
                        return e.fn.init.call(this, d, f, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(c);
                    return a
                },
                browser: {}
            }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                I["[object " + b + "]"] = b.toLowerCase()
            }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B = function() {
                c.removeEventListener("DOMContentLoaded", B, !1),
                    e.ready()
            } : c.attachEvent && (B = function() {
                c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
            });
            return e
        }(),
        g = {};
    f.Callbacks = function(a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
            d = [],
            e, i, j, k, l, m = function(b) {
                var d, e, g, h, i;
                for (d = 0, e = b.length; d < e; d++) g = b[d], h = f.type(g), h === "array" ? m(g) : h === "function" && (!a.unique || !o.has(g)) && c.push(g)
            },
            n = function(b, f) {
                f = f || [], e = !a.memory || [b, f], i = !0, l = j || 0, j = 0, k = c.length;
                for (; c && l < k; l++)
                    if (c[l].apply(b, f) === !1 && a.stopOnFalse) {
                        e = !0;
                        break
                    }
                i = !1, c && (a.once ? e ===
                    !0 ? o.disable() : c = [] : d && d.length && (e = d.shift(), o.fireWith(e[0], e[1])))
            },
            o = {
                add: function() {
                    if (c) {
                        var a = c.length;
                        m(arguments), i ? k = c.length : e && e !== !0 && (j = a, n(e[0], e[1]))
                    }
                    return this
                },
                remove: function() {
                    if (c) {
                        var b = arguments,
                            d = 0,
                            e = b.length;
                        for (; d < e; d++)
                            for (var f = 0; f < c.length; f++)
                                if (b[d] === c[f]) {
                                    i && f <= k && (k--, f <= l && l--), c.splice(f--, 1);
                                    if (a.unique) break
                                }
                    }
                    return this
                },
                has: function(a) {
                    if (c) {
                        var b = 0,
                            d = c.length;
                        for (; b < d; b++)
                            if (a === c[b]) return !0
                    }
                    return !1
                },
                empty: function() {
                    c = [];
                    return this
                },
                disable: function() {
                    c =
                        d = e = b;
                    return this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    d = b, (!e || e === !0) && o.disable();
                    return this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(b, c) {
                    d && (i ? a.once || d.push([b, c]) : (!a.once || !e) && n(b, c));
                    return this
                },
                fire: function() {
                    o.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!e
                }
            };
        return o
    };
    var i = [].slice;
    f.extend({
        Deferred: function(a) {
            var b = f.Callbacks("once memory"),
                c = f.Callbacks("once memory"),
                d = f.Callbacks("memory"),
                e = "pending",
                g = {
                    resolve: b,
                    reject: c,
                    notify: d
                },
                h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function() {
                        return e
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function(a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this
                    },
                    always: function() {
                        i.done.apply(i, arguments).fail.apply(i, arguments);
                        return this
                    },
                    pipe: function(a, b, c) {
                        return f.Deferred(function(d) {
                            f.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function(a, b) {
                                var c = b[0],
                                    e = b[1],
                                    g;
                                f.isFunction(c) ? i[a](function() {
                                    g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve,
                                        d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g])
                                }) : i[a](d[e])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (a == null) a = h;
                        else
                            for (var b in h) a[b] = h[b];
                        return a
                    }
                },
                i = h.promise({}),
                j;
            for (j in g) i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
            i.done(function() {
                e = "resolved"
            }, c.disable, d.lock).fail(function() {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        },
        when: function(a) {
            function m(a) {
                return function(b) {
                    e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e)
                }
            }

            function l(a) {
                return function(c) {
                    b[a] =
                        arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0),
                c = 0,
                d = b.length,
                e = Array(d),
                g = d,
                h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
                k = j.promise();
            if (d > 1) {
                for (; c < d; c++) b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
                g || j.resolveWith(j, b)
            } else j !== a && j.resolveWith(j, d ? [a] : []);
            return k
        }
    }), f.support = function() {
        var b, d, e, g, h, i, j, k, l, m, n, o, p, q = c.createElement("div"),
            r = c.documentElement;
        q.setAttribute("className", "t"),
            q.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = q.getElementsByTagName("*"), e = q.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = q.getElementsByTagName("input")[0], b = {
                leadingWhitespace: q.firstChild.nodeType === 3,
                tbody: !q.getElementsByTagName("tbody").length,
                htmlSerialize: !!q.getElementsByTagName("link").length,
                style: /top/.test(e.getAttribute("style")),
                hrefNormalized: e.getAttribute("href") === "/a",
                opacity: /^0.55/.test(e.style.opacity),
                cssFloat: !!e.style.cssFloat,
                checkOn: i.value === "on",
                optSelected: h.selected,
                getSetAttribute: q.className !== "t",
                enctype: !!c.createElement("form").enctype,
                html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0
            }, i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked,
            g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete q.test
        } catch (s) {
            b.deleteExpando = !1
        }!q.addEventListener && q.attachEvent && q.fireEvent && (q.attachEvent("onclick", function() {
                b.noCloneEvent = !1
            }), q.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), q.appendChild(i), k = c.createDocumentFragment(), k.appendChild(q.lastChild), b.checkClone = k.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked =
            i.checked, k.removeChild(i), k.appendChild(q), q.innerHTML = "", a.getComputedStyle && (j = c.createElement("div"), j.style.width = "0", j.style.marginRight = "0", q.style.width = "2px", q.appendChild(j), b.reliableMarginRight = (parseInt((a.getComputedStyle(j, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0);
        if (q.attachEvent)
            for (o in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                }) n = "on" + o, p = n in q, p || (q.setAttribute(n, "return;"), p = typeof q[n] == "function"), b[o + "Bubbles"] = p;
        k.removeChild(q), k = g = h = j = q = i = null, f(function() {
            var a, d, e, g, h, i, j,
                k, m, n, o, r = c.getElementsByTagName("body")[0];
            !r || (j = 1, k = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", m = "visibility:hidden;border:0;", n = "style='" + k + "border:5px solid #000;padding:0;'", o = "<div " + n + "><div></div></div>" + "<table " + n + " cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", a = c.createElement("div"), a.style.cssText = m + "width:0;height:0;position:static;top:0;margin-top:" + j + "px", r.insertBefore(a, r.firstChild), q = c.createElement("div"), a.appendChild(q), q.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",
                l = q.getElementsByTagName("td"), p = l[0].offsetHeight === 0, l[0].style.display = "", l[1].style.display = "none", b.reliableHiddenOffsets = p && l[0].offsetHeight === 0, q.innerHTML = "", q.style.width = q.style.paddingLeft = "1px", f.boxModel = b.boxModel = q.offsetWidth === 2, typeof q.style.zoom != "undefined" && (q.style.display = "inline", q.style.zoom = 1, b.inlineBlockNeedsLayout = q.offsetWidth === 2, q.style.display = "", q.innerHTML = "<div style='width:4px;'></div>", b.shrinkWrapBlocks = q.offsetWidth !== 2), q.style.cssText = k + m, q.innerHTML = o,
                d = q.firstChild, e = d.firstChild, h = d.nextSibling.firstChild.firstChild, i = {
                    doesNotAddBorder: e.offsetTop !== 5,
                    doesAddBorderForTableAndCells: h.offsetTop === 5
                }, e.style.position = "fixed", e.style.top = "20px", i.fixedPosition = e.offsetTop === 20 || e.offsetTop === 15, e.style.position = e.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", i.subtractsBorderForOverflowNotVisible = e.offsetTop === -5, i.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j, r.removeChild(a), q = a = null, f.extend(b, i))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/,
        k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function(a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i, j = f.expando,
                    k = typeof c == "string",
                    l = a.nodeType,
                    m = l ? f.cache : a,
                    n = l ? a[j] : a[j] && j,
                    o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
                n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
                g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
                if (o && !h[c]) return g.events;
                k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
                return i
            }
        },
        removeData: function(a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e, g, h = f.expando,
                    i = a.nodeType,
                    j = i ? f.cache : a,
                    k = i ? a[h] : h;
                if (!j[k]) return;
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b =
                            b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
                        if (!(c ? m : f.isEmptyObject)(d)) return
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) return
                }
                f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null)
            }
        },
        _data: function(a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), f.fn.extend({
        data: function(a,
            c) {
            var d, e, g, h = null;
            if (typeof a == "undefined") {
                if (this.length) {
                    h = f.data(this[0]);
                    if (this[0].nodeType === 1 && !f._data(this[0], "parsedAttrs")) {
                        e = this[0].attributes;
                        for (var i = 0, j = e.length; i < j; i++) g = e[i].name, g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)), l(this[0], g, h[g]));
                        f._data(this[0], "parsedAttrs", !0)
                    }
                }
                return h
            }
            if (typeof a == "object") return this.each(function() {
                f.data(this, a)
            });
            d = a.split("."), d[1] = d[1] ? "." + d[1] : "";
            if (c === b) {
                h = this.triggerHandler("getData" + d[1] + "!", [d[0]]), h === b && this.length &&
                    (h = f.data(this[0], a), h = l(this[0], a, h));
                return h === b && d[1] ? this.data(d[0]) : h
            }
            return this.each(function() {
                var b = f(this),
                    e = [d[0], c];
                b.triggerHandler("setData" + d[1] + "!", e), f.data(this, a, c), b.triggerHandler("changeData" + d[1] + "!", e)
            })
        },
        removeData: function(a) {
            return this.each(function() {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function(a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1))
        },
        _unmark: function(a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ?
                    f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"))
            }
        },
        queue: function(a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift(),
                e = {};
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function() {
                f.dequeue(a, b)
            }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function(a, c) {
            typeof a !=
                "string" && (c = a, a = "fx");
            if (c === b) return f.queue(this[0], a);
            return this.each(function() {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                f.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a !=
                "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(),
                e = this,
                g = e.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--)
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++, l.add(m);
            m();
            return d.promise()
        }
    });
    var o = /[\n\t\r]/g,
        p = /\s+/,
        q = /\r/g,
        r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i,
        t = /^a(?:rea)?$/i,
        u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute,
        w, x, y;
    f.fn.extend({
        attr: function(a, b) {
            return f.access(this, a, b, !0, f.attr)
        },
        removeAttr: function(a) {
            return this.each(function() {
                f.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return f.access(this, a, b, !0, f.prop)
        },
        removeProp: function(a) {
            a = f.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b =
                    a.split(p);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1) e.className = a;
                        else {
                            g = " " + e.className + " ";
                            for (h = 0, i = b.length; h < i; h++) ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                            e.className = f.trim(g)
                        }
                }
            }
            return this
        },
        removeClass: function(a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function(b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(p);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className)
                        if (a) {
                            h =
                                (" " + g.className + " ").replace(o, " ");
                            for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                            g.className = f.trim(h)
                        } else g.className = ""
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = typeof b == "boolean";
            if (f.isFunction(a)) return this.each(function(c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function() {
                if (c === "string") {
                    var e, g = 0,
                        h = f(this),
                        i = b,
                        j = a.split(p);
                    while (e = j[g++]) i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className &&
                    f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ",
                c = 0,
                d = this.length;
            for (; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, g = this[0];
            if (!!arguments.length) {
                e = f.isFunction(a);
                return this.each(function(d) {
                    var g = f(this),
                        h;
                    if (this.nodeType === 1) {
                        e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h +=
                            "" : f.isArray(h) && (h = f.map(h, function(a) {
                                return a == null ? "" : a + ""
                            })), c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                        if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
                    }
                })
            }
            if (g) {
                c = f.valHooks[g.nodeName.toLowerCase()] || f.valHooks[g.type];
                if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
                d = g.value;
                return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d
            }
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    var b,
                        c, d, e, g = a.selectedIndex,
                        h = [],
                        i = a.options,
                        j = a.type === "select-one";
                    if (g < 0) return null;
                    c = j ? g : 0, d = j ? g + 1 : i.length;
                    for (; c < d; c++) {
                        e = i[c];
                        if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
                            b = f(e).val();
                            if (j) return b;
                            h.push(b)
                        }
                    }
                    if (j && !h.length && i.length) return f(i[g]).val();
                    return h
                },
                set: function(a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function() {
                            this.selected = f.inArray(f(this).val(), c) >= 0
                        }), c.length ||
                        (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, d, e) {
            var g, h, i, j = a.nodeType;
            if (!!a && j !== 3 && j !== 8 && j !== 2) {
                if (e && c in f.attrFn) return f(a)[c](d);
                if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
                i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return
                    }
                    if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (h && "get" in
                    h && i && (g = h.get(a, c)) !== null) return g;
                g = a.getAttribute(c);
                return g === null ? b : g
            }
        },
        removeAttr: function(a, b) {
            var c, d, e, g, h = 0;
            if (b && a.nodeType === 1) {
                d = b.toLowerCase().split(p), g = d.length;
                for (; h < g; h++) e = d[h], e && (c = f.propFix[e] || e, f.attr(a, e, ""), a.removeAttribute(v ? e : c), u.test(e) && c in a && (a[c] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type",
                            b), c && (a.value = c);
                        return b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    if (w && f.nodeName(a, "button")) return w.get(a, b);
                    return b in a ? a.value : null
                },
                set: function(a, b, c) {
                    if (w && f.nodeName(a, "button")) return w.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c,
            d) {
            var e, g, h, i = a.nodeType;
            if (!!a && i !== 3 && i !== 8 && i !== 2) {
                h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
                return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
        get: function(a, c) {
            var d, e = f.prop(a, c);
            return e === !0 || typeof e !=
                "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, v || (y = {
            name: !0,
            id: !0
        }, w = f.valHooks.button = {
            get: function(a, c) {
                var d;
                d = a.getAttributeNode(c);
                return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b
            },
            set: function(a, b, d) {
                var e = a.getAttributeNode(d);
                e || (e = c.createAttribute(d), a.setAttributeNode(e));
                return e.nodeValue = b + ""
            }
        }, f.attrHooks.tabindex.set =
        w.set, f.each(["width", "height"], function(a, b) {
            f.attrHooks[b] = f.extend(f.attrHooks[b], {
                set: function(a, c) {
                    if (c === "") {
                        a.setAttribute(b, "auto");
                        return c
                    }
                }
            })
        }), f.attrHooks.contenteditable = {
            get: w.get,
            set: function(a, b, c) {
                b === "" && (b = "false"), w.set(a, b, c)
            }
        }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() ||
                b
        },
        set: function(a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            get: function(a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function(a, b) {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var z = /^(?:textarea|input|select)$/i,
        A = /^([^\.]*)?(?:\.(.+))?$/,
        B = /\bhover(\.\S+)?\b/,
        C = /^key/,
        D = /^(?:mouse|contextmenu)|click/,
        E = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        G = function(a) {
            var b = F.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        },
        H = function(a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) &&
                (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value))
        },
        I = function(a) {
            return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1")
        };
    f.event = {
            add: function(a, c, d, e, g) {
                var h, i, j, k, l, m, n, o, p, q, r, s;
                if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
                    d.handler && (p = d, d = p.handler), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), i = h.handle, i || (h.handle = i = function(a) {
                        return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(i.elem,
                            arguments) : b
                    }, i.elem = a), c = f.trim(I(c)).split(" ");
                    for (k = 0; k < c.length; k++) {
                        l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
                            type: m,
                            origType: l[1],
                            data: e,
                            handler: d,
                            guid: d.guid,
                            selector: g,
                            quick: G(g),
                            namespace: n.join(".")
                        }, p), r = j[m];
                        if (!r) {
                            r = j[m] = [], r.delegateCount = 0;
                            if (!s.setup || s.setup.call(a, e, n, i) === !1) a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                        }
                        s.add && (s.add.call(a,
                            o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0
                    }
                    a = null
                }
            },
            global: {},
            remove: function(a, b, c, d, e) {
                var g = f.hasData(a) && f._data(a),
                    h, i, j, k, l, m, n, o, p, q, r, s;
                if (!!g && !!(o = g.events)) {
                    b = f.trim(I(b || "")).split(" ");
                    for (h = 0; h < b.length; h++) {
                        i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                        if (!j) {
                            for (j in o) f.event.remove(a, j + b[h], c, d, !0);
                            continue
                        }
                        p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") +
                            "(\\.|$)") : null;
                        for (n = 0; n < r.length; n++) s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
                        r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j])
                    }
                    f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(c,
                d, e, g) {
                if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                    var h = c.type || c,
                        i = [],
                        j, k, l, m, n, o, p, q, r, s;
                    if (E.test(h + f.event.triggered)) return;
                    h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
                    if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
                    c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null,
                        o = h.indexOf(":") < 0 ? "on" + h : "";
                    if (!e) {
                        j = f.cache;
                        for (l in j) j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
                        return
                    }
                    c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
                    if (p.trigger && p.trigger.apply(e, d) === !1) return;
                    r = [
                        [e, p.bindType || h]
                    ];
                    if (!g && !p.noBubble && !f.isWindow(e)) {
                        s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;
                        for (; m; m = m.parentNode) r.push([m, s]), n = m;
                        n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s])
                    }
                    for (l =
                        0; l < r.length && !c.isPropagationStopped(); l++) m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
                    c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered =
                        b, n && (e[o] = n));
                    return c.result
                }
            },
            dispatch: function(c) {
                c = f.event.fix(c || a.event);
                var d = (f._data(this, "events") || {})[c.type] || [],
                    e = d.delegateCount,
                    g = [].slice.call(arguments, 0),
                    h = !c.exclusive && !c.namespace,
                    i = [],
                    j, k, l, m, n, o, p, q, r, s, t;
                g[0] = c, c.delegateTarget = this;
                if (e && !c.target.disabled && (!c.button || c.type !== "click")) {
                    m = f(this), m.context = this.ownerDocument || this;
                    for (l = c.target; l != this; l = l.parentNode || this) {
                        o = {}, q = [], m[0] = l;
                        for (j = 0; j < e; j++) r = d[j], s = r.selector, o[s] === b && (o[s] = r.quick ? H(l, r.quick) : m.is(s)),
                            o[s] && q.push(r);
                        q.length && i.push({
                            elem: l,
                            matches: q
                        })
                    }
                }
                d.length > e && i.push({
                    elem: this,
                    matches: d.slice(e)
                });
                for (j = 0; j < i.length && !c.isPropagationStopped(); j++) {
                    p = i[j], c.currentTarget = p.elem;
                    for (k = 0; k < p.matches.length && !c.isImmediatePropagationStopped(); k++) {
                        r = p.matches[k];
                        if (h || !c.namespace && !r.namespace || c.namespace_re && c.namespace_re.test(r.namespace)) c.data = r.data, c.handleObj = r, n = ((f.event.special[r.origType] || {}).handle || r.handler).apply(p.elem, g), n !== b && (c.result = n, n === !1 && (c.preventDefault(), c.stopPropagation()))
                    }
                }
                return c.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                    return a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, d) {
                    var e, f, g,
                        h = d.button,
                        i = d.fromElement;
                    a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
                    return a
                }
            },
            fix: function(a) {
                if (a[f.expando]) return a;
                var d, e, g = a,
                    h = f.event.fixHooks[a.type] || {},
                    i = h.props ? this.props.concat(h.props) : this.props;
                a = f.Event(g);
                for (d = i.length; d;) e = i[--d], a[e] = g[e];
                a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
                return h.filter ? h.filter(a, g) : a
            },
            special: {
                ready: {
                    setup: f.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(a, b, c) {
                        f.isWindow(this) && (this.onbeforeunload = c)
                    },
                    teardown: function(a, b) {
                        this.onbeforeunload ===
                            b && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = f.extend(new f.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        }, f.Event = function(a, b) {
            if (!(this instanceof f.Event)) return new f.Event(a, b);
            a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0
        }, f.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = K;
                var a = this.originalEvent;
                !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = K;
                var a = this.originalEvent;
                !a || (a.stopPropagation &&
                    a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = K, this.stopPropagation()
            },
            isDefaultPrevented: J,
            isPropagationStopped: J,
            isImmediatePropagationStopped: J
        }, f.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            f.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c = this,
                        d = a.relatedTarget,
                        e = a.handleObj,
                        g = e.selector,
                        h;
                    if (!d || d !== c && !f.contains(c, d)) a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b;
                    return h
                }
            }
        }),
        f.support.submitBubbles || (f.event.special.submit = {
            setup: function() {
                if (f.nodeName(this, "form")) return !1;
                f.event.add(this, "click._submit keypress._submit", function(a) {
                    var c = a.target,
                        d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
                    d && !d._submit_attached && (f.event.add(d, "submit._submit", function(a) {
                        this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0)
                    }), d._submit_attached = !0)
                })
            },
            teardown: function() {
                if (f.nodeName(this, "form")) return !1;
                f.event.remove(this, "._submit")
            }
        }),
        f.support.changeBubbles || (f.event.special.change = {
            setup: function() {
                if (z.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change", function(a) {
                        a.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), f.event.add(this, "click._change", function(a) {
                        this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0))
                    });
                    return !1
                }
                f.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    z.test(b.nodeName) &&
                        !b._change_attached && (f.event.add(b, "change._change", function(a) {
                            this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0)
                        }), b._change_attached = !0)
                })
            },
            handle: function(a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                f.event.remove(this, "._change");
                return z.test(this.nodeName)
            }
        }), f.support.focusinBubbles || f.each({
                focus: "focusin",
                blur: "focusout"
            },
            function(a, b) {
                var d = 0,
                    e = function(a) {
                        f.event.simulate(b, a.target, f.event.fix(a), !0)
                    };
                f.event.special[b] = {
                    setup: function() {
                        d++ === 0 && c.addEventListener(a, e, !0)
                    },
                    teardown: function() {
                        --d === 0 && c.removeEventListener(a, e, !0)
                    }
                }
            }), f.fn.extend({
            on: function(a, c, d, e, g) {
                var h, i;
                if (typeof a == "object") {
                    typeof c != "string" && (d = c, c = b);
                    for (i in a) this.on(i, c, d, a[i], g);
                    return this
                }
                d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
                if (e === !1) e = J;
                else if (!e) return this;
                g === 1 && (h = e, e = function(a) {
                    f().off(a);
                    return h.apply(this, arguments)
                }, e.guid = h.guid || (h.guid = f.guid++));
                return this.each(function() {
                    f.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on.call(this, a, b, c, d, 1)
            },
            off: function(a, c, d) {
                if (a && a.preventDefault && a.handleObj) {
                    var e = a.handleObj;
                    f(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace : e.type, e.selector, e.handler);
                    return this
                }
                if (typeof a == "object") {
                    for (var g in a) this.off(g, c, a[g]);
                    return this
                }
                if (c === !1 || typeof c == "function") d = c, c = b;
                d === !1 && (d = J);
                return this.each(function() {
                    f.event.remove(this,
                        a, d, c)
                })
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            live: function(a, b, c) {
                f(this.context).on(a, this.selector, b, c);
                return this
            },
            die: function(a, b) {
                f(this.context).off(a, this.selector || "**", b);
                return this
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    f.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a,
                b) {
                if (this[0]) return f.event.trigger(a, b, this[0], !0)
            },
            toggle: function(a) {
                var b = arguments,
                    c = a.guid || f.guid++,
                    d = 0,
                    e = function(c) {
                        var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
                        f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                        return b[e].apply(this, arguments) || !1
                    };
                e.guid = c;
                while (d < b.length) b[d++].guid = c;
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
            function(a, b) {
                f.fn[b] = function(a, c) {
                    c == null && (c = a, a = null);
                    return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
                }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks)
            }),
        function() {
            function x(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            if (j.nodeType === 1) {
                                g || (j[d] = c, j.sizset = h);
                                if (typeof b != "string") {
                                    if (j === b) {
                                        k = !0;
                                        break
                                    }
                                } else if (m.filter(b, [j]).length >
                                    0) {
                                    k = j;
                                    break
                                }
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }

            function w(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);
                            if (j.nodeName.toLowerCase() === b) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }
            var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                d = "sizcache" + (Math.random() + "").replace(".", ""),
                e = 0,
                g = Object.prototype.toString,
                h = !1,
                i = !0,
                j = /\\/g,
                k = /\r\n/g,
                l = /\W/;
            [0, 0].sort(function() {
                i = !1;
                return 0
            });
            var m = function(b, d, e, f) {
                e = e || [], d = d || c;
                var h = d;
                if (d.nodeType !== 1 && d.nodeType !== 9) return [];
                if (!b || typeof b != "string") return e;
                var i, j, k, l, n, q, r, t, u = !0,
                    v = m.isXML(d),
                    w = [],
                    x = b;
                do {
                    a.exec(""), i = a.exec(x);
                    if (i) {
                        x = i[3], w.push(i[1]);
                        if (i[2]) {
                            l = i[3];
                            break
                        }
                    }
                } while (i);
                if (w.length > 1 && p.exec(b))
                    if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
                    else {
                        j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                        while (w.length) b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f)
                    } else {
                    !f && w.length >
                        1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = m.find(w.shift(), d, v), d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]);
                    if (d) {
                        n = f ? {
                            expr: w.pop(),
                            set: s(f)
                        } : m.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? m.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;
                        while (w.length) q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v)
                    } else k = w = []
                }
                k || (k = j), k || m.error(q || b);
                if (g.call(k) === "[object Array]")
                    if (!u) e.push.apply(e,
                        k);
                    else if (d && d.nodeType === 1)
                    for (t = 0; k[t] != null; t++) k[t] && (k[t] === !0 || k[t].nodeType === 1 && m.contains(d, k[t])) && e.push(j[t]);
                else
                    for (t = 0; k[t] != null; t++) k[t] && k[t].nodeType === 1 && e.push(j[t]);
                else s(k, e);
                l && (m(l, h, e, f), m.uniqueSort(e));
                return e
            };
            m.uniqueSort = function(a) {
                if (u) {
                    h = i, a.sort(u);
                    if (h)
                        for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
                }
                return a
            }, m.matches = function(a, b) {
                return m(a, null, null, b)
            }, m.matchesSelector = function(a, b) {
                return m(b, null, null, [a]).length > 0
            }, m.find = function(a, b, c) {
                var d,
                    e, f, g, h, i;
                if (!a) return [];
                for (e = 0, f = o.order.length; e < f; e++) {
                    h = o.order[e];
                    if (g = o.leftMatch[h].exec(a)) {
                        i = g[1], g.splice(1, 1);
                        if (i.substr(i.length - 1) !== "\\") {
                            g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);
                            if (d != null) {
                                a = a.replace(o.match[h], "");
                                break
                            }
                        }
                    }
                }
                d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
                return {
                    set: d,
                    expr: a
                }
            }, m.filter = function(a, c, d, e) {
                var f, g, h, i, j, k, l, n, p, q = a,
                    r = [],
                    s = c,
                    t = c && c[0] && m.isXML(c[0]);
                while (a && c.length) {
                    for (h in o.filter)
                        if ((f = o.leftMatch[h].exec(a)) !=
                            null && f[2]) {
                            k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
                            if (l.substr(l.length - 1) === "\\") continue;
                            s === r && (r = []);
                            if (o.preFilter[h]) {
                                f = o.preFilter[h](f, s, d, r, e, t);
                                if (!f) g = i = !0;
                                else if (f === !0) continue
                            }
                            if (f)
                                for (n = 0;
                                    (j = s[n]) != null; n++) j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                            if (i !== b) {
                                d || (s = r), a = a.replace(o.match[h], "");
                                if (!g) return [];
                                break
                            }
                        }
                    if (a === q)
                        if (g == null) m.error(a);
                        else break;
                    q = a
                }
                return s
            }, m.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a);
            };
            var n = m.getText = function(a) {
                    var b, c, d = a.nodeType,
                        e = "";
                    if (d)
                        if (d === 1 || d === 9) {
                            if (typeof a.textContent == "string") return a.textContent;
                            if (typeof a.innerText == "string") return a.innerText.replace(k, "");
                            for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                        } else {
                            if (d === 3 || d === 4) return a.nodeValue
                        } else
                        for (b = 0; c = a[b]; b++) c.nodeType !== 8 && (e += n(c));
                    return e
                },
                o = m.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function(a) {
                            return a.getAttribute("href")
                        },
                        type: function(a) {
                            return a.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function(a, b) {
                            var c = typeof b == "string",
                                d = c && !l.test(b),
                                e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var f = 0, g = a.length, h; f < g; f++)
                                if (h = a[f]) {
                                    while ((h = h.previousSibling) && h.nodeType !== 1);
                                    a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                                }
                            e && m.filter(b, a, !0)
                        },
                        ">": function(a, b) {
                            var c, d = typeof b == "string",
                                e = 0,
                                f = a.length;
                            if (d && !l.test(b)) {
                                b = b.toLowerCase();
                                for (; e < f; e++) {
                                    c = a[e];
                                    if (c) {
                                        var g = c.parentNode;
                                        a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                    }
                                }
                            } else {
                                for (; e <
                                    f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                                d && m.filter(b, a, !0)
                            }
                        },
                        "": function(a, b, c) {
                            var d, f = e++,
                                g = x;
                            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c)
                        },
                        "~": function(a, b, c) {
                            var d, f = e++,
                                g = x;
                            typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c)
                        }
                    },
                    find: {
                        ID: function(a, b, c) {
                            if (typeof b.getElementById != "undefined" && !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [d] : []
                            }
                        },
                        NAME: function(a, b) {
                            if (typeof b.getElementsByName !=
                                "undefined") {
                                var c = [],
                                    d = b.getElementsByName(a[1]);
                                for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                                return c.length === 0 ? null : c
                            }
                        },
                        TAG: function(a, b) {
                            if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                        }
                    },
                    preFilter: {
                        CLASS: function(a, b, c, d, e, f) {
                            a = " " + a[1].replace(j, "") + " ";
                            if (f) return a;
                            for (var g = 0, h;
                                (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                            return !1
                        },
                        ID: function(a) {
                            return a[1].replace(j,
                                "")
                        },
                        TAG: function(a, b) {
                            return a[1].replace(j, "").toLowerCase()
                        },
                        CHILD: function(a) {
                            if (a[1] === "nth") {
                                a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                            } else a[2] && m.error(a[0]);
                            a[0] = e++;
                            return a
                        },
                        ATTR: function(a, b, c, d, e, f) {
                            var g = a[1] = a[1].replace(j, "");
                            !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " +
                                a[4] + " ");
                            return a
                        },
                        PSEUDO: function(b, c, d, e, f) {
                            if (b[1] === "not")
                                if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = m(b[3], null, null, c);
                                else {
                                    var g = m.filter(b[3], c, d, !0 ^ f);
                                    d || e.push.apply(e, g);
                                    return !1
                                } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0;
                            return b
                        },
                        POS: function(a) {
                            a.unshift(!0);
                            return a
                        }
                    },
                    filters: {
                        enabled: function(a) {
                            return a.disabled === !1 && a.type !== "hidden"
                        },
                        disabled: function(a) {
                            return a.disabled === !0
                        },
                        checked: function(a) {
                            return a.checked === !0
                        },
                        selected: function(a) {
                            a.parentNode &&
                                a.parentNode.selectedIndex;
                            return a.selected === !0
                        },
                        parent: function(a) {
                            return !!a.firstChild
                        },
                        empty: function(a) {
                            return !a.firstChild
                        },
                        has: function(a, b, c) {
                            return !!m(c[3], a).length
                        },
                        header: function(a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function(a) {
                            var b = a.getAttribute("type"),
                                c = a.type;
                            return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                        },
                        radio: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                        },
                        checkbox: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "checkbox" ===
                                a.type
                        },
                        file: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "file" === a.type
                        },
                        password: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "password" === a.type
                        },
                        submit: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") && "submit" === a.type
                        },
                        image: function(a) {
                            return a.nodeName.toLowerCase() === "input" && "image" === a.type
                        },
                        reset: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") && "reset" === a.type
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return b === "input" && "button" === a.type || b === "button"
                        },
                        input: function(a) {
                            return /input|select|textarea|button/i.test(a.nodeName)
                        },
                        focus: function(a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(a, b) {
                            return b === 0
                        },
                        last: function(a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function(a, b) {
                            return b % 2 === 0
                        },
                        odd: function(a, b) {
                            return b % 2 === 1
                        },
                        lt: function(a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function(a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function(a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function(a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function(a,
                            b, c, d) {
                            var e = b[1],
                                f = o.filters[e];
                            if (f) return f(a, c, b, d);
                            if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                            if (e === "not") {
                                var g = b[3];
                                for (var h = 0, i = g.length; h < i; h++)
                                    if (g[h] === a) return !1;
                                return !0
                            }
                            m.error(e)
                        },
                        CHILD: function(a, b) {
                            var c, e, f, g, h, i, j, k = b[1],
                                l = a;
                            switch (k) {
                                case "only":
                                case "first":
                                    while (l = l.previousSibling)
                                        if (l.nodeType === 1) return !1;
                                    if (k === "first") return !0;
                                    l = a;
                                case "last":
                                    while (l = l.nextSibling)
                                        if (l.nodeType === 1) return !1;
                                    return !0;
                                case "nth":
                                    c = b[2], e = b[3];
                                    if (c ===
                                        1 && e === 0) return !0;
                                    f = b[0], g = a.parentNode;
                                    if (g && (g[d] !== f || !a.nodeIndex)) {
                                        i = 0;
                                        for (l = g.firstChild; l; l = l.nextSibling) l.nodeType === 1 && (l.nodeIndex = ++i);
                                        g[d] = f
                                    }
                                    j = a.nodeIndex - e;
                                    return c === 0 ? j === 0 : j % c === 0 && j / c >= 0
                            }
                        },
                        ID: function(a, b) {
                            return a.nodeType === 1 && a.getAttribute("id") === b
                        },
                        TAG: function(a, b) {
                            return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b
                        },
                        CLASS: function(a, b) {
                            return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                        },
                        ATTR: function(a, b) {
                            var c = b[1],
                                d = m.attr ? m.attr(a,
                                    c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                                e = d + "",
                                f = b[2],
                                g = b[4];
                            return d == null ? f === "!=" : !f && m.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                        },
                        POS: function(a, b, c, d) {
                            var e = b[2],
                                f = o.setFilters[e];
                            if (f) return f(a, c, b, d)
                        }
                    }
                },
                p = o.match.POS,
                q = function(a, b) {
                    return "\\" + (b - 0 + 1)
                };
            for (var r in o.match) o.match[r] =
                new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
            var s = function(a, b) {
                a = Array.prototype.slice.call(a, 0);
                if (b) {
                    b.push.apply(b, a);
                    return b
                }
                return a
            };
            try {
                Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
            } catch (t) {
                s = function(a, b) {
                    var c = 0,
                        d = b || [];
                    if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
                    else if (typeof a.length == "number")
                        for (var e = a.length; c < e; c++) d.push(a[c]);
                    else
                        for (; a[c]; c++) d.push(a[c]);
                    return d
                }
            }
            var u, v;
            c.documentElement.compareDocumentPosition ? u = function(a, b) {
                    if (a === b) {
                        h = !0;
                        return 0
                    }
                    if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
                    return a.compareDocumentPosition(b) & 4 ? -1 : 1
                } : (u = function(a, b) {
                    if (a === b) {
                        h = !0;
                        return 0
                    }
                    if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                    var c, d, e = [],
                        f = [],
                        g = a.parentNode,
                        i = b.parentNode,
                        j = g;
                    if (g === i) return v(a, b);
                    if (!g) return -1;
                    if (!i) return 1;
                    while (j) e.unshift(j),
                        j = j.parentNode;
                    j = i;
                    while (j) f.unshift(j), j = j.parentNode;
                    c = e.length, d = f.length;
                    for (var k = 0; k < c && k < d; k++)
                        if (e[k] !== f[k]) return v(e[k], f[k]);
                    return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
                }, v = function(a, b, c) {
                    if (a === b) return c;
                    var d = a.nextSibling;
                    while (d) {
                        if (d === b) return -1;
                        d = d.nextSibling
                    }
                    return 1
                }),
                function() {
                    var a = c.createElement("div"),
                        d = "script" + (new Date).getTime(),
                        e = c.documentElement;
                    a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function(a, c, d) {
                        if (typeof c.getElementById !=
                            "undefined" && !d) {
                            var e = c.getElementById(a[1]);
                            return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                        }
                    }, o.filter.ID = function(a, b) {
                        var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                        return a.nodeType === 1 && c && c.nodeValue === b
                    }), e.removeChild(a), e = a = null
                }(),
                function() {
                    var a = c.createElement("div");
                    a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                        var c = b.getElementsByTagName(a[1]);
                        if (a[1] === "*") {
                            var d = [];
                            for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                            c = d
                        }
                        return c
                    }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function(a) {
                        return a.getAttribute("href", 2)
                    }), a = null
                }(), c.querySelectorAll && function() {
                    var a = m,
                        b = c.createElement("div"),
                        d = "__sizzle__";
                    b.innerHTML = "<p class='TEST'></p>";
                    if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                        m = function(b, e, f, g) {
                            e = e ||
                                c;
                            if (!g && !m.isXML(e)) {
                                var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                                    if (h[1]) return s(e.getElementsByTagName(b), f);
                                    if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f)
                                }
                                if (e.nodeType === 9) {
                                    if (b === "body" && e.body) return s([e.body], f);
                                    if (h && h[3]) {
                                        var i = e.getElementById(h[3]);
                                        if (!i || !i.parentNode) return s([], f);
                                        if (i.id === h[3]) return s([i], f)
                                    }
                                    try {
                                        return s(e.querySelectorAll(b), f)
                                    } catch (j) {}
                                } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !==
                                    "object") {
                                    var k = e,
                                        l = e.getAttribute("id"),
                                        n = l || d,
                                        p = e.parentNode,
                                        q = /^\s*[+~]/.test(b);
                                    l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);
                                    try {
                                        if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f)
                                    } catch (r) {} finally {
                                        l || k.removeAttribute("id")
                                    }
                                }
                            }
                            return a(b, e, f, g)
                        };
                        for (var e in a) m[e] = a[e];
                        b = null
                    }
                }(),
                function() {
                    var a = c.documentElement,
                        b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                    if (b) {
                        var d = !b.call(c.createElement("div"), "div"),
                            e = !1;
                        try {
                            b.call(c.documentElement,
                                "[test!='']:sizzle")
                        } catch (f) {
                            e = !0
                        }
                        m.matchesSelector = function(a, c) {
                            c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                            if (!m.isXML(a)) try {
                                if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                    var f = b.call(a, c);
                                    if (f || !d || a.document && a.document.nodeType !== 11) return f
                                }
                            } catch (g) {}
                            return m(c, null, null, [a]).length > 0
                        }
                    }
                }(),
                function() {
                    var a = c.createElement("div");
                    a.innerHTML = "<div class='test e'></div><div class='test'></div>";
                    if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                        a.lastChild.className =
                            "e";
                        if (a.getElementsByClassName("e").length === 1) return;
                        o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(a, b, c) {
                            if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
                        }, a = null
                    }
                }(), c.documentElement.contains ? m.contains = function(a, b) {
                    return a !== b && (a.contains ? a.contains(b) : !0)
                } : c.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
                    return !!(a.compareDocumentPosition(b) & 16)
                } : m.contains = function() {
                    return !1
                }, m.isXML = function(a) {
                    var b = (a ? a.ownerDocument || a :
                        0).documentElement;
                    return b ? b.nodeName !== "HTML" : !1
                };
            var y = function(a, b, c) {
                var d, e = [],
                    f = "",
                    g = b.nodeType ? [b] : b;
                while (d = o.match.PSEUDO.exec(a)) f += d[0], a = a.replace(o.match.PSEUDO, "");
                a = o.relative[a] ? a + "*" : a;
                for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
                return m.filter(f, e)
            };
            m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr = m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort, f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
        }();
    var L = /Until$/,
        M = /^(?:parents|prevUntil|prevAll)/,
        N = /,/,
        O = /^.[^:#\[\.,]*$/,
        P = Array.prototype.slice,
        Q = f.expr.match.POS,
        R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function(a) {
            var b = this,
                c, d;
            if (typeof a != "string") return f(a).filter(function() {
                for (c = 0, d = b.length; c < d; c++)
                    if (f.contains(b[c], this)) return !0
            });
            var e = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0)
                    for (h = g; h < e.length; h++)
                        for (i = 0; i < g; i++)
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
            }
            return e
        },
        has: function(a) {
            var b = f(a);
            return this.filter(function() {
                for (var a =
                        0, c = b.length; a < c; a++)
                    if (f.contains(this, b[a])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c = [],
                d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) f(g).is(a[d]) && c.push({
                        selector: a[d],
                        elem: g,
                        level: h
                    });
                    g = g.parentNode, h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function(a) {
            if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string") return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] :
                a, this)
        },
        add: function(a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function(a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function(a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return f.nth(a, 2,
                "previousSibling")
        },
        nextAll: function(a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return f.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return f.sibling(a.firstChild)
        },
        contents: function(a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function(a,
        b) {
        f.fn[a] = function(c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(","))
        }
    }), f.extend({
        filter: function(a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function(a, c, d) {
            var e = [],
                g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType ===
                1 && e.push(g), g = g[c];
            return e
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c])
                if (a.nodeType === 1 && ++e === b) break;
            return a
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var V = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        W = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Z = /<([\w:]+)/,
        $ = /<tbody/i,
        _ = /<|&#?\w+;/,
        ba = /<(?:script|style)/i,
        bb = /<(?:script|object|embed|option|style)/i,
        bc = new RegExp("<(?:" + V + ")", "i"),
        bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
        be = /\/(java|ecma)script/i,
        bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
        bg = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({
            text: function(a) {
                if (f.isFunction(a)) return this.each(function(b) {
                    var c = f(this);
                    c.text(a.call(this, b, c.text()))
                });
                if (typeof a != "object" && a !== b) return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
                return f.text(this)
            },
            wrapAll: function(a) {
                if (f.isFunction(a)) return this.each(function(b) {
                    f(this).wrapAll(a.call(this,
                        b))
                });
                if (this[0]) {
                    var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                        var a = this;
                        while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                if (f.isFunction(a)) return this.each(function(b) {
                    f(this).wrapInner(a.call(this, b))
                });
                return this.each(function() {
                    var b = f(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = f.isFunction(a);
                return this.each(function(c) {
                    f(this).wrapAll(b ?
                        a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(a) {
                    this.nodeType === 1 && this.appendChild(a)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(a) {
                    this.nodeType === 1 && this.insertBefore(a, this.firstChild)
                })
            },
            before: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a,
                        this)
                });
                if (arguments.length) {
                    var a = f.clean(arguments);
                    a.push.apply(a, this.toArray());
                    return this.pushStack(a, "before", arguments)
                }
            },
            after: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore(a, this.nextSibling)
                });
                if (arguments.length) {
                    var a = this.pushStack(this, "after", arguments);
                    a.push.apply(a, f.clean(arguments));
                    return a
                }
            },
            remove: function(a, b) {
                for (var c = 0, d;
                    (d = this[c]) != null; c++)
                    if (!a || f.filter(a, [d]).length) !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")),
                        f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
                return this
            },
            empty: function() {
                for (var a = 0, b;
                    (b = this[a]) != null; a++) {
                    b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                    while (b.firstChild) b.removeChild(b.firstChild)
                }
                return this
            },
            clone: function(a, b) {
                a = a == null ? !1 : a, b = b == null ? a : b;
                return this.map(function() {
                    return f.clone(this, a, b)
                })
            },
            html: function(a) {
                if (a === b) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, "") : null;
                if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace ||
                        !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Y, "<$1></$2>");
                    try {
                        for (var c = 0, d = this.length; c < d; c++) this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                    } catch (e) {
                        this.empty().append(a)
                    }
                } else f.isFunction(a) ? this.each(function(b) {
                    var c = f(this);
                    c.html(a.call(this, b, c.html()))
                }) : this.empty().append(a);
                return this
            },
            replaceWith: function(a) {
                if (this[0] && this[0].parentNode) {
                    if (f.isFunction(a)) return this.each(function(b) {
                        var c = f(this),
                            d = c.html();
                        c.replaceWith(a.call(this, b, d))
                    });
                    typeof a != "string" && (a = f(a).detach());
                    return this.each(function() {
                        var b = this.nextSibling,
                            c = this.parentNode;
                        f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                    })
                }
                return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, c, d) {
                var e, g, h, i, j = a[0],
                    k = [];
                if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) return this.each(function() {
                    f(this).domManip(a, c, d, !0)
                });
                if (f.isFunction(j)) return this.each(function(e) {
                    var g = f(this);
                    a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
                });
                if (this[0]) {
                    i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                        fragment: i
                    } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                    if (g) {
                        c = c && f.nodeName(g, "tr");
                        for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                    }
                    k.length && f.each(k, bp)
                }
                return this
            }
        }),
        f.buildFragment = function(a, b, d) {
            var e, g, h, i, j = a[0];
            b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
            return {
                fragment: e,
                cacheable: g
            }
        }, f.fragments = {}, f.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            f.fn[a] = function(c) {
                var d = [],
                    e = f(c),
                    g = this.length === 1 && this[0].parentNode;
                if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                    e[b](this[0]);
                    return this
                }
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = (h > 0 ? this.clone(!0) : this).get();
                    f(e[h])[b](j), d = d.concat(j)
                }
                return this.pushStack(d, a, e.selector)
            }
        }), f.extend({
            clone: function(a, b, c) {
                var d, e, g, h = f.support.html5Clone || !bc.test("<" + a.nodeName) ? a.cloneNode(!0) : bo(a);
                if ((!f.support.noCloneEvent ||
                        !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                    bk(a, h), d = bl(a), e = bl(h);
                    for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g])
                }
                if (b) {
                    bj(a, h);
                    if (c) {
                        d = bl(a), e = bl(h);
                        for (g = 0; d[g]; ++g) bj(d[g], e[g])
                    }
                }
                d = e = null;
                return h
            },
            clean: function(a, b, d, e) {
                var g;
                b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
                var h = [],
                    i;
                for (var j = 0, k;
                    (k = a[j]) != null; j++) {
                    typeof k == "number" && (k += "");
                    if (!k) continue;
                    if (typeof k == "string")
                        if (!_.test(k)) k = b.createTextNode(k);
                        else {
                            k =
                                k.replace(Y, "<$1></$2>");
                            var l = (Z.exec(k) || ["", ""])[1].toLowerCase(),
                                m = bg[l] || bg._default,
                                n = m[0],
                                o = b.createElement("div");
                            b === c ? bh.appendChild(o) : U(b).appendChild(o), o.innerHTML = m[1] + k + m[2];
                            while (n--) o = o.lastChild;
                            if (!f.support.tbody) {
                                var p = $.test(k),
                                    q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                                for (i = q.length - 1; i >= 0; --i) f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                            }!f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]),
                                o.firstChild), k = o.childNodes
                        }
                    var r;
                    if (!f.support.appendChecked)
                        if (k[0] && typeof(r = k.length) == "number")
                            for (i = 0; i < r; i++) bn(k[i]);
                        else bn(k);
                    k.nodeType ? h.push(k) : h = f.merge(h, k)
                }
                if (d) {
                    g = function(a) {
                        return !a.type || be.test(a.type)
                    };
                    for (j = 0; h[j]; j++)
                        if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
                        else {
                            if (h[j].nodeType === 1) {
                                var s = f.grep(h[j].getElementsByTagName("script"), g);
                                h.splice.apply(h, [j + 1, 0].concat(s))
                            }
                            d.appendChild(h[j])
                        }
                }
                return h
            },
            cleanData: function(a) {
                var b, c, d = f.cache,
                    e = f.event.special,
                    g = f.support.deleteExpando;
                for (var h = 0, i;
                    (i = a[h]) != null; h++) {
                    if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
                    c = i[f.expando];
                    if (c) {
                        b = d[c];
                        if (b && b.events) {
                            for (var j in b.events) e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
                            b.handle && (b.handle.elem = null)
                        }
                        g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c]
                    }
                }
            }
        });
    var bq = /alpha\([^)]*\)/i,
        br = /opacity=([^)]*)/,
        bs = /([A-Z]|^ms)/g,
        bt = /^-?\d+(?:px)?$/i,
        bu =
        /^-?\d/,
        bv = /^([\-+])=([\-+.\de]+)/,
        bw = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bx = ["Left", "Right"],
        by = ["Top", "Bottom"],
        bz, bA, bB;
    f.fn.css = function(a, c) {
        if (arguments.length === 2 && c === b) return this;
        return f.access(this, a, c, !0, function(a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        })
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = bz(a, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c),
                    j = a.style,
                    k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
                    return j[c]
                }
                h = typeof d, h === "string" && (g = bv.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) ||
                    (d = k.set(a, d)) !== b) try {
                    j[c] = d
                } catch (l) {}
            }
        },
        css: function(a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (bz) return bz(a, c)
        },
        swap: function(a, b, c) {
            var d = {};
            for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        }
    }), f.curCSS = f.css, f.each(["height", "width"], function(a, b) {
        f.cssHooks[b] = {
            get: function(a, c, d) {
                var e;
                if (c) {
                    if (a.offsetWidth !== 0) return bC(a, b, d);
                    f.swap(a, bw, function() {
                        e =
                            bC(a, b, d)
                    });
                    return e
                }
            },
            set: function(a, b) {
                if (!bt.test(b)) return b;
                b = parseFloat(b);
                if (b >= 0) return b + "px"
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function(a, b) {
            return br.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bq, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter =
                bq.test(g) ? g.replace(bq, e) : g + " " + e
        }
    }), f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function(a, b) {
                var c;
                f.swap(a, {
                    display: "inline-block"
                }, function() {
                    b ? c = bz(a, "margin-right", "marginRight") : c = a.style.marginRight
                });
                return c
            }
        })
    }), c.defaultView && c.defaultView.getComputedStyle && (bA = function(a, b) {
        var c, d, e;
        b = b.replace(bs, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement,
            a) && (c = f.style(a, b)));
        return c
    }), c.documentElement.currentStyle && (bB = function(a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        f === null && g && (e = g[b]) && (f = e), !bt.test(f) && bu.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f
    }), bz = bA || bB, f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function(a) {
        return !f.expr.filters.hidden(a)
    });
    var bD = /%20/g,
        bE = /\[\]$/,
        bF = /\r?\n/g,
        bG = /#.*$/,
        bH = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bI = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bJ = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        bK = /^(?:GET|HEAD)$/,
        bL = /^\/\//,
        bM = /\?/,
        bN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bO = /^(?:select|textarea)/i,
        bP = /\s+/,
        bQ = /([?&])_=[^&]*/,
        bR = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bS = f.fn.load,
        bT = {},
        bU = {},
        bV, bW, bX = ["*/"] + ["*"];
    try {
        bV = e.href
    } catch (bY) {
        bV = c.createElement("a"), bV.href = "", bV = bV.href
    }
    bW = bR.exec(bV.toLowerCase()) || [], f.fn.extend({
        load: function(a, c, d) {
            if (typeof a != "string" && bS) return bS.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" &&
                (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function(a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function(a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bN, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        },
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled &&
                    (this.checked || bO.test(this.nodeName) || bI.test(this.type))
            }).map(function(a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(bF, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(bF, "\r\n")
                }
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        f.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), f.each(["get", "post"], function(a, c) {
        f[c] = function(a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }), f.extend({
        getScript: function(a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            b ? b_(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b_(a, b);
            return a
        },
        ajaxSettings: {
            url: bV,
            isLocal: bJ.test(bW[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bX
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bZ(bT),
        ajaxTransport: bZ(bU),
        ajax: function(a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c,
                        x = l ? cb(d, v, l) : b,
                        y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] =
                                y;
                            if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                        }
                        if (a === 304) w = "notmodified", o = !0;
                        else try {
                            r = cc(d, x), w = "success", o = !0
                        } catch (A) {
                            w = "parsererror", u = A
                        }
                    } else {
                        u = w;
                        if (!w || a) w = "error", a < 0 && (a = 0)
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({},
                    c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
                h = f.Deferred(),
                i = f.Callbacks("once memory"),
                j = d.statusCode || {},
                k, l = {},
                m = {},
                n, o, p, q, r, s = 0,
                t, u, v = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bH.exec(n)) o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function(a) {
                        s ||
                            (d.mimeType = a);
                        return this
                    },
                    abort: function(a) {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function(a) {
                if (a) {
                    var b;
                    if (s < 2)
                        for (b in a) j[b] = [j[b], a[b]];
                    else b = a[v.status], v.then(b, b)
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bG, "").replace(bL, bW[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bP), d.crossDomain == null && (r = bR.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bW[1] && r[2] == bW[2] && (r[3] || (r[1] ===
                "http:" ? 80 : 443)) == (bW[3] || (bW[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), b$(bT, d, c, v);
            if (s === 2) return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bK.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bM.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                        y = d.url.replace(bQ, "$1_=" + x);
                    d.url = y + (y === d.url ? (bM.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }(d.data &&
                d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bX + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e,
                    v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[u](d[u]);
            p = b$(bU, d, c, v);
            if (!p) w(-1, "No Transport");
            else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function() {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    if (s < 2) w(-1, z);
                    else throw z;
                }
            }
            return v
        },
        param: function(a, c) {
            var d = [],
                e = function(a, b) {
                    b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) ||
                a.jquery && !f.isPlainObject(a)) f.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (var g in a) ca(g, a[g], c, e);
            return d.join("&").replace(bD, "+")
        }
    }), f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cd = f.now(),
        ce = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return f.expando + "_" + cd++
        }
    }), f.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ce.test(b.url) ||
                e && ce.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(ce, l), b.url === j && (e && (k = k.replace(ce, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function(a) {
                g = [a]
            }, d.always(function() {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function() {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function(f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function(a,
                        c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                    }, e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var cf = a.ActiveXObject ? function() {
            for (var a in ch) ch[a](0, 1)
        } : !1,
        cg = 0,
        ch;
    f.ajaxSettings.xhr = a.ActiveXObject ? function() {
            return !this.isLocal && ci() || cj()
        } : ci,
        function(a) {
            f.extend(f.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function(c) {
            if (!c.crossDomain ||
                f.support.cors) {
                var d;
                return {
                    send: function(e, g) {
                        var h = c.xhr(),
                            i, j;
                        c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                        if (c.xhrFields)
                            for (j in c.xhrFields) h[j] = c.xhrFields[j];
                        c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (j in e) h.setRequestHeader(j, e[j])
                        } catch (k) {}
                        h.send(c.hasContent && c.data || null), d = function(a, e) {
                            var j, k, l, m, n;
                            try {
                                if (d && (e || h.readyState ===
                                        4)) {
                                    d = b, i && (h.onreadystatechange = f.noop, cf && delete ch[i]);
                                    if (e) h.readyState !== 4 && h.abort();
                                    else {
                                        j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText;
                                        try {
                                            k = h.statusText
                                        } catch (o) {
                                            k = ""
                                        }!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                    }
                                }
                            } catch (p) {
                                e || g(-1, p)
                            }
                            m && g(j, k, m, l)
                        }, !c.async || h.readyState === 4 ? d() : (i = ++cg, cf && (ch || (ch = {}, f(a).unload(cf)), ch[i] = d), h.onreadystatechange = d)
                    },
                    abort: function() {
                        d && d(0, 1)
                    }
                }
            }
        });
    var ck = {},
        cl, cm, cn =
        /^(?:toggle|show|hide)$/,
        co = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        cp, cq = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        cr;
    f.fn.extend({
        show: function(a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(cu("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay",
                cv(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function(a, b, c) {
            if (a || a === 0) return this.animate(cu("hide", 3), a, b, c);
            var d, e, g = 0,
                h = this.length;
            for (; g < h; g++) d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
            for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function(a, b, c) {
            var d = typeof a ==
                "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(cu("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cv(this.nodeName) === "inline" ?
                        this.style.display = "inline-block" : this.style.zoom = 1))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) j = new f.fx(this, b, i), h = a[i], cn.test(h) ? (o = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), o ? (f._data(this, "toggle" + i, o === "show" ? "hide" : "show"), j[o]()) : j[h]()) : (k = co.exec(h), l = j.cur(), k ? (m = parseFloat(k[2]), n = k[3] || (f.cssNumber[i] ? "" : "px"), n !== "px" && (f.style(this, i, (m || 1) + n), l = (m || 1) / j.cur() * l, f.style(this, i, l + n)), k[1] && (m = (k[1] === "-=" ? -1 : 1) * m + l), j.custom(l, m, n)) : j.custom(l, h,
                    ""));
                return !0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e.queue, g)
        },
        stop: function(a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
            return this.each(function() {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(d)
                }
                var b, c = !1,
                    e = f.timers,
                    g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null)
                    for (b in g) g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
                else g[b = a + ".run"] &&
                    g[b].stop && h(this, g, b);
                for (b = e.length; b--;) e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
                (!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: cu("show", 1),
        slideUp: cu("hide", 1),
        slideToggle: cu("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        f.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function(a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) &&
                    a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) d.queue = "fx";
            d.old = d.complete, d.complete = function(a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function(a, b, c, d) {
                return c + d * a
            },
            swing: function(a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        timers: [],
        fx: function(a,
            b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        },
        custom: function(a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this,
                g = f.fx;
            this.startTime = cr || cs(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function() {
                e.options.hide && f._data(e.elem, "fxshow" + e.prop) === b && f._data(e.elem, "fxshow" + e.prop, e.start)
            }, h() && f.timers.push(h) && !cp && (cp = setInterval(g.tick, g.interval))
        },
        show: function() {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b, c, d, e = cr || cs(),
                g = !0,
                h = this.elem,
                i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !==
                    !0 && (g = !1);
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function(a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && f(h).hide();
                    if (i.hide || i.show)
                        for (b in i.animatedProperties) f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now =
                this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function() {
            var a, b = f.timers,
                c = 0;
            for (; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(cp), cp = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.each(["width", "height"],
        function(a, b) {
            f.fx.step[b] = function(a) {
                f.style(a.elem, b, Math.max(0, a.now) + a.unit)
            }
        }), f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
        return f.grep(f.timers, function(b) {
            return a === b.elem
        }).length
    });
    var cw = /^t(?:able|d|h)$/i,
        cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? f.fn.offset = function(a) {
            var b = this[0],
                c;
            if (a) return this.each(function(b) {
                f.offset.setOffset(this, a, b)
            });
            if (!b || !b.ownerDocument) return null;
            if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
            try {
                c = b.getBoundingClientRect()
            } catch (d) {}
            var e = b.ownerDocument,
                g = e.documentElement;
            if (!c || !f.contains(g, b)) return c ? {
                top: c.top,
                left: c.left
            } : {
                top: 0,
                left: 0
            };
            var h = e.body,
                i = cy(e),
                j = g.clientTop || h.clientTop || 0,
                k = g.clientLeft || h.clientLeft || 0,
                l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop,
                m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft,
                n = c.top + l - j,
                o = c.left + m - k;
            return {
                top: n,
                left: o
            }
        } : f.fn.offset = function(a) {
            var b = this[0];
            if (a) return this.each(function(b) {
                f.offset.setOffset(this,
                    a, b)
            });
            if (!b || !b.ownerDocument) return null;
            if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
            var c, d = b.offsetParent,
                e = b,
                g = b.ownerDocument,
                h = g.documentElement,
                i = g.body,
                j = g.defaultView,
                k = j ? j.getComputedStyle(b, null) : b.currentStyle,
                l = b.offsetTop,
                m = b.offsetLeft;
            while ((b = b.parentNode) && b !== i && b !== h) {
                if (f.support.fixedPosition && k.position === "fixed") break;
                c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.support.doesNotAddBorder &&
                    (!f.support.doesAddBorderForTableAndCells || !cw.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.support.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c
            }
            if (k.position === "relative" || k.position === "static") l += i.offsetTop, m += i.offsetLeft;
            f.support.fixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft,
                i.scrollLeft));
            return {
                top: l,
                left: m
            }
        }, f.offset = {
            bodyOffset: function(a) {
                var b = a.offsetTop,
                    c = a.offsetLeft;
                f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
                return {
                    top: b,
                    left: c
                }
            },
            setOffset: function(a, b, c) {
                var d = f.css(a, "position");
                d === "static" && (a.style.position = "relative");
                var e = f(a),
                    g = e.offset(),
                    h = f.css(a, "top"),
                    i = f.css(a, "left"),
                    j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
                    k = {},
                    l = {},
                    m, n;
                j ? (l = e.position(), m = l.top,
                    n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
            }
        }, f.fn.extend({
            position: function() {
                if (!this[0]) return null;
                var a = this[0],
                    b = this.offsetParent(),
                    c = this.offset(),
                    d = cx.test(b[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : b.offset();
                c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left +=
                    parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
                return {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var a = this.offsetParent || c.body;
                    while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
                    return a
                })
            }
        }), f.each(["Left", "Top"], function(a, c) {
            var d = "scroll" + c;
            f.fn[d] = function(c) {
                var e, g;
                if (c === b) {
                    e = this[0];
                    if (!e) return null;
                    g = cy(e);
                    return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] ||
                        g.document.body[d] : e[d]
                }
                return this.each(function() {
                    g = cy(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
                })
            }
        }), f.each(["Height", "Width"], function(a, c) {
            var d = c.toLowerCase();
            f.fn["inner" + c] = function() {
                var a = this[0];
                return a ? a.style ? parseFloat(f.css(a, d, "padding")) : this[d]() : null
            }, f.fn["outer" + c] = function(a) {
                var b = this[0];
                return b ? b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : this[d]() : null
            }, f.fn[d] = function(a) {
                var e = this[0];
                if (!e) return a == null ? null : this;
                if (f.isFunction(a)) return this.each(function(b) {
                    var c =
                        f(this);
                    c[d](a.call(this, b, c[d]()))
                });
                if (f.isWindow(e)) {
                    var g = e.document.documentElement["client" + c],
                        h = e.document.body;
                    return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
                }
                if (e.nodeType === 9) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
                if (a === b) {
                    var i = f.css(e, d),
                        j = parseFloat(i);
                    return f.isNumeric(j) ? j : i
                }
                return this.css(d, typeof a == "string" ? a : a + "px")
            }
        }), a.jQuery = a.$ = f, typeof define == "function" &&
        define.amd && define.amd.jQuery && define("jquery", [], function() {
            return f
        })
})(window);
(function(a) {
    a.easytabs = function(j, e) {
        var f = this,
            q = a(j),
            i = {
                animate: true,
                panelActiveClass: "active",
                tabActiveClass: "active",
                defaultTab: "li:first-child",
                animationSpeed: "normal",
                tabs: "> ul > li",
                updateHash: true,
                cycle: false,
                collapsible: false,
                collapsedClass: "collapsed",
                collapsedByDefault: true,
                uiTabs: false,
                transitionIn: "fadeIn",
                transitionOut: "fadeOut",
                transitionInEasing: "swing",
                transitionOutEasing: "swing",
                transitionCollapse: "slideUp",
                transitionUncollapse: "slideDown",
                transitionCollapseEasing: "swing",
                transitionUncollapseEasing: "swing",
                containerClass: "",
                tabsClass: "",
                tabClass: "",
                panelClass: "",
                cache: true,
                panelContext: q
            },
            h, l, v, m, d, t = {
                fast: 200,
                normal: 400,
                slow: 600
            },
            r;
        f.init = function() {
            f.settings = r = a.extend({}, i, e);
            if (r.uiTabs) {
                r.tabActiveClass = "ui-tabs-selected";
                r.containerClass = "ui-tabs ui-widget ui-widget-content ui-corner-all";
                r.tabsClass = "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all";
                r.tabClass = "ui-state-default ui-corner-top";
                r.panelClass = "ui-tabs-panel ui-widget-content ui-corner-bottom"
            }
            if (r.collapsible &&
                e.defaultTab !== undefined && e.collpasedByDefault === undefined) r.collapsedByDefault = false;
            if (typeof r.animationSpeed === "string") r.animationSpeed = t[r.animationSpeed];
            a("a.anchor").remove().prependTo("body");
            q.data("easytabs", {});
            f.setTransitions();
            f.getTabs();
            b();
            g();
            w();
            n();
            c();
            q.attr("data-easytabs", true)
        };
        f.setTransitions = function() {
            v = r.animate ? {
                show: r.transitionIn,
                hide: r.transitionOut,
                speed: r.animationSpeed,
                collapse: r.transitionCollapse,
                uncollapse: r.transitionUncollapse,
                halfSpeed: r.animationSpeed /
                    2
            } : {
                show: "show",
                hide: "hide",
                speed: 0,
                collapse: "hide",
                uncollapse: "show",
                halfSpeed: 0
            }
        };
        f.getTabs = function() {
            var x;
            f.tabs = q.find(r.tabs), f.panels = a(), f.tabs.each(function() {
                var A = a(this),
                    z = A.children("a"),
                    y = A.children("a").data("target");
                A.data("easytabs", {});
                if (y !== undefined && y !== null) A.data("easytabs").ajax = z.attr("href");
                else y = z.attr("href");
                y = y.match(/#([^\?]+)/)[0].substr(1);
                x = r.panelContext.find("#" + y);
                if (x.length) {
                    x.data("easytabs", {
                        position: x.css("position"),
                        visibility: x.css("visibility")
                    });
                    x.not(r.panelActiveClass).hide();
                    f.panels = f.panels.add(x);
                    A.data("easytabs").panel = x
                } else f.tabs = f.tabs.not(A)
            })
        };
        f.selectTab = function(x, C) {
            var y = window.location,
                B = y.hash.match(/^[^\?]*/)[0],
                z = x.parent().data("easytabs").panel,
                A = x.parent().data("easytabs").ajax;
            if (r.collapsible && !d && (x.hasClass(r.tabActiveClass) || x.hasClass(r.collapsedClass))) f.toggleTabCollapse(x, z, A, C);
            else if (!x.hasClass(r.tabActiveClass) || !z.hasClass(r.panelActiveClass)) o(x, z, A, C);
            else if (!r.cache) o(x, z, A, C)
        };
        f.toggleTabCollapse =
            function(x, y, z, A) {
                f.panels.stop(true, true);
                if (u(q, "easytabs:before", [x, y, r])) {
                    f.tabs.filter("." + r.tabActiveClass).removeClass(r.tabActiveClass).children().removeClass(r.tabActiveClass);
                    if (x.hasClass(r.collapsedClass)) {
                        if (z && (!r.cache || !x.parent().data("easytabs").cached)) {
                            q.trigger("easytabs:ajax:beforeSend", [x, y]);
                            y.load(z, function(C, B, D) {
                                x.parent().data("easytabs").cached = true;
                                q.trigger("easytabs:ajax:complete", [x, y, C, B, D])
                            })
                        }
                        x.parent().removeClass(r.collapsedClass).addClass(r.tabActiveClass).children().removeClass(r.collapsedClass).addClass(r.tabActiveClass);
                        y.addClass(r.panelActiveClass)[v.uncollapse](v.speed, r.transitionUncollapseEasing, function() {
                            q.trigger("easytabs:midTransition", [x, y, r]);
                            if (typeof A == "function") A()
                        })
                    } else {
                        x.addClass(r.collapsedClass).parent().addClass(r.collapsedClass);
                        y.removeClass(r.panelActiveClass)[v.collapse](v.speed, r.transitionCollapseEasing, function() {
                            q.trigger("easytabs:midTransition", [x, y, r]);
                            if (typeof A == "function") A()
                        })
                    }
                }
            };
        f.matchTab = function(x) {
            return f.tabs.find("[href='" + x + "'],[data-target='" + x + "']").first()
        };
        f.matchInPanel =
            function(x) {
                return x ? f.panels.filter(":has(" + x + ")").first() : []
            };
        f.selectTabFromHashChange = function() {
            var y = window.location.hash.match(/^[^\?]*/)[0],
                x = f.matchTab(y),
                z;
            if (r.updateHash)
                if (x.length) {
                    d = true;
                    f.selectTab(x)
                } else {
                    z = f.matchInPanel(y);
                    if (z.length) {
                        y = "#" + z.attr("id");
                        x = f.matchTab(y);
                        d = true;
                        f.selectTab(x)
                    } else if (!h.hasClass(r.tabActiveClass) && !r.cycle)
                        if (y === "" || f.matchTab(m).length || q.closest(y).length) {
                            d = true;
                            f.selectTab(l)
                        }
                }
        };
        f.cycleTabs = function(x) {
            if (r.cycle) {
                x = x % f.tabs.length;
                $tab = a(f.tabs[x]).children("a").first();
                d = true;
                f.selectTab($tab, function() {
                    setTimeout(function() {
                        f.cycleTabs(x + 1)
                    }, r.cycle)
                })
            }
        };
        f.publicMethods = {
            select: function(x) {
                var y;
                if ((y = f.tabs.filter(x)).length === 0) {
                    if ((y = f.tabs.find("a[href='" + x + "']")).length === 0)
                        if ((y = f.tabs.find("a" + x)).length === 0)
                            if ((y = f.tabs.find("[data-target='" + x + "']")).length === 0)
                                if ((y = f.tabs.find("a[href$='" + x + "']")).length === 0) a.error("Tab '" + x + "' does not exist in tab set")
                } else y = y.children("a").first();
                f.selectTab(y)
            }
        };
        var u = function(A, x, z) {
            var y = a.Event(x);
            A.trigger(y,
                z);
            return y.result !== false
        };
        var b = function() {
            q.addClass(r.containerClass);
            f.tabs.parent().addClass(r.tabsClass);
            f.tabs.addClass(r.tabClass);
            f.panels.addClass(r.panelClass)
        };
        var g = function() {
            var y = window.location.hash.match(/^[^\?]*/)[0],
                x = f.matchTab(y).parent(),
                z;
            if (x.length === 1) {
                h = x;
                r.cycle = false
            } else {
                z = f.matchInPanel(y);
                if (z.length) {
                    y = "#" + z.attr("id");
                    h = f.matchTab(y).parent()
                } else {
                    h = f.tabs.parent().find(r.defaultTab);
                    if (h.length === 0) a.error("The specified default tab ('" + r.defaultTab + "') could not be found in the tab set.")
                }
            }
            l =
                h.children("a").first();
            p(x)
        };
        var p = function(z) {
            var y, x;
            if (r.collapsible && z.length === 0 && r.collapsedByDefault) h.addClass(r.collapsedClass).children().addClass(r.collapsedClass);
            else {
                y = a(h.data("easytabs").panel);
                x = h.data("easytabs").ajax;
                if (x && (!r.cache || !h.data("easytabs").cached)) {
                    q.trigger("easytabs:ajax:beforeSend", [l, y]);
                    y.load(x, function(B, A, C) {
                        h.data("easytabs").cached = true;
                        q.trigger("easytabs:ajax:complete", [l, y, B, A, C])
                    })
                }
                h.data("easytabs").panel.show().addClass(r.panelActiveClass);
                h.addClass(r.tabActiveClass).children().addClass(r.tabActiveClass)
            }
        };
        var w = function() {
            f.tabs.children("a").bind("click.easytabs", function(x) {
                r.cycle = false;
                d = false;
                f.selectTab(a(this));
                x.preventDefault()
            })
        };
        var o = function(z, D, E, H) {
            f.panels.stop(true, true);
            if (u(q, "easytabs:before", [z, D, r])) {
                var A = f.panels.filter(":visible"),
                    y = D.parent(),
                    F, x, C, G, B = window.location.hash.match(/^[^\?]*/)[0];
                if (r.animate) {
                    F = s(D);
                    x = A.length ? k(A) : 0;
                    C = F - x
                }
                m = B;
                G = function() {
                    q.trigger("easytabs:midTransition", [z, D, r]);
                    if (r.animate && r.transitionIn == "fadeIn")
                        if (C < 0) y.animate({
                                height: y.height() + C
                            },
                            v.halfSpeed).css({
                            "min-height": ""
                        });
                    if (r.updateHash && !d) window.location.hash = "#" + D.attr("id");
                    else d = false;
                    D[v.show](v.speed, r.transitionInEasing, function() {
                        y.css({
                            height: "",
                            "min-height": ""
                        });
                        q.trigger("easytabs:after", [z, D, r]);
                        if (typeof H == "function") H()
                    })
                };
                if (E && (!r.cache || !z.parent().data("easytabs").cached)) {
                    q.trigger("easytabs:ajax:beforeSend", [z, D]);
                    D.load(E, function(J, I, K) {
                        z.parent().data("easytabs").cached = true;
                        q.trigger("easytabs:ajax:complete", [z, D, J, I, K])
                    })
                }
                if (r.animate && r.transitionOut ==
                    "fadeOut")
                    if (C > 0) y.animate({
                        height: y.height() + C
                    }, v.halfSpeed);
                    else y.css({
                        "min-height": y.height()
                    });
                f.tabs.filter("." + r.tabActiveClass).removeClass(r.tabActiveClass).children().removeClass(r.tabActiveClass);
                f.tabs.filter("." + r.collapsedClass).removeClass(r.collapsedClass).children().removeClass(r.collapsedClass);
                z.parent().addClass(r.tabActiveClass).children().addClass(r.tabActiveClass);
                f.panels.filter("." + r.panelActiveClass).removeClass(r.panelActiveClass);
                D.addClass(r.panelActiveClass);
                if (A.length) A[v.hide](v.speed,
                    r.transitionOutEasing, G);
                else D[v.uncollapse](v.speed, r.transitionUncollapseEasing, G)
            }
        };
        var s = function(y) {
            if (y.data("easytabs") && y.data("easytabs").lastHeight) return y.data("easytabs").lastHeight;
            var z = y.css("display"),
                x = y.wrap(a("<div>", {
                    position: "absolute",
                    visibility: "hidden",
                    overflow: "hidden"
                })).css({
                    position: "relative",
                    visibility: "hidden",
                    display: "block"
                }).outerHeight();
            y.unwrap();
            y.css({
                position: y.data("easytabs").position,
                visibility: y.data("easytabs").visibility,
                display: z
            });
            y.data("easytabs").lastHeight =
                x;
            return x
        };
        var k = function(y) {
            var x = y.outerHeight();
            if (y.data("easytabs")) y.data("easytabs").lastHeight = x;
            else y.data("easytabs", {
                lastHeight: x
            });
            return x
        };
        var n = function() {
            if (typeof a(window).hashchange === "function") a(window).hashchange(function() {
                f.selectTabFromHashChange()
            });
            else if (a.address && typeof a.address.change === "function") a.address.change(function() {
                f.selectTabFromHashChange()
            })
        };
        var c = function() {
            var x;
            if (r.cycle) {
                x = f.tabs.index(h);
                setTimeout(function() {
                    f.cycleTabs(x + 1)
                }, r.cycle)
            }
        };
        f.init()
    };
    a.fn.easytabs = function(c) {
        var b = arguments;
        return this.each(function() {
            var e = a(this),
                d = e.data("easytabs");
            if (undefined === d) {
                d = new a.easytabs(this, c);
                e.data("easytabs", d)
            }
            if (d.publicMethods[c]) return d.publicMethods[c](Array.prototype.slice.call(b, 1))
        })
    }
})(jQuery);
(function($) {
    $.fn.quicksand = function(collection, customOptions) {
        var options = {
            duration: 750,
            easing: "swing",
            attribute: "data-id",
            adjustHeight: "auto",
            useScaling: true,
            enhancement: function(c) {},
            selector: "> *",
            dx: 0,
            dy: 0
        };
        $.extend(options, customOptions);
        if ($.browser.msie || typeof $.fn.scale == "undefined") options.useScaling = false;
        var callbackFunction;
        if (typeof arguments[1] == "function") var callbackFunction = arguments[1];
        else if (typeof(arguments[2] == "function")) var callbackFunction = arguments[2];
        return this.each(function(i) {
            var val;
            var animationQueue = [];
            var $collection = $(collection).clone();
            var $sourceParent = $(this);
            var sourceHeight = $(this).css("height");
            var destHeight;
            var adjustHeightOnCallback = false;
            var offset = $($sourceParent).offset();
            var offsets = [];
            var $source = $(this).find(options.selector);
            if ($.browser.msie && $.browser.version.substr(0, 1) < 7) {
                $sourceParent.html("").append($collection);
                return
            }
            var postCallbackPerformed = 0;
            var postCallback = function() {
                if (!postCallbackPerformed) {
                    postCallbackPerformed = 1;
                    $toDelete = $sourceParent.find("> *");
                    $sourceParent.prepend($dest.find("> *"));
                    $toDelete.remove();
                    if (adjustHeightOnCallback) $sourceParent.css("height", destHeight);
                    options.enhancement($sourceParent);
                    if (typeof callbackFunction == "function") callbackFunction.call(this)
                }
            };
            var $correctionParent = $sourceParent.offsetParent();
            var correctionOffset = $correctionParent.offset();
            if ($correctionParent.css("position") == "relative")
                if ($correctionParent.get(0).nodeName.toLowerCase() == "body");
                else {
                    correctionOffset.top += parseFloat($correctionParent.css("border-top-width")) ||
                        0;
                    correctionOffset.left += parseFloat($correctionParent.css("border-left-width")) || 0
                } else {
                correctionOffset.top -= parseFloat($correctionParent.css("border-top-width")) || 0;
                correctionOffset.left -= parseFloat($correctionParent.css("border-left-width")) || 0;
                correctionOffset.top -= parseFloat($correctionParent.css("margin-top")) || 0;
                correctionOffset.left -= parseFloat($correctionParent.css("margin-left")) || 0
            }
            if (isNaN(correctionOffset.left)) correctionOffset.left = 0;
            if (isNaN(correctionOffset.top)) correctionOffset.top =
                0;
            correctionOffset.left -= options.dx;
            correctionOffset.top -= options.dy;
            $sourceParent.css("height", $(this).height());
            $source.each(function(i) {
                offsets[i] = $(this).offset()
            });
            $(this).stop();
            var dx = 0;
            var dy = 0;
            $source.each(function(i) {
                $(this).stop();
                var rawObj = $(this).get(0);
                if (rawObj.style.position == "absolute") {
                    dx = -options.dx;
                    dy = -options.dy
                } else {
                    dx = options.dx;
                    dy = options.dy
                }
                rawObj.style.position = "absolute";
                rawObj.style.margin = "0";
                rawObj.style.top = offsets[i].top - parseFloat(rawObj.style.marginTop) - correctionOffset.top +
                    dy + "px";
                rawObj.style.left = offsets[i].left - parseFloat(rawObj.style.marginLeft) - correctionOffset.left + dx + "px"
            });
            var $dest = $($sourceParent).clone();
            var rawDest = $dest.get(0);
            rawDest.innerHTML = "";
            rawDest.setAttribute("id", "");
            rawDest.style.height = "auto";
            rawDest.style.width = $sourceParent.width() + "px";
            $dest.append($collection);
            $dest.insertBefore($sourceParent);
            $dest.css("opacity", 0);
            rawDest.style.zIndex = -1;
            rawDest.style.margin = "0";
            rawDest.style.position = "absolute";
            rawDest.style.top = offset.top - correctionOffset.top +
                "px";
            rawDest.style.left = offset.left - correctionOffset.left + "px";
            if (options.adjustHeight === "dynamic") $sourceParent.animate({
                height: $dest.height()
            }, options.duration, options.easing);
            else if (options.adjustHeight === "auto") {
                destHeight = $dest.height();
                if (parseFloat(sourceHeight) < parseFloat(destHeight)) $sourceParent.css("height", destHeight);
                else adjustHeightOnCallback = true
            }
            $source.each(function(i) {
                var destElement = [];
                if (typeof options.attribute == "function") {
                    val = options.attribute($(this));
                    $collection.each(function() {
                        if (options.attribute(this) ==
                            val) {
                            destElement = $(this);
                            return false
                        }
                    })
                } else destElement = $collection.filter("[" + options.attribute + "=" + $(this).attr(options.attribute) + "]");
                if (destElement.length)
                    if (!options.useScaling) animationQueue.push({
                        element: $(this),
                        animation: {
                            top: destElement.offset().top - correctionOffset.top,
                            left: destElement.offset().left - correctionOffset.left,
                            opacity: 1
                        }
                    });
                    else animationQueue.push({
                        element: $(this),
                        animation: {
                            top: destElement.offset().top - correctionOffset.top,
                            left: destElement.offset().left - correctionOffset.left,
                            opacity: 1,
                            scale: "1.0"
                        }
                    });
                else if (!options.useScaling) animationQueue.push({
                    element: $(this),
                    animation: {
                        opacity: "0.0"
                    }
                });
                else animationQueue.push({
                    element: $(this),
                    animation: {
                        opacity: "0.0",
                        scale: "0.0"
                    }
                })
            });
            $collection.each(function(i) {
                var sourceElement = [];
                var destElement = [];
                if (typeof options.attribute == "function") {
                    val = options.attribute($(this));
                    $source.each(function() {
                        if (options.attribute(this) == val) {
                            sourceElement = $(this);
                            return false
                        }
                    });
                    $collection.each(function() {
                        if (options.attribute(this) == val) {
                            destElement =
                                $(this);
                            return false
                        }
                    })
                } else {
                    sourceElement = $source.filter("[" + options.attribute + "=" + $(this).attr(options.attribute) + "]");
                    destElement = $collection.filter("[" + options.attribute + "=" + $(this).attr(options.attribute) + "]")
                }
                var animationOptions;
                if (sourceElement.length === 0) {
                    if (!options.useScaling) animationOptions = {
                        opacity: "1.0"
                    };
                    else animationOptions = {
                        opacity: "1.0",
                        scale: "1.0"
                    };
                    d = destElement.clone();
                    var rawDestElement = d.get(0);
                    rawDestElement.style.position = "absolute";
                    rawDestElement.style.margin = "0";
                    rawDestElement.style.top =
                        destElement.offset().top - correctionOffset.top + "px";
                    rawDestElement.style.left = destElement.offset().left - correctionOffset.left + "px";
                    d.css("opacity", 0);
                    if (options.useScaling) d.css("transform", "scale(0.0)");
                    d.appendTo($sourceParent);
                    animationQueue.push({
                        element: $(d),
                        animation: animationOptions
                    })
                }
            });
            $dest.remove();
            options.enhancement($sourceParent);
            for (i = 0; i < animationQueue.length; i++) animationQueue[i].element.animate(animationQueue[i].animation, options.duration, options.easing, postCallback)
        })
    }
})(jQuery);
jQuery.easing["jswing"] = jQuery.easing["swing"];
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * (--t * (t - 2) - 1) + b
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c /
            2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
    },
    easeInSine: function(x,
        t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
    },
    easeInExpo: function(x, t, b, c, d) {
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
    },
    easeOutExpo: function(x, t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 *
            Math.PI) / p)) + b
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2,
            10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
    },
    easeInBounce: function(x, t, b,
        c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < 1 / 2.75) return c * (7.5625 * t * t) + b;
        else if (t < 2 / 2.75) return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
        else if (t < 2.5 / 2.75) return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
        else return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b
    }
});
(function(e) {
    var a = [],
        d = /^url\(["']?([^"'\)]*)["']?\);?$/i,
        c = /\.png$/i,
        b = e.browser.msie && e.browser.version == 6;

    function f() {
        e.each(a, function() {
            this.refresh(true)
        })
    }
    e(window).resize(f);
    e.Poshytip = function(h, g) {
        this.$elm = e(h);
        this.opts = e.extend({}, e.fn.poshytip.defaults, g);
        this.$tip = e(['<div class="', this.opts.className, '">', '<div class="tip-inner tip-bg-image"></div>', '<div class="tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"></div>', "</div>"].join(""));
        this.$arrow = this.$tip.find("div.tip-arrow");
        this.$inner = this.$tip.find("div.tip-inner");
        this.disabled = false;
        this.init()
    };
    e.Poshytip.prototype = {
        init: function() {
            a.push(this);
            this.$elm.data("title.poshytip", this.$elm.attr("title")).data("poshytip", this);
            switch (this.opts.showOn) {
                case "hover":
                    this.$elm.bind({
                        "mouseenter.poshytip": e.proxy(this.mouseenter, this),
                        "mouseleave.poshytip": e.proxy(this.mouseleave, this)
                    });
                    if (this.opts.alignTo == "cursor") this.$elm.bind("mousemove.poshytip", e.proxy(this.mousemove, this));
                    if (this.opts.allowTipHover) this.$tip.hover(e.proxy(this.clearTimeouts,
                        this), e.proxy(this.hide, this));
                    break;
                case "focus":
                    this.$elm.bind({
                        "focus.poshytip": e.proxy(this.show, this),
                        "blur.poshytip": e.proxy(this.hide, this)
                    });
                    break
            }
        },
        mouseenter: function(g) {
            if (this.disabled) return true;
            this.clearTimeouts();
            this.$elm.attr("title", "");
            this.showTimeout = setTimeout(e.proxy(this.show, this), this.opts.showTimeout)
        },
        mouseleave: function() {
            if (this.disabled) return true;
            this.clearTimeouts();
            this.$elm.attr("title", this.$elm.data("title.poshytip"));
            this.hideTimeout = setTimeout(e.proxy(this.hide,
                this), this.opts.hideTimeout)
        },
        mousemove: function(g) {
            if (this.disabled) return true;
            this.eventX = g.pageX;
            this.eventY = g.pageY;
            if (this.opts.followCursor && this.$tip.data("active")) {
                this.calcPos();
                this.$tip.css({
                    left: this.pos.l,
                    top: this.pos.t
                });
                if (this.pos.arrow) this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow
            }
        },
        show: function() {
            if (this.disabled || this.$tip.data("active")) return;
            this.reset();
            this.update();
            this.display()
        },
        hide: function() {
            if (this.disabled || !this.$tip.data("active")) return;
            this.display(true)
        },
        reset: function() {
            this.$tip.queue([]).detach().css("visibility", "hidden").data("active", false);
            this.$inner.find("*").poshytip("hide");
            if (this.opts.fade) this.$tip.css("opacity", this.opacity);
            this.$arrow[0].className = "tip-arrow tip-arrow-top tip-arrow-right tip-arrow-bottom tip-arrow-left"
        },
        update: function(i) {
            if (this.disabled) return;
            var h = i !== undefined;
            if (h) {
                if (!this.$tip.data("active")) return
            } else i = this.opts.content;
            this.$inner.contents().detach();
            var g = this;
            this.$inner.append(typeof i == "function" ?
                i.call(this.$elm[0], function(j) {
                    g.update(j)
                }) : i == "[title]" ? this.$elm.data("title.poshytip") : i);
            this.refresh(h)
        },
        refresh: function(h) {
            if (this.disabled) return;
            if (h) {
                if (!this.$tip.data("active")) return;
                var k = {
                    left: this.$tip.css("left"),
                    top: this.$tip.css("top")
                }
            }
            this.$tip.css({
                left: 0,
                top: 0
            }).appendTo(document.body);
            if (this.opacity === undefined) this.opacity = this.$tip.css("opacity");
            var l = this.$tip.css("background-image").match(d),
                m = this.$arrow.css("background-image").match(d);
            if (l) {
                var i = c.test(l[1]);
                if (b &&
                    i) {
                    this.$tip.css("background-image", "none");
                    this.$inner.css({
                        margin: 0,
                        border: 0,
                        padding: 0
                    });
                    l = i = false
                } else this.$tip.prepend('<table border="0" cellpadding="0" cellspacing="0"><tr><td class="tip-top tip-bg-image" colspan="2"><span></span></td><td class="tip-right tip-bg-image" rowspan="2"><span></span></td></tr><tr><td class="tip-left tip-bg-image" rowspan="2"><span></span></td><td></td></tr><tr><td class="tip-bottom tip-bg-image" colspan="2"><span></span></td></tr></table>').css({
                    border: 0,
                    padding: 0,
                    "background-image": "none",
                    "background-color": "transparent"
                }).find(".tip-bg-image").css("background-image", 'url("' + l[1] + '")').end().find("td").eq(3).append(this.$inner);
                if (i && !e.support.opacity) this.opts.fade = false
            }
            if (m && !e.support.opacity) {
                if (b && c.test(m[1])) {
                    m = false;
                    this.$arrow.css("background-image", "none")
                }
                this.opts.fade = false
            }
            var o = this.$tip.find("table");
            if (b) {
                this.$tip[0].style.width = "";
                o.width("auto").find("td").eq(3).width("auto");
                var n = this.$tip.width(),
                    j = parseInt(this.$tip.css("min-width")),
                    g = parseInt(this.$tip.css("max-width"));
                if (!isNaN(j) && n < j) n = j;
                else if (!isNaN(g) && n > g) n = g;
                this.$tip.add(o).width(n).eq(0).find("td").eq(3).width("100%")
            } else if (o[0]) o.width("auto").find("td").eq(3).width("auto").end().end().width(this.$tip.width()).find("td").eq(3).width("100%");
            this.tipOuterW = this.$tip.outerWidth();
            this.tipOuterH = this.$tip.outerHeight();
            this.calcPos();
            if (m && this.pos.arrow) {
                this.$arrow[0].className = "tip-arrow tip-arrow-" + this.pos.arrow;
                this.$arrow.css("visibility", "inherit")
            }
            if (h) this.$tip.css(k).animate({
                left: this.pos.l,
                top: this.pos.t
            }, 200);
            else this.$tip.css({
                left: this.pos.l,
                top: this.pos.t
            })
        },
        display: function(h) {
            var i = this.$tip.data("active");
            if (i && !h || !i && h) return;
            this.$tip.stop();
            if ((this.opts.slide && this.pos.arrow || this.opts.fade) && (h && this.opts.hideAniDuration || !h && this.opts.showAniDuration)) {
                var m = {},
                    l = {};
                if (this.opts.slide && this.pos.arrow) {
                    var k, g;
                    if (this.pos.arrow == "bottom" || this.pos.arrow == "top") {
                        k = "top";
                        g = "bottom"
                    } else {
                        k = "left";
                        g = "right"
                    }
                    var j = parseInt(this.$tip.css(k));
                    m[k] = j + (h ? 0 : this.opts.slideOffset *
                        (this.pos.arrow == g ? -1 : 1));
                    l[k] = j + (h ? this.opts.slideOffset * (this.pos.arrow == g ? 1 : -1) : 0)
                }
                if (this.opts.fade) {
                    m.opacity = h ? this.$tip.css("opacity") : 0;
                    l.opacity = h ? 0 : this.opacity
                }
                this.$tip.css(m).animate(l, this.opts[h ? "hideAniDuration" : "showAniDuration"])
            }
            h ? this.$tip.queue(e.proxy(this.reset, this)) : this.$tip.css("visibility", "inherit");
            this.$tip.data("active", !i)
        },
        disable: function() {
            this.reset();
            this.disabled = true
        },
        enable: function() {
            this.disabled = false
        },
        destroy: function() {
            this.reset();
            this.$tip.remove();
            this.$elm.unbind("poshytip").removeData("title.poshytip").removeData("poshytip");
            a.splice(e.inArray(this, a), 1)
        },
        clearTimeouts: function() {
            if (this.showTimeout) {
                clearTimeout(this.showTimeout);
                this.showTimeout = 0
            }
            if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
                this.hideTimeout = 0
            }
        },
        calcPos: function() {
            var n = {
                    l: 0,
                    t: 0,
                    arrow: ""
                },
                h = e(window),
                k = {
                    l: h.scrollLeft(),
                    t: h.scrollTop(),
                    w: h.width(),
                    h: h.height()
                },
                p, j, m, i, q, g;
            if (this.opts.alignTo == "cursor") {
                p = j = m = this.eventX;
                i = q = g = this.eventY
            } else {
                var o = this.$elm.offset(),
                    l = {
                        l: o.left,
                        t: o.top,
                        w: this.$elm.outerWidth(),
                        h: this.$elm.outerHeight()
                    };
                p = l.l + (this.opts.alignX != "inner-right" ? 0 : l.w);
                j = p + Math.floor(l.w / 2);
                m = p + (this.opts.alignX != "inner-left" ? l.w : 0);
                i = l.t + (this.opts.alignY != "inner-bottom" ? 0 : l.h);
                q = i + Math.floor(l.h / 2);
                g = i + (this.opts.alignY != "inner-top" ? l.h : 0)
            }
            switch (this.opts.alignX) {
                case "right":
                case "inner-left":
                    n.l = m + this.opts.offsetX;
                    if (n.l + this.tipOuterW > k.l + k.w) n.l = k.l + k.w - this.tipOuterW;
                    if (this.opts.alignX == "right" || this.opts.alignY == "center") n.arrow = "left";
                    break;
                case "center":
                    n.l = j - Math.floor(this.tipOuterW / 2);
                    if (n.l + this.tipOuterW > k.l + k.w) n.l = k.l + k.w - this.tipOuterW;
                    else if (n.l < k.l) n.l = k.l;
                    break;
                default:
                    n.l = p - this.tipOuterW - this.opts.offsetX;
                    if (n.l < k.l) n.l = k.l;
                    if (this.opts.alignX == "left" || this.opts.alignY == "center") n.arrow = "right"
            }
            switch (this.opts.alignY) {
                case "bottom":
                case "inner-top":
                    n.t = g + this.opts.offsetY;
                    if (!n.arrow || this.opts.alignTo == "cursor") n.arrow = "top";
                    if (n.t + this.tipOuterH > k.t + k.h) {
                        n.t = i - this.tipOuterH - this.opts.offsetY;
                        if (n.arrow == "top") n.arrow =
                            "bottom"
                    }
                    break;
                case "center":
                    n.t = q - Math.floor(this.tipOuterH / 2);
                    if (n.t + this.tipOuterH > k.t + k.h) n.t = k.t + k.h - this.tipOuterH;
                    else if (n.t < k.t) n.t = k.t;
                    break;
                default:
                    n.t = i - this.tipOuterH - this.opts.offsetY;
                    if (!n.arrow || this.opts.alignTo == "cursor") n.arrow = "bottom";
                    if (n.t < k.t) {
                        n.t = g + this.opts.offsetY;
                        if (n.arrow == "bottom") n.arrow = "top"
                    }
            }
            this.pos = n
        }
    };
    e.fn.poshytip = function(g) {
        if (typeof g == "string") return this.each(function() {
            var i = e(this).data("poshytip");
            if (i && i[g]) i[g]()
        });
        var h = e.extend({}, e.fn.poshytip.defaults,
            g);
        if (!e("#poshytip-css-" + h.className)[0]) e(['<style id="poshytip-css-', h.className, '" type="text/css">', "div.", h.className, "{visibility:hidden;position:absolute;top:0;left:0;}", "div.", h.className, " table, div.", h.className, " td{margin:0;font-family:inherit;font-size:inherit;font-weight:inherit;font-style:inherit;font-variant:inherit;}", "div.", h.className, " td.tip-bg-image span{display:block;font:1px/1px sans-serif;height:", h.bgImageFrameSize, "px;width:", h.bgImageFrameSize, "px;overflow:hidden;}",
            "div.", h.className, " td.tip-right{background-position:100% 0;}", "div.", h.className, " td.tip-bottom{background-position:100% 100%;}", "div.", h.className, " td.tip-left{background-position:0 100%;}", "div.", h.className, " div.tip-inner{background-position:-", h.bgImageFrameSize, "px -", h.bgImageFrameSize, "px;}", "div.", h.className, " div.tip-arrow{visibility:hidden;position:absolute;overflow:hidden;font:1px/1px sans-serif;}", "</style>"
        ].join("")).appendTo("head");
        return this.each(function() {
            new e.Poshytip(this,
                h)
        })
    };
    e.fn.poshytip.defaults = {
        content: "[title]",
        className: "tip-yellow",
        bgImageFrameSize: 10,
        showTimeout: 500,
        hideTimeout: 100,
        showOn: "hover",
        alignTo: "cursor",
        alignX: "right",
        alignY: "top",
        offsetX: -22,
        offsetY: 18,
        allowTipHover: true,
        followCursor: false,
        fade: true,
        slide: true,
        slideOffset: 8,
        showAniDuration: 300,
        hideAniDuration: 300
    }
})(jQuery);
(function($) {
    var tmp, loading, overlay, wrap, outer, content, close, title, nav_left, nav_right, selectedIndex = 0,
        selectedOpts = {},
        selectedArray = [],
        currentIndex = 0,
        currentOpts = {},
        currentArray = [],
        ajaxLoader = null,
        imgPreloader = new Image,
        imgRegExp = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
        swfRegExp = /[^\.]\.(swf)\s*$/i,
        loadingTimer, loadingFrame = 1,
        titleHeight = 0,
        titleStr = "",
        start_pos, final_pos, busy = false,
        fx = $.extend($("<div/>")[0], {
            prop: 0
        }),
        isIE6 = $.browser.msie && $.browser.version < 7 && !window.XMLHttpRequest,
        _abort = function() {
            loading.hide();
            imgPreloader.onerror = imgPreloader.onload = null;
            if (ajaxLoader) ajaxLoader.abort();
            tmp.empty()
        },
        _error = function() {
            if (false === selectedOpts.onError(selectedArray, selectedIndex, selectedOpts)) {
                loading.hide();
                busy = false;
                return
            }
            selectedOpts.titleShow = false;
            selectedOpts.width = "auto";
            selectedOpts.height = "auto";
            tmp.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
            _process_inline()
        },
        _start = function() {
            var obj = selectedArray[selectedIndex],
                href, type, title, str,
                emb, ret;
            _abort();
            selectedOpts = $.extend({}, $.fn.fancybox.defaults, typeof $(obj).data("fancybox") == "undefined" ? selectedOpts : $(obj).data("fancybox"));
            ret = selectedOpts.onStart(selectedArray, selectedIndex, selectedOpts);
            if (ret === false) {
                busy = false;
                return
            } else if (typeof ret == "object") selectedOpts = $.extend(selectedOpts, ret);
            title = selectedOpts.title || (obj.nodeName ? $(obj).attr("title") : obj.title) || "";
            if (obj.nodeName && !selectedOpts.orig) selectedOpts.orig = $(obj).children("img:first").length ? $(obj).children("img:first") :
                $(obj);
            if (title === "" && selectedOpts.orig && selectedOpts.titleFromAlt) title = selectedOpts.orig.attr("alt");
            href = selectedOpts.href || (obj.nodeName ? $(obj).attr("href") : obj.href) || null;
            if (/^(?:javascript)/i.test(href) || href == "#") href = null;
            if (selectedOpts.type) {
                type = selectedOpts.type;
                if (!href) href = selectedOpts.content
            } else if (selectedOpts.content) type = "html";
            else if (href)
                if (href.match(imgRegExp)) type = "image";
                else if (href.match(swfRegExp)) type = "swf";
            else if ($(obj).hasClass("iframe")) type = "iframe";
            else if (href.indexOf("#") ===
                0) type = "inline";
            else type = "ajax";
            if (!type) {
                _error();
                return
            }
            if (type == "inline") {
                obj = href.substr(href.indexOf("#"));
                type = $(obj).length > 0 ? "inline" : "ajax"
            }
            selectedOpts.type = type;
            selectedOpts.href = href;
            selectedOpts.title = title;
            if (selectedOpts.autoDimensions)
                if (selectedOpts.type == "html" || selectedOpts.type == "inline" || selectedOpts.type == "ajax") {
                    selectedOpts.width = "auto";
                    selectedOpts.height = "auto"
                } else selectedOpts.autoDimensions = false;
            if (selectedOpts.modal) {
                selectedOpts.overlayShow = true;
                selectedOpts.hideOnOverlayClick =
                    false;
                selectedOpts.hideOnContentClick = false;
                selectedOpts.enableEscapeButton = false;
                selectedOpts.showCloseButton = false
            }
            selectedOpts.padding = parseInt(selectedOpts.padding, 10);
            selectedOpts.margin = parseInt(selectedOpts.margin, 10);
            tmp.css("padding", selectedOpts.padding + selectedOpts.margin);
            $(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function() {
                $(this).replaceWith(content.children())
            });
            switch (type) {
                case "html":
                    tmp.html(selectedOpts.content);
                    _process_inline();
                    break;
                case "inline":
                    if ($(obj).parent().is("#fancybox-content") ===
                        true) {
                        busy = false;
                        return
                    }
                    $('<div class="fancybox-inline-tmp" />').hide().insertBefore($(obj)).bind("fancybox-cleanup", function() {
                        $(this).replaceWith(content.children())
                    }).bind("fancybox-cancel", function() {
                        $(this).replaceWith(tmp.children())
                    });
                    $(obj).appendTo(tmp);
                    _process_inline();
                    break;
                case "image":
                    busy = false;
                    $.fancybox.showActivity();
                    imgPreloader = new Image;
                    imgPreloader.onerror = function() {
                        _error()
                    };
                    imgPreloader.onload = function() {
                        busy = true;
                        imgPreloader.onerror = imgPreloader.onload = null;
                        _process_image()
                    };
                    imgPreloader.src = href;
                    break;
                case "swf":
                    selectedOpts.scrolling = "no";
                    str = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + selectedOpts.width + '" height="' + selectedOpts.height + '"><param name="movie" value="' + href + '"></param>';
                    emb = "";
                    $.each(selectedOpts.swf, function(name, val) {
                        str += '<param name="' + name + '" value="' + val + '"></param>';
                        emb += " " + name + '="' + val + '"'
                    });
                    str += '<embed src="' + href + '" type="application/x-shockwave-flash" width="' + selectedOpts.width + '" height="' + selectedOpts.height +
                        '"' + emb + "></embed></object>";
                    tmp.html(str);
                    _process_inline();
                    break;
                case "ajax":
                    busy = false;
                    $.fancybox.showActivity();
                    selectedOpts.ajax.win = selectedOpts.ajax.success;
                    ajaxLoader = $.ajax($.extend({}, selectedOpts.ajax, {
                        url: href,
                        data: selectedOpts.ajax.data || {},
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            if (XMLHttpRequest.status > 0) _error()
                        },
                        success: function(data, textStatus, XMLHttpRequest) {
                            var o = typeof XMLHttpRequest == "object" ? XMLHttpRequest : ajaxLoader;
                            if (o.status == 200) {
                                if (typeof selectedOpts.ajax.win ==
                                    "function") {
                                    ret = selectedOpts.ajax.win(href, data, textStatus, XMLHttpRequest);
                                    if (ret === false) {
                                        loading.hide();
                                        return
                                    } else if (typeof ret == "string" || typeof ret == "object") data = ret
                                }
                                tmp.html(data);
                                _process_inline()
                            }
                        }
                    }));
                    break;
                case "iframe":
                    _show();
                    break
            }
        },
        _process_inline = function() {
            var w = selectedOpts.width,
                h = selectedOpts.height;
            if (w.toString().indexOf("%") > -1) w = parseInt(($(window).width() - selectedOpts.margin * 2) * parseFloat(w) / 100, 10) + "px";
            else w = w == "auto" ? "auto" : w + "px";
            if (h.toString().indexOf("%") > -1) h = parseInt(($(window).height() -
                selectedOpts.margin * 2) * parseFloat(h) / 100, 10) + "px";
            else h = h == "auto" ? "auto" : h + "px";
            tmp.wrapInner('<div style="width:' + w + ";height:" + h + ";overflow: " + (selectedOpts.scrolling == "auto" ? "auto" : selectedOpts.scrolling == "yes" ? "scroll" : "hidden") + ';position:relative;"></div>');
            selectedOpts.width = tmp.width();
            selectedOpts.height = tmp.height();
            _show()
        },
        _process_image = function() {
            selectedOpts.width = imgPreloader.width;
            selectedOpts.height = imgPreloader.height;
            $("<img />").attr({
                "id": "fancybox-img",
                "src": imgPreloader.src,
                "alt": selectedOpts.title
            }).appendTo(tmp);
            _show()
        },
        _show = function() {
            var pos, equal;
            loading.hide();
            if (wrap.is(":visible") && false === currentOpts.onCleanup(currentArray, currentIndex, currentOpts)) {
                $.event.trigger("fancybox-cancel");
                busy = false;
                return
            }
            busy = true;
            $(content.add(overlay)).unbind();
            $(window).unbind("resize.fb scroll.fb");
            $(document).unbind("keydown.fb");
            if (wrap.is(":visible") && currentOpts.titlePosition !== "outside") wrap.css("height", wrap.height());
            currentArray = selectedArray;
            currentIndex = selectedIndex;
            currentOpts = selectedOpts;
            if (currentOpts.overlayShow) {
                overlay.css({
                    "background-color": currentOpts.overlayColor,
                    "opacity": currentOpts.overlayOpacity,
                    "cursor": currentOpts.hideOnOverlayClick ? "pointer" : "auto",
                    "height": $(document).height()
                });
                if (!overlay.is(":visible")) {
                    if (isIE6) $("select:not(#fancybox-tmp select)").filter(function() {
                        return this.style.visibility !== "hidden"
                    }).css({
                        "visibility": "hidden"
                    }).one("fancybox-cleanup", function() {
                        this.style.visibility = "inherit"
                    });
                    overlay.show()
                }
            } else overlay.hide();
            final_pos = _get_zoom_to();
            _process_title();
            if (wrap.is(":visible")) {
                $(close.add(nav_left).add(nav_right)).hide();
                pos = wrap.position(), start_pos = {
                    top: pos.top,
                    left: pos.left,
                    width: wrap.width(),
                    height: wrap.height()
                };
                equal = start_pos.width == final_pos.width && start_pos.height == final_pos.height;
                content.fadeTo(currentOpts.changeFade, .3, function() {
                    var finish_resizing = function() {
                        content.html(tmp.contents()).fadeTo(currentOpts.changeFade, 1, _finish)
                    };
                    $.event.trigger("fancybox-change");
                    content.empty().removeAttr("filter").css({
                        "border-width": currentOpts.padding,
                        "width": final_pos.width - currentOpts.padding * 2,
                        "height": selectedOpts.autoDimensions ? "auto" : final_pos.height - titleHeight - currentOpts.padding * 2
                    });
                    if (equal) finish_resizing();
                    else {
                        fx.prop = 0;
                        $(fx).animate({
                            prop: 1
                        }, {
                            duration: currentOpts.changeSpeed,
                            easing: currentOpts.easingChange,
                            step: _draw,
                            complete: finish_resizing
                        })
                    }
                });
                return
            }
            wrap.removeAttr("style");
            content.css("border-width", currentOpts.padding);
            if (currentOpts.transitionIn == "elastic") {
                start_pos = _get_zoom_from();
                content.html(tmp.contents());
                wrap.show();
                if (currentOpts.opacity) final_pos.opacity = 0;
                fx.prop = 0;
                $(fx).animate({
                    prop: 1
                }, {
                    duration: currentOpts.speedIn,
                    easing: currentOpts.easingIn,
                    step: _draw,
                    complete: _finish
                });
                return
            }
            if (currentOpts.titlePosition == "inside" && titleHeight > 0) title.show();
            content.css({
                "width": final_pos.width - currentOpts.padding * 2,
                "height": selectedOpts.autoDimensions ? "auto" : final_pos.height - titleHeight - currentOpts.padding * 2
            }).html(tmp.contents());
            wrap.css(final_pos).fadeIn(currentOpts.transitionIn == "none" ? 0 : currentOpts.speedIn, _finish)
        },
        _format_title = function(title) {
            if (title && title.length) {
                if (currentOpts.titlePosition == "float") return '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + title + '</td><td id="fancybox-title-float-right"></td></tr></table>';
                return '<div id="fancybox-title-' + currentOpts.titlePosition + '">' + title + "</div>"
            }
            return false
        },
        _process_title = function() {
            titleStr = currentOpts.title || "";
            titleHeight = 0;
            title.empty().removeAttr("style").removeClass();
            if (currentOpts.titleShow === false) {
                title.hide();
                return
            }
            titleStr = $.isFunction(currentOpts.titleFormat) ? currentOpts.titleFormat(titleStr, currentArray, currentIndex, currentOpts) : _format_title(titleStr);
            if (!titleStr || titleStr === "") {
                title.hide();
                return
            }
            title.addClass("fancybox-title-" + currentOpts.titlePosition).html(titleStr).appendTo("body").show();
            switch (currentOpts.titlePosition) {
                case "inside":
                    title.css({
                        "width": final_pos.width - currentOpts.padding * 2,
                        "marginLeft": currentOpts.padding,
                        "marginRight": currentOpts.padding
                    });
                    titleHeight = title.outerHeight(true);
                    title.appendTo(outer);
                    final_pos.height += titleHeight;
                    break;
                case "over":
                    title.css({
                        "marginLeft": currentOpts.padding,
                        "width": final_pos.width - currentOpts.padding * 2,
                        "bottom": currentOpts.padding
                    }).appendTo(outer);
                    break;
                case "float":
                    title.css("left", parseInt((title.width() - final_pos.width - 40) / 2, 10) * -1).appendTo(wrap);
                    break;
                default:
                    title.css({
                        "width": final_pos.width - currentOpts.padding * 2,
                        "paddingLeft": currentOpts.padding,
                        "paddingRight": currentOpts.padding
                    }).appendTo(wrap);
                    break
            }
            title.hide()
        },
        _set_navigation = function() {
            if (currentOpts.enableEscapeButton || currentOpts.enableKeyboardNav) $(document).bind("keydown.fb", function(e) {
                if (e.keyCode == 27 && currentOpts.enableEscapeButton) {
                    e.preventDefault();
                    $.fancybox.close()
                } else if ((e.keyCode == 37 || e.keyCode == 39) && currentOpts.enableKeyboardNav && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA" && e.target.tagName !== "SELECT") {
                    e.preventDefault();
                    $.fancybox[e.keyCode == 37 ? "prev" : "next"]()
                }
            });
            if (!currentOpts.showNavArrows) {
                nav_left.hide();
                nav_right.hide();
                return
            }
            if (currentOpts.cyclic && currentArray.length > 1 || currentIndex !== 0) nav_left.show();
            if (currentOpts.cyclic && currentArray.length > 1 || currentIndex != currentArray.length - 1) nav_right.show()
        },
        _finish = function() {
            if (!$.support.opacity) {
                content.get(0).style.removeAttribute("filter");
                wrap.get(0).style.removeAttribute("filter")
            }
            if (selectedOpts.autoDimensions) content.css("height", "auto");
            wrap.css("height", "auto");
            if (titleStr && titleStr.length) title.show();
            if (currentOpts.showCloseButton) close.show();
            _set_navigation();
            if (currentOpts.hideOnContentClick) content.bind("click", $.fancybox.close);
            if (currentOpts.hideOnOverlayClick) overlay.bind("click", $.fancybox.close);
            $(window).bind("resize.fb", $.fancybox.resize);
            if (currentOpts.centerOnScroll) $(window).bind("scroll.fb", $.fancybox.center);
            if (currentOpts.type == "iframe") $('<iframe id="fancybox-frame" name="fancybox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" ' + ($.browser.msie ? 'allowtransparency="true""' : "") + ' scrolling="' + selectedOpts.scrolling +
                '" src="' + currentOpts.href + '"></iframe>').appendTo(content);
            wrap.show();
            busy = false;
            $.fancybox.center();
            currentOpts.onComplete(currentArray, currentIndex, currentOpts);
            _preload_images()
        },
        _preload_images = function() {
            var href, objNext;
            if (currentArray.length - 1 > currentIndex) {
                href = currentArray[currentIndex + 1].href;
                if (typeof href !== "undefined" && href.match(imgRegExp)) {
                    objNext = new Image;
                    objNext.src = href
                }
            }
            if (currentIndex > 0) {
                href = currentArray[currentIndex - 1].href;
                if (typeof href !== "undefined" && href.match(imgRegExp)) {
                    objNext =
                        new Image;
                    objNext.src = href
                }
            }
        },
        _draw = function(pos) {
            var dim = {
                width: parseInt(start_pos.width + (final_pos.width - start_pos.width) * pos, 10),
                height: parseInt(start_pos.height + (final_pos.height - start_pos.height) * pos, 10),
                top: parseInt(start_pos.top + (final_pos.top - start_pos.top) * pos, 10),
                left: parseInt(start_pos.left + (final_pos.left - start_pos.left) * pos, 10)
            };
            if (typeof final_pos.opacity !== "undefined") dim.opacity = pos < .5 ? .5 : pos;
            wrap.css(dim);
            content.css({
                "width": dim.width - currentOpts.padding * 2,
                "height": dim.height - titleHeight *
                    pos - currentOpts.padding * 2
            })
        },
        _get_viewport = function() {
            return [$(window).width() - currentOpts.margin * 2, $(window).height() - currentOpts.margin * 2, $(document).scrollLeft() + currentOpts.margin, $(document).scrollTop() + currentOpts.margin]
        },
        _get_zoom_to = function() {
            var view = _get_viewport(),
                to = {},
                resize = currentOpts.autoScale,
                double_padding = currentOpts.padding * 2,
                ratio;
            if (currentOpts.width.toString().indexOf("%") > -1) to.width = parseInt(view[0] * parseFloat(currentOpts.width) / 100, 10);
            else to.width = currentOpts.width + double_padding;
            if (currentOpts.height.toString().indexOf("%") > -1) to.height = parseInt(view[1] * parseFloat(currentOpts.height) / 100, 10);
            else to.height = currentOpts.height + double_padding;
            if (resize && (to.width > view[0] || to.height > view[1]))
                if (selectedOpts.type == "image" || selectedOpts.type == "swf") {
                    ratio = currentOpts.width / currentOpts.height;
                    if (to.width > view[0]) {
                        to.width = view[0];
                        to.height = parseInt((to.width - double_padding) / ratio + double_padding, 10)
                    }
                    if (to.height > view[1]) {
                        to.height = view[1];
                        to.width = parseInt((to.height - double_padding) *
                            ratio + double_padding, 10)
                    }
                } else {
                    to.width = Math.min(to.width, view[0]);
                    to.height = Math.min(to.height, view[1])
                }
            to.top = parseInt(Math.max(view[3] - 20, view[3] + (view[1] - to.height - 40) * .5), 10);
            to.left = parseInt(Math.max(view[2] - 20, view[2] + (view[0] - to.width - 40) * .5), 10);
            return to
        },
        _get_obj_pos = function(obj) {
            var pos = obj.offset();
            pos.top += parseInt(obj.css("paddingTop"), 10) || 0;
            pos.left += parseInt(obj.css("paddingLeft"), 10) || 0;
            pos.top += parseInt(obj.css("border-top-width"), 10) || 0;
            pos.left += parseInt(obj.css("border-left-width"),
                10) || 0;
            pos.width = obj.width();
            pos.height = obj.height();
            return pos
        },
        _get_zoom_from = function() {
            var orig = selectedOpts.orig ? $(selectedOpts.orig) : false,
                from = {},
                pos, view;
            if (orig && orig.length) {
                pos = _get_obj_pos(orig);
                from = {
                    width: pos.width + currentOpts.padding * 2,
                    height: pos.height + currentOpts.padding * 2,
                    top: pos.top - currentOpts.padding - 20,
                    left: pos.left - currentOpts.padding - 20
                }
            } else {
                view = _get_viewport();
                from = {
                    width: currentOpts.padding * 2,
                    height: currentOpts.padding * 2,
                    top: parseInt(view[3] + view[1] * .5, 10),
                    left: parseInt(view[2] +
                        view[0] * .5, 10)
                }
            }
            return from
        },
        _animate_loading = function() {
            if (!loading.is(":visible")) {
                clearInterval(loadingTimer);
                return
            }
            $("div", loading).css("top", loadingFrame * -40 + "px");
            loadingFrame = (loadingFrame + 1) % 12
        };
    $.fn.fancybox = function(options) {
        if (!$(this).length) return this;
        $(this).data("fancybox", $.extend({}, options, $.metadata ? $(this).metadata() : {})).unbind("click.fb").bind("click.fb", function(e) {
            e.preventDefault();
            if (busy) return;
            busy = true;
            $(this).blur();
            selectedArray = [];
            selectedIndex = 0;
            var rel = $(this).attr("rel") ||
                "";
            if (!rel || rel == "" || rel === "nofollow") selectedArray.push(this);
            else {
                selectedArray = $("a[rel=" + rel + "], area[rel=" + rel + "]");
                selectedIndex = selectedArray.index(this)
            }
            _start();
            return
        });
        return this
    };
    $.fancybox = function(obj) {
        var opts;
        if (busy) return;
        busy = true;
        opts = typeof arguments[1] !== "undefined" ? arguments[1] : {};
        selectedArray = [];
        selectedIndex = parseInt(opts.index, 10) || 0;
        if ($.isArray(obj)) {
            for (var i = 0, j = obj.length; i < j; i++)
                if (typeof obj[i] == "object") $(obj[i]).data("fancybox", $.extend({}, opts, obj[i]));
                else obj[i] =
                    $({}).data("fancybox", $.extend({
                        content: obj[i]
                    }, opts));
            selectedArray = jQuery.merge(selectedArray, obj)
        } else {
            if (typeof obj == "object") $(obj).data("fancybox", $.extend({}, opts, obj));
            else obj = $({}).data("fancybox", $.extend({
                content: obj
            }, opts));
            selectedArray.push(obj)
        }
        if (selectedIndex > selectedArray.length || selectedIndex < 0) selectedIndex = 0;
        _start()
    };
    $.fancybox.showActivity = function() {
        clearInterval(loadingTimer);
        loading.show();
        loadingTimer = setInterval(_animate_loading, 66)
    };
    $.fancybox.hideActivity = function() {
        loading.hide()
    };
    $.fancybox.next = function() {
        return $.fancybox.pos(currentIndex + 1)
    };
    $.fancybox.prev = function() {
        return $.fancybox.pos(currentIndex - 1)
    };
    $.fancybox.pos = function(pos) {
        if (busy) return;
        pos = parseInt(pos);
        selectedArray = currentArray;
        if (pos > -1 && pos < currentArray.length) {
            selectedIndex = pos;
            _start()
        } else if (currentOpts.cyclic && currentArray.length > 1) {
            selectedIndex = pos >= currentArray.length ? 0 : currentArray.length - 1;
            _start()
        }
        return
    };
    $.fancybox.cancel = function() {
        if (busy) return;
        busy = true;
        $.event.trigger("fancybox-cancel");
        _abort();
        selectedOpts.onCancel(selectedArray, selectedIndex, selectedOpts);
        busy = false
    };
    $.fancybox.close = function() {
        if (busy || wrap.is(":hidden")) return;
        busy = true;
        if (currentOpts && false === currentOpts.onCleanup(currentArray, currentIndex, currentOpts)) {
            busy = false;
            return
        }
        _abort();
        $(close.add(nav_left).add(nav_right)).hide();
        $(content.add(overlay)).unbind();
        $(window).unbind("resize.fb scroll.fb");
        $(document).unbind("keydown.fb");
        content.find("iframe").attr("src", isIE6 && /^https/i.test(window.location.href || "") ?
            "javascript:void(false)" : "about:blank");
        if (currentOpts.titlePosition !== "inside") title.empty();
        wrap.stop();

        function _cleanup() {
            overlay.fadeOut("fast");
            title.empty().hide();
            wrap.hide();
            $.event.trigger("fancybox-cleanup");
            content.empty();
            currentOpts.onClosed(currentArray, currentIndex, currentOpts);
            currentArray = selectedOpts = [];
            currentIndex = selectedIndex = 0;
            currentOpts = selectedOpts = {};
            busy = false
        }
        if (currentOpts.transitionOut == "elastic") {
            start_pos = _get_zoom_from();
            var pos = wrap.position();
            final_pos = {
                top: pos.top,
                left: pos.left,
                width: wrap.width(),
                height: wrap.height()
            };
            if (currentOpts.opacity) final_pos.opacity = 1;
            title.empty().hide();
            fx.prop = 1;
            $(fx).animate({
                prop: 0
            }, {
                duration: currentOpts.speedOut,
                easing: currentOpts.easingOut,
                step: _draw,
                complete: _cleanup
            })
        } else wrap.fadeOut(currentOpts.transitionOut == "none" ? 0 : currentOpts.speedOut, _cleanup)
    };
    $.fancybox.resize = function() {
        if (overlay.is(":visible")) overlay.css("height", $(document).height());
        $.fancybox.center(true)
    };
    $.fancybox.center = function() {
        var view, align;
        if (busy) return;
        align = arguments[0] === true ? 1 : 0;
        view = _get_viewport();
        if (!align && (wrap.width() > view[0] || wrap.height() > view[1])) return;
        wrap.stop().animate({
            "top": parseInt(Math.max(view[3] - 20, view[3] + (view[1] - content.height() - 40) * .5 - currentOpts.padding)),
            "left": parseInt(Math.max(view[2] - 20, view[2] + (view[0] - content.width() - 40) * .5 - currentOpts.padding))
        }, typeof arguments[0] == "number" ? arguments[0] : 200)
    };
    $.fancybox.init = function() {
        if ($("#fancybox-wrap").length) return;
        $("body").append(tmp = $('<div id="fancybox-tmp"></div>'),
            loading = $('<div id="fancybox-loading"><div></div></div>'), overlay = $('<div id="fancybox-overlay"></div>'), wrap = $('<div id="fancybox-wrap"></div>'));
        outer = $('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(wrap);
        outer.append(content = $('<div id="fancybox-content"></div>'), close = $('<a id="fancybox-close"></a>'), title = $('<div id="fancybox-title"></div>'), nav_left = $('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), nav_right = $('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));
        close.click($.fancybox.close);
        loading.click($.fancybox.cancel);
        nav_left.click(function(e) {
            e.preventDefault();
            $.fancybox.prev()
        });
        nav_right.click(function(e) {
            e.preventDefault();
            $.fancybox.next()
        });
        if ($.fn.mousewheel) wrap.bind("mousewheel.fb", function(e, delta) {
            if (busy) e.preventDefault();
            else if ($(e.target).get(0).clientHeight == 0 || $(e.target).get(0).scrollHeight === $(e.target).get(0).clientHeight) {
                e.preventDefault();
                $.fancybox[delta > 0 ? "prev" : "next"]()
            }
        });
        if (!$.support.opacity) wrap.addClass("fancybox-ie");
        if (isIE6) {
            loading.addClass("fancybox-ie6");
            wrap.addClass("fancybox-ie6");
            $('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href ||
                "") ? "javascript:void(false)" : "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(outer)
        }
    };
    $.fn.fancybox.defaults = {
        padding: 10,
        margin: 40,
        opacity: false,
        modal: false,
        cyclic: false,
        scrolling: "auto",
        width: 560,
        height: 340,
        autoScale: true,
        autoDimensions: true,
        centerOnScroll: false,
        ajax: {},
        swf: {
            wmode: "transparent"
        },
        hideOnOverlayClick: true,
        hideOnContentClick: false,
        overlayShow: true,
        overlayOpacity: .7,
        overlayColor: "#777",
        titleShow: true,
        titlePosition: "float",
        titleFormat: null,
        titleFromAlt: false,
        transitionIn: "fade",
        transitionOut: "fade",
        speedIn: 300,
        speedOut: 300,
        changeSpeed: 300,
        changeFade: "fast",
        easingIn: "swing",
        easingOut: "swing",
        showCloseButton: true,
        showNavArrows: true,
        enableEscapeButton: true,
        enableKeyboardNav: true,
        onStart: function() {},
        onCancel: function() {},
        onComplete: function() {},
        onCleanup: function() {},
        onClosed: function() {},
        onError: function() {}
    };
    $(document).ready(function() {
        $.fancybox.init()
    })
})(jQuery);
(function(d) {
    function g(a) {
        var b = a || window.event,
            i = [].slice.call(arguments, 1),
            c = 0,
            h = 0,
            e = 0;
        a = d.event.fix(b);
        a.type = "mousewheel";
        if (a.wheelDelta) c = a.wheelDelta / 120;
        if (a.detail) c = -a.detail / 3;
        e = c;
        if (b.axis !== undefined && b.axis === b.HORIZONTAL_AXIS) {
            e = 0;
            h = -1 * c
        }
        if (b.wheelDeltaY !== undefined) e = b.wheelDeltaY / 120;
        if (b.wheelDeltaX !== undefined) h = -1 * b.wheelDeltaX / 120;
        i.unshift(a, c, h, e);
        return d.event.handle.apply(this, i)
    }
    var f = ["DOMMouseScroll", "mousewheel"];
    d.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var a =
                        f.length; a;) this.addEventListener(f[--a], g, false);
            else this.onmousewheel = g
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var a = f.length; a;) this.removeEventListener(f[--a], g, false);
            else this.onmousewheel = null
        }
    };
    d.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
})(jQuery);
(function($) {
    $.extend($.fn, {
        validate: function(options) {
            if (!this.length) {
                options && options.debug && window.console && console.warn("nothing selected, can't validate, returning nothing");
                return
            }
            var validator = $.data(this[0], "validator");
            if (validator) return validator;
            this.attr("novalidate", "novalidate");
            validator = new $.validator(options, this[0]);
            $.data(this[0], "validator", validator);
            if (validator.settings.onsubmit) {
                var inputsAndButtons = this.find("input, button");
                inputsAndButtons.filter(".cancel").click(function() {
                    validator.cancelSubmit =
                        true
                });
                if (validator.settings.submitHandler) inputsAndButtons.filter(":submit").click(function() {
                    validator.submitButton = this
                });
                this.submit(function(event) {
                    if (validator.settings.debug) event.preventDefault();

                    function handle() {
                        if (validator.settings.submitHandler) {
                            if (validator.submitButton) var hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
                            validator.settings.submitHandler.call(validator, validator.currentForm);
                            if (validator.submitButton) hidden.remove();
                            return false
                        }
                        return true
                    }
                    if (validator.cancelSubmit) {
                        validator.cancelSubmit = false;
                        return handle()
                    }
                    if (validator.form()) {
                        if (validator.pendingRequest) {
                            validator.formSubmitted = true;
                            return false
                        }
                        return handle()
                    } else {
                        validator.focusInvalid();
                        return false
                    }
                })
            }
            return validator
        },
        valid: function() {
            if ($(this[0]).is("form")) return this.validate().form();
            else {
                var valid = true;
                var validator = $(this[0].form).validate();
                this.each(function() {
                    valid &= validator.element(this)
                });
                return valid
            }
        },
        removeAttrs: function(attributes) {
            var result = {},
                $element = this;
            $.each(attributes.split(/\s/), function(index, value) {
                result[value] = $element.attr(value);
                $element.removeAttr(value)
            });
            return result
        },
        rules: function(command, argument) {
            var element = this[0];
            if (command) {
                var settings = $.data(element.form, "validator").settings;
                var staticRules = settings.rules;
                var existingRules = $.validator.staticRules(element);
                switch (command) {
                    case "add":
                        $.extend(existingRules, $.validator.normalizeRule(argument));
                        staticRules[element.name] =
                            existingRules;
                        if (argument.messages) settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
                        break;
                    case "remove":
                        if (!argument) {
                            delete staticRules[element.name];
                            return existingRules
                        }
                        var filtered = {};
                        $.each(argument.split(/\s/), function(index, method) {
                            filtered[method] = existingRules[method];
                            delete existingRules[method]
                        });
                        return filtered
                }
            }
            var data = $.validator.normalizeRules($.extend({}, $.validator.metadataRules(element), $.validator.classRules(element), $.validator.attributeRules(element),
                $.validator.staticRules(element)), element);
            if (data.required) {
                var param = data.required;
                delete data.required;
                data = $.extend({
                    required: param
                }, data)
            }
            return data
        }
    });
    $.extend($.expr[":"], {
        blank: function(a) {
            return !$.trim("" + a.value)
        },
        filled: function(a) {
            return !!$.trim("" + a.value)
        },
        unchecked: function(a) {
            return !a.checked
        }
    });
    $.validator = function(options, form) {
        this.settings = $.extend(true, {}, $.validator.defaults, options);
        this.currentForm = form;
        this.init()
    };
    $.validator.format = function(source, params) {
        if (arguments.length ==
            1) return function() {
            var args = $.makeArray(arguments);
            args.unshift(source);
            return $.validator.format.apply(this, args)
        };
        if (arguments.length > 2 && params.constructor != Array) params = $.makeArray(arguments).slice(1);
        if (params.constructor != Array) params = [params];
        $.each(params, function(i, n) {
            source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n)
        });
        return source
    };
    $.extend($.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: true,
            errorContainer: $([]),
            errorLabelContainer: $([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function(element, event) {
                this.lastActive = element;
                if (this.settings.focusCleanup && !this.blockFocusCleanup) {
                    this.settings.unhighlight && this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
                    this.addWrapper(this.errorsFor(element)).hide()
                }
            },
            onfocusout: function(element, event) {
                if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) this.element(element)
            },
            onkeyup: function(element, event) {
                if (element.name in this.submitted || element == this.lastElement) this.element(element)
            },
            onclick: function(element, event) {
                if (element.name in this.submitted) this.element(element);
                else if (element.parentNode.name in this.submitted) this.element(element.parentNode)
            },
            highlight: function(element, errorClass, validClass) {
                if (element.type === "radio") this.findByName(element.name).addClass(errorClass).removeClass(validClass);
                else $(element).addClass(errorClass).removeClass(validClass)
            },
            unhighlight: function(element, errorClass, validClass) {
                if (element.type === "radio") this.findByName(element.name).removeClass(errorClass).addClass(validClass);
                else $(element).removeClass(errorClass).addClass(validClass)
            }
        },
        setDefaults: function(settings) {
            $.extend($.validator.defaults, settings)
        },
        messages: {
            required: "Este campo es requerido.",
            remote: "Please fix this field.",
            email: "Introduzca un email v\u00e1lido.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            accept: "Please enter a value with a valid extension.",
            maxlength: $.validator.format("Please enter no more than {0} characters."),
            minlength: $.validator.format("Please enter at least {0} characters."),
            rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
            range: $.validator.format("Please enter a value between {0} and {1}."),
            max: $.validator.format("Please enter a value less than or equal to {0}."),
            min: $.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                this.labelContainer = $(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
                this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var groups = this.groups = {};
                $.each(this.settings.groups, function(key, value) {
                    $.each(value.split(/\s/), function(index, name) {
                        groups[name] = key
                    })
                });
                var rules = this.settings.rules;
                $.each(rules, function(key, value) {
                    rules[key] = $.validator.normalizeRule(value)
                });

                function delegate(event) {
                    var validator = $.data(this[0].form, "validator"),
                        eventType = "on" + event.type.replace(/^validate/, "");
                    validator.settings[eventType] && validator.settings[eventType].call(validator, this[0], event)
                }
                $(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, " +
                    "[type='number'], [type='search'] ,[type='tel'], [type='url'], " + "[type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], " + "[type='range'], [type='color'] ", "focusin focusout keyup", delegate).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", delegate);
                if (this.settings.invalidHandler) $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                this.checkForm();
                $.extend(this.submitted,
                    this.errorMap);
                this.invalid = $.extend({}, this.errorMap);
                if (!this.valid()) $(this.currentForm).triggerHandler("invalid-form", [this]);
                this.showErrors();
                return this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var i = 0, elements = this.currentElements = this.elements(); elements[i]; i++) this.check(elements[i]);
                return this.valid()
            },
            element: function(element) {
                element = this.validationTargetFor(this.clean(element));
                this.lastElement = element;
                this.prepareElement(element);
                this.currentElements = $(element);
                var result =
                    this.check(element);
                if (result) delete this.invalid[element.name];
                else this.invalid[element.name] = true;
                if (!this.numberOfInvalids()) this.toHide = this.toHide.add(this.containers);
                this.showErrors();
                return result
            },
            showErrors: function(errors) {
                if (errors) {
                    $.extend(this.errorMap, errors);
                    this.errorList = [];
                    for (var name in errors) this.errorList.push({
                        message: errors[name],
                        element: this.findByName(name)[0]
                    });
                    this.successList = $.grep(this.successList, function(element) {
                        return !(element.name in errors)
                    })
                }
                this.settings.showErrors ?
                    this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                if ($.fn.resetForm) $(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(obj) {
                var count = 0;
                for (var i in obj) count++;
                return count
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return this.size() ==
                    0
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {}
            },
            findLastActive: function() {
                var lastActive = this.lastActive;
                return lastActive && $.grep(this.errorList, function(n) {
                    return n.element.name == lastActive.name
                }).length == 1 && lastActive
            },
            elements: function() {
                var validator = this,
                    rulesCache = {};
                return $(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    !this.name &&
                        validator.settings.debug && window.console && console.error("%o has no name assigned", this);
                    if (this.name in rulesCache || !validator.objectLength($(this).rules())) return false;
                    rulesCache[this.name] = true;
                    return true
                })
            },
            clean: function(selector) {
                return $(selector)[0]
            },
            errors: function() {
                return $(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = $([]);
                this.toHide = $([]);
                this.currentElements = $([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(element) {
                this.reset();
                this.toHide = this.errorsFor(element)
            },
            check: function(element) {
                element = this.validationTargetFor(this.clean(element));
                var rules = $(element).rules();
                var dependencyMismatch = false;
                for (var method in rules) {
                    var rule = {
                        method: method,
                        parameters: rules[method]
                    };
                    try {
                        var result = $.validator.methods[method].call(this, element.value.replace(/\r/g, ""), element, rule.parameters);
                        if (result == "dependency-mismatch") {
                            dependencyMismatch =
                                true;
                            continue
                        }
                        dependencyMismatch = false;
                        if (result == "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(element));
                            return
                        }
                        if (!result) {
                            this.formatAndAdd(element, rule);
                            return false
                        }
                    } catch (e) {
                        this.settings.debug && window.console && console.log("exception occured when checking element " + element.id + ", check the '" + rule.method + "' method", e);
                        throw e;
                    }
                }
                if (dependencyMismatch) return;
                if (this.objectLength(rules)) this.successList.push(element);
                return true
            },
            customMetaMessage: function(element, method) {
                if (!$.metadata) return;
                var meta = this.settings.meta ? $(element).metadata()[this.settings.meta] : $(element).metadata();
                return meta && meta.messages && meta.messages[method]
            },
            customMessage: function(name, method) {
                var m = this.settings.messages[name];
                return m && (m.constructor == String ? m : m[method])
            },
            findDefined: function() {
                for (var i = 0; i < arguments.length; i++)
                    if (arguments[i] !== undefined) return arguments[i];
                return undefined
            },
            defaultMessage: function(element, method) {
                return this.findDefined(this.customMessage(element.name, method), this.customMetaMessage(element,
                    method), !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[method], "<strong>Warning: No message defined for " + element.name + "</strong>")
            },
            formatAndAdd: function(element, rule) {
                var message = this.defaultMessage(element, rule.method),
                    theregex = /\$?\{(\d+)\}/g;
                if (typeof message == "function") message = message.call(this, rule.parameters, element);
                else if (theregex.test(message)) message = jQuery.format(message.replace(theregex, "{$1}"), rule.parameters);
                this.errorList.push({
                    message: message,
                    element: element
                });
                this.errorMap[element.name] = message;
                this.submitted[element.name] = message
            },
            addWrapper: function(toToggle) {
                if (this.settings.wrapper) toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
                return toToggle
            },
            defaultShowErrors: function() {
                for (var i = 0; this.errorList[i]; i++) {
                    var error = this.errorList[i];
                    this.settings.highlight && this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
                    this.showLabel(error.element, error.message)
                }
                if (this.errorList.length) this.toShow =
                    this.toShow.add(this.containers);
                if (this.settings.success)
                    for (var i = 0; this.successList[i]; i++) this.showLabel(this.successList[i]);
                if (this.settings.unhighlight)
                    for (var i = 0, elements = this.validElements(); elements[i]; i++) this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return $(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(element, message) {
                var label = this.errorsFor(element);
                if (label.length) {
                    label.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    label.attr("generated") && label.html(message)
                } else {
                    label = $("<" + this.settings.errorElement + "/>").attr({
                        "for": this.idOrName(element),
                        generated: true
                    }).addClass(this.settings.errorClass).html(message || "");
                    if (this.settings.wrapper) label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                    if (!this.labelContainer.append(label).length) this.settings.errorPlacement ?
                        this.settings.errorPlacement(label, $(element)) : label.insertAfter(element)
                }
                if (!message && this.settings.success) {
                    label.text("");
                    typeof this.settings.success == "string" ? label.addClass(this.settings.success) : this.settings.success(label)
                }
                this.toShow = this.toShow.add(label)
            },
            errorsFor: function(element) {
                var name = this.idOrName(element);
                return this.errors().filter(function() {
                    return $(this).attr("for") == name
                })
            },
            idOrName: function(element) {
                return this.groups[element.name] || (this.checkable(element) ? element.name :
                    element.id || element.name)
            },
            validationTargetFor: function(element) {
                if (this.checkable(element)) element = this.findByName(element.name).not(this.settings.ignore)[0];
                return element
            },
            checkable: function(element) {
                return /radio|checkbox/i.test(element.type)
            },
            findByName: function(name) {
                var form = this.currentForm;
                return $(document.getElementsByName(name)).map(function(index, element) {
                    return element.form == form && element.name == name && element || null
                })
            },
            getLength: function(value, element) {
                switch (element.nodeName.toLowerCase()) {
                    case "select":
                        return $("option:selected",
                            element).length;
                    case "input":
                        if (this.checkable(element)) return this.findByName(element.name).filter(":checked").length
                }
                return value.length
            },
            depend: function(param, element) {
                return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true
            },
            dependTypes: {
                "boolean": function(param, element) {
                    return param
                },
                "string": function(param, element) {
                    return !!$(param, element.form).length
                },
                "function": function(param, element) {
                    return param(element)
                }
            },
            optional: function(element) {
                return !$.validator.methods.required.call(this,
                    $.trim(element.value), element) && "dependency-mismatch"
            },
            startRequest: function(element) {
                if (!this.pending[element.name]) {
                    this.pendingRequest++;
                    this.pending[element.name] = true
                }
            },
            stopRequest: function(element, valid) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) this.pendingRequest = 0;
                delete this.pending[element.name];
                if (valid && this.pendingRequest == 0 && this.formSubmitted && this.form()) {
                    $(this.currentForm).submit();
                    this.formSubmitted = false
                } else if (!valid && this.pendingRequest == 0 && this.formSubmitted) {
                    $(this.currentForm).triggerHandler("invalid-form", [this]);
                    this.formSubmitted = false
                }
            },
            previousValue: function(element) {
                return $.data(element, "previousValue") || $.data(element, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(element, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            dateDE: {
                dateDE: true
            },
            number: {
                number: true
            },
            numberDE: {
                numberDE: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function(className, rules) {
            className.constructor ==
                String ? this.classRuleSettings[className] = rules : $.extend(this.classRuleSettings, className)
        },
        classRules: function(element) {
            var rules = {};
            var classes = $(element).attr("class");
            classes && $.each(classes.split(" "), function() {
                if (this in $.validator.classRuleSettings) $.extend(rules, $.validator.classRuleSettings[this])
            });
            return rules
        },
        attributeRules: function(element) {
            var rules = {};
            var $element = $(element);
            for (var method in $.validator.methods) {
                var value;
                if (method === "required" && typeof $.fn.prop === "function") value =
                    $element.prop(method);
                else value = $element.attr(method);
                if (value) rules[method] = value;
                else if ($element[0].getAttribute("type") === method) rules[method] = true
            }
            if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) delete rules.maxlength;
            return rules
        },
        metadataRules: function(element) {
            if (!$.metadata) return {};
            var meta = $.data(element.form, "validator").settings.meta;
            return meta ? $(element).metadata()[meta] : $(element).metadata()
        },
        staticRules: function(element) {
            var rules = {};
            var validator = $.data(element.form,
                "validator");
            if (validator.settings.rules) rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
            return rules
        },
        normalizeRules: function(rules, element) {
            $.each(rules, function(prop, val) {
                if (val === false) {
                    delete rules[prop];
                    return
                }
                if (val.param || val.depends) {
                    var keepRule = true;
                    switch (typeof val.depends) {
                        case "string":
                            keepRule = !!$(val.depends, element.form).length;
                            break;
                        case "function":
                            keepRule = val.depends.call(element, element);
                            break
                    }
                    if (keepRule) rules[prop] = val.param !== undefined ? val.param :
                        true;
                    else delete rules[prop]
                }
            });
            $.each(rules, function(rule, parameter) {
                rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter
            });
            $.each(["minlength", "maxlength", "min", "max"], function() {
                if (rules[this]) rules[this] = Number(rules[this])
            });
            $.each(["rangelength", "range"], function() {
                if (rules[this]) rules[this] = [Number(rules[this][0]), Number(rules[this][1])]
            });
            if ($.validator.autoCreateRanges) {
                if (rules.min && rules.max) {
                    rules.range = [rules.min, rules.max];
                    delete rules.min;
                    delete rules.max
                }
                if (rules.minlength &&
                    rules.maxlength) {
                    rules.rangelength = [rules.minlength, rules.maxlength];
                    delete rules.minlength;
                    delete rules.maxlength
                }
            }
            if (rules.messages) delete rules.messages;
            return rules
        },
        normalizeRule: function(data) {
            if (typeof data == "string") {
                var transformed = {};
                $.each(data.split(/\s/), function() {
                    transformed[this] = true
                });
                data = transformed
            }
            return data
        },
        addMethod: function(name, method, message) {
            $.validator.methods[name] = method;
            $.validator.messages[name] = message != undefined ? message : $.validator.messages[name];
            if (method.length <
                3) $.validator.addClassRules(name, $.validator.normalizeRule(name))
        },
        methods: {
            required: function(value, element, param) {
                if (!this.depend(param, element)) return "dependency-mismatch";
                switch (element.nodeName.toLowerCase()) {
                    case "select":
                        var val = $(element).val();
                        return val && val.length > 0;
                    case "input":
                        if (this.checkable(element)) return this.getLength(value, element) > 0;
                    default:
                        return $.trim(value).length > 0
                }
            },
            remote: function(value, element, param) {
                if (this.optional(element)) return "dependency-mismatch";
                var previous = this.previousValue(element);
                if (!this.settings.messages[element.name]) this.settings.messages[element.name] = {};
                previous.originalMessage = this.settings.messages[element.name].remote;
                this.settings.messages[element.name].remote = previous.message;
                param = typeof param == "string" && {
                    url: param
                } || param;
                if (this.pending[element.name]) return "pending";
                if (previous.old === value) return previous.valid;
                previous.old = value;
                var validator = this;
                this.startRequest(element);
                var data = {};
                data[element.name] = value;
                $.ajax($.extend(true, {
                    url: param,
                    mode: "abort",
                    port: "validate" +
                        element.name,
                    dataType: "json",
                    data: data,
                    success: function(response) {
                        validator.settings.messages[element.name].remote = previous.originalMessage;
                        var valid = response === true;
                        if (valid) {
                            var submitted = validator.formSubmitted;
                            validator.prepareElement(element);
                            validator.formSubmitted = submitted;
                            validator.successList.push(element);
                            validator.showErrors()
                        } else {
                            var errors = {};
                            var message = response || validator.defaultMessage(element, "remote");
                            errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
                            validator.showErrors(errors)
                        }
                        previous.valid = valid;
                        validator.stopRequest(element, valid)
                    }
                }, param));
                return "pending"
            },
            minlength: function(value, element, param) {
                return this.optional(element) || this.getLength($.trim(value), element) >= param
            },
            maxlength: function(value, element, param) {
                return this.optional(element) || this.getLength($.trim(value), element) <= param
            },
            rangelength: function(value, element, param) {
                var length = this.getLength($.trim(value), element);
                return this.optional(element) || length >= param[0] && length <= param[1]
            },
            min: function(value, element, param) {
                return this.optional(element) || value >= param
            },
            max: function(value, element, param) {
                return this.optional(element) || value <= param
            },
            range: function(value, element, param) {
                return this.optional(element) || value >= param[0] && value <= param[1]
            },
            email: function(value, element) {
                return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value)
            },
            url: function(value, element) {
                return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value)
            },
            date: function(value, element) {
                return this.optional(element) || !/Invalid|NaN/.test(new Date(value))
            },
            dateISO: function(value, element) {
                return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value)
            },
            number: function(value, element) {
                return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value)
            },
            digits: function(value, element) {
                return this.optional(element) || /^\d+$/.test(value)
            },
            creditcard: function(value, element) {
                if (this.optional(element)) return "dependency-mismatch";
                if (/[^0-9 -]+/.test(value)) return false;
                var nCheck = 0,
                    nDigit = 0,
                    bEven = false;
                value = value.replace(/\D/g, "");
                for (var n = value.length - 1; n >= 0; n--) {
                    var cDigit = value.charAt(n);
                    var nDigit = parseInt(cDigit, 10);
                    if (bEven)
                        if ((nDigit *= 2) > 9) nDigit -= 9;
                    nCheck += nDigit;
                    bEven = !bEven
                }
                return nCheck % 10 == 0
            },
            accept: function(value, element, param) {
                param = typeof param == "string" ? param.replace(/,/g, "|") : "png|jpe?g|gif";
                return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"))
            },
            equalTo: function(value, element, param) {
                var target = $(param).unbind(".validate-equalTo").bind("blur.validate-equalTo",
                    function() {
                        $(element).valid()
                    });
                return value == target.val()
            }
        }
    });
    $.format = $.validator.format
})(jQuery);
(function($) {
    var pendingRequests = {};
    if ($.ajaxPrefilter) $.ajaxPrefilter(function(settings, _, xhr) {
        var port = settings.port;
        if (settings.mode == "abort") {
            if (pendingRequests[port]) pendingRequests[port].abort();
            pendingRequests[port] = xhr
        }
    });
    else {
        var ajax = $.ajax;
        $.ajax = function(settings) {
            var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
                port = ("port" in settings ? settings : $.ajaxSettings).port;
            if (mode == "abort") {
                if (pendingRequests[port]) pendingRequests[port].abort();
                return pendingRequests[port] = ajax.apply(this,
                    arguments)
            }
            return ajax.apply(this, arguments)
        }
    }
})(jQuery);
(function($) {
    if (!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener) $.each({
        focus: "focusin",
        blur: "focusout"
    }, function(original, fix) {
        $.event.special[fix] = {
            setup: function() {
                this.addEventListener(original, handler, true)
            },
            teardown: function() {
                this.removeEventListener(original, handler, true)
            },
            handler: function(e) {
                arguments[0] = $.event.fix(e);
                arguments[0].type = fix;
                return $.event.handle.apply(this, arguments)
            }
        };

        function handler(e) {
            e = $.event.fix(e);
            e.type = fix;
            return $.event.handle.call(this,
                e)
        }
    });
    $.extend($.fn, {
        validateDelegate: function(delegate, type, handler) {
            return this.bind(type, function(event) {
                var target = $(event.target);
                if (target.is(delegate)) return handler.apply(target, arguments)
            })
        }
    })
})(jQuery);
$(document).ready(function() {
    $("#wrapper").easytabs({
        animate: true,
        updateHash: false,
        transitionIn: "slideDown",
        transitionOut: "slideUp",
        animationSpeed: 800,
        tabActiveClass: "active",
        tabs: " .js-appbar > ul > li",
        transitionInEasing: "easeOutExpo",
        transitionOutEasing: "easeInOutExpo"
    });
    $(".portfolio__list li").hover(function() {
        $(this).children("img").animate({
            opacity: .55
        }, "fast")
    }, function() {
        $(this).children("img").animate({
            opacity: 1
        }, "slow")
    });
    $(".portfolio__list a.folio").fancybox({
        "overlayShow": true,
        "opacity": true,
        "transitionIn": "elastic",
        "transitionOut": "none",
        "overlayOpacity": .8
    });
    var $portfolioClone = $(".portfolio__list").clone();
    $(".filter a").click(function(e) {
        $(".filter li").removeClass("current");
        var $filterClass = $(this).parent().attr("class");
        if ($filterClass == "all") var $filteredPortfolio = $portfolioClone.find("li");
        else var $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
        $(".portfolio__list").quicksand($filteredPortfolio, {
            duration: 800,
            easing: "easeInOutQuad"
        }, function() {
            $(".portfolio__list li").hover(function() {
                $(this).children("img").animate({
                        opacity: .55
                    },
                    "fast")
            }, function() {
                $(this).children("img").animate({
                    opacity: 1
                }, "slow")
            });
            $(".portfolio__list a.folio").fancybox({
                "overlayShow": true,
                "opacity": true,
                "transitionIn": "elastic",
                "transitionOut": "none",
                "overlayOpacity": .8
            })
        });
        $(this).parent().addClass("current");
        e.preventDefault()
    });
    $(".contact__form").validate();
});
