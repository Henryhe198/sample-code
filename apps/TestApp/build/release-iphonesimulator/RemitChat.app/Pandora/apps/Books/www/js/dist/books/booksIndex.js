
/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto = function() {
		function L(t) {
			return null == t ? String(t) : j[S.call(t)] || "object"
		}
		function Z(t) {
			return "function" == L(t)
		}
		function _(t) {
			return null != t && t == t.window
		}
		function $(t) {
			return null != t && t.nodeType == t.DOCUMENT_NODE
		}
		function D(t) {
			return "object" == L(t)
		}
		function M(t) {
			return D(t) && !_(t) && Object.getPrototypeOf(t) == Object.prototype
		}
		function R(t) {
			return "number" == typeof t.length
		}
		function k(t) {
			return s.call(t, function(t) {
				return null != t
			})
		}
		function z(t) {
			return t.length > 0 ? n.fn.concat.apply([], t) : t
		}
		function F(t) {
			return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
		}
		function q(t) {
			return t in f ? f[t] : f[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
		}
		function H(t, e) {
			return "number" != typeof e || c[F(t)] ? e : e + "px"
		}
		function I(t) {
			var e, n;
			return u[t] || (e = a.createElement(t), a.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), u[t] = n), u[t]
		}
		function V(t) {
			return "children" in t ? o.call(t.children) : n.map(t.childNodes, function(t) {
				return 1 == t.nodeType ? t : void 0
			})
		}
		function B(n, i, r) {
			for (e in i) r && (M(i[e]) || A(i[e])) ? (M(i[e]) && !M(n[e]) && (n[e] = {}), A(i[e]) && !A(n[e]) && (n[e] = []), B(n[e], i[e], r)) : i[e] !== t && (n[e] = i[e])
		}
		function U(t, e) {
			return null == e ? n(t) : n(t).filter(e)
		}
		function J(t, e, n, i) {
			return Z(e) ? e.call(t, n, i) : e
		}
		function X(t, e, n) {
			null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
		}
		function W(e, n) {
			var i = e.className || "",
				r = i && i.baseVal !== t;
			return n === t ? r ? i.baseVal : i : void(r ? i.baseVal = n : e.className = n)
		}
		function Y(t) {
			try {
				return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? n.parseJSON(t) : t) : t
			} catch (e) {
				return t
			}
		}
		function G(t, e) {
			e(t);
			for (var n = 0, i = t.childNodes.length; i > n; n++) G(t.childNodes[n], e)
		}
		var t, e, n, i, C, N, r = [],
			o = r.slice,
			s = r.filter,
			a = window.document,
			u = {},
			f = {},
			c = {
				"column-count": 1,
				columns: 1,
				"font-weight": 1,
				"line-height": 1,
				opacity: 1,
				"z-index": 1,
				zoom: 1
			},
			l = /^\s*<(\w+|!)[^>]*>/,
			h = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			p = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			d = /^(?:body|html)$/i,
			m = /([A-Z])/g,
			g = ["val", "css", "html", "text", "data", "width", "height", "offset"],
			v = ["after", "prepend", "before", "append"],
			y = a.createElement("table"),
			x = a.createElement("tr"),
			b = {
				tr: a.createElement("tbody"),
				tbody: y,
				thead: y,
				tfoot: y,
				td: x,
				th: x,
				"*": a.createElement("div")
			},
			w = /complete|loaded|interactive/,
			E = /^[\w-]*$/,
			j = {},
			S = j.toString,
			T = {},
			O = a.createElement("div"),
			P = {
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
			A = Array.isArray ||
		function(t) {
			return t instanceof Array
		};
		return T.matches = function(t, e) {
			if (!e || !t || 1 !== t.nodeType) return !1;
			var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
			if (n) return n.call(t, e);
			var i, r = t.parentNode,
				o = !r;
			return o && (r = O).appendChild(t), i = ~T.qsa(r, e).indexOf(t), o && O.removeChild(t), i
		}, C = function(t) {
			return t.replace(/-+(.)?/g, function(t, e) {
				return e ? e.toUpperCase() : ""
			})
		}, N = function(t) {
			return s.call(t, function(e, n) {
				return t.indexOf(e) == n
			})
		}, T.fragment = function(e, i, r) {
			var s, u, f;
			return h.test(e) && (s = n(a.createElement(RegExp.$1))), s || (e.replace && (e = e.replace(p, "<$1></$2>")), i === t && (i = l.test(e) && RegExp.$1), i in b || (i = "*"), f = b[i], f.innerHTML = "" + e, s = n.each(o.call(f.childNodes), function() {
				f.removeChild(this)
			})), M(r) && (u = n(s), n.each(r, function(t, e) {
				g.indexOf(t) > -1 ? u[t](e) : u.attr(t, e)
			})), s
		}, T.Z = function(t, e) {
			return t = t || [], t.__proto__ = n.fn, t.selector = e || "", t
		}, T.isZ = function(t) {
			return t instanceof T.Z
		}, T.init = function(e, i) {
			var r;
			if (!e) return T.Z();
			if ("string" == typeof e) if (e = e.trim(), "<" == e[0] && l.test(e)) r = T.fragment(e, RegExp.$1, i), e = null;
			else {
				if (i !== t) return n(i).find(e);
				r = T.qsa(a, e)
			} else {
				if (Z(e)) return n(a).ready(e);
				if (T.isZ(e)) return e;
				if (A(e)) r = k(e);
				else if (D(e)) r = [e], e = null;
				else if (l.test(e)) r = T.fragment(e.trim(), RegExp.$1, i), e = null;
				else {
					if (i !== t) return n(i).find(e);
					r = T.qsa(a, e)
				}
			}
			return T.Z(r, e)
		}, n = function(t, e) {
			return T.init(t, e)
		}, n.extend = function(t) {
			var e, n = o.call(arguments, 1);
			return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
				B(t, n, e)
			}), t
		}, T.qsa = function(t, e) {
			var n, i = "#" == e[0],
				r = !i && "." == e[0],
				s = i || r ? e.slice(1) : e,
				a = E.test(s);
			return $(t) && a && i ? (n = t.getElementById(s)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : o.call(a && !i ? r ? t.getElementsByClassName(s) : t.getElementsByTagName(e) : t.querySelectorAll(e))
		}, n.contains = a.documentElement.contains ?
		function(t, e) {
			return t !== e && t.contains(e)
		} : function(t, e) {
			for (; e && (e = e.parentNode);) if (e === t) return !0;
			return !1
		}, n.type = L, n.isFunction = Z, n.isWindow = _, n.isArray = A, n.isPlainObject = M, n.isEmptyObject = function(t) {
			var e;
			for (e in t) return !1;
			return !0
		}, n.inArray = function(t, e, n) {
			return r.indexOf.call(e, t, n)
		}, n.camelCase = C, n.trim = function(t) {
			return null == t ? "" : String.prototype.trim.call(t)
		}, n.uuid = 0, n.support = {}, n.expr = {}, n.map = function(t, e) {
			var n, r, o, i = [];
			if (R(t)) for (r = 0; r < t.length; r++) n = e(t[r], r), null != n && i.push(n);
			else for (o in t) n = e(t[o], o), null != n && i.push(n);
			return z(i)
		}, n.each = function(t, e) {
			var n, i;
			if (R(t)) {
				for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t
			} else for (i in t) if (e.call(t[i], i, t[i]) === !1) return t;
			return t
		}, n.grep = function(t, e) {
			return s.call(t, e)
		}, window.JSON && (n.parseJSON = JSON.parse), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
			j["[object " + e + "]"] = e.toLowerCase()
		}), n.fn = {
			forEach: r.forEach,
			reduce: r.reduce,
			push: r.push,
			sort: r.sort,
			indexOf: r.indexOf,
			concat: r.concat,
			map: function(t) {
				return n(n.map(this, function(e, n) {
					return t.call(e, n, e)
				}))
			},
			slice: function() {
				return n(o.apply(this, arguments))
			},
			ready: function(t) {
				return w.test(a.readyState) && a.body ? t(n) : a.addEventListener("DOMContentLoaded", function() {
					t(n)
				}, !1), this
			},
			get: function(e) {
				return e === t ? o.call(this) : this[e >= 0 ? e : e + this.length]
			},
			toArray: function() {
				return this.get()
			},
			size: function() {
				return this.length
			},
			remove: function() {
				return this.each(function() {
					null != this.parentNode && this.parentNode.removeChild(this)
				})
			},
			each: function(t) {
				return r.every.call(this, function(e, n) {
					return t.call(e, n, e) !== !1
				}), this
			},
			filter: function(t) {
				return Z(t) ? this.not(this.not(t)) : n(s.call(this, function(e) {
					return T.matches(e, t)
				}))
			},
			add: function(t, e) {
				return n(N(this.concat(n(t, e))))
			},
			is: function(t) {
				return this.length > 0 && T.matches(this[0], t)
			},
			not: function(e) {
				var i = [];
				if (Z(e) && e.call !== t) this.each(function(t) {
					e.call(this, t) || i.push(this)
				});
				else {
					var r = "string" == typeof e ? this.filter(e) : R(e) && Z(e.item) ? o.call(e) : n(e);
					this.forEach(function(t) {
						r.indexOf(t) < 0 && i.push(t)
					})
				}
				return n(i)
			},
			has: function(t) {
				return this.filter(function() {
					return D(t) ? n.contains(this, t) : n(this).find(t).size()
				})
			},
			eq: function(t) {
				return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
			},
			first: function() {
				var t = this[0];
				return t && !D(t) ? t : n(t)
			},
			last: function() {
				var t = this[this.length - 1];
				return t && !D(t) ? t : n(t)
			},
			find: function(t) {
				var e, i = this;
				return e = t ? "object" == typeof t ? n(t).filter(function() {
					var t = this;
					return r.some.call(i, function(e) {
						return n.contains(e, t)
					})
				}) : 1 == this.length ? n(T.qsa(this[0], t)) : this.map(function() {
					return T.qsa(this, t)
				}) : n()
			},
			closest: function(t, e) {
				var i = this[0],
					r = !1;
				for ("object" == typeof t && (r = n(t)); i && !(r ? r.indexOf(i) >= 0 : T.matches(i, t));) i = i !== e && !$(i) && i.parentNode;
				return n(i)
			},
			parents: function(t) {
				for (var e = [], i = this; i.length > 0;) i = n.map(i, function(t) {
					return (t = t.parentNode) && !$(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
				});
				return U(e, t)
			},
			parent: function(t) {
				return U(N(this.pluck("parentNode")), t)
			},
			children: function(t) {
				return U(this.map(function() {
					return V(this)
				}), t)
			},
			contents: function() {
				return this.map(function() {
					return o.call(this.childNodes)
				})
			},
			siblings: function(t) {
				return U(this.map(function(t, e) {
					return s.call(V(e.parentNode), function(t) {
						return t !== e
					})
				}), t)
			},
			empty: function() {
				return this.each(function() {
					this.innerHTML = ""
				})
			},
			pluck: function(t) {
				return n.map(this, function(e) {
					return e[t]
				})
			},
			show: function() {
				return this.each(function() {
					"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = I(this.nodeName))
				})
			},
			replaceWith: function(t) {
				return this.before(t).remove()
			},
			wrap: function(t) {
				var e = Z(t);
				if (this[0] && !e) var i = n(t).get(0),
					r = i.parentNode || this.length > 1;
				return this.each(function(o) {
					n(this).wrapAll(e ? t.call(this, o) : r ? i.cloneNode(!0) : i)
				})
			},
			wrapAll: function(t) {
				if (this[0]) {
					n(this[0]).before(t = n(t));
					for (var e;
					(e = t.children()).length;) t = e.first();
					n(t).append(this)
				}
				return this
			},
			wrapInner: function(t) {
				var e = Z(t);
				return this.each(function(i) {
					var r = n(this),
						o = r.contents(),
						s = e ? t.call(this, i) : t;
					o.length ? o.wrapAll(s) : r.append(s)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					n(this).replaceWith(n(this).children())
				}), this
			},
			clone: function() {
				return this.map(function() {
					return this.cloneNode(!0)
				})
			},
			hide: function() {
				return this.css("display", "none")
			},
			toggle: function(e) {
				return this.each(function() {
					var i = n(this);
					(e === t ? "none" == i.css("display") : e) ? i.show() : i.hide()
				})
			},
			prev: function(t) {
				return n(this.pluck("previousElementSibling")).filter(t || "*")
			},
			next: function(t) {
				return n(this.pluck("nextElementSibling")).filter(t || "*")
			},
			html: function(t) {
				return 0 in arguments ? this.each(function(e) {
					var i = this.innerHTML;
					n(this).empty().append(J(this, t, e, i))
				}) : 0 in this ? this[0].innerHTML : null
			},
			text: function(t) {
				return 0 in arguments ? this.each(function(e) {
					var n = J(this, t, e, this.textContent);
					this.textContent = null == n ? "" : "" + n
				}) : 0 in this ? this[0].textContent : null
			},
			attr: function(n, i) {
				var r;
				return "string" != typeof n || 1 in arguments ? this.each(function(t) {
					if (1 === this.nodeType) if (D(n)) for (e in n) X(this, e, n[e]);
					else X(this, n, J(this, i, t, this.getAttribute(n)))
				}) : this.length && 1 === this[0].nodeType ? !(r = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : r : t
			},
			removeAttr: function(t) {
				return this.each(function() {
					1 === this.nodeType && t.split(" ").forEach(function(t) {
						X(this, t)
					}, this)
				})
			},
			prop: function(t, e) {
				return t = P[t] || t, 1 in arguments ? this.each(function(n) {
					this[t] = J(this, e, n, this[t])
				}) : this[0] && this[0][t]
			},
			data: function(e, n) {
				var i = "data-" + e.replace(m, "-$1").toLowerCase(),
					r = 1 in arguments ? this.attr(i, n) : this.attr(i);
				return null !== r ? Y(r) : t
			},
			val: function(t) {
				return 0 in arguments ? this.each(function(e) {
					this.value = J(this, t, e, this.value)
				}) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function() {
					return this.selected
				}).pluck("value") : this[0].value)
			},
			offset: function(t) {
				if (t) return this.each(function(e) {
					var i = n(this),
						r = J(this, t, e, i.offset()),
						o = i.offsetParent().offset(),
						s = {
							top: r.top - o.top,
							left: r.left - o.left
						};
					"static" == i.css("position") && (s.position = "relative"), i.css(s)
				});
				if (!this.length) return null;
				var e = this[0].getBoundingClientRect();
				return {
					left: e.left + window.pageXOffset,
					top: e.top + window.pageYOffset,
					width: Math.round(e.width),
					height: Math.round(e.height)
				}
			},
			css: function(t, i) {
				if (arguments.length < 2) {
					var r, o = this[0];
					if (!o) return;
					if (r = getComputedStyle(o, ""), "string" == typeof t) return o.style[C(t)] || r.getPropertyValue(t);
					if (A(t)) {
						var s = {};
						return n.each(t, function(t, e) {
							s[e] = o.style[C(e)] || r.getPropertyValue(e)
						}), s
					}
				}
				var a = "";
				if ("string" == L(t)) i || 0 === i ? a = F(t) + ":" + H(t, i) : this.each(function() {
					this.style.removeProperty(F(t))
				});
				else for (e in t) t[e] || 0 === t[e] ? a += F(e) + ":" + H(e, t[e]) + ";" : this.each(function() {
					this.style.removeProperty(F(e))
				});
				return this.each(function() {
					this.style.cssText += ";" + a
				})
			},
			index: function(t) {
				return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0])
			},
			hasClass: function(t) {
				return t ? r.some.call(this, function(t) {
					return this.test(W(t))
				}, q(t)) : !1
			},
			addClass: function(t) {
				return t ? this.each(function(e) {
					if ("className" in this) {
						i = [];
						var r = W(this),
							o = J(this, t, e, r);
						o.split(/\s+/g).forEach(function(t) {
							n(this).hasClass(t) || i.push(t)
						}, this), i.length && W(this, r + (r ? " " : "") + i.join(" "))
					}
				}) : this
			},
			removeClass: function(e) {
				return this.each(function(n) {
					if ("className" in this) {
						if (e === t) return W(this, "");
						i = W(this), J(this, e, n, i).split(/\s+/g).forEach(function(t) {
							i = i.replace(q(t), " ")
						}), W(this, i.trim())
					}
				})
			},
			toggleClass: function(e, i) {
				return e ? this.each(function(r) {
					var o = n(this),
						s = J(this, e, r, W(this));
					s.split(/\s+/g).forEach(function(e) {
						(i === t ? !o.hasClass(e) : i) ? o.addClass(e) : o.removeClass(e)
					})
				}) : this
			},
			scrollTop: function(e) {
				if (this.length) {
					var n = "scrollTop" in this[0];
					return e === t ? n ? this[0].scrollTop : this[0].pageYOffset : this.each(n ?
					function() {
						this.scrollTop = e
					} : function() {
						this.scrollTo(this.scrollX, e)
					})
				}
			},
			scrollLeft: function(e) {
				if (this.length) {
					var n = "scrollLeft" in this[0];
					return e === t ? n ? this[0].scrollLeft : this[0].pageXOffset : this.each(n ?
					function() {
						this.scrollLeft = e
					} : function() {
						this.scrollTo(e, this.scrollY)
					})
				}
			},
			position: function() {
				if (this.length) {
					var t = this[0],
						e = this.offsetParent(),
						i = this.offset(),
						r = d.test(e[0].nodeName) ? {
							top: 0,
							left: 0
						} : e.offset();
					return i.top -= parseFloat(n(t).css("margin-top")) || 0, i.left -= parseFloat(n(t).css("margin-left")) || 0, r.top += parseFloat(n(e[0]).css("border-top-width")) || 0, r.left += parseFloat(n(e[0]).css("border-left-width")) || 0, {
						top: i.top - r.top,
						left: i.left - r.left
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var t = this.offsetParent || a.body; t && !d.test(t.nodeName) && "static" == n(t).css("position");) t = t.offsetParent;
					return t
				})
			}
		}, n.fn.detach = n.fn.remove, ["width", "height"].forEach(function(e) {
			var i = e.replace(/./, function(t) {
				return t[0].toUpperCase()
			});
			n.fn[e] = function(r) {
				var o, s = this[0];
				return r === t ? _(s) ? s["inner" + i] : $(s) ? s.documentElement["scroll" + i] : (o = this.offset()) && o[e] : this.each(function(t) {
					s = n(this), s.css(e, J(this, r, t, s[e]()))
				})
			}
		}), v.forEach(function(t, e) {
			var i = e % 2;
			n.fn[t] = function() {
				var t, o, r = n.map(arguments, function(e) {
					return t = L(e), "object" == t || "array" == t || null == e ? e : T.fragment(e)
				}),
					s = this.length > 1;
				return r.length < 1 ? this : this.each(function(t, u) {
					o = i ? u : u.parentNode, u = 0 == e ? u.nextSibling : 1 == e ? u.firstChild : 2 == e ? u : null;
					var f = n.contains(a.documentElement, o);
					r.forEach(function(t) {
						if (s) t = t.cloneNode(!0);
						else if (!o) return n(t).remove();
						o.insertBefore(t, u), f && G(t, function(t) {
							null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
						})
					})
				})
			}, n.fn[i ? t + "To" : "insert" + (e ? "Before" : "After")] = function(e) {
				return n(e)[t](this), this
			}
		}), T.Z.prototype = n.fn, T.uniq = N, T.deserializeValue = Y, n.zepto = T, n
	}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function(t) {
	function l(t) {
		return t._zid || (t._zid = e++)
	}
	function h(t, e, n, i) {
		if (e = p(e), e.ns) var r = d(e.ns);
		return (s[l(t)] || []).filter(function(t) {
			return !(!t || e.e && t.e != e.e || e.ns && !r.test(t.ns) || n && l(t.fn) !== l(n) || i && t.sel != i)
		})
	}
	function p(t) {
		var e = ("" + t).split(".");
		return {
			e: e[0],
			ns: e.slice(1).sort().join(" ")
		}
	}
	function d(t) {
		return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
	}
	function m(t, e) {
		return t.del && !u && t.e in f || !! e
	}
	function g(t) {
		return c[t] || u && f[t] || t
	}
	function v(e, i, r, o, a, u, f) {
		var h = l(e),
			d = s[h] || (s[h] = []);
		i.split(/\s/).forEach(function(i) {
			if ("ready" == i) return t(document).ready(r);
			var s = p(i);
			s.fn = r, s.sel = a, s.e in c && (r = function(e) {
				var n = e.relatedTarget;
				return !n || n !== this && !t.contains(this, n) ? s.fn.apply(this, arguments) : void 0
			}), s.del = u;
			var l = u || r;
			s.proxy = function(t) {
				if (t = j(t), !t.isImmediatePropagationStopped()) {
					t.data = o;
					var i = l.apply(e, t._args == n ? [t] : [t].concat(t._args));
					return i === !1 && (t.preventDefault(), t.stopPropagation()), i
				}
			}, s.i = d.length, d.push(s), "addEventListener" in e && e.addEventListener(g(s.e), s.proxy, m(s, f))
		})
	}
	function y(t, e, n, i, r) {
		var o = l(t);
		(e || "").split(/\s/).forEach(function(e) {
			h(t, e, n, i).forEach(function(e) {
				delete s[o][e.i], "removeEventListener" in t && t.removeEventListener(g(e.e), e.proxy, m(e, r))
			})
		})
	}
	function j(e, i) {
		return (i || !e.isDefaultPrevented) && (i || (i = e), t.each(E, function(t, n) {
			var r = i[t];
			e[t] = function() {
				return this[n] = x, r && r.apply(i, arguments)
			}, e[n] = b
		}), (i.defaultPrevented !== n ? i.defaultPrevented : "returnValue" in i ? i.returnValue === !1 : i.getPreventDefault && i.getPreventDefault()) && (e.isDefaultPrevented = x)), e
	}
	function S(t) {
		var e, i = {
			originalEvent: t
		};
		for (e in t) w.test(e) || t[e] === n || (i[e] = t[e]);
		return j(i, t)
	}
	var n, e = 1,
		i = Array.prototype.slice,
		r = t.isFunction,
		o = function(t) {
			return "string" == typeof t
		},
		s = {},
		a = {},
		u = "onfocusin" in window,
		f = {
			focus: "focusin",
			blur: "focusout"
		},
		c = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		};
	a.click = a.mousedown = a.mouseup = a.mousemove = "MouseEvents", t.event = {
		add: v,
		remove: y
	}, t.proxy = function(e, n) {
		var s = 2 in arguments && i.call(arguments, 2);
		if (r(e)) {
			var a = function() {
					return e.apply(n, s ? s.concat(i.call(arguments)) : arguments)
				};
			return a._zid = l(e), a
		}
		if (o(n)) return s ? (s.unshift(e[n], e), t.proxy.apply(null, s)) : t.proxy(e[n], e);
		throw new TypeError("expected function")
	}, t.fn.bind = function(t, e, n) {
		return this.on(t, e, n)
	}, t.fn.unbind = function(t, e) {
		return this.off(t, e)
	}, t.fn.one = function(t, e, n, i) {
		return this.on(t, e, n, i, 1)
	};
	var x = function() {
			return !0
		},
		b = function() {
			return !1
		},
		w = /^([A-Z]|returnValue$|layer[XY]$)/,
		E = {
			preventDefault: "isDefaultPrevented",
			stopImmediatePropagation: "isImmediatePropagationStopped",
			stopPropagation: "isPropagationStopped"
		};
	t.fn.delegate = function(t, e, n) {
		return this.on(e, t, n)
	}, t.fn.undelegate = function(t, e, n) {
		return this.off(e, t, n)
	}, t.fn.live = function(e, n) {
		return t(document.body).delegate(this.selector, e, n), this
	}, t.fn.die = function(e, n) {
		return t(document.body).undelegate(this.selector, e, n), this
	}, t.fn.on = function(e, s, a, u, f) {
		var c, l, h = this;
		return e && !o(e) ? (t.each(e, function(t, e) {
			h.on(t, s, a, e, f)
		}), h) : (o(s) || r(u) || u === !1 || (u = a, a = s, s = n), (r(a) || a === !1) && (u = a, a = n), u === !1 && (u = b), h.each(function(n, r) {
			f && (c = function(t) {
				return y(r, t.type, u), u.apply(this, arguments)
			}), s && (l = function(e) {
				var n, o = t(e.target).closest(s, r).get(0);
				return o && o !== r ? (n = t.extend(S(e), {
					currentTarget: o,
					liveFired: r
				}), (c || u).apply(o, [n].concat(i.call(arguments, 1)))) : void 0
			}), v(r, e, u, a, s, l || c)
		}))
	}, t.fn.off = function(e, i, s) {
		var a = this;
		return e && !o(e) ? (t.each(e, function(t, e) {
			a.off(t, i, e)
		}), a) : (o(i) || r(s) || s === !1 || (s = i, i = n), s === !1 && (s = b), a.each(function() {
			y(this, e, s, i)
		}))
	}, t.fn.trigger = function(e, n) {
		return e = o(e) || t.isPlainObject(e) ? t.Event(e) : j(e), e._args = n, this.each(function() {
			e.type in f && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
		})
	}, t.fn.triggerHandler = function(e, n) {
		var i, r;
		return this.each(function(s, a) {
			i = S(o(e) ? t.Event(e) : e), i._args = n, i.target = a, t.each(h(a, e.type || e), function(t, e) {
				return r = e.proxy(i), i.isImmediatePropagationStopped() ? !1 : void 0
			})
		}), r
	}, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
		t.fn[e] = function(t) {
			return 0 in arguments ? this.bind(e, t) : this.trigger(e)
		}
	}), t.Event = function(t, e) {
		o(t) || (e = t, t = e.type);
		var n = document.createEvent(a[t] || "Events"),
			i = !0;
		if (e) for (var r in e)"bubbles" == r ? i = !! e[r] : n[r] = e[r];
		return n.initEvent(t, i, !0), j(n)
	}
}(Zepto), function(t) {
	function h(e, n, i) {
		var r = t.Event(n);
		return t(e).trigger(r, i), !r.isDefaultPrevented()
	}
	function p(t, e, i, r) {
		return t.global ? h(e || n, i, r) : void 0
	}
	function d(e) {
		e.global && 0 === t.active++ && p(e, null, "ajaxStart")
	}
	function m(e) {
		e.global && !--t.active && p(e, null, "ajaxStop")
	}
	function g(t, e) {
		var n = e.context;
		return e.beforeSend.call(n, t, e) === !1 || p(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void p(e, n, "ajaxSend", [t, e])
	}
	function v(t, e, n, i) {
		var r = n.context,
			o = "success";
		n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), p(n, r, "ajaxSuccess", [e, n, t]), x(o, e, n)
	}
	function y(t, e, n, i, r) {
		var o = i.context;
		i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), p(i, o, "ajaxError", [n, i, t || e]), x(e, n, i)
	}
	function x(t, e, n) {
		var i = n.context;
		n.complete.call(i, e, t), p(n, i, "ajaxComplete", [e, n]), m(n)
	}
	function b() {}
	function w(t) {
		return t && (t = t.split(";", 2)[0]), t && (t == f ? "html" : t == u ? "json" : s.test(t) ? "script" : a.test(t) && "xml") || "text"
	}
	function E(t, e) {
		return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
	}
	function j(e) {
		e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = E(e.url, e.data), e.data = void 0)
	}
	function S(e, n, i, r) {
		return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
			url: e,
			data: n,
			success: i,
			dataType: r
		}
	}
	function C(e, n, i, r) {
		var o, s = t.isArray(n),
			a = t.isPlainObject(n);
		t.each(n, function(n, u) {
			o = t.type(u), r && (n = i ? r : r + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !r && s ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? C(e, u, i, n) : e.add(n, u)
		})
	}
	var i, r, e = 0,
		n = window.document,
		o = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		s = /^(?:text|application)\/javascript/i,
		a = /^(?:text|application)\/xml/i,
		u = "application/json",
		f = "text/html",
		c = /^\s*$/,
		l = n.createElement("a");
	l.href = window.location.href, t.active = 0, t.ajaxJSONP = function(i, r) {
		if (!("type" in i)) return t.ajax(i);
		var f, h, o = i.jsonpCallback,
			s = (t.isFunction(o) ? o() : o) || "jsonp" + ++e,
			a = n.createElement("script"),
			u = window[s],
			c = function(e) {
				t(a).triggerHandler("error", e || "abort")
			},
			l = {
				abort: c
			};
		return r && r.promise(l), t(a).on("load error", function(e, n) {
			clearTimeout(h), t(a).off().remove(), "error" != e.type && f ? v(f[0], l, i, r) : y(null, n || "error", l, i, r), window[s] = u, f && t.isFunction(u) && u(f[0]), u = f = void 0
		}), g(l, i) === !1 ? (c("abort"), l) : (window[s] = function() {
			f = arguments
		}, a.src = i.url.replace(/\?(.+)=\?/, "?$1=" + s), n.head.appendChild(a), i.timeout > 0 && (h = setTimeout(function() {
			c("timeout")
		}, i.timeout)), l)
	}, t.ajaxSettings = {
		type: "GET",
		beforeSend: b,
		success: b,
		error: b,
		complete: b,
		context: null,
		global: !0,
		xhr: function() {
			return new window.XMLHttpRequest
		},
		accepts: {
			script: "text/javascript, application/javascript, application/x-javascript",
			json: u,
			xml: "application/xml, text/xml",
			html: f,
			text: "text/plain"
		},
		crossDomain: !1,
		timeout: 0,
		processData: !0,
		cache: !0
	}, t.ajax = function(e) {
		var a, o = t.extend({}, e || {}),
			s = t.Deferred && t.Deferred();
		for (i in t.ajaxSettings) void 0 === o[i] && (o[i] = t.ajaxSettings[i]);
		d(o), o.crossDomain || (a = n.createElement("a"), a.href = o.url, a.href = a.href, o.crossDomain = l.protocol + "//" + l.host != a.protocol + "//" + a.host), o.url || (o.url = window.location.toString()), j(o);
		var u = o.dataType,
			f = /\?.+=\?/.test(o.url);
		if (f && (u = "jsonp"), o.cache !== !1 && (e && e.cache === !0 || "script" != u && "jsonp" != u) || (o.url = E(o.url, "_=" + Date.now())), "jsonp" == u) return f || (o.url = E(o.url, o.jsonp ? o.jsonp + "=?" : o.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(o, s);
		var C, h = o.accepts[u],
			p = {},
			m = function(t, e) {
				p[t.toLowerCase()] = [t, e]
			},
			x = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1 : window.location.protocol,
			S = o.xhr(),
			T = S.setRequestHeader;
		if (s && s.promise(S), o.crossDomain || m("X-Requested-With", "XMLHttpRequest"), m("Accept", h || "*/*"), (h = o.mimeType || h) && (h.indexOf(",") > -1 && (h = h.split(",", 2)[0]), S.overrideMimeType && S.overrideMimeType(h)), (o.contentType || o.contentType !== !1 && o.data && "GET" != o.type.toUpperCase()) && m("Content-Type", o.contentType || "application/x-www-form-urlencoded"), o.headers) for (r in o.headers) m(r, o.headers[r]);
		if (S.setRequestHeader = m, S.onreadystatechange = function() {
			if (4 == S.readyState) {
				S.onreadystatechange = b, clearTimeout(C);
				var e, n = !1;
				if (S.status >= 200 && S.status < 300 || 304 == S.status || 0 == S.status && "file:" == x) {
					u = u || w(o.mimeType || S.getResponseHeader("content-type")), e = S.responseText;
					try {
						"script" == u ? (1, eval)(e) : "xml" == u ? e = S.responseXML : "json" == u && (e = c.test(e) ? null : t.parseJSON(e))
					} catch (i) {
						n = i
					}
					n ? y(n, "parsererror", S, o, s) : v(e, S, o, s)
				} else y(S.statusText || null, S.status ? "error" : "abort", S, o, s)
			}
		}, g(S, o) === !1) return S.abort(), y(null, "abort", S, o, s), S;
		if (o.xhrFields) for (r in o.xhrFields) S[r] = o.xhrFields[r];
		var N = "async" in o ? o.async : !0;
		S.open(o.type, o.url, N, o.username, o.password);
		for (r in p) T.apply(S, p[r]);
		return o.timeout > 0 && (C = setTimeout(function() {
			S.onreadystatechange = b, S.abort(), y(null, "timeout", S, o, s)
		}, o.timeout)), S.send(o.data ? o.data : null), S
	}, t.get = function() {
		return t.ajax(S.apply(null, arguments))
	}, t.post = function() {
		var e = S.apply(null, arguments);
		return e.type = "POST", t.ajax(e)
	}, t.getJSON = function() {
		var e = S.apply(null, arguments);
		return e.dataType = "json", t.ajax(e)
	}, t.fn.load = function(e, n, i) {
		if (!this.length) return this;
		var a, r = this,
			s = e.split(/\s/),
			u = S(e, n, i),
			f = u.success;
		return s.length > 1 && (u.url = s[0], a = s[1]), u.success = function(e) {
			r.html(a ? t("<div>").html(e.replace(o, "")).find(a) : e), f && f.apply(r, arguments)
		}, t.ajax(u), this
	};
	var T = encodeURIComponent;
	t.param = function(e, n) {
		var i = [];
		return i.add = function(e, n) {
			t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(T(e) + "=" + T(n))
		}, C(i, e, n), i.join("&").replace(/%20/g, "+")
	}
}(Zepto), function(t) {
	t.fn.serializeArray = function() {
		var e, n, i = [],
			r = function(t) {
				return t.forEach ? t.forEach(r) : void i.push({
					name: e,
					value: t
				})
			};
		return this[0] && t.each(this[0].elements, function(i, o) {
			n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(t(o).val())
		}), i
	}, t.fn.serialize = function() {
		var t = [];
		return this.serializeArray().forEach(function(e) {
			t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
		}), t.join("&")
	}, t.fn.submit = function(e) {
		if (0 in arguments) this.bind("submit", e);
		else if (this.length) {
			var n = t.Event("submit");
			this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
		}
		return this
	}
}(Zepto), function(t) {
	"__proto__" in {} || t.extend(t.zepto, {
		Z: function(e, n) {
			return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e
		},
		isZ: function(e) {
			return "array" === t.type(e) && "__Z" in e
		}
	});
	try {
		getComputedStyle(void 0)
	} catch (e) {
		var n = getComputedStyle;
		window.getComputedStyle = function(t) {
			try {
				return n(t)
			} catch (e) {
				return null
			}
		}
	}
}(Zepto);
define("zepto", function(){});

// 获取地址栏参数 参数为参数名
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
};
define("getQueryString", function(){});

function onLine(onFn,offFn){
	var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    }
};

