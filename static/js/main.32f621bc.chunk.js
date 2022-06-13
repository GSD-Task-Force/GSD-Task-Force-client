(this["webpackJsonpGSD-Task-Force"]=this["webpackJsonpGSD-Task-Force"]||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(31),c=a.n(r),i=(a(77),a(39)),o=a(9),l=a(10),d=a(13),u=a(12),h=a(14),j=a(110),m=a(2),b=a(3),p=a(1),g=["user","component","render"],O=function(e){var t=e.user,a=e.component,n=e.render,s=Object(b.a)(e,g);return t&&n?Object(p.jsx)(h.b,Object(m.a)(Object(m.a)({},s),{},{render:n})):Object(p.jsx)(h.b,Object(m.a)(Object(m.a)({},s),{},{render:function(e){return t?Object(p.jsx)(a,Object(m.a)({},e)):Object(p.jsx)(h.a,{to:"/"})}}))},x=a(60),f=(a(86),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleClose=function(){return n.setState({show:!1})},n.state={show:!0},n.timeoutId=null,n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,a=e.heading,n=e.message,s=e.deleteAlert,r=e.id;return this.state.show||setTimeout((function(){s(r)}),300),Object(p.jsx)(x.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(x.a.Heading,{children:a}),Object(p.jsx)("p",{className:"alert-body",children:n})]})})}}]),a}(s.a.Component)),k=a(72),v=a(45),w=a(11),C=Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)(w.c,{to:"/create-task",className:"nav-link",children:"Create Task"}),Object(p.jsx)(w.c,{to:"/tasks/",className:"nav-link",children:"Home"}),Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)(w.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(p.jsx)(w.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]})]}),y=Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)(w.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(p.jsx)(w.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),S=function(e){var t=e.user;return Object(p.jsxs)(v.a,{bg:"dark",variant:"dark",expand:"md",children:[Object(p.jsx)(v.a.Brand,{children:Object(p.jsx)(w.b,{style:{textDecoration:"none"},to:"/tasks/",children:"GSD-Task-Force"})}),Object(p.jsx)(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(v.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(k.a,{className:"ml-auto d-flex justify-content-between",children:[t&&Object(p.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),t?C:y]})})]})},A=a(7),T="https://tranquil-lowlands-17148.herokuapp.com",N="http://localhost:4741",D="localhost"===window.location.hostname?N:T,P=a(29),I=a.n(P),U=function(e){return I()({url:D+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},L=a(5),G=a(23),B=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(A.a)({},e.target.name,e.target.value))},n.onSignUp=function(e){e.preventDefault();var t,a=n.props,s=a.msgAlert,r=a.history,c=a.setUser;(t=n.state,I()({method:"POST",url:D+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return U(n.state)})).then((function(e){return c(e.data.user)})).then((function(){return s({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){n.setState({email:"",password:"",passwordConfirmation:""}),s({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},n.state={email:"",password:"",passwordConfirmation:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.passwordConfirmation;return Object(p.jsx)("div",{className:"sign",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h4",{children:"Sign Up"}),Object(p.jsxs)(L.a,{onSubmit:this.onSignUp,children:[Object(p.jsxs)(L.a.Group,{controlId:"email",children:[Object(p.jsx)(L.a.Label,{children:"Email address"}),Object(p.jsx)(L.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsxs)(L.a.Group,{controlId:"password",children:[Object(p.jsx)(L.a.Label,{children:"Password"}),Object(p.jsx)(L.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsxs)(L.a.Group,{controlId:"passwordConfirmation",children:[Object(p.jsx)(L.a.Label,{children:"Password Confirmation"}),Object(p.jsx)(L.a.Control,{required:!0,name:"passwordConfirmation",value:n,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(p.jsx)(G.a,{className:"signBt",type:"submit",children:"Submit"})]})]})})}}]),a}(n.Component),_=Object(h.f)(B),E=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(A.a)({},e.target.name,e.target.value))},n.onSignIn=function(e){e.preventDefault();var t=n.props,a=t.msgAlert,s=t.history,r=t.setUser;U(n.state).then((function(e){return r(e.data.user)})).then((function(){return a({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return s.push("/tasks/")})).catch((function(e){n.setState({email:"",password:""}),a({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},n.state={email:"",password:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return Object(p.jsx)("div",{className:"sign",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h4",{children:"Sign In"}),Object(p.jsxs)(L.a,{onSubmit:this.onSignIn,children:[Object(p.jsxs)(L.a.Group,{controlId:"email",children:[Object(p.jsx)(L.a.Label,{children:"Email address"}),Object(p.jsx)(L.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(p.jsxs)(L.a.Group,{controlId:"password",children:[Object(p.jsx)(L.a.Label,{children:"Password"}),Object(p.jsx)(L.a.Control,{required:!0,name:"password",value:a,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(p.jsx)(G.a,{className:"signBt",type:"submit",children:"Submit"})]})]})})}}]),a}(n.Component),F=Object(h.f)(E),q=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,a=e.history,n=e.clearUser;(function(e){return I()({url:D+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return a.push("/")})).finally((function(){return n()}))}},{key:"render",value:function(){return""}}]),a}(n.Component),H=Object(h.f)(q),z=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(A.a)({},e.target.name,e.target.value))},n.onChangePassword=function(e){e.preventDefault();var t=n.props,a=t.msgAlert,s=t.history,r=t.user;(function(e,t){return I()({url:D+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(n.state,r).then((function(){return a({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return s.push("/task/")})).catch((function(e){n.setState({oldPassword:"",newPassword:""}),a({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},n.state={oldPassword:"",newPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,a=e.newPassword;return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(p.jsx)("h3",{children:"Change Password"}),Object(p.jsxs)(L.a,{onSubmit:this.onChangePassword,children:[Object(p.jsxs)(L.a.Group,{controlId:"oldPassword",children:[Object(p.jsx)(L.a.Label,{children:"Old password"}),Object(p.jsx)(L.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(p.jsxs)(L.a.Group,{controlId:"newPassword",children:[Object(p.jsx)(L.a.Label,{children:"New Password"}),Object(p.jsx)(L.a.Control,{required:!0,name:"newPassword",value:a,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(p.jsx)(G.a,{className:"submitBt",type:"submit",children:"Submit"})]})]})})}}]),a}(n.Component),W=Object(h.f)(z),M=function(e,t){return I()({method:"GET",url:D+"/task/"+e,headers:{Authorization:"Bearer ".concat(t.token)}})},V=function(e,t,a){return I()({method:"PATCH",url:D+"/task/"+e,headers:{Authorization:"Bearer ".concat(a.token)},data:{task:{title:t.title,description:t.description,date:t.date,checked:t.checked}}})},J=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(A.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.user,s=t.msgAlert,r=t.history;(function(e,t){return I()({method:"POST",url:D+"/task/",headers:{Authorization:"Bearer ".concat(t.token)},data:{task:{title:e.title,description:e.description,date:e.date}}})})(n.state,a).then((function(){return r.push("/tasks/")})).then((function(){s({heading:"Task created",message:"Now you'll for sure remember this!",variant:"success"})})).catch((function(e){s({heading:"Task creation failed",message:"Task error: "+e.message,variant:"danger"})}))},n.state={title:"",description:""},n}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Create a Task"}),Object(p.jsxs)("p",{children:["Fields marked with ",Object(p.jsx)("span",{style:{color:"red"},children:"*"})," are required"]}),Object(p.jsxs)(L.a,{onSubmit:this.handleSubmit,children:[Object(p.jsxs)(L.a.Group,{controlId:"title",children:[Object(p.jsxs)(L.a.Label,{children:[Object(p.jsx)("span",{style:{color:"red"},children:"*"}),"Title"]}),Object(p.jsx)(L.a.Control,{required:!0,type:"text",name:"title",value:this.state.title,placeholder:"Task Title",onChange:this.handleChange})]}),Object(p.jsxs)(L.a.Group,{controlId:"description",children:[Object(p.jsxs)(L.a.Label,{children:[Object(p.jsx)("span",{style:{color:"red"},children:"*"}),"Description"]}),Object(p.jsx)(L.a.Control,{required:!0,type:"text",name:"description",value:this.state.description,placeholder:"Task Description",onChange:this.handleChange})]}),Object(p.jsxs)(L.a.Group,{controlId:"date",children:[Object(p.jsxs)(L.a.Label,{children:[Object(p.jsx)("span",{style:{color:"red"},children:"*"}),"Date"]}),Object(p.jsx)(L.a.Control,{required:!0,type:"text",name:"date",value:this.state.date,placeholder:"Due Date: mm/dd/yyyy",onChange:this.handleChange})]}),Object(p.jsx)(G.a,{className:"createBt",type:"submit",children:"Submit"})]})]})}}]),a}(n.Component),R=Object(h.f)(J);var Y=function(e){return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("input",{className:"check",type:"checkbox",value:e.clicked,name:e._id,checked:e.checked,onClick:e.handleClick}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)(w.b,{to:"/tasks/".concat(e._id),children:Object(p.jsx)("h5",{className:"card-title",children:e.title})}),Object(p.jsx)("p",{className:"card-date",children:e.date}),Object(p.jsx)("p",{className:"card-text",children:e.description})]})]},e._id)};var K=function(e){return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("input",{className:"check",type:"checkbox",value:e.clicked,name:e._id,checked:e.checked,onClick:e.handleClick}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)(w.b,{to:"/tasks/".concat(e._id),children:Object(p.jsx)("h5",{className:"card-title",style:{textDecoration:"line-through"},children:e.title})}),Object(p.jsx)("p",{className:"card-date",style:{textDecoration:"line-through"},children:e.date}),Object(p.jsx)("p",{className:"card-text",style:{textDecoration:"line-through"},children:e.description})]})]},e._id)},Q=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleClick=function(e){var t=Object(i.a)(n.state.tasks),a=t.findIndex((function(t){return t._id===e.target.name}));t[a].checked=!t[a].checked,V(e.target.name,t[a],n.props.user).then((function(){return n.setState({tasks:t})})).catch((function(e){return n.props.msgAlert({heading:"Checked failure",message:"Something went wrong with checking this box: "+e.message,variant:"danger"})}))},n.inputHandler=function(e){var t=e.target.value.toLowerCase();n.setState({inputText:t})},n.handleSubmit=function(e){e.preventDefault(),n.setState({showAll:!1,showUnchecked:!1,showChecked:!1}),n.setState(Object(A.a)({},e.target.value,!0))},n.state={tasks:[],inputText:"",showAll:!0,showUnchecked:!1,showChecked:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.user,n=t.msgAlert;(function(e){return I()({method:"GET",url:D+"/task/",headers:{Authorization:"Bearer ".concat(e.token)}})})(a).then((function(t){return e.setState({tasks:t.data.task})})).then((function(){n({heading:"Index success",message:"Showing all tasks",variant:"success"})})).catch((function(e){n({heading:"Index fail",message:"Index error: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,t=this,a=this.state,n=a.tasks,s=a.showAll,r=a.showChecked;return null===n?"Loading...":(e=0===n.length?"No tasks on your to do list. Click 'Create Task' to add one.":s?n.filter((function(e){return e.title.toLowerCase().indexOf(t.state.inputText)>-1||""===t.state.inputText})).map((function(e){return e.checked?Object(p.jsx)(K,{_id:e._id,clicked:e.clicked,checked:e.checked,handleClick:t.handleClick,title:e.title,description:e.description,date:e.date}):Object(p.jsx)(Y,{_id:e._id,clicked:e.clicked,checked:e.checked,handleClick:t.handleClick,title:e.title,description:e.description,date:e.date})})):r?n.filter((function(e){return e.title.toLowerCase().indexOf(t.state.inputText)>-1||""===t.state.inputText})).map((function(e){return e.checked?Object(p.jsx)(K,{_id:e._id,clicked:e.clicked,checked:e.checked,handleClick:t.handleClick,title:e.title,description:e.description,date:e.date}):""})):n.filter((function(e){return e.title.toLowerCase().indexOf(t.state.inputText)>-1||""===t.state.inputText})).map((function(e){return e.checked?"":Object(p.jsx)(Y,{_id:e._id,clicked:e.clicked,checked:e.checked,handleClick:t.handleClick,title:e.title,description:e.description,date:e.date})})),Object(p.jsxs)("div",{className:"taskList",children:[Object(p.jsx)("input",{type:"text",onChange:this.inputHandler,className:"searchbar"}),Object(p.jsx)("form",{onSubmit:this.handleSubmit,children:Object(p.jsxs)("select",{onChange:function(e){return t.handleSubmit(e)},children:[Object(p.jsx)("option",{value:"showAll",children:"View All Tasks"}),Object(p.jsx)("option",{value:"showChecked",children:"View Completed Tasks"}),Object(p.jsx)("option",{value:"showUnchecked",children:"View In-Progress Tasks"})]})}),Object(p.jsx)("h3",{children:"Task List:"}),Object(p.jsx)("ul",{className:"d-flex flex-wrap",children:e})]}))}}]),a}(n.Component),X=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleDelete=function(){var e=n.props,t=e.match,a=e.user,s=e.msgAlert,r=e.history;(function(e,t){return I()({method:"DELETE",url:D+"/task/"+e,headers:{Authorization:"Bearer ".concat(t.token)}})})(t.params.id,a).then((function(){return r.push("/tasks/")})).then((function(){s({heading:"Successfully Deleted Task",message:"WooHoo!",variant:"success"})})).catch((function(e){s({heading:"Delete Task Failed",message:"Error message: "+e.message,variant:"danger"})}))},n.state={task:null},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.match,n=t.user,s=t.msgAlert;M(a.params.id,n).then((function(t){return e.setState({task:t.data.task})})).then((function(){s({heading:"Successfully Showing Task",message:"WooHoo!",variant:"success"})})).catch((function(e){s({heading:"Show Task Failed",message:"Error message: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){if(null===this.state.task)return"Loading...";var e=this.state.task,t=e.title,a=e.description,n=e.date,s=e.owner,r=this.props,c=r.user,i=r.match,o=r.history;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{children:t}),Object(p.jsxs)("p",{children:["Due By: ",n]}),Object(p.jsx)("p",{children:a}),c._id===s&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(G.a,{className:"upBt",onClick:function(){return o.push("/tasks/".concat(i.params.id,"/update"))},children:"Update"}),Object(p.jsx)(G.a,{className:"delBt",onClick:this.handleDelete,children:"Delete"})]})]})}}]),a}(n.Component),Z=Object(h.f)(X),$=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState(Object(A.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var t=n.props,a=t.user,s=t.msgAlert,r=t.match,c=t.history;V(r.params.id,n.state,a).then((function(){return c.push("/tasks/".concat(r.params.id))})).then((function(){s({heading:"Task updated",message:"Now it's different!",variant:"success"})})).catch((function(e){s({heading:"Task update failed",message:"Task error: "+e.message,variant:"danger"})}))},n.state={title:"",description:"",date:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.match,n=t.user,s=t.msgAlert;M(a.params.id,n).then((function(t){return e.setState({title:t.data.task.title,description:t.data.task.description,date:t.data.task.date})})).then((function(){s({heading:"Preloaded the update",message:"Worked",variant:"success"})})).catch((function(){s({heading:"Preloading the update failed",message:"Is not preloading it",variant:"danger"})}))}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(L.a,{onSubmit:this.handleSubmit,children:[Object(p.jsxs)(L.a.Group,{controlId:"title",children:[Object(p.jsx)(L.a.Label,{children:"Title"}),Object(p.jsx)(L.a.Control,{required:!0,type:"text",name:"title",value:this.state.title,placeholder:"Update Task Title",onChange:this.handleChange})]}),Object(p.jsxs)(L.a.Group,{controlId:"description",children:[Object(p.jsx)(L.a.Label,{children:"Description"}),Object(p.jsx)(L.a.Control,{required:!0,type:"text",name:"description",value:this.state.description,placeholder:"Update Task Description",onChange:this.handleChange})]}),Object(p.jsxs)(L.a.Group,{controlId:"date",children:[Object(p.jsx)(L.a.Label,{children:"Date"}),Object(p.jsx)(L.a.Control,{required:!0,type:"text",name:"date",value:this.state.date,placeholder:"Due Date: mm/dd/yyyy",onChange:this.handleChange})]}),Object(p.jsx)(G.a,{className:"submitBt",type:"submit",children:"Submit"})]})})}}]),a}(n.Component),ee=Object(h.f)($),te=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setUser=function(e){return n.setState({user:e})},n.clearUser=function(){return n.setState({user:null})},n.deleteAlert=function(e){n.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},n.msgAlert=function(e){var t=e.heading,a=e.message,s=e.variant,r=Object(j.a)();n.setState((function(e){return{msgAlerts:[].concat(Object(i.a)(e.msgAlerts),[{heading:t,message:a,variant:s,id:r}])}}))},n.state={user:null,msgAlerts:[]},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.msgAlerts,s=t.user;return Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)(S,{user:s}),a.map((function(t){return Object(p.jsx)(f,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(p.jsxs)("main",{className:"container",children:[Object(p.jsx)(h.b,{path:"/sign-up",render:function(){return Object(p.jsx)(_,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(h.b,{path:"/sign-in",render:function(){return Object(p.jsx)(F,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(p.jsx)(O,{user:s,path:"/sign-out",render:function(){return Object(p.jsx)(H,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:s})}}),Object(p.jsx)(O,{user:s,path:"/change-password",render:function(){return Object(p.jsx)(W,{msgAlert:e.msgAlert,user:s})}}),Object(p.jsx)(O,{user:s,path:"/create-task",render:function(){return Object(p.jsx)(R,{msgAlert:e.msgAlert,user:s})}}),Object(p.jsx)(O,{user:s,exact:!0,path:"/tasks/:id/update",render:function(){return Object(p.jsx)(ee,{msgAlert:e.msgAlert,user:s})}}),Object(p.jsx)(O,{user:s,exact:!0,path:"/tasks/",render:function(){return Object(p.jsx)(Q,{msgAlert:e.msgAlert,user:s})}}),Object(p.jsx)(O,{user:s,exact:!0,path:"/tasks/:id",render:function(){return Object(p.jsx)(Z,{msgAlert:e.msgAlert,user:s})}})]})]})}}]),a}(n.Component),ae=Object(p.jsx)(w.a,{basename:"/GSD-Task-Force-client",children:Object(p.jsx)(te,{})});c.a.render(ae,document.getElementById("root"))},77:function(e,t,a){},86:function(e,t,a){}},[[107,1,2]]]);
//# sourceMappingURL=main.32f621bc.chunk.js.map