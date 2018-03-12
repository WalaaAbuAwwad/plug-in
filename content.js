




function x(){
	
	


 var divElement = document.createElement("Div");
     divElement.class = "editPanel";
	 divElement.setAttribute("style","  position: absolute; top:0px; right:0px;z-index:1000; ");
	
var menu = document.createElement("Div");
     menu.class = "editPanel";
	 menu.setAttribute("style"," position:fixed; bottom:8px; right:0px; width:100%;height:150px;z-index: 1000; border-top: 5px solid black;");
	 menu.style.backgroundColor = "	#FFF8DC";

	var elements = document.createElement("Div");
     elements.class = "editPanel";
	 elements.setAttribute("style"," position:fixed; bottom:170px; right:0px; width:100%;height:40px;z-index: 1000;  color:black;vertical-align: middle;line-height: 40px;  border-top: 5px solid black;");
	 elements.style.backgroundColor = "	#FFF8DC";
	 
var parent1 = document.createElement("Div");
    parent1.class = "editPanel";
	parent1.setAttribute("style"," position:absolute; top:0px; left:0px; width:10%; height:40px;z-index: 1000; vertical-align: middle;line-height: 40px;text-align: center;font-size: 15px; font-weight: bold;");
	parent1.style.backgroundColor = "#FFF8DC";
	parent1.addEventListener("click",target,false);
	 	 
var parent2 = document.createElement("Div");
    parent2.class = "editPanel";
	parent2.setAttribute("style"," position:absolute; top:0px; left:200px; width:10%; height:40px;z-index: 1000;vertical-align: middle;line-height: 40px; text-align: center;font-size: 15px; font-weight: bold;");
	parent2.style.backgroundColor = "#FFF8DC";
	parent2.addEventListener("click",target,false);
	
var parent3 = document.createElement("Div");
    parent3.class = "editPanel";
	parent3.setAttribute("style","  position:absolute; top:0px; left:400px; width:10%; height:40px;z-index: 1000;vertical-align: middle;line-height: 40px; text-align: center;font-size: 15px; font-weight: bold;");
	parent3.style.backgroundColor = "#FFF8DC";
	parent3.addEventListener("click",target,false);
	
var parent4 = document.createElement("Div");
    parent4.class = "editPanel";
	parent4.setAttribute("style"," position:absolute; top:0px; left:600px; width:10%; height:40px;z-index: 1000;vertical-align: middle;line-height: 40px; text-align: center;font-size: 15px; font-weight: bold;");
	parent4.style.backgroundColor = "#FFF8DC";
	parent4.addEventListener("click",target,false);

var parent5 = document.createElement("Div");
    parent5.class = "editPanel";
	parent5.setAttribute("style"," position:absolute; top:0px; left:800px; width:10%; height:40px;text-align: center;vertical-align: middle;line-height: 40px;z-index: 1000; text-align: center;font-size: 15px; font-weight: bold;");
	parent5.style.backgroundColor = "#FFF8DC";	
	parent5.addEventListener("click",target,false);
	
	
	
	var arrow1 = document.createElement("IMG");
	arrow1.class = "editPanel";
	arrow1.src = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/forward-128.png";
	arrow1.setAttribute("style", "position:absolute; top:0px; left:150px; width:35px; height:35px; z-index: 1000;");
	 var arrow2 = document.createElement("IMG");
	arrow2.class = "editPanel";
	arrow2.src = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/forward-128.png";
	arrow2.setAttribute("style", "position:absolute; top:0px; left:350px; width:35px; height:35px; z-index: 1000;");
	var arrow3 = document.createElement("IMG");
	arrow3.class = "editPanel";
	arrow3.src = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/forward-128.png";
	arrow3.setAttribute("style", "position:absolute; top:0px; left:550px; width:35px; height:35px; z-index: 1000;");
	var arrow4 = document.createElement("IMG");
	arrow4.class = "editPanel";
	arrow4.src = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/forward-128.png";
	arrow4.setAttribute("style", "position:absolute; top:0px; left:750px; width:35px; height:35px; z-index: 1000;");
	 
	 elements.appendChild(parent1);
	 elements.appendChild(arrow1);
	 elements.appendChild(parent2);
	  elements.appendChild(arrow2);
	 elements.appendChild(parent3);
	  elements.appendChild(arrow3);
	 elements.appendChild(parent4);
	  elements.appendChild(arrow4);
	 elements.appendChild(parent5);

	 var elems = new Array();
	 elems.push(parent1);
	 elems.push(parent2);
	 elems.push(parent3);
	 elems.push(parent4);
	 elems.push(parent5);
	 

	 
	 
	 
	 
	 

var cssMenu = document.createElement("Div");
    cssMenu.class = "editPanel";
	cssMenu.setAttribute("style"," position: absolute;width:100%;height:130px; top:35px; left:40px;z-index: 1000;");

var htmlMenu = document.createElement("Div");
    htmlMenu.class = "editPanel";
	htmlMenu.setAttribute("style","  position: absolute;width:100%;height:130px; top:35px; left:0px;z-index: 1000;");	

var info = document.createElement("IMG");
	info.class = "editPanel";
	info.src = "https://cdn1.iconfinder.com/data/icons/navigate-the-interface/256/Ui_glyphs_dots-128.png";
	info.setAttribute("style", "position:absolute; bottom:175px; right:50px;width:20px; height:20px; z-index: 1000;");
    info.addEventListener("click",infoOn,false);
	 	
	//elements.appendChild(info);

var close = document.createElement("IMG");
    close.class = "editPanel";
	close.src = "https://cdn1.iconfinder.com/data/icons/material-core/14/close-128.png";
	close.setAttribute("style",  " position: absolute; top: 0px; right:0px; width:25px; height:25px;   z-index: 1000;");
    close.addEventListener("click",closeButton,false);

var close2 = document.createElement("IMG");
    close2.class = "editPanel";
	close2.src = "https://cdn0.iconfinder.com/data/icons/most-useful-icons/50/CLOSE-128.png";
	close2.setAttribute("style",  " position: absolute;top: 0px; right:0px; width:35px; height:35px;   z-index: 1000;");
    close2.addEventListener("click",close2Button,false);
	
	 elements.appendChild(close);
var html = document.createElement("IMG");
    html.class = "editPanel";
    html.src = "https://cdn3.iconfinder.com/data/icons/eldorado-stroke-documents/40/html-128.png";
	html.setAttribute("style", "position: absolute; top:0px; left:0px; width:35px; height:35px;z-index: 1000; ");
    html.addEventListener("click",htmlButton,false);


var css = document.createElement("IMG");
    css.class = "editPanel";
    css.src = "https://cdn3.iconfinder.com/data/icons/eldorado-stroke-documents/40/css-128.png";
	css.setAttribute("style", "position: absolute; top:0px; left:40px;width:35px; height:35px;z-index: 1000;");
    css.addEventListener("click",cssButton,false);
 
 menu.appendChild(css);
 menu.appendChild(html);
 //menu.appendChild(close);
 

var bgcolor = document.createElement("Input");
    bgcolor.class = "editPanel";
    bgcolor.addEventListener("change",colorButton,false);
	bgcolor.type = "color";
	bgcolor.value="#FFF8DC";
	bgcolor.setAttribute("style", "width:35px; height:35px; position: absolute;top:0px; left:40px; ");


var border = document.createElement("IMG");
    border.class = "editPanel";
    border.src = "https://cdn3.iconfinder.com/data/icons/glyph/227/Border-128.png";
	border.setAttribute("style", "width:40px; height:25px; ");
    border.addEventListener("click",borderButton,false);
	border.setAttribute("style", "width:35px; height:35px; position: absolute;top:0px; left:0px; ");
	
	
var bold = document.createElement("IMG");
    bold.class = "editPanel";
    bold.src = "https://cdn4.iconfinder.com/data/icons/text-solid-style/24/bold-128.png";
	bold.setAttribute("style", "width:40px; height:25px; ");
    bold.addEventListener("click",boldButton,false);
	bold.setAttribute("style", "width:35px; height:35px; position: absolute;top:0px; left:90px; ");
var italic = document.createElement("IMG");
    italic.class = "editPanel";
    italic.src = "https://cdn0.iconfinder.com/data/icons/TWG_Retina_Icons/64/font_italic.png";
	italic.setAttribute("style", "width:40px; height:25px; ");
    italic.addEventListener("click",italicButton,false);
	italic.setAttribute("style", "width:30px; height:35px; position: absolute;top:0px; left:130px; ");
	
var underline = document.createElement("IMG");
    underline.class = "editPanel";
    underline.src = "https://cdn4.iconfinder.com/data/icons/text-solid-style/24/underline-128.png";
	underline.setAttribute("style", "width:40px; height:25px; ");
    underline.addEventListener("click",underlineButton,false);
	underline.setAttribute("style", "width:35px; height:35px; position: absolute;top:0px; left:170px; ");
	
	var content = document.createElement("Label");
	content.id = "new";
	content.setAttribute("style"," width:55px; height:35px; position: absolute;top:0px; left:200px; ");
    var txt = document.createTextNode("edit text");
	content.appendChild(txt);
	
	var newText = document.createElement("Input");
	newText.id = "new";
	newText.setAttribute("style","width:55px; height:35px; position: absolute;top:0px; left:250px;");
	newText.addEventListener("change",edit,false);
	
	
	var textColor = document.createElement("Input");
    textColor.class = "editPanel";
    textColor.addEventListener("change",textcolor,false);
	textColor.type = "color";
	textColor.value="#FFF8DC";
    textColor.setAttribute("style", "width:35px; height:35px; position: absolute;top:0px; left:300px; ");
	
	var textRight = document.createElement("IMG");
    textRight.class = "editPanel";
    textRight.src = "https://cdn3.iconfinder.com/data/icons/text/100/text_align_right-128.png";
	textRight.setAttribute("style", "width:40px; height:25px; ");
    textRight.addEventListener("click",rightButton,false);
	textRight.setAttribute("style", "width:35px; height:35px; position: absolute;top:0px; left:340px; ");
	
	var textLeft = document.createElement("IMG");
    textLeft.class = "editPanel";
    textLeft.src = "https://cdn2.iconfinder.com/data/icons/picol-vector/32/text_align_left-128.png";
	textLeft.setAttribute("style", "width:40px; height:25px; ");
    textLeft.addEventListener("click",leftButton,false);
	textLeft.setAttribute("style", "width:35px; height:35px; position: absolute;top:0px; left:380px; ");
	
	var textCentered = document.createElement("IMG");
    textCentered.class = "editPanel";
    textCentered.src = "https://cdn3.iconfinder.com/data/icons/text/100/text_align_center-128.png";
	textCentered.setAttribute("style", "width:40px; height:25px; ");
    textCentered.addEventListener("click",centerButton,false);
	textCentered.setAttribute("style", "width:35px; height:35px; position: absolute;top:0px; left:420px; ");
	
	var overline= document.createElement("IMG");
   overline.class = "editPanel";
   overline.src = "https://cdn4.iconfinder.com/data/icons/text-solid-style/24/underline-128.png";
	overline.setAttribute("style", "width:40px; height:25px; ");
   overline.addEventListener("click",overlineButton,false);
	overline.setAttribute("style", "width:35px; height:35px; position: absolute;top:0px; left:460px; ");
	
	var linethrough = document.createElement("IMG");
    linethrough.class = "editPanel";
    linethrough.src = "https://cdn4.iconfinder.com/data/icons/text-solid-style/24/underline-128.png";
	linethrough.setAttribute("style", "width:40px; height:25px; ");
   linethrough.addEventListener("click",linethroughButton,false);
	linethrough.setAttribute("style", "width:35px; height:35px; position: absolute;top:0px; left:500px; ");

	var spacing = document.createElement("Label");
	spacing.id = "new";
	spacing.setAttribute("style"," width:60px; height:35px; position: absolute;top:0px; left:540px; ");
    var txt = document.createTextNode("Letter Sapacing");
	spacing.appendChild(txt);
	
	var letspacing = document.createElement("input");
	letspacing.id = "new";
	letspacing.type ="range";
	letspacing.max ="10";
	letspacing.min ="-10";
	letspacing.step ="1";
	letspacing.value ="0";
	letspacing.setAttribute("style"," width:60px; height:35px; position: absolute;top:0px; left:580px; ");
    letspacing.addEventListener("change",Spacing,false);
	
	var spacing2 = document.createElement("Label");
	spacing2.id = "new";
	spacing2.setAttribute("style"," width:60px; height:35px; position: absolute;top:0px; left:600px; ");
    var txt = document.createTextNode("Word Sapacing");
	spacing2.appendChild(txt);
	
	var wordspacing = document.createElement("input");
	wordspacing.id = "new";
	wordspacing.type ="range";
	wordspacing.max ="10";
	wordspacing.min ="-10";
	wordspacing.step ="1";
	wordspacing.value ="0";
	wordspacing.setAttribute("style"," width:60px; height:35px; position: absolute;top:0px; left:640px; ");
   wordspacing.addEventListener("change",WSpacing,false);
	
	var leftborder = document.createElement("IMG");
    leftborder.class = "editPanel";
    leftborder.src = "https://cdn3.iconfinder.com/data/icons/glyph/227/Border-128.png";
	leftborder.setAttribute("style", "width:40px; height:25px; ");
   leftborder.addEventListener("click",leftborderButton,false);
   leftborder.setAttribute("style", "width:35px; height:35px; position: absolute;top:0px; left:680px; ");
	
	var rightborder = document.createElement("IMG");
   rightborder.class = "editPanel";
   rightborder.src = "https://cdn3.iconfinder.com/data/icons/glyph/227/Border-128.png";
	rightborder.setAttribute("style", "width:40px; height:25px; ");
   rightborder.addEventListener("click",rightborderButton,false);
   rightborder.setAttribute("style", "width:35px; height:35px; position: absolute;top:0px; left:720px; ");
   
   var topborder = document.createElement("IMG");
    topborder.class = "editPanel";
    topborder.src = "https://cdn3.iconfinder.com/data/icons/glyph/227/Border-128.png";
	topborder.setAttribute("style", "width:40px; height:25px; ");
   topborder.addEventListener("click",topborderButton,false);
  topborder.setAttribute("style", "width:35px; height:35px; position: absolute;top:0px; left:760px; ");
  
  var bottomborder = document.createElement("IMG");
   bottomborder.class = "editPanel";
    bottomborder.src = "https://cdn3.iconfinder.com/data/icons/glyph/227/Border-128.png";
	bottomborder.setAttribute("style", "width:40px; height:25px; ");
   bottomborder.addEventListener("click",bottomborderButton,false);
   bottomborder.setAttribute("style", "width:35px; height:35px; position: absolute;top:0px; left:800px; ");
	
	var borderWidth = document.createElement("input");
	borderWidth.id = "new";
	borderWidth.type ="range";
	borderWidth.max ="10";
	borderWidth.min ="-10";
	borderWidth.step ="1";
	borderWidth.value ="0";
   borderWidth.setAttribute("style"," width:60px; height:35px; position: absolute;top:0px; left:840px; ");
    borderWidth.addEventListener("change",borderWidthButton,false);
	
	var borderColor = document.createElement("Input");
    borderColor.class = "editPanel";
    borderColor.addEventListener("change",bordercolor,false);
	borderColor.type = "color";
	borderColor.value="#FFF8DC";
    borderColor.setAttribute("style", "width:35px; height:35px; position: absolute;top:0px; left:880px; ");
	
	var borderType = document.createElement("select");
	borderType.setAttribute("style", "width:50px; height:35px;position: absolute;top:0px; left:920px;  ");
	borderType.addEventListener("change",borderTypeButton,false);   
	borderType.style.backgroundColor="#FFE4C4";
	var typ = document.createElement("option");
	borderType.appendChild(typ);
	
	var typ2 = document.createElement("option");
	    typ2.text ="dotted";
	borderType.appendChild(typ2);
	var typ3 = document.createElement("option");
	    typ3.text ="dashed";
	borderType.appendChild(typ3);
	var typ4 = document.createElement("option");
	    typ4.text ="solid";
	borderType.appendChild(typ4);
	var typ5 = document.createElement("option");
	    typ5.text ="double";
	borderType.appendChild(typ5);
	var typ6 = document.createElement("option");
	    typ6.text ="groove";
	borderType.appendChild(typ6);
	var typ7 = document.createElement("option");
	    typ7.text ="ridge";
	borderType.appendChild(typ7);
	var typ8 = document.createElement("option");
	    typ8.text ="inset";
	borderType.appendChild(typ8);
	var typ9 = document.createElement("option");
	    typ9.text ="outset";
	borderType.appendChild(typ9);
	var typ10 = document.createElement("option");
	    typ10.text ="none";
	borderType.appendChild(typ10);
	var typ11 = document.createElement("option");
	    typ11.text ="hidden";
	borderType.appendChild(typ11);

		var elementWidth = document.createElement("input");
	elementWidth.id = "new";
	elementWidth.type ="range";
	elementWidth.max ="100";
	elementWidth.min ="-100";
	elementWidth.step ="1";
 elementWidth.setAttribute("style"," width:60px; height:35px; position: absolute;top:0px; left:960px; ");
   elementWidth.addEventListener("change",elementWidthButton,false);
		
		var elementHeight = document.createElement("input");
	elementHeight.id = "new";
	elementHeight.type ="range";
	elementHeight.max ="100";
	elementHeight.min ="-100";
	elementHeight.step ="1";
   elementHeight.setAttribute("style"," width:60px; height:35px; position: absolute;top:0px; left:1000px; ");
    elementHeight.addEventListener("change",elementHeightButton,false);
	
	
	var relative = document.createElement("Label");
	relative.id = "new";
	relative.setAttribute("style"," width:55px; height:35px; position: absolute;top:40px; left:240px; ");
    var txt = document.createTextNode("relative");
	relative.appendChild(txt);
	var relativeBox = document.createElement("input");
	relativeBox .id = "new";
	relativeBox .type ="radio";
    relativeBox .setAttribute("style"," width:15px; height:15px; position: absolute;top:40px; left:200px; ");
    relativeBox .addEventListener("change",position,false);
	
		var absolute = document.createElement("Label");
	absolute.id = "new";
	absolute.setAttribute("style"," width:55px; height:35px; position: absolute;top:40px; left:320px; ");
    var txt = document.createTextNode("absolute");
	absolute.appendChild(txt);
	var absoluteBox = document.createElement("input");
	absoluteBox .id = "new";
	absoluteBox .type ="radio";
    absoluteBox .setAttribute("style"," width:15px; height:15px; position: absolute;top:40px; left:280px; ");
    absoluteBox .addEventListener("change",position,false);
	
		var staticpo = document.createElement("Label");
	staticpo.id = "new";
	staticpo.setAttribute("style"," width:55px; height:35px; position: absolute;top:40px; left:400px; ");
    var txt = document.createTextNode("static");
	staticpo.appendChild(txt);
	var staticBox = document.createElement("input");
	staticBox .id = "new";
	staticBox .type ="radio";
    staticBox .setAttribute("style"," width:15px; height:15px; position: absolute;top:40px; left:360px; ");
    staticBox .addEventListener("change",position,false);
	
	var resetDef= document.createElement("input");
resetDef.id = "new";
	resetDef.type ="reset";
   resetDef.setAttribute("style"," width:60px; height:20px; position: absolute;top:40px; left:450px; ");
    resetDef.addEventListener("click",resetButton,false);

		var move = document.createElement("IMG");
    move.class = "editPanel";
    move.src = "https://cdn3.iconfinder.com/data/icons/text/100/text_align_right-128.png";
	move.setAttribute("style", "width:40px; height:25px; ");
    move.addEventListener("click",moveButton,false);
    move.setAttribute("style", "width:35px; height:35px; position: absolute;top:40px; left:500px; ");
	
	
	
cssMenu.appendChild(bgcolor);
cssMenu.appendChild(border);
cssMenu.appendChild(bold);
cssMenu.appendChild(italic);
cssMenu.appendChild(underline);
cssMenu.appendChild(overline);
cssMenu.appendChild(linethrough);
cssMenu.appendChild(content);
cssMenu.appendChild(newText);
cssMenu.appendChild(textColor);
cssMenu.appendChild(textRight);
cssMenu.appendChild(textLeft);
cssMenu.appendChild(textCentered);
cssMenu.appendChild(spacing);
cssMenu.appendChild(letspacing);
cssMenu.appendChild(spacing2);
cssMenu.appendChild(wordspacing);
cssMenu.appendChild(rightborder);
cssMenu.appendChild(leftborder);
cssMenu.appendChild(topborder);
cssMenu.appendChild(bottomborder);
cssMenu.appendChild(borderWidth);
cssMenu.appendChild(borderColor);
cssMenu.appendChild(borderType);
cssMenu.appendChild(elementHeight);
cssMenu.appendChild(elementWidth);
cssMenu.appendChild(relativeBox);
cssMenu.appendChild(relative);
cssMenu.appendChild(absolute);
cssMenu.appendChild(absoluteBox);
cssMenu.appendChild(staticpo);
cssMenu.appendChild(staticBox);
cssMenu.appendChild(resetDef);
cssMenu.appendChild(move);

	
var text = document.createElement("IMG");
    text.class = "editPanel";
    text.src = "https://cdn3.iconfinder.com/data/icons/eldorado-stroke-documents/40/txt-128.png";
	text.setAttribute("style", "width:35px; height:35px; position: absolute;top:0px; left:0px; ");
    text.addEventListener("click",txtButton,false);
   
	
var button = document.createElement("IMG");
    button.class = "editPanel";
    button.src = "https://cdn0.iconfinder.com/data/icons/thin-text-editing/24/thin-0257_button-128.png";
	button.setAttribute("style", "width:35px; height:35px; position: absolute;top:0px; left:40px; ");
    button.addEventListener("click",btnButton,false);
	
var label = document.createElement("IMG");
    label.class = "editPanel";
    label.src = "https://cdn2.iconfinder.com/data/icons/money-shoping/96/price_tag_label-2-128.png";
	label.setAttribute("style", "width:35px; height:35px; position: absolute;top:0px; left:80px; ");
    label.addEventListener("click",labelButton,false);
 
 var input = document.createElement("select");
	input.setAttribute("style", "width:50px; height:35px;position: absolute;top:0px; left:120px;  ");
	//background-image:url(https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/input-field-search-field-outline-32.png);

	
	input.addEventListener("change",inputButton,false);   
	input.style.backgroundColor="#FFE4C4";
	var op = document.createElement("option");
	    //op.text ="";
		//op.disabled=true;
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

	
	
	
	

var div = document.createElement("IMG");
    div.class = "editPanel";
    div.src = "https://cdn1.iconfinder.com/data/icons/network-and-communication-4-1/48/183-128.png";
	div.setAttribute("style", "width:35px; height:35px;position: absolute;top:0px; left:180px; ");
    div.addEventListener("click",DivButton,false);   

var span = document.createElement("IMG");
    span.class = "editPanel";
    span.src = "https://cdn4.iconfinder.com/data/icons/search-icon-set-glyphs-version/100/range-2-128.png";
	span.setAttribute("style", "width:35px; height:35px;position: absolute;top:0px; left:220px; ");
    span.addEventListener("click",spanButton,false); 	

var link = document.createElement("IMG");
    link.class = "editPanel";
    link.src = "https://cdn0.iconfinder.com/data/icons/pixon-1/24/Link_hyperlink-128.png";
	link.setAttribute("style", "width:35px; height:35px;position: absolute;top:0px; left:260px; ");
    link.addEventListener("click",linkButton,false); 		
  
var img = document.createElement("IMG");
    img.class = "editPanel";
    img.src = "https://cdn2.iconfinder.com/data/icons/designers-and-developers-icon-set/32/image-128.png";
	img.setAttribute("style", "width:35px; height:35px;position: absolute;top:0px; left:280px; ");
    img.addEventListener("click",imgButton,false); 
	
htmlMenu.appendChild(text);
htmlMenu.appendChild(button);
htmlMenu.appendChild(label);
htmlMenu.appendChild(input);
htmlMenu.appendChild(div);
htmlMenu.appendChild(span);
htmlMenu.appendChild(link);
htmlMenu.appendChild(img);
	
	
	var yourTarget;
	
		var prePosition ;	
 
//document.addEventListener("mouseover",mouseOver, false);
 
function changeTarget(){
	path = [];
		temp = yourTarget;
		//console.log(temp);
	 var i=0;
	 while (temp != document && i<5 && temp != info){
		 //console.log(temp);
		 path.push(temp);
		 if(temp.tagName != "HTML" )
		 var str = temp.tagName + "." +temp.id +"\t";
	 else
		 var str = "";
		 var text2 = document.createTextNode(str);
	 var child = elems[4-i].childNodes ;
		if(child[0] != null) 
		 elems[4-i].removeChild(child[0]);
		 elems[4-i].appendChild(text2);
		 
	 temp = temp.parentNode;
		  i++;
	 }
	 elems[4].style.backgroundColor="#FFE4C4";
	for(var i=0; i<5; i++){
		
		//console.log(path[i]);
	}

if(	yourTarget.style.position == "")
prePosition ="static";
else 
prePosition =yourTarget.style.position;
	
}

document.body.appendChild(menu);
document.body.appendChild(elements);
document.body.appendChild(info);


var cursorX;
var cursorY;
var clicked = false ;

var path = new Array();

document.addEventListener("mousemove",mymoseMove,false);

 function mymoseMove(e){
	 console.log("here");
    cursorX = e.pageX;
    cursorY = e.pageY;
var element = document.elementFromPoint(cursorX,cursorY);
	if(clicked){
		 if(element.class != "editPanel" && element != document && element!= info)
yourTarget= document.elementFromPoint(cursorX,cursorY);
 changeTarget();
	
	 info.style.top = cursorY+ "px";
    info.style.left = cursorX+ "px";
	}
	
	
	
	


	
}
  function infoOn(e){
	  
clicked = !clicked;
if(!clicked)
	 info.style.top = "460px";
    info.style.left = "1300px";


 }
 
function closeButton(e){
	menu.remove();
	elements.remove();
	info.remove();
    e.preventDefault();
	
}

function close2Button(e){
	elements.remove();
    e.preventDefault();
}


function htmlButton(e){
	
	
	       var child = menu.childNodes ;
	     if(child[2]!= null ){
		//	console.log(child[3]);
		  menu.removeChild(child[2]); 
		  
		  }

	 menu.appendChild(htmlMenu);
	 e.preventDefault();
	 html.style.backgroundColor="#FFE4C4";
	 htmlMenu.style.backgroundColor="#FFE4C4";
	 css.style.backgroundColor="#FFF8DC";


}

function cssButton(e){
	
	  var child = menu.childNodes ;
          if(child[2]!= null ){
			//console.log(child[3]);
		  menu.removeChild(child[2]); 
		  
		  }
 menu.appendChild(cssMenu);
 html.style.backgroundColor="#FFF8DC";
 css.style.backgroundColor="#FFE4C4";
 cssMenu.style.backgroundColor="#FFE4C4";
	 e.preventDefault();
}



function txtButton(){
	
	 var newElement= document.createElement("text");
	newElement.id = "new";
	var txt = document.createTextNode("new text");
	newElement.appendChild(txt);
	 yourTarget.appendChild(newElement);
	 yourTarget = newElement;
	 changeTarget();
	
}



function btnButton(){
var newElement = document.createElement("Button");
	newElement.id = "new";
	newElement.setAttribute("style","  position: relative;");
    var txt = document.createTextNode("new button");
	newElement.appendChild(txt);
	 yourTarget.appendChild(newElement);
	 yourTarget = newElement;
	 changeTarget();
}
function labelButton(){
	var newElement = document.createElement("Label");
	newElement.id = "new";
	newElement.setAttribute("style","  position: relative;");
    var txt = document.createTextNode("new Label");
	newElement.appendChild(txt);
	 yourTarget.appendChild(newElement);
     yourTarget = newElement;
	 changeTarget();
}
function inputButton(e){
	//console.log(option[e.target.selectedIndex]);
	/* var newElement = document.createElement("Input");
	newElement.id = "new";
	newElement.setAttribute("style","  position: relative;");
	 yourTarget.appendChild(newElement);
	 yourTarget = newElement;
	 changeTarget(); */
//console.log(e.target.selectedIndex);
var child = e.target.childNodes;
//console.log(child[e.target.selectedIndex].text);
var selected = e.target.selectedIndex;
var newElement = document.createElement("Input");
	newElement.id = "new";
	newElement.setAttribute("style","  position: relative;");
switch(selected) {
    case 1:
        break;
		
    case 2:
	newElement.type ="button";
	newElement.value ="new button";
        break;
		
		case 3:
	newElement.type ="checkbox";
        break;
		case 4:
	newElement.type ="color";
        break;
	
	case 5:
	newElement.type ="date";
        break;
		
		case 6:
	newElement.type ="email";
        break;
		
		case 7:
	newElement.type ="month";
        break;
		
		case 8:
	newElement.type ="number";
        break;
		
		case 9:
	newElement.type ="password";
        break;
		
		case 10:
	newElement.type ="radio";
        break;
		
		case 11:
	newElement.type ="range";
        break;
		
		case 12:
	newElement.type ="reset";
        break;
		
		case 13:
	newElement.type ="search";
        break;
		
		case 14:
	newElement.type ="submit";
        break;
		
		case 15:
	newElement.type ="te";
        break;
		
		case 16:
	newElement.type ="time";
        break;
		
		case 17:
	newElement.type ="url";
        break;
		
    default:
        
}
	
yourTarget.appendChild(newElement);
	yourTarget = newElement;
	changeTarget();




}
function DivButton(){
	var newElement = document.createElement("Div");
	newElement.id = "new";
    var txt= document.createTextNode("new Div");
	newElement.appendChild(txt);
	 yourTarget.appendChild(newElement);
	 yourTarget = newElement;
	 changeTarget();
}

function spanButton(){
	var newElement = document.createElement("Span");
	newElement.id = "new";
    var txt = document.createTextNode("new span");
	newElement.appendChild(txt);
	 yourTarget.appendChild(newElement);
	 yourTarget = newElement;
	 changeTarget();
}

function linkButton(){
	var newElement = document.createElement("A");
	newElement.id = "new";
    var txt = document.createTextNode("new link");
	newElement.appendChild(txt);
	 yourTarget.appendChild(newElement);
	 yourTarget = newElement;
	 changeTarget();
}

function imgButton(){
	
	var choose = document.createElement("Input");
	//choose.id = "new";
	choose.type = "file";
    var txt = document.createTextNode("choose img");
	choose.appendChild(txt);
	choose.setAttribute("style", "width:80px; height:35px;position: absolute;top:0px; left:320px; ");
	choose.accept="image/x-png,image/gif,image/jpeg"
	htmlMenu.appendChild(choose);
	choose.onchange = function(){
	var newElement = document.createElement("IMG");
    newElement.id = "new";
    newElement.src = choose.value;
     yourTarget.appendChild(newElement);
	 yourTarget = newElement;
	 changeTarget();
		
	};
	 
}



















function colorButton(e){
	
	 yourTarget.style.backgroundColor = this.value;
	 this.value="#FFF8DC";
	 e.preventDefault();
}
function borderButton(e){
	 yourTarget.style.border = 'solid black';
	  e.preventDefault();
    
}
function boldButton(e){
	 yourTarget.style.fontWeight = 'bold';
	  e.preventDefault();
}
function italicButton(e){
	 yourTarget.style.fontStyle="italic";
	  e.preventDefault();
}

function edit(){
	console.log(newText.value);
	yourTarget.innerHTML =newText.value;
	newText.value ="";
}
 function  textcolor(){
	 console.log(this.value);
	 yourTarget.style.color = this.value; 
 }

function underlineButton(e){

	 yourTarget.style.textDecoration="underline black";
	  e.preventDefault();
}
function overlineButton(e){

	 yourTarget.style.textDecoration="overline black";
	  e.preventDefault();
}
function linethroughButton(e){

	 yourTarget.style.textDecoration="line-through black";
	  e.preventDefault();
}
function rightButton(){
	 yourTarget.style.textAlign = "right";
	
	
}
function leftButton(){
	 yourTarget.style.textAlign = "left";
	
	
}
function centerButton(){
	 yourTarget.style.textAlign = "center";
}

function Spacing (){
	 yourTarget.style.letterSpacing = this.value+"px";
	console.log(this.value);
}

function WSpacing (){
	 yourTarget.style.wordSpacing = this.value+"px";
	console.log(this.value);
}
function leftborderButton(){
	 yourTarget.style.borderLeft = 'solid black';
}
function rightborderButton(){
	 yourTarget.style.borderRight = 'solid black';
}
function topborderButton(){
	 yourTarget.style.borderTop = 'solid black';
}
function bottomborderButton(){
	 yourTarget.style.borderBottom = 'solid black';
}
function borderWidthButton(){
	 yourTarget.style.borderWidth = this.value+"px";
	console.log(this.value);
}
function  bordercolor(){
	 console.log(this.value);
	 yourTarget.style.borderColor = this.value; 
 }
function borderTypeButton(e){

var selected = e.target.selectedIndex;

switch(selected) {
  
    case 1:
 yourTarget.style.borderStyle = "dotted";
        break;
		
		case 2:
	 yourTarget.style.borderStyle = "dashed";
        break;
		case 3:
	 yourTarget.style.borderStyle = "solid";
        break;
	
	case 4:
	 yourTarget.style.borderStyle = "double";
        break;
		
		case 5:
 yourTarget.style.borderStyle = "groove";
        break;
		
		case 6:
 yourTarget.style.borderStyle = "ridge";
        break;
		
		case 7:
	 yourTarget.style.borderStyle = "inset";
        break;
		
		case 8:
 yourTarget.style.borderStyle = "outset";
        break;
		
		case 9:
 yourTarget.style.borderStyle = "none";
        break;
		
		case 10:
	 yourTarget.style.borderStyle = "hidden";
        break;
	
		
    default:
        
}



}
 function elementWidthButton(){
	 
	 yourTarget.style.width = this.value+"";
 }
function elementHeightButton(){
	 yourTarget.style.height= this.value;
	 }
	 

function position (e){

	 switch(e.target) {
    case relativeBox:
	yourTarget.style.position ="relative";
 absoluteBox.checked = false ;
 staticBox.checked = false;
        break;
 case absoluteBox:
 	yourTarget.style.position ="absolute";
 relativeBox.checked = false;
 staticBox.checked= false;
        break;
case staticBox:
	yourTarget.style.position ="static";
 absoluteBox.checked = false;
 relativeBox.checked = false;
        break;
	   default:
}
 

}

function resetButton(){
		//console.log(yourTarget.style.position);
	yourTarget.style.position = prePosition;
		//console.log(yourTarget.style.position);
}

function moveButton (){
	
dragElement(yourTarget);

	
}









function dragElement(elmnt) {
	
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	move =false;
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
   document.onmouseup = null;
   document.onmousemove = mymoseMove;
  }
	
}














function target(e){

for(var i=0; i<5; i++){

	if(e.target == elems[i])
	break;

}

//console.log(i);
yourTarget = path[4-i];
//console.log(path[4-i]);
changeTarget(path[i]);	

}
}                                                               