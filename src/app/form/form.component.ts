import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { FormField } from "../form-field";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formFields = [
    new FormField({
      key: 'countries',
      label: 'Countries',
      type: 1,
      suggestions: [
        {name: 'UK', id: 1},
        {name: 'Germany', id: 2},
        {name: 'Spain', id: 3}
      ]
    }),
    new FormField({
      key: 'categories',
      label: 'Categories',
      type: 2,
      suggestions: [
        {name: 'Lipsticks', id: 1},
        {name: 'Perfumes', id: 2},
        {name: 'Cake', id: 3}
      ]
    }),
    new FormField({
      key: 'scopes',
      label: 'Scopes',
      type: 3,
      suggestions: [
        {name: 'This', id: 1},
        {name: 'That', id: 2},
        {name: 'null', id: 3}
      ]
    })
  ];

  form: FormGroup;

  constructor() {
    this.form = this.generateFormGroup();
    this.form.valueChanges.subscribe(data => console.log('form changes', data));
  }

  getFormFields() {
    return this.formFields;
  }

  ngOnInit() {
  }

  generateFormGroup() {
    return new FormGroup(
      this.formFields.reduce((acum, brief) => {
        acum[brief.key] = new FormControl('');
        return acum;
      }, {})
    );
  }
}
