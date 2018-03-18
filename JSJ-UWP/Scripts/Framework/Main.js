const wnd = new Window();
const theGame = new Game( wnd );

window.onload = () =>
{
	wnd.Initialize();
	theGame.Initialize();

	const fps = 30.0;
	setInterval( () =>
	{
		theGame.UpdateGame();

		wnd.gfx.DrawRect( 0.0,0.0,
			wnd.gfx.ScreenWidth,wnd.gfx.ScreenHeight,
			"#000" );

		theGame.ComposeFrame();
	},1000 / fps );
};