 

 
 function start(){//called from background.js , when the extension icon clicked
	
	
var yourTarget;
var cursorX;
var cursorY;
var clicked = false ;
var borderType;
var path = new Array();
	
//create html elements 
var main = document.createElement("Div");//append all elements to 
    main.class = "editPanel";
	main.id = "BG";
var mainBG = document.createElement("Div");//append all elements to 
    mainBG.class = "editPanel";
	mainBG.className = "main";
var mainBG = document.createElement("Div");//append all elements to 
    mainBG.class = "editPanel";
	mainBG.className = "main";
	var add = document.createElement("Button");//to show html menu
        add.class = "editPanel";
	    add.className = "cssbtns btn";
        add.style.backgroundImage = 'url("https://cdn4.iconfinder.com/data/icons/finance-and-business-set2/32/fin32px080-16.png")';
	mainBG.appendChild(add);
	
	var edit = document.createElement("Button");//to show css menu
        edit.class = "editPanel";
	    edit.className = "cssbtns btn";
        edit.style.backgroundImage = 'url("https://cdn4.iconfinder.com/data/icons/single-width-stroke/24/oui-icons-50-16.png")';
    mainBG.appendChild(edit);
    
	var BS = document.createElement("Button");//to delete the element
        BS.class = "editPanel";
	    BS.className = "cssbtns btn";
        BS.style.backgroundImage = 'url("https://cdn1.iconfinder.com/data/icons/design-tools-crafticons/48/design-tool_grid_layout_bootstrap-16.png")';
    mainBG.appendChild(BS);
	
	var dlt = document.createElement("Button");//to delete the element
        dlt.class = "editPanel";
	    dlt.className = "cssbtns btn";
        dlt.style.backgroundImage = 'url("https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-16.png")';
    mainBG.appendChild(dlt);
		   
    var space = document.createElement("Div");
        space.class = "editPanel";
        space.className = "space";
	mainBG.appendChild(space);
	
	var selector = document.createElement("Button");
	    selector.class = "editPanel";
        selector.className = "cssbtns btn";
		selector.setAttribute("style","position:absolute; top :0px; left:140px; background-color:transparent;");
        selector.style.backgroundImage = 'url("https://cdn1.iconfinder.com/data/icons/line-essentials-84/20/4126-16.png")';
	mainBG.appendChild(selector);
	
var path = document.createElement("Div");
    path.class = "editPanel";
	path.className = "path";
	var space = document.createElement("Div");
        space.class = "editPanel";
        space.className = "space";
	//mainBG.appendChild(space);
	
	var ancestors = new Array();
	    ancestors[0] = document.createElement("Label");
        ancestors[0].class = "editPanel";
        ancestors[0].className = "ancestors";
	path.appendChild(ancestors[0]);
		var arrow = document.createElement("Button");
        arrow.class = "editPanel";
	    arrow.className = "cssbtns btn";
        arrow.style.backgroundImage = 'url("https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-right-b-16.png")';
    path.appendChild(arrow);
	    ancestors[1] = document.createElement("Label");
        ancestors[1].class = "editPanel";
        ancestors[1].className = "ancestors";
	path.appendChild(ancestors[1]);
		var arrow = document.createElement("Button");
        arrow.class = "editPanel";
	    arrow.className = "cssbtns btn";
        arrow.style.backgroundImage = 'url("https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-right-b-16.png")';
    path.appendChild(arrow);
		ancestors[2] = document.createElement("Label");
        ancestors[2].class = "editPanel";
        ancestors[2].className = "ancestors";
	path.appendChild(ancestors[2]);
		var arrow = document.createElement("Button");
        arrow.class = "editPanel";
	    arrow.className = "cssbtns btn";
        arrow.style.backgroundImage = 'url("https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-right-b-16.png")';
    path.appendChild(arrow);
	    ancestors[3] = document.createElement("Label");
        ancestors[3].class = "editPanel";
        ancestors[3].className = "ancestors";
	path.appendChild(ancestors[3]);
		var arrow = document.createElement("Button");
        arrow.class = "editPanel";
	    arrow.className = "cssbtns btn";
        arrow.style.backgroundImage = 'url("https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-right-b-16.png")';
    path.appendChild(arrow);
	    ancestors[4] = document.createElement("Label");
        ancestors[4].class = "editPanel";
        ancestors[4].className = "ancestors";
        ancestors[4].style.backgroundColor = "#F0F8FF";
	path.appendChild(ancestors[4]);    
	
	var space = document.createElement("Div");
        space.class = "editPanel";
        space.className = "space";
	//mainBG.appendChild(space);
	
	var close = document.createElement("Button");
        close.class = "editPanel";
	    close.className = " cssbtns btn";
		close.setAttribute("style","position:absolute; top :2px; right:2px; background-color:transparent;");
        close.style.backgroundImage = 'url("https://cdn0.iconfinder.com/data/icons/navigation-set-arrows-part-one/32/CloseCancelSquare-16.png")';
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
		input.style.width="60px";
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

	 
	 
	 
var cssmenu = document.createElement("Div");
    cssmenu.class = "editPanel";
	cssmenu.className = "submenu";
	
	var width = document.createElement("select");
        width.class = "editPanel";
	    width.className = "cssbtns";
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
	    height.className = "cssbtns";
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
	    position.className = "cssbtns btn";
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
	    move.className = "cssbtns btn";
        move.style.backgroundImage = 'url("https://cdn3.iconfinder.com/data/icons/edition/100/move-16.png")';
	cssmenu.appendChild(move);
	
	var BGcolor = document.createElement("Label");
        BGcolor.class = "editPanel";
	    BGcolor.className = "cssbtns inputs ";
        BGcolor.style.backgroundImage = 'url("https://cdn4.iconfinder.com/data/icons/essentials-volume-6/128/color-wheel-16.png")';
		var BGpicker = document.createElement("Input");
		    BGpicker.class ="editPanel";
			BGpicker.type ="color";
			BGpicker.className = "color";
		BGcolor.appendChild(BGpicker);
	cssmenu.appendChild(BGcolor);	

	var BGimg = document.createElement("Label");
        BGimg.class = "editPanel";
	    BGimg.className = "cssbtns inputs";
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
	    border.className = "cssbtns";
        border.style.backgroundImage = 'url("https://cdn3.iconfinder.com/data/icons/glyph/227/Rectangular-1-16.png")';
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

    var borderleft = document.createElement("Button");
        borderleft.class = "editPanel";
	    borderleft.className = "cssbtns btn";
        borderleft.style.backgroundImage = 'url("https://cdn1.iconfinder.com/data/icons/CrystalClear/16x16/actions/border_left.png")';
	cssmenu.appendChild(borderleft);	
	
    var borderright = document.createElement("Button");
        borderright.class = "editPanel";
	    borderright.className = "cssbtns btn";
        borderright.style.backgroundImage = 'url("https://cdn2.iconfinder.com/data/icons/LinspireClear/16x16/actions/border_right.png")';
	cssmenu.appendChild(borderright);
	
    var bordertop = document.createElement("Button");
        bordertop.class = "editPanel";
	    bordertop.className = "cssbtns btn";
        bordertop.style.backgroundImage = 'url("https://cdn1.iconfinder.com/data/icons/CrystalClear/16x16/actions/border_top.png")';
	cssmenu.appendChild(bordertop);
	
    var borderbottom = document.createElement("Button");
        borderbottom.class = "editPanel";
	    borderbottom.className = "cssbtns btn";
        borderbottom.style.backgroundImage = 'url("https://cdn1.iconfinder.com/data/icons/CrystalClear/16x16/actions/border_bottom.png")';
	cssmenu.appendChild(borderbottom);	
    
	var borderwidth= document.createElement("select");
        borderwidth.class = "editPanel";
	    borderwidth.className = "cssbtns";
        borderwidth.style.backgroundImage = 'url("https://cdn0.iconfinder.com/data/icons/penthemes-layour-builder/512/button-16.png")';
	      var op = document.createElement("option");
	          op.text ="";
	    borderwidth.appendChild(op);
	      var op1 = document.createElement("option");
	          op1.text ="0.5";
	    borderwidth.appendChild(op1);
	      var op2 = document.createElement("option");
	          op2.text ="1";
	    borderwidth.appendChild(op2);
	      var op3 = document.createElement("option");
	          op3.text ="2";
	    borderwidth.appendChild(op3);
	      var op4 = document.createElement("option");
	          op4.text ="4";
	    borderwidth.appendChild(op4);
	      var op5 = document.createElement("option");
	          op5.text ="8";
	    borderwidth.appendChild(op5);
	      var op6 = document.createElement("option");
	          op6.text ="10";
	    borderwidth.appendChild(op6);
	      var op7 = document.createElement("option");
	          op7.text ="12";
	    borderwidth.appendChild(op7);
	      var op8 = document.createElement("option");
	          op8.text ="16";
	    borderwidth.appendChild(op8);
	      var op9 = document.createElement("option");
	          op9.text ="20";
	    borderwidth.appendChild(op9);	
	    borderwidth.class = "editPanel";
	    borderwidth.className = "cssbtns";
    cssmenu.appendChild( borderwidth);
	
		var bordercolor = document.createElement("Label");
        bordercolor.class = "editPanel";
	    bordercolor.className = "cssbtns inputs ";
        bordercolor.style.backgroundImage = 'url("https://cdn4.iconfinder.com/data/icons/essentials-volume-6/128/color-wheel-16.png")';
		var bpicker = document.createElement("Input");
		    bpicker.class ="editPanel";
			bpicker.type ="color";
			bpicker.className = "color";
		bordercolor.appendChild(bpicker);
	cssmenu.appendChild(bordercolor);
		
	var newtxt = document.createElement("input");
        newtxt.class = "editPanel";
	    newtxt.className = "cssbtns";
		newtxt.style.border ="1px solid black";

	var enter = document.createElement("Button");
        enter.class = "editPanel";
	    enter.className = "cssbtns btn";
        enter.style.backgroundImage = 'url("https://cdn0.iconfinder.com/data/icons/arrows-of-ways/154/turn-16.png")';

    var font = document.createElement("select");
        font.class = "editPanel";
	    font.className = "cssbtns";
        font.style.backgroundImage = 'url("https://cdn2.iconfinder.com/data/icons/font-awesome/1792/font-16.png")';
	      var op = document.createElement("option");
	          op.text ="";
	    font.appendChild(op);
	      var op1 = document.createElement("option");
	          op1.text ="Arial";
			  op1.style.fontFamily ="Arial";
	    font.appendChild(op1);
	      var op2 = document.createElement("option");
	          op2.text ="Georgia";
			  op2.style.fontFamily ="Georgia";
	    font.appendChild(op2);
	      var op3 = document.createElement("option");
	          op3.text ="Impact";
			  op3.style.fontFamily ="Impact";
	    font.appendChild(op3);
	      var op4 = document.createElement("option");
	          op4.text ="Tahoma";
			  op4.style.fontFamily ="Tahoma";
	    font.appendChild(op4);
	      var op5 = document.createElement("option");
	          op5.text ="Times New Roman";
			  op5.style.fontFamily ="Times New Roman";
	    font.appendChild(op5);
	      var op6 = document.createElement("option");
	          op6.text ="Verdana";
			  op6.style.fontFamily ="Verdana";
	    font.appendChild(op6);
	
		var txtsize = document.createElement("select");
        txtsize.class = "editPanel";
	    txtsize.className = "cssbtns";
        txtsize.style.backgroundImage = 'url("https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/edit-font-size-16.png")';
	      var op = document.createElement("option");
	          op.text ="";
	    txtsize.appendChild(op);
	      var op1 = document.createElement("option");
	          op1.text ="8";
	    txtsize.appendChild(op1);
	      var op2 = document.createElement("option");
	          op2.text ="10";
	    txtsize.appendChild(op2);
	      var op3 = document.createElement("option");
	          op3.text ="12";
	    txtsize.appendChild(op3);
	      var op4 = document.createElement("option");
	          op4.text ="16";
	    txtsize.appendChild(op4);
	      var op5 = document.createElement("option");
	          op5.text ="32";
	    txtsize.appendChild(op5);
	      var op6 = document.createElement("option");
	          op6.text ="64";
	    txtsize.appendChild(op6);

	var bold = document.createElement("Button");
        bold.class = "editPanel";
	    bold.className = "cssbtns btn";
        bold.style.backgroundImage = 'url("https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/edit-bold-16.png")';

	var italic = document.createElement("Button");
        italic.class = "editPanel";
	    italic.className = "cssbtns btn";
        italic.style.backgroundImage = 'url("https://cdn1.iconfinder.com/data/icons/text-editor-4/1792/italic-16.png")';
	
	var under = document.createElement("Button");
        under.class = "editPanel";
	    under.className = "cssbtns btn";
        under.style.backgroundImage = 'url("https://cdn3.iconfinder.com/data/icons/metro-design/512/underlined_font-16.png")';

	var through = document.createElement("Button");
        through.class = "editPanel";
	    through.className = "cssbtns btn";
        through.style.backgroundImage = 'url("https://cdn3.iconfinder.com/data/icons/iconano-text-editor/512/171-S-16.png")';

	var alignLeft = document.createElement("Button");
        alignLeft.class = "editPanel";
	    alignLeft.className = "cssbtns btn";
        alignLeft.style.backgroundImage = 'url("https://cdn2.iconfinder.com/data/icons/inverticons-stroke-vol-4/32/text_align_left-16.png")';

	var alignCenter = document.createElement("Button");
        alignCenter.class = "editPanel";
	    alignCenter.className = "cssbtns btn";
        alignCenter.style.backgroundImage = 'url("https://cdn2.iconfinder.com/data/icons/inverticons-stroke-vol-4/32/text_align_center-16.png")';

	var alignRight = document.createElement("Button");
        alignRight.class = "editPanel";
	    alignRight.className = "cssbtns btn";
        alignRight.style.backgroundImage = 'url("https://cdn2.iconfinder.com/data/icons/inverticons-stroke-vol-4/32/text_align_right-16.png")';

	var txtcolor = document.createElement("Label");
        txtcolor.class = "editPanel";
	    txtcolor.className = "cssbtns inputs ";
        txtcolor.style.backgroundImage = 'url("https://cdn4.iconfinder.com/data/icons/essentials-volume-6/128/color-wheel-16.png")';
		var txtpicker = document.createElement("Input");
		    txtpicker.class ="editPanel";
			txtpicker.type ="color";
			txtpicker.className = "color";
		txtcolor.appendChild(txtpicker);

		var letSpacing = document.createElement("select");
        letSpacing.class = "editPanel";
	    letSpacing.className = "cssbtns";
        letSpacing.style.backgroundImage = 'url("https://cdn4.iconfinder.com/data/icons/transform-edit/100/transform-text-kerning-16.png")';
	      var op = document.createElement("option");
	          op.text ="";
	    letSpacing.appendChild(op);
	      var op1 = document.createElement("option");
	          op1.text ="8";
	    letSpacing.appendChild(op1);
	      var op2 = document.createElement("option");
	          op2.text ="10";
	    letSpacing.appendChild(op2);
	      var op3 = document.createElement("option");
	          op3.text ="12";
	    letSpacing.appendChild(op3);
	      var op4 = document.createElement("option");
	          op4.text ="16";
	    letSpacing.appendChild(op4);
	      var op5 = document.createElement("option");
	          op5.text ="32";
	    letSpacing.appendChild(op5);
	      var op6 = document.createElement("option");
	          op6.text ="64";
	    letSpacing.appendChild(op6);

		var wordSpacing = document.createElement("select");
        wordSpacing.class = "editPanel";
	    wordSpacing.className = "cssbtns";
        wordSpacing.style.backgroundImage = 'url("https://cdn3.iconfinder.com/data/icons/jellycons-outline-text-formatting-vol-1/64/062-Set_Line_Spacing-font_align_text_edit_type_content_format-16.png")';
	      var op = document.createElement("option");
	          op.text ="";
	    wordSpacing.appendChild(op);
	      var op1 = document.createElement("option");
	          op1.text ="8";
	    wordSpacing.appendChild(op1);
	      var op2 = document.createElement("option");
	          op2.text ="10";
	    wordSpacing.appendChild(op2);
	      var op3 = document.createElement("option");
	          op3.text ="12";
	    wordSpacing.appendChild(op3);
	      var op4 = document.createElement("option");
	          op4.text ="16";
	    wordSpacing.appendChild(op4);
	      var op5 = document.createElement("option");
	          op5.text ="32";
	    wordSpacing.appendChild(op5);
	      var op6 = document.createElement("option");
	          op6.text ="64";
	    wordSpacing.appendChild(op6);

var BSmenu = document.createElement("Div");
    BSmenu.class = "editPanel";
	BSmenu.className = "submenu";

	var container = document.createElement("Button");
	    container.class = "editPanel";
	    var txt = document.createTextNode(".container");
		container.appendChild(txt);
	    container.className = "tags";
		container.style.marginLeft="2px";

	var row = document.createElement("Button");
	    row.class = "editPanel";
	    var txt = document.createTextNode(".row");
		row.appendChild(txt);
	    row.className = "tags";
		
	var col_sm_ = document.createElement("select");
        col_sm_.class = "editPanel";
	    col_sm_.className = "tags";
		col_sm_.style.width="60px";
	      var op = document.createElement("option");
	          op.text =".col_sm_";
	    col_sm_.appendChild(op);
	      var op1 = document.createElement("option");
	          op1.text ="col-sm-1";
	    col_sm_.appendChild(op1);
	      var op2 = document.createElement("option");
	          op2.text ="col-sm-2";
	    col_sm_.appendChild(op2);
	      var op3 = document.createElement("option");
	          op3.text ="col-sm-3";
	    col_sm_.appendChild(op3);
	      var op4 = document.createElement("option");
	          op4.text ="col-sm-4";
	    col_sm_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-sm-5";
	    col_sm_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-sm-6";
	    col_sm_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-sm-7";
	    col_sm_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-sm-8";
	    col_sm_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-sm-9";
	    col_sm_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-sm-10";
	    col_sm_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-sm-11";
	    col_sm_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-sm-12";
	    col_sm_.appendChild(op4);
		col_sm_.style.marginLeft="2px";

	var col_m_ = document.createElement("select");
        col_m_.class = "editPanel";
	    col_m_.className = "tags";
		col_m_.style.width="60px";
	      var op = document.createElement("option");
	          op.text =".col_md_";
	    col_m_.appendChild(op);
	      var op1 = document.createElement("option");
	          op1.text ="col-md-1";
	    col_m_.appendChild(op1);
	      var op2 = document.createElement("option");
	          op2.text ="col-md-2";
	    col_m_.appendChild(op2);
	      var op3 = document.createElement("option");
	          op3.text ="col-md-3";
	    col_m_.appendChild(op3);
	      var op4 = document.createElement("option");
	          op4.text ="col-md-4";
	    col_m_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-md-5";
	    col_m_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-md-6";
	    col_m_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-md-7";
	    col_m_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-md-8";
	    col_m_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-md-9";
	    col_m_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-md-10";
	    col_m_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-md-11";
	    col_m_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-md-12";
	    col_m_.appendChild(op4);
		
		
	var col_l_ = document.createElement("select");
        col_l_.class = "editPanel";
	    col_l_.className = "tags";
		col_l_.style.width="60px";
	      var op = document.createElement("option");
	          op.text =".col_lg_";
	    col_l_.appendChild(op);
	      var op1 = document.createElement("option");
	          op1.text ="col-lg-1";
	    col_l_.appendChild(op1);
	      var op2 = document.createElement("option");
	          op2.text ="col-lg-2";
	    col_l_.appendChild(op2);
	      var op3 = document.createElement("option");
	          op3.text ="col-lg-3";
	    col_l_.appendChild(op3);
	      var op4 = document.createElement("option");
	          op4.text ="col-lg-4";
	    col_l_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-lg-5";
	    col_l_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-lg-6";
	    col_l_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-lg-7";
	    col_l_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-lg-8";
	    col_l_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-lg-9";
	    col_l_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-lg-10";
	    col_l_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-lg-11";
	    col_l_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-lg-12";
	    col_l_.appendChild(op4);
		
		
	var col_xl_ = document.createElement("select");
        col_xl_.class = "editPanel";
	    col_xl_.className = "tags";
		col_xl_.style.width="60px";
	      var op = document.createElement("option");
	          op.text =".col_xl_";
	    col_xl_.appendChild(op);
	      var op1 = document.createElement("option");
	          op1.text ="col-xl-1";
	    col_xl_.appendChild(op1);
	      var op2 = document.createElement("option");
	          op2.text ="col-xl-2";
	    col_xl_.appendChild(op2);
	      var op3 = document.createElement("option");
	          op3.text ="col-xl-3";
	    col_xl_.appendChild(op3);
	      var op4 = document.createElement("option");
	          op4.text ="col-xl-4";
	    col_xl_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-xl-5";
	    col_xl_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-xl-6";
	    col_xl_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-xl-7";
	    col_xl_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-xl-8";
	    col_xl_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-xl-9";
	    col_xl_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-xl-10";
	    col_xl_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-xl-11";
	    col_xl_.appendChild(op4);
			      var op4 = document.createElement("option");
	          op4.text ="col-xl-12";
	    col_xl_.appendChild(op4);
		
	mainBG.appendChild(cssmenu);
	// document.body.appendChild(mainBG);
	 dragElement(main);//make it draggable ,
	 main.appendChild(mainBG);
	 main.appendChild(path);
   document.body.appendChild(main);

	 
//add listeners to  btns and icons
selector.addEventListener("click",Selector,false);
document.addEventListener("mousemove",mymoseMove,false);
close.addEventListener("click",Close,false);
add.addEventListener("click",Add,false);
text.addEventListener("click",Text,false);
button.addEventListener("click",Button,false);
label.addEventListener("click",Label,false);
div.addEventListener("click",Div,false);
span.addEventListener("click",Span,false);
link.addEventListener("click",Link,false);
input.addEventListener("change",Input,false);
edit.addEventListener("click",Edit,false);
width.addEventListener("change",Width,false);
height.addEventListener("change",Height,false);
position.addEventListener("change",Position,false);
move.addEventListener("click",Move,false);
BGpicker.addEventListener("change",BGColor,false);
BGimg.addEventListener("change",BGImg,false);
border.addEventListener("change",Border,false);
borderleft.addEventListener("click",BorderLeft,false);
borderright.addEventListener("click",BorderRight,false);
bordertop.addEventListener("click",BorderTop,false);
borderbottom.addEventListener("click",BorderBottom,false);
borderwidth.addEventListener("change",BorderWidth,false);
bpicker.addEventListener("change",BorderColor,false);
newtxt.addEventListener("change",editText,false);
enter.addEventListener("click",editText,false);
font.addEventListener("change",Font,false);
txtsize.addEventListener("change",textsize,false);
bold.addEventListener("click",Bold,false);
italic.addEventListener("click",Italic,false);
under.addEventListener("click",Under,false);
through.addEventListener("click",through,false);
alignLeft.addEventListener("click",AlignLeft,false);
alignCenter.addEventListener("click",AlignCenter,false);
alignRight.addEventListener("click",AlignRight,false);
txtpicker.addEventListener("change",Txtcolor,false);
letSpacing.addEventListener("change",LetSpacing,false);
wordSpacing.addEventListener("change",WordSpacing,false);
for(var i=0;i<5;i++)
	ancestors[i].addEventListener("click",target,false);
dlt.addEventListener("click",Delete,false);
BS.addEventListener("click",bootstrap,false);
container.addEventListener("click",Container,false);
row.addEventListener("click",Row,false);
col_sm_.addEventListener("change",small,false);
col_m_.addEventListener("change",med,false);
col_l_.addEventListener("change",large,false);
col_xl_.addEventListener("change",xlarge,false);







//listeners implementation

function Selector(e){
	 selector.style.top ="0px";
	 selector.style.left="120px";
	 mainBG.appendChild(selector);
	 clicked = !clicked;
	 e.preventDefault();
    }
 
 
function mymoseMove(e){
     cursorX = e.pageX;
     cursorY = e.pageY;
     var element = document.elementFromPoint(cursorX,cursorY);
	 if(clicked){
		 if(element.class != "editPanel" && element != document && element!= selector)
           yourTarget= document.elementFromPoint(cursorX,cursorY);
		   changeTarget();
		   document.body.appendChild(selector);
		   selector.style.cursor= "none";
	       selector.style.top = cursorY-10+ "px";
           selector.style.left = cursorX-10+ "px";
	    }
		
    }


function changeTarget(){
	path = [];
	temp = yourTarget;
	var i=0;
	
	for (var j=0;j<5;j++){
		var child = ancestors[j].childNodes;
		if(child[0] != null)
			ancestors[j].removeChild(child[0]);
	    }
	
	
	while (temp != document && i<5 && temp != selector){
		 path.push(temp);
		 if(temp.tagName != null && temp.tagName != "HTML" ){
		    var str = temp.tagName;
            if(temp.className != null && temp.className != "" )
		     str += "." +temp.className +"\t";
		    else if(temp.id != null)
			  str += "#" +temp.id+"\t";
		    }
	     else
		 var str = "";
		 var txt = document.createTextNode(str);		 
		 ancestors[4-i].appendChild(txt);
	     temp = temp.parentNode;
		 i++;
	    }

    if(yourTarget.innerText != ""){ // add text editing icons if needed
		cssmenu.appendChild(newtxt);
		cssmenu.appendChild(enter);
		cssmenu.appendChild(font);
		cssmenu.appendChild(txtsize);
		cssmenu.appendChild(bold);
		cssmenu.appendChild(italic);
		cssmenu.appendChild(under);
		cssmenu.appendChild(through);
		cssmenu.appendChild(alignLeft);
		cssmenu.appendChild(alignCenter);
		cssmenu.appendChild(alignRight);
	    cssmenu.appendChild(txtcolor);	
	    cssmenu.appendChild(letSpacing);
		cssmenu.appendChild(wordSpacing);
        }
    else{                        //if not needed remove them if they were exists
        var ch = cssmenu.childNodes ;
        for(var i =13; ch[i]!=null ;i++)
	    cssmenu.removeChild(ch[i]); 
        }
		
	var c = BSmenu.childNodes ;
        for(var i =0; c[i]!=null ;i++)
	    BSmenu.removeChild(c[i]); 

    if(yourTarget.className.includes("container")){
	BSmenu.appendChild(row);
      }
	else if(yourTarget.className.includes("row")|| yourTarget.parentNode.className.includes("row")
		|| yourTarget.className.includes("-sm")
	|| yourTarget.className.includes("-lg")
	|| yourTarget.className.includes("-md")
	|| yourTarget.className.includes("-xl")){
	BSmenu.appendChild(col_sm_);
    BSmenu.appendChild(col_m_);
    BSmenu.appendChild(col_l_);
    BSmenu.appendChild(col_xl_);	
	}
	else 
	BSmenu.appendChild(container);	

    }


function Close(e){
	main.remove();
	e.preventDefault();
    }


function Add(e){
	var child = mainBG.childNodes ;
    for(var i =0; child[i]!=null ;i++)
	if(child[i] == cssmenu || child[i] == BSmenu)
      mainBG.removeChild(child[i]); 
	mainBG.appendChild(htmlmenu);
	e.preventDefault();
    }
 
 
function Text(e){
	var newElement= document.createElement("text");
	    newElement.id = "new";
	    var txt = document.createTextNode("new text");
	    newElement.appendChild(txt);
	yourTarget.appendChild(newElement);
	yourTarget = newElement;
	changeTarget();
	e.preventDefault();
    }

 
function Button(e){
    var newElement = document.createElement("Button");
	    newElement.id = "new";
	    newElement.setAttribute("style","  position: relative;");
        var txt = document.createTextNode("new button");
	    newElement.appendChild(txt);
	yourTarget.appendChild(newElement);
	yourTarget = newElement;
	changeTarget();
	e.preventDefault();
    }


function Label(e){
	var newElement = document.createElement("Label");
	    newElement.id = "new";
	    newElement.setAttribute("style","  position: relative;");
        var txt = document.createTextNode("new Label");
	    newElement.appendChild(txt);
	yourTarget.appendChild(newElement);
    yourTarget = newElement;
	changeTarget();
	e.preventDefault();
    }


function Div(e){
	var newElement = document.createElement("Div");
	    newElement.id = "new";
        var txt= document.createTextNode("new Div");
	    newElement.appendChild(txt);
	yourTarget.appendChild(newElement);
	yourTarget = newElement;
	changeTarget();
	e.preventDefault();
    }


function Span(e){
	var newElement = document.createElement("Span");
	    newElement.id = "new";
        var txt = document.createTextNode("new span");
	    newElement.appendChild(txt);
	yourTarget.appendChild(newElement);
	yourTarget = newElement;
	changeTarget();
	e.preventDefault();
    }


function Link(e){
	var newElement = document.createElement("A");
	    newElement.id = "new";
        var txt = document.createTextNode("new link");
	    newElement.appendChild(txt);
	yourTarget.appendChild(newElement);
	yourTarget = newElement;
	changeTarget();
	e.preventDefault();
    }


function Input(e){
    var selected = e.target.selectedIndex;
    var newElement = document.createElement("Input");
	    newElement.id = "new";
	    newElement.setAttribute("style","  position: relative;");
	    newElement.type = input[selected].text;	
    yourTarget.appendChild(newElement);
	yourTarget = newElement;
	changeTarget();
	e.preventDefault();
    }


function Edit(e){
	var child = mainBG.childNodes ;
    for(var i =0; child[i]!=null ;i++)
	if(child[i] == htmlmenu || child[i] == BSmenu)
        mainBG.removeChild(child[i]); 
	mainBG.appendChild(cssmenu);
	e.preventDefault();
    }

 
function Width(e){
    width.style.backgroundImage = 'none';
    var selected = e.target.selectedIndex;
    yourTarget.style.width += width[selected].text+"px";  
    e.preventDefault(); 
    }


function Height(e){
    height.style.backgroundImage = 'none';
    var selected = e.target.selectedIndex;
    yourTarget.style.height += height[selected].text+"px";
    e.preventDefault();   
    }	


function Position(e){
    position.style.backgroundImage = 'none';
    var selected = e.target.selectedIndex;
    yourTarget.style.position = position[selected].text;
    e.preventDefault();
    }


function Move(e){
    dragElement(yourTarget);
    e.preventDefault();
    }


function BGColor(e){
	yourTarget.style.backgroundColor = this.value; 
	e.preventDefault();
    }
 
 
function BGImg(e){
    yourTarget.style.backgroundImage = this.value; 
    e.preventDefault();
    }


function Border(e){
    var selected = e.target.selectedIndex;
    borderType = border[selected].text;
    yourTarget.style.borderStyle = borderType;
    e.preventDefault();
    }


function Txtcolor(e){
	yourTarget.style.color = this.value; 
	e.preventDefault();
 }

 
function BorderLeft(e){
	yourTarget.style.borderLeft = borderType;
	e.preventDefault();
    }


function BorderRight(e){
	yourTarget.style.borderRight= borderType;
	e.preventDefault();
    }

	
function BorderTop(e){
	yourTarget.style.borderTop = borderType;
	e.preventDefault();
    }


function BorderBottom(e){
	yourTarget.style.borderBottom = borderType;  	
    }
 
 
function BorderWidth(e){
	var selected = e.target.selectedIndex;
	yourTarget.style.position = borderwidth[selected].text +"px";	
	e.preventDefault();
    }

	
function BorderColor(e){
	yourTarget.style.borderColor = this.value; 
	e.preventDefault();
    }

	
function editText(e){
	yourTarget.innerHTML =newtxt.value;
	newtxt.value ="";
	e.preventDefault();
    }


function Font(e){
	font.style.backgroundImage = 'none';
	var selected = e.target.selectedIndex;
	yourTarget.style.fontFamily = font[selected].text;
	e.preventDefault();
    }


function textsize(e){
	txtsize.style.backgroundImage = 'none';
	var selected = e.target.selectedIndex;
	yourTarget.style.fontSize = txtsize[selected].text+"px";
	e.preventDefault();
    }

	
function Bold(e){
	yourTarget.style.fontWeight = 'bold';
	e.preventDefault();
    }


function Italic(e){
	yourTarget.style.fontStyle="italic";
	e.preventDefault();
    }


function Under(e){
	yourTarget.style.textDecoration="underline";
    e.preventDefault();
    }

	
function Over(e){
	yourTarget.style.textDecoration="overline";
    e.preventDefault();
    }

	
function AlignRight(e){
	yourTarget.style.textAlign = "right";
	e.preventDefault();
    }

	
function AlignLeft(e){
	yourTarget.style.textAlign = "left";
	e.preventDefault();
    }

	
function AlignCenter(e){
	yourTarget.style.textAlign = "center";
	e.preventDefault();
    }

	
function LetSpacing (e){
	letSpacing.style.backgroundImage = 'none';
    var selected = e.target.selectedIndex;
	yourTarget.style.letterSpacing = letSpacing[selected].text+"px";
	e.preventDefault();
    }

	
function WordSpacing (e){
	wordSpacing.style.backgroundImage = 'none';
	var selected = e.target.selectedIndex;
	yourTarget.style.wordSpacing = wordSpacing[selected].text+"px";
    e.preventDefault();
}
 
 
function target(e){
    for(var i=0; i<5; i++){
	  if(e.target == ancestors[i])
	    break;
    }
    yourTarget = path[4-i];
    changeTarget(path[i]);	
    e.preventDefault();
    }
 
 
function Delete(e){
	var temp = yourTarget;
	yourTarget = yourTarget.parentNode;
	temp.remove();
	changeTarget();
	e.preventDefault();
    }
 
 
function bootstrap(e){
	var child = mainBG.childNodes ;
    for(var i =0; child[i]!=null ;i++)
	if(child[i] == cssmenu || child[i] == htmlmenu)
      mainBG.removeChild(child[i]); 
	mainBG.appendChild(BSmenu);
	e.preventDefault();	
}
 
 
function Container(e){
	var newElement = document.createElement("Div");
	    newElement.id = "new";
        var txt= document.createTextNode("new container");
	    newElement.appendChild(txt);
		newElement.className ="container";
	yourTarget.appendChild(newElement);
	yourTarget = newElement;
	changeTarget();
	e.preventDefault();	
}
 
 
function Row(e){
	var newElement = document.createElement("Div");
	    newElement.id = "new";
		newElement.className ="row";

	yourTarget.appendChild(newElement);
	yourTarget = newElement;
	changeTarget();
	e.preventDefault();	
}


function small(e){
	var selected = e.target.selectedIndex;
	
	if(yourTarget.parentNode.className.includes("row" )){
	var newElement = document.createElement("Div");
	    newElement.id = "new";
        var txt= document.createTextNode("new");
	    newElement.appendChild(txt);
		newElement.style.border ="1px solid black";
		newElement.className =col_sm_[selected].text;
	yourTarget.appendChild(newElement);
	yourTarget = newElement;
	changeTarget();}
	else {
		
	var oldClass = yourTarget.className;
	if(oldClass.includes("-sm-")){
	if(yourTarget.classList.contains("col-sm-1"))
	   yourTarget.classList.remove("col-sm-1");
	else if(yourTarget.classList.contains("col-sm-2"))
	   yourTarget.classList.remove("col-sm-2");
	else if(yourTarget.classList.contains("col-sm-3"))
	   yourTarget.classList.remove("col-sm-3");
	else if(yourTarget.classList.contains("col-sm-4"))
	   yourTarget.classList.remove("col-sm-4");
	else if(yourTarget.classList.contains("col-sm-5"))
	   yourTarget.classList.remove("col-sm-5");
	else if(yourTarget.classList.contains("col-sm-6"))
	   yourTarget.classList.remove("col-sm-6");
	else if(yourTarget.classList.contains("col-sm-7"))
	   yourTarget.classList.remove("col-sm-7");
	else if(yourTarget.classList.contains("col-sm-8"))
	   yourTarget.classList.remove("col-sm-8");
	else if(yourTarget.classList.contains("col-sm-9"))
	   yourTarget.classList.remove("col-sm-9");
	else if(yourTarget.classList.contains("col-sm-10"))
	   yourTarget.classList.remove("col-sm-10");
	else if(yourTarget.classList.contains("col-sm-11"))
	   yourTarget.classList.remove("col-sm-11");
	else if(yourTarget.classList.contains("col-sm-12"))
	   yourTarget.classList.remove("col-sm-12");

	}
	yourTarget.classList.add(col_sm_[selected].text);
	changeTarget();	
	
	}
	e.preventDefault();	
}


function med(e){
	var selected = e.target.selectedIndex;
	
	if( yourTarget.parentNode.className.includes("row" )){
	var newElement = document.createElement("Div");
	    newElement.id = "new";
        var txt= document.createTextNode("new");
	    newElement.appendChild(txt);
		newElement.style.border ="1px solid black";
		newElement.className =col_m_[selected].text;
	yourTarget.appendChild(newElement);
	yourTarget = newElement;
	changeTarget();}
	else {
	var oldClass = yourTarget.className;
	if(oldClass.includes("-md-")){
	if(yourTarget.classList.contains("col-md-1"))
	   yourTarget.classList.remove("col-md-1");
	else if(yourTarget.classList.contains("col-md-2"))
	   yourTarget.classList.remove("col-md-2");
	else if(yourTarget.classList.contains("col-md-3"))
	   yourTarget.classList.remove("col-md-3");
	else if(yourTarget.classList.contains("col-md-4"))
	   yourTarget.classList.remove("col-md-4");
	else if(yourTarget.classList.contains("col-md-5"))
	   yourTarget.classList.remove("col-md-5");
	else if(yourTarget.classList.contains("col-md-6"))
	   yourTarget.classList.remove("col-md-6");
	else if(yourTarget.classList.contains("col-md-7"))
	   yourTarget.classList.remove("col-md-7");
	else if(yourTarget.classList.contains("col-md-8"))
	   yourTarget.classList.remove("col-md-8");
	else if(yourTarget.classList.contains("col-md-9"))
	   yourTarget.classList.remove("col-md-9");
	else if(yourTarget.classList.contains("col-md-10"))
	   yourTarget.classList.remove("col-md-10");
	else if(yourTarget.classList.contains("col-md-11"))
	   yourTarget.classList.remove("col-md-11");
	else if(yourTarget.classList.contains("col-md-12"))
	   yourTarget.classList.remove("col-md-12");

	}
	yourTarget.classList.add(col_m_[selected].text);
	changeTarget();
	
	}
	e.preventDefault();	
}


function large(e){
	var selected = e.target.selectedIndex;
	
	if( yourTarget.parentNode.className.includes("row" )){
	var newElement = document.createElement("Div");
	    newElement.id = "new";
        var txt= document.createTextNode("new");
	    newElement.appendChild(txt);
		newElement.style.border ="1px solid black";
		newElement.className =col_l_[selected].text;
	yourTarget.appendChild(newElement);
	yourTarget = newElement;
	changeTarget();}
	else {
	var oldClass = yourTarget.className;
	if(oldClass.includes("-lg-")){
	if(yourTarget.classList.contains("col-lg-1"))
	   yourTarget.classList.remove("col-lg-1");
	else if(yourTarget.classList.contains("col-lg-2"))
	   yourTarget.classList.remove("col-lg-2");
	else if(yourTarget.classList.contains("col-lg-3"))
	   yourTarget.classList.remove("col-lg-3");
	else if(yourTarget.classList.contains("col-lg-4"))
	   yourTarget.classList.remove("col-lg-4");
	else if(yourTarget.classList.contains("col-lg-5"))
	   yourTarget.classList.remove("col-lg-5");
	else if(yourTarget.classList.contains("col-lg-6"))
	   yourTarget.classList.remove("col-lg-6");
	else if(yourTarget.classList.contains("col-lg-7"))
	   yourTarget.classList.remove("col-lg-7");
	else if(yourTarget.classList.contains("col-lg-8"))
	   yourTarget.classList.remove("col-lg-8");
	else if(yourTarget.classList.contains("col-lg-9"))
	   yourTarget.classList.remove("col-lg-9");
	else if(yourTarget.classList.contains("col-lg-10"))
	   yourTarget.classList.remove("col-lg-10");
	else if(yourTarget.classList.contains("col-lg-11"))
	   yourTarget.classList.remove("col-lg-11");
	else if(yourTarget.classList.contains("col-lg-12"))
	   yourTarget.classList.remove("col-lg-12");

	}
	yourTarget.classList.add(col_l_[selected].text);
	changeTarget();
	
	}
	e.preventDefault();		
}


function xlarge(e){
	var selected = e.target.selectedIndex;
	
	if(yourTarget.parentNode.className.includes("row")){
	var newElement = document.createElement("Div");
	    newElement.id = "new";
        var txt= document.createTextNode("new");
	    newElement.appendChild(txt);
		newElement.style.border ="1px solid black";
		newElement.className =col_xl_[selected].text;
	yourTarget.appendChild(newElement);
	yourTarget = newElement;
	changeTarget();}
	else {
	var oldClass = yourTarget.className;
	if(oldClass.includes("-xl-")){
	if(yourTarget.classList.contains("col-xl-1"))
	   yourTarget.classList.remove("col-xl-1");
	else if(yourTarget.classList.contains("col-xl-2"))
	   yourTarget.classList.remove("col-xl-2");
	else if(yourTarget.classList.contains("col-xl-3"))
	   yourTarget.classList.remove("col-xl-3");
	else if(yourTarget.classList.contains("col-xl-4"))
	   yourTarget.classList.remove("col-xl-4");
	else if(yourTarget.classList.contains("col-xl-5"))
	   yourTarget.classList.remove("col-xl-5");
	else if(yourTarget.classList.contains("col-xl-6"))
	   yourTarget.classList.remove("col-xl-6");
	else if(yourTarget.classList.contains("col-xl-7"))
	   yourTarget.classList.remove("col-xl-7");
	else if(yourTarget.classList.contains("col-xl-8"))
	   yourTarget.classList.remove("col-xl-8");
	else if(yourTarget.classList.contains("col-xl-9"))
	   yourTarget.classList.remove("col-xl-9");
	else if(yourTarget.classList.contains("col-xl-10"))
	   yourTarget.classList.remove("col-xl-10");
	else if(yourTarget.classList.contains("col-xl-11"))
	   yourTarget.classList.remove("col-xl-11");
	else if(yourTarget.classList.contains("col-xl-12"))
	   yourTarget.classList.remove("col-xl-12");

	}
	yourTarget.classList.add(col_xl_[selected].text);
	changeTarget();
	
	}
	e.preventDefault();		
}
	

function dragElement(elmnt) {//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_draggable
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

 
 
 
 
 }	