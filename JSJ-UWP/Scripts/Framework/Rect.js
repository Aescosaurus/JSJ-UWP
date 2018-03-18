class Rect_
{
	constructor( x,y,width,height )
	{
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		// 
		this.Contains = ( pos ) =>
		{
			return ( pos.x > this.x && pos.x < this.x + this.width &&
				pos.y > this.y && pos.y < this.y + this.height );
		}

		this.IsContainedBy = ( other ) =>
		{
			return ( this.x >= other.x && this.x + this.width <= other.x + other.width &&
				this.y >= other.y && this.y + this.height <= other.y + other.height );
		}

		this.Overlaps = ( other ) =>
		{
			return ( other.x < this.x + this.width && other.x + other.width > this.x &&
				other.y < this.y + this.height && other.y + other.height > this.y );
		}

		this.MoveBy = ( amount ) =>
		{
			this.x += amount.x;
			this.y += amount.y;
		}

		this.MoveTo = ( pos ) =>
		{
			this.x = pos.x;
			this.y = pos.y;
		}

		this.GetMovedBy = ( amount ) =>
		{
			return this.Clone().MoveBy( amount );
		}

		this.GetMovedTo = ( pos ) =>
		{
			return this.Clone().MoveTo( pos );
		}

		this.Clone = () =>
		{
			return Rect( this.x,this.y,this.width,this.height );
		}

		this.IsValid = () =>
		{
			return ( width > 0 && height > 0 );
		}
	}
}

// Call this like [const hitbox = Rect( 0,0,10,10 );].
function Rect( x,y,width,height )
{
	return ( new Rect_( x,y,width,height ) );
}