(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(46),l=a.n(c),i=(a(58),a(3)),o=(a(59),a(60),a(47)),s=a.n(o),m=a(48),u=a.n(m),d=a(11),p=Object(n.createContext)(),E=function(e){var t=e.reducer,a=e.initialState,c=e.children;return r.a.createElement(p.Provider,{value:Object(n.useReducer)(t,a)},c)},_=function(){return Object(n.useContext)(p)},h=a(30),g=a.n(h),v=g.a.initializeApp({apiKey:"AIzaSyDd9P5x92Yp9x5wdbDYDOLLHYTDZ8bVZLk",authDomain:"shadow-d1cf4.firebaseapp.com",databaseURL:"https://shadow-d1cf4.firebaseio.com",projectId:"shadow-d1cf4",storageBucket:"shadow-d1cf4.appspot.com",messagingSenderId:"875115727543",appId:"1:875115727543:web:035be11c316b6a259e9b32",measurementId:"G-36GJC34KLX"}).firestore(),f=g.a.auth();var b=function(){var e=_(),t=Object(i.a)(e,2),a=t[0],n=a.basket,c=a.user;return t[1],console.log(c),r.a.createElement("div",{className:"header"},r.a.createElement(d.b,{to:"/"},r.a.createElement("img",{className:"header__logo",alt:"logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})),r.a.createElement("div",{className:"header__search"},r.a.createElement("input",{className:"header__searchInput",type:"text"}),r.a.createElement(s.a,{className:"header__searchIcon"})),r.a.createElement("div",{className:"header__nav"},r.a.createElement(d.b,{to:!c&&"/login"},r.a.createElement("div",{onClick:function(){c&&f.signOut()},className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Hello ",c?null===c||void 0===c?void 0:c.email:"Guest"),r.a.createElement("span",{className:"header__optionLineTwo"},c?"Sign Out":"Sign In"))),r.a.createElement(d.b,{to:"/orders"},r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Returns"),r.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),r.a.createElement("div",{className:"header__option"},r.a.createElement("span",{className:"header__optionLineOne"},"Your"),r.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),r.a.createElement(d.b,{to:"/checkout"},r.a.createElement("div",{className:"header__optionBasket"},r.a.createElement(u.a,null),r.a.createElement("div",{className:"header__optionLineTwo header__basketCount"},null===n||void 0===n?void 0:n.length)))))};a(76),a(77);var N=function(e){var t=e.id,a=e.title,n=e.image,c=e.price,l=e.rating,o=_(),s=Object(i.a)(o,2),m=(s[0].basket,s[1]),u="\ud83c\udf1f".repeat(l);return r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product__info"},r.a.createElement("p",null,a),r.a.createElement("p",{className:"product__price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"product__rating"},u)),r.a.createElement("img",{src:n,alt:"Product"}),r.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:t,title:a,image:n,price:c,rating:l}})}},"Add to Basket"))};var k=function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home__container"},r.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:"amazon prime"}),r.a.createElement("div",{className:"home__row"},r.a.createElement(N,{id:"12345678",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:29.99,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5}),r.a.createElement(N,{id:"78663334",title:"Kenwood kMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl",price:229.99,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._SX450_.jpg",rating:4})),r.a.createElement("div",{className:"home__row"},r.a.createElement(N,{id:"18663324",title:"Fitbit Charge 3 Advanced Fitness Tracker with Heart Rate, Swim Tracking & 7 Day Battery",price:99.99,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",rating:5}),r.a.createElement(N,{id:"58563124",title:"Amazon Echo (3rd Generation | Smart speaker with Alexa, Charcoal Fabric",price:99.99,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",rating:3}),r.a.createElement(N,{id:"58563144",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",rating:4})),r.a.createElement("div",{className:"home__row"},r.a.createElement(N,{id:"58563144",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L.AC_SX355__.jpg",rating:4}))))},O=a(5),y=(a(78),a(79),a(21)),S=a.n(y),j=a(34),w=a(17),C=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return e+t.price}),0)},T=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(w.a)(Object(w.a)({},e),{},{basket:[].concat(Object(j.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(w.a)(Object(w.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var a=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(j.a)(e.basket);return a>=0?n.splice(a,1):console.warn("Can't remove product (id: ".concat(t.id,") as it is not in basket")),Object(w.a)(Object(w.a)({},e),{},{basket:n});case"SET_USER":return console.log("User Name:",t.user),Object(w.a)(Object(w.a)({},e),{},{user:t.user});default:return e}};var x=function(){var e=Object(O.f)(),t=_(),a=Object(i.a)(t,2),n=a[0].basket;return a[1],r.a.createElement("div",{className:"subtotal"},r.a.createElement(S.a,{renderText:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Subtotal(",null===n||void 0===n?void 0:n.length," items): ",r.a.createElement("strong",null,e)),r.a.createElement("small",{className:"subtotal__gift"},r.a.createElement("input",{type:"checkbox"}),"This order contains a gift"))},decimalScale:2,value:C(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),r.a.createElement("button",{onClick:function(t){return e.push("/payment")}},"Proceed to Checkout"))};a(81);var A=function(e){var t=e.id,a=e.image,n=e.title,c=e.price,l=e.rating,o=e.hideButton,s=_(),m=Object(i.a)(s,2),u=(m[0].basket,m[1]);return r.a.createElement("div",{className:"checkoutProduct"},r.a.createElement("img",{className:"checkoutProduct__image",src:a,alt:""}),r.a.createElement("div",{className:"checkoutProduct__info"},r.a.createElement("p",{className:"checkoutProduct__title"},n),r.a.createElement("p",{className:"checkoutProduct__price"},r.a.createElement("small",null,"$"),r.a.createElement("strong",null,c)),r.a.createElement("div",{className:"checkout__rating"},"\ud83c\udf1f".repeat(l)),!o&&r.a.createElement("button",{onClick:function(){u({type:"REMOVE_FROM_BASKET",id:t})}},"Remove from Basket")))};var P=function(){var e=_(),t=Object(i.a)(e,2),a=t[0],n=a.basket,c=a.user;return t[1],r.a.createElement("div",{className:"checkout"},r.a.createElement("div",{className:"checkout__left"},r.a.createElement("img",{className:"checkout__ad",src:"Https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),r.a.createElement("div",null,r.a.createElement("h3",null,"Hello, ",null===c||void 0===c?void 0:c.email),r.a.createElement("h2",{className:"checkout__title"},"Your shopping basket"),n.map((function(e){return r.a.createElement(A,{key:e.id,id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),r.a.createElement("div",{className:"checkout__right"},r.a.createElement(x,null)))};a(82);var B=function(){var e=Object(O.f)(),t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),m=s[0],u=s[1];return r.a.createElement("div",{className:"login"},r.a.createElement(d.b,{to:"/"},r.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:"logo"})),r.a.createElement("div",{className:"login__container"},r.a.createElement("h1",null,"Sign-in"),r.a.createElement("form",null,r.a.createElement("h5",null,"E-mail"),r.a.createElement("input",{type:"email",list:"defaultEmails",className:"MuiInput-formControl",value:c,onChange:function(e){return l(e.target.value)}}),r.a.createElement("datalist",{id:"defaultEmails"},r.a.createElement("option",{value:"john.shorey@example.net"}),r.a.createElement("option",{value:"alex.carmen@example.com"}),r.a.createElement("option",{value:"bisabell@example.ca"})),r.a.createElement("h5",null,"Password"),r.a.createElement("input",{type:"password",value:m,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"login__signInButton",onClick:function(t){t.preventDefault(),f.signInWithEmailAndPassword(c,m).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))}},"Sign In")),r.a.createElement("p",null,"By signing-in you agree to the My Fake AMAZON terms and conditions of use & sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Adds Notice."),r.a.createElement("button",{onClick:function(t){t.preventDefault(),f.createUserWithEmailAndPassword(c,m).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account")))},M=a(23),z=a.n(M),I=a(33),L=(a(84),a(20)),D=a(49),R=a.n(D).a.create({baseURL:"https://us-central1-shadow-d1cf4.cloudfunctions.net/api"});var G=function(){var e=_(),t=Object(i.a)(e,2),a=t[0],c=a.basket,l=a.user,o=t[1],s=Object(O.f)(),m=Object(L.useStripe)(),u=Object(L.useElements)(),p=Object(n.useState)(!1),E=Object(i.a)(p,2),h=E[0],g=E[1],f=Object(n.useState)(""),b=Object(i.a)(f,2),N=b[0],k=b[1],y=Object(n.useState)(null),j=Object(i.a)(y,2),w=j[0],T=j[1],x=Object(n.useState)(!0),P=Object(i.a)(x,2),B=P[0],M=P[1],D=Object(n.useState)(!0),G=Object(i.a)(D,2),H=G[0],K=G[1];Object(n.useEffect)((function(){(function(){var e=Object(I.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R({method:"Post",url:"/payments/create?total=".concat(100*C(c))});case 2:t=e.sent,K(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),console.log("THE SECRET IS >>> ",H);var Y=function(){var e=Object(I.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),k(!0),e.next=4,m.confirmCardPayment(H,{payment_method:{card:u.getElement(L.CardElement)}}).then((function(e){var t=e.paymentIntent;v.collection("users").doc(null===l||void 0===l?void 0:l.uid).collection("orders").doc(t.id).set({basket:c,amount:t.amount,created:t.created}),g(!0),T(null),k(!1),o({type:"EMPTY_BASKET"}),s.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"payment"},r.a.createElement("div",{className:"payment__container"},r.a.createElement("h1",null,"Checkout (",r.a.createElement(d.b,{to:"/checkout"},null===c||void 0===c?void 0:c.length," items"),")"),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Delivery Address")),r.a.createElement("div",{className:"payment__address"},r.a.createElement("p",null,null===l||void 0===l?void 0:l.email),r.a.createElement("p",null,"177 White Plains Rd"),r.a.createElement("p",null,"Tarrytown, NY - 10591"))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Review items and delivery")),r.a.createElement("div",{className:"payment__items"},c.map((function(e){return r.a.createElement(A,{key:e.id,id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),r.a.createElement("div",{className:"payment__section"},r.a.createElement("div",{className:"payment__title"},r.a.createElement("h3",null,"Payment Method")),r.a.createElement("div",{className:"payment__details"},r.a.createElement("form",{onSubmit:Y},r.a.createElement(L.CardElement,{onChange:function(e){M(e.empty),M(e.error?e.error.message:"")}}),r.a.createElement("div",{className:"payment__container"},r.a.createElement(S.a,{renderText:function(e){return r.a.createElement("h3",null,"Order total: ",e)},decimalScale:2,value:C(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),r.a.createElement("button",{disabled:N||B||h},r.a.createElement("span",null,N?r.a.createElement("p",null,"Processing"):"Buy Now"))),w&&r.a.createElement("div",null,w))))))},H=(a(101),a(102),a(50)),K=a.n(H);var Y=function(e){var t,a=e.order;return r.a.createElement("div",{className:"order"},r.a.createElement("h2",null,"Order"),r.a.createElement("p",null,K.a.unix(a.data.created).format("MMMM Do YYYY, h:mma")),r.a.createElement("p",{className:"order__id"},r.a.createElement("small",null,a.id)),null===(t=a.data.basket)||void 0===t?void 0:t.map((function(e){return r.a.createElement(A,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),r.a.createElement(S.a,{renderText:function(e){return r.a.createElement("h3",{className:"order__total"},"Order Total: ",e)},decimalScale:2,value:a.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"}))};var F=function(){var e=_(),t=Object(i.a)(e,2),a=t[0],c=(a.basket,a.user),l=(t[1],Object(n.useState)([])),o=Object(i.a)(l,2),s=o[0],m=o[1];return Object(n.useEffect)((function(){c?v.collection("users").doc(null===c||void 0===c?void 0:c.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return m(e.docs.map((function(e){return console.log(e.id),{id:e.id,data:e.data()}})))})):m([])}),[c]),r.a.createElement("div",{className:"orders"},r.a.createElement("h1",null,"Orders Page"),r.a.createElement("div",{className:"orders__order"},s.map((function(e){return r.a.createElement(Y,{order:e})}))))},U=a(51),W=Object(U.a)("pk_test_51HRhFfGcxHRCwZ4Mg9hgYneaFBzUG0Qg9OjM6Xat8c9mpKXJ9Ow2DlTMrXZJ7Fs3zfP2pyRk3N4P6qiIwMzwJykt00zFMpE6VA");var X=function(){var e=_(),t=Object(i.a)(e,2),a=(t[0].basket,t[1]);return Object(n.useEffect)((function(){f.onAuthStateChanged((function(e){console.log("The user is logged in: ",e),a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),r.a.createElement(d.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/login"},r.a.createElement(B,null)),r.a.createElement(O.a,{path:"/orders"},r.a.createElement(b,null),r.a.createElement(F,null)),r.a.createElement(O.a,{path:"/checkout"},r.a.createElement(b,null),r.a.createElement(P,null)),r.a.createElement(O.a,{path:"/payment"},r.a.createElement(b,null),r.a.createElement(L.Elements,{stripe:W},r.a.createElement(G,null))),r.a.createElement(O.a,{path:"/"},r.a.createElement(b,null),r.a.createElement(k,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,{initialState:{basket:[],user:null},reducer:T},r.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){e.exports=a(105)},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.de9bc05f.chunk.js.map