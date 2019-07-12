import BaseCommand from "geo_me-flux/lib/command";

class Command extends BaseCommand {
  execute({ bananaClicks, pineappleClicks }) {
    this.dispatch({
      type: this.actionTypes.UPDATED_SERVER,
      payload: null
    });
    fetch("http://localhost:3000/api/fruit/clicks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ bananaClicks, pineappleClicks })
    });
  }
}

export default Command;
