(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(7),s=a.n(l),o=(a(13),a(14),a(2)),c=a(3),r=a(1),m=a(5),u=a(4),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={editMode:!1},e.handleEdit=e.handleEdit.bind(Object(r.a)(e)),e}return Object(c.a)(a,[{key:"startEdit",value:function(e){this.setState({editMode:!0,text:e})}},{key:"handleEdit",value:function(e){this.setState({editMode:!0,text:e.target.value})}},{key:"saveEdit",value:function(){var e={id:this.props.item.id,text:this.state.text,completed:this.props.item.completed};this.setState({editMode:!1}),this.props.handleChange(e)}},{key:"render",value:function(){var e=this,t={id:this.props.item.id,text:this.props.item.text,completed:!this.props.item.completed},a=i.a.createElement("label",{className:this.props.item.completed?"completedItem":null},i.a.createElement("input",{className:"ToDoItemCheckbox",type:"checkbox",checked:this.props.item.completed,onChange:function(){e.props.handleChange(t)}}),this.props.item.text),n=i.a.createElement("div",{className:"EditItemDiv"},i.a.createElement("input",{type:"checkbox",checked:!1,onChange:function(){}}),i.a.createElement("input",{className:"EditItemInput",type:"text",value:this.state.text,onChange:this.handleEdit,onKeyUp:function(t){13===t.keyCode&&e.saveEdit()}})),l=i.a.createElement("button",{className:"DeleteItemButton",onClick:function(){e.props.deleteItem(e.props.item)}},"X"),s=this.state.editMode?i.a.createElement("button",{className:"SaveItemButton",onClick:function(){e.saveEdit()}},"s"):i.a.createElement("button",{className:"EditItemButton",onClick:function(){e.startEdit(e.props.item.text)}},"/");return i.a.createElement("div",{className:"ToDoItem"},this.state.editMode?n:a,this.props.item.completed?l:s)}}]),a}(i.a.Component),h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={itemData:[{id:e.itemId,text:"",completed:!1}],inputValue:"",buttonVisible:!1},n.addNew=n.addNew.bind(Object(r.a)(n)),n.handleChange=n.handleChange.bind(Object(r.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState({itemData:{id:this.props.itemId,text:e.target.value,completed:!1},inputValue:e.target.value,buttonVisible:""!==e.target.value})}},{key:"addNew",value:function(){this.setState((function(e){return{itemData:{id:e.itemData.id+1,text:"",completed:e.itemData.completed},inputValue:"",buttonVisible:!1}})),this.props.newItem(this.state.itemData)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"NewItem"},i.a.createElement("input",{type:"checkbox",checked:!1,onChange:function(){}}),i.a.createElement("input",{className:"NewItemInput",type:"text",value:this.state.inputValue,onChange:this.handleChange,onKeyUp:function(t){13===t.keyCode&&""!==t.target.value&&e.addNew()}}),this.state.buttonVisible&&i.a.createElement("button",{className:"NewItemButton",onClick:this.addNew},"+"))}}]),a}(i.a.Component);var p=function(){return i.a.createElement("header",null,i.a.createElement("h2",null,"Minha Lista de tarefas"))};var v=function(){return i.a.createElement("footer",null)},f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;if(Object(o.a)(this,a),e=t.call(this),null===JSON.parse(localStorage.getItem("list"))){localStorage.clear();localStorage.setItem("list",JSON.stringify([{id:0,text:"Escrever minha primeira tarefa",completed:!1}]))}return e.state={listData:JSON.parse(localStorage.getItem("list")),size:JSON.parse(localStorage.getItem("list")).length},e.handleChange=e.handleChange.bind(Object(r.a)(e)),e.newItem=e.newItem.bind(Object(r.a)(e)),e.deleteItem=e.deleteItem.bind(Object(r.a)(e)),e}return Object(c.a)(a,[{key:"handleChange",value:function(e){var t=this.state.listData.map((function(t,a){return t.id===e.id?{id:a,text:e.text,completed:e.completed}:{id:a,text:t.text,completed:t.completed}}));this.setState((function(e){return{listData:t,size:e.size}})),localStorage.setItem("list",JSON.stringify(t))}},{key:"newItem",value:function(e){var t=this.state.listData;t.push(e),this.setState((function(e){return{listData:t,size:e.size+1}})),localStorage.setItem("list",JSON.stringify(t))}},{key:"deleteItem",value:function(e){var t=this.state.listData;t.splice(e.id,1),this.setState((function(e){return{listData:t,size:e.size}})),localStorage.setItem("list",JSON.stringify(t))}},{key:"render",value:function(){var e=this,t=this.state.listData.map((function(t){return i.a.createElement("div",null,i.a.createElement(d,{key:t.id,item:t,handleChange:e.handleChange,deleteItem:e.deleteItem}),i.a.createElement("hr",null))})),a=Array.apply(null,{length:19-this.state.size}).map((function(t,a){return i.a.createElement("div",null,i.a.createElement(h,{key:a,itemId:e.state.size,newItem:e.newItem}),i.a.createElement("hr",null))}));return i.a.createElement("div",{className:"ToDoList"},i.a.createElement(p,null),t,a,i.a.createElement(h,{itemId:this.state.size,newItem:this.newItem}),i.a.createElement(v,null))}}]),a}(i.a.Component);var E=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.6d6d9c15.chunk.js.map