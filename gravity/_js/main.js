var xhamps = {
	arrParti:[],
	particulas:0,
	control: new GravityAnimation(),
	oldPosition: new V2D(0,0),
	init:function(){
		if (!document.createElement('canvas').getContext) return;
		//Create the canvas
		
		
		$("body").prepend("<canvas width='" + $(document).width() + "' height='" + $(document).height() + "'></canvas>");
		canvas = $("canvas")[0];
		context = canvas.getContext('2d');
		
		
		
		$(window).resize(function(){
			$("canvas").width($(document).width()).height($(document).height());
			
		});
		
	
		$(document).mousemove(function(e){
			if(xhamps.oldPosition.x == e.pageX && xhamps.oldPosition.y == e.pageY)return;
			xhamps.oldPosition = new V2D(e.pageX , e.pageY );
			var item = new Circle(e.pageX , e.pageY );
			item.name = "Ball_"+ ++xhamps.particulas;
			item.draw(context);
			xhamps.control.add(item);
			
		});
		log(xhamps.control);
		xhamps.control.start();
		
	}
}
$(xhamps.init);