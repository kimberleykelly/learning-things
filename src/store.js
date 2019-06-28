import BaseStore from "geo_me-flux/lib/store";

class Store extends BaseStore {
  static initClass() {
    this.prototype.actions = {
      USER_STORE_AGE_INCREASED() {
        this.set("age", this.get("age") + 1);
      }
    };
  }

  constructor(options) {
    super(options);
  }
  initialize() {
    this.set("age", 26);
  }
}

Store.initClass();
export default Store;
