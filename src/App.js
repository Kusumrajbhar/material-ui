import './App.css';
import First from './component/First';
import { Navbar } from './component/Navbar';
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  }
})

function App() {
  return (
    <div >
      <ThemeProvider theme={theme}>
     {/* <Navbar /> */}
     <First />
     </ThemeProvider>
    </div>
  );
}

export default App;
