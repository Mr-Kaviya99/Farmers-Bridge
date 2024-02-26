import {NavigateOption} from "../enums/NavigateOptions";

export class EditSectionOptionData {
  constructor(
    public propertyId : string,
    public icon: string,
    public header: string,
    public title: string,
    public routing: any,
    public navigationType: NavigateOption, //[redirect-new,redirect,popup,bottom],
    public component: any,
    public extra: Array<any | undefined>
  ) {
  }

}
