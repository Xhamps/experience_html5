var V2D = function(_x , _y ){
	this.x = _x;
	this.y = _y;
};

var Circle = function(){
	this.position=null
	
};

(function(){
	
	Circle.prototype = {
		draw:function(ctx , _mouse){
			ctx.strokeStyle = "rgba(200,200,200,1)";
			ctx.fillStyle = "rgba(200,200,200,1)";
			
			ctx.beginPath();
			ctx.arc(_mouse.x,_mouse.y,5,0,Math.PI*2,true);
			ctx.closePath();
			ctx.stroke();
			ctx.fill();
			this.position = _mouse;
		},
		validPoint:function(_oldPoint , _limit){
			var dx = _oldPoint.position.x - this.position.x;
			var dy = _oldPoint.position.y - this.position.y;
			var dist = Math.sqrt((dx*dx)+(dy*dy));
			if(dist <_limit) return 1-(dist/_limit);
			return null
		}
	}
})();