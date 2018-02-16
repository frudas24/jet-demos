import {JetApp, JetView} from "webix-jet";

class TopView extends JetView {
	 config(){
		return {
			type: "space",
			rows: [
				{ view:"datatable", columns:[
					{ template:"{common.subrow()} test", fillspace:true }
				], subview:{
					view:"button", value:"Click Me", click: function(){ this.$scope.doSome() }
				}, data:[{ id:1 }]}
			]
		};
	}

	doSome(){
		webix.alert("Button was clicked");
	}
}


const app = new JetApp({
	id:			"createview",
	start:		"/top",
	views:{
		top:		TopView
	}
});


export default app;