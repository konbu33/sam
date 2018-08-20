import React, { Component, Fragment } from 'react';
import Styled from 'styled-components';
//import InputName from './InputName';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

const StyledContainer = Styled.article`
	background: lightgray;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const StyledHeader = Styled(Header)`
	color: red;
`;

/*
class StyledContainer extends Component {
	render() {
		return (
			<section>
				<Header/>
				<Nav></Nav>
				<a href='https://google.co.jp'>GOOGLE</a>
			</section>
		)
	}
};
*/

const Container = () => (
	<Fragment>
		<StyledContainer>
			<StyledHeader/>
			<Header/>
			<Nav/>
			<a href='https://google.co.jp'>GOOGLE</a>
			<Main/>
			<Footer/>
		</StyledContainer>

		<style jsx>{`
			a {
				background: red;
			}
			Nav {
				background: red;
			}
			StyledHeader {
				background: red;
			}
			SytledContainer {
				background: red;
			}
		`}</style>
	</Fragment>
); 
export default Container;

