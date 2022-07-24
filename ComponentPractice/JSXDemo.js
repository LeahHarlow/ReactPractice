import React from 'react';

const getMood = () => {
	const moods = ['Happy', "Silly", "Angry", "Extatic", "loveStruck"];
	return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1>My current mood is: {getMood()}</h1>
			</div>
		);
	}
}

