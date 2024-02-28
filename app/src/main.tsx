import ReactDOM from "react-dom/client";
import App from "./App";

// MSAL imports
import {
    PublicClientApplication,
    EventType,
    EventMessage,
    AuthenticationResult,
} from "@azure/msal-browser";

import { MsalProvider } from "@azure/msal-react";

import { msalConfig } from "./authConfig";
import React from "react";

const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * We recommend wrapping most or all of your components in the MsalProvider component. It's best to render the MsalProvider as close to the root as possible.
 */
root.render(
    <React.StrictMode>
        <MsalProvider instance={msalInstance}>
          <App />
        </MsalProvider>
    </React.StrictMode>
);
