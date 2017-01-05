import React from 'react';
import styles from './css/main.css'

class Stave extends React.Component {
	constructor(args) {
		super(args);
	}

	render() {
		return (
			<div>
				<OneSpacesAndRefenceLine />
			</div>
			)
	}	
}

class OneSpacesAndRefenceLine extends React.Component {
	constructor(args) {
		// code
		super(args);
	}

	render() {

		return(
			<div>
				<Line />
				<Space />
			</div>
			)
	}
}

class Line extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render() {
			return (
				<div className="stave-line"></div>
				)
		}		
}

class Space extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render() {
			return (
				<div className="stave-space"></div>
				)
		}		
}

export default Stave;