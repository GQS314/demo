/**
 * Created by pl on 2017/8/10.
 * 'use strict'
 */

function ItcastRect( option ) {
	this._init( option );
}
ItcastRect.prototype = {
	_init: function ( option ) {
		this.x = option.x || 0;
		this.y = option.y || 0;
		this.w = option.w || 100;
		this.h = option.h || 100;
		this.lineWidth = option.lineWidth || 1;
		this.rotate = option.rotate || 0;
		this.opacity = option.opacity === 0 ? 0 : (option.opacity || 1);
		
		this.scaleX = option.scaleX || 1;
		this.scaleY = option.scaleY || 1;
		
		this.strokeStyle = option.strokeStyle || '#000';
		this.fillStyle = option.fillStyle || '#000';
	},
	render: function ( ctx ) {
		ctx.save();
		
		ctx.beginPath();
		ctx.rotate(this.rotate);
		ctx.scale(this.scaleX, this.scaleY);
		ctx.globalAlpha = this.opacity;
		ctx.lineWidth = this.lineWidth;
		ctx.strokeStyle = this.strokeStyle;
		ctx.fillStyle = this.fillStyle;
		ctx.rect(this.x, this.y, this.w, this.h);
		ctx.fill();
		ctx.stroke();
		
		ctx.restore();
	}
};