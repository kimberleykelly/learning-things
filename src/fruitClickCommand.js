import BaseCommand from "geo_me-flux/lib/command";

class Command extends BaseCommand {
  execute(fruitType) {
    this.dispatch({
      type: this.actionTypes.FRUIT_CLICKED,
      payload: { fruitType }
    });
  }
}

export default Command;
