// Exercise 2: Set It Up
	// write a class component
	// make it a div with className FeedList
	// import FeedItem and include it inside the div
	// export default the component!

// Exercise 3: Prop It Up
	// FeedList should accept props as params
	// destructure photos from props
	// iterate over the data and map each photo data to a FeedItem

// Exercise 6: Provide Context
    // pull the photos out of the context instead of the props

import React from 'react';
import FeedItem from "./FeedItem"

function FeedList(props){
	const {photos} = props ;
	return(
		<div className="FeedList">
			{
				photos.map((photo, i ) =>
					<FeedItem image = {photo} key={i} />

				)
			}
		</div>
	);
}
export default FeedList;