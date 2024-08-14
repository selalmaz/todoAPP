import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({
  button: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginVertical: 20,
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default {
  primary: StyleSheet.create({
    ...baseStyle,
    button: {
      ...baseStyle.button,
      backgroundColor: '#006894',
      borderWidth: 1,
      borderColor: 'white',
    },
    buttonText: {
      color: 'white',
      ...baseStyle.buttonText,
    },
  }),

  secondry: StyleSheet.create({
    ...baseStyle,
    button: {
      backgroundColor: 'white',
      borderWidth: 4,
      borderColor: '#006894',
      ...baseStyle.button,
    },
    buttonText: {
      color: '#006894',
      ...baseStyle.buttonText,
    },
  }),
};
