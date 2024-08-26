import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  checkbox: {
    marginRight: 10,
  },
  task: {
    fontSize: 18,
    color: '#333',
    flex: 1,
  },
  checked: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#f7f7f7',
  },
  checkedText: {
    textDecorationLine: 'line-through',
    color: '#C7CCD1',
  },
  deleteButton: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  deleteButtonText: {
    color: '#758FBA',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
