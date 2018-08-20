import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import Container from '../components/Container';
import InputName from '../components/InputName';
import DefButton2 from '../components/Button2';

import styled from 'styled-components';

import Header from '../components/Header';
import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';

storiesOf('Container', module)
	.add('Normal', () => (
		<Container/>
	));

storiesOf('Footer', module)
	.add('Normal', () => (
		<Footer/>
	));

storiesOf('Main', module)
	.add('Normal', () => (
		<Main/>
	));

storiesOf('Nav', module)
	.add('Normal', () => (
		<Nav/>
	));

storiesOf('Logo', module)
	.add('Normal', () => (
		<Logo/>
	));

storiesOf('Header', module)
	.add('Normal', () => (
		<Header/>
	));

/*
const Button2 = styled(DefButton2)`
	background: blue;
	opacity: 0.5;
`;

storiesOf('Button2', module)
	.add('Large', () => (
		<Button2>TEST</Button2>
	));

storiesOf('InputName', module)
	.add('Large', () => (
		<section>
			<InputName></InputName>
		</section>
	))
	.add('small', () => (
		<InputName></InputName>
	));


storiesOf('Container', module)
	.add('Large', () => (
		<section>
			<Container></Container>
		</section>
	))
	.add('small', () => (
		<Container></Container>
	));

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
*/
