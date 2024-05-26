import React from 'react';
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
export const { bootstrap, mount, unmount } = app;