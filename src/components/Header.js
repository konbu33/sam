import React, { Component } from 'react';
import Logo from './Logo';
//import styled from 'styled-components';

/*
const StyledLogo = Styled(Logo)`
	color: red;
	background: lightblue;
`;	
*/

class Header extends Component {
	render() {
		return (
			<header>
				<Logo/>
			</header>
		)
	}
};

export default Header;

