window.onload=function(){
	document.getElementById("nav").onmouseover=function(event){
		var taget=event.target;
		
	}
	
	
	requestAnimationFrame(function(){
		var imgs=document.getElementsByTagName("IMG");
		var imgs1=parseInt(imgs[0].style.left);
			for(var i=0; i<=3; i++){
				var a=imgs[i];
				var b=parseInt(a.style.left)-1+"px";
				var c=parseInt(imgs[i].style.left)
				a.style.left=b;
				if(c==-550){
					imgs[i].style.left="1650px";
				}
			}
			requestAnimationFrame(arguments.callee)	
	})
	
	//实现时钟功能
	var obj=document.getElementById("clock");
	var canvas=obj.getContext("2d");
	var time,Hours,min,sec;			
	setInterval(function(){	
			canvas.clearRect(0,0,200,100);
			time=new Date();
			Hours=time.getHours();
			min=time.getMinutes();
			sec=time.getSeconds()+1;
			var aa=Hours+":"+min+":"+(sec-1);			
			canvas.font="25px 微软雅黑";
			canvas.fillText(aa,50,60);			
		},1000)
	//实现时钟功能结束
	
	//实现登录页面框
	localStorage.setItem("user","wkn");
	localStorage.setItem("pass","123");
	setTimeout(function(){
		var login=document.querySelector(".login");
		var cover=document.querySelector(".box");
		login.style.opacity=1;
		login.style.transform="translateY(-15%)"
		cover.style.opacity=0.3;
		setTimeout(function(){
			if(localStorage.getItem(document.getElementById("user").id)!==null&&localStorage.getItem(document.getElementById("pass").id)!==null){
					document.forms[0].submit();
				}else{
					document.querySelector("[type='submit']").onclick=function(){
					localStroge.getItem(document.getElementById("user").id,document.getElementById("user").value)
					localStroge.getItem(document.getElementById("pass").id,document.getElementById("pass").value)
					}
				}
			},1000)		
		},3000);
	
	//实现登录页面框结束
}

