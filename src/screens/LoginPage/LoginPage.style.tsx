import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  logoContainer: {
    paddingTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  inputContainer: {
    marginBottom: 20,
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '20%',
  },
  signUpButton: {
    alignSelf: 'flex-end',
  },
  signUpText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
