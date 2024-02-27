import {Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {ImageService} from "../../../../../../share/services/image/image.service";
import {LoadingService} from "../../../../../../share/services/loading/loading.service";
import {SnackBarService} from "../../../../../../share/services/snack-bar/snack-bar.service";
import {CookieManagerService} from "../../../../../../share/services/cookie/cookie-manager.service";
import {BlogService} from "../../../../../../share/services/blog/blog.service";
import {QuillEditorComponent} from "ngx-quill";

@Component({
  selector: 'app-console-other-new-blog',
  templateUrl: './console-other-new-blog.component.html',
  styleUrls: ['./console-other-new-blog.component.scss']
})
export class ConsoleOtherNewBlogComponent {
  @ViewChild(QuillEditorComponent, {static: false}) quillEditor?: QuillEditorComponent;

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
    blogTitle: new FormControl(null, [Validators.required]),
    blogName: new FormControl(null, [Validators.required]),
  });

  constructor(
    private imageService: ImageService,
    private blogService: BlogService,
    private loadingService: LoadingService,
    private snackBarService: SnackBarService,
    private cookieManager: CookieManagerService,
  ) {
  }

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

  createBlog(f: FormGroupDirective) {
    if (!this.image) {
      console.log(this.image)
      this.snackBarService.openWarningSnackBar('Please select Background Image', 'Close');
      return;
    }

    this.loadingService.mainLoader.next(true);
    this.imageService.saveFile(this.image, 'Farmers-Bridge-Resources/blog-Images').then(imageUrl => {
      const userData = JSON.parse(this.cookieManager.getPersonalData());
      console.log(userData.property_id)
      const data = {
        title: this.form.get('blogTitle')?.value!,
        image: imageUrl,
        content: this.blog,
        date: new Date()
      }

      this.blogService.saveBlog(data).subscribe(response => {
        console.log(response);
        if (response.code === 201) {
          this.snackBarService.openSuccessSnackBar('Success!', 'Close');
          this.refreshForm(f);
        }
      });
    }).catch(error => {
      this.snackBarService.openErrorSnackBar('Something went wrong!', 'Close');
      this.loadingService.mainLoader.next(false);
    })
  }

  // @ts-ignore
  imageSelected(event) {
    this.image = event.target.files[0];
    console.log(this.image)
    if (this.image!.size > 5.5e+6) {
      // this.snackBarService.openErrorSnackBar('Image Size should not be greater than 5MB', 'Close');
      return false;
    }
    if (
      this.image!.type !== 'image/jpg' && this.image!.type !== 'image/jpeg' && this.image!.type !== "image/png"
    ) {
      // this.snackBarService.openErrorSnackBar('Image type must be (jpg,png or jpeg)', 'Close');
      return false;
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.image!);
    reader.onload = () => {
      this.imageUrl = reader.result as string;
      console.log(this.imageUrl)
    };
  }

  private refreshForm(form: FormGroupDirective) {
    form.resetForm();
    form.reset();
    this.image = undefined;
    this.imageUrl = '';
    // @ts-ignore
    this.quillEditor.quillEditor?.setContents([{insert: '\n'}]);
  }

}
