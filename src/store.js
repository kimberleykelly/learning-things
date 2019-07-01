import BaseStore from "geo_me-flux/lib/store";

class Store extends BaseStore {
  static initClass() {
    this.prototype.actions = {
      FRUIT_INCREMENTED() {
        this.set("bananaClicks", this.get("bananaClicks") + 1);
        this.set("pineappleClicks", this.get("pineappleClicks") + 1);
      },
      FRUIT_DECREMENTED() {
        this.set("bananaClicks", this.get("bananaClicks") - 1);
        this.set("pineappleClicks", this.get("pineappleClicks") - 1);
      },
      FRUIT_CLICKED({ payload }) {
        const fruit = payload.fruitType + "Clicks";
        const clickCount = this.get(fruit);
        this.set(fruit, clickCount + 1);
      }
    };
  }

  initialize() {
    this.set("pineappleClicks", 0);
    this.set("bananaClicks", 0);
  }
}

Store.initClass();
export default Store;
