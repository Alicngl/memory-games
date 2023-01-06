// import { CalculationStore } from "./CalculationStore";

import { SettingHydration, SettingStore } from "./setting.store";
import { WalletHydration, WalletStore } from "./wallet.store";

export type RootStoreHydration = {
  settingStore?: SettingHydration;
  walletStore?: WalletHydration;
};

export class RootStore {
  settingStore?: SettingStore;
  walletStore: WalletStore;

  constructor() {
    this.settingStore = new SettingStore(this);
    this.walletStore = new WalletStore(this);
  }

  hydrate(data: RootStoreHydration) {
    if (data.settingStore) {
      this.settingStore.hydrate(data.settingStore);
    }
    if (data.walletStore) {
      this.walletStore.hydrate(data.walletStore);
    }
  }
}
