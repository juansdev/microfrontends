import {BrowserRouter, Route, Routes} from "react-router-dom";
import ComponentPanel from "components/componentPanel";
import ComponentClient from "components/componentClient";
import ComponentSearch from "components/componentSearch";
import {square} from "../../microfrontend-js/src/app";
import "./style.css";

export default function Root(props) {
    console.log('Response from appMicroFrontendJavascript: ', square(9));
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/crm" element={<ComponentPanel/>}></Route>
                <Route path="/crm/clients" element={<ComponentClient/>}></Route>
                <Route path="/crm/search" element={<ComponentSearch/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}