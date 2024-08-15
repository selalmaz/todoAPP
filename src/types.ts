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
  isChecked: boolean;
};

export type TaskState = {
  complete: number;
  items: ApiCardProps[];
};

export type LoadingState = {
  isLoading: boolean;
};

export type ApiCardProps = {
  todo: string;
  completed: boolean;
};
