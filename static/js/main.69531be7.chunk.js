(this.webpackJsonpbscbet = this.webpackJsonpbscbet || []).push([
    [0], {
        327: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minTokensBeforeSwap","type":"uint256"}],"name":"MinTokensBeforeSwapUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bnbReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_maintenanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_percentage","type":"uint256"}],"name":"changeMaintenanceFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"wallet","type":"address"}],"name":"changeMaintenanceWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rescueBNBFromContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"minLiquidityPercent","type":"uint256"}],"name":"setMinLiquidityPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"p","type":"address"}],"name":"setUniswapPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"r","type":"address"}],"name":"setUniswapRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferAnyBEP20Tokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"updateNumTokensSellToAddToLiquidity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        },
        328: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"},{"internalType":"contract IST20","name":"_token","type":"address"},{"internalType":"uint256","name":"_max","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"purchaser","type":"address"},{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenPurchase","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"_weiAmount","type":"uint256"}],"name":"_getTokenAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_beneficiary","type":"address"},{"internalType":"uint256","name":"_weiAmount","type":"uint256"}],"name":"_preValidatePurchase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_beneficiary","type":"address"}],"name":"buyTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_beneficiary","type":"address"}],"name":"maxBnb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"purchasedBnb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setPresaleRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IST20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weiMaxPurchaseBnb","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"weiRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawCoins","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"withdrawTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        },
        355: function(e, t, n) {},
        356: function(e, t, n) {},
        357: function(e, t) {},
        399: function(e, t) {},
        401: function(e, t) {},
        424: function(e, t) {},
        426: function(e, t) {},
        438: function(e, t) {},
        439: function(e, t) {},
        460: function(e, t) {},
        462: function(e, t) {},
        472: function(e, t) {},
        474: function(e, t) {},
        555: function(e, t) {},
        573: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(2),
                i = n.n(a),
                r = n(67),
                o = n.n(r),
                s = (n(355), n(1)),
                c = n(11),
                l = n(23),
                p = (n(356), n(637)),
                d = n(624),
                u = n(641),
                f = n(71),
                b = (n(22), n(18), n(87), n(210), n(96)),
                x = n(336),
                y = n(323),
                m = n.n(y),
                h = n(4),
                j = {
                    walletconnect: {
                        package: x.a,
                        options: {
                            networkUrl: "https://bsc-dataseed.binance.org",
                            rpc: {
                                56: "https://bsc-dataseed.binance.org"
                            },
                            chainId: 56
                        }
                    }
                },
                O = new m.a({
                    cacheProvider: !0,
                    providerOptions: j,
                    theme: {
                        background: "#55aaffab",
                        main: "#000000",
                        secondary: "#ffffff",
                        hover: "#4e49003f"
                    }
                });
            var g = {
                    provider: null,
                    web3Provider: null,
                    account: null,
                    chainId: null,
                    signer: null
                },
                w = Object(a.createContext)(g),
                v = function(e) {
                    var t = e.children,
                        n = Object(a.useState)(g),
                        r = Object(l.a)(n, 2),
                        o = r[0],
                        p = r[1],
                        d = function() {
                            var e = Object(c.a)(Object(s.a)().mark((function e() {
                                var t, n, a, i, r;
                                return Object(s.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, O.connect();
                                        case 2:
                                            return t = e.sent, n = new b.providers.Web3Provider(t), a = n.getSigner(), e.next = 7, a.getAddress();
                                        case 7:
                                            return i = e.sent, e.next = 10, n.getNetwork();
                                        case 10:
                                            r = e.sent, p(Object(f.a)(Object(f.a)({}, o), {}, {
                                                provider: t,
                                                web3Provider: n,
                                                account: i,
                                                signer: a,
                                                chainId: r.chainId
                                            }));
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        u = i.a.useCallback(Object(c.a)(Object(s.a)().mark((function e() {
                            var t;
                            return Object(s.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, O.clearCachedProvider();
                                    case 2:
                                        if (null === (t = o.provider) || void 0 === t || !t.disconnect || "function" !== typeof o.provider.disconnect) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 5, o.provider.disconnect();
                                    case 5:
                                        p(Object(f.a)(Object(f.a)({}, o), {}, {
                                            provider: null,
                                            web3Provider: null,
                                            account: null,
                                            chainId: null,
                                            signer: null
                                        })), window.location.reload();
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [o.provider]);
                    return i.a.useEffect((function() {
                        var e;
                        if (null !== (e = o.provider) && void 0 !== e && e.on) {
                            var t = function(e) {
                                    p(Object(f.a)(Object(f.a)({}, o), {}, {
                                        account: e[0]
                                    }))
                                },
                                n = function(e) {
                                    window.location.reload()
                                },
                                a = function(e) {
                                    u()
                                };
                            return o.provider.on("accountsChanged", t), o.provider.on("chainChanged", n), o.provider.on("disconnect", a),
                                function() {
                                    o.provider.removeListener && (o.provider.removeListener("accountsChanged", t), o.provider.removeListener("chainChanged", n), o.provider.removeListener("disconnect", a))
                                }
                        }
                    }), [o.provider, u]), Object(h.jsx)(w.Provider, {
                        value: {
                            account: o.account,
                            signer: o.signer,
                            connect: d,
                            disconnect: u
                        },
                        children: t
                    })
                },
                T = "static/media/logo.png";

            function k() {
                var e = Object(a.useContext)(w),
                    t = e.account,
                    n = e.connect,
                    i = e.disconnect;
                Object(d.a)("(max-width:960px)");
                return Object(h.jsx)(h.Fragment, {
                    children: Object(h.jsx)(u.a, {
                        style: {
                            background: "transparent",
                            zIndex: "100"
                        },
                        position: "relative",
                        height: "92px",
                        width: "100%",
                        pt: 2,
                        children: Object(h.jsx)(p.a, {
                            maxWidth: "lg",
                            children: Object(h.jsxs)(u.a, {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                children: [Object(h.jsx)(u.a, {
                                    style: {
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        color: "#000000",
                                        fontSize: "20px"
                                    },
                                    children: Object(h.jsx)("img", {
                                        width: "100%",
                                        height: "150px",
                                        src: T,
                                        alt: ""
                                    })
                                }), t ? Object(h.jsx)(u.a, {
                                    width: "130px",
                                    height: "42px",
                                    borderRadius: "0px",
                                    sx: {
                                        cursor: "pointer",
                                        boxShadow: "#ffffff 0px 0px 8px 1px",
                                        background: "transparent",
                                        borderBottom: "5px solid #f8cb6e"
                                    },
                                    display: "flex",
                                    fontFamily: "Chakra Petch",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    color: "#ffffff",
                                    fontWeight: "500",
                                    fontSize: "16px",
                                    onClick: function() {
                                        return i()
                                    },
                                    children: t.slice(0, 4) + "..." + t.slice(-4)
                                }) : Object(h.jsx)(u.a, {
                                    zIndex: 1,
                                    style: {
                                        cursor: "pointer",
                                        boxShadow: "#ffffff 0px 0px 8px 1px",
                                        background: "transparent",
                                        borderBottom: "5px solid #f8cb6e"
                                    },
                                    width: "130px",
                                    height: "42px",
                                    fontFamily: "Chakra Petch",
                                    fontWeight: "500",
                                    borderRadius: "0px",
                                    fontSize: "20px",
                                    color: "#ffffff",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    onClick: function() {
                                        return n()
                                    },
                                    children: "Connect"
                                })]
                            })
                        })
                    })
                })
            }
            var S = n(13),
                C = n(629),
                M = n(331),
                B = n(638),
                F = n(636),
                P = n(635),
                R = n(82),
                z = (n(327), n(328)),
                W = n(168),
                I = new W.a.providers.JsonRpcProvider("https://bsc-dataseed.binance.org"),
                _ = new W.a.VoidSigner("", I);

            function A(e, t, n) {
                return i.a.useMemo((function() {
                    return n ? new R.b(e, t, n) : new R.b(e, t, _)
                }), [e, t, n])
            }
            var N = "static/media/logo.png",
                L = "static/media/edye.png",
                E = "static/media/presale.7df692ae.gif",
                D = "static/media/bnblogo.95c82668.svg",
                q = n(642),
                V = n(587),
                H = n(221),
                U = function() {
                    var e = Object(a.useRef)(null),
                        t = Object(a.useRef)(null),
                        n = Object(a.useRef)(null),
                        i = Object(a.useRef)(null);
                    return Object(a.useEffect)((function() {
                        H.a.fromTo([e.current, n.current], .5, {
                            y: 18
                        }, {
                            y: -18,
                            yoyo: !0,
                            repeat: -1
                        }), H.a.fromTo([t.current, i.current], .5, {
                            y: -18
                        }, {
                            y: 18,
                            repeat: -1,
                            yoyo: !0
                        })
                    }), []), Object(h.jsxs)("svg", {
                        viewBox: "0 0 150 33.2",
                        width: "150",
                        height: "300",
                        children: [Object(h.jsx)("circle", {
                            ref: e,
                            cx: "16.1",
                            cy: "16.6",
                            r: "16.1",
                            fill: "#d4a600"
                        }), Object(h.jsx)("circle", {
                            ref: t,
                            cx: "55.2",
                            cy: "16.6",
                            r: "16.1",
                            fill: "#ffffff"
                        }), Object(h.jsx)("circle", {
                            ref: n,
                            cx: "94.3",
                            cy: "16.6",
                            r: "16.1",
                            fill: "#000000"
                        }), Object(h.jsx)("circle", {
                            ref: i,
                            cx: "133.4",
                            cy: "16.6",
                            r: "16.1",
                            fill: "#FFC800"
                        })]
                    })
                },
                J = Object(V.a)((function(e) {
                    return {
                        backdrop: {
                            zIndex: e.zIndex.drawer + 22e7,
                            color: "#fff"
                        }
                    }
                }));

            function G(e) {
                var t = e.loading,
                    n = J();
                return Object(h.jsx)("div", {
                    children: Object(h.jsx)(q.a, {
                        className: n.backdrop,
                        open: t,
                        children: Object(h.jsx)(U, {})
                    })
                })
            }
            var Y = n(74),
                $ = n(88),
                K = n(220),
                Q = n.n(K);

            function X() {
                var e = Object(d.a)("(max-width:700px)"),
                    t = (Object(a.useRef)(), Object(a.useState)({
                        time_days: 0,
                        time_Hours: 0,
                        time_Minusts: 0,
                        time_seconds: 0
                    })),
                    n = Object(l.a)(t, 2),
                    i = n[0],
                    r = n[1],
                    o = function() {
                        var e = Object(c.a)(Object(s.a)().mark((function e() {
                            var t, n;
                            return Object(s.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t = Q.a.utc("Dec 20 2022, 11:00:00").format("x"), n = setInterval((function() {
                                            var e = Q.a.utc().format("x"),
                                                a = t - e,
                                                o = Math.floor(a / 864e5),
                                                s = Math.floor(a % 864e5 / 36e5),
                                                c = Math.floor(a % 36e5 / 6e4),
                                                l = Math.floor(a % 6e4 / 1e3);
                                            a < 0 ? clearInterval(n.current) : r(Object(f.a)(Object(f.a)({}, i), {}, {
                                                time_days: o,
                                                time_Hours: s,
                                                time_Minusts: c,
                                                time_seconds: l
                                            }))
                                        }), 1e3);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return Object(a.useEffect)((function() {
                    o()
                }), []), Object(h.jsx)(h.Fragment, {
                    children: Object(h.jsxs)(u.a, {
                        display: "none",
                        alignItems: "center",
                        justifyContent: "center",
                        children: [Object(h.jsxs)(u.a, {
                            mr: e ? 1 : 5,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            children: [Object(h.jsx)(u.a, {
                                borderRadius: "0px",
                                width: e ? "70px" : "110px",
                                style: {
                                    WebkitTextFillColor: "#ffffff"
                                },
                                px: 2,
                                py: 1,
                                border: "3px solid #f8cb6e",
                                borderBottom: "15px solid #f8cb6e",
                                fontSize: e ? "30px" : "60px",
                                fontWeight: "700",
                                textAlign: "center",
                                fontFamily: "Secular One",
                                bgcolor: "#4c4042",
                                mb: 2,
                                children: i.time_days
                            }), Object(h.jsx)(u.a, {
                                width: e ? "70px" : "110px",
                                color: "#ffffff",
                                fontSize: e ? "15px" : "30px",
                                fontWeight: "500",
                                textAlign: "center",
                                fontFamily: "Secular One",
                                children: "Days"
                            })]
                        }), Object(h.jsxs)(u.a, {
                            mr: e ? 1 : 5,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            children: [Object(h.jsx)(u.a, {
                                borderRadius: "0px",
                                width: e ? "70px" : "110px",
                                style: {
                                    WebkitTextFillColor: "#ffffff"
                                },
                                px: 2,
                                py: 1,
                                border: "3px solid #f8cb6e",
                                borderBottom: "15px solid #f8cb6e",
                                fontSize: e ? "30px" : "60px",
                                fontWeight: "700",
                                textAlign: "center",
                                fontFamily: "Secular One",
                                bgcolor: "#4c4042",
                                mb: 2,
                                children: i.time_Hours
                            }), Object(h.jsx)(u.a, {
                                width: e ? "70px" : "110px",
                                color: "#ffffff",
                                fontSize: e ? "15px" : "30px",
                                fontWeight: "500",
                                textAlign: "center",
                                fontFamily: "Secular One",
                                children: "Hours"
                            })]
                        }), Object(h.jsxs)(u.a, {
                            mr: e ? 1 : 5,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            children: [Object(h.jsx)(u.a, {
                                borderRadius: "0px",
                                width: e ? "70px" : "110px",
                                style: {
                                    WebkitTextFillColor: "#ffffff"
                                },
                                px: 2,
                                py: 1,
                                border: "3px solid #f8cb6e",
                                borderBottom: "15px solid #f8cb6e",
                                fontSize: e ? "30px" : "60px",
                                fontWeight: "700",
                                fontFamily: "Secular One",
                                textAlign: "center",
                                bgcolor: "#4c4042",
                                mb: 2,
                                children: i.time_Minusts
                            }), Object(h.jsx)(u.a, {
                                width: e ? "70px" : "110px",
                                color: "#ffffff",
                                fontSize: e ? "15px" : "30px",
                                fontWeight: "500",
                                textAlign: "center",
                                fontFamily: "Secular One",
                                children: "Minutes"
                            })]
                        }), Object(h.jsxs)(u.a, {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            children: [Object(h.jsx)(u.a, {
                                borderRadius: "0px",
                                width: e ? "70px" : "110px",
                                style: {
                                    WebkitTextFillColor: "#ffffff"
                                },
                                px: 2,
                                py: 1,
                                border: "3px solid #f8cb6e",
                                borderBottom: "15px solid #f8cb6e",
                                fontSize: e ? "30px" : "60px",
                                fontWeight: "700",
                                textAlign: "center",
                                fontFamily: "Secular One",
                                bgcolor: "#4c4042",
                                mb: 2,
                                children: i.time_seconds
                            }), Object(h.jsx)(u.a, {
                                width: e ? "70px" : "110px",
                                color: "#ffffff",
                                fontSize: e ? "15px" : "30px",
                                fontWeight: "500",
                                textAlign: "center",
                                fontFamily: "Secular One",
                                children: "Seconds"
                            })]
                        })]
                    })
                })
            }
            var Z = n(628);
            Object(Z.a)(C.a)((function(e) {
                var t;
                e.theme;
                return t = {
                    height: 10,
                    width: "100%",
                    borderRadius: 0
                }, Object(S.a)(t, "&.".concat(M.a.colorPrimary), {
                    backgroundColor: "#d1d1d1"
                }), Object(S.a)(t, "& .".concat(M.a.bar), {
                    borderRadius: 0,
                    backgroundColor: "#f8cb6e"
                }), t
            }));
            var ee = function() {
                    var e, t = Object(a.useContext)(w),
                        n = t.account,
                        i = function(e) {
                            return A("0x34731aaEf796dBA871c7a053569049F7DfA49C12", z, e)
                        }(t.signer),
                        r = Object(d.a)("(max-width:700px)"),
                        o = Object(a.useState)(""),
                        f = Object(l.a)(o, 2),
                        b = f[0],
                        x = f[1],
                        y = Object(a.useState)("0"),
                        m = Object(l.a)(y, 2),
                        j = m[0],
                        O = m[1],
                        g = Object(a.useState)(!1),
                        v = Object(l.a)(g, 2),
                        T = v[0],
                        k = v[1],
                        C = Object(a.useState)(4e3),
                        M = Object(l.a)(C, 2),
                        R = (M[0], M[1], Object(a.useState)(0)),
                        W = Object(l.a)(R, 2),
                        I = (W[0], W[1], Object(a.useState)(0)),
                        _ = Object(l.a)(I, 2),
                        q = (_[0], _[1], function() {
                            var e = Object(c.a)(Object(s.a)().mark((function e() {
                                var t;
                                return Object(s.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            try {
                                                O(t = 1000000 * +b), console.log(t, "tokenReceive")
                                            } catch (n) {}
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }());
                    Object(a.useEffect)((function() {
                        b && q()
                    }), [b]);
                    var V = function() {
                        var e = Object(c.a)(Object(s.a)().mark((function e() {
                            var t, a, r;
                            return Object(s.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!n) {
                                            e.next = 40;
                                            break
                                        }
                                        if (b) {
                                            e.next = 5;
                                            break
                                        }
                                        Y.b.error("Error! Please enter a amount"), e.next = 38;
                                        break;
                                    case 5:
                                        if (!(isNaN(b) || +b < 0)) {
                                            e.next = 9;
                                            break
                                        }
                                        Y.b.error("Error! Please enter a valid amount"), e.next = 38;
                                        break;
                                    case 9:
                                        if (0 != +b) {
                                            e.next = 13;
                                            break
                                        }
                                        Y.b.error("Error!  Please enter a valid amount"), e.next = 38;
                                        break;
                                    case 13:
                                        if (!(+b > 0 && +b < .01)) {
                                            e.next = 17;
                                            break
                                        }
                                        Y.b.error("Error! Minimum amount is 0.01 BNB"), e.next = 38;
                                        break;
                                    case 17:
                                        if (!(0 !== +b && +b > 200)) {
                                            e.next = 21;
                                            break
                                        }
                                        Y.b.error("Error! Maximum amount is 200 BNB"), e.next = 38;
                                        break;
                                    case 21:
                                        return e.prev = 21, k(!0), console.log(Object($.e)(b.toString()).toString(), "parseUnits(amount.toString())"), e.next = 26, i.buyTokens(n, {
                                            value: Object($.e)(b.toString()).toString()
                                        });
                                    case 26:
                                        return t = e.sent, e.next = 29, t.wait();
                                    case 29:
                                        Y.b.success("Success! Transaction confirmed."), k(!1), window.location.reload(), e.next = 38;
                                        break;
                                    case 34:
                                        e.prev = 34, e.t0 = e.catch(21), k(!1), null !== e.t0 && void 0 !== e.t0 && null !== (a = e.t0.data) && void 0 !== a && a.message ? Y.b.error(null === e.t0 || void 0 === e.t0 || null === (r = e.t0.data) || void 0 === r ? void 0 : r.message) : Y.b.error(null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message);
                                    case 38:
                                        e.next = 41;
                                        break;
                                    case 40:
                                        Y.b.error("Error! Please connect your wallet.");
                                    case 41:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [21, 34]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    return Object(h.jsxs)(u.a, {
                        pt: 5,
                        pb: 10,
                        position: "relative",
                        zIndex: 1,
                        children: [Object(h.jsx)(G, {
                            loading: T
                        }), Object(h.jsx)(p.a, {
                            maxWidth: "md",
                            children: Object(h.jsxs)(u.a, {
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                children: [Object(h.jsxs)(u.a, {
                                    mb: 2,
                                    fontWeight: "700",
                                    fontSize: "25px",
                                    color: "#fffff",
                                    fontFamily: "Segoe UI Black",
                                    textAlign: "center",
                                    children: [Object(h.jsx)("h3", {
                                        style: {
                                            color: "",
                                            fontSize: "30px"
                                        },
                                        children: "Techaddict Coin Presale"
                                    }), Object(h.jsx)("h3", {
                                        
                                    }), ]
                                }), Object(h.jsx)(X, {}), Object(h.jsxs)(B.a, {
                                    mt: 5,
                                    container: !0,
                                    spacing: 5,
                                    children: [Object(h.jsx)(B.a, {
                                        item: !0,
                                        xs: 12,
                                        sm: 12,
                                        md: 6,
                                        children: Object(h.jsxs)(u.a, {
                                            width: "100%",
                                            height: "100%",
                                            boxShadow: "#ffffff 0px 0px 10px 1px",
                                            style: {
                                                background: "#4c4042"
                                            },
                                            borderRadius: "0px",
                                            borderTop: "20px solid #f8cb6e",
                                            borderBottom: "20px solid #f8cb6e",
                                            borderLeft: "10px solid #f8ca6ece",
                                            borderRight: "10px solid #f8ca6ece",
                                            display: "flex",
                                            flexDirection: "column",
                                            p: 2,
                                            children: [Object(h.jsx)(u.a, {
                                                fontWeight: "700",
                                                fontSize: "25px",
                                                color: "#ffffff",
                                                fontFamily: "Secular One",
                                                textAlign: "center",
                                                children: "Buy EIYE Coin"
                                            }), Object(h.jsxs)(u.a, {
                                                mt: 2,
                                                mb: 2,
                                                style: {
                                                    boxShadow: "#ffffff 0px 0px 8px 1px",
                                                    background: "transparent",
                                                    paddingLeft: 15,
                                                    borderRadius: "0px"
                                                },
                                                pb: 2,
                                                pt: 1,
                                                children: [Object(h.jsxs)(u.a, {
                                                    style: {
                                                        color: "#ffffff",
                                                        fontFamily: "Chakra Petch",
                                                        fontWeight: "500",
                                                        fontSize: "18px",
                                                        marginTop: "10px",
                                                        width: "100%",
                                                        paddingRight: "15px",
                                                        textAlign: "left"
                                                    },
                                                    children: [" ", "From:", " "]
                                                }), Object(h.jsxs)(u.a, {
                                                    display: "flex",
                                                    justifyContent: "space-beteen",
                                                    alignItems: "center",
                                                    children: [Object(h.jsx)(F.a, {
                                                        style: {
                                                            color: "#ffffff",
                                                            fontFamily: "Chakra Petch",
                                                            fontWeight: "600",
                                                            fontSize: "18px",
                                                            marginTop: "10px",
                                                            width: "100%",
                                                            paddingRight: "15px"
                                                        },
                                                        fullWidth: !0,
                                                        type: "text",
                                                        id: "standard-basic",
                                                        variant: "standard",
                                                        placeholder: "Enter BNB",
                                                        value: b,
                                                        onChange: function(e) {
                                                            x(e.target.value)
                                                        }
                                                    }), Object(h.jsxs)(u.a, {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        borderRadius: "0px",
                                                        height: r ? "35px" : "auto",
                                                        pl: r ? 1 : 3,
                                                        pr: r ? 2 : 4,
                                                        py: 1,
                                                        mr: 2,
                                                        style: {
                                                            color: "#ffffff",
                                                            fontFamily: "Chakra Petch",
                                                            fontWeight: "500",
                                                            fontSize: "16px",
                                                            marginTop: "10px",
                                                            background: "transparent",
                                                            boxShadow: "#f8ca6ece 0px 0px 8px 1px",
                                                            borderBottom: "5px solid #f8cb6e"
                                                        },
                                                        children: [" ", Object(h.jsx)("img", {
                                                            style: {
                                                                marginRight: "5px",
                                                                marginBottom: "3px"
                                                            },
                                                            width: "25px",
                                                            height: "25px",
                                                            src: D,
                                                            alt: ""
                                                        }), " ", "BNB"]
                                                    })]
                                                })]
                                            }), Object(h.jsxs)(u.a, {
                                                display: "flex",
                                                flexDirection: "column",
                                                style: {
                                                    boxShadow: "#ffffff 0px 0px 8px 1px",
                                                    backgroundColor: "transparent",
                                                    borderRadius: "0px",
                                                    marginTop: 10
                                                },
                                                py: 2,
                                                px: 2,
                                                children: [Object(h.jsxs)(u.a, {
                                                    mb: 1,
                                                    style: {
                                                        color: "#ffffff",
                                                        fontFamily: "Chakra Petch",
                                                        fontWeight: "500",
                                                        fontSize: "18px",
                                                        width: "100%",
                                                        paddingRight: "15px",
                                                        textAlign: "left"
                                                    },
                                                    children: [" ", "To:", " "]
                                                }), Object(h.jsxs)(u.a, {
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    display: "flex",
                                                    children: [Object(h.jsx)("span", {
                                                        style: {
                                                            fontSize: "18px",
                                                            color: "#ffffff",
                                                            fontFamily: "Chakra Petch"
                                                        },
                                                        className: "heading",
                                                        children: j
                                                    }), Object(h.jsxs)(u.a, {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        borderRadius: "0px",
                                                        height: r ? "35px" : "auto",
                                                        pl: r ? 1 : 3,
                                                        pr: r ? 2 : 4,
                                                        py: 1,
                                                        style: {
                                                            color: "#ffffff",
                                                            fontFamily: "Chakra Petch",
                                                            fontWeight: "500",
                                                            fontSize: "16px",
                                                            marginTop: "10px",
                                                            boxShadow: "#f8ca6ece 0px 0px 8px 1px",
                                                            background: "transparent",
                                                            borderBottom: "5px solid #f8cb6e"
                                                        },
                                                        children: [" ", Object(h.jsx)("img", {
                                                            style: {
                                                                marginRight: "5px",
                                                                marginBottom: "3px"
                                                            },
                                                            width: "20px",
                                                            height: "20px",
                                                            src: N,
                                                            alt: ""
                                                        }), " ", "EYC"]
                                                    })]
                                                })]
                                            }), Object(h.jsx)(u.a, {
                                                mt: 5,
                                                display: "flex",
                                                flexDirection: "column",
                                                children: Object(h.jsx)(u.a, {
                                                    textAlign: "center",
                                                    width: "100%",
                                                    children: Object(h.jsx)(P.a, {
                                                        style: (e = {
                                                            background: "transparent"
                                                        }, Object(S.a)(e, "background", "transparent"), Object(S.a)(e, "boxShadow", "#ffffff 0px 0px 8px 1px"), Object(S.a)(e, "fontSize", "18px"), Object(S.a)(e, "borderRadius", "0px"), Object(S.a)(e, "width", "176px"), Object(S.a)(e, "height", "45px"), Object(S.a)(e, "color", "#ffffff"), Object(S.a)(e, "textTransform", "capitalize"), Object(S.a)(e, "fontWeight", "500"), Object(S.a)(e, "borderBottom", "5px solid #f8cb6e"), e),
                                                        onClick: function() {
                                                            return V()
                                                        },
                                                        children: "Buy"
                                                    })
                                                })
                                            })]
                                        })
                                    }), Object(h.jsx)(B.a, {
                                        item: !0,
                                        xs: 12,
                                        sm: 12,
                                        md: 6,
                                        children: Object(h.jsxs)(u.a, {
                                            width: "100%",
                                            height: "100%",
                                            boxShadow: "#ffffff 0px 0px 10px 1px",
                                            style: {
                                                background: "#4c4042"
                                            },
                                            borderRadius: "0px",
                                            display: "flex",
                                            flexDirection: "column",
                                            borderTop: "20px solid #f8cb6e",
                                            borderBottom: "20px solid #f8cb6e",
                                            borderLeft: "10px solid #f8ca6ece",
                                            borderRight: "10px solid #f8ca6ece",
                                            p: 2,
                                            children: [Object(h.jsx)(u.a, {
                                                fontWeight: "700",
                                                fontSize: "25px",
                                                color: "#ffffff",
                                                fontFamily: "Secular One",
                                                textAlign: "center",
                                                children: "Token Info"
                                            }), Object(h.jsxs)(u.a, {
                                                mt: 2,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                borderBottom: "1px solid #f8cb6e",
                                                pb: 2,
                                                children: [Object(h.jsx)(u.a, {
                                                    fontWeight: "600",
                                                    borderRadius: "8px",
                                                    fontSize: "16px",
                                                    color: "#ffffff",
                                                    fontFamily: "Chakra Petch",
                                                    children: "Token Name"
                                                }), Object(h.jsx)(u.a, {
                                                    fontWeight: "600",
                                                    borderRadius: "8px",
                                                    fontSize: "16px",
                                                    color: "#ffffff",
                                                    fontFamily: "Chakra Petch",
                                                    children: "EIYE Coin Token"
                                                })]
                                            }), Object(h.jsxs)(u.a, {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                borderBottom: "1px solid #f8cb6e",
                                                pb: 2,
                                                mt: 2,
                                                children: [Object(h.jsx)(u.a, {
                                                    fontWeight: "600",
                                                    borderRadius: "8px",
                                                    fontSize: "16px",
                                                    color: "#ffffff",
                                                    fontFamily: "Chakra Petch",
                                                    children: "Token Symbol"
                                                }), Object(h.jsx)(u.a, {
                                                    fontWeight: "600",
                                                    borderRadius: "8px",
                                                    fontSize: "16px",
                                                    color: "#ffffff",
                                                    fontFamily: "Chakra Petch",
                                                    children: "EIYC"
                                                })]
                                            }), Object(h.jsxs)(u.a, {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                borderBottom: "1px solid #f8cb6e",
                                                pb: 2,
                                                mt: 2,
                                                children: [Object(h.jsx)(u.a, {
                                                    fontWeight: "600",
                                                    borderRadius: "8px",
                                                    fontSize: "16px",
                                                    color: "#ffffff",
                                                    fontFamily: "Chakra Petch",
                                                    children: "Token Decimals"
                                                }), Object(h.jsx)(u.a, {
                                                    fontWeight: "600",
                                                    borderRadius: "8px",
                                                    fontSize: "16px",
                                                    color: "#ffffff",
                                                    fontFamily: "Chakra Petch",
                                                    children: "18"
                                                })]
                                            }), Object(h.jsxs)(u.a, {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                borderBottom: "1px solid #f8cb6e",
                                                pb: 2,
                                                mt: 2,
                                                children: [Object(h.jsx)(u.a, {
                                                    fontWeight: "600",
                                                    borderRadius: "8px",
                                                    fontSize: "16px",
                                                    color: "#ffffff",
                                                    fontFamily: "Chakra Petch",
                                                    children: "Tokens Per BNB"
                                                }), Object(h.jsx)(u.a, {
                                                    fontWeight: "600",
                                                    borderRadius: "8px",
                                                    fontSize: "16px",
                                                    color: "#ffffff",
                                                    fontFamily: "Chakra Petch",
                                                    children: "1000000"
                                                })]
                                            }), Object(h.jsxs)(u.a, {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                borderBottom: "1px solid #f8cb6e",
                                                pb: 2,
                                                mt: 2,
                                                children: [Object(h.jsx)(u.a, {
                                                    fontWeight: "600",
                                                    borderRadius: "8px",
                                                    fontSize: "16px",
                                                    color: "#ffffff",
                                                    fontFamily: "Chakra Petch",
                                                    children: "Min Contribute"
                                                }), Object(h.jsxs)(u.a, {
                                                    fontWeight: "600",
                                                    borderRadius: "8px",
                                                    fontSize: "16px",
                                                    color: "#ffffff",
                                                    fontFamily: "Chakra Petch",
                                                    children: ["0.01 BNB", " "]
                                                })]
                                            }), Object(h.jsxs)(u.a, {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                borderBottom: "1px solid #f8cb6e",
                                                pb: 2,
                                                mt: 2,
                                                children: [Object(h.jsx)(u.a, {
                                                    fontWeight: "600",
                                                    borderRadius: "8px",
                                                    fontSize: "16px",
                                                    color: "#ffffff",
                                                    fontFamily: "Chakra Petch",
                                                    children: "Max Contribute"
                                                }), Object(h.jsxs)(u.a, {
                                                    fontWeight: "600",
                                                    borderRadius: "8px",
                                                    fontSize: "16px",
                                                    color: "#ffffff",
                                                    fontFamily: "Chakra Petch",
                                                    children: ["200 BNB", " "]
                                                })]
                                            })]
                                        })
                                    })]
                                })]
                            })
                        }), Object(h.jsxs)(p.a, {
                            maxWidth: "xl",
                            children: [Object(h.jsx)("h2", {
                                className: "h2_class",
                                id: "Howto_buy",
                                children: "HOW TO BUY"
                            }), Object(h.jsx)("div", {
                                className: "How_details",
                                children: Object(h.jsxs)(B.a, {
                                    mt: 5,
                                    container: !0,
                                    spacing: 5,
                                    children: [Object(h.jsxs)(B.a, {
                                        item: !0,
                                        xs: 12,
                                        sm: 12,
                                        md: 6,
                                        lg: 6,
                                        children: [Object(h.jsx)("h3", {
                                            children: "Desktop View"
                                        }), Object(h.jsxs)("div", {
                                            className: "desktop_view",
                                            children: [Object(h.jsx)("p", {
                                                style: {
                                                    textAlign: "left",
                                                    paddingLeft: "40px",
                                                    fontSize: "20px"
                                                },
                                                children: "Step 1"
                                            }), Object(h.jsxs)("ul", {
                                                children: [Object(h.jsxs)("li", {
                                                    children: ["Click on ", Object(h.jsx)("em", {
                                                        children: Object(h.jsx)("quote", {
                                                            children: "'Connect'"
                                                        })
                                                    })]
                                                }), Object(h.jsxs)("li", {
                                                    children: ["Choose the wallet where you have your BNB funds, ", Object(h.jsx)("em", {
                                                        children: "Metamask or WalletConnect"
                                                    })]
                                                }), Object(h.jsxs)("li", {
                                                    children: ["When prompted, click on ", Object(h.jsx)("em", {
                                                        children: "confirm."
                                                    })]
                                                }), Object(h.jsx)("li", {
                                                    children: "Enter the amount of BNB you want to buy "
                                                })]
                                            })]
                                        }), Object(h.jsx)("img", {
                                            src: E,
                                            width: "600px",
                                            height: "300px"
                                        })]
                                    }), Object(h.jsxs)(B.a, {
                                        item: !0,
                                        xs: 12,
                                        sm: 12,
                                        md: 6,
                                        lg: 6,
                                        children: [Object(h.jsx)("h3", {
                                            children: "Mobile"
                                        }), Object(h.jsxs)("div", {
                                            className: "desktop_view",
                                            children: [Object(h.jsx)("p", {
                                                style: {
                                                    textAlign: "left",
                                                    paddingLeft: "40px",
                                                    fontSize: "20px"
                                                },
                                                children: "Step 1"
                                            }), Object(h.jsx)("p", {
                                                style: {
                                                    textAlign: "left",
                                                    paddingLeft: "40px",
                                                    fontSize: "20px",
                                                    color: "white"
                                                },
                                                children: "Follow up with the steps explained in Desktop View. "
                                            }), Object(h.jsx)("p", {
                                                style: {
                                                    textAlign: "left",
                                                    paddingLeft: "40px",
                                                    fontSize: "20px",
                                                    color: "white"
                                                },
                                                children: "If you have any challenge connecting to Trustwallet, follow this step 2."
                                            }), Object(h.jsx)("p", {
                                                style: {
                                                    textAlign: "left",
                                                    paddingLeft: "40px",
                                                    paddingTop: "15px",
                                                    fontSize: "20px"
                                                },
                                                children: "Step 2"
                                            }), Object(h.jsxs)("ul", {
                                                children: [Object(h.jsxs)("li", {
                                                    children: ["Go to your ", Object(h.jsx)("em", {
                                                        children: Object(h.jsx)("b", {
                                                            children: "Trustwallet"
                                                        })
                                                    }), "  click on ", Object(h.jsx)("em", {
                                                        children: Object(h.jsx)("b", {
                                                            children: "Discover"
                                                        })
                                                    })]
                                                }), Object(h.jsxs)("li", {
                                                    children: ["At the ", Object(h.jsx)("a", {
                                                        href: ""
                                                    }), Object(h.jsx)("em", {
                                                        children: Object(h.jsx)("b", {
                                                            children: "EIYE Coin Website"
                                                        })
                                                    }), ". a prompt shows, choose network and click ", Object(h.jsx)("em", {
                                                        children: Object(h.jsx)("b", {
                                                            children: "Connect"
                                                        })
                                                    })]
                                                }), Object(h.jsxs)("li", {
                                                    children: ["When prompted, click on ", Object(h.jsx)("em", {
                                                        children: "confirm."
                                                    })]
                                                }), Object(h.jsx)("li", {
                                                    children: "Once connected, enter the amount of EIYE Coin you want to buy with BNB "
                                                })]
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                },
                te = n(639),
                ne = n(634),
                ae = n(640),
                ie = i.a.forwardRef((function(e, t) {
                    return Object(h.jsx)(te.a, Object(f.a)({
                        direction: "up",
                        ref: t
                    }, e))
                }));
            var re = function(e) {
                    var t = e.open,
                        n = e.setOpen,
                        a = function() {
                            var e = Object(c.a)(Object(s.a)().mark((function e() {
                                return Object(s.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, window.ethereum.request({
                                                method: "wallet_switchEthereumChain",
                                                params: [{
                                                    chainId: "0x61"
                                                }]
                                            });
                                        case 3:
                                            n(!1), e.next = 9;
                                            break;
                                        case 6:
                                            e.prev = 6, e.t0 = e.catch(0), console.log(e.t0);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 6]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(h.jsx)("div", {
                        children: Object(h.jsx)("div", {
                            className: "modal__main__container",
                            children: Object(h.jsx)(ne.a, {
                                open: t,
                                keepMounted: !0,
                                TransitionComponent: ie,
                                onClose: function() {
                                    n(!1)
                                },
                                "aria-labelledby": "alert-dialog-slide-title",
                                "aria-describedby": "alert-dialog-slide-description",
                                children: Object(h.jsxs)(ae.a, {
                                    className: "dialoge__content__section",
                                    style: {
                                        background: "#55aaff63"
                                    },
                                    children: [Object(h.jsxs)(u.a, {
                                        component: "h3",
                                        color: "#000000",
                                        children: [Object(h.jsx)(u.a, {
                                            component: "span",
                                            color: "red",
                                            fontSize: "30px",
                                            children: "Error!"
                                        }), " ", "You are on wrong network please switch your network."]
                                    }), Object(h.jsx)(u.a, {
                                        align: "center",
                                        children: Object(h.jsx)(u.a, {
                                            width: "130px",
                                            height: "42px",
                                            borderRadius: "0px",
                                            sx: {
                                                cursor: "pointer",
                                                boxShadow: "#f8cb6e 0px 0px 8px 1px",
                                                background: "transparent",
                                                borderBottom: "5px solid #f8cb6e"
                                            },
                                            display: "flex",
                                            fontFamily: "Chakra Petch",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: "#000000",
                                            fontWeight: "500",
                                            fontSize: "16px",
                                            onClick: function() {
                                                return a()
                                            },
                                            children: "Switch Network"
                                        })
                                    })]
                                })
                            })
                        })
                    })
                },
                oe = n(173),
                se = n.n(oe),
                ce = new se.a(se.a.givenProvider ? se.a.givenProvider : "https://bsc-dataseed.binance.org");
            var le = function() {
                    var e = Object(a.useState)(!1),
                        t = Object(l.a)(e, 2),
                        n = t[0],
                        i = t[1];
                    return Object(a.useEffect)((function() {
                        var e = function() {
                            var e = Object(c.a)(Object(s.a)().mark((function e() {
                                return Object(s.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, ce.eth.getChainId();
                                        case 2:
                                            56 !== e.sent && i(!0);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), []), Object(h.jsxs)(h.Fragment, {
                        children: [Object(h.jsx)(re, {
                            open: n,
                            setOpen: i
                        }), Object(h.jsx)(k, {}), Object(h.jsx)(ee, {})]
                    })
                },
                pe = (n(572), n(644)),
                de = n(633),
                ue = function(e) {
                    e && e instanceof Function && n.e(3).then(n.bind(null, 645)).then((function(t) {
                        var n = t.getCLS,
                            a = t.getFID,
                            i = t.getFCP,
                            r = t.getLCP,
                            o = t.getTTFB;
                        n(e), a(e), i(e), r(e), o(e)
                    }))
                },
                fe = n(334),
                be = n(643),
                xe = Object(fe.a)({
                    palette: {
                        primary: {
                            main: "#0C0C0C",
                            light: "#313439",
                            contrastText: "#fff"
                        },
                        secondary: {
                            main: "#06044a",
                            light: "#4c02f1",
                            contrastText: "#000000"
                        },
                        text: {
                            primary: "#fff",
                            secondary: "#35343f"
                        }
                    }
                });
            xe.overrides = {
                MuiCssBaseline: {
                    "@global": {
                        body: {
                            fontFamily: "Poppins, sans-serif",
                            backgroundColor: "#000000",
                            color: "#ffffff"
                        },
                        ".img-fluid": {
                            maxWidth: "100%",
                            height: "auto"
                        }
                    }
                }
            };
            var ye = xe = Object(be.a)(xe);
            o.a.render(Object(h.jsxs)(h.Fragment, {
                children: [Object(h.jsx)(Y.a, {
                    style: {
                        zIndex: 1e11
                    },
                    position: "top-right",
                    autoClose: 2e3,
                    hideProgressBar: !1,
                    newestOnTop: !1,
                    closeOnClick: !0,
                    rtl: !1,
                    pauseOnFocusLoss: !0,
                    draggable: !0,
                    pauseOnHover: !0
                }), Object(h.jsx)(pe.a, {
                    theme: ye,
                    children: Object(h.jsxs)(v, {
                        children: [Object(h.jsx)(de.a, {}), Object(h.jsx)(le, {})]
                    })
                })]
            }), document.getElementById("root")), ue()
        }
    },
    [
        [573, 1, 2]
    ]
]);
//# sourceMappingURL=main.69531be7.chunk.js.map