import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-forms',
  templateUrl: './react-forms.component.html',
  styles: [
  ]
})
export class ReactFormsComponent {

  formObject = new FormGroup({
    userId: new FormControl('', Validators.required),
    passkey: new FormControl('', Validators.required),
  });

  get uName() {
    return this.formObject.get('userId');
  }

}
