class _Window
{
	constructor()
	{
		this.gfx = new Graphics();
		this.kbd = new Keyboard();
		this.mouse = new Mouse();
		this.sfx = new Sound();
		// 
		this.Initialize = () =>
		{
			this.gfx.Initialize();
			this.mouse.Initialize( this.gfx.GetCanvas() );
		};
	}
}

_Window.prototype.GFX_EXISTS = false;
_Window.prototype.KBD_EXISTS = false;
_Window.prototype.MOUSE_EXISTS = false;
_Window.prototype.SFX_EXISTS = false;