import {EffectInfo} from "./effect-info";

export class DeleteInfo {
  constructor(
    public propertyId: string,
    public message: string,
    public effectDetails: EffectInfo,
    public extra: Array<any>
  ) {
  }

}
