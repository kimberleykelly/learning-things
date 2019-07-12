import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Store from "./store";
import Dispatcher from "geo_me-flux/lib/dispatcher";
import QueryHandler from "geo_me-flux/lib/queryHandler";
import CommandHandler from "geo_me-flux/lib/commandHandler";
import FluxContext from "./flux-context";
import FruitClickCommand from "./fruitClickCommand";
import IncrementCountCommand from "./incrementCountCommand";
import DecrementCountCommand from "./decrementCountCommand";
import RequestClickCountsCommand from "./requestClickCounts";
import UpdateServerCommand from "./updateServerCommand";

const dispatcher = new Dispatcher();
const queryHandler = new QueryHandler({ dispatcher });
const commandHandler = new CommandHandler();
const actionTypes = {
  FRUIT_CLICKED: "FRUIT_CLICKED",
  FRUIT_INCREMENTED: "FRUIT_INCREMENTED",
  FRUIT_DECREMENTED: "FRUIT_DECREMENTED",
  REQUESTED_CLICK_COUNTS: "REQUESTED_CLICK_COUNTS",
  LOADED_CLICK_COUNTS: "LOADED_CLICK_COUNTS",
  UPDATED_SERVER: "UPDATED_SERVER"
};
const store = new Store({
  dispatcher,
  actionTypes,
  commandHandler,
  queryHandler,
  debug: true
});

const fruitClickCommand = new FruitClickCommand({
  dispatcher,
  actionTypes,
  queryHandler
});

const incrementCountCommand = new IncrementCountCommand({
  dispatcher,
  actionTypes,
  queryHandler
});

const decrementCountCommand = new DecrementCountCommand({
  dispatcher,
  actionTypes,
  queryHandler
});
store.register();

const requestClickCountsCommand = new RequestClickCountsCommand({
  dispatcher,
  actionTypes,
  queryHandler
});

const updateServerCommand = new UpdateServerCommand({
  dispatcher,
  actionTypes,
  queryHandler
});

queryHandler.register("userStore", store);
commandHandler.register("userStore.fruitClicked", fruitClickCommand);
commandHandler.register("userStore.increment", incrementCountCommand);
commandHandler.register("userStore.decrement", decrementCountCommand);
commandHandler.register(
  "userStore.requestClickCounts",
  requestClickCountsCommand
);
commandHandler.register("userStore.updateServerCommand", updateServerCommand);

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
