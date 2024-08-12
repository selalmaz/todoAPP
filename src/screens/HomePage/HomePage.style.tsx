import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    height: '100%',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20, // Logo ve diğer elemanlar arasına boşluk ekler
  },
  logo: {
    marginBottom: 20, // Logo altındaki boşluk
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'column', // Çocukları dikeyde sıralar
  },
});
