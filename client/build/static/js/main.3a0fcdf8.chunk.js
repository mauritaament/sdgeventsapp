(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,a){e.exports=a(156)},118:function(e,t,a){},119:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),i=(a(157),a(64)),c=a(65),s="LOGIN_USER",m={loggedIn:!0};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;return t.type===s&&(e=Object(c.a)({},e,{loggedIn:t.payload})),e},h=(Object(i.b)(u),a(118),a(36)),d=(a(119),a(31)),p=a(45),g=a(46),f=a(49),b=a(47),E=a(50),v="authenticated",w=a(19),y=a.n(w),k=a(38),O=a(121);a(122),a(124);O.initializeApp({apiKey:"AIzaSyCLUg9_zUCjBfSfyjEQqpl3zo2OVhO2iIY",authDomain:"sdgeventsapp.firebaseapp.com",databaseURL:"https://sdgeventsapp.firebaseio.com",projectId:"sdgeventsapp",storageBucket:"sdgeventsapp.appspot.com",messagingSenderId:"732655057908",appId:"1:732655057908:web:97da47f8412de442"});var j=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(g.a)(t,null,[{key:"auth",value:function(){var e=Object(k.a)(y.a.mark(function e(t){var a,n,r;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,n=t.password,e.prev=2,e.next=5,O.auth().signInWithEmailAndPassword(a,n).catch(function(e){var t=e.code,a=e.message;"auth/wrong-password"===t?alert("Wrong password."):alert(a),console.log(e)});case 5:return r=e.sent,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}()}]),t}(r.a.Component),S=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(g.a)(t,null,[{key:"SignUpAuth",value:function(){var e=Object(k.a)(y.a.mark(function e(t,a){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.auth().createUserWithEmailAndPassword(t,a).catch(function(e){var t=e.code,a=e.message;"auth/weak-password"==t?alert("The password is too weak."):alert(a),console.log(e)});case 2:e.sent&&O.auth().currentUser.sendEmailVerification().then(function(){alert("Email Verification Sent!")});case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()}]),t}(r.a.Component),I=a(27),x=Object(I.a)(),C=a(198),N=new h.a,A=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).state={email:"",password:"",favorites:[],currentLocation:{},selectedLocation:{}},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"handleFormChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"onClickLoginSubmit",value:function(e){e.preventDefault(),j.auth(this.state).then(function(e){try{e.user?(N.set(v,!0),x.push("/home")):console.log("unable to login")}catch(t){}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Welcome, Please Login"),r.a.createElement("form",{className:"needs-validation",noValidate:!0},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"email"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"email",name:"email",value:this.state.email,onChange:function(t){return e.handleFormChange(t)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",value:this.state.password,onChange:function(t){return e.handleFormChange(t)}})),r.a.createElement("div",{className:"form-group form-check"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),r.a.createElement("label",{className:"form-check-label",htmlFor:"exampleCheck1"},"Remember Me")),r.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return e.onClickLoginSubmit(t)}},"Login"),r.a.createElement("div",null,r.a.createElement("br",null),"Don't have an account?",r.a.createElement(C.a,{to:"/signup"},"Sign Up"))))}}]),t}(r.a.Component),G=a(16);function D(e){var t=Object(n.useState)("email"),a=Object(G.a)(t,2),o=a[0],l=a[1],i=Object(n.useState)("password"),c=Object(G.a)(i,2),s=c[0],m=c[1];function u(){return(u=Object(k.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{S.SignUpAuth(o,s)}catch(a){}case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("h3",null,"Sign Up"),r.a.createElement("form",{className:"needs-validation",noValidate:!0},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"email"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"email",name:"email",value:o,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",value:s,onChange:function(e){return m(e.target.value)}})),r.a.createElement("button",{className:"btn btn-primary",onClick:function(e){return function(e){return u.apply(this,arguments)}(e)}},"Sign Up"),r.a.createElement("p",null,"Go back to ",r.a.createElement(C.a,{to:"/login"},"Log In"))))}var W=a(4),M=a(158),P=a(208),L=a(216),T=a(209),B=a(199),F=a(210),U=a(212),H=a(40),z=a(211),R=a(204),Y=a(101),q=a.n(Y),V=a(102),J=a.n(V),X=a(103),_=a.n(X),K=a(213),Q=a(214),$=a(220),Z=a(218),ee=a(217),te=a(200),ae=a(93),ne=a.n(ae),re=a(92),oe=a.n(re),le=a(94),ie=a.n(le),ce=a(33),se={width:"100%",height:"100%"},me=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a.onMarkerClick=function(e,t,n){return a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.onClose=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(ce.Map,{google:this.props.google,zoom:13,style:se,initialCenter:{lat:37.773972,lng:-122.431297}},r.a.createElement(ce.Marker,{onClick:this.onMarkerClick,name:"SDG Event #1",position:{lat:37.7836,lng:-122.3899}}),r.a.createElement(ce.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},r.a.createElement("div",null,r.a.createElement("h4",null,this.state.selectedPlace.name))),r.a.createElement(ce.Marker,{onClick:this.onMarkerClick,name:"SDG Event #2",position:{lat:37.8061,lng:-122.4103}}),r.a.createElement(ce.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},r.a.createElement("div",null,r.a.createElement("h4",null,this.state.selectedPlace.name))),r.a.createElement(ce.Marker,{onClick:this.onMarkerClick,name:"SDG Event #3",position:{lat:37.793,lng:-122.4161}}),r.a.createElement(ce.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},r.a.createElement("div",null,r.a.createElement("h4",null,this.state.selectedPlace.name))))}}]),t}(n.Component),ue=Object(ce.GoogleApiWrapper)({apiKey:"AIzaSyBH3OB0tguXHU3QB4YLgv789UK-6O-jEc8"})(me);function he(e){return r.a.createElement(H.a,{component:"div"},e.children)}var de=Object(M.a)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}});var pe=function(){var e=de(),t=r.a.useState(0),a=Object(G.a)(t,2),n=a[0],o=a[1];return r.a.createElement("div",{className:e.root},r.a.createElement(B.a,{position:"static",color:"default"},r.a.createElement(ee.a,{value:n,onChange:function(e,t){o(t)},indicatorColor:"primary",textColor:"primary",centered:"true"},r.a.createElement(te.a,{label:"Map",icon:r.a.createElement(oe.a,null)}),r.a.createElement(te.a,{label:"List",icon:r.a.createElement(ne.a,null)}),r.a.createElement(te.a,{label:"Filter",icon:r.a.createElement(ie.a,null)}))),0===n&&r.a.createElement(he,null,r.a.createElement(ue,null)),1===n&&r.a.createElement(he,null,"Future Iteration: List of Events will go here according to their SDGs."),2===n&&r.a.createElement(he,null,"Future Iteration: Allow the user to filter through events"))},ge=a(95),fe=a.n(ge),be={position:"relative",textAlign:"center",color:"white"},Ee={position:"absolute",top:"8px",left:"16px",fontWeight:"700"},ve={position:"absolute",top:"20px",left:"16px",fontWeight:"5000"},we={width:"100%",height:"100px"};function ye(e){var t=e.city;return r.a.createElement("div",{style:be},r.a.createElement("img",{src:fe.a,style:we}),r.a.createElement("div",{style:Ee},"LOCATION"),r.a.createElement("div",{style:ve},r.a.createElement("h1",null,t)))}new h.a;function ke(){var e=Object(n.useState)("San Francisco, CA"),t=Object(G.a)(e,2),a=t[0];t[1];return r.a.createElement("div",null,r.a.createElement(ye,{city:a}),r.a.createElement(pe,null))}var Oe=a(96),je=a.n(Oe),Se={paddingTop:"2%",fontWeight:"500"},Ie={height:"600px",width:"100%",paddingTop:"10px"};function xe(){return r.a.createElement("div",{style:{padding:"5%"}},r.a.createElement("h4",{style:{fontWeight:500}},"About"),r.a.createElement("h5",{style:Se},"Concept"),r.a.createElement("p",null,"The purpose of this App is to help make people more aware of the United Nation's Sustainable Development Goals (UNSDG's) based off their current location, eventbrite API, and Google Maps API. These API's will autopopulate events for the user based off the users preferred SDG's that they select when they first login."),r.a.createElement("h5",{style:Se},"Problem"),r.a.createElement("p",null,"The problem that is being addressed is raising awareness about SDG events going on in local areas to foster a greater sense of community for both new and present members."),r.a.createElement("h5",{style:Se}," Target Market"),r.a.createElement("p",null,"The target market is geared towards millenials and gen z in the local community. I polled my peers on Instagram, who are a mix of both, asking three questions specifically about SDG 13 (Climate Change):"),r.a.createElement("ol",{style:{padding:"10px"}},r.a.createElement("li",null," Assuming you believe in climate change, do you think you can make a difference to stop it? ",r.a.createElement("b",null,"A: Yes, 52/77, 68%  ")),r.a.createElement("li",null," Have you ever thought about doing a career that aligns with stopping climate change using the skills you already have? ",r.a.createElement("b",null,"A: Yes, 18/63, 29% ")," "),r.a.createElement("li",null," Do you have resources that will help you find how to contribute to stop climate change outside of donating and recycling? ",r.a.createElement("b",null,"A: Yes, 24/59, 41%"))),r.a.createElement("h5",{style:Se},"Analysis"),r.a.createElement("p",null,"The above results were very interesting to me and heavily inspired this idea. While it made me hopeful to see that more than half of my peers felt that they could make a difference to change SDG 13, it also made me worried that so many didn't, and some of it was because they felt they didn't have the resources to do so. This app would show them that there are opportunites for them to make a difference and expose them to a variety of SDG's."),r.a.createElement("h5",{style:Se},"Process"),r.a.createElement("h6",null,"Brainstorm & Wireframe"),r.a.createElement("p",null,"The first thing I did when I got the challenge was list the requirements and then brainstorm how I could make an impact on someone who is new to a city but in a way that isn't usually done. I am very passionate about the SDG's so I also knew that I wanted to incorporate them. Since I knew my target market was my peers, I thought about the challenges we faced when we all moved to NorCal. It appeared the greatest challenge was meeting new people and creating a community. I thought about the resources we used to meet new people like Facebook Events and Eventbrite. Then it all clicked - the app should present the user with SDG options and then suggest events that they would be interested in. From a technical standpoint it would have the user login and click which SDG's they like. It will then pipe the titles and keywords from the SDG data into Eventbrite search and then autopopulate the list tab and map tab with events that match the user's preferences."),r.a.createElement("h6",null,"Adobe XD UI Mockup "),r.a.createElement("p",null,"The next step I took was to give more detail to my wireframes via ",r.a.createElement("a",{href:"https://xd.adobe.com/embed/98cbd7e5-0357-4a93-7bca-0bdd17707d40-eefa",target:"_blank"},"interactive mockup on Adobe XD"),". You can click on the below mockup and scroll through events, click on the SDG button to learn more about it, and also view events on the map tab!",r.a.createElement("br",null),r.a.createElement("iframe",{width:"375",height:"700",src:"https://xd.adobe.com/embed/98cbd7e5-0357-4a93-7bca-0bdd17707d40-eefa/",frameBorder:"0",allowFullScreen:!0}),r.a.createElement("br",null),"Below is a snapshot of the interaction design to get the mockup above working correctly.",r.a.createElement("br",null),r.a.createElement("img",{src:je.a,style:Ie})),r.a.createElement("h6",null,"Developing in ReactJS"),r.a.createElement("p",null,"I have been coding in ReactJS for about a month now. I did find this project very challenging as I was constantly learning new concepts as I went. For example, Eventbrite is the backbone of this web app, and I found I didn't have the knowledge to OAuth into Eventbrite. Given the time constraint I decided to alter my strategy because I found it was taking too long. There were other requirements that needed to be accomplished and with more time I am sure I can figure out how to OAuth but it was more important to me to deliver something rather than nothing. So instead I focused next on implementing the Firebase database, gathering the SDG data into it, setting up the layout of the app, and connecting to the Google Maps API. I had never used the Google Maps API, a cloud database, or created a drawer that needed routing. I learned a lot from this project."),r.a.createElement("h6",{style:Se},"Next Steps"),r.a.createElement("p",null,"My next steps would be to learn how to OAuth into Eventbrite, parse the data from the api calls according to keywords for each SDG data, and pipe the events to the Maps and List tabs on the home screen. I would also need to learn how to implement cookies to be able to save the users SDG preferences and login state information. Lastly, I would implement better routing techniques so that the user can't reach the home page before being authenticated by the log in screen."))}var Ce=a(201),Ne=a(203),Ae=a(202),Ge=a(207),De=a(205),We=a(206),Me=a(98),Pe=a.n(Me),Le=a(99),Te=a.n(Le),Be=a(100),Fe=a.n(Be),Ue=a(97),He=a.n(Ue),ze=Object(M.a)(function(e){return{card:{maxWidth:300},media:{height:"100%",paddingTop:"100%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}});function Re(e){var t=e.sdg,a=ze(),n=r.a.useState(!1),o=Object(G.a)(n,2),l=o[0],i=o[1];return r.a.createElement(Ce.a,{className:a.card},r.a.createElement(Ae.a,{className:a.media,image:t.icon_url,title:"Paella dish"}),r.a.createElement(Ne.a,{action:r.a.createElement(R.a,null,r.a.createElement(He.a,null)),title:t.short,subheader:t.title}),r.a.createElement(De.a,{disableSpacing:!0},r.a.createElement(R.a,{"aria-label":"Add to favorites"},r.a.createElement(Pe.a,null)),r.a.createElement(R.a,{"aria-label":"Share"},r.a.createElement(Te.a,null)),r.a.createElement(R.a,{className:Object(W.a)(a.expand,Object(d.a)({},a.expandOpen,l)),onClick:function(){i(!l)},"aria-expanded":l,"aria-label":"Show more"},r.a.createElement(Fe.a,null))),r.a.createElement(We.a,{in:l,timeout:"auto",unmountOnExit:!0},r.a.createElement(Ge.a,null,"Future iteration: More description can go here if the user wants more info.")))}function Ye(){return(Ye=Object(k.a)(y.a.mark(function e(){var t,a,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={Connection:"keep-alive","Content-Type":"application/json"},e.next=3,fetch("/api/firebaseauth/sdginfo",{method:"POST",headers:t});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function qe(){var e=Object(n.useState)([]),t=Object(G.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)(function(){(function(){return Ye.apply(this,arguments)})().then(function(e){o(e)})}),r.a.createElement("div",{class:"container-fluid "},r.a.createElement("h4",{style:{fontWeight:500}},"SDG Favorites"),r.a.createElement("div",{className:"row"},Object.values(a).map(function(e){return r.a.createElement("div",{class:"col-xs-12 col-md-4 col-sm-2"},r.a.createElement(Re,{sdg:e}),r.a.createElement("p",null))})))}new h.a;var Ve=Object(M.a)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(c.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(0),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}});var Je=function(e){var t=Ve(),a=Object(P.a)(),n=r.a.useState(!1),o=Object(G.a)(n,2),l=o[0],i=o[1];return r.a.createElement("div",{className:t.root},r.a.createElement(T.a,null),r.a.createElement(B.a,{position:"fixed",className:Object(W.a)(t.appBar,Object(d.a)({},t.appBarShift,l))},r.a.createElement(F.a,null,r.a.createElement(R.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){i(!0)},edge:"start",className:Object(W.a)(t.menuButton,l&&t.hide)},r.a.createElement(q.a,null)),r.a.createElement(H.a,{variant:"h6",noWrap:!0},"SDG Events"))),r.a.createElement(L.a,{className:t.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:t.drawerPaper}},r.a.createElement("div",{className:t.drawerHeader},r.a.createElement(R.a,{onClick:function(){i(!1)}},"ltr"===a.direction?r.a.createElement(J.a,null):r.a.createElement(_.a,null))),r.a.createElement(z.a,null),r.a.createElement(U.a,null,r.a.createElement(C.a,{to:"/home",activeClassName:t.drawerHeader},r.a.createElement(K.a,{button:!0,key:"Home"},r.a.createElement(Q.a,{primary:"Home"}))),r.a.createElement(C.a,{to:"/about",activeClassName:t.drawerHeader},r.a.createElement(K.a,{button:!0,key:"About"},r.a.createElement(Q.a,{primary:"About"}))),r.a.createElement(C.a,{to:"/favorites",activeClassName:t.drawerHeader},r.a.createElement(K.a,{button:!0,key:"Favorites"},r.a.createElement(Q.a,{primary:"Favorites"})))),r.a.createElement(z.a,null),r.a.createElement(U.a,null,r.a.createElement(K.a,{button:!0,key:"Logout"},r.a.createElement(Q.a,{primary:"Logout"})))),r.a.createElement("main",{className:Object(W.a)(t.content,Object(d.a)({},t.contentShift,l))},r.a.createElement("div",{className:t.drawerHeader}),r.a.createElement($.a,{exact:!0,path:"/",render:function(){return r.a.createElement(Z.a,{to:"/login"})}}),r.a.createElement($.a,{path:"/home",component:ke}),r.a.createElement($.a,{path:"/about",component:xe}),r.a.createElement($.a,{path:"/favorites",component:qe})))},Xe=a(219),_e=(new h.a,function(e){return r.a.createElement(Xe.a,null," /*TO DO: This allows the user to route wherever even if they aren't logged in. need to use cookies to validated authentication and change how this is setup*/",r.a.createElement($.a,{exact:!0,path:"/login",component:A}),r.a.createElement($.a,{path:"/signup",component:D}),r.a.createElement(Je,null),"/*",r.a.createElement($.a,{path:"/home2",component:Je}),"*/")});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ke=a(215),Qe=a(105);a(155);l.a.render(r.a.createElement(Ke.a,null,r.a.createElement(Qe.a,{history:x},r.a.createElement(_e,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},95:function(e,t,a){e.exports=a.p+"static/media/GoldenGateBridge.2154af73.jpg"},96:function(e,t,a){e.exports=a.p+"static/media/AdobeXDInteractionMockup.844d1e29.png"}},[[109,1,2]]]);
//# sourceMappingURL=main.3a0fcdf8.chunk.js.map