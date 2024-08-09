import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20,
    margin: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  task: {
    maxWidth: '80%',
    color: '#1A1A1A',
  },
  Square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
});
