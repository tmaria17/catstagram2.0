// Exercise 2: Set It Up
	// write a class component
	// make it a div with a class name of Likes
	// write a span and a button element inside
	// export default the component!

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it.

// Exercise 4: State It
// Create a button that toggles between two states: "Liked" and "Not liked (yet)"
	 // add a constructor with initial state
	 // add a button to the rendered JSX with an onClick attribute
	 // add a method to handle the click/ change the state
	 // hook up the button text to the state
// BONUS: Create a likes counter
	 // take in a prop for the number of likes
	 // increase or decrease the likes based on whether button click is like/ unlike
	 // hint: take the total likes as a prop, and convert it to state

import React, {useState} from 'react';
function Likes(props){
	const { likeCount } = props;
	const [liked, setLiked] = useState(false)
	const [totalLikesCount, setLikesCount] = useState(likeCount)
	const handleLikeButtonClick = () =>{
		if (liked) {
			setLikesCount(totalLikesCount - 1)
		} else {
			setLikesCount(totalLikesCount + 1)

		}
		setLiked(!liked)
	}
	return(
		<div className="Likes">
			<span>{likeCount} likes</span>
			<button onClick={handleLikeButtonClick}>Heart</button>
				{ liked ? ' loved ! ' : "not loved (yet)"}
				real likes : {totalLikesCount}
		</div>


	);
}
export default Likes;