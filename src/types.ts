export type StackParamList = {
  Login: undefined;
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
  navigateTo?: keyof StackParamList; // navigate işlemi için
  onPress?: () => void; //
};

export type CardProps = {
  task: string;
};
