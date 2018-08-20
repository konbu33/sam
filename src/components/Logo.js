import React, { Fragment } from 'react';
//import React, { Component, Fragment } from 'react';
import Styled from 'styled-components';

const StyledLogo = Styled.h1`
	outline: 1px dotted gray;
`;

const Logo = () => (
	<Fragment>
		<StyledLogo>TestTest</StyledLogo>
	</Fragment>
);

/*
class Logo extends Component {
	render() {
		return (
				<StyledLogo/>
			<div>
				<h1>Logo Test</h1>
				<StyledLogo>Logo Styled</StyledLogo>
			</div>
		)
	}
};
*/

export default Logo;

