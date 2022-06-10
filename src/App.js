import Page from "./pages/pages";
import Header from "./components/header/header";

import {BrowserRouter} from "react-router-dom"

function App() {
    return (
        <> 
        <BrowserRouter>
          {(window.location.pathname !== '/login' && window.location.pathname !== '/signup') && <Header />}
        
          <Page />
        </BrowserRouter>
        </>
               
        
    );
}

export default App;