EventUtil.addHandler(window, "online", onFn);
EventUtil.addHandler(window, "offline", offFn);
}
;
define("onLine", function(){});

/*!
 * Vue.js v1.0.26
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define('vue',e):t.Vue=e()}(this,function(){function t(e,n,r){if(i(e,n))return void(e[n]=r);if(e._isVue)return void t(e._data,n,r);var s=e.__ob__;if(!s)return void(e[n]=r);if(s.convert(n,r),s.dep.notify(),s.vms)for(var o=s.vms.length;o--;){var a=s.vms[o];a._proxy(n),a._digest()}return r}function e(t,e){if(i(t,e)){delete t[e];var n=t.__ob__;if(!n)return void(t._isVue&&(delete t._data[e],t._digest()));if(n.dep.notify(),n.vms)for(var r=n.vms.length;r--;){var s=n.vms[r];s._unproxy(e),s._digest()}}}function i(t,e){return Oi.call(t,e)}function n(t){return Ti.test(t)}function r(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function s(t){return null==t?"":t.toString()}function o(t){if("string"!=typeof t)return t;var e=Number(t);return isNaN(e)?t:e}function a(t){return"true"===t?!0:"false"===t?!1:t}function h(t){var e=t.charCodeAt(0),i=t.charCodeAt(t.length-1);return e!==i||34!==e&&39!==e?t:t.slice(1,-1)}function l(t){return t.replace(Ni,c)}function c(t,e){return e?e.toUpperCase():""}function u(t){return t.replace(ji,"$1-$2").toLowerCase()}function f(t){return t.replace(Ei,c)}function p(t,e){return function(i){var n=arguments.length;return n?n>1?t.apply(e,arguments):t.call(e,i):t.call(e)}}function d(t,e){e=e||0;for(var i=t.length-e,n=new Array(i);i--;)n[i]=t[i+e];return n}function v(t,e){for(var i=Object.keys(e),n=i.length;n--;)t[i[n]]=e[i[n]];return t}function m(t){return null!==t&&"object"==typeof t}function g(t){return Si.call(t)===Fi}function _(t,e,i,n){Object.defineProperty(t,e,{value:i,enumerable:!!n,writable:!0,configurable:!0})}function y(t,e){var i,n,r,s,o,a=function h(){var a=Date.now()-s;e>a&&a>=0?i=setTimeout(h,e-a):(i=null,o=t.apply(r,n),i||(r=n=null))};return function(){return r=this,n=arguments,s=Date.now(),i||(i=setTimeout(a,e)),o}}function b(t,e){for(var i=t.length;i--;)if(t[i]===e)return i;return-1}function w(t){var e=function i(){return i.cancelled?void 0:t.apply(this,arguments)};return e.cancel=function(){e.cancelled=!0},e}function C(t,e){return t==e||(m(t)&&m(e)?JSON.stringify(t)===JSON.stringify(e):!1)}function $(t){this.size=0,this.limit=t,this.head=this.tail=void 0,this._keymap=Object.create(null)}function k(){var t,e=en.slice(hn,on).trim();if(e){t={};var i=e.match(vn);t.name=i[0],i.length>1&&(t.args=i.slice(1).map(x))}t&&(nn.filters=nn.filters||[]).push(t),hn=on+1}function x(t){if(mn.test(t))return{value:o(t),dynamic:!1};var e=h(t),i=e===t;return{value:i?t:e,dynamic:i}}function A(t){var e=dn.get(t);if(e)return e;for(en=t,ln=cn=!1,un=fn=pn=0,hn=0,nn={},on=0,an=en.length;an>on;on++)if(sn=rn,rn=en.charCodeAt(on),ln)39===rn&&92!==sn&&(ln=!ln);else if(cn)34===rn&&92!==sn&&(cn=!cn);else if(124===rn&&124!==en.charCodeAt(on+1)&&124!==en.charCodeAt(on-1))null==nn.expression?(hn=on+1,nn.expression=en.slice(0,on).trim()):k();else switch(rn){case 34:cn=!0;break;case 39:ln=!0;break;case 40:pn++;break;case 41:pn--;break;case 91:fn++;break;case 93:fn--;break;case 123:un++;break;case 125:un--}return null==nn.expression?nn.expression=en.slice(0,on).trim():0!==hn&&k(),dn.put(t,nn),nn}function O(t){return t.replace(_n,"\\$&")}function T(){var t=O(An.delimiters[0]),e=O(An.delimiters[1]),i=O(An.unsafeDelimiters[0]),n=O(An.unsafeDelimiters[1]);bn=new RegExp(i+"((?:.|\\n)+?)"+n+"|"+t+"((?:.|\\n)+?)"+e,"g"),wn=new RegExp("^"+i+"((?:.|\\n)+?)"+n+"$"),yn=new $(1e3)}function N(t){yn||T();var e=yn.get(t);if(e)return e;if(!bn.test(t))return null;for(var i,n,r,s,o,a,h=[],l=bn.lastIndex=0;i=bn.exec(t);)n=i.index,n>l&&h.push({value:t.slice(l,n)}),r=wn.test(i[0]),s=r?i[1]:i[2],o=s.charCodeAt(0),a=42===o,s=a?s.slice(1):s,h.push({tag:!0,value:s.trim(),html:r,oneTime:a}),l=n+i[0].length;return l<t.length&&h.push({value:t.slice(l)}),yn.put(t,h),h}function j(t,e){return t.length>1?t.map(function(t){return E(t,e)}).join("+"):E(t[0],e,!0)}function E(t,e,i){return t.tag?t.oneTime&&e?'"'+e.$eval(t.value)+'"':S(t.value,i):'"'+t.value+'"'}function S(t,e){if(Cn.test(t)){var i=A(t);return i.filters?"this._applyFilters("+i.expression+",null,"+JSON.stringify(i.filters)+",false)":"("+t+")"}return e?t:"("+t+")"}function F(t,e,i,n){R(t,1,function(){e.appendChild(t)},i,n)}function D(t,e,i,n){R(t,1,function(){B(t,e)},i,n)}function P(t,e,i){R(t,-1,function(){z(t)},e,i)}function R(t,e,i,n,r){var s=t.__v_trans;if(!s||!s.hooks&&!qi||!n._isCompiled||n.$parent&&!n.$parent._isCompiled)return i(),void(r&&r());var o=e>0?"enter":"leave";s[o](i,r)}function L(t){if("string"==typeof t){t=document.querySelector(t)}return t}function H(t){if(!t)return!1;var e=t.ownerDocument.documentElement,i=t.parentNode;return e===t||e===i||!(!i||1!==i.nodeType||!e.contains(i))}function I(t,e){var i=t.getAttribute(e);return null!==i&&t.removeAttribute(e),i}function M(t,e){var i=I(t,":"+e);return null===i&&(i=I(t,"v-bind:"+e)),i}function V(t,e){return t.hasAttribute(e)||t.hasAttribute(":"+e)||t.hasAttribute("v-bind:"+e)}function B(t,e){e.parentNode.insertBefore(t,e)}function W(t,e){e.nextSibling?B(t,e.nextSibling):e.parentNode.appendChild(t)}function z(t){t.parentNode.removeChild(t)}function U(t,e){e.firstChild?B(t,e.firstChild):e.appendChild(t)}function J(t,e){var i=t.parentNode;i&&i.replaceChild(e,t)}function q(t,e,i,n){t.addEventListener(e,i,n)}function Q(t,e,i){t.removeEventListener(e,i)}function G(t){var e=t.className;return"object"==typeof e&&(e=e.baseVal||""),e}function Z(t,e){Mi&&!/svg$/.test(t.namespaceURI)?t.className=e:t.setAttribute("class",e)}function X(t,e){if(t.classList)t.classList.add(e);else{var i=" "+G(t)+" ";i.indexOf(" "+e+" ")<0&&Z(t,(i+e).trim())}}function Y(t,e){if(t.classList)t.classList.remove(e);else{for(var i=" "+G(t)+" ",n=" "+e+" ";i.indexOf(n)>=0;)i=i.replace(n," ");Z(t,i.trim())}t.className||t.removeAttribute("class")}function K(t,e){var i,n;if(it(t)&&at(t.content)&&(t=t.content),t.hasChildNodes())for(tt(t),n=e?document.createDocumentFragment():document.createElement("div");i=t.firstChild;)n.appendChild(i);return n}function tt(t){for(var e;e=t.firstChild,et(e);)t.removeChild(e);for(;e=t.lastChild,et(e);)t.removeChild(e)}function et(t){return t&&(3===t.nodeType&&!t.data.trim()||8===t.nodeType)}function it(t){return t.tagName&&"template"===t.tagName.toLowerCase()}function nt(t,e){var i=An.debug?document.createComment(t):document.createTextNode(e?" ":"");return i.__v_anchor=!0,i}function rt(t){if(t.hasAttributes())for(var e=t.attributes,i=0,n=e.length;n>i;i++){var r=e[i].name;if(Nn.test(r))return l(r.replace(Nn,""))}}function st(t,e,i){for(var n;t!==e;)n=t.nextSibling,i(t),t=n;i(e)}function ot(t,e,i,n,r){function s(){if(a++,o&&a>=h.length){for(var t=0;t<h.length;t++)n.appendChild(h[t]);r&&r()}}var o=!1,a=0,h=[];st(t,e,function(t){t===e&&(o=!0),h.push(t),P(t,i,s)})}function at(t){return t&&11===t.nodeType}function ht(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}function lt(t,e){var i=t.tagName.toLowerCase(),n=t.hasAttributes();if(jn.test(i)||En.test(i)){if(n)return ct(t,e)}else{if(gt(e,"components",i))return{id:i};var r=n&&ct(t,e);if(r)return r}}function ct(t,e){var i=t.getAttribute("is");if(null!=i){if(gt(e,"components",i))return t.removeAttribute("is"),{id:i}}else if(i=M(t,"is"),null!=i)return{id:i,dynamic:!0}}function ut(e,n){var r,s,o;for(r in n)s=e[r],o=n[r],i(e,r)?m(s)&&m(o)&&ut(s,o):t(e,r,o);return e}function ft(t,e){var i=Object.create(t||null);return e?v(i,vt(e)):i}function pt(t){if(t.components)for(var e,i=t.components=vt(t.components),n=Object.keys(i),r=0,s=n.length;s>r;r++){var o=n[r];jn.test(o)||En.test(o)||(e=i[o],g(e)&&(i[o]=wi.extend(e)))}}function dt(t){var e,i,n=t.props;if(Di(n))for(t.props={},e=n.length;e--;)i=n[e],"string"==typeof i?t.props[i]=null:i.name&&(t.props[i.name]=i);else if(g(n)){var r=Object.keys(n);for(e=r.length;e--;)i=n[r[e]],"function"==typeof i&&(n[r[e]]={type:i})}}function vt(t){if(Di(t)){for(var e,i={},n=t.length;n--;){e=t[n];var r="function"==typeof e?e.options&&e.options.name||e.id:e.name||e.id;r&&(i[r]=e)}return i}return t}function mt(t,e,n){function r(i){var r=Sn[i]||Fn;o[i]=r(t[i],e[i],n,i)}pt(e),dt(e);var s,o={};if(e["extends"]&&(t="function"==typeof e["extends"]?mt(t,e["extends"].options,n):mt(t,e["extends"],n)),e.mixins)for(var a=0,h=e.mixins.length;h>a;a++){var l=e.mixins[a],c=l.prototype instanceof wi?l.options:l;t=mt(t,c,n)}for(s in t)r(s);for(s in e)i(t,s)||r(s);return o}function gt(t,e,i,n){if("string"==typeof i){var r,s=t[e],o=s[i]||s[r=l(i)]||s[r.charAt(0).toUpperCase()+r.slice(1)];return o}}function _t(){this.id=Dn++,this.subs=[]}function yt(t){Hn=!1,t(),Hn=!0}function bt(t){if(this.value=t,this.dep=new _t,_(t,"__ob__",this),Di(t)){var e=Pi?wt:Ct;e(t,Rn,Ln),this.observeArray(t)}else this.walk(t)}function wt(t,e){t.__proto__=e}function Ct(t,e,i){for(var n=0,r=i.length;r>n;n++){var s=i[n];_(t,s,e[s])}}function $t(t,e){if(t&&"object"==typeof t){var n;return i(t,"__ob__")&&t.__ob__ instanceof bt?n=t.__ob__:Hn&&(Di(t)||g(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new bt(t)),n&&e&&n.addVm(e),n}}function kt(t,e,i){var n=new _t,r=Object.getOwnPropertyDescriptor(t,e);if(!r||r.configurable!==!1){var s=r&&r.get,o=r&&r.set,a=$t(i);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):i;if(_t.target&&(n.depend(),a&&a.dep.depend(),Di(e)))for(var r,o=0,h=e.length;h>o;o++)r=e[o],r&&r.__ob__&&r.__ob__.dep.depend();return e},set:function(e){var r=s?s.call(t):i;e!==r&&(o?o.call(t,e):i=e,a=$t(e),n.notify())}})}}function xt(t){t.prototype._init=function(t){t=t||{},this.$el=null,this.$parent=t.parent,this.$root=this.$parent?this.$parent.$root:this,this.$children=[],this.$refs={},this.$els={},this._watchers=[],this._directives=[],this._uid=Mn++,this._isVue=!0,this._events={},this._eventsCount={},this._isFragment=!1,this._fragment=this._fragmentStart=this._fragmentEnd=null,this._isCompiled=this._isDestroyed=this._isReady=this._isAttached=this._isBeingDestroyed=this._vForRemoving=!1,this._unlinkFn=null,this._context=t._context||this.$parent,this._scope=t._scope,this._frag=t._frag,this._frag&&this._frag.children.push(this),this.$parent&&this.$parent.$children.push(this),t=this.$options=mt(this.constructor.options,t,this),this._updateRef(),this._data={},this._callHook("init"),this._initState(),this._initEvents(),this._callHook("created"),t.el&&this.$mount(t.el)}}function At(t){if(void 0===t)return"eof";var e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:case 48:return t;case 95:case 36:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return e>=97&&122>=e||e>=65&&90>=e?"ident":e>=49&&57>=e?"number":"else"}function Ot(t){var e=t.trim();return"0"===t.charAt(0)&&isNaN(t)?!1:n(e)?h(e):"*"+e}function Tt(t){function e(){var e=t[c+1];return u===Xn&&"'"===e||u===Yn&&'"'===e?(c++,n="\\"+e,p[Bn](),!0):void 0}var i,n,r,s,o,a,h,l=[],c=-1,u=Jn,f=0,p=[];for(p[Wn]=function(){void 0!==r&&(l.push(r),r=void 0)},p[Bn]=function(){void 0===r?r=n:r+=n},p[zn]=function(){p[Bn](),f++},p[Un]=function(){if(f>0)f--,u=Zn,p[Bn]();else{if(f=0,r=Ot(r),r===!1)return!1;p[Wn]()}};null!=u;)if(c++,i=t[c],"\\"!==i||!e()){if(s=At(i),h=er[u],o=h[s]||h["else"]||tr,o===tr)return;if(u=o[0],a=p[o[1]],a&&(n=o[2],n=void 0===n?i:n,a()===!1))return;if(u===Kn)return l.raw=t,l}}function Nt(t){var e=Vn.get(t);return e||(e=Tt(t),e&&Vn.put(t,e)),e}function jt(t,e){return It(e).get(t)}function Et(e,i,n){var r=e;if("string"==typeof i&&(i=Tt(i)),!i||!m(e))return!1;for(var s,o,a=0,h=i.length;h>a;a++)s=e,o=i[a],"*"===o.charAt(0)&&(o=It(o.slice(1)).get.call(r,r)),h-1>a?(e=e[o],m(e)||(e={},t(s,o,e))):Di(e)?e.$set(o,n):o in e?e[o]=n:t(e,o,n);return!0}function St(){}function Ft(t,e){var i=vr.length;return vr[i]=e?t.replace(lr,"\\n"):t,'"'+i+'"'}function Dt(t){var e=t.charAt(0),i=t.slice(1);return sr.test(i)?t:(i=i.indexOf('"')>-1?i.replace(ur,Pt):i,e+"scope."+i)}function Pt(t,e){return vr[e]}function Rt(t){ar.test(t),vr.length=0;var e=t.replace(cr,Ft).replace(hr,"");return e=(" "+e).replace(pr,Dt).replace(ur,Pt),Lt(e)}function Lt(t){try{return new Function("scope","return "+t+";")}catch(e){return St}}function Ht(t){var e=Nt(t);return e?function(t,i){Et(t,e,i)}:void 0}function It(t,e){t=t.trim();var i=nr.get(t);if(i)return e&&!i.set&&(i.set=Ht(i.exp)),i;var n={exp:t};return n.get=Mt(t)&&t.indexOf("[")<0?Lt("scope."+t):Rt(t),e&&(n.set=Ht(t)),nr.put(t,n),n}function Mt(t){return fr.test(t)&&!dr.test(t)&&"Math."!==t.slice(0,5)}function Vt(){gr.length=0,_r.length=0,yr={},br={},wr=!1}function Bt(){for(var t=!0;t;)t=!1,Wt(gr),Wt(_r),gr.length?t=!0:(Li&&An.devtools&&Li.emit("flush"),Vt())}function Wt(t){for(var e=0;e<t.length;e++){var i=t[e],n=i.id;yr[n]=null,i.run()}t.length=0}function zt(t){var e=t.id;if(null==yr[e]){var i=t.user?_r:gr;yr[e]=i.length,i.push(t),wr||(wr=!0,Yi(Bt))}}function Ut(t,e,i,n){n&&v(this,n);var r="function"==typeof e;if(this.vm=t,t._watchers.push(this),this.expression=e,this.cb=i,this.id=++Cr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Ki,this.newDepIds=new Ki,this.prevError=null,r)this.getter=e,this.setter=void 0;else{var s=It(e,this.twoWay);this.getter=s.get,this.setter=s.set}this.value=this.lazy?void 0:this.get(),this.queued=this.shallow=!1}function Jt(t,e){var i=void 0,n=void 0;e||(e=$r,e.clear());var r=Di(t),s=m(t);if((r||s)&&Object.isExtensible(t)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(r)for(i=t.length;i--;)Jt(t[i],e);else if(s)for(n=Object.keys(t),i=n.length;i--;)Jt(t[n[i]],e)}}function qt(t){return it(t)&&at(t.content)}function Qt(t,e){var i=e?t:t.trim(),n=xr.get(i);if(n)return n;var r=document.createDocumentFragment(),s=t.match(Tr),o=Nr.test(t),a=jr.test(t);if(s||o||a){var h=s&&s[1],l=Or[h]||Or.efault,c=l[0],u=l[1],f=l[2],p=document.createElement("div");for(p.innerHTML=u+t+f;c--;)p=p.lastChild;for(var d;d=p.firstChild;)r.appendChild(d)}else r.appendChild(document.createTextNode(t));return e||tt(r),xr.put(i,r),r}function Gt(t){if(qt(t))return Qt(t.innerHTML);if("SCRIPT"===t.tagName)return Qt(t.textContent);for(var e,i=Zt(t),n=document.createDocumentFragment();e=i.firstChild;)n.appendChild(e);return tt(n),n}function Zt(t){if(!t.querySelectorAll)return t.cloneNode();var e,i,n,r=t.cloneNode(!0);if(Er){var s=r;if(qt(t)&&(t=t.content,s=r.content),i=t.querySelectorAll("template"),i.length)for(n=s.querySelectorAll("template"),e=n.length;e--;)n[e].parentNode.replaceChild(Zt(i[e]),n[e])}if(Sr)if("TEXTAREA"===t.tagName)r.value=t.value;else if(i=t.querySelectorAll("textarea"),i.length)for(n=r.querySelectorAll("textarea"),e=n.length;e--;)n[e].value=i[e].value;return r}function Xt(t,e,i){var n,r;return at(t)?(tt(t),e?Zt(t):t):("string"==typeof t?i||"#"!==t.charAt(0)?r=Qt(t,i):(r=Ar.get(t),r||(n=document.getElementById(t.slice(1)),n&&(r=Gt(n),Ar.put(t,r)))):t.nodeType&&(r=Gt(t)),r&&e?Zt(r):r)}function Yt(t,e,i,n,r,s){this.children=[],this.childFrags=[],this.vm=e,this.scope=r,this.inserted=!1,this.parentFrag=s,s&&s.childFrags.push(this),this.unlink=t(e,i,n,r,this);var o=this.single=1===i.childNodes.length&&!i.childNodes[0].__v_anchor;o?(this.node=i.childNodes[0],this.before=Kt,this.remove=te):(this.node=nt("fragment-start"),this.end=nt("fragment-end"),this.frag=i,U(this.node,i),i.appendChild(this.end),this.before=ee,this.remove=ie),this.node.__v_frag=this}function Kt(t,e){this.inserted=!0;var i=e!==!1?D:B;i(this.node,t,this.vm),H(this.node)&&this.callHook(ne)}function te(){this.inserted=!1;var t=H(this.node),e=this;this.beforeRemove(),P(this.node,this.vm,function(){t&&e.callHook(re),e.destroy()})}function ee(t,e){this.inserted=!0;var i=this.vm,n=e!==!1?D:B;st(this.node,this.end,function(e){n(e,t,i)}),H(this.node)&&this.callHook(ne)}function ie(){this.inserted=!1;var t=this,e=H(this.node);this.beforeRemove(),ot(this.node,this.end,this.vm,this.frag,function(){e&&t.callHook(re),t.destroy()})}function ne(t){!t._isAttached&&H(t.$el)&&t._callHook("attached")}function re(t){t._isAttached&&!H(t.$el)&&t._callHook("detached")}function se(t,e){this.vm=t;var i,n="string"==typeof e;n||it(e)&&!e.hasAttribute("v-if")?i=Xt(e,!0):(i=document.createDocumentFragment(),i.appendChild(e)),this.template=i;var r,s=t.constructor.cid;if(s>0){var o=s+(n?e:ht(e));r=Pr.get(o),r||(r=De(i,t.$options,!0),Pr.put(o,r))}else r=De(i,t.$options,!0);this.linker=r}function oe(t,e,i){var n=t.node.previousSibling;if(n){for(t=n.__v_frag;!(t&&t.forId===i&&t.inserted||n===e);){if(n=n.previousSibling,!n)return;t=n.__v_frag}return t}}function ae(t){var e=t.node;if(t.end)for(;!e.__vue__&&e!==t.end&&e.nextSibling;)e=e.nextSibling;return e.__vue__}function he(t){for(var e=-1,i=new Array(Math.floor(t));++e<t;)i[e]=e;return i}function le(t,e,i,n){return n?"$index"===n?t:n.charAt(0).match(/\w/)?jt(i,n):i[n]:e||i}function ce(t,e,i){for(var n,r,s,o=e?[]:null,a=0,h=t.options.length;h>a;a++)if(n=t.options[a],s=i?n.hasAttribute("selected"):n.selected){if(r=n.hasOwnProperty("_value")?n._value:n.value,!e)return r;o.push(r)}return o}function ue(t,e){for(var i=t.length;i--;)if(C(t[i],e))return i;return-1}function fe(t,e){var i=e.map(function(t){var e=t.charCodeAt(0);return e>47&&58>e?parseInt(t,10):1===t.length&&(e=t.toUpperCase().charCodeAt(0),e>64&&91>e)?e:is[t]});return i=[].concat.apply([],i),function(e){return i.indexOf(e.keyCode)>-1?t.call(this,e):void 0}}function pe(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function de(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ve(t){return function(e){return e.target===e.currentTarget?t.call(this,e):void 0}}function me(t){if(as[t])return as[t];var e=ge(t);return as[t]=as[e]=e,e}function ge(t){t=u(t);var e=l(t),i=e.charAt(0).toUpperCase()+e.slice(1);hs||(hs=document.createElement("div"));var n,r=rs.length;if("filter"!==e&&e in hs.style)return{kebab:t,camel:e};for(;r--;)if(n=ss[r]+i,n in hs.style)return{kebab:rs[r]+t,camel:n}}function _e(t){var e=[];if(Di(t))for(var i=0,n=t.length;n>i;i++){var r=t[i];if(r)if("string"==typeof r)e.push(r);else for(var s in r)r[s]&&e.push(s)}else if(m(t))for(var o in t)t[o]&&e.push(o);return e}function ye(t,e,i){if(e=e.trim(),-1===e.indexOf(" "))return void i(t,e);for(var n=e.split(/\s+/),r=0,s=n.length;s>r;r++)i(t,n[r])}function be(t,e,i){function n(){++s>=r?i():t[s].call(e,n)}var r=t.length,s=0;t[0].call(e,n)}function we(t,e,i){for(var r,s,o,a,h,c,f,p=[],d=Object.keys(e),v=d.length;v--;)s=d[v],r=e[s]||ks,h=l(s),xs.test(h)&&(f={name:s,path:h,options:r,mode:$s.ONE_WAY,raw:null},o=u(s),null===(a=M(t,o))&&(null!==(a=M(t,o+".sync"))?f.mode=$s.TWO_WAY:null!==(a=M(t,o+".once"))&&(f.mode=$s.ONE_TIME)),null!==a?(f.raw=a,c=A(a),a=c.expression,f.filters=c.filters,n(a)&&!c.filters?f.optimizedLiteral=!0:f.dynamic=!0,f.parentPath=a):null!==(a=I(t,o))&&(f.raw=a),p.push(f));return Ce(p)}function Ce(t){return function(e,n){e._props={};for(var r,s,l,c,f,p=e.$options.propsData,d=t.length;d--;)if(r=t[d],f=r.raw,s=r.path,l=r.options,e._props[s]=r,p&&i(p,s)&&ke(e,r,p[s]),null===f)ke(e,r,void 0);else if(r.dynamic)r.mode===$s.ONE_TIME?(c=(n||e._context||e).$get(r.parentPath),ke(e,r,c)):e._context?e._bindDir({name:"prop",def:Os,prop:r},null,null,n):ke(e,r,e.$get(r.parentPath));else if(r.optimizedLiteral){var v=h(f);c=v===f?a(o(f)):v,ke(e,r,c)}else c=l.type!==Boolean||""!==f&&f!==u(r.name)?f:!0,ke(e,r,c)}}function $e(t,e,i,n){var r=e.dynamic&&Mt(e.parentPath),s=i;void 0===s&&(s=Ae(t,e)),s=Te(e,s,t);var o=s!==i;Oe(e,s,t)||(s=void 0),r&&!o?yt(function(){n(s)}):n(s)}function ke(t,e,i){$e(t,e,i,function(i){kt(t,e.path,i)})}function xe(t,e,i){$e(t,e,i,function(i){t[e.path]=i})}function Ae(t,e){var n=e.options;if(!i(n,"default"))return n.type===Boolean?!1:void 0;var r=n["default"];return m(r),"function"==typeof r&&n.type!==Function?r.call(t):r}function Oe(t,e,i){if(!t.options.required&&(null===t.raw||null==e))return!0;var n=t.options,r=n.type,s=!r,o=[];if(r){Di(r)||(r=[r]);for(var a=0;a<r.length&&!s;a++){var h=Ne(e,r[a]);o.push(h.expectedType),s=h.valid}}if(!s)return!1;var l=n.validator;return!l||l(e)}function Te(t,e,i){var n=t.options.coerce;return n&&"function"==typeof n?n(e):e}function Ne(t,e){var i,n;return e===String?(n="string",i=typeof t===n):e===Number?(n="number",i=typeof t===n):e===Boolean?(n="boolean",i=typeof t===n):e===Function?(n="function",i=typeof t===n):e===Object?(n="object",i=g(t)):e===Array?(n="array",i=Di(t)):i=t instanceof e,{valid:i,expectedType:n}}function je(t){Ts.push(t),Ns||(Ns=!0,Yi(Ee))}function Ee(){for(var t=document.documentElement.offsetHeight,e=0;e<Ts.length;e++)Ts[e]();return Ts=[],Ns=!1,t}function Se(t,e,i,n){this.id=e,this.el=t,this.enterClass=i&&i.enterClass||e+"-enter",this.leaveClass=i&&i.leaveClass||e+"-leave",this.hooks=i,this.vm=n,this.pendingCssEvent=this.pendingCssCb=this.cancel=this.pendingJsCb=this.op=this.cb=null,this.justEntered=!1,this.entered=this.left=!1,this.typeCache={},this.type=i&&i.type;var r=this;["enterNextTick","enterDone","leaveNextTick","leaveDone"].forEach(function(t){r[t]=p(r[t],r)})}function Fe(t){if(/svg$/.test(t.namespaceURI)){var e=t.getBoundingClientRect();return!(e.width||e.height)}return!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}function De(t,e,i){var n=i||!e._asComponent?Ve(t,e):null,r=n&&n.terminal||ri(t)||!t.hasChildNodes()?null:qe(t.childNodes,e);return function(t,e,i,s,o){var a=d(e.childNodes),h=Pe(function(){n&&n(t,e,i,s,o),r&&r(t,a,i,s,o)},t);return Le(t,h)}}function Pe(t,e){e._directives=[];var i=e._directives.length;t();var n=e._directives.slice(i);n.sort(Re);for(var r=0,s=n.length;s>r;r++)n[r]._bind();return n}function Re(t,e){return t=t.descriptor.def.priority||zs,e=e.descriptor.def.priority||zs,t>e?-1:t===e?0:1}function Le(t,e,i,n){function r(r){He(t,e,r),i&&n&&He(i,n)}return r.dirs=e,r}function He(t,e,i){for(var n=e.length;n--;)e[n]._teardown()}function Ie(t,e,i,n){var r=we(e,i,t),s=Pe(function(){r(t,n)},t);return Le(t,s)}function Me(t,e,i){var n,r,s=e._containerAttrs,o=e._replacerAttrs;return 11!==t.nodeType&&(e._asComponent?(s&&i&&(n=ti(s,i)),o&&(r=ti(o,e))):r=ti(t.attributes,e)),e._containerAttrs=e._replacerAttrs=null,function(t,e,i){var s,o=t._context;o&&n&&(s=Pe(function(){n(o,e,null,i)},o));var a=Pe(function(){r&&r(t,e)},t);return Le(t,a,o,s)}}function Ve(t,e){var i=t.nodeType;return 1!==i||ri(t)?3===i&&t.data.trim()?We(t,e):null:Be(t,e)}function Be(t,e){if("TEXTAREA"===t.tagName){var i=N(t.value);i&&(t.setAttribute(":value",j(i)),t.value="")}var n,r=t.hasAttributes(),s=r&&d(t.attributes);return r&&(n=Xe(t,s,e)),n||(n=Ge(t,e)),n||(n=Ze(t,e)),!n&&r&&(n=ti(s,e)),n}function We(t,e){if(t._skip)return ze;var i=N(t.wholeText);if(!i)return null;for(var n=t.nextSibling;n&&3===n.nodeType;)n._skip=!0,n=n.nextSibling;for(var r,s,o=document.createDocumentFragment(),a=0,h=i.length;h>a;a++)s=i[a],r=s.tag?Ue(s,e):document.createTextNode(s.value),o.appendChild(r);return Je(i,o,e)}function ze(t,e){z(e)}function Ue(t,e){function i(e){if(!t.descriptor){var i=A(t.value);t.descriptor={name:e,def:bs[e],expression:i.expression,filters:i.filters}}}var n;return t.oneTime?n=document.createTextNode(t.value):t.html?(n=document.createComment("v-html"),i("html")):(n=document.createTextNode(" "),i("text")),n}function Je(t,e){return function(i,n,r,o){for(var a,h,l,c=e.cloneNode(!0),u=d(c.childNodes),f=0,p=t.length;p>f;f++)a=t[f],h=a.value,a.tag&&(l=u[f],a.oneTime?(h=(o||i).$eval(h),a.html?J(l,Xt(h,!0)):l.data=s(h)):i._bindDir(a.descriptor,l,r,o));J(n,c)}}function qe(t,e){for(var i,n,r,s=[],o=0,a=t.length;a>o;o++)r=t[o],i=Ve(r,e),n=i&&i.terminal||"SCRIPT"===r.tagName||!r.hasChildNodes()?null:qe(r.childNodes,e),s.push(i,n);return s.length?Qe(s):null}function Qe(t){return function(e,i,n,r,s){for(var o,a,h,l=0,c=0,u=t.length;u>l;c++){o=i[c],a=t[l++],h=t[l++];var f=d(o.childNodes);a&&a(e,o,n,r,s),h&&h(e,f,n,r,s)}}}function Ge(t,e){var i=t.tagName.toLowerCase();if(!jn.test(i)){var n=gt(e,"elementDirectives",i);return n?Ke(t,i,"",e,n):void 0}}function Ze(t,e){var i=lt(t,e);if(i){var n=rt(t),r={name:"component",ref:n,expression:i.id,def:Hs.component,modifiers:{literal:!i.dynamic}},s=function(t,e,i,s,o){n&&kt((s||t).$refs,n,null),t._bindDir(r,e,i,s,o)};return s.terminal=!0,s}}function Xe(t,e,i){if(null!==I(t,"v-pre"))return Ye;if(t.hasAttribute("v-else")){var n=t.previousElementSibling;if(n&&n.hasAttribute("v-if"))return Ye}for(var r,s,o,a,h,l,c,u,f,p,d=0,v=e.length;v>d;d++)r=e[d],s=r.name.replace(Bs,""),(h=s.match(Vs))&&(f=gt(i,"directives",h[1]),f&&f.terminal&&(!p||(f.priority||Us)>p.priority)&&(p=f,c=r.name,a=ei(r.name),o=r.value,l=h[1],u=h[2]));return p?Ke(t,l,o,i,p,c,u,a):void 0}function Ye(){}function Ke(t,e,i,n,r,s,o,a){var h=A(i),l={name:e,arg:o,expression:h.expression,filters:h.filters,raw:i,attr:s,modifiers:a,def:r};"for"!==e&&"router-view"!==e||(l.ref=rt(t));var c=function(t,e,i,n,r){l.ref&&kt((n||t).$refs,l.ref,null),t._bindDir(l,e,i,n,r)};return c.terminal=!0,c}function ti(t,e){function i(t,e,i){var n=i&&ni(i),r=!n&&A(s);v.push({name:t,attr:o,raw:a,def:e,arg:l,modifiers:c,expression:r&&r.expression,filters:r&&r.filters,interp:i,hasOneTime:n})}for(var n,r,s,o,a,h,l,c,u,f,p,d=t.length,v=[];d--;)if(n=t[d],r=o=n.name,s=a=n.value,f=N(s),l=null,c=ei(r),r=r.replace(Bs,""),f)s=j(f),l=r,i("bind",bs.bind,f);else if(Ws.test(r))c.literal=!Is.test(r),i("transition",Hs.transition);else if(Ms.test(r))l=r.replace(Ms,""),i("on",bs.on);else if(Is.test(r))h=r.replace(Is,""),"style"===h||"class"===h?i(h,Hs[h]):(l=h,i("bind",bs.bind));else if(p=r.match(Vs)){if(h=p[1],l=p[2],"else"===h)continue;u=gt(e,"directives",h,!0),u&&i(h,u)}return v.length?ii(v):void 0}function ei(t){var e=Object.create(null),i=t.match(Bs);if(i)for(var n=i.length;n--;)e[i[n].slice(1)]=!0;return e}function ii(t){return function(e,i,n,r,s){for(var o=t.length;o--;)e._bindDir(t[o],i,n,r,s)}}function ni(t){for(var e=t.length;e--;)if(t[e].oneTime)return!0}function ri(t){return"SCRIPT"===t.tagName&&(!t.hasAttribute("type")||"text/javascript"===t.getAttribute("type"))}function si(t,e){return e&&(e._containerAttrs=ai(t)),it(t)&&(t=Xt(t)),e&&(e._asComponent&&!e.template&&(e.template="<slot></slot>"),e.template&&(e._content=K(t),t=oi(t,e))),at(t)&&(U(nt("v-start",!0),t),t.appendChild(nt("v-end",!0))),t}function oi(t,e){var i=e.template,n=Xt(i,!0);if(n){var r=n.firstChild,s=r.tagName&&r.tagName.toLowerCase();return e.replace?(t===document.body,n.childNodes.length>1||1!==r.nodeType||"component"===s||gt(e,"components",s)||V(r,"is")||gt(e,"elementDirectives",s)||r.hasAttribute("v-for")||r.hasAttribute("v-if")?n:(e._replacerAttrs=ai(r),hi(t,r),r)):(t.appendChild(n),t)}}function ai(t){return 1===t.nodeType&&t.hasAttributes()?d(t.attributes):void 0}function hi(t,e){for(var i,n,r=t.attributes,s=r.length;s--;)i=r[s].name,n=r[s].value,e.hasAttribute(i)||Js.test(i)?"class"===i&&!N(n)&&(n=n.trim())&&n.split(/\s+/).forEach(function(t){X(e,t)}):e.setAttribute(i,n)}function li(t,e){if(e){for(var i,n,r=t._slotContents=Object.create(null),s=0,o=e.children.length;o>s;s++)i=e.children[s],(n=i.getAttribute("slot"))&&(r[n]||(r[n]=[])).push(i);for(n in r)r[n]=ci(r[n],e);if(e.hasChildNodes()){var a=e.childNodes;if(1===a.length&&3===a[0].nodeType&&!a[0].data.trim())return;r["default"]=ci(e.childNodes,e)}}}function ci(t,e){var i=document.createDocumentFragment();t=d(t);for(var n=0,r=t.length;r>n;n++){var s=t[n];!it(s)||s.hasAttribute("v-if")||s.hasAttribute("v-for")||(e.removeChild(s),s=Xt(s,!0)),i.appendChild(s)}return i}function ui(t){function e(){}function n(t,e){var i=new Ut(e,t,null,{lazy:!0});return function(){return i.dirty&&i.evaluate(),_t.target&&i.depend(),i.value}}Object.defineProperty(t.prototype,"$data",{get:function(){return this._data},set:function(t){t!==this._data&&this._setData(t)}}),t.prototype._initState=function(){this._initProps(),this._initMeta(),this._initMethods(),this._initData(),this._initComputed()},t.prototype._initProps=function(){var t=this.$options,e=t.el,i=t.props;e=t.el=L(e),this._propsUnlinkFn=e&&1===e.nodeType&&i?Ie(this,e,i,this._scope):null},t.prototype._initData=function(){var t=this.$options.data,e=this._data=t?t():{};g(e)||(e={});var n,r,s=this._props,o=Object.keys(e);for(n=o.length;n--;)r=o[n],s&&i(s,r)||this._proxy(r);$t(e,this)},t.prototype._setData=function(t){t=t||{};var e=this._data;this._data=t;var n,r,s;for(n=Object.keys(e),s=n.length;s--;)r=n[s],r in t||this._unproxy(r);for(n=Object.keys(t),s=n.length;s--;)r=n[s],i(this,r)||this._proxy(r);e.__ob__.removeVm(this),$t(t,this),this._digest()},t.prototype._proxy=function(t){if(!r(t)){var e=this;Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(i){e._data[t]=i}})}},t.prototype._unproxy=function(t){r(t)||delete this[t]},t.prototype._digest=function(){for(var t=0,e=this._watchers.length;e>t;t++)this._watchers[t].update(!0)},t.prototype._initComputed=function(){var t=this.$options.computed;if(t)for(var i in t){var r=t[i],s={enumerable:!0,configurable:!0};"function"==typeof r?(s.get=n(r,this),s.set=e):(s.get=r.get?r.cache!==!1?n(r.get,this):p(r.get,this):e,s.set=r.set?p(r.set,this):e),Object.defineProperty(this,i,s)}},t.prototype._initMethods=function(){var t=this.$options.methods;if(t)for(var e in t)this[e]=p(t[e],this)},t.prototype._initMeta=function(){var t=this.$options._meta;if(t)for(var e in t)kt(this,e,t[e])}}function fi(t){function e(t,e){for(var i,n,r,s=e.attributes,o=0,a=s.length;a>o;o++)i=s[o].name,Qs.test(i)&&(i=i.replace(Qs,""),n=s[o].value,Mt(n)&&(n+=".apply(this, $arguments)"),r=(t._scope||t._context).$eval(n,!0),r._fromParent=!0,t.$on(i.replace(Qs),r))}function i(t,e,i){if(i){var r,s,o,a;for(s in i)if(r=i[s],Di(r))for(o=0,a=r.length;a>o;o++)n(t,e,s,r[o]);else n(t,e,s,r)}}function n(t,e,i,r,s){var o=typeof r;if("function"===o)t[e](i,r,s);else if("string"===o){var a=t.$options.methods,h=a&&a[r];h&&t[e](i,h,s)}else r&&"object"===o&&n(t,e,i,r.handler,r)}function r(){this._isAttached||(this._isAttached=!0,this.$children.forEach(s))}function s(t){!t._isAttached&&H(t.$el)&&t._callHook("attached")}function o(){this._isAttached&&(this._isAttached=!1,this.$children.forEach(a))}function a(t){t._isAttached&&!H(t.$el)&&t._callHook("detached")}t.prototype._initEvents=function(){var t=this.$options;t._asComponent&&e(this,t.el),i(this,"$on",t.events),i(this,"$watch",t.watch)},t.prototype._initDOMHooks=function(){this.$on("hook:attached",r),this.$on("hook:detached",o)},t.prototype._callHook=function(t){this.$emit("pre-hook:"+t);var e=this.$options[t];if(e)for(var i=0,n=e.length;n>i;i++)e[i].call(this);this.$emit("hook:"+t)}}function pi(){}function di(t,e,i,n,r,s){this.vm=e,this.el=i,this.descriptor=t,this.name=t.name,this.expression=t.expression,this.arg=t.arg,this.modifiers=t.modifiers,this.filters=t.filters,this.literal=this.modifiers&&this.modifiers.literal,this._locked=!1,this._bound=!1,this._listeners=null,this._host=n,this._scope=r,this._frag=s}function vi(t){t.prototype._updateRef=function(t){var e=this.$options._ref;if(e){var i=(this._scope||this._context).$refs;t?i[e]===this&&(i[e]=null):i[e]=this}},t.prototype._compile=function(t){var e=this.$options,i=t;if(t=si(t,e),this._initElement(t),1!==t.nodeType||null===I(t,"v-pre")){var n=this._context&&this._context.$options,r=Me(t,e,n);li(this,e._content);var s,o=this.constructor;e._linkerCachable&&(s=o.linker,s||(s=o.linker=De(t,e)));var a=r(this,t,this._scope),h=s?s(this,t):De(t,e)(this,t);this._unlinkFn=function(){a(),h(!0)},e.replace&&J(i,t),this._isCompiled=!0,this._callHook("compiled")}},t.prototype._initElement=function(t){at(t)?(this._isFragment=!0,this.$el=this._fragmentStart=t.firstChild,this._fragmentEnd=t.lastChild,3===this._fragmentStart.nodeType&&(this._fragmentStart.data=this._fragmentEnd.data=""),this._fragment=t):this.$el=t,this.$el.__vue__=this,this._callHook("beforeCompile")},t.prototype._bindDir=function(t,e,i,n,r){this._directives.push(new di(t,this,e,i,n,r))},t.prototype._destroy=function(t,e){if(this._isBeingDestroyed)return void(e||this._cleanup());var i,n,r=this,s=function(){!i||n||e||r._cleanup()};t&&this.$el&&(n=!0,this.$remove(function(){
n=!1,s()})),this._callHook("beforeDestroy"),this._isBeingDestroyed=!0;var o,a=this.$parent;for(a&&!a._isBeingDestroyed&&(a.$children.$remove(this),this._updateRef(!0)),o=this.$children.length;o--;)this.$children[o].$destroy();for(this._propsUnlinkFn&&this._propsUnlinkFn(),this._unlinkFn&&this._unlinkFn(),o=this._watchers.length;o--;)this._watchers[o].teardown();this.$el&&(this.$el.__vue__=null),i=!0,s()},t.prototype._cleanup=function(){this._isDestroyed||(this._frag&&this._frag.children.$remove(this),this._data&&this._data.__ob__&&this._data.__ob__.removeVm(this),this.$el=this.$parent=this.$root=this.$children=this._watchers=this._context=this._scope=this._directives=null,this._isDestroyed=!0,this._callHook("destroyed"),this.$off())}}function mi(t){t.prototype._applyFilters=function(t,e,i,n){var r,s,o,a,h,l,c,u,f;for(l=0,c=i.length;c>l;l++)if(r=i[n?c-l-1:l],s=gt(this.$options,"filters",r.name,!0),s&&(s=n?s.write:s.read||s,"function"==typeof s)){if(o=n?[t,e]:[t],h=n?2:1,r.args)for(u=0,f=r.args.length;f>u;u++)a=r.args[u],o[u+h]=a.dynamic?this.$get(a.value):a.value;t=s.apply(this,o)}return t},t.prototype._resolveComponent=function(e,i){var n;if(n="function"==typeof e?e:gt(this.$options,"components",e,!0))if(n.options)i(n);else if(n.resolved)i(n.resolved);else if(n.requested)n.pendingCallbacks.push(i);else{n.requested=!0;var r=n.pendingCallbacks=[i];n.call(this,function(e){g(e)&&(e=t.extend(e)),n.resolved=e;for(var i=0,s=r.length;s>i;i++)r[i](e)},function(t){})}}}function gi(t){function i(t){return JSON.parse(JSON.stringify(t))}t.prototype.$get=function(t,e){var i=It(t);if(i){if(e){var n=this;return function(){n.$arguments=d(arguments);var t=i.get.call(n,n);return n.$arguments=null,t}}try{return i.get.call(this,this)}catch(r){}}},t.prototype.$set=function(t,e){var i=It(t,!0);i&&i.set&&i.set.call(this,this,e)},t.prototype.$delete=function(t){e(this._data,t)},t.prototype.$watch=function(t,e,i){var n,r=this;"string"==typeof t&&(n=A(t),t=n.expression);var s=new Ut(r,t,e,{deep:i&&i.deep,sync:i&&i.sync,filters:n&&n.filters,user:!i||i.user!==!1});return i&&i.immediate&&e.call(r,s.value),function(){s.teardown()}},t.prototype.$eval=function(t,e){if(Gs.test(t)){var i=A(t),n=this.$get(i.expression,e);return i.filters?this._applyFilters(n,null,i.filters):n}return this.$get(t,e)},t.prototype.$interpolate=function(t){var e=N(t),i=this;return e?1===e.length?i.$eval(e[0].value)+"":e.map(function(t){return t.tag?i.$eval(t.value):t.value}).join(""):t},t.prototype.$log=function(t){var e=t?jt(this._data,t):this._data;if(e&&(e=i(e)),!t){var n;for(n in this.$options.computed)e[n]=i(this[n]);if(this._props)for(n in this._props)e[n]=i(this[n])}console.log(e)}}function _i(t){function e(t,e,n,r,s,o){e=i(e);var a=!H(e),h=r===!1||a?s:o,l=!a&&!t._isAttached&&!H(t.$el);return t._isFragment?(st(t._fragmentStart,t._fragmentEnd,function(i){h(i,e,t)}),n&&n()):h(t.$el,e,t,n),l&&t._callHook("attached"),t}function i(t){return"string"==typeof t?document.querySelector(t):t}function n(t,e,i,n){e.appendChild(t),n&&n()}function r(t,e,i,n){B(t,e),n&&n()}function s(t,e,i){z(t),i&&i()}t.prototype.$nextTick=function(t){Yi(t,this)},t.prototype.$appendTo=function(t,i,r){return e(this,t,i,r,n,F)},t.prototype.$prependTo=function(t,e,n){return t=i(t),t.hasChildNodes()?this.$before(t.firstChild,e,n):this.$appendTo(t,e,n),this},t.prototype.$before=function(t,i,n){return e(this,t,i,n,r,D)},t.prototype.$after=function(t,e,n){return t=i(t),t.nextSibling?this.$before(t.nextSibling,e,n):this.$appendTo(t.parentNode,e,n),this},t.prototype.$remove=function(t,e){if(!this.$el.parentNode)return t&&t();var i=this._isAttached&&H(this.$el);i||(e=!1);var n=this,r=function(){i&&n._callHook("detached"),t&&t()};if(this._isFragment)ot(this._fragmentStart,this._fragmentEnd,this,this._fragment,r);else{var o=e===!1?s:P;o(this.$el,this,r)}return this}}function yi(t){function e(t,e,n){var r=t.$parent;if(r&&n&&!i.test(e))for(;r;)r._eventsCount[e]=(r._eventsCount[e]||0)+n,r=r.$parent}t.prototype.$on=function(t,i){return(this._events[t]||(this._events[t]=[])).push(i),e(this,t,1),this},t.prototype.$once=function(t,e){function i(){n.$off(t,i),e.apply(this,arguments)}var n=this;return i.fn=e,this.$on(t,i),this},t.prototype.$off=function(t,i){var n;if(!arguments.length){if(this.$parent)for(t in this._events)n=this._events[t],n&&e(this,t,-n.length);return this._events={},this}if(n=this._events[t],!n)return this;if(1===arguments.length)return e(this,t,-n.length),this._events[t]=null,this;for(var r,s=n.length;s--;)if(r=n[s],r===i||r.fn===i){e(this,t,-1),n.splice(s,1);break}return this},t.prototype.$emit=function(t){var e="string"==typeof t;t=e?t:t.name;var i=this._events[t],n=e||!i;if(i){i=i.length>1?d(i):i;var r=e&&i.some(function(t){return t._fromParent});r&&(n=!1);for(var s=d(arguments,1),o=0,a=i.length;a>o;o++){var h=i[o],l=h.apply(this,s);l!==!0||r&&!h._fromParent||(n=!0)}}return n},t.prototype.$broadcast=function(t){var e="string"==typeof t;if(t=e?t:t.name,this._eventsCount[t]){var i=this.$children,n=d(arguments);e&&(n[0]={name:t,source:this});for(var r=0,s=i.length;s>r;r++){var o=i[r],a=o.$emit.apply(o,n);a&&o.$broadcast.apply(o,n)}return this}},t.prototype.$dispatch=function(t){var e=this.$emit.apply(this,arguments);if(e){var i=this.$parent,n=d(arguments);for(n[0]={name:t,source:this};i;)e=i.$emit.apply(i,n),i=e?i.$parent:null;return this}};var i=/^hook:/}function bi(t){function e(){this._isAttached=!0,this._isReady=!0,this._callHook("ready")}t.prototype.$mount=function(t){return this._isCompiled?void 0:(t=L(t),t||(t=document.createElement("div")),this._compile(t),this._initDOMHooks(),H(this.$el)?(this._callHook("attached"),e.call(this)):this.$once("hook:attached",e),this)},t.prototype.$destroy=function(t,e){this._destroy(t,e)},t.prototype.$compile=function(t,e,i,n){return De(t,this.$options,!0)(this,t,e,i,n)}}function wi(t){this._init(t)}function Ci(t,e,i){return i=i?parseInt(i,10):0,e=o(e),"number"==typeof e?t.slice(i,i+e):t}function $i(t,e,i){if(t=Ks(t),null==e)return t;if("function"==typeof e)return t.filter(e);e=(""+e).toLowerCase();for(var n,r,s,o,a="in"===i?3:2,h=Array.prototype.concat.apply([],d(arguments,a)),l=[],c=0,u=t.length;u>c;c++)if(n=t[c],s=n&&n.$value||n,o=h.length){for(;o--;)if(r=h[o],"$key"===r&&xi(n.$key,e)||xi(jt(s,r),e)){l.push(n);break}}else xi(n,e)&&l.push(n);return l}function ki(t){function e(t,e,i){var r=n[i];return r&&("$key"!==r&&(m(t)&&"$value"in t&&(t=t.$value),m(e)&&"$value"in e&&(e=e.$value)),t=m(t)?jt(t,r):t,e=m(e)?jt(e,r):e),t===e?0:t>e?s:-s}var i=null,n=void 0;t=Ks(t);var r=d(arguments,1),s=r[r.length-1];"number"==typeof s?(s=0>s?-1:1,r=r.length>1?r.slice(0,-1):r):s=1;var o=r[0];return o?("function"==typeof o?i=function(t,e){return o(t,e)*s}:(n=Array.prototype.concat.apply([],r),i=function(t,r,s){return s=s||0,s>=n.length-1?e(t,r,s):e(t,r,s)||i(t,r,s+1)}),t.slice().sort(i)):t}function xi(t,e){var i;if(g(t)){var n=Object.keys(t);for(i=n.length;i--;)if(xi(t[n[i]],e))return!0}else if(Di(t)){for(i=t.length;i--;)if(xi(t[i],e))return!0}else if(null!=t)return t.toString().toLowerCase().indexOf(e)>-1}function Ai(i){function n(t){return new Function("return function "+f(t)+" (options) { this._init(options) }")()}i.options={directives:bs,elementDirectives:Ys,filters:eo,transitions:{},components:{},partials:{},replace:!0},i.util=In,i.config=An,i.set=t,i["delete"]=e,i.nextTick=Yi,i.compiler=qs,i.FragmentFactory=se,i.internalDirectives=Hs,i.parsers={path:ir,text:$n,template:Fr,directive:gn,expression:mr},i.cid=0;var r=1;i.extend=function(t){t=t||{};var e=this,i=0===e.cid;if(i&&t._Ctor)return t._Ctor;var s=t.name||e.options.name,o=n(s||"VueComponent");return o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.cid=r++,o.options=mt(e.options,t),o["super"]=e,o.extend=e.extend,An._assetTypes.forEach(function(t){o[t]=e[t]}),s&&(o.options.components[s]=o),i&&(t._Ctor=o),o},i.use=function(t){if(!t.installed){var e=d(arguments,1);return e.unshift(this),"function"==typeof t.install?t.install.apply(t,e):t.apply(null,e),t.installed=!0,this}},i.mixin=function(t){i.options=mt(i.options,t)},An._assetTypes.forEach(function(t){i[t]=function(e,n){return n?("component"===t&&g(n)&&(n.name||(n.name=e),n=i.extend(n)),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}),v(i.transition,Tn)}var Oi=Object.prototype.hasOwnProperty,Ti=/^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/,Ni=/-(\w)/g,ji=/([a-z\d])([A-Z])/g,Ei=/(?:^|[-_\/])(\w)/g,Si=Object.prototype.toString,Fi="[object Object]",Di=Array.isArray,Pi="__proto__"in{},Ri="undefined"!=typeof window&&"[object Object]"!==Object.prototype.toString.call(window),Li=Ri&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,Hi=Ri&&window.navigator.userAgent.toLowerCase(),Ii=Hi&&Hi.indexOf("trident")>0,Mi=Hi&&Hi.indexOf("msie 9.0")>0,Vi=Hi&&Hi.indexOf("android")>0,Bi=Hi&&/(iphone|ipad|ipod|ios)/i.test(Hi),Wi=Bi&&Hi.match(/os ([\d_]+)/),zi=Wi&&Wi[1].split("_"),Ui=zi&&Number(zi[0])>=9&&Number(zi[1])>=3&&!window.indexedDB,Ji=void 0,qi=void 0,Qi=void 0,Gi=void 0;if(Ri&&!Mi){var Zi=void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend,Xi=void 0===window.onanimationend&&void 0!==window.onwebkitanimationend;Ji=Zi?"WebkitTransition":"transition",qi=Zi?"webkitTransitionEnd":"transitionend",Qi=Xi?"WebkitAnimation":"animation",Gi=Xi?"webkitAnimationEnd":"animationend"}var Yi=function(){function t(){n=!1;var t=i.slice(0);i=[];for(var e=0;e<t.length;e++)t[e]()}var e,i=[],n=!1;if("undefined"==typeof MutationObserver||Ui){var r=Ri?window:"undefined"!=typeof global?global:{};e=r.setImmediate||setTimeout}else{var s=1,o=new MutationObserver(t),a=document.createTextNode(s);o.observe(a,{characterData:!0}),e=function(){s=(s+1)%2,a.data=s}}return function(r,s){var o=s?function(){r.call(s)}:r;i.push(o),n||(n=!0,e(t,0))}}(),Ki=void 0;"undefined"!=typeof Set&&Set.toString().match(/native code/)?Ki=Set:(Ki=function(){this.set=Object.create(null)},Ki.prototype.has=function(t){return void 0!==this.set[t]},Ki.prototype.add=function(t){this.set[t]=1},Ki.prototype.clear=function(){this.set=Object.create(null)});var tn=$.prototype;tn.put=function(t,e){var i,n=this.get(t,!0);return n||(this.size===this.limit&&(i=this.shift()),n={key:t},this._keymap[t]=n,this.tail?(this.tail.newer=n,n.older=this.tail):this.head=n,this.tail=n,this.size++),n.value=e,i},tn.shift=function(){var t=this.head;return t&&(this.head=this.head.newer,this.head.older=void 0,t.newer=t.older=void 0,this._keymap[t.key]=void 0,this.size--),t},tn.get=function(t,e){var i=this._keymap[t];if(void 0!==i)return i===this.tail?e?i:i.value:(i.newer&&(i===this.head&&(this.head=i.newer),i.newer.older=i.older),i.older&&(i.older.newer=i.newer),i.newer=void 0,i.older=this.tail,this.tail&&(this.tail.newer=i),this.tail=i,e?i:i.value)};var en,nn,rn,sn,on,an,hn,ln,cn,un,fn,pn,dn=new $(1e3),vn=/[^\s'"]+|'[^']*'|"[^"]*"/g,mn=/^in$|^-?\d+/,gn=Object.freeze({parseDirective:A}),_n=/[-.*+?^${}()|[\]\/\\]/g,yn=void 0,bn=void 0,wn=void 0,Cn=/[^|]\|[^|]/,$n=Object.freeze({compileRegex:T,parseText:N,tokensToExp:j}),kn=["{{","}}"],xn=["{{{","}}}"],An=Object.defineProperties({debug:!1,silent:!1,async:!0,warnExpressionErrors:!0,devtools:!1,_delimitersChanged:!0,_assetTypes:["component","directive","elementDirective","filter","transition","partial"],_propBindingModes:{ONE_WAY:0,TWO_WAY:1,ONE_TIME:2},_maxUpdateCount:100},{delimiters:{get:function(){return kn},set:function(t){kn=t,T()},configurable:!0,enumerable:!0},unsafeDelimiters:{get:function(){return xn},set:function(t){xn=t,T()},configurable:!0,enumerable:!0}}),On=void 0,Tn=Object.freeze({appendWithTransition:F,beforeWithTransition:D,removeWithTransition:P,applyTransition:R}),Nn=/^v-ref:/,jn=/^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i,En=/^(slot|partial|component)$/i,Sn=An.optionMergeStrategies=Object.create(null);Sn.data=function(t,e,i){return i?t||e?function(){var n="function"==typeof e?e.call(i):e,r="function"==typeof t?t.call(i):void 0;return n?ut(n,r):r}:void 0:e?"function"!=typeof e?t:t?function(){return ut(e.call(this),t.call(this))}:e:t},Sn.el=function(t,e,i){if(i||!e||"function"==typeof e){var n=e||t;return i&&"function"==typeof n?n.call(i):n}},Sn.init=Sn.created=Sn.ready=Sn.attached=Sn.detached=Sn.beforeCompile=Sn.compiled=Sn.beforeDestroy=Sn.destroyed=Sn.activate=function(t,e){return e?t?t.concat(e):Di(e)?e:[e]:t},An._assetTypes.forEach(function(t){Sn[t+"s"]=ft}),Sn.watch=Sn.events=function(t,e){if(!e)return t;if(!t)return e;var i={};v(i,t);for(var n in e){var r=i[n],s=e[n];r&&!Di(r)&&(r=[r]),i[n]=r?r.concat(s):[s]}return i},Sn.props=Sn.methods=Sn.computed=function(t,e){if(!e)return t;if(!t)return e;var i=Object.create(null);return v(i,t),v(i,e),i};var Fn=function(t,e){return void 0===e?t:e},Dn=0;_t.target=null,_t.prototype.addSub=function(t){this.subs.push(t)},_t.prototype.removeSub=function(t){this.subs.$remove(t)},_t.prototype.depend=function(){_t.target.addDep(this)},_t.prototype.notify=function(){for(var t=d(this.subs),e=0,i=t.length;i>e;e++)t[e].update()};var Pn=Array.prototype,Rn=Object.create(Pn);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=Pn[t];_(Rn,t,function(){for(var i=arguments.length,n=new Array(i);i--;)n[i]=arguments[i];var r,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":r=n;break;case"unshift":r=n;break;case"splice":r=n.slice(2)}return r&&o.observeArray(r),o.dep.notify(),s})}),_(Pn,"$set",function(t,e){return t>=this.length&&(this.length=Number(t)+1),this.splice(t,1,e)[0]}),_(Pn,"$remove",function(t){if(this.length){var e=b(this,t);return e>-1?this.splice(e,1):void 0}});var Ln=Object.getOwnPropertyNames(Rn),Hn=!0;bt.prototype.walk=function(t){for(var e=Object.keys(t),i=0,n=e.length;n>i;i++)this.convert(e[i],t[e[i]])},bt.prototype.observeArray=function(t){for(var e=0,i=t.length;i>e;e++)$t(t[e])},bt.prototype.convert=function(t,e){kt(this.value,t,e)},bt.prototype.addVm=function(t){(this.vms||(this.vms=[])).push(t)},bt.prototype.removeVm=function(t){this.vms.$remove(t)};var In=Object.freeze({defineReactive:kt,set:t,del:e,hasOwn:i,isLiteral:n,isReserved:r,_toString:s,toNumber:o,toBoolean:a,stripQuotes:h,camelize:l,hyphenate:u,classify:f,bind:p,toArray:d,extend:v,isObject:m,isPlainObject:g,def:_,debounce:y,indexOf:b,cancellable:w,looseEqual:C,isArray:Di,hasProto:Pi,inBrowser:Ri,devtools:Li,isIE:Ii,isIE9:Mi,isAndroid:Vi,isIos:Bi,iosVersionMatch:Wi,iosVersion:zi,hasMutationObserverBug:Ui,get transitionProp(){return Ji},get transitionEndEvent(){return qi},get animationProp(){return Qi},get animationEndEvent(){return Gi},nextTick:Yi,get _Set(){return Ki},query:L,inDoc:H,getAttr:I,getBindAttr:M,hasBindAttr:V,before:B,after:W,remove:z,prepend:U,replace:J,on:q,off:Q,setClass:Z,addClass:X,removeClass:Y,extractContent:K,trimNode:tt,isTemplate:it,createAnchor:nt,findRef:rt,mapNodeRange:st,removeNodeRange:ot,isFragment:at,getOuterHTML:ht,mergeOptions:mt,resolveAsset:gt,checkComponentAttr:lt,commonTagRE:jn,reservedTagRE:En,warn:On}),Mn=0,Vn=new $(1e3),Bn=0,Wn=1,zn=2,Un=3,Jn=0,qn=1,Qn=2,Gn=3,Zn=4,Xn=5,Yn=6,Kn=7,tr=8,er=[];er[Jn]={ws:[Jn],ident:[Gn,Bn],"[":[Zn],eof:[Kn]},er[qn]={ws:[qn],".":[Qn],"[":[Zn],eof:[Kn]},er[Qn]={ws:[Qn],ident:[Gn,Bn]},er[Gn]={ident:[Gn,Bn],0:[Gn,Bn],number:[Gn,Bn],ws:[qn,Wn],".":[Qn,Wn],"[":[Zn,Wn],eof:[Kn,Wn]},er[Zn]={"'":[Xn,Bn],'"':[Yn,Bn],"[":[Zn,zn],"]":[qn,Un],eof:tr,"else":[Zn,Bn]},er[Xn]={"'":[Zn,Bn],eof:tr,"else":[Xn,Bn]},er[Yn]={'"':[Zn,Bn],eof:tr,"else":[Yn,Bn]};var ir=Object.freeze({parsePath:Nt,getPath:jt,setPath:Et}),nr=new $(1e3),rr="Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",sr=new RegExp("^("+rr.replace(/,/g,"\\b|")+"\\b)"),or="break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,protected,static,interface,private,public",ar=new RegExp("^("+or.replace(/,/g,"\\b|")+"\\b)"),hr=/\s/g,lr=/\n/g,cr=/[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g,ur=/"(\d+)"/g,fr=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,pr=/[^\w$\.](?:[A-Za-z_$][\w$]*)/g,dr=/^(?:true|false|null|undefined|Infinity|NaN)$/,vr=[],mr=Object.freeze({parseExpression:It,isSimplePath:Mt}),gr=[],_r=[],yr={},br={},wr=!1,Cr=0;Ut.prototype.get=function(){this.beforeGet();var t,e=this.scope||this.vm;try{t=this.getter.call(e,e)}catch(i){}return this.deep&&Jt(t),this.preProcess&&(t=this.preProcess(t)),this.filters&&(t=e._applyFilters(t,null,this.filters,!1)),this.postProcess&&(t=this.postProcess(t)),this.afterGet(),t},Ut.prototype.set=function(t){var e=this.scope||this.vm;this.filters&&(t=e._applyFilters(t,this.value,this.filters,!0));try{this.setter.call(e,e,t)}catch(i){}var n=e.$forContext;if(n&&n.alias===this.expression){if(n.filters)return;n._withLock(function(){e.$key?n.rawValue[e.$key]=t:n.rawValue.$set(e.$index,t)})}},Ut.prototype.beforeGet=function(){_t.target=this},Ut.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Ut.prototype.afterGet=function(){_t.target=null;for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var i=this.depIds;this.depIds=this.newDepIds,this.newDepIds=i,this.newDepIds.clear(),i=this.deps,this.deps=this.newDeps,this.newDeps=i,this.newDeps.length=0},Ut.prototype.update=function(t){this.lazy?this.dirty=!0:this.sync||!An.async?this.run():(this.shallow=this.queued?t?this.shallow:!1:!!t,this.queued=!0,zt(this))},Ut.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||(m(t)||this.deep)&&!this.shallow){var e=this.value;this.value=t;this.prevError;this.cb.call(this.vm,t,e)}this.queued=this.shallow=!1}},Ut.prototype.evaluate=function(){var t=_t.target;this.value=this.get(),this.dirty=!1,_t.target=t},Ut.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},Ut.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||this.vm._vForRemoving||this.vm._watchers.$remove(this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1,this.vm=this.cb=this.value=null}};var $r=new Ki,kr={bind:function(){this.attr=3===this.el.nodeType?"data":"textContent"},update:function(t){this.el[this.attr]=s(t)}},xr=new $(1e3),Ar=new $(1e3),Or={efault:[0,"",""],legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]};Or.td=Or.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],Or.option=Or.optgroup=[1,'<select multiple="multiple">',"</select>"],Or.thead=Or.tbody=Or.colgroup=Or.caption=Or.tfoot=[1,"<table>","</table>"],Or.g=Or.defs=Or.symbol=Or.use=Or.image=Or.text=Or.circle=Or.ellipse=Or.line=Or.path=Or.polygon=Or.polyline=Or.rect=[1,'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">',"</svg>"];var Tr=/<([\w:-]+)/,Nr=/&#?\w+?;/,jr=/<!--/,Er=function(){if(Ri){var t=document.createElement("div");return t.innerHTML="<template>1</template>",!t.cloneNode(!0).firstChild.innerHTML}return!1}(),Sr=function(){if(Ri){var t=document.createElement("textarea");return t.placeholder="t","t"===t.cloneNode(!0).value}return!1}(),Fr=Object.freeze({cloneNode:Zt,parseTemplate:Xt}),Dr={bind:function(){8===this.el.nodeType&&(this.nodes=[],this.anchor=nt("v-html"),J(this.el,this.anchor))},update:function(t){t=s(t),this.nodes?this.swap(t):this.el.innerHTML=t},swap:function(t){for(var e=this.nodes.length;e--;)z(this.nodes[e]);var i=Xt(t,!0,!0);this.nodes=d(i.childNodes),B(i,this.anchor)}};Yt.prototype.callHook=function(t){var e,i;for(e=0,i=this.childFrags.length;i>e;e++)this.childFrags[e].callHook(t);for(e=0,i=this.children.length;i>e;e++)t(this.children[e])},Yt.prototype.beforeRemove=function(){var t,e;for(t=0,e=this.childFrags.length;e>t;t++)this.childFrags[t].beforeRemove(!1);for(t=0,e=this.children.length;e>t;t++)this.children[t].$destroy(!1,!0);var i=this.unlink.dirs;for(t=0,e=i.length;e>t;t++)i[t]._watcher&&i[t]._watcher.teardown()},Yt.prototype.destroy=function(){this.parentFrag&&this.parentFrag.childFrags.$remove(this),this.node.__v_frag=null,this.unlink()};var Pr=new $(5e3);se.prototype.create=function(t,e,i){var n=Zt(this.template);return new Yt(this.linker,this.vm,n,t,e,i)};var Rr=700,Lr=800,Hr=850,Ir=1100,Mr=1500,Vr=1500,Br=1750,Wr=2100,zr=2200,Ur=2300,Jr=0,qr={priority:zr,terminal:!0,params:["track-by","stagger","enter-stagger","leave-stagger"],bind:function(){var t=this.expression.match(/(.*) (?:in|of) (.*)/);if(t){var e=t[1].match(/\((.*),(.*)\)/);e?(this.iterator=e[1].trim(),this.alias=e[2].trim()):this.alias=t[1].trim(),this.expression=t[2]}if(this.alias){this.id="__v-for__"+ ++Jr;var i=this.el.tagName;this.isOption=("OPTION"===i||"OPTGROUP"===i)&&"SELECT"===this.el.parentNode.tagName,this.start=nt("v-for-start"),this.end=nt("v-for-end"),J(this.el,this.end),B(this.start,this.end),this.cache=Object.create(null),this.factory=new se(this.vm,this.el)}},update:function(t){this.diff(t),this.updateRef(),this.updateModel()},diff:function(t){var e,n,r,s,o,a,h=t[0],l=this.fromObject=m(h)&&i(h,"$key")&&i(h,"$value"),c=this.params.trackBy,u=this.frags,f=this.frags=new Array(t.length),p=this.alias,d=this.iterator,v=this.start,g=this.end,_=H(v),y=!u;for(e=0,n=t.length;n>e;e++)h=t[e],s=l?h.$key:null,o=l?h.$value:h,a=!m(o),r=!y&&this.getCachedFrag(o,e,s),r?(r.reused=!0,r.scope.$index=e,s&&(r.scope.$key=s),d&&(r.scope[d]=null!==s?s:e),(c||l||a)&&yt(function(){r.scope[p]=o})):(r=this.create(o,p,e,s),r.fresh=!y),f[e]=r,y&&r.before(g);if(!y){var b=0,w=u.length-f.length;for(this.vm._vForRemoving=!0,e=0,n=u.length;n>e;e++)r=u[e],r.reused||(this.deleteCachedFrag(r),this.remove(r,b++,w,_));this.vm._vForRemoving=!1,b&&(this.vm._watchers=this.vm._watchers.filter(function(t){return t.active}));var C,$,k,x=0;for(e=0,n=f.length;n>e;e++)r=f[e],C=f[e-1],$=C?C.staggerCb?C.staggerAnchor:C.end||C.node:v,r.reused&&!r.staggerCb?(k=oe(r,v,this.id),k===C||k&&oe(k,v,this.id)===C||this.move(r,$)):this.insert(r,x++,$,_),r.reused=r.fresh=!1}},create:function(t,e,i,n){var r=this._host,s=this._scope||this.vm,o=Object.create(s);o.$refs=Object.create(s.$refs),o.$els=Object.create(s.$els),o.$parent=s,o.$forContext=this,yt(function(){kt(o,e,t)}),kt(o,"$index",i),n?kt(o,"$key",n):o.$key&&_(o,"$key",null),this.iterator&&kt(o,this.iterator,null!==n?n:i);var a=this.factory.create(r,o,this._frag);return a.forId=this.id,this.cacheFrag(t,a,i,n),a},updateRef:function(){var t=this.descriptor.ref;if(t){var e,i=(this._scope||this.vm).$refs;this.fromObject?(e={},this.frags.forEach(function(t){e[t.scope.$key]=ae(t)})):e=this.frags.map(ae),i[t]=e}},updateModel:function(){if(this.isOption){var t=this.start.parentNode,e=t&&t.__v_model;e&&e.forceUpdate()}},insert:function(t,e,i,n){t.staggerCb&&(t.staggerCb.cancel(),t.staggerCb=null);var r=this.getStagger(t,e,null,"enter");if(n&&r){var s=t.staggerAnchor;s||(s=t.staggerAnchor=nt("stagger-anchor"),s.__v_frag=t),W(s,i);var o=t.staggerCb=w(function(){t.staggerCb=null,t.before(s),z(s)});setTimeout(o,r)}else{var a=i.nextSibling;a||(W(this.end,i),a=this.end),t.before(a)}},remove:function(t,e,i,n){if(t.staggerCb)return t.staggerCb.cancel(),void(t.staggerCb=null);var r=this.getStagger(t,e,i,"leave");if(n&&r){var s=t.staggerCb=w(function(){t.staggerCb=null,t.remove()});setTimeout(s,r)}else t.remove()},move:function(t,e){e.nextSibling||this.end.parentNode.appendChild(this.end),t.before(e.nextSibling,!1)},cacheFrag:function(t,e,n,r){var s,o=this.params.trackBy,a=this.cache,h=!m(t);r||o||h?(s=le(n,r,t,o),a[s]||(a[s]=e)):(s=this.id,i(t,s)?null===t[s]&&(t[s]=e):Object.isExtensible(t)&&_(t,s,e)),e.raw=t},getCachedFrag:function(t,e,i){var n,r=this.params.trackBy,s=!m(t);if(i||r||s){var o=le(e,i,t,r);n=this.cache[o]}else n=t[this.id];return n&&(n.reused||n.fresh),n},deleteCachedFrag:function(t){var e=t.raw,n=this.params.trackBy,r=t.scope,s=r.$index,o=i(r,"$key")&&r.$key,a=!m(e);if(n||o||a){var h=le(s,o,e,n);this.cache[h]=null}else e[this.id]=null,t.raw=null},getStagger:function(t,e,i,n){n+="Stagger";var r=t.node.__v_trans,s=r&&r.hooks,o=s&&(s[n]||s.stagger);return o?o.call(t,e,i):e*parseInt(this.params[n]||this.params.stagger,10)},_preProcess:function(t){return this.rawValue=t,t},_postProcess:function(t){if(Di(t))return t;if(g(t)){for(var e,i=Object.keys(t),n=i.length,r=new Array(n);n--;)e=i[n],r[n]={$key:e,$value:t[e]};return r}return"number"!=typeof t||isNaN(t)||(t=he(t)),t||[]},unbind:function(){if(this.descriptor.ref&&((this._scope||this.vm).$refs[this.descriptor.ref]=null),this.frags)for(var t,e=this.frags.length;e--;)t=this.frags[e],this.deleteCachedFrag(t),t.destroy()}},Qr={priority:Wr,terminal:!0,bind:function(){var t=this.el;if(t.__vue__)this.invalid=!0;else{var e=t.nextElementSibling;e&&null!==I(e,"v-else")&&(z(e),this.elseEl=e),this.anchor=nt("v-if"),J(t,this.anchor)}},update:function(t){this.invalid||(t?this.frag||this.insert():this.remove())},insert:function(){this.elseFrag&&(this.elseFrag.remove(),this.elseFrag=null),this.factory||(this.factory=new se(this.vm,this.el)),this.frag=this.factory.create(this._host,this._scope,this._frag),this.frag.before(this.anchor)},remove:function(){this.frag&&(this.frag.remove(),this.frag=null),this.elseEl&&!this.elseFrag&&(this.elseFactory||(this.elseFactory=new se(this.elseEl._context||this.vm,this.elseEl)),this.elseFrag=this.elseFactory.create(this._host,this._scope,this._frag),this.elseFrag.before(this.anchor))},unbind:function(){this.frag&&this.frag.destroy(),this.elseFrag&&this.elseFrag.destroy()}},Gr={bind:function(){var t=this.el.nextElementSibling;t&&null!==I(t,"v-else")&&(this.elseEl=t)},update:function(t){this.apply(this.el,t),this.elseEl&&this.apply(this.elseEl,!t)},apply:function(t,e){function i(){t.style.display=e?"":"none"}H(t)?R(t,e?1:-1,i,this.vm):i()}},Zr={bind:function(){var t=this,e=this.el,i="range"===e.type,n=this.params.lazy,r=this.params.number,s=this.params.debounce,a=!1;if(Vi||i||(this.on("compositionstart",function(){a=!0}),this.on("compositionend",function(){a=!1,n||t.listener()})),this.focused=!1,i||n||(this.on("focus",function(){t.focused=!0}),this.on("blur",function(){t.focused=!1,t._frag&&!t._frag.inserted||t.rawListener()})),this.listener=this.rawListener=function(){if(!a&&t._bound){var n=r||i?o(e.value):e.value;t.set(n),Yi(function(){t._bound&&!t.focused&&t.update(t._watcher.value)})}},s&&(this.listener=y(this.listener,s)),this.hasjQuery="function"==typeof jQuery,this.hasjQuery){var h=jQuery.fn.on?"on":"bind";jQuery(e)[h]("change",this.rawListener),n||jQuery(e)[h]("input",this.listener)}else this.on("change",this.rawListener),n||this.on("input",this.listener);!n&&Mi&&(this.on("cut",function(){Yi(t.listener)}),this.on("keyup",function(e){46!==e.keyCode&&8!==e.keyCode||t.listener()})),(e.hasAttribute("value")||"TEXTAREA"===e.tagName&&e.value.trim())&&(this.afterBind=this.listener)},update:function(t){t=s(t),t!==this.el.value&&(this.el.value=t)},unbind:function(){var t=this.el;if(this.hasjQuery){var e=jQuery.fn.off?"off":"unbind";jQuery(t)[e]("change",this.listener),jQuery(t)[e]("input",this.listener)}}},Xr={bind:function(){var t=this,e=this.el;this.getValue=function(){if(e.hasOwnProperty("_value"))return e._value;var i=e.value;return t.params.number&&(i=o(i)),i},this.listener=function(){t.set(t.getValue())},this.on("change",this.listener),e.hasAttribute("checked")&&(this.afterBind=this.listener)},update:function(t){this.el.checked=C(t,this.getValue())}},Yr={bind:function(){var t=this,e=this,i=this.el;this.forceUpdate=function(){e._watcher&&e.update(e._watcher.get())};var n=this.multiple=i.hasAttribute("multiple");this.listener=function(){var t=ce(i,n);t=e.params.number?Di(t)?t.map(o):o(t):t,e.set(t)},this.on("change",this.listener);var r=ce(i,n,!0);(n&&r.length||!n&&null!==r)&&(this.afterBind=this.listener),this.vm.$on("hook:attached",function(){Yi(t.forceUpdate)}),H(i)||Yi(this.forceUpdate)},update:function(t){var e=this.el;e.selectedIndex=-1;for(var i,n,r=this.multiple&&Di(t),s=e.options,o=s.length;o--;)i=s[o],n=i.hasOwnProperty("_value")?i._value:i.value,i.selected=r?ue(t,n)>-1:C(t,n)},unbind:function(){this.vm.$off("hook:attached",this.forceUpdate)}},Kr={bind:function(){function t(){var t=i.checked;return t&&i.hasOwnProperty("_trueValue")?i._trueValue:!t&&i.hasOwnProperty("_falseValue")?i._falseValue:t}var e=this,i=this.el;this.getValue=function(){return i.hasOwnProperty("_value")?i._value:e.params.number?o(i.value):i.value},this.listener=function(){var n=e._watcher.value;if(Di(n)){var r=e.getValue();i.checked?b(n,r)<0&&n.push(r):n.$remove(r)}else e.set(t())},this.on("change",this.listener),i.hasAttribute("checked")&&(this.afterBind=this.listener)},update:function(t){var e=this.el;Di(t)?e.checked=b(t,this.getValue())>-1:e.hasOwnProperty("_trueValue")?e.checked=C(t,e._trueValue):e.checked=!!t}},ts={text:Zr,radio:Xr,select:Yr,checkbox:Kr},es={priority:Lr,twoWay:!0,handlers:ts,params:["lazy","number","debounce"],bind:function(){this.checkFilters(),this.hasRead&&!this.hasWrite;var t,e=this.el,i=e.tagName;if("INPUT"===i)t=ts[e.type]||ts.text;else if("SELECT"===i)t=ts.select;else{if("TEXTAREA"!==i)return;t=ts.text}e.__v_model=this,t.bind.call(this),this.update=t.update,this._unbind=t.unbind},checkFilters:function(){var t=this.filters;if(t)for(var e=t.length;e--;){var i=gt(this.vm.$options,"filters",t[e].name);("function"==typeof i||i.read)&&(this.hasRead=!0),i.write&&(this.hasWrite=!0)}},unbind:function(){this.el.__v_model=null,this._unbind&&this._unbind()}},is={esc:27,tab:9,enter:13,space:32,"delete":[8,46],up:38,left:37,right:39,down:40},ns={priority:Rr,acceptStatement:!0,keyCodes:is,bind:function(){if("IFRAME"===this.el.tagName&&"load"!==this.arg){var t=this;this.iframeBind=function(){q(t.el.contentWindow,t.arg,t.handler,t.modifiers.capture)},this.on("load",this.iframeBind)}},update:function(t){if(this.descriptor.raw||(t=function(){}),"function"==typeof t){this.modifiers.stop&&(t=pe(t)),this.modifiers.prevent&&(t=de(t)),this.modifiers.self&&(t=ve(t));var e=Object.keys(this.modifiers).filter(function(t){return"stop"!==t&&"prevent"!==t&&"self"!==t&&"capture"!==t});e.length&&(t=fe(t,e)),this.reset(),this.handler=t,this.iframeBind?this.iframeBind():q(this.el,this.arg,this.handler,this.modifiers.capture)}},reset:function(){var t=this.iframeBind?this.el.contentWindow:this.el;this.handler&&Q(t,this.arg,this.handler)},unbind:function(){this.reset()}},rs=["-webkit-","-moz-","-ms-"],ss=["Webkit","Moz","ms"],os=/!important;?$/,as=Object.create(null),hs=null,ls={deep:!0,update:function(t){"string"==typeof t?this.el.style.cssText=t:Di(t)?this.handleObject(t.reduce(v,{})):this.handleObject(t||{})},handleObject:function(t){var e,i,n=this.cache||(this.cache={});for(e in n)e in t||(this.handleSingle(e,null),delete n[e]);for(e in t)i=t[e],i!==n[e]&&(n[e]=i,this.handleSingle(e,i))},handleSingle:function(t,e){if(t=me(t))if(null!=e&&(e+=""),e){var i=os.test(e)?"important":"";i?(e=e.replace(os,"").trim(),this.el.style.setProperty(t.kebab,e,i)):this.el.style[t.camel]=e}else this.el.style[t.camel]=""}},cs="http://www.w3.org/1999/xlink",us=/^xlink:/,fs=/^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/,ps=/^(?:value|checked|selected|muted)$/,ds=/^(?:draggable|contenteditable|spellcheck)$/,vs={value:"_value","true-value":"_trueValue","false-value":"_falseValue"},ms={priority:Hr,bind:function(){var t=this.arg,e=this.el.tagName;t||(this.deep=!0);var i=this.descriptor,n=i.interp;n&&(i.hasOneTime&&(this.expression=j(n,this._scope||this.vm)),(fs.test(t)||"name"===t&&("PARTIAL"===e||"SLOT"===e))&&(this.el.removeAttribute(t),this.invalid=!0))},update:function(t){
if(!this.invalid){var e=this.arg;this.arg?this.handleSingle(e,t):this.handleObject(t||{})}},handleObject:ls.handleObject,handleSingle:function(t,e){var i=this.el,n=this.descriptor.interp;if(this.modifiers.camel&&(t=l(t)),!n&&ps.test(t)&&t in i){var r="value"===t&&null==e?"":e;i[t]!==r&&(i[t]=r)}var s=vs[t];if(!n&&s){i[s]=e;var o=i.__v_model;o&&o.listener()}return"value"===t&&"TEXTAREA"===i.tagName?void i.removeAttribute(t):void(ds.test(t)?i.setAttribute(t,e?"true":"false"):null!=e&&e!==!1?"class"===t?(i.__v_trans&&(e+=" "+i.__v_trans.id+"-transition"),Z(i,e)):us.test(t)?i.setAttributeNS(cs,t,e===!0?"":e):i.setAttribute(t,e===!0?"":e):i.removeAttribute(t))}},gs={priority:Mr,bind:function(){if(this.arg){var t=this.id=l(this.arg),e=(this._scope||this.vm).$els;i(e,t)?e[t]=this.el:kt(e,t,this.el)}},unbind:function(){var t=(this._scope||this.vm).$els;t[this.id]===this.el&&(t[this.id]=null)}},_s={bind:function(){}},ys={bind:function(){var t=this.el;this.vm.$once("pre-hook:compiled",function(){t.removeAttribute("v-cloak")})}},bs={text:kr,html:Dr,"for":qr,"if":Qr,show:Gr,model:es,on:ns,bind:ms,el:gs,ref:_s,cloak:ys},ws={deep:!0,update:function(t){t?"string"==typeof t?this.setClass(t.trim().split(/\s+/)):this.setClass(_e(t)):this.cleanup()},setClass:function(t){this.cleanup(t);for(var e=0,i=t.length;i>e;e++){var n=t[e];n&&ye(this.el,n,X)}this.prevKeys=t},cleanup:function(t){var e=this.prevKeys;if(e)for(var i=e.length;i--;){var n=e[i];(!t||t.indexOf(n)<0)&&ye(this.el,n,Y)}}},Cs={priority:Vr,params:["keep-alive","transition-mode","inline-template"],bind:function(){this.el.__vue__||(this.keepAlive=this.params.keepAlive,this.keepAlive&&(this.cache={}),this.params.inlineTemplate&&(this.inlineTemplate=K(this.el,!0)),this.pendingComponentCb=this.Component=null,this.pendingRemovals=0,this.pendingRemovalCb=null,this.anchor=nt("v-component"),J(this.el,this.anchor),this.el.removeAttribute("is"),this.el.removeAttribute(":is"),this.descriptor.ref&&this.el.removeAttribute("v-ref:"+u(this.descriptor.ref)),this.literal&&this.setComponent(this.expression))},update:function(t){this.literal||this.setComponent(t)},setComponent:function(t,e){if(this.invalidatePending(),t){var i=this;this.resolveComponent(t,function(){i.mountComponent(e)})}else this.unbuild(!0),this.remove(this.childVM,e),this.childVM=null},resolveComponent:function(t,e){var i=this;this.pendingComponentCb=w(function(n){i.ComponentName=n.options.name||("string"==typeof t?t:null),i.Component=n,e()}),this.vm._resolveComponent(t,this.pendingComponentCb)},mountComponent:function(t){this.unbuild(!0);var e=this,i=this.Component.options.activate,n=this.getCached(),r=this.build();i&&!n?(this.waitingFor=r,be(i,r,function(){e.waitingFor===r&&(e.waitingFor=null,e.transition(r,t))})):(n&&r._updateRef(),this.transition(r,t))},invalidatePending:function(){this.pendingComponentCb&&(this.pendingComponentCb.cancel(),this.pendingComponentCb=null)},build:function(t){var e=this.getCached();if(e)return e;if(this.Component){var i={name:this.ComponentName,el:Zt(this.el),template:this.inlineTemplate,parent:this._host||this.vm,_linkerCachable:!this.inlineTemplate,_ref:this.descriptor.ref,_asComponent:!0,_isRouterView:this._isRouterView,_context:this.vm,_scope:this._scope,_frag:this._frag};t&&v(i,t);var n=new this.Component(i);return this.keepAlive&&(this.cache[this.Component.cid]=n),n}},getCached:function(){return this.keepAlive&&this.cache[this.Component.cid]},unbuild:function(t){this.waitingFor&&(this.keepAlive||this.waitingFor.$destroy(),this.waitingFor=null);var e=this.childVM;return!e||this.keepAlive?void(e&&(e._inactive=!0,e._updateRef(!0))):void e.$destroy(!1,t)},remove:function(t,e){var i=this.keepAlive;if(t){this.pendingRemovals++,this.pendingRemovalCb=e;var n=this;t.$remove(function(){n.pendingRemovals--,i||t._cleanup(),!n.pendingRemovals&&n.pendingRemovalCb&&(n.pendingRemovalCb(),n.pendingRemovalCb=null)})}else e&&e()},transition:function(t,e){var i=this,n=this.childVM;switch(n&&(n._inactive=!0),t._inactive=!1,this.childVM=t,i.params.transitionMode){case"in-out":t.$before(i.anchor,function(){i.remove(n,e)});break;case"out-in":i.remove(n,function(){t.$before(i.anchor,e)});break;default:i.remove(n),t.$before(i.anchor,e)}},unbind:function(){if(this.invalidatePending(),this.unbuild(),this.cache){for(var t in this.cache)this.cache[t].$destroy();this.cache=null}}},$s=An._propBindingModes,ks={},xs=/^[$_a-zA-Z]+[\w$]*$/,As=An._propBindingModes,Os={bind:function(){var t=this.vm,e=t._context,i=this.descriptor.prop,n=i.path,r=i.parentPath,s=i.mode===As.TWO_WAY,o=this.parentWatcher=new Ut(e,r,function(e){xe(t,i,e)},{twoWay:s,filters:i.filters,scope:this._scope});if(ke(t,i,o.value),s){var a=this;t.$once("pre-hook:created",function(){a.childWatcher=new Ut(t,n,function(t){o.set(t)},{sync:!0})})}},unbind:function(){this.parentWatcher.teardown(),this.childWatcher&&this.childWatcher.teardown()}},Ts=[],Ns=!1,js="transition",Es="animation",Ss=Ji+"Duration",Fs=Qi+"Duration",Ds=Ri&&window.requestAnimationFrame,Ps=Ds?function(t){Ds(function(){Ds(t)})}:function(t){setTimeout(t,50)},Rs=Se.prototype;Rs.enter=function(t,e){this.cancelPending(),this.callHook("beforeEnter"),this.cb=e,X(this.el,this.enterClass),t(),this.entered=!1,this.callHookWithCb("enter"),this.entered||(this.cancel=this.hooks&&this.hooks.enterCancelled,je(this.enterNextTick))},Rs.enterNextTick=function(){var t=this;this.justEntered=!0,Ps(function(){t.justEntered=!1});var e=this.enterDone,i=this.getCssTransitionType(this.enterClass);this.pendingJsCb?i===js&&Y(this.el,this.enterClass):i===js?(Y(this.el,this.enterClass),this.setupCssCb(qi,e)):i===Es?this.setupCssCb(Gi,e):e()},Rs.enterDone=function(){this.entered=!0,this.cancel=this.pendingJsCb=null,Y(this.el,this.enterClass),this.callHook("afterEnter"),this.cb&&this.cb()},Rs.leave=function(t,e){this.cancelPending(),this.callHook("beforeLeave"),this.op=t,this.cb=e,X(this.el,this.leaveClass),this.left=!1,this.callHookWithCb("leave"),this.left||(this.cancel=this.hooks&&this.hooks.leaveCancelled,this.op&&!this.pendingJsCb&&(this.justEntered?this.leaveDone():je(this.leaveNextTick)))},Rs.leaveNextTick=function(){var t=this.getCssTransitionType(this.leaveClass);if(t){var e=t===js?qi:Gi;this.setupCssCb(e,this.leaveDone)}else this.leaveDone()},Rs.leaveDone=function(){this.left=!0,this.cancel=this.pendingJsCb=null,this.op(),Y(this.el,this.leaveClass),this.callHook("afterLeave"),this.cb&&this.cb(),this.op=null},Rs.cancelPending=function(){this.op=this.cb=null;var t=!1;this.pendingCssCb&&(t=!0,Q(this.el,this.pendingCssEvent,this.pendingCssCb),this.pendingCssEvent=this.pendingCssCb=null),this.pendingJsCb&&(t=!0,this.pendingJsCb.cancel(),this.pendingJsCb=null),t&&(Y(this.el,this.enterClass),Y(this.el,this.leaveClass)),this.cancel&&(this.cancel.call(this.vm,this.el),this.cancel=null)},Rs.callHook=function(t){this.hooks&&this.hooks[t]&&this.hooks[t].call(this.vm,this.el)},Rs.callHookWithCb=function(t){var e=this.hooks&&this.hooks[t];e&&(e.length>1&&(this.pendingJsCb=w(this[t+"Done"])),e.call(this.vm,this.el,this.pendingJsCb))},Rs.getCssTransitionType=function(t){if(!(!qi||document.hidden||this.hooks&&this.hooks.css===!1||Fe(this.el))){var e=this.type||this.typeCache[t];if(e)return e;var i=this.el.style,n=window.getComputedStyle(this.el),r=i[Ss]||n[Ss];if(r&&"0s"!==r)e=js;else{var s=i[Fs]||n[Fs];s&&"0s"!==s&&(e=Es)}return e&&(this.typeCache[t]=e),e}},Rs.setupCssCb=function(t,e){this.pendingCssEvent=t;var i=this,n=this.el,r=this.pendingCssCb=function(s){s.target===n&&(Q(n,t,r),i.pendingCssEvent=i.pendingCssCb=null,!i.pendingJsCb&&e&&e())};q(n,t,r)};var Ls={priority:Ir,update:function(t,e){var i=this.el,n=gt(this.vm.$options,"transitions",t);t=t||"v",e=e||"v",i.__v_trans=new Se(i,t,n,this.vm),Y(i,e+"-transition"),X(i,t+"-transition")}},Hs={style:ls,"class":ws,component:Cs,prop:Os,transition:Ls},Is=/^v-bind:|^:/,Ms=/^v-on:|^@/,Vs=/^v-([^:]+)(?:$|:(.*)$)/,Bs=/\.[^\.]+/g,Ws=/^(v-bind:|:)?transition$/,zs=1e3,Us=2e3;Ye.terminal=!0;var Js=/[^\w\-:\.]/,qs=Object.freeze({compile:De,compileAndLinkProps:Ie,compileRoot:Me,transclude:si,resolveSlots:li}),Qs=/^v-on:|^@/;di.prototype._bind=function(){var t=this.name,e=this.descriptor;if(("cloak"!==t||this.vm._isCompiled)&&this.el&&this.el.removeAttribute){var i=e.attr||"v-"+t;this.el.removeAttribute(i)}var n=e.def;if("function"==typeof n?this.update=n:v(this,n),this._setupParams(),this.bind&&this.bind(),this._bound=!0,this.literal)this.update&&this.update(e.raw);else if((this.expression||this.modifiers)&&(this.update||this.twoWay)&&!this._checkStatement()){var r=this;this.update?this._update=function(t,e){r._locked||r.update(t,e)}:this._update=pi;var s=this._preProcess?p(this._preProcess,this):null,o=this._postProcess?p(this._postProcess,this):null,a=this._watcher=new Ut(this.vm,this.expression,this._update,{filters:this.filters,twoWay:this.twoWay,deep:this.deep,preProcess:s,postProcess:o,scope:this._scope});this.afterBind?this.afterBind():this.update&&this.update(a.value)}},di.prototype._setupParams=function(){if(this.params){var t=this.params;this.params=Object.create(null);for(var e,i,n,r=t.length;r--;)e=u(t[r]),n=l(e),i=M(this.el,e),null!=i?this._setupParamWatcher(n,i):(i=I(this.el,e),null!=i&&(this.params[n]=""===i?!0:i))}},di.prototype._setupParamWatcher=function(t,e){var i=this,n=!1,r=(this._scope||this.vm).$watch(e,function(e,r){if(i.params[t]=e,n){var s=i.paramWatchers&&i.paramWatchers[t];s&&s.call(i,e,r)}else n=!0},{immediate:!0,user:!1});(this._paramUnwatchFns||(this._paramUnwatchFns=[])).push(r)},di.prototype._checkStatement=function(){var t=this.expression;if(t&&this.acceptStatement&&!Mt(t)){var e=It(t).get,i=this._scope||this.vm,n=function(t){i.$event=t,e.call(i,i),i.$event=null};return this.filters&&(n=i._applyFilters(n,null,this.filters)),this.update(n),!0}},di.prototype.set=function(t){this.twoWay&&this._withLock(function(){this._watcher.set(t)})},di.prototype._withLock=function(t){var e=this;e._locked=!0,t.call(e),Yi(function(){e._locked=!1})},di.prototype.on=function(t,e,i){q(this.el,t,e,i),(this._listeners||(this._listeners=[])).push([t,e])},di.prototype._teardown=function(){if(this._bound){this._bound=!1,this.unbind&&this.unbind(),this._watcher&&this._watcher.teardown();var t,e=this._listeners;if(e)for(t=e.length;t--;)Q(this.el,e[t][0],e[t][1]);var i=this._paramUnwatchFns;if(i)for(t=i.length;t--;)i[t]();this.vm=this.el=this._watcher=this._listeners=null}};var Gs=/[^|]\|[^|]/;xt(wi),ui(wi),fi(wi),vi(wi),mi(wi),gi(wi),_i(wi),yi(wi),bi(wi);var Zs={priority:Ur,params:["name"],bind:function(){var t=this.params.name||"default",e=this.vm._slotContents&&this.vm._slotContents[t];e&&e.hasChildNodes()?this.compile(e.cloneNode(!0),this.vm._context,this.vm):this.fallback()},compile:function(t,e,i){if(t&&e){if(this.el.hasChildNodes()&&1===t.childNodes.length&&1===t.childNodes[0].nodeType&&t.childNodes[0].hasAttribute("v-if")){var n=document.createElement("template");n.setAttribute("v-else",""),n.innerHTML=this.el.innerHTML,n._context=this.vm,t.appendChild(n)}var r=i?i._scope:this._scope;this.unlink=e.$compile(t,i,r,this._frag)}t?J(this.el,t):z(this.el)},fallback:function(){this.compile(K(this.el,!0),this.vm)},unbind:function(){this.unlink&&this.unlink()}},Xs={priority:Br,params:["name"],paramWatchers:{name:function(t){Qr.remove.call(this),t&&this.insert(t)}},bind:function(){this.anchor=nt("v-partial"),J(this.el,this.anchor),this.insert(this.params.name)},insert:function(t){var e=gt(this.vm.$options,"partials",t,!0);e&&(this.factory=new se(this.vm,e),Qr.insert.call(this))},unbind:function(){this.frag&&this.frag.destroy()}},Ys={slot:Zs,partial:Xs},Ks=qr._postProcess,to=/(\d{3})(?=\d)/g,eo={orderBy:ki,filterBy:$i,limitBy:Ci,json:{read:function(t,e){return"string"==typeof t?t:JSON.stringify(t,null,arguments.length>1?e:2)},write:function(t){try{return JSON.parse(t)}catch(e){return t}}},capitalize:function(t){return t||0===t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""},uppercase:function(t){return t||0===t?t.toString().toUpperCase():""},lowercase:function(t){return t||0===t?t.toString().toLowerCase():""},currency:function(t,e,i){if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e=null!=e?e:"$",i=null!=i?i:2;var n=Math.abs(t).toFixed(i),r=i?n.slice(0,-1-i):n,s=r.length%3,o=s>0?r.slice(0,s)+(r.length>3?",":""):"",a=i?n.slice(-1-i):"",h=0>t?"-":"";return h+e+o+r.slice(s).replace(to,"$1,")+a},pluralize:function(t){var e=d(arguments,1),i=e.length;if(i>1){var n=t%10-1;return n in e?e[n]:e[i-1]}return e[0]+(1===t?"":"s")},debounce:function(t,e){return t?(e||(e=300),y(t,e)):void 0}};return Ai(wi),wi.version="1.0.26",setTimeout(function(){An.devtools&&Li&&Li.emit("init",wi)},0),wi});
//# sourceMappingURL=vue.min.js.map;
define('Ios',[], function () {
    var u = navigator.userAgent;
    var IosMethod_7 = function (config) { ImagePagerStringPath(config); } //Ios 系统 7（包括7）一下的执行方法
    var IosMethod = function (config) { window.webkit.messageHandlers.ImagePagerStringPath.postMessage(config); } //Ios  7以上的执行方法
    //判断苹果手机的种类
    function IosType()
    {
        if (u.match(/iPhone/i)) {
            return Consts._IosType.iPhone;
        }
        else if (u.match(/iPod/i)) {
            return Consts._IosType.iPod;
        }
        else if (u.match(/iPad/i)) {
            return Consts._IosType.iPad;
        }
        else { return null}
    }



    //Ios版本
    function molieIosEdition()
    {
        // var aa = "Mozilla/5.0(iPhone;CPU iPhone OS 811_422_133 like MAC OS X)";
        var reg = /OS ([^_]*)_([^_]*)_([^_]*) like Mac OS X/gi;
        var Tp = [];
        u.replace(reg, function (a, b, c, e) {
            Tp[0] = b;
            Tp[1] = c;
            Tp[2] = e;
        })
        return Tp;
    }


    function method(config)
    {
        var EditionType = molieIosEdition();
        if (EditionType[0] <= 7) {

            IosMethod_7(config);
        }
        else {
            IosMethod(config);
        }
    }
    //出口方法
    //config   
    //id  图片的父级id
    //MethodName   安卓 Ios 执行的方法名称
    function addMethod(config) {
       var configs = JSON.stringify(config);
            if (config.MethodName) {
                IosMethod_7 = function (config) { eval(config.MethodName + "(" + configs + ")"); }
                IosMethod = function (config) { eval("window.webkit.messageHandlers." + config.MethodName + ".postMessage(" + configs + ")"); }
            }
            method(configs);
    }
    return {
        IosType: IosType,
        molieIosEdition: molieIosEdition,
        addMethod:addMethod
    }

});
define('Android',[], function () {
    var u = navigator.userAgent;
    var androidFn = function (ImgAry, i) { nativeMethod.ImagePagerStringPath({ "ImgAry": ImgAry, "i": i }); } //安卓手机执行方法
    //安卓版本
    function moblieAndroidEdition() {
        //var aaa = "Mozilla/5.0(Linux;Android 6111111.444440.14141;)";
        var reg = /Android ([^.]*).([^.]*).([^;]*);/gi;
        var Tp = [];
        u.replace(rg, function (a, b, c, e) {
            Tp[0] = b;
            Tp[1] = c;
            Tp[2] = e;
        })
        return Tp;
    }
    function method(config) {
        androidFn(config);
    }
    //出口方法
    //config   
    //id  图片的父级id
    //MethodName   安卓 Ios 执行的方法名称
    function addMethod(config) {
        if (config.MethodName) {
            androidFn = function (config) { eval("nativeMethod." + config.MethodName + "(" + config + ")"); }
        }
        method(config);
    }

    return {
        moblieAndroidEdition: moblieAndroidEdition,
        addMethod: addMethod
    }
});
define('molieInit',['Ios', 'Android','zepto'], function (Ios, Ad) {

    var u = navigator.userAgent;
    //判断手机是哪种类型
    function moblieType() {
        if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
            return Consts._browseType.Android;
        }
        else if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            return Consts._browseType.Ios;
        }
        return 0;

    }

    //根据不用手机执行不同的方法
    function moblieTypeFn(Fn) {
        if (typeof (Fn) === 'function') {
            switch (moblieType()) {
                case Consts._browseType.Android:
                    Fn();
                    break;
                case Consts._browseType.Ios:
                    Fn();
                    break;
                default:
                    break;
            }
        }
        else {
            console.log("参数必须为方法");
        }
    }
    
    //微信内核执行方法
	function wechatMethod(fn){
		var isWechat = !!/MicroMessenger/i.test(u);
		if(isWechat){
			return true;
		}else{
			return false;
		}
		
	}
	
    //手机获取版本的方法
    function moblieEdition() {
        switch (moblieType()) {
            case Consts._browseType.Android:
                return Ad.moblieAndroidEdition();
                break;
            case Consts._browseType.Ios:
                return Ios.molieIosEdition();
                break;
            default:
                return null;
                break;
        }
    }
    
    

    //添加方法
    function addMethod(config)
    {
        switch (moblieType()) {
            case Consts._browseType.Android:
                return Ad.addMethod(config);
                break;
            case Consts._browseType.Ios:
                return Ios.addMethod(config);
                break;
            default:
                return null;
                break;
        }
    }
     


    return {
        moblieType: moblieType,  //手机的类型
        moblieTypeFn: moblieTypeFn, //根据不用手机执行不同的方法
        IosType: Ios.IosType,   //判断苹果手机的种类  iPhone   ipend
        //手机的版本 
        //返回的是数组   (8_0_1)  [8][0][1]
        moblieEdition: moblieEdition, 
        //获取Ios的版本    
        //返回的是数组   (8_0_1)  [8][0][1]
        IosEdition: Ios.molieIosEdition,
        //获取安卓的版本
        //返回的是数组   (8.0.1)  [8][0][1]
        AndroidEdtition:Ad.moblieAndroidEdition, 
       
        //添加方法
        //config 参数 对象形式
        // {MethodName:方法名称}
        //ImagePagerStringPath  默认方法名
        addMethod:addMethod,

        //给安卓添加方法
        //config 参数 对象形式
        // {MethodName:方法名称}
        //ImagePagerStringPath
        //AndroidAddMethod: Ad.addMethod,
        //给Ios添加方法
        //config 参数 对象形式
        // {MethodName:方法名称}
       // IosAddMethod: Ios.addMethod,
       wechatMethod: wechatMethod

    }
})

;
define('booksMethod',['molieInit'], function (m) {

    var androidFn = function (config) { nativeMethod.ImagePagerStringPath(config); } //安卓手机执行方法
    var IosMethod_7 = function (config) { ImagePagerStringPath(config); } //Ios 系统 7（包括7）一下的执行方法
    var IosMethod = function (config) { window.webkit.messageHandlers.ImagePagerStringPath.postMessage(config); } //Ios  7以上的执行方法

    //根据手机类型执行不同的方法
    function booksInit(type,config) {
        var moblieType = m.moblieType(); //判断手机类型
        switch (moblieType) {
            case Consts._browseType.Android:
                androidMethod(type, config);
                break;
            case Consts._browseType.Ios:
                iosMethod(type, config);
                break;
            default: console.log(moblieType);
        }
    }

    //安卓的执行方法
    function androidMethod(type, config) {
        androidFn(type, config);
    }

    //IOS的执行方法
    function iosMethod(type, config) {
        var EditionType = m.IosEdition();
        if (EditionType[0] <= 7) {

            IosMethod_7(type, config);
        }
        else {
            IosMethod(type, config);
        }

    }

    /* 出口方法
     * config   
     * type 必须 安卓 Ios 执行的方法名称
     * parameterName 参数名
     * parameterValue 参数值
    */ 
    function Init(type,config) {
        if (type) {
            if (config) {
                config = (typeof config) === "string" ? config : JSON.stringify(config)
                androidFn = function (type, config) { eval("nativeMethod." + type + "('" + config + "')"); }
                IosMethod_7 = function (type, config) { eval(type + "('" + config + "')"); }
                IosMethod = function (type, config) { eval("window.webkit.messageHandlers." + type + ".postMessage('" + config + "')"); }
            } else {
                androidFn = function (type, config) { eval("nativeMethod." + type + "()"); }
                IosMethod_7 = function (type, config) { eval(type + "('none')"); }
                IosMethod = function (type, config) { eval("window.webkit.messageHandlers." + type + ".postMessage('none')"); }
            }
        } else {
            alert("必须传入类型");
            return false;
        }


        booksInit(type,config);
    }

    return {
       /* 调用方法
        * booksInit(type,{参数名:参数值,参数名2:参数值2,...参数名n:参数值n})
        * 有两个参数
        * type 方法类型名
        * obj  参数列表
        */ 
        booksInit: Init
    }
});
require(['vue', 'booksMethod'], function(vue, bk) {
	
	$("body").show();
	// 实例化Vue.js
	var vm = new vue({
		el: '#booksVue',
		data: {
			booksTypeId: [7, 1, 2, 3, 4, 5, 6],
			booksHot: [], //热门
			booksNews: [], //最新
			booksFinance: [], //财经 7
			booksBasis: [], //基础 1
			booksEconomic: [], //经济指标 2
			booksTechnology: [], //技术综合 3
			booksMoney: [], //资金管理 4
			booksShort: [], //短线交易 5
			booksGold: [], //黄金白银 6
			booksSearch: [], //搜索
			bookName: "",
			chapterId: 0,
			onLine: true,
			bar: 0
		}
	});
	// 存储用户ID
	var uId = GetQueryString("uId") || 0;
	localStorage.setItem("uId", uId);
	
	var page = {
		pageIndex: 1,
		totalPage: 0
	}
	
	mui.plusReady(function() {
		mui('.ct-scroll-01').scroll({
			scrollX: true,
			scrollY: false,
			indicators: false,
			bounce: false
		})

		mui.init({
			pullRefresh: {
				deceleration: 0.0006,
				container: '#books', //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
				up: {
					height: 50, //可选.默认50.触发上拉加载拖动距离
					auto: false, //可选,默认false.自动上拉加载一次
					contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
					contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
					callback: pullFresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
				}
			}
		});
		//mui('#books').pullRefresh().disablePullupToRefresh();
		
		getBookMark();

		//判断当前网络是否连接
		onLine(function onLine() {
			vm.onLine = true;
		}, function offLine() {
			vm.onLine = false;
		})

		ajaxInit();

		mui(".ct-scroll").on("dragstart", ".mui-scroll", function() {
			$("#search").blur();
		})

		$(".ct-head-a").on("tap", function() {
			$("#search").blur();
		})

		// 点击搜索事件
		$("#search").bind("tap", function() {
			if(vm.onLine) {
				onSearch();
				if(!location.hash)
					history.pushState({
						a: 1
					}, "", "#search");
			} else {
				mui.toast("网络未连接，请检查网络！");
			}

		})

		// 后退前进事件
		window.onpopstate = function(o) {
			if(o.state == null) {
				offSearch();
			} else {
				onSearch();
			}

		}

		// 点击继续看书
		$("body").on("tap", ".ct-tips", function() {
			$("#search").blur();
			if(vm.onLine) {
				//打开页面
				mui.openWindow({
					url: 'booksDetails.html?id=' + vm.chapterId,
					id: 'booksDetails',
					waiting:{
						autoShow:false
					}
				});
				if(mui.os.ios) {
					bk.booksInit("closeMenu");
				}
			} else {
				mui.toast("网络未连接，请检查网络！");
			}
		})

		// 搜索返回首页
		$('body').on('tap', '.ct-search-close', function() {
			history.go(-1);
		})

		//侧导航书籍列表跳转
		$('body').on('tap', '.ct-ul-list li', function() {
			if(vm.onLine) {
				var typeId = $(this).data("id");
				mui.openWindow({
					url: 'booksList.html?id=' + typeId,
					id: 'booksList',
					waiting:{
						autoShow:false
					}
				});
			} else {
				mui.toast("网络未连接，请检查网络！");
			}
		})

		//热门推荐--新品速递 --跳转到书籍详情
		$('body').on('tap', '.ct-src-right', function() {
			if(vm.onLine) {
				var booksId = $(this).data("id");
				mui.openWindow({
					url: 'booksIntroduction.html?id=' + booksId,
					id: 'booksIntroduction',
					waiting:{
						autoShow:false
					}
				});
			} else {
				mui.toast("网络未连接，请检查网络！");
			}
		})

		//热门财经推荐头条
		$('body').on('tap', '.first-img', function() {
			if(vm.onLine) {
				var booksId = $(this).data("id");
				mui.openWindow({
					url: 'booksIntroduction.html?id=' + booksId,
					id: 'booksIntroduction',
					waiting:{
						autoShow:false
					}
				});
			} else {
				mui.toast("网络未连接，请检查网络！");
			}
		})

		//书籍跳转到书籍
		$('body').on('tap', '.book-show li', function() {
			if(vm.onLine) {
				var booksId = $(this).data("id");
				mui.openWindow({
					url: 'booksIntroduction.html?id=' + booksId,
					id: 'booksIntroduction',
					waiting:{
						autoShow:false
					}
				});
			} else {
				mui.toast("网络未连接，请检查网络！");
			}
		})

		//书籍类型--更多  
		$('body').on('tap', '.view-more', function() {
			if(vm.onLine) {
				var typeId = $(this).data("id");
				mui.openWindow({
					url: 'booksList.html?id=' + typeId,
					id: 'booksList',
					styles:{
						scrollIndicator:'none'
					},
					waiting:{
						autoShow:false
					}
				});
			} else {
				mui.toast("网络未连接，请检查网络！");
			}
		})

		//搜索书籍跳转到书籍详情
		$('body').on('tap', '#search-item li', function() {
			if(vm.onLine) {
				var booksId = $(this).data("id");
				mui.openWindow({
					url: 'booksIntroduction.html?id=' + booksId,
					id: 'booksIntroduction',
					waiting:{
						autoShow:false
					}
				});
			} else {
				mui.toast("网络未连接，请检查网络！");
			}
		})

		var cpLock = false;
		$('#search').on('compositionstart', function() {
			cpLock = true;
		});
		$('#search').on('compositionend', function() {
			cpLock = false;
		});

		// 返回
		mui.back = function() {
			if(vm.onLine) {
				bk.booksInit("exitHtml");
			} else {
				mui.toast("网络未连接，请检查网络！");
			}
		}

		// 监听搜索框值
		$("#search").on("input", function() {
			if(!cpLock) {
				var pattern = /[^\u4E00-\u9FA5A-Za-z0-9]/ig,
					$this = $(this);
				$this.val($this.val().replace(pattern, ''));
				vm.booksSearch = [];
				var searchVal = $.trim($(this).val());
				if(!searchVal) {
					$(".searchTips").text("请输入搜索关键词！");
					return false;
				}
				mui('#books').pullRefresh().refresh(true);
				page.pageIndex = 1;
				getBooksSearchData(searchVal)
			}

		})
	})
	// 打开搜索
	function onSearch() {
		$(".indexHtml").hide().next().show();
		$(".ct-search-close").show();
		$(".ct-search").removeClass("w100");
		$("#search")[0].focus();
		$(".searchTips").height($(window).height() - 64 - $("#search2").height())
	}

	// 关闭搜索
	function offSearch() {
		$(".ct-search-close").hide();
		$(".ct-search").addClass("w100");
		if(mui.os.ios) {
			$("#books").css("padding-top", "64px");
		} else {
			$("#books").css("padding-top", "44px");
		}

		$(".indexHtml").show().next().hide();
		$("#search").blur().val("");
		mui('#books').pullRefresh().disablePullupToRefresh();
	}
	// 获取当前书的章节位置
	function getBookMark() {
		$.ajax({
			type: 'get',
			url: Consts.OKRUrl148 + 'api/BookMarkApiMobile?bookId=0&uid=' + uId,
			dataType: 'json',
			async: false,
			success: function(data) {
				if(data.code == "0") {
					var dataCent = eval('(' + data.bodyMessage + ')');
					if(dataCent) {
						vm.bookName = dataCent.BookName;
						vm.chapterId = dataCent.ChapterId;
						$(".ct-tips").show();
						setTimeout(function() {
							$(".ct-tips").css("height", 0);
						}, 3000)
					}
				}
			},
			error: function(xhr, type) {
				mui.toast('请求超时');
			}
		})
	}

	// 遍历请求
	function ajaxInit() {
		var arr = ['booksHot', 'booksNews', 'booksFinance', 'booksBasis', 'booksEconomic', 'booksTechnology', 'booksMoney', 'booksShort', 'booksGold'];
		for(var i = 0; i < arr.length; i++) {
			getBooksData(arr[i]);
		}
	}

	// 获取请求路径
	function getAjaxUrl(type) {
		switch(type) {
			case 'booksHot':
				var url = Consts.OKRUrl148 + 'api/BookApiMobile?clicksTop=10';
				break;
			case 'booksNews':
				var url = Consts.OKRUrl148 + 'api/BookApiMobile?newTop=10';
				break;
			case 'booksFinance':
				var url = Consts.OKRUrl148 + 'api/BookApiMobile?pageIndex=1&pageSize=4&category=' + vm.booksTypeId[0];
				break;
			case 'booksBasis':
				var url = Consts.OKRUrl148 + 'api/BookApiMobile?pageIndex=1&pageSize=3&category=' + vm.booksTypeId[1];
				break;
			case 'booksEconomic':
				var url = Consts.OKRUrl148 + 'api/BookApiMobile?pageIndex=1&pageSize=3&category=' + vm.booksTypeId[2];
				break;
			case 'booksTechnology':
				var url = Consts.OKRUrl148 + 'api/BookApiMobile?pageIndex=1&pageSize=3&category=' + vm.booksTypeId[3];
				break;
			case 'booksMoney':
				var url = Consts.OKRUrl148 + 'api/BookApiMobile?pageIndex=1&pageSize=3&category=' + vm.booksTypeId[4];
				break;
			case 'booksShort':
				var url = Consts.OKRUrl148 + 'api/BookApiMobile?pageIndex=1&pageSize=3&category=' + vm.booksTypeId[5];
				break;
			case 'booksGold':
				var url = Consts.OKRUrl148 + 'api/BookApiMobile?pageIndex=1&pageSize=3&category=' + vm.booksTypeId[6];
				break;
			default:
				break;
		}
		return url;
	}

	// 获取书籍数据方法
	function getBooksData(type) {
		var url = getAjaxUrl(type);
		mui.ajax(url, {
			data: {},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				if(data.code == 0) {
					if(data.bodyMessage) {
						vm.bar++;
						var dataMsg = eval('(' + data.bodyMessage + ')');
						vm[type] = dataMsg instanceof Array ? dataMsg : dataMsg.PageDatas;
					}
				} else {
					vm[type] = "no";
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast('请求超时');
			}
		});
	}

	function pullFresh() {
		var searchVal = $.trim($('#search').val());
		page.pageIndex++;
		getBooksSearchData(searchVal);
	}

	function getBooksSearchData(searchVal) {
		var url = Consts.OKRUrl148 + 'api/BookApiMobile?pageIndex=' + page.pageIndex + '&pageSize=10&keyword=' + searchVal;
		mui.ajax(url, {
			data: {},
			dataType: 'json', //服务器返回json格式数据
			type: 'get', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				if(data.code == 0) {
					if(data.bodyMessage) {
						var dataMsg = eval('(' + data.bodyMessage + ')');
						page.totalPage = dataMsg.TotalPages;
						vm.booksSearch = page.pageIndex == 1 ? dataMsg.PageDatas : vm.booksSearch.concat(dataMsg.PageDatas);
						if(vm.booksSearch.length >= 10) {
							mui('#books').pullRefresh().enablePullupToRefresh();
						} else {
							mui('#books').pullRefresh().disablePullupToRefresh();
						}

						if(vm.booksSearch.length == 0) {
							$(".searchTips").text("无相关内容！")
						};

						if(page.pageIndex >= page.totalPage) {
							mui('#books').pullRefresh().endPullupToRefresh(true);
						} else {
							mui('#books').pullRefresh().endPullupToRefresh(false);
						}
					}
				} else {
					vm.booksSearch = "no";
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast('请求超时');
			}
		});
	}
});
define("booksIndex", function(){});
