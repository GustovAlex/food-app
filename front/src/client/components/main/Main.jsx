import styled from 'styled-components'

const StyledCotainer = styled.div`
padding: 0;
margin: 0 auto;
color: ${props => props.inputColor || "#184653"};
max-width: 1200px;
`;

export default function Main() {
	
	return (
		<div>
			<StyledCotainer>
				MAIN PAGE CONMPONENT
			</StyledCotainer>
		</div>
	)
}