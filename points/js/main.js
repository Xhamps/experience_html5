var canvas;
var context;



var pCanvasCenter = function(){
	var p = new V2D( $(document).width()/2, $(document).height()/2 );
	return p;
}
var xhamps = {
	arrParti: [],
	particulas:0,
	limite : 250,
	init:function(){
		if (!document.createElement('canvas').getContext) return;

		//Create the canvas
		$("body").prepend("<canvas width='" + $(document).width() + "' height='" + $(document).height() + "'></canvas>");
		canvas = $("canvas")[0];
		context = canvas.getContext('2d');
		$(window).resize(function(){
			$("canvas").width($(document).width()).height($(document).height());
			
		});
		
	
		$(document).click(function(e){
			var item = new Circle();
			item.draw(context , new V2D(e.pageX , e.pageY));
			xhamps.arrParti.push(item);
			xhamps.particulas++;
			xhamps.trackPoints();
		})
		
	
	},
	trackPoints:function(){
		var i,j;
		for(var i=0 ; i<xhamps.particulas-1 ; i++){
				var alpha = xhamps.arrParti[xhamps.particulas-1].validPoint(xhamps.arrParti[i] , xhamps.limite);
				if(alpha != null)xhamps.drawLine(xhamps.arrParti[xhamps.particulas-1	] , xhamps.arrParti[i], alpha)
		}
	},
	drawLine:function( p1 , p2 , _alpha){
		
		context.strokeStyle = "rgba(200,200,200,"+_alpha+")";
		context.fillStyle = "rgba(200,200,200,"+_alpha+")";
	    context.beginPath();
	    context.moveTo(p1.position.x , p1.position.y);
		context.lineTo(p2.position.x , p2.position.y );
	    context.stroke();
	}
	
}
$(xhamps.init);