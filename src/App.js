import Page from "./pages/pages";
import Header from "./components/header/header";

import {BrowserRouter} from "react-router-dom"

function App() {
    return (
        <> 
        <BrowserRouter>
          {(window.location.pathname !== '/login') && <Header />}
          <Page />
        </BrowserRouter>
        </>
               
        
    );
}

export default App;
