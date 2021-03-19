let
	canv		= document.querySelector('#canv'),
	ctx			= canv.getContext('2d');

	canv.width	= innerWidth;
	canv.height	= innerHeight;

let
	cx 			= canv.width / 2,
	cy			= canv.height / 2,
	cr 			= 0.0001,
	rv			= document.querySelector('#range'),
	nv			= document.querySelector('#ranges'),
	nn,
	gg			= document.querySelector('#round-radius'),
	aa,
	lw  		= document.querySelector('#lw'),
	bb,
	vv			= document.querySelector('#lw-out'),
	ss 			= document.querySelector('#r-r-out');

let cra = setInterval(function() {
		cr = rv.value;
		nv.value 	= rv.value;
		r 			= gg.value;
		vv.value	= lw.value;
		ss.value 	= gg.value;

			if (cr < nn || aa < r || aa > r || bb < lw.value || bb > lw.value) {
				ctx.clearRect(0,0, canv.width, canv.height);
			}

			ctx.beginPath();
			ctx.arc(cx,cy,r,rv.value,Math.PI * 2, true);
			ctx.strokeStyle = 'red';
			ctx.lineWidth	= lw.value;
			ctx.stroke();

			bb = lw.value;
			aa = r;
			nn = cr;

	}, 1000/100); // 100 fps