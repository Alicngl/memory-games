import { makeAutoObservable } from "mobx";

class SettingStore {
  person: number;
  grid: number;
  time: number;
  constructor() {
    makeAutoObservable(this);
  }

  setSetting(person: number, grid: number, time: number) {
    this.person = person;
    this.grid = grid;
    this.time = time;
    console.log(person, grid, time, "HELLO STORE");
  }
}
export default new SettingStore();
