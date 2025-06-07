// app/Profile/styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0d0b2f',
  },
  sidebar: {
    width: 220,
    backgroundColor: '#1a174a',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  name: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  menuItem: {
    marginVertical: 10,
  },
  menuText: {
    color: 'white',
    fontSize: 16,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  mainText: {
    color: 'red',
    fontSize: 18,
  },
  iconButton: {
    padding: 16,
  },
});

export default styles;
