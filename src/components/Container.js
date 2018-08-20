import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import ReloadModal from './ReloadModal';

const SContainer = styled.section`
	outline: 1px dotted gray;
`;

const Container = () => (
	<SContainer>
		<Header/>
		<Nav/>
		<Main/>
		<ReloadModal>Reload-Modal</ReloadModal>
		<Footer/>
	</SContainer>
); 
export default Container;

