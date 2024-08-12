import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkbox: {
    marginRight: 10,
  },
  task: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  checked: {
    borderColor: 'black',
    borderWidth: 1,
  },
  checkedText: {
    textDecorationLine: 'line-through',
    color: '#C7CCD1',
  },
  deleteButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#758FBA',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
