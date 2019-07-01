import BaseCommand from "geo_me-flux/lib/command";

class Command extends BaseCommand {
  execute() {
    this.dispatch({
      type: this.actionTypes.FRUIT_INCREMENTED,
      payload: null
    });
  }
}

export default Command;
