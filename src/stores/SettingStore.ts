import { makeAutoObservable } from "mobx";

class SettingStore {
  constructor() {
    makeAutoObservable(this);
  }

  setSetting(person: number, grid: number, time: number) {
    console.log(person, grid, time, "HELLO STORE");
  }
}
export default new SettingStore();
