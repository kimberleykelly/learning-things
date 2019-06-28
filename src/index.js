import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Store from "./store";
import Dispatcher from "geo_me-flux/lib/dispatcher";
import QueryHandler from "geo_me-flux/lib/queryHandler";
import CommandHandler from "geo_me-flux/lib/commandHandler";
import FluxContext from "./flux-context";
import Command from "./ageIncreaseCommand";

const dispatcher = new Dispatcher();
const queryHandler = new QueryHandler({ dispatcher });
const commandHandler = new CommandHandler();
const actionTypes = { USER_STORE_AGE_INCREASED: "USER_STORE_AGE_INCREASED" };
const store = new Store({
  dispatcher,
  actionTypes,
  commandHandler,
  queryHandler,
  debug: true
});

const command = new Command({
  dispatcher,
  actionTypes,
  queryHandler
});

store.register();
queryHandler.register("userStore", store);
commandHandler.register("userStore.increase", command);

const fluxContext = {
  queryHandler: queryHandler,
  commandHandler: commandHandler
};

ReactDOM.render(
  <FluxContext.Provider value={fluxContext}>
    <App />
  </FluxContext.Provider>,
  document.getElementById("root")
);
