import './App.css';
import First from './component/First';
import { Navbar } from './component/Navbar';
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import { purple } from '@material-ui/core/colors';
import Card from './component/Card'
import CardComponent from './component/Card';
import LayOutComp from './component/LayOutComp';
import DrawerComponent from './component/DrawerComponent';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#fefefe'
//     },
//     secondary: purple
//   }
// })

function App() {
  return (
    <div >
      {/* <ThemeProvider theme={theme}>
     {/* <Navbar /> */}
     {/* <First /> */}
     {/* <CardComponent />
     <LayOutComp /> */}
     {/* </ThemeProvider> */}
     <DrawerComponent />

    </div>
  );
}

export default App;
