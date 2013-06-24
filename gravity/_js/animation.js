var GravityAnimation = function(){
	this.arrObj = [];
	this.limit = new V2D($(document).width() , $(document).height());
	this.stopMotion = false;
	this.add = function(_obj){
		
		this.arrObj.push({obj:_obj , motion:true});
	};
	this.start = function(){
		setInterval(this.render , 1000/30 , this);
		this.stopMotion = false;
		this.render(this);
	};
	this.stop = function(){
		clearInterval(this.render);
		this.stopMotion = true;
	};
	this.render=function(_animation){
		//if(this.stopMotion)return;
		//this.stopMotion = true;
		var i , length;
		length = _animation.arrObj.length;
		var remove = [];
		context.clearRect(0, 0, canvas.width, canvas.height);
		for(i = 0 ; i < length ; i++){
			if(_animation.arrObj[i].motion){
			
				var obj = _animation.arrObj[i].obj; 
				obj.speed.y += (obj.mass*obj.gravity);
				if(obj.speed.y+obj.position.y > _animation.limit.y)
				{
					obj.speed.y *=-.4;
					if(obj.speed.y > -2 && obj.speed.y < 2)	{
						_animation.arrObj[i].motion = false;
						obj.drawStop();
					}
				}
				obj.render();
			}
		}
		
	}
};