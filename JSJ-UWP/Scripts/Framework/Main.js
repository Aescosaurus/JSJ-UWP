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

		theGame.ComposeFrame();
	},1000 / fps );
};