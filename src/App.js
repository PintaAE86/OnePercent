import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { useState } from 'react'
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import { Goals } from './views/Goals';
//import 'bootstrap/dist/css/bootstrap.min.css'; --> using cdn instead for lastest 
function App() {
    return (_jsxs("div", { children: [_jsx(NavbarComponent, {}), _jsx(Goals, {})] }));
}
export default App;
