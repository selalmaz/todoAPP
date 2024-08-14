import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    height: '100%',
  },
  logo: {
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginTop: 45,
  },
  buttonContainer: {
    marginTop: 5,
    width: '100%',
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
