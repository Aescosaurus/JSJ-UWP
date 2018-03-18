class Vec2_
{
	constructor( x,y )
	{
		this.x = x;
		this.y = y;
		// 
		this.Add = ( other ) =>
		{
			this.x += other.x;
			this.y += other.y;

			return this;
		}

		this.GetAdded = ( other ) =>
		{
			return this.Clone().Add( other );
		}

		this.Subtract = ( other ) =>
		{
			this.x -= other.x;
			this.y -= other.y;

			return this;
		}

		this.GetSubtracted = ( other ) =>
		{
			return this.Clone().Subtract( other );
		}

		this.Multiply = ( amount ) =>
		{
			this.x *= amount;
			this.y *= amount;

			return this;
		}

		this.GetMultiplied = ( amount ) =>
		{
			return this.Clone().Multiply( amount );
		}

		this.Divide = ( amount ) =>
		{
			this.x /= amount;
			this.y /= amount;

			return this;
		}

		this.GetDivided = ( amount ) =>
		{
			return this.Clone().Divide( amount );
		}

		this.Normalize = () =>
		{
			const div = Math.sqrt( this.x * this.x + this.y * this.y );
			if( div === 0 )
			{
				return;
			}

			this.x = this.x / div;
			this.y = this.y / div;

			return this;
		}

		this.GetNormalized = () =>
		{
			return this.Clone().Normalize();
		}

		this.GetLengthSq = () =>
		{
			return ( x * x + y * y );
		}

		this.GetLength = () =>
		{
			return Math.sqrt( this.GetLengthSq() );
		}

		this.Equals = ( other ) =>
		{
			return ( this.x == other.x && this.y == other.y );
		}

		this.Clone = () =>
		{
			return ( new Vec2_( this.x,this.y ) );
		}
	}
}

Vec2_.Up = () =>
{
	return Vec2( 0,-1 );
}

Vec2_.Down = () =>
{
	return Vec2( 0,1 );
}

Vec2_.Left = () =>
{
	return Vec2( -1,0 );
}

Vec2_.Right = () =>
{
	return Vec2( 1,0 );
}

// Just a regular function, but doesn't need new keyword.
function Vec2( x,y )
{
	return ( new Vec2_( x,y ) );
}