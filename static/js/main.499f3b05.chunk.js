(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={addForm:"Form_addForm__2SBgy"}},13:function(t,e,n){t.exports={container:"container_container__3Zipe"}},20:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),o=(n(20),n(15)),s=n(3),u=n(4),l=n(6),b=n(5),d=n(11),h=n(12),m=n.n(h),j=n(0),f=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:m.a.addForm,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:e,required:!0,onChange:this.handleChange})]}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{type:"tel",onChange:this.handleChange,value:n,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{type:"submit",children:"Add"})]})}}]),n}(a.Component),p=n(13),C=n.n(p),O=n(14),v=n.n(O),g=n(8),x=n.n(g),_=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:x.a.ContactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{children:[Object(j.jsxs)("p",{children:[a,": ",c]}),Object(j.jsx)("button",{type:"button",className:x.a.ContactsList__btn,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},S=n(9),y=n.n(S),F=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:y.a.label,children:["Find contacts by name",Object(j.jsx)("input",{className:y.a.input,type:"text",value:e,onChange:n})]})},L=(n(30),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number;if(t.state.contacts.find((function(t){return t.name===n})))alert("".concat(n,"  is alredy in contacts"));else{var c={id:v.a.generate(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(o.a)(e))}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleTodos=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.getVisibleTodos();return Object(j.jsxs)("section",{className:C.a.container,children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(f,{onSubmit:this.addContact}),Object(j.jsx)("h2",{children:"Contact List"}),Object(j.jsx)(F,{value:this.state.filter,onChange:this.changeFilter}),Object(j.jsx)(_,{contacts:t,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component)),A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),A()},8:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__3b9PS",ContactsList__btn:"ContactList_ContactsList__btn__3M6Z4"}},9:function(t,e,n){t.exports={label:"Filter_label__3Eo41",input:"Filter_input__3JScK"}}},[[31,1,2]]]);
//# sourceMappingURL=main.499f3b05.chunk.js.map