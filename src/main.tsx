import React from "react";
import  {store}  from "./redux/store.ts";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Auth0Provider
		domain="dev-iyd7c86g8syd41vm.us.auth0.com"
		clientId="PUkT6isfIpR7XKbLkzszdvZyfj5NDxf3"
		authorizationParams={{
			redirect_uri: window.location.origin,
		}}
	>
		<Provider store={store}>
			<App />
		</Provider>
	</Auth0Provider>
);
