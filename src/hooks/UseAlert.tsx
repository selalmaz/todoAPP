import {Alert} from 'react-native';

const useAlert = (title: string, message: string, onConfirm: () => void) => {
  const showAlert = () => {
    Alert.alert(title, message, [
      {
        text: 'İptal',
        style: 'cancel',
      },
      {
        text: 'Tamam',
        onPress: onConfirm,
      },
    ]);
  };

  return showAlert;
};

export default useAlert;
