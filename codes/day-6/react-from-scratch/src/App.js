
import { lazy } from "react";
import { Footer } from "./Footer";
//const Header = lazy(() => import('./Header'))
import Header from 'react'
const App = () => {
    //template
    return (
        <div>
            {/* {header} */}
            <Header />
            <br />
            {/* {footer} */}
            <Footer />
        </div>
    )
}
export default App