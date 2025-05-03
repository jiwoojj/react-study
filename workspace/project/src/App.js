import logo from './logo.svg';
import './App.css';
import Styled01 from './pages/tutorial/Styled01';
import Styled03 from './pages/tutorial/Styled03';
import Styled04 from './pages/tutorial/Styled04';
import Styled05 from './pages/tutorial/Styled05';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Styled06 from './pages/tutorial/Styled06';
import Styled02 from './pages/tutorial/Styled02';
import Styled07 from './pages/tutorial/Styled07';
import BasicButton from './components/button/BasicButton';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <BasicButton/>
      </ThemeProvider>
    </>
  );
}

export default App;
