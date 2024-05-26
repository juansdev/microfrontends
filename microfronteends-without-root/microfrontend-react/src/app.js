import React from 'react';
import {registerApplication, start} from "single-spa";
import singleSpaReact from "single-spa-react";
import ReactDOMClient from 'react-dom/client';
import Root from "./Root.jsx";

const app = singleSpaReact({
    React,
    ReactDOMClient,
    rootComponent: Root,
    errorBoundary(err, info, props){
        return "An error was throw"
    }
});

registerApplication({
    name: "app-micro-frontend-react",
    app,
    activeWhen: ["/"],
    customProps: {
        code: "002",
        name: "React Application"
    }
});

start();