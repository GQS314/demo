var tangram=[
	{p:[{x:0,y:0},{x:400,y:0},{x:200,y:200}],color:"#caff67"},
	{p:[{x:0,y:0},{x:200,y:200},{x:0,y:400}],color:"#67becf"},
	{p:[{x:400,y:0},{x:400,y:200},{x:300,y:300},{x:300,y:100}],color:"#ef3d61"},
	{p:[{x:300,y:100},{x:300,y:300},{x:200,y:200}],color:"#f9f51a"},
	{p:[{x:200,y:200},{x:300,y:300},{x:200,y:400},{x:100,y:300}],color:"#a594c0"},
	{p:[{x:100,y:300},{x:200,y:400},{x:0,y:400}],color:"#fa8ecc"},
	{p:[{x:400,y:200},{x:400,y:400},{x:200,y:400}],color:"#f6ca29"}
];

window.onload = function(){
	var canvas01 = document.getElementById('canvas01');
	var canvas02 = document.getElementById('canvas02');
	var canvas03 = document.getElementById('canvas03');
	var canvas04 = document.getElementById('canvas04');
	var canvas05 = document.getElementById('canvas05');
	var canvas06 = document.getElementById('canvas06');
	var canvas07 = document.getElementById('canvas07');
	var canvas08 = document.getElementById('canvas08');
	var canvas09 = document.getElementById('canvas09');
	var canvas10 = document.getElementById('canvas10');
	var canvas11 = document.getElementById('canvas11');
	//	canvas.width = 1024;
	//	canvas.height = 768;
	
	//判断浏览器是否支持Canvas
	if(canvas01.getContext('2d')){
		var context01 = canvas01.getContext('2d');
		var context02 = canvas02.getContext('2d');
		var context03 = canvas03.getContext('2d');
		var context04 = canvas04.getContext('2d');
		var context05 = canvas05.getContext('2d');
		var context06 = canvas06.getContext('2d');
		var context07 = canvas07.getContext('2d');
		var context08 = canvas08.getContext('2d');
		var context09 = canvas09.getContext('2d');
		var context10 = canvas10.getContext('2d');
		var context11 = canvas11.getContext('2d');
		
		//绘制一条直线
		//context.moveTo(100,100);		//1、起点（100，100）
		//context.lineTo(700,700);		//2、终点（700，700）
		//context.stroke();				//3、执行
		
		//一、绘制多边形（边框色）
		context01.moveTo(100,100);		//1、起点
		context01.lineTo(300,300);		//2、第一条线终点
		context01.lineTo(100,300);		//3、第二条线终点
		context01.lineTo(100,100);		//4、第三条线终点（首尾连接）
		context01.lineWidth = 5;			//5、线条宽带
		context01.strokeStyle = "blue";	//6、线条颜色
		context01.stroke();				//7、执行绘制
		
		//二、绘制多边形（背景色）
		context02.moveTo(100,100);		//1、起点
		context02.lineTo(300,300);		//2、第一条线终点
		context02.lineTo(100,300);		//3、第二条线终点
		context02.lineTo(100,100);		//4、第三条线终点（首尾连接）
		context02.fillStyle = "rgb(2,100,30)";//5、背景色
		context02.fill();				//6、执行填充
		
		//三、绘制多边形（边框色）
		context03.moveTo(100,100);		//1、起点
		context03.lineTo(300,300);		//2、第一条线终点
		context03.lineTo(100,300);		//3、第二条线终点
		context03.lineTo(100,100);		//4、第三条线终点（首尾连接）
		context03.fillStyle = "rgb(2,100,30)";//5、背景色
		context03.fill();				//6、执行填充
		context03.lineWidth = 5;			//7、线条宽带
		context03.strokeStyle = "blue";	//8、线条颜色
		context03.stroke();				//9、执行绘制
		
		//四、绘制多个图形
		//使用beginPath、closePath将不同图形隔开
		context04.beginPath();			//--封闭开始，可以理解为{
		context04.moveTo(100,100);		//1、第一个图形，起点
		context04.lineTo(300,300);		//2、第一条线终点
		context04.lineTo(100,300);		//3、第二条线终点
		context04.lineTo(100,100);		//4、第三条线终点（首尾连接）
		context04.closePath();			//--封闭结束，可以理解为}
		context04.lineWidth = 5;		//5、线条宽带
		context04.strokeStyle = "blue";	//6、线条颜色
		context04.stroke();				//7、执行绘制
		
		context04.beginPath();			//--封闭开始，可以理解为{
		context04.moveTo(140,100);		//8、第二个图形，起点
		context04.lineTo(300,260);		//9、终点（直线）
		context04.closePath();			//--封闭结束，可以理解为}
		context04.lineWidth = 5;		//10、线条宽带
		context04.strokeStyle = "black";//11、线条颜色
		context04.stroke();				//12、执行绘制
		
		//五、七巧板
		for(var i=0;i<tangram.length;i++){
			draw(tangram[i],context05);
		}
		
		//六、绘制弧形
		//（1）封闭弧
		context06.lineWidth = 2;
		context06.strokeStyle = "blue";
		for(var i = 1;i<=4;i++){
			context06.beginPath();
			context06.arc(100*i-50,50,45,0,(i/2)*Math.PI,false);//1、圆心x轴，圆心y轴，半径，弧线起点，弧线终点，绘制方向 false为顺时针
			context06.closePath();
			context06.stroke();
		}
		//（2）非封闭弧
		for(var i = 1;i<=4;i++){
			context06.beginPath();
			context06.arc(100*i-50,150,45,0,(i/2)*Math.PI,false);//1、圆心x轴，圆心y轴，半径，弧线起点，弧线终点，绘制方向 false为顺时针
			
			context06.stroke();
		}
		//（3）填充背景色
		context06.fillStyle = "red";
		for(var i = 1;i<=4;i++){
			context06.beginPath();
			context06.arc(100*i-50,250,45,0,(i/2)*Math.PI,false);//1、圆心x轴，圆心y轴，半径，弧线起点，弧线终点，绘制方向 false为顺时针
			context06.closePath();
			context06.fill();
		}
		//（4）封闭弧填充背景色
		context06.lineWidth = 2;
		context06.strokeStyle = "blue";
		context06.fillStyle = "red";
		for(var i = 1;i<=4;i++){
			context06.beginPath();
			context06.arc(100*i-50,350,45,0,(i/2)*Math.PI,false);//1、圆心x轴，圆心y轴，半径，弧线起点，弧线终点，绘制方向 false为顺时针
			context06.closePath();
			context06.fill();
			context06.stroke();
		}
		
		//七、绘制时钟
		var t1 = window.setInterval(function(){
			render(context07);
			},50);
		
		//八、运动的小球
		var t2 = window.setInterval(function(){
			render8(context08);
			},50);
			
		//九、绘制时钟，特效小球
		var t3 = window.setInterval(function(){
			render9(context11);
			Balls(context11);
			},50);
	}else{
		alert("当前浏览器不支持Canvas，请更换浏览器再试！");
	}
	
}

//五、七巧板绘制方法
function draw(piece,cxt){
	cxt.beginPath();
	cxt.moveTo(piece.p[0].x,piece.p[0].y);
	for(var i = 1;i<piece.p.length;i++){
		cxt.lineTo(piece.p[i].x,piece.p[i].y);
	}
	cxt.closePath();
	
	cxt.fillStyle=piece.color;
	cxt.fill();
}

//七、绘制时钟——开始
//获取时间、格式化时间
function render(cxt){
	var myDate=new Date();
	var Hours=myDate.getHours().toString();
	var Minutes=myDate.getMinutes().toString();
	var Seconds=myDate.getSeconds().toString();
	var myTime=onestr(Hours);
	myTime.push(":");
	myTime = myTime.concat(onestr(Minutes));
	myTime.push(":");
	myTime = myTime.concat(onestr(Seconds));
	renderDigit(200,50,6,1,"rgb(0,102,153)",myTime,cxt);
}
//时钟点阵绘制方法
function renderDigit(x,y,radius,margin,color,time,cxt){//x,y,半径，间距，颜色，时间（8个字符串），Canvas
	
	cxt.clearRect(0,0,cxt.canvas.width,cxt.canvas.height);//重置画布,画布的x、y、宽、高
	cxt.fillStyle=color;
	var num=parseInt(time[0]);
	for(var i=0;i<time.length;i++){
		if(i==2||i==5){
			num=10;
		}else{
			num=parseInt(time[i]);
		}
		for(var j=0;j<digit[num].length;j++){
			for(var k=0;k<digit[num][j].length;k++){
				if(digit[num][j][k]==1){
					cxt.beginPath();
					cxt.arc(x+k*2*(radius+margin)+(radius+margin),y+j*2*(radius+margin)+(radius+margin),radius,0,2*Math.PI,false);
					cxt.closePath();
					cxt.fill();
				}
			}
		}
		if(i==2||i==5){
			x+=5*2*(radius+margin);
		}else{
			x+=8*2*(radius+margin);
		}
	}
}
//格式化时间
function onestr(str){
	var num;
	if(str.length==0){
		num=["0","0"];
	}else if(str.length==1){
		num=["0",str];
	}else{
		num=[str.substr(0,1),str.substr(1,1)];
	}
	return num;
}
//时钟数字点阵,三维数组
digit=[
	[
		[0,0,1,1,1,0,0],
		[0,1,1,0,1,1,0],
		[1,1,0,0,0,1,1],
		[1,1,0,0,0,1,1],
		[1,1,0,0,0,1,1],
		[1,1,0,0,0,1,1],
		[1,1,0,0,0,1,1],
		[1,1,0,0,0,1,1],
		[0,1,1,0,1,1,0],
		[0,0,1,1,1,0,0]
	],//0
	[
		[0,0,0,1,1,0,0],
		[0,1,1,1,1,0,0],
		[0,0,0,1,1,0,0],
		[0,0,0,1,1,0,0],
		[0,0,0,1,1,0,0],
		[0,0,0,1,1,0,0],
		[0,0,0,1,1,0,0],
		[0,0,0,1,1,0,0],
		[0,0,0,1,1,0,0],
		[1,1,1,1,1,1,1]
	],//1
	[
		[0,1,1,1,1,1,0],
		[1,1,0,0,0,1,1],
		[0,0,0,0,0,1,1],
		[0,0,0,0,1,1,0],
		[0,0,0,1,1,0,0],
		[0,0,1,1,0,0,0],
		[0,1,1,0,0,0,0],
		[1,1,0,0,0,0,0],
		[1,1,0,0,0,1,1],
		[1,1,1,1,1,1,1]
	],//2
	[
		[1,1,1,1,1,1,1],
		[0,0,0,0,0,1,1],
		[0,0,0,0,1,1,0],
		[0,0,0,1,1,0,0],
		[0,0,1,1,1,0,0],
		[0,0,0,0,1,1,0],
		[0,0,0,0,0,1,1],
		[0,0,0,0,0,1,1],
		[1,1,0,0,0,1,1],
		[0,1,1,1,1,1,0]
	],//3
	[
		[0,0,0,0,1,1,0],
		[0,0,0,1,1,1,0],
		[0,0,1,1,1,1,0],
		[0,1,1,0,1,1,0],
		[1,1,0,0,1,1,0],
		[1,1,1,1,1,1,1],
		[0,0,0,0,1,1,0],
		[0,0,0,0,1,1,0],
		[0,0,0,0,1,1,0],
		[0,0,0,1,1,1,1]
	],//4
	[
		[1,1,1,1,1,1,1],
		[1,1,0,0,0,0,0],
		[1,1,0,0,0,0,0],
		[1,1,1,1,1,1,0],
		[0,0,0,0,0,1,1],
		[0,0,0,0,0,1,1],
		[0,0,0,0,0,1,1],
		[0,0,0,0,0,1,1],
		[1,1,0,0,0,1,1],
		[0,1,1,1,1,1,0]
	],//5
	[
		[0,0,0,0,1,1,0],
		[0,0,1,1,0,0,0],
		[0,1,1,0,0,0,0],
		[1,1,0,0,0,0,0],
		[1,1,0,1,1,1,0],
		[1,1,0,0,0,1,1],
		[1,1,0,0,0,1,1],
		[1,1,0,0,0,1,1],
		[1,1,0,0,0,1,1],
		[0,1,1,1,1,1,0]
	],//6
	[
		[1,1,1,1,1,1,1],
		[1,1,0,0,0,1,1],
		[0,0,0,0,1,1,0],
		[0,0,0,0,1,1,0],
		[0,0,0,1,1,0,0],
		[0,0,0,1,1,0,0],
		[0,0,1,1,0,0,0],
		[0,0,1,1,0,0,0],
		[0,0,1,1,0,0,0],
		[0,0,1,1,0,0,0]
	],//7
	[
		[0,1,1,1,1,1,0],
		[1,1,0,0,0,1,1],
		[1,1,0,0,0,1,1],
		[1,1,0,0,0,1,1],
		[0,1,1,1,1,1,0],
		[1,1,0,0,0,1,1],
		[1,1,0,0,0,1,1],
		[1,1,0,0,0,1,1],
		[1,1,0,0,0,1,1],
		[0,1,1,1,1,1,0]
	],//8
	[
		[0,1,1,1,1,1,0],
		[1,1,0,0,0,1,1],
		[1,1,0,0,0,1,1],
		[1,1,0,0,0,1,1],
		[0,1,1,1,0,1,1],
		[0,0,0,0,0,1,1],
		[0,0,0,0,0,1,1],
		[0,0,0,0,1,1,0],
		[0,0,0,1,1,0,0],
		[0,0,1,1,0,0,0]
	],//9
	[
		[0,0,0,0],
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,1,1,0],
		[0,1,1,0],
		[0,0,0,0],
		[0,0,0,0]
	]//冒号:
]
//七、绘制时钟——结束

//八、运动的小球——开始
var ball={x:180,y:40,r:10,g:1,vx:8,vy:0,color:"#005588"}//x、y、半径、加速度、x轴方向的力、y轴方向的力、球的颜色
function render8(cxt){
	cxt.clearRect(0,0,cxt.canvas.width,cxt.canvas.height);//重置画布,画布的x、y、宽、高
	cxt.fillStyle=ball.color;
	cxt.beginPath();
	cxt.arc(ball.x,ball.y,ball.r,0,2*Math.PI,false);
	cxt.closePath();
	cxt.fill();
	
	ball.x+=ball.vx;
	ball.y+=ball.vy;
	ball.vy+=ball.g;
	
	if(ball.y>=400-ball.r){
		ball.y=400-ball.r;
		ball.vy=-ball.vy;
	}else if(ball.x>=400-ball.r){
		ball.x=400-ball.r;
		ball.vx=-ball.vx;
	}else if(ball.y<=ball.r){
		ball.y=ball.r;
		ball.vy=-ball.vy;
	}else if(ball.x<=ball.r){
		ball.x=ball.r;
		ball.vx=-ball.vx;
	}
	
}
//八、运动的小球——结束

//九、绘制时钟，特效小球——开始
//获取时间、格式化时间
var oldTime=new Array();
function render9(cxt){
	var myDate=new Date();
	var Hours=myDate.getHours().toString();
	var Minutes=myDate.getMinutes().toString();
	var Seconds=myDate.getSeconds().toString();
	var myTime=onestr(Hours);
	myTime.push(":");
	myTime = myTime.concat(onestr(Minutes));
	myTime.push(":");
	myTime = myTime.concat(onestr(Seconds));
	var newTimeNum=new Array();
	if(oldTime.length==8){
		for(var i=0;i<myTime.length;i++){
			if(myTime[i]!=oldTime[i]){
				newTimeNum.push(i);
			}
		}
	}
	oldTime=myTime;
	renderDigit9(200,50,6,1,"rgb(0,102,153)",myTime,cxt,newTimeNum);
}
var allBall=[];
//时钟点阵绘制方法
function renderDigit9(x,y,radius,margin,color,time,cxt,newTimeNum){//x,y,半径，间距，颜色，时间（8个字符串），Canvas
	
	cxt.clearRect(0,0,cxt.canvas.width,cxt.canvas.height);//重置画布,画布的x、y、宽、高
	var num=parseInt(time[0]);
	for(var i=0;i<time.length;i++){
		if(i==2||i==5){
			num=10;
		}else{
			num=parseInt(time[i]);
		}
		for(var j=0;j<digit[num].length;j++){
			for(var k=0;k<digit[num][j].length;k++){
				if(digit[num][j][k]==1){
					cxt.beginPath();
					cxt.arc(x+k*2*(radius+margin)+(radius+margin),y+j*2*(radius+margin)+(radius+margin),radius,0,2*Math.PI,false);
					cxt.closePath();
					cxt.fillStyle=color;
					cxt.fill();
				}
			}
		}
		if(newTimeNum.length>0){
			for(var l=0;l<newTimeNum.length;l++){
				if(newTimeNum[l]==i){
					for(var j=0;j<digit[num].length;j++){
						for(var k=0;k<digit[num][j].length;k++){
							if(digit[num][j][k]==1){
								var RandomColor=getRandomColor();
								var aball={
									x:x+k*2*(radius+margin)+(radius+margin),
									y:y+j*2*(radius+margin)+(radius+margin),
									r:radius,
									g:1.5*Math.random(),
									vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,
									vy:-5,
									color:RandomColor}
								allBall.push(aball);
							}
						}
					}
				}
			}
		}
		if(i==2||i==5){
			x+=5*2*(radius+margin);
		}else{
			x+=8*2*(radius+margin);
		}
	}
}
function getRandomColor(){
  return  '#' +    
    (function(color){    
    return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])    
      && (color.length == 6) ?  color : arguments.callee(color);    
  })('');    
}

function Balls(cxt){
	for(var i=0;i<allBall.length;i++){
		cxt.beginPath();
		cxt.arc(allBall[i].x,allBall[i].y,allBall[i].r,0,2*Math.PI,false);
		cxt.closePath();
		cxt.fillStyle=allBall[i].color;
		cxt.fill();
		
		//设置字体样式
		cxt.font = "16px Courier New";
		//设置字体填充颜色
		cxt.fillStyle = "blue";
		//从坐标点(50,50)开始绘制文字
		cxt.fillText(i, allBall[i].x+allBall[i].r, allBall[i].y+allBall[i].r);

		
		allBall[i].x+=allBall[i].vx;
		allBall[i].y+=allBall[i].vy;
		allBall[i].vy+=allBall[i].g;
		
		if(allBall[i].y>=600-allBall[i].r){
			allBall[i].y=600-allBall[i].r;
			allBall[i].vy=-allBall[i].vy*0.6;
		}
		if(allBall[i].x>1220+allBall[i].r||allBall[i].x<(-allBall[i].r)){
			allBall.splice(i,1);
		}
	}
}
//七、绘制时钟，特效小球——结束