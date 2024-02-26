import {EditSectionOptionData} from "./EditSectionOptionData";

export class EditSectionData {
  constructor(
    public header: string,
    public title: string,
    public option: Array<EditSectionOptionData>,
    public extra: Array<any>
  ) {
  }

}
