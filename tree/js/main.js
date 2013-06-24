var canvas;
var context;
var area = 10;
var raio = (area/2);



var pCanvasCenter = function(){
	var p = new V2D( $(document).width()/2, $(document).height()/2 );
	return p;
}
var xhamps = {
	mouse:null,
	center:null,
	context:null,
	triangulo:null,
	arrTriangulo: [],
	particulas:0,
	init:function(){
		if (!document.createElement('canvas').getContext) return;

		//Create the canvas
		$("body").prepend("<canvas width='" + $(document).width() + "' height='" + $(document).height() + "'></canvas>");
		canvas = $("canvas")[0];
		context = canvas.getContext('2d');
		$(window).resize(function(){
			$("canvas").width($(document).width()).height($(document).height());
			xhamps.center = pCanvasCenter();
		});
		xhamps.center = pCanvasCenter();
	
		$(document).mousemove(function(e){
			//log("mousemove");
			xhamps.mouse = new V2D(e.pageX , e.pageY);
		})
		
		var r1 ,g1,b1;
		var r2 ,g2,b2;
		var r3 ,g3,b3;
		
		r1 = 255;		g1 = 94; 		b1 = 0;
		r2 = 138;		g2 = 165; 		b2 = 255;
		r3 = r2 - r1 ;	g3 = g2 - g1 ; 	b3 = b2 -b1 ;
		
		var i , j , lengthI , lengthJ ;
		lengthI = $(document).width()/area;
		lengthJ = $(document).height()/area;
		for( var i=0; i < lengthI  ; ++i) {
			for( var j=0; j < lengthJ ; ++j) {
				xhamps.add(new V2D(0, -(area/2)) , new V2D(raio, (area/2)) , new V2D(-raio, (area/2)) , new V2D((area*i)+(area/2) ,  (area*j)+(area/2)) );
				xhamps.arrTriangulo[xhamps.particulas].setClorRGB(Math.round(((r3/lengthI)+i)+r1),Math.round(((g3/lengthI)+i)+g1) ,Math.round(((b3/lengthI)+i)+b1),.7);
				xhamps.particulas++;
			}
		}
		
		
		
		$("canvas").click(function(e){
			xhamps.add(new V2D(0, -(area)) , new V2D(raio, (area)) , new V2D(-raio, (area)) , new V2D(e.pageX , e.pageY) );
			xhamps.arrTriangulo[xhamps.particulas].setClorRGB(Math.round(Math.random()*255),Math.round(Math.random()*255) ,Math.round(Math.random()*255) , .7);
			xhamps.particulas++;
			
		})
		log(xhamps.particulas)
		setInterval(xhamps.draw, 1000/30);
	},
	add:function(_p1 , _p2 , _p3 , _position ){
		var item = new Triangulo();
		item.setPoint(_p1 , _p2, _p3);
		item.setClorRGB();
		item.setPosition(_position);
		xhamps.arrTriangulo.push(item);
	},
    draw:function(){
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		for( var i=0; i < xhamps.arrTriangulo.length; ++i) {
			xhamps.arrTriangulo[i].calcPoints(xhamps.mouse);
			xhamps.arrTriangulo[i].draw(context);
		}
		
		
	}
}
$(xhamps.init);