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
  button: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
});
