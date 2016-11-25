export class FormField {
  key: string;
  label: string;
  type: number;
  suggestions: any[];

  constructor(options: {
    key: string,
    label: string,
    type: number,
    suggestions: any[]
  }) {
    this.key         = options.key;
    this.label       = options.label;
    this.type       = options.type;
    this.suggestions = options.suggestions.slice(0);
  }

}
