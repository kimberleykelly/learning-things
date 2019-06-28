import BaseCommand from "geo_me-flux/lib/command";

class Command extends BaseCommand {
  execute() {
    this.dispatch({
      type: this.actionTypes.USER_STORE_AGE_INCREASED,
      payload: null
    });
  }
}

export default Command;
