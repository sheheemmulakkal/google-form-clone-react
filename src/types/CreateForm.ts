interface InputTypes {
  type: string;
  options: string[];
  required: boolean;
  label: string;
}

export interface FormType {
  title: string;
  description: string;
  fields: InputTypes[];
}
