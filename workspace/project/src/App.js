import logo from './logo.svg';
import './App.css';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Styled08 from './pages/tutorial/Styled08';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Styled08/>
      </ThemeProvider>
    </>
  );
}

export default App;
