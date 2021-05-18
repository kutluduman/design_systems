import PrimaryButton,{SecondaryButton,TertiaryButton} from './components/Buttons';
import {GlobalStyle} from './utils';



function App() {
  return (
    <div>
    <PrimaryButton disabled>Primary</PrimaryButton>
    <SecondaryButton disabled>Secondary</SecondaryButton>
    <TertiaryButton disabled>Tertiary</TertiaryButton>
    <GlobalStyle/>
    </div>
  );
}

export default App;
