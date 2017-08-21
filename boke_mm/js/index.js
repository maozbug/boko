$(function(){
//	localStorage.setItem("user","wwwww");
//	localStorage.setItem("pass","mas123");
	setTimeout(function(){
		document.querySelector(".login").style.opacity="1";
		document.querySelector(".login form ").style.opacity="1";
		setTimeout(function(){
			if(localStorage.getItem(document.getElementById("user").id)!==null&&localStorage.getItem(document.getElementById("pass").id)!==null){
		
				document.forms[0].submit();
			}else{
				document.querySelector("[type='submit']").onclick=function(){
					console.log(document.getElementById("user").value);
					console.log(document.getElementById("pass").value);
				//alert(1);
				localStorage.setItem(document.getElementById("user").id,document.getElementById("user").value);
				localStorage.setItem(document.getElementById("pass").id,document.getElementById("pass").value);
				//document.querySelector("[type=]")
				}
			}
		},1000);
	},3000)
	
	
})
