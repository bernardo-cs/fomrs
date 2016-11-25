import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SearchInputComponent}
  ]

})
export class SearchInputComponent implements OnInit, ControlValueAccessor {
  @Input() formField: any;
           _onChange: (value: any) => void;
           availableOptions: any[];
           selectedOptions = [];

  constructor() { }

  ngOnInit() {
    console.log('INIT!!!');
    this.availableOptions = this.formField.suggestions.slice(0);
  }

  filterOptions(value) {
    const inputString = value.toLowerCase();

    if (inputString.length === 0) {
      this.availableOptions = this.formField.suggestions.slice(0);
    }
    else {
      this.availableOptions = this.availableOptions
        .filter(sug => sug.name.toLowerCase().indexOf(inputString) !== -1)
    }
  }

  removeOption(option, input) {
    input.value = '';
    this.filterOptions('');

    this.selectedOptions.splice(this.selectedOptions.indexOf(option), 1);
    this.sendValuesToParent();
  }

  addOption(option, input) {
    input.value = '';
    this.filterOptions('');

    this.selectedOptions.push(option);
    this.sendValuesToParent();
  }

  sendValuesToParent() {
    this._onChange(this.selectedOptions.map(x => x.id));
  }

  submit(event) {
    event.target.value = '';
    this.filterOptions('');

    const firstOption = this.availableOptions
      .filter(x => this.selectedOptions.indexOf(x) === -1)[0];

    if (firstOption) { this.addOption(firstOption, event.target); }

    this.sendValuesToParent();
  }

  writeValue(value: any) { }

  registerOnChange(fn: (value: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched() {}
}
