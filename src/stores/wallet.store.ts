import { action, makeObservable, observable, runInAction } from "mobx";
import { RootStore } from "./root.store";

export type WalletHydration = {
  address: any;
};

export class WalletStore {
  static address(address: any, arg1: string) {
    throw new Error("Method not implemented.");
  }
  root: RootStore;
  address: any = null;

  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this, {
      hydrate: action,
      address: observable,
    });
  }

  backInitialize() {
    this.setAddress(null);
  }

  setAddress(address: any) {
    runInAction(() => {
      this.address = address;
    });
  }

  hydrate(data?: WalletHydration) {
    if (data) {
      this.address = data.address;
    }
  }
}
