var Circle = function(_x, _y , _raio , _mass){
	this.name = "";
	this.position = new V2D(_x , _y);
	this.raio = (_raio == null)?50*Math.random()+10 : _raio;
	this.speed = new V2D(0,0);
	this.mass = (_mass == null)? this.raio*.9 :_mass;
	this.gravity = 0.06;
	this.ctx = null;
	this.color = Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255) ;
	this.stopMotion = false;
};
(function(){
	Circle.prototype  = { 
		render:function(){
			if(this.position == null )return;
			if(this.stopMotion == false){
				this.position.x += this.speed.x;
				this.position.y += this.speed.y;
			}
			/*this.ctx.shadowOffsetX = 5;
			this.ctx.shadowOffsetY = 5;
			this.ctx.shadowBlur    = 4;
			this.ctx.shadowColor   = "rgba("+this.color+",.4)";*/
			this.ctx.strokeStyle = "rgba("+this.color+",.7)";
			this.ctx.fillStyle = "rgba("+this.color+",.7)";
			this.ctx.beginPath();
			this.ctx.arc(this.position.x- (this.raio/2), this.position.y - (this.raio/2), this.raio , 0 , Math.PI*2 , true);
			this.ctx.closePath();
			this.ctx.stroke();
			this.ctx.fill();
			
		},
		
		draw: function(_ctx){
			this.ctx = _ctx;
			this.render();
		},
		drawStop:function(){
			this.stopMotion == true;
			//this.render();
		},
		setSpeed:function(_value){
			this.speed = _value;
		},
		setGravity:function(_point){
			this.gravity = _point;
		},
		vx:function(){
			return(this.speed != null)?this.speed.x : null;
		},
		vy:function(){
			return(this.speed != null)? this.speed.y : null;
		},
		x:function(){
			return (this.position != null)? this.position.x : null;
		},
		y:function(){
			return (this.position != null)? this.position.y : null;
		}
	}
})();