// JavaScript Document
/*window.onload=function(){
	var but=document.getElementById("button");
	var me=document.getElementById("callme");
	var mec=document.getElementById("me");
	var t1=document.getElementsById("one");
	but.onmouseover=function(){
		but.style.opacity=1;
	}
	but.onmouseout=function(){
		but.style.opacity=0.8;
	}
	
	me.onmouseover=function(){
		me.style.borderBottom="2px solid #666666";
		mec.style.display='block';
	}
	me.onmouseout=function(){
		me.style.borderBottom="2px solid #ffffff";
		mec.style.display='none';
	}
	t1.onclick=function(){
		  window.location.hash = "#callme";
	}
	
}*/
window.onload=function(){
	var but=document.getElementById("button");
	var me=document.getElementById("callme");
	var mec=document.getElementById("me");
	var t1=document.getElementById("one");
	var t2=document.getElementById("two");
	var t3=document.getElementById("three");
	var t4=document.getElementById("four");
	but.onmouseover=function(){
		but.style.opacity=1;
	}
	but.onmouseout=function(){
		but.style.opacity=0.8;
	}
	me.onmouseover=function(){
		me.style.borderBottom="2px solid #666666";
		mec.style.display='block';
	}
	me.onmouseout=function(){
		me.style.borderBottom="2px solid #ffffff";
		mec.style.display='none';
	}
	t1.onmouseover=function(){
		document.getElementById("one_one").style.opacity=0.5;
	}
	t1.onmouseout=function(){
		document.getElementById("one_one").style.opacity=1;
	}
	t2.onmouseover=function(){
		document.getElementById("two_two").style.opacity=0.5;
	}
	t2.onmouseout=function(){
		document.getElementById("two_two").style.opacity=1;
	}
	t3.onmouseover=function(){
		document.getElementById("three_three").style.opacity=0.5;
	}
	t3.onmouseout=function(){
		document.getElementById("three_three").style.opacity=1;
	}
	t4.onmouseover=function(){
		document.getElementById("four_four").style.opacity=0.5;
	}
	t4.onmouseout=function(){
		document.getElementById("four_four").style.opacity=1;
	}
	
	t1.onclick=function(){
	 window.location.hash = "#geren";	
	}
	t2.onclick=function(){
	 window.location.hash = "#zhuanye";	
	}
	t3.onclick=function(){
	window.location.hash = "#zhuanye";
	}
	t4.onclick=function(){
	 window.location.hash = "#xiangmu";	
	}
	
}
function onTopClick() {
         window.location.hash = "#catalog";
       }
	   
function onbtmClick() {
         window.location.hash = "#callme";
       }
