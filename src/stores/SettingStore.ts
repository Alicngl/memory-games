import { makeAutoObservable } from "mobx";

class SettingStore {
  person: number;
  grid: number;
  time: number = 1;
  constructor() {
    makeAutoObservable(this);
  }

  setSetting(person: number, grid: number, time: number) {
    //Ayarlardan seçilen verileri getirir
    this.person = person;
    this.grid = grid;
    this.time = time;
  }
}
export default new SettingStore();
