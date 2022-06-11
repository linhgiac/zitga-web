import Page from "./pages/pages";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                {window.location.pathname !== "/login" &&
                    window.location.pathname !== "/signup" && <Header />}

                <Page />
                {window.location.pathname !== "/login" &&
                    window.location.pathname !== "/signup" && <Footer />}
            </BrowserRouter>
        </>
    );
}

export default App;
