import React from 'react';
import styled from 'styled-components';

const SNav = styled.nav`
	outline: 1px dotted gray;
	height: 50px;
`;

const SUl = styled.ul`
	outline: 1px dotted gray;
	height: 50px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const SLi = styled.li`
	outline: 1px dotted gray;
	list-style: none;
`;

const menuList = [
	"Products",
	"Company",
	"About",
	"Access",
	"Contact",
];


const Nav = () => ( 
	<SNav>
		<SUl>
			{ 
				menuList.map( (item, index) => { 
					return <SLi key={index}>{item}</SLi> 
				})
			}
		</SUl>
	</SNav>
);

export default Nav;

