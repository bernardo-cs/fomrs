import { Component, OnInit, Input } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: SearchInputComponent}
  ]

})
export class SearchInputComponent implements OnInit, ControlValueAccessor {
  @Input() formField: any;
  _onChange: (value: any) => void;
  options: any[];
  selectedOptions = [];

  constructor() { }

  ngOnInit() {
    this.options = this.formField.suggestions;
  }

  filterOptions(value) {
    const inputString = value.toLowerCase();

    this.options = this
      .formField
      .suggestions;

    if (inputString.length > 0) {
      this.options = this.options
          .filter(sug => sug.name.toLowerCase().indexOf(inputString) !== -1)
    }
  }

  addOption(option) {
    this.selectedOptions.push(option);
    this.options.splice(this.options.indexOf(option), 1);
  }

  removeOption(option) {
    this.options.push(option);
    this.selectedOptions.splice(this.options.indexOf(option), 1);
  }

  writeValue(value: any) { }

  registerOnChange(fn: (value: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched() {}
}
