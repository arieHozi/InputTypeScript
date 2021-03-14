

export interface Props {
  id: string;
  type?: InputType;
  name?: string;
  placeholder?: string;
  checked?: boolean;
  disabled?: boolean;
  value?: string | number;
  onClick?: (val:any) => void;
  onChange?: (val:any) => void;
  max?: number;
  min?: number;
  step?: number | any;
}
export interface ExtraProps extends Props{
  role?: UserRole | string;
}

export enum InputType {
  TEXT = "text",
  BUTTON = "button",
  CHECKBOX = "checkbox",
  COLOR = "color",
  DATE = "date",
  DATETIME_LOCAL = "datetime-local",
  EMAIL = "email",
  FILE = "file",
  HIDDEN = "hidden",
  IMAGE = "image",
  MONTH = "month",
  NUMBER = "number",
  PASSWORD = "password",
  RADIO = "radio",
  RANGE = "range",
  RESET = "reset",
  SEARCH = "search",
  SUBMIT = "submit",
  TEL = "tel",
  TIME = "time",
  URL = "url",
  WEEK = "week",
}


export enum UserRole {
  ADMIN='admin',
  MANAGER='manager',
  USER='user'
}