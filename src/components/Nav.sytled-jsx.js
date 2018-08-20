import React, { Component, Fragment } from 'react';

class Nav extends Component {
	render() {

		const items = [
			"Products",
			"Company",
			"About",
			"Access",
			"Contact",
		];

		/*
		const itemList = items.map( (item) => {
			return (
				<li>{item}</li>
			)
		});
		*/

		return (
			<Fragment>
			<ul>
				{ //itemList 
				}

				{ /*itemList*/ }

				{ /* items.map( (item) => { return <li>{item}</li>} ) */ }


				{ 
					items.map( (item) => { 
						return <li>{item}</li> 
					})
				}
			</ul>

			<style jsx>{`
				ul {
					color: red;
					outline: 1px dotted gray;
					display: flex;
					justify-content: space-around;
					align-items: center;
					height: 300px;
				}	
				li {
					list-style: none;
					outline: 1px dotted gray;
				}
				li:hover {
					background: lightgray;
					opacity: 0.5;
				}
				li:before {
					content: '*';
					height: 10px;
					width: 10px;
					background: lightgreen;
				}
				li:after {
					content: 'd';
					background: lightgreen;
				}
			
		
			`}</style>
			</Fragment>
		)
	}
};

export default Nav;

