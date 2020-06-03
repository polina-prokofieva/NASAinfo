(this.webpackJsonpnasa_app=this.webpackJsonpnasa_app||[]).push([[0],{33:function(e,t,a){e.exports=a(59)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),o=a(5),i=a(31),u=a(14),s=a(2),m=a(3),h=a(6),p=a(4),d=a(7),f=a(30),E=(a(42),function(e){var t=e.type,a=e.label,n=e.value,l=e.unit;return r.a.createElement("p",{className:t},r.a.createElement("span",{className:"label"},a,":\xa0"),r.a.createElement("span",{className:"value"},n),r.a.createElement("span",{className:"unit"},l))}),y={solChosen:function(e){return{type:"SOL_CHOSEN",payload:e}}},v=Object(o.b)((function(){return{}}),y)((function(e){var t=e.sol,a=e.day,n=a.AT,l=a.HWS,c=a.PRE,o=a.First_UTC,i=e.solChosen,u=new Date(o).toLocaleDateString("en-US",{month:"short",day:"numeric"}),s=n?Math.round(n.av):"&ndash;",m=l?Math.round(l.av):"&ndash;",h=c?Math.round(c.av):"&ndash;";return r.a.createElement("div",{className:"marsWeatherDay",onClick:function(){i(t)}},r.a.createElement("p",{className:"solDate"},"Sol ",t),r.a.createElement("p",{className:"date"},u),r.a.createElement(E,{type:"airT",label:"Air temp.",value:s,unit:"\xb0C"}),r.a.createElement(E,{type:"wind",label:"Wind",value:m,unit:"m/s"}),r.a.createElement(E,{type:"pressure",label:"Press.",value:h,unit:"Pa"}))})),b=(a(43),function(e){var t=e.title,a=e.measurement,n=e.data,l={minimum:n.mn,maximum:n.mx,average:n.av};return r.a.createElement("div",{className:"InfoBlock"},r.a.createElement("h5",null,t," (",a,"):"),Object.keys(l).map((function(e){return r.a.createElement("p",{key:e},r.a.createElement("span",null,e,":"),"\xa0",r.a.createElement("span",null,l[e]))})))}),g=Object(o.b)((function(e){return{sol:e.sol}}))((function(e){var t=e.data,a=e.sol,n=t[a],l=new Date(n.First_UTC).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});return r.a.createElement("div",{className:"details"},r.a.createElement("h3",null,"Sol ",a),r.a.createElement("h4",null,l),r.a.createElement("p",null,"Season: ",n.Season," "),r.a.createElement("div",{className:"mainData"},r.a.createElement(b,{title:"Air temperature",measurement:"\xb0C",data:n.AT}),r.a.createElement(b,{title:"Wind Speed",measurement:"m/s",data:n.HWS}),r.a.createElement(b,{title:"Pressure",measurement:"Pa",data:n.PRE})))})),O=(a(44),function(){return r.a.createElement("div",{className:"loadingio-spinner-eclipse-6k77a25kvoc"},r.a.createElement("div",{className:"ldio-y6dphe9xoic"},r.a.createElement("div",null)))}),j=(a(45),function(e){return r.a.createElement("div",{className:"error"},r.a.createElement("h5",null,"Ooops..."),r.a.createElement("p",null,"Something went wrong"))}),w=a(15),D=a.n(w),S=a(22),N=function e(){var t=this;Object(s.a)(this,e),this._apiBase="https://api.nasa.gov",this._apiKey="Z1FMxuzDUZu2v1JXYMHQSg40SzLpgua05AfFeELa",this._apiKeyParam="api_key=".concat(this._apiKey),this.getResource=function(){var e=Object(S.a)(D.a.mark((function e(a){var n,r,l,c=arguments;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:[],r="".concat(t._apiBase).concat(a,"?").concat(n.concat([t._apiKeyParam]).join("&")),e.next=4,fetch(r);case 4:if((l=e.sent).ok){e.next=7;break}throw new Error("Could not fetch ".concat(r,", received ").concat(l.status));case 7:return e.next=9,l.json();case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getPictureOfTheDay=function(){var e=Object(S.a)(D.a.mark((function e(a){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.getResource("/planetary/apod",a&&["date=".concat(a)]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getMarsWeather=Object(S.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.getResource("/insight_weather/",["feedtype=json","ver=1.0"]));case 1:case"end":return e.stop()}}),e)})))},C=(a(47),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).nasaService=new N,a.state={data:{},solKeys:[],loading:!0,error:!1},a.onWeatherLoaded=function(e){a.props.weatherLoaded(e),a.setState({data:e,solKeys:e.sol_keys,loading:!1,error:!1})},a.onError=function(){a.setState({loading:!1,error:!0})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.nasaService.getMarsWeather().then(this.onWeatherLoaded).catch(this.onError)}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.solKeys,n=e.loading,l=e.error,c=this.props.isDetailsVisible,o=!(n||l),i=l?r.a.createElement(j,null):null,u=n?r.a.createElement(O,null):null,s=o?r.a.createElement(k,{data:t,solKeys:a,isDetailsVisible:c&&o}):null;return r.a.createElement("div",{className:"marsWeather"},r.a.createElement("h2",null,"Mars Weather"),i,u,s)}}]),t}(n.Component)),k=function(e){var t=e.data,a=e.solKeys,n=e.isDetailsVisible;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"latestWeather"},a.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(v,{sol:e,day:t[e]}))}))),n&&r.a.createElement(g,{data:t}))},_={weatherLoaded:function(e){return{type:"WEATHER_LOADED",payload:e}}},x=Object(o.b)((function(e){return Object(f.a)(e),{}}),_)(C),A=(a(48),function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"marsWeatherPage"},r.a.createElement(x,{isDetailsVisible:!0}))}}]),t}(n.Component)),M=(a(49),function(){return r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("span",null,"Home"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#/gallery"},r.a.createElement("span",null,"Gallery"))),r.a.createElement("li",null,r.a.createElement("a",{href:"#/marsweather"},r.a.createElement("span",null,"Mars Weather"))))}),P=["January","February","March","April","May","June","July","August","September","October","November","December"],H=new Date,L=H.getFullYear(),W=H.getMonth(),F=new Array(L-2015+1).fill(2015).map((function(e,t){return 2015+t})),T=function(e){return P.map((function(t,a){return{value:a+1,label:t,isDisabled:e===L&&a>W}}))},V={value:W+1,label:P[W]},K=F.map((function(e,t){return{value:e,label:e}})),R=K[K.length-1],G=/www\.youtube\.com/,B=(a(50),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).nasaService=new N,a.state={url:null,title:"",explanation:"",loading:!0,error:!1},a.onPictureLoaded=function(e){var t=a.props.date;a.setState({url:e.url,title:e.title,loading:!1,error:!1}),localStorage.setItem("".concat(t,"-url"),e.url),localStorage.setItem("".concat(t,"-title"),e.title)},a.onError=function(){a.setState({loading:!1,error:!0})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.date,t=localStorage.getItem("".concat(e,"-url")),a=localStorage.getItem("".concat(e,"-title"));t?this.setState({url:t,title:a||"",loading:!1,error:!1}):this.nasaService.getPictureOfTheDay(e).then(this.onPictureLoaded).catch(this.onError)}},{key:"isVideoContent",value:function(e){return G.test(e)}},{key:"render",value:function(){var e=this.state,t=e.url,a=e.title,n=e.loading,l=e.error,c=this.props.date,o=this.isVideoContent(t)?r.a.createElement(J,{url:t}):r.a.createElement(I,{url:t,title:a,date:c}),i=!(n||l),u=l?r.a.createElement(j,null):null,s=n?r.a.createElement(O,null):null,m=i?o:null;return r.a.createElement("li",{className:"galleryPreview"},u,s,m)}}]),t}(n.Component)),I=function(e){var t=e.url,a=e.title,n=e.date;return r.a.createElement("img",{title:"".concat(n," ").concat(a),alt:a,src:t})},J=function(e){var t=e.url,a="".concat(t,"&controls=0");return r.a.createElement("iframe",{src:a,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; picture-in-picture",allowFullScreen:!0})},U=a(21),Y=(a(51),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){a.props.monthChosen(e.value)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.monthsOptions;return r.a.createElement(U.a,{className:"galleryFilterSelect selectMonth",defaultValue:V,options:e,onChange:this.handleChange})}}]),t}(n.Component)),z={monthChosen:function(e){return{type:"MONTH_CHOSEN",payload:e}}},Z=Object(o.b)((function(e){return{month:e.month,monthsOptions:e.monthsOptions}}),z)(Y),Q=(a(52),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){a.props.yearChosen(e.value)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(U.a,{className:"galleryFilterSelect selectYear",defaultValue:R,onChange:this.handleChange,options:K})}}]),t}(n.Component)),X={yearChosen:function(e){return{type:"YEAR_CHOSEN",payload:e}}},q=Object(o.b)((function(e){return{year:e.year}}),X)(Q),$=(a(53),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).startDate=new Date(a.props.year,a.props.month,1),a.endDate=new Date,a.state={dates:[]},a.twoDigits=function(e){return"".concat(e<10?"0":"").concat(e)},a.generateGalleryPreviews=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.startDate,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.endDate,n=[],r=e;r<t;r.setDate(r.getDate()+1))n.unshift(a.formatDate(r));a.setState({dates:n})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"formatDate",value:function(e){var t=e.getFullYear(),a=this.twoDigits(e.getMonth()+1),n=this.twoDigits(e.getDate());return"".concat(t,"-").concat(a,"-").concat(n)}},{key:"updateDates",value:function(){this.startDate=new Date(this.props.year,this.props.month,1),this.endDate=new Date(this.props.year,this.props.month+1,1)}},{key:"componentDidMount",value:function(){this.generateGalleryPreviews()}},{key:"componentDidUpdate",value:function(e,t){e.year===this.props.year&&e.month===this.props.month||(this.updateDates(),this.generateGalleryPreviews())}},{key:"render",value:function(){var e=this.state.dates;return r.a.createElement("div",{className:"Gallery"},r.a.createElement("h2",null," Gallery "),r.a.createElement("div",{className:"galleryFilter"},r.a.createElement(q,null),r.a.createElement(Z,null)),r.a.createElement("ul",{className:"GalleryContent"},e.map((function(e){return r.a.createElement(B,{date:e,key:e})}))))}}]),t}(n.Component)),ee=Object(o.b)((function(e){return{year:e.year,month:e.month}}))($),te=(a(54),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).nasaService=new N,a.state={url:null,title:"",explanation:"",hdurl:"*",loading:!0,error:!1},a.onPictureLoaded=function(e){a.setState({url:e.url,hdurl:e.hdurl,title:e.title,explanation:e.explanation,loading:!1,error:!1})},a.onError=function(){a.setState({loading:!1,error:!0})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.nasaService.getPictureOfTheDay().then(this.onPictureLoaded).catch(this.onError)}},{key:"isVideoContent",value:function(e){return G.test(e)}},{key:"render",value:function(){var e=this.state,t=e.url,a=e.hdurl,n=e.title,l=e.explanation,c=e.loading,o=e.error,i=this.isVideoContent(t)?r.a.createElement(ne,{url:t,title:n,explanation:l}):r.a.createElement(ae,{url:t,hdurl:a,title:n,explanation:l}),u=!(c||o),s=o?r.a.createElement(j,null):null,m=c?r.a.createElement(O,null):null,h=u?i:null;return r.a.createElement("div",{className:"pictureOfTheDay"},s,m,h)}}]),t}(n.Component)),ae=function(e){var t=e.url,a=e.hdurl,n=e.title,l=e.explanation;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"image"},r.a.createElement("img",{alt:n,src:t})),r.a.createElement("div",{className:"description"},r.a.createElement("h2",null,n),r.a.createElement("p",null,l),r.a.createElement("p",{className:"download"},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},"Download HD"))))},ne=function(e){var t=e.url,a=e.title,n=e.explanation,l="".concat(t,"&controls=0");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"image"},r.a.createElement("iframe",{src:l,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; picture-in-picture",allowFullScreen:!0})),r.a.createElement("div",{className:"description"},r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))},re=(a(55),function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(te,null),r.a.createElement(x,{viewDetails:!1}))}),le=(a(56),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(M,null),r.a.createElement(u.a,{path:"/",component:re,exact:!0}),r.a.createElement(u.a,{path:"/gallery",component:ee}),r.a.createElement(u.a,{path:"/marsweather",component:A})))}),ce=a(20),oe=a(18),ie={year:L,month:W,monthsOptions:T(L),sol:null},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"YEAR_CHOSEN":return Object(oe.a)({},e,{monthsOptions:T(t.payload),year:t.payload});case"MONTH_CHOSEN":return Object(oe.a)({},e,{month:t.payload});case"WEATHER_LOADED":return Object(oe.a)({},e,{sol:t.payload.sol_keys[0]});case"SOL_CHOSEN":return Object(oe.a)({},e,{sol:t.payload});default:return e}},se=Object(ce.b)(ue);a(58);c.a.render(r.a.createElement(o.a,{store:se},r.a.createElement(le,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.3696316b.chunk.js.map