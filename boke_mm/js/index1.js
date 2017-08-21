	window.onload=function(){
		//$("#ban1").load("html/lbt.html");
		$(".nav").children().click(function(){
			$(this).addClass("active");
			$(this).siblings().removeClass("active");
			var text=$(this).text();
			//var text=toString(text);
//			console.log(text.isPrototypeOf());
			switch (text){
				case "图片欣赏":
				$("#ban1").children(".banner").removeClass("hid");
				$("#ban1").children(".banner").siblings().addClass("hid");
					break;
				case "动画效果":
//				$("#ban1").load("html/小破孩.html");
				$("#ban1").children(".banner1").removeClass("hid");
				$("#ban1").children(".banner1").siblings().addClass("hid");
					break;
				case "个人动态":
//				$("#ban1").load("html/小破孩.html");
				$("#ban1").children(".banner2").removeClass("hid");
				$("#ban1").children(".banner2").siblings().addClass("hid");
					break;
				case "博客内容":
//				$("#ban1").load("html/小破孩.html");
				$("#ban1").children(".banner3").removeClass("hid");
				$("#ban1").children(".banner3").siblings().addClass("hid");
					break;
				case "个人资料":
//				$("#ban1").load("html/小破孩.html");
				$("#ban1").children(".banner4").removeClass("hid");
				$("#ban1").children(".banner4").siblings().addClass("hid");
					break;
				default:
					break;
			}
		})
		//底部文字动画
		var demo=document.getElementById("text");
		requestAnimationFrame(function(){
			//console.log(demo);
			if(parseInt(demo.style.top)==5&&parseInt(demo.style.left)<820){
				//console.log(box);
				//alert(0);
				demo.style.left=parseInt(demo.style.left)+1+"px";
				requestAnimationFrame(arguments.callee);
			}else{
				demo.style.left=0;
				requestAnimationFrame(arguments.callee);
			}
		},60);
		//获取时间
		setInterval(function(){
			var time=new Date();
			var Hour=time.getHours();
			var min=time.getMinutes();
			var sec=time.getSeconds();
			//console.log(typeof(sec))
			if (sec<10) {
				var sec="0"+sec;
				//console.log(sec);
			} 
			if (min<10) {
				var min="0"+min;
				//console.log(sec);
			} 
			if (Hour<10) {
				var Hour="0"+Hour;
				//console.log(sec);
			}
			//document.querySelector(".time").innerHTML=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
			document.querySelector(".time").innerHTML=Hour+":"+min+":"+sec;

		},1000)
	
	
//	var obj=document.getElementById("canvas");
//	var canvas=obj.getContext("2d");
//	var img=document.createElement("img");
//		img.setAttribute("src","img/xxx1.jpg");
//		img.onload=function(){
//			var i=0;
//			setInterval(function(){
//				canvas.clearRect(0,0,800,500);
//				canvas.drawImage(img,i%4*75.5,0,75.5,97,i%8*75.5,0,75.5,97);
//				i++;
//			},1000);
//		}
//跑马效果
		var obj=document.getElementById("canvas");
		var canvas=obj.getContext("2d");
		var img=document.createElement("img");
			img.setAttribute("src","img/sp.jpg");
			img.onload=function(){
				
				var i=0;
				setInterval(function(){
					canvas.clearRect(0,0,1140,110);
					canvas.drawImage(img,i%5*130,0,130,114,i%8*130,0,130,114);
					i++;
				},1000)
					
			}
		
		
		document.onkeydown=function(){
			var obj=document.getElementById("cawas");
			var cawas=obj.getContext("2d");
			
			var x=1;
			var y=1;
			switch (event.keyCode){	
			case 39:
				setInterval(function(){
					//cawas.beginPath();
					console.log(x);
					cawas.clearRect(0,0,1140,300);
					if(x<114){
						cawas.fillStyle="#8B008B";
						cawas.arc(x*20,y*20,10,0,Math.PI*2,false);
						cawas.fill();
						x++;
					}
					
				},500);
				break;
			case 36:
				i-=5;
				if(i<=0){
					i=0
				}
				obj.style.top=i+"px";
			console.log("40")
				break;
			case 37:
				i-=5;
				obj.style.left=i+"px";
			console.log("37")
				break;
			case 38:
//				i-=5;
//				obj.style.top=i+"px";
			console.log("38")
				break;
			case 13:
				active();
				break;
		}
			cawas.closePath();
		}
			
	////x修改
	var btn=document.querySelector(".updata");
		btn.onclick=function(){
			$(".ziliao").load("html/updata.html");
		}
		
		
	}
	
	