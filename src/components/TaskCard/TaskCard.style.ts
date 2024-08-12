import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  task: {
    fontSize: 18,
    color: '#1A1A1A',
  },
  Square: {
    width: 24,
    height: 24,
    backgroundColor: '#3B82F6',
    opacity: 0.7,
    marginRight: 15,
  },
  checkbox: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
});
