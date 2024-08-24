import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },

  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '20%',
  },
  signUpButton: {},
  signUpText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
