class Keyboard
{
	constructor()
	{
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