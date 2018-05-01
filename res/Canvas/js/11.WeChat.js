/**
 * Created by pl on 2017/8/12.
 * 'use strict'
 */

var stage = new Konva.Stage({
	container: 'container',
	width: window.innerWidth,
	height: window.innerHeight
});

//场景的构造器
var sceneBuilders = [builderHtml5Scene, builderCss3Scene, builderJsScene];
//当前场景的执行的索引
var sceneIndex = 0;
//打开页面先执行第一个场景的play()
sceneBuilders[0]().play();

//构造h5的场景
function builderHtml5Scene() {
	var bgLayer = new Konva.Layer();
	var animateLayer = new Konva.Layer();
	var lightLayer = new Konva.Layer();
	
	return new ItcastScene({
		name: '场景1',
		layers: [bgLayer, animateLayer, lightLayer],
		stage: stage,
		//初始化场景
		init: function () {
			
		},
		pre: function () {
			
		},
		post: function ( next ) {
			next();
		}
	});
}
//构造css3的场景
function builderCss3Scene() {
	return new ItcastScene({
	
	});
}
//构造js的场景
function builderJsScene() {
	return new ItcastScene({
	
	});
}

function addStageEvent() {
	var startY = 0,
			endY = 0;
	stage.on('contentMousedown contentTouchstart', function (e) {
		if(e.type == 'contentMousedown'){
			//console.log(e.evt.screenX + ',' + e.evt.screenY);
			startY = e.evt.screenY;
		}else if(e.type == 'contentTouchstart'){
			//console.log(e.evt.touches[0].screenX + ',' + e.evt.touches[0].screenY);
			startY = e.evt.touches[0].screenY;
		}
		//console.log(e);
	});
	stage.on('contentMousemove contentTouchmove', function (e) {
		if(e.type == 'contentMousemove'){
			endY = e.evt.screenY;
		}else if(e.type == 'contentTouchmove'){
			endY = e.evt.touches[0].screenY;
		}
	});
	stage.on('contentMouseup contentTouchend', function (e) {
		if(endY > startY){
			//下滑
			sceneIndex = sceneIndex <= 0 ? 0 : sceneIndex - 1;
		}else{
			//上滑,执行下一个场景的play()
			sceneIndex =
					sceneIndex >= sceneBuilders.length - 1 ? sceneBuilders.length - 1 : sceneIndex + 1;
		}
		sceneBuilders[ sceneIndex ]().play();
	});
}
//给舞台添加滑动事件
addStageEvent();

//场景类
function ItcastScene( options ) {
	this.stage = options.stage;
	//执行场景的初始化
	this.init = options.init || ItcastScene.voidFn;
	//执行场景的进场动画
	this.pre = options.pre || ItcastScene.voidFn;
	//执行场景的离场动画
	this.post = options.post || ItcastScene.voidFn;
	
	//当前场景的所有层
	this.layers = options.layers || [new Konva.Layer()];
	this.name = options.name || '';
	this.init();
}
ItcastScene.prototype = {
	constructor: ItcastScene,
	voidFn: function(){},
	//当前场景
	currentScene: null,
	//场景要进入舞台，只需调用场景的play方法
	play: function () {
		var self = this;
		//doPre
		var doPre = function doPre() {
			//把当前场景中的所有层添加到舞台
			self.layers.forEach(function (item) {
				self.stage.add(item);
			});
			//设置当前场景为this
			ItcastScene.currentScene = self;
			//执行当前场景的入场动画
			self.pre();
		};
		
		/*
		* 如果不是第一个场景，先执行当前场景的离场动画
		* 然后执行下一个场景的入场动画
		* 需要在场景的post方法中执行传进去的next方法
		* */
		if(ItcastScene.currentScene){
			//执行上一个场景的离场动画
			ItcastScene.currentScene.post(doPre);
		}else{
			//如果是第一个入场直接执行入场动画
			doPre();
		}
	}//play
};