import styled from 'styled-components';
import {neutral, blue} from '../utils/colors';
import {defaultTheme} from '../utils/themes';
import {primaryFont, typeScale} from '../utils/typography';


const Button = styled.button`
 padding: 12px 24px;
 font-size: ${typeScale.paragraph};
 border-radius: 20px;
 min-width: 100px;
 cursor: pointer;
 font-family: ${primaryFont};
 transition: background-color 0.2s linear, color 0.2s linear;

 &:hover {
   background-color: ${defaultTheme.primaryHoverColor};
   color: ${defaultTheme.textColorOnPrimary};
 }
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: white;
  border: none;
`;
export default PrimaryButton;


export const SecondaryButton = styled(Button)`
  background-color: none;
  color: ${defaultTheme.primaryColor};
  border: none;
  `;

export const TertiaryButton = styled(Button)`
  background-color: ${neutral[100]};
  color: ${blue[400]};
  border: none;
`;