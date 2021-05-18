import styled from 'styled-components';

const primaryBlue = "#0096C7";
const whiteColor = "#ffffff";


const Button = styled.button`
 padding: 12px 24px;
 font-size: 1rem;
 border-radius: 20px;
 min-width: 100px;
 cursor: pointer;
 font-family: IBM Plex Mono;
`;

const PrimaryButton = styled(Button)`
  background-color: ${primaryBlue};
  color: white;
  border: none;
`;
export default PrimaryButton;


export const SecondaryButton = styled(Button)`
  background-color: none;
  color: ${primaryBlue};
  border: none;
  `;

export const TertiaryButton = styled(Button)`
  background-color: ${whiteColor};
  color: ${primaryBlue};
  border: none;
`;