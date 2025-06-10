import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0d0b2f',
  },
  sidebar: {
    width: width * 0.75,
    backgroundColor: '#1a174a',
    paddingTop: 60,
    paddingHorizontal: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 100,
  
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 10,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#444', // fallback if image fails
  },
  addButton: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#00b4d8',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  name: {
    color: '#e0e0e0',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
    maxWidth: '100%',
  },
  tooltipContainer: {
    alignSelf: 'center',
    backgroundColor: '#383879',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginBottom: 8,
  },
  tooltipText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
    minWidth: 100,
  },
  tooltipPointer: {
    width: 0,
    height: 0,
    alignSelf: 'center',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 6,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#383879',
    marginTop: -1,
  },
  menuItem: {
    marginVertical: 10,
    backgroundColor: '#292662',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  menuText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
  iconButton: {
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 10,
    padding: 12,
    backgroundColor: '#007bff',
    borderRadius: 24,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 8,
    zIndex: 10,
  },
  closeIcon: {
    color: 'white',
    fontSize: 24,
  },
});

export default styles;
