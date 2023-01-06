import { action, makeObservable, observable, runInAction } from "mobx";
import { RootStore } from "./root.store";

export type SettingHydration = {
  person: any;
  grid: any;
  time: any;
};

export class SettingStores {
  root: RootStore;
  person: any = null;
  grid: any;
  time: any;

  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this, {
      hydrate: action,
      person: observable,
      grid: observable,
      time: observable,
    });
  }

  backInitialize() {
    this.setSettings(null, null, null);
  }

  setSettings(person: any, grid: any, time: any) {
    runInAction(() => {
      this.person = person;
      this.grid = grid;
      this.time = time;
    });
  }

  hydrate(data?: SettingHydration) {
    if (data) {
      this.person = data.person;
      this.grid = data.grid;
      this.time = data.time;
    }
  }
}
