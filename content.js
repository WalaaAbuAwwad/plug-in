 
 //z_index omitted
 
 function start(){
	


var mainBG = document.createElement("Div");
    mainBG.class = "editPanel";
	mainBG.id = "main";

	var add = document.createElement("IMG");
	    add.class = "editPanel";
        add.className = "icon";
        add.src = "https://cdn4.iconfinder.com/data/icons/finance-and-business-set2/32/fin32px080-16.png";
	mainBG.appendChild(add);
	
	var edit = document.createElement("IMG");
        edit.class = "editPanel";
	    edit.className = "icon";
        edit.src = "https://cdn4.iconfinder.com/data/icons/single-width-stroke/24/oui-icons-50-16.png";
    mainBG.appendChild(edit);
    
	var dlt = document.createElement("IMG");
        dlt.class = "editPanel";
	    dlt.className = "icon";
        dlt.src = "https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-16.png";
    mainBG.appendChild(dlt);
		   
    var space = document.createElement("Div");
        space.class = "editPanel";
        space.className = "space";
		
	mainBG.appendChild(space);
	
	
	var selector = document.createElement("IMG");
	    selector.class = "editPanel";
       selector.className = "icon";
        selector.src = "https://cdn1.iconfinder.com/data/icons/line-essentials-84/20/4126-16.png";
	mainBG.appendChild(selector);
	
	var space2 = document.createElement("Div");
        space2.class = "editPanel";
        space2.className = "space";
	mainBG.appendChild(space2);
	
	var ancestors = new Array();
	    ancestors[0] = document.createElement("Label");
        ancestors[0].class = "editPanel";
        ancestors[0].className = "ancestors";
		var txt = document.createTextNode("helloooooooooooooooo");
		ancestors[0].appendChild(txt);
	mainBG.appendChild(ancestors[0]);
	    ancestors[1] = document.createElement("Label");
        ancestors[1].class = "editPanel";
        ancestors[1].className = "ancestors";
		var txt = document.createTextNode("helloooooooooooooooo");
		ancestors[1].appendChild(txt);
	mainBG.appendChild(ancestors[1]);
		ancestors[2] = document.createElement("Label");
        ancestors[2].class = "editPanel";
        ancestors[2].className = "ancestors";
		var txt = document.createTextNode("helloooooooooooooooo");
		ancestors[2].appendChild(txt);
	mainBG.appendChild(ancestors[2]);
	    ancestors[3] = document.createElement("Label");
        ancestors[3].class = "editPanel";
        ancestors[3].className = "ancestors";
		var txt = document.createTextNode("helloooooooooooooooo");
		ancestors[3].appendChild(txt);
	mainBG.appendChild(ancestors[3]);
	    ancestors[4] = document.createElement("Label");
        ancestors[4].class = "editPanel";
        ancestors[4].className = "ancestors";
		var txt = document.createTextNode("helloooooooooooooooo");
		ancestors[4].appendChild(txt);
	mainBG.appendChild(ancestors[4]);    
	
	var space3 = document.createElement("Div");
        space3.class = "editPanel";
        space3.className = "space";
		//space3.setAttribute("style","width:100px;");
	mainBG.appendChild(space3);
	
	var close = document.createElement("IMG");
        close.class = "editPanel";
	    close.className = "icon";
        close.src = "https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/CloseCancelSquare-16.png";
    mainBG.appendChild(close);

var htmlmenu = document.createElement("Div");
    htmlmenu.class = "editPanel";
	htmlmenu.className = "submenu";
		
	var text = document.createElement("Button");
	    text.class = "editPanel";
	    var txt = document.createTextNode("<text>");
		text.appendChild(txt);
	    text.className = "tags";
		text.style.marginLeft="2px";
	htmlmenu.appendChild(text);
	var button = document.createElement("Button");;
	    button.class = "editPanel";
	    var txt = document.createTextNode("<button>");
		button.appendChild(txt);
	    button.className = "tags";
	htmlmenu.appendChild(button);
	var label = document.createElement("Button");;
	    label.class = "editPanel";
	    var txt = document.createTextNode("<label>");
		label.appendChild(txt);
	    label.className = "tags";
	htmlmenu.appendChild(label);
	var div = document.createElement("Button");;
	    div.class = "editPanel";
	    var txt = document.createTextNode("<div>");
		div.appendChild(txt);
	    div.className = "tags";
	htmlmenu.appendChild(div);
	var span = document.createElement("Button");;
	    span.class = "editPanel";
	    var txt = document.createTextNode("<span>");
		span.appendChild(txt);
	    span.className = "tags";
	htmlmenu.appendChild(span);
	var link = document.createElement("Button");;
	    link.class = "editPanel";
	    var txt = document.createTextNode("<link>");
		link.appendChild(txt);
	    link.className = "tags";
	htmlmenu.appendChild(link);
	var input = document.createElement("select");
        input.class = "editPanel";
	    input.className = "tags";
	      var op = document.createElement("option");
	          op.text ="<input>";
	    input.appendChild(op);
	      var op1 = document.createElement("option");
	          op1.text ="Text";
	    input.appendChild(op1);
	      var op2 = document.createElement("option");
	          op2.text ="Button";
	    input.appendChild(op2);
	      var op3 = document.createElement("option");
	          op3.text ="checkbox";
	    input.appendChild(op3);
	      var op4 = document.createElement("option");
	          op4.text ="color";
	    input.appendChild(op4);
	      var op5 = document.createElement("option");
	          op5.text ="Date";
	    input.appendChild(op5);
	      var op6 = document.createElement("option");
	          op6.text ="email";
	    input.appendChild(op6);
	      var op7 = document.createElement("option");
	          op7.text ="month";
	    input.appendChild(op7);
	      var op8 = document.createElement("option");
	          op8.text ="number";
	    input.appendChild(op8);
	      var op9 = document.createElement("option");
	          op9.text ="password";
	    input.appendChild(op9);
	      var op10 = document.createElement("option");
	          op10.text ="radio";
	    input.appendChild(op10);
	      var op11 = document.createElement("option");
	          op11.text ="range";
	    input.appendChild(op11);
	      var op12 = document.createElement("option");
	          op12.text ="reset";
	    input.appendChild(op12);
	      var op13 = document.createElement("option");
	          op13.text ="search";
	    input.appendChild(op13);
	      var op14 = document.createElement("option");
	          op14.text ="submit";
	    input.appendChild(op14);
	      var op15 = document.createElement("option");
	          op15.text ="tel";
	    input.appendChild(op15);
	      var op16 = document.createElement("option");
	          op16.text ="time";
	    input.appendChild(op16);
	      var op17 = document.createElement("option");
	          op17.text ="url";
	    input.appendChild(op17);
		
	htmlmenu.appendChild(input);
	
	//mainBG.appendChild(htmlmenu);
	 
var cssmenu = document.createElement("Div");
    cssmenu.class = "editPanel";
	cssmenu.className = "submenu";
	
	var width = document.createElement("select");
        width.class = "editPanel";
	    width.className = "tags";
        width.style.backgroundImage = 'url("https://cdn4.iconfinder.com/data/icons/resize/256/resize-29-16.png")';
	      var op = document.createElement("option");
	          op.text ="";
	    width.appendChild(op);
	      var op1 = document.createElement("option");
	          op1.text ="-100 ";
	    width.appendChild(op1);
	      var op2 = document.createElement("option");
	          op2.text ="-50 ";
	    width.appendChild(op2);
	      var op3 = document.createElement("option");
	          op3.text ="-25 ";
	    width.appendChild(op3);
	      var op4 = document.createElement("option");
	          op4.text ="-10 ";
	    width.appendChild(op4);
	      var op5 = document.createElement("option");
	          op5.text ="-5 ";
	    width.appendChild(op5);
	      var op6 = document.createElement("option");
	          op6.text ="+5 ";
	    width.appendChild(op6);
	      var op7 = document.createElement("option");
	          op7.text ="+10 ";
	    width.appendChild(op7);
	      var op8 = document.createElement("option");
	          op8.text ="+25 ";
	    width.appendChild(op8);
	      var op9 = document.createElement("option");
	          op9.text ="+50 ";
	    width.appendChild(op9);	
		  var op10 = document.createElement("option");
	          op10.text ="+100 ";
	    width.appendChild(op10);
	    width.class = "editPanel";
	    width.className = "cssbtns";
    cssmenu.appendChild( width);
	
	var height = document.createElement("select");
        height.class = "editPanel";
	    height.className = "tags";
        height.style.backgroundImage = 'url("https://cdn4.iconfinder.com/data/icons/resize/256/resize-30-16.png")';
	      var op = document.createElement("option");
	          op.text ="";
	    height.appendChild(op);
	      var op1 = document.createElement("option");
	          op1.text ="-100 ";
	    height.appendChild(op1);
	      var op2 = document.createElement("option");
	          op2.text ="-50 ";
	    height.appendChild(op2);
	      var op3 = document.createElement("option");
	          op3.text ="-25 ";
	    height.appendChild(op3);
	      var op4 = document.createElement("option");
	          op4.text ="-10 ";
	    height.appendChild(op4);
	      var op5 = document.createElement("option");
	          op5.text ="-5 ";
	    height.appendChild(op5);
	      var op6 = document.createElement("option");
	          op6.text ="+5 ";
	    height.appendChild(op6);
	      var op7 = document.createElement("option");
	          op7.text ="+10 ";
	    height.appendChild(op7);
	      var op8 = document.createElement("option");
	          op8.text ="+25 ";
	    height.appendChild(op8);
	      var op9 = document.createElement("option");
	          op9.text ="+50 ";
	    height.appendChild(op9);	
		  var op10 = document.createElement("option");
	          op10.text ="+100 ";
	    height.appendChild(op10);	    height.class = "editPanel";
	    height.className = "cssbtns";
    cssmenu.appendChild( height);
	
	var position = document.createElement("select");
        position.class = "editPanel";
	    position.className = "tags btn";
        position.style.backgroundImage = 'url("https://cdn1.iconfinder.com/data/icons/epic-hand-drawns/64/location_2-16.png")';
	      var op = document.createElement("option");
	          op.text ="";
	    position.appendChild(op);
	      var op1 = document.createElement("option");
	          op1.text ="static";
	    position.appendChild(op1);
	      var op2 = document.createElement("option");
	          op2.text ="relative";
	    position.appendChild(op2);
	      var op3 = document.createElement("option");
	          op3.text ="absolute";
	    position.appendChild(op3);
	cssmenu.appendChild(position);
	
	var move = document.createElement("Button");
        move.class = "editPanel";
	    move.className = "tags btn";
        move.style.backgroundImage = 'url("https://cdn3.iconfinder.com/data/icons/edition/100/move-16.png")';

	cssmenu.appendChild(move);

	var BGcolor = document.createElement("Label");
        BGcolor.class = "editPanel";
	    BGcolor.className = "tags inputs ";
        BGcolor.style.backgroundImage = 'url("https://cdn4.iconfinder.com/data/icons/essentials-volume-6/128/color-wheel-16.png")';
		var picker = document.createElement("Input");
		    picker.class ="editPanel";
			picker.type ="color";
			picker.className = "color";
		BGcolor.appendChild(picker);
	cssmenu.appendChild(BGcolor);	

	var BGimg = document.createElement("Label");
        BGimg.class = "editPanel";
	    BGimg.className = "tags inputs";
        BGimg.style.backgroundImage = 'url("https://cdn2.iconfinder.com/data/icons/pittogrammi/142/32-16.png")';
		var file = document.createElement("Input");
		    file.class ="editPanel";
			file.type ="file";
			file.className ="file";
			file.accept="image/x-png,image/gif,image/jpeg"
		BGimg.appendChild(file);
	cssmenu.appendChild(BGimg);	

	var border = document.createElement("select");
        border.class = "editPanel";
	    border.className = "tags";
        border.style.backgroundImage = 'url("https://cdn0.iconfinder.com/data/icons/penthemes-layour-builder/512/button-16.png")';
	      var op = document.createElement("option");
	          op.text ="";
	    border.appendChild(op);
	      var op1 = document.createElement("option");
	          op1.text ="none";
	    border.appendChild(op1);
	      var op2 = document.createElement("option");
	          op2.text ="solid";
	    border.appendChild(op2);
	      var op3 = document.createElement("option");
	          op3.text ="dashed";
	    border.appendChild(op3);
	      var op4 = document.createElement("option");
	          op4.text ="dotted";
	    border.appendChild(op4);
	      var op5 = document.createElement("option");
	          op5.text ="double";
	    border.appendChild(op5);
	      var op6 = document.createElement("option");
	          op6.text ="groove";
	    border.appendChild(op6);
	      var op7 = document.createElement("option");
	          op7.text ="ridge";
	    border.appendChild(op7);
	      var op8 = document.createElement("option");
	          op8.text ="inset";
	    border.appendChild(op8);
	      var op9 = document.createElement("option");
	          op9.text ="outset";
	    border.appendChild(op9);	
	    border.class = "editPanel";
	    border.className = "cssbtns";
    cssmenu.appendChild( border);	
	 mainBG.appendChild(cssmenu);
	 document.body.appendChild(mainBG);
	











//functions




	
}