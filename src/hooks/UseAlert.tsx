import {Alert} from 'react-native';

const useAlert = (title: string, message: string, onConfirm: () => void) => {
  const showAlert = () => {
    Alert.alert(title, message, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: onConfirm,
      },
    ]);
  };

  return showAlert;
};

export default useAlert;
