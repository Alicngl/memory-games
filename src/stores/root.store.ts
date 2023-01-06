// import { CalculationStore } from "./CalculationStore";

import { SettingHydration, SettingStore } from "./setting.store";

export type RootStoreHydration = {
  settingStore?: SettingHydration;
};

export class RootStore {
  settingStore: SettingStore;

  constructor() {
    this.settingStore = new SettingStore(this);
  }

  hydrate(data: RootStoreHydration) {
    if (data.settingStore) {
      this.settingStore.hydrate(data.settingStore);
    }
  }
}
