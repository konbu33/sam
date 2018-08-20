import React from 'react';
import styled from 'styled-components';

const StyledInputName = styled.input`
	outline: none;
	border: none;
	border-bottom: 1px solid;
`;

const InputName = () => (
	<section>
		Name : <StyledInputName type='text' />
	</section>
);
export default InputName;

