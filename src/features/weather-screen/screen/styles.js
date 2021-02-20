import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  flyoutButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    position: 'absolute',
    bottom: 40,
    right: 30,
    height: 50,
    backgroundColor: 'lightgray',
    borderRadius: 100,
    opacity: 0.5,
  },
  flyoutButtonText: {
    fontSize: 40,
    top: -1,
    left: -1,
  },
});
