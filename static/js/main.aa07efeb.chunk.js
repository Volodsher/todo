(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{26:function(e,t,o){},27:function(e,t,o){},45:function(e,t,o){"use strict";o.r(t);var c=o(1),l=o(13),n=o.n(l),r=(o(26),o(27),o(9)),a=o(3),s=o(10),i=o.n(s),d=o(0);function j(e){var t=e.setTodosGet,o=e.getTodos,l=Object(c.useState)(""),n=Object(r.a)(l,2),s=n[0],j=n[1];return Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault();var c={id:i.a.generate(),text:s,complete:!1};""!==c.text.trim()&&t([c].concat(Object(a.a)(o))),j("")},children:Object(d.jsx)("input",{name:"text",className:"new-todo",placeholder:"What needs to be done?",onChange:function(e){var t=e.target;j(t.value)},value:s})})}var u=o(2),b=o(4),h=o(5),p=o(8),O=o(7),m=function(e){Object(p.a)(o,e);var t=Object(O.a)(o);function o(){return Object(b.a)(this,o),t.apply(this,arguments)}return Object(h.a)(o,[{key:"render",value:function(){var e=this.props,t=e.todo,o=e.toggleComplete,c=e.text,l=e.toDelete;return Object(d.jsx)("li",{className:"",style:{textDecoration:t.complete?"line-through":"",color:t.complete?"#e4e4e4":""},children:Object(d.jsxs)("div",{className:"view",children:[Object(d.jsx)("input",{name:"status",type:"checkbox",className:"toggle",id:t.id,onChange:o,checked:t.complete?"checked":""}),Object(d.jsx)("label",{htmlFor:"todo-1",children:c}),Object(d.jsx)("button",{type:"button",className:"destroy",onClick:l})]})})}}]),o}(c.Component);function f(e){var t=e.tasks,o=e.setTasks,l=e.tasksToShow,n=Object(c.useState)(!0),s=Object(r.a)(n,2),i=s[0],j=s[1],b=[];return"all"===l?b=Object(a.a)(t):"active"===l?b=Object(a.a)(t).filter((function(e){return!e.complete})):"complete"===l&&(b=Object(a.a)(t).filter((function(e){return e.complete}))),Object(d.jsxs)("section",{className:"main",style:{display:"block"},children:[Object(d.jsx)("input",{onClick:function(){j(!i),o(Object(a.a)(t).map((function(e){return Object(u.a)(Object(u.a)({},e),{},{complete:i})})))},type:"checkbox",id:"toggle-all",name:"toggleAll",className:"toggle-all"}),Object(d.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"}),Object(d.jsx)("ul",{className:"todo-list",children:b.map((function(e){return Object(d.jsx)(m,{todo:e,text:e.text,toDelete:function(){return c=e.id,void o(Object(a.a)(t).filter((function(e){return e.id!==c})));var c},toggleComplete:function(){return c=e.id,void o(t.map((function(e){return e.id===c?Object(u.a)(Object(u.a)({},e),{},{complete:!e.complete}):e})));var c}},e.id)}))})]})}function g(e){var t=e.todosGet,o=e.todosSet,c=e.todosToShowGet,l=e.TodosToShowSet;return Object(d.jsxs)("footer",{className:"footer",style:{display:"block"},children:[Object(d.jsx)("span",{className:"todo-count",children:"".concat(Object(a.a)(t).filter((function(e){return!1===e.complete})).length," items left")}),Object(d.jsxs)("ul",{className:"filters",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#/",onClick:function(){return l("all")},style:{borderColor:"all"===c?"rgba(175, 47, 47, 0.2)":""},children:"All"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#/active",onClick:function(){return l("active")},style:{borderColor:"active"===c?"rgba(175, 47, 47, 0.2)":""},children:"Active"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#/completed",onClick:function(){return l("complete")},style:{borderColor:"complete"===c?"rgba(175, 47, 47, 0.2)":""},children:"Completed"})})]}),Object(d.jsx)("button",{type:"button",className:"clear-completed",style:{display:"block"},onClick:function(){o(Object(a.a)(t).filter((function(e){return!e.complete})))},children:"Clear all completed"})]})}function x(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),o=t[0],l=t[1],n=Object(c.useState)("all"),a=Object(r.a)(n,2),s=a[0],i=a[1];return 0===o.length?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("header",{className:"header",children:"Func-Todo 0"}),Object(d.jsx)("section",{className:"todoapp",children:Object(d.jsx)(j,{setTodosGet:l,getTodos:o})})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("header",{className:"header",children:["Func-Todo ",o.filter((function(e){return!e.complete})).length]}),Object(d.jsxs)("section",{className:"todoapp",children:[Object(d.jsx)(j,{className:"header",setTodosGet:l,getTodos:o}),Object(d.jsx)(f,{tasks:o,setTasks:l,tasksToShow:s}),Object(d.jsx)(g,{todosGet:o,todosSet:l,todosToShowGet:s,TodosToShowSet:i})]})]})}var T=o(15),C=function(e){Object(p.a)(o,e);var t=Object(O.a)(o);function o(){var e;Object(b.a)(this,o);for(var c=arguments.length,l=new Array(c),n=0;n<c;n++)l[n]=arguments[n];return(e=t.call.apply(t,[this].concat(l))).state={text:""},e.handleChange=function(t){var o=t.target;e.setState(Object(T.a)({},o.name,o.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.addCTodoSet({id:i.a.generate(),text:e.state.text,complete:!1}),e.setState({text:""})},e}return Object(h.a)(o,[{key:"render",value:function(){return Object(d.jsx)("form",{onSubmit:this.handleSubmit,children:Object(d.jsx)("input",{name:"text",className:"new-todo",placeholder:"What needs to be done?",onChange:this.handleChange,value:this.state.text})})}}]),o}(c.Component);function v(e){var t=e.todo,o=e.cToggleComplete,c=e.text,l=e.toDelete;return Object(d.jsx)("li",{className:"",style:{textDecoration:t.complete?"line-through":"",color:t.complete?"#e4e4e4":""},children:Object(d.jsxs)("div",{className:"view",children:[Object(d.jsx)("input",{name:"status",type:"checkbox",className:"toggle",id:t.id,onChange:o,checked:t.complete?"checked":""}),Object(d.jsx)("label",{htmlFor:"todo-1",children:c}),Object(d.jsx)("button",{type:"button",className:"destroy",onClick:l})]})})}var y=function(e){Object(p.a)(o,e);var t=Object(O.a)(o);function o(){var e;Object(b.a)(this,o);for(var c=arguments.length,l=new Array(c),n=0;n<c;n++)l[n]=arguments[n];return(e=t.call.apply(t,[this].concat(l))).state={toggleAll:!0},e.allComplete=function(){e.setState((function(e){return{toggleAll:!e.toggleAll}})),e.props.handleToggleAll(e.state.toggleAll)},e}return Object(h.a)(o,[{key:"render",value:function(){var e=this,t=[];return"all"===this.props.cTasksToShow?t=Object(a.a)(this.props.cTasks):"active"===this.props.cTasksToShow?t=Object(a.a)(this.props.cTasks).filter((function(e){return!e.complete})):"complete"===this.props.cTasksToShow&&(t=Object(a.a)(this.props.cTasks).filter((function(e){return e.complete}))),Object(d.jsxs)("section",{className:"main",style:{display:"block"},children:[Object(d.jsx)("input",{onClick:this.allComplete,type:"checkbox",id:"c-toggle-all",name:"toggleAll",className:"c-toggle-all"}),Object(d.jsx)("label",{htmlFor:"c-toggle-all",children:"Mark all as complete"}),Object(d.jsx)("ul",{className:"todo-list",children:t.map((function(t){return Object(d.jsx)(v,{todo:t,text:t.text,toDelete:function(){return e.props.handleDeleteTodo(t.id)},cToggleComplete:function(){return e.props.handleToggleOne(t.id)}},t.id)}))})]})}}]),o}(c.Component),S=function(e){Object(p.a)(o,e);var t=Object(O.a)(o);function o(){return Object(b.a)(this,o),t.apply(this,arguments)}return Object(h.a)(o,[{key:"render",value:function(){var e=this.props,t=e.jobs,o=e.handleJobsToShow,c=e.jobsToShow,l=e.deleteAllCompleted;return Object(d.jsxs)("footer",{className:"footer",style:{display:"block"},children:[Object(d.jsx)("span",{className:"todo-count",children:"".concat(Object(a.a)(t).filter((function(e){return!1===e.complete})).length," items left")}),Object(d.jsxs)("ul",{className:"filters",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#/",onClick:function(){return o("all")},style:{borderColor:"all"===c?"rgba(175, 47, 47, 0.2)":""},children:"All"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#/active",onClick:function(){return o("active")},style:{borderColor:"active"===c?"rgba(175, 47, 47, 0.2)":""},children:"Active"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#/completed",onClick:function(){return o("complete")},style:{borderColor:"complete"===c?"rgba(175, 47, 47, 0.2)":""},children:"Completed"})})]}),Object(d.jsx)("button",{type:"button",className:"clear-completed",style:{display:"block"},onClick:function(){return l()},children:"Clear all completed"})]})}}]),o}(c.Component),k=function(e){Object(p.a)(o,e);var t=Object(O.a)(o);function o(){var e;Object(b.a)(this,o);for(var c=arguments.length,l=new Array(c),n=0;n<c;n++)l[n]=arguments[n];return(e=t.call.apply(t,[this].concat(l))).state={cTodos:[],cTodosToShow:"all"},e.addCTodo=function(t){""!==t.text.trim()&&e.setState((function(e){return{cTodos:[t].concat(Object(a.a)(e.cTodos))}}))},e.cToggleComplete=function(t){e.setState((function(e){return{cTodos:e.cTodos.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{complete:!e.complete}):e}))}}))},e.deleteTodo=function(t){e.setState((function(e){return{cTodos:e.cTodos.filter((function(e){return e.id!==t}))}}))},e.deleteAllCompleted=function(){e.setState((function(e){return{cTodos:e.cTodos.filter((function(e){return!0!==e.complete}))}}))},e.cToggleAllComplete=function(t){e.setState((function(e){return{cTodos:e.cTodos.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{complete:!e.toggleAllComplete})})),toggleAllComplete:t}}))},e.handleTodosToShow=function(t){e.setState((function(){return{cTodosToShow:t}}))},e}return Object(h.a)(o,[{key:"render",value:function(){var e=this.state,t=e.cTodos,o=e.cTodosToShow,c=this.addCTodo,l=this.cToggleComplete,n=this.deleteTodo,r=this.cToggleAllComplete,a=this.handleTodosToShow,s=this.deleteAllCompleted;return 0===t.length?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("header",{className:"header",children:"Class-Todo 0"}),Object(d.jsx)("section",{className:"todoapp",children:Object(d.jsx)(C,{addCTodoSet:c,getCTodos:t})})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("header",{className:"header",children:["Class-Todo ",t.filter((function(e){return!e.complete})).length]}),Object(d.jsxs)("section",{className:"todoapp",children:[Object(d.jsx)(C,{addCTodoSet:c,getCTodos:t}),Object(d.jsx)(y,{cTasks:t,cTasksToShow:o,handleDeleteTodo:n,handleToggleAll:r,handleToggleOne:l}),Object(d.jsx)(S,{jobs:t,jobsToShow:o,handleJobsToShow:a,deleteAllCompleted:s})]})]})}}]),o}(c.Component),N=o(6);var w=Object(N.b)((function(e){return{state:e}}),(function(e){return{addNewTodo:function(t){return e({type:"ADD_RTODO",payload:t})}}}))((function(e){var t=e.addNewTodo,o=Object(c.useState)(""),l=Object(r.a)(o,2),n=l[0],a=l[1];return Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault();var o={id:i.a.generate(),text:n,complete:!1};""!==o.text.trim()&&t(o),a("")},children:Object(d.jsx)("input",{name:"text",className:"new-todo",placeholder:"What needs to be done?",onChange:function(e){var t=e.target;a(t.value)},value:n})})}));function A(e){var t=e.todo,o=e.toggleComplete,c=e.text,l=e.toDelete;return Object(d.jsx)("li",{className:"",style:{textDecoration:t.complete?"line-through":"",color:t.complete?"#e4e4e4":""},children:Object(d.jsxs)("div",{className:"view",children:[Object(d.jsx)("input",{name:"status",type:"checkbox",className:"toggle",id:t.id,onChange:o,checked:t.complete?"checked":""}),Object(d.jsx)("label",{htmlFor:"todo-1",children:c}),Object(d.jsx)("button",{type:"button",className:"destroy",onClick:l})]})})}var E=Object(N.b)((function(e){return{appState:e}}),(function(e){return{handleDelete:function(t){return e(function(e){return{type:"DELETE_ONE",payload:e}}(t))},toggleComplete:function(t){return e(function(e){return{type:"COMPLETE_ONE",payload:e}}(t))},toggleCompleteAll:function(t){return e(function(e){return{type:"COMPLETE_ALL",payload:e}}(t))}}}))((function(e){var t=e.appState,o=e.handleDelete,c=e.toggleComplete,l=e.toggleCompleteAll,n=[];return"all"===t.rTodosToShow?n=Object(a.a)(t.rTodos):"active"===t.rTodosToShow?n=Object(a.a)(t.rTodos).filter((function(e){return!e.complete})):"complete"===t.rTodosToShow&&(n=Object(a.a)(t.rTodos).filter((function(e){return e.complete}))),Object(d.jsxs)("section",{className:"main",style:{display:"block"},children:[Object(d.jsx)("input",{onClick:l,type:"checkbox",id:"r-toggle-all",name:"toggleAll",className:"r-toggle-all"}),Object(d.jsx)("label",{htmlFor:"r-toggle-all",children:"Mark all as complete"}),Object(d.jsx)("ul",{className:"todo-list",children:n.map((function(e){return Object(d.jsx)(A,{todo:e,text:e.text,toDelete:function(){return o(e.id)},toggleComplete:function(){return c(e.id)}},e.id)}))})]})}));var D=Object(N.b)((function(e){return{appState:e}}),(function(e){return{showAll:function(){return e({type:"SHOW_ALL"})},showActive:function(){return e({type:"SHOW_ACTIVE"})},showComplete:function(){return e({type:"SHOW_COMPLETE"})},clearCompleted:function(){return e({type:"CLEAR_COMPLETED"})}}}))((function(e){var t=e.appState,o=e.showAll,c=e.showActive,l=e.showComplete,n=e.clearCompleted,r=t.rTodos,s=t.rTodosToShow;return Object(d.jsxs)("footer",{className:"footer",style:{display:"block"},children:[Object(d.jsx)("span",{className:"todo-count",children:"".concat(Object(a.a)(r).filter((function(e){return!1===e.complete})).length," items left")}),Object(d.jsxs)("ul",{className:"filters",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#/",onClick:function(){return o()},style:{borderColor:"all"===s?"rgba(175, 47, 47, 0.2)":""},children:"All"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#/active",onClick:function(){return c()},style:{borderColor:"active"===s?"rgba(175, 47, 47, 0.2)":""},children:"Active"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#/completed",onClick:function(){return l()},style:{borderColor:"complete"===s?"rgba(175, 47, 47, 0.2)":""},children:"Completed"})})]}),Object(d.jsx)("button",{type:"button",className:"clear-completed",style:{display:"block"},onClick:function(){n()},children:"Clear all completed"})]})}));var L=Object(N.b)((function(e){return{appState:e}}))((function(e){var t=e.appState.rTodos;return 0===t.length?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("header",{className:"header",children:"Redux-Todo 0"}),Object(d.jsx)("section",{className:"todoapp",children:Object(d.jsx)(w,{})}),Object(d.jsx)("p",{children:t.map((function(e){return Object(d.jsx)("p",{children:e.text})}))})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("header",{className:"header",children:["Redux-Todo ",t.filter((function(e){return!e.complete})).length]}),Object(d.jsxs)("section",{className:"todoapp",children:[Object(d.jsx)(w,{}),Object(d.jsx)(E,{}),Object(d.jsx)(D,{})]})]})})),_=o(16),F={rTodos:[],rTodosToShow:"all",toggleAll:!0},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_RTODO":return Object(u.a)(Object(u.a)({},e),{},{rTodos:[t.payload].concat(Object(a.a)(e.rTodos))});case"DELETE_ONE":return Object(u.a)(Object(u.a)({},e),{},{rTodos:e.rTodos.filter((function(e){return e.id!==t.payload}))});case"COMPLETE_ONE":return Object(u.a)(Object(u.a)({},e),{},{rTodos:e.rTodos.map((function(e){return e.id===t.payload?Object(u.a)(Object(u.a)({},e),{},{complete:!e.complete}):e}))});case"COMPLETE_ALL":return Object(u.a)(Object(u.a)({},e),{},{toggleAll:!e.toggleAll,rTodos:e.rTodos.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{complete:e.toggleAll})}))});case"SHOW_ALL":return Object(u.a)(Object(u.a)({},e),{},{rTodosToShow:"all"});case"SHOW_ACTIVE":return Object(u.a)(Object(u.a)({},e),{},{rTodosToShow:"active"});case"SHOW_COMPLETE":return Object(u.a)(Object(u.a)({},e),{},{rTodosToShow:"complete"});case"CLEAR_COMPLETED":return Object(u.a)(Object(u.a)({},e),{},{rTodos:e.rTodos.filter((function(e){return!e.complete}))});default:return e}},W=Object(_.b)(M),P=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{}),Object(d.jsx)(k,{}),Object(d.jsx)(N.a,{store:W,children:Object(d.jsx)(L,{})})]})};n.a.render(Object(d.jsx)(P,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.aa07efeb.chunk.js.map