var V2D = function(_x , _y ){
	this.x = _x;
	this.y = _y;
	this.position = null;
}



var Triangulo = function(){
	this.p1 = new V2D(0 , 0);
	this.p2 = new V2D(-10 , 10);
	this.p3 = new V2D(10 , 10);
	this.color =  "rgb(0,0,0)";
	
	
	this.rotation =  -Math.PI/2;
	this.position = new V2D(0 , 0 , null);
};
(function(){
	
	V2D.prototype = {
		rotation:function (_angle){
			
			if(this.position ==null)return;
			var co = Math.cos(_angle);
			var si = Math.sin(_angle);
			var xx = (co * (this.x-this.position.x) - si * (this.y-this.position.y))+this.position.x;
			this.y = (si * (this.x-this.position.x) + co * (this.y-this.position.y))+this.position.y ;
		    this.x = xx;
		},
		setPosition:function(_position){
			
			if(this.position!=null){
				this.x -= this.position.x;
				this.y -= this.position.y;
			}
			
			this.x += _position.x;
			this.y += _position.y;
			this.position = _position;
		}
	};
	
	Triangulo.prototype = {
		setClorRGB:function(_r , _g , _b , _a){
			if(_a == null)
				this.color = "rgb("+_r+","+ _g+","+_b+")";
			else
				this.color = "rgba("+_r+","+ _g+","+_b+","+_a+")";
				
		},
		setPoint:function(_p1 , _p2 , _p3){
			this.p1 = _p1;
			this.p2 = _p2;
			this.p3 = _p3;
			this.p1.setPosition(this.position);
			this.p2.setPosition(this.position);
			this.p3.setPosition(this.position);
			
			//this.calcPoints(null , this.rotation);
		},
		setPosition:function(_position){
			this.p1.setPosition(_position);
			this.p2.setPosition(_position);
			this.p3.setPosition(_position);
			
			this.position = _position;
		},
		setRotation:function(_ratian){
			if(_rotation > 1) _ratian %= 1;
			this.calcPoints(null , _rotation);	
		},
		calcPoints:function(_mouse ,  _rotation){
			if(_mouse != null ){
				var dx = (_mouse.x- this.position.x);
				var dy = (_mouse.y- this.position.y);
				var angle = Math.atan2(dy, dx);
			}else if(_rotation != null){
				angle = _rotation;
			}else{
				return;
			}
			
			if(this.rotation != null)angle -=this.rotation;
			
			this.p1.rotation(angle);
			this.p2.rotation(angle);
			this.p3.rotation(angle);
			this.rotation += angle;
		},
		draw:function(ctx){
			if(ctx == null)return;
			ctx.fillStyle = this.color;
		    ctx.beginPath();
		    ctx.moveTo(this.p1.x , this.p1.y);
			ctx.lineTo(this.p2.x , this.p2.y );
			ctx.lineTo(this.p3.x , this.p3.y);
		    ctx.fill();

		}
	};
})();

	