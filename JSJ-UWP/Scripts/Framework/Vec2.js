class Vec2
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
			return ( new Vec2( this.x + other.x,this.y + other.y ) );
		}

		this.Subtract = ( other ) =>
		{
			this.x -= other.x;
			this.y -= other.y;

			return this;
		}

		this.GetSubtracted = ( other ) =>
		{
			return ( new Vec2( this.x - other.x,this.y - other.y ) );
		}

		this.Multiply = ( amount ) =>
		{
			this.x *= amount;
			this.y *= amount;

			return this;
		}

		this.GetMultiplied = ( amount ) =>
		{
			return ( new Vec2( this.x * amount,this.y * amount ) );
		}

		this.Divide = ( amount ) =>
		{
			this.x /= amount;
			this.y /= amount;

			return this;
		}

		this.GetDivided = ( amount ) =>
		{
			return ( new Vec2( this.x / amount,this.y / amount ) );
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
			const div = Math.sqrt( this.x * this.x + this.y * this.y );
			if( div === 0 )
			{
				return;
			}

			return ( new Vec2( this.x / div,this.y / div ) );
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
	}
}