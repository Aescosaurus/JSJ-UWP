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