export type StackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

export type TabParamList = {
  HomePage: undefined;
  ToDoListPage: undefined;
};
export type inputProps = {
  placeHolder: string;
  value?: string;
  onChange: (text: string) => void;
  secureTextEntry?: boolean; // şifre için opsiyonel prop
};

export type buttonProps = {
  title: string;
  theme: 'primary' | 'secondry';
  navigateTo?: keyof StackParamList; // navigate işlemi için
  onPress?: () => void; //
};

export type CardProps = {
  task: string;
  id: string;
};

export type TaskType = {
  id: string;
  task: string;
  isChecked: boolean;
};
