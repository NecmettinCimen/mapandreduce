(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{122:function(e,t,a){"use strict";var n=a(23),l=a(10),r=a(11),i=a(15),s=a(14),c=a(16),o=a(0),d=a.n(o),m=a(177),h=a(123),u=a(141),p=a(121),f=a.n(p),E=a(35),C=a(117),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={isOption:a.props.isOption,isCardRight:a.props.isCardRight||!1,cardRight:a.props.cardRight||null,fullCard:!1,collapseCard:!1,loadCard:!1,cardRemove:!1},a.cardReloadHandler=function(){a.setState({loadCard:!0}),setInterval(function(){a.setState({loadCard:!1})},3e3)},a.cardRemoveHandler=function(){a.setState({cardRemove:!0})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e,t,a,l,r=this,i=this.state.cardRight,s=[];return this.state.isOption?i=d.a.createElement("div",{className:"card-header-right"},d.a.createElement(m.a,{alignRight:!0,className:"btn-group card-option"},d.a.createElement(m.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},d.a.createElement("i",{className:"feather icon-more-horizontal"})),d.a.createElement(m.a.Menu,{as:"ul",className:"list-unstyled card-option"},d.a.createElement(m.a.Item,{as:"li",className:"dropdown-item",onClick:function(){r.setState(function(e){return{fullCard:!e.fullCard}})}},d.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),d.a.createElement("a",{href:C.a.BLANK_LINK}," ",this.state.fullCard?"Restore":"Maximize"," ")),d.a.createElement(m.a.Item,{as:"li",className:"dropdown-item",onClick:function(){r.setState(function(e){return{collapseCard:!e.collapseCard}})}},d.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),d.a.createElement("a",{href:C.a.BLANK_LINK}," ",this.state.collapseCard?"Expand":"Collapse"," ")),d.a.createElement(m.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},d.a.createElement("i",{className:"feather icon-refresh-cw"}),d.a.createElement("a",{href:C.a.BLANK_LINK}," Reload ")),d.a.createElement(m.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler},d.a.createElement("i",{className:"feather icon-trash"}),d.a.createElement("a",{href:C.a.BLANK_LINK}," Remove "))))):this.state.isCardRight&&(i=d.a.createElement("div",{className:"card-header-right"},i)),a=d.a.createElement(h.a.Header,null,d.a.createElement(h.a.Title,{as:"h5"},this.props.title),i),this.state.fullCard&&(s=[].concat(Object(n.a)(s),["full-card"]),e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(s=[].concat(Object(n.a)(s),["card-load"]),t=d.a.createElement("div",{className:"card-loader"},d.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(s=[].concat(Object(n.a)(s),["d-none"])),this.props.cardClass&&(s=[].concat(Object(n.a)(s),[this.props.cardClass])),l=d.a.createElement(h.a,{className:s.join(" "),style:e},a,d.a.createElement(u.a,{in:!this.state.collapseCard},d.a.createElement("div",null,d.a.createElement(h.a.Body,null,this.props.children))),t),d.a.createElement(E.a,null,l)}}]),t}(o.Component);t.a=f()(v)},142:function(e,t,a){"use strict";var n=a(10),l=a(11),r=a(15),i=a(14),s=a(16),c=a(0),o=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.text;return e.charAt(0).toUpperCase()+e.slice(1)}}]),t}(a.n(c).a.Component);t.a=o},262:function(e,t,a){"use strict";a.r(t);var n=a(127),l=a.n(n),r=a(128),i=a(39),s=a(10),c=a(11),o=a(15),d=a(14),m=a(38),h=a(16),u=a(0),p=a.n(u),f=a(145),E=a(133),C=a(184),v=a(175),g=a(162),b=a(35),O=a(122),N=a(142),j=a(164),w=function(e){function t(e){var a;if(Object(s.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={file:"",data:null,id:"0"},a.handleOnChange=a.handleOnChange.bind(Object(m.a)(a)),a.fileInput=p.a.createRef(),e.location.pathname.split("/").length>3){var n=e.location.pathname.split("/"),l=n[n.length-1];a.state.id=l}return a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleOnChange",value:function(e){var t=this;this.setState(Object(i.a)({},e.target.name,this.fileInput.current.files[0]));var a=new FileReader;a.onload=function(){var e=Object(r.a)(l.a.mark(function e(a){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=a.target.result,t.setState({data:n.split("\n")}),localStorage.setItem("data_"+t.state.id,n);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.readAsText(this.fileInput.current.files[0])}},{key:"render",value:function(){return p.a.createElement(b.a,null,p.a.createElement(f.a,null,p.a.createElement(E.a,null,p.a.createElement(O.a,{title:"Data",isCardRight:!0,cardRight:p.a.createElement(j.a,{to:"/jobs/detail/"+this.state.id},p.a.createElement(C.a,{variant:"warning"},p.a.createElement(N.a,{text:"\xc7al\u0131\u015ft\u0131r"})))},p.a.createElement(v.a,{style:{marginTop:10}},p.a.createElement(v.a.Group,null,p.a.createElement(v.a.Control,{ref:this.fileInput,accept:".csv, .txt",as:"input",type:"file",name:"file",onChange:this.handleOnChange}))),""!==this.state.file?p.a.createElement(g.a,{responsive:!0},p.a.createElement("tbody",null,p.a.createElement("tr",null,p.a.createElement("th",null,"Ad\u0131"),p.a.createElement("td",null,this.state.file.name)),p.a.createElement("tr",null,p.a.createElement("th",null,"Boyutu"),p.a.createElement("td",null,this.state.file.size<1024?this.state.file.size+" KB":this.state.file.size<1073741824?this.state.file.size/1024/1024+" MB":this.state.file.size/1024/1024/1024+" GB")),p.a.createElement("tr",null,p.a.createElement("th",null,"Tipi"),p.a.createElement("td",null,this.state.file.type)),p.a.createElement("tr",null,p.a.createElement("th",null,"Son De\u011fi\u015ftirilme Tarihi"),p.a.createElement("td",null,this.state.file.lastModifiedDate.toISOString())))):null,null!==this.state.data?p.a.createElement("div",{style:{overflow:"scroll",height:1e3}},p.a.createElement(g.a,null,p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",null,"Data"))),p.a.createElement("tbody",null,this.state.data.map(function(e,t){return p.a.createElement("tr",{key:"tr_"+t},p.a.createElement("td",null,e))})))):null))))}}]),t}(u.Component);t.default=w}}]);
//# sourceMappingURL=26.f333d722.chunk.js.map