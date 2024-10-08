import {InputModeOptions} from 'react-native';

export type StackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Api: undefined;
};

export type TabParamList = {
  HomePage: undefined;
  ToDoListPage: undefined;
};
export type inputProps = {
  placeHolder: string;
  value: string;
  onChange: (text: string) => void;
  secureTextEntry?: boolean; // şifre için opsiyonel prop
  inputMode: InputModeOptions;
};

export type buttonProps = {
  title: string;
  theme: 'primary' | 'secondry';
  navigateTo?: keyof StackParamList; // navigate işlemi için
  onPress?: () => void; //
};

export type TaskCardProps = {
  task: string;
  id: string;
  isChecked: boolean;
};

export type TaskState = {
  isLoading: boolean;
  items: ApiCardProps[];
  userTaskItems: TaskCardProps[];
  loginMail: string;
  loginPassword: string;
  registerMail: string;
  registerPassword: string;
};

export type ApiCardProps = {
  age: number;
  name: string;
  id: string;
};
