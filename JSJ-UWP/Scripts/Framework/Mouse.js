class Mouse
{
	constructor()
	{
		const pos = new Vec2( 0,0 );
		let isDown = false;
		// 
		this.Initialize = ( canvas ) =>
		{
			canvas.addEventListener( "mousedown",() =>
			{
				isDown = true;
			} );

			canvas.addEventListener( "mouseup",() =>
			{
				isDown = false;
			} );

			canvas.addEventListener( "mousemove",( e ) =>
			{
				const rect = canvas.getBoundingClientRect();
				const root = document.documentElement;
				pos.x = e.clientX - rect.left - root.scrollLeft;
				pos.y = e.clientY - rect.top - root.scrollTop;
			} );
		};

		this.GetPos = () =>
		{
			return pos;
		};

		this.IsDown = () =>
		{
			return isDown;
		};
	}
}