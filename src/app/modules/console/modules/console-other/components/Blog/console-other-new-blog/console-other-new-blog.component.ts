import {Component} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";

@Component({
  selector: 'app-console-other-new-blog',
  templateUrl: './console-other-new-blog.component.html',
  styleUrls: ['./console-other-new-blog.component.scss']
})
export class ConsoleOtherNewBlogComponent {

  image: File | undefined;
  imageUrl = '';

  blog: string = '';
  blured = false;
  focused = false;

  quillConfiguration = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{'header': 1}, {'header': 2}],               // custom button values
      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
      [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
      [{'direction': 'rtl'}],                         // text direction

      // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{'header': [1, 2, 3, 4, 5, 6, false]}],

      [{'color': []}, {'background': []}],          // dropdown with defaults from theme
      [{'font': []}],
      [{'align': []}],

      ['clean'],                                         // remove formatting button

      // ['link']                         // link and image, video
      ['link', 'image', 'video']                         // link and image, video
    ],
  }

  form = new FormGroup({
    blogName: new FormControl(null, [Validators.required]),
  });

  onSelectionChanged = (event: any) => {
    console.log(event)
    if (event.oldRange == null) {
      this.onFocus();
    }
    if (event.range == null) {
      this.onBlur();
    }
  }

  onFocus = () => {
    console.log("On Focus");
  }

  onBlur = () => {
    console.log("Blurred");
  }

  onContentChanged = (event: any) => {
    this.blog = event.html;
    console.log(this.blog);
  }

  createProduct(f: FormGroupDirective) {
    console.log(this.blog)
  }

}
