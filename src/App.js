import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router";
import {Route} from "react-router";


//the entry point of the React.js application
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index
                           element={<Labs/>}/>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/tuiter/*"
                           element={<Tuiter/>}/>
                    <Route path="/*"
                           element={<Labs/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;