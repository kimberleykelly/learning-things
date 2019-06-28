import React from "react";
import FluxContext from "./flux-context";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.addSubscriptions();
    this.setState(this.getStateFromQueries());
  }

  addSubscriptions() {
    this.subscriptions = this.subscriptions || this.getSubscriptions();

    this.context.queryHandler.subscribeAll(this.subscriptions, () => {
      this.setState(this.getStateFromQueries());
    });
  }
  getSubscriptions() {
    return Object.values(this.props.queries).reduce((subscriptions, value) => {
      const store = value.split(".")[0];
      if (!subscriptions.includes(store)) return [...subscriptions, store];
      return subscriptions;
    }, []);
  }
  get(path) {
    return this.context.queryHandler.get(path);
  }

  getStateFromQueries() {
    return Object.entries(this.props.queries).reduce(
      (state, [key, value]) => ({ ...state, [key]: this.get(value) }),
      {}
    );
  }
  getBoundCommand(functionName, commandName) {
    const cachedCommand = this.commandsCache[functionName];
    if (cachedCommand) return cachedCommand;
    const boundCommand = params => this.run(commandName, params);
    this.addCommandToCache(functionName, boundCommand);
    return boundCommand;
  }

  getBoundCommandsObject(commands) {
    const boundCommands = {};
    Object.entries(commands).forEach(([functionName, commandName]) => {
      boundCommands[functionName] = this.getBoundCommand(
        functionName,
        commandName
      );
    });
    return boundCommands;
  }

  render() {
    return this.props.children(
      this.state,
      this.getBoundCommandsObject(this.props.commands)
    );
  }
}

Container.contextType = FluxContext;

const connectToFlux = (queries, commands) => Comp =>
  class ConnectToFlux extends React.Component {
    render() {
      return (
        <Container queries={queries} commands={commands}>
          {(state, commands) => (
            <Comp {...state} {...commands} {...this.props} />
          )}
        </Container>
      );
    }
  };

export default connectToFlux;
