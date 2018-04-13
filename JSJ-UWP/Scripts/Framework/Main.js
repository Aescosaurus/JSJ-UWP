const wnd = new _Window();
const theGame = new Game( wnd );
const fps = 30.0;

window.onload = () =>
{
	wnd.Initialize();
	theGame.Initialize();

	setInterval( () =>
	{
		theGame.UpdateGame();

		wnd.gfx.DrawRect( 0.0,0.0,
			wnd.gfx.ScreenWidth,wnd.gfx.ScreenHeight,
			"#000" );

		// wnd.gfx.GetContext()
		// 	.scale( wnd.gfx.SizeMult.x,
		// 	wnd.gfx.SizeMult.y );

		theGame.ComposeFrame();

		// wnd.gfx.GetContext()
		// 	.scale( 1.0 / wnd.gfx.SizeMult.x,
		// 	1.0 / wnd.gfx.SizeMult.y );
	},1000 / fps );
};