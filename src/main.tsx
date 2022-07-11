import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Fuego, FuegoProvider } from "swr-firestore-v9";
import App from "./App";
import { store } from "./app/store";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCkj7Lc9jfhzFzKLPnjUyqcUTJ44KMR5qI",
    authDomain: "bwdd-3dc88.firebaseapp.com",
    projectId: "bwdd-3dc88",
    storageBucket: "bwdd-3dc88.appspot.com",
    messagingSenderId: "487427224978",
    appId: "1:487427224978:web:969bf089165dae6d923d4b",
    measurementId: "G-8N2XVGEM1B",
};

const fuego = new Fuego(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <FuegoProvider fuego={fuego}>
            <Provider store={store}>
                <Router basename="/">
                    <App />
                </Router>
            </Provider>
        </FuegoProvider>
    </React.StrictMode>
);
