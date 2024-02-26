import {EffectInfo} from "./effect-info";

export class ChangeStatusInfo {
  constructor(
    public propertyId: string,
    public message: string,
    public effectDetails: EffectInfo,
    public extra: Array<any>
  ) {
  }

}
