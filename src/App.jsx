import PrimaryButton,{SecondaryButton,TertiaryButton} from './components/Buttons';
import {GlobalStyle} from './utils';



function App() {
  return (
    <div>
    <PrimaryButton>Primary</PrimaryButton>
    <SecondaryButton>Secondary</SecondaryButton>
    <TertiaryButton>Tertiary</TertiaryButton>
    <GlobalStyle/>
    </div>
  );
}

export default App;
