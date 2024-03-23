interface InputTypes {
  type: string;
  options: string[];
  required: boolean;
  label: string;
}

export interface FormType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _id?: any;
  title: string;
  description: string;
  fields: InputTypes[];
}
