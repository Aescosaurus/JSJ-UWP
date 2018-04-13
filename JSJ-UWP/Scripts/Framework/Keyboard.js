class Keyboard
{
	constructor()
	{
		if( _Window.prototype.KBD_EXISTS ) return;
		else _Window.prototype.KBD_EXISTS = true;

		let keyMap = [];
		// 
		this.KeyDown = ( key ) =>
		{
			if( typeof key === 'string' )
			{
				key = key.charCodeAt( 0 );
			}

			return keyMap[key];
		};

		window.onkeydown = window.onkeyup = ( e ) =>
		{
			const keyIsPressed = e.type === 'keydown';
			keyMap[e.keyCode] = keyIsPressed;
		};
	}
}