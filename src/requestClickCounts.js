import BaseCommand from "geo_me-flux/lib/command";

class Command extends BaseCommand {
  execute() {
    this.dispatch({
      type: this.actionTypes.REQUESTED_CLICK_COUNTS,
      payload: null
    });
    fetch("http://localhost:3000/api/fruit/clicks")
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.dispatch({
          type: this.actionTypes.LOADED_CLICK_COUNTS,
          payload: response
        });
      });
  }
}

export default Command;
