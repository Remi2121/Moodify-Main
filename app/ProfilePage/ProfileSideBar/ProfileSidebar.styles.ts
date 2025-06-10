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
    paddingTop: 50,
    paddingHorizontal: 16,
  
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatarWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  addButton: {
    position: 'absolute',
    bottom: 0,
    right: -4,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#999',
  },
  name: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
    maxWidth: '100%',
  },
  tooltipContainer: {
    alignSelf: 'center',
    backgroundColor: '#2e2e2e',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  tooltipText: {
    color: 'white',
    fontSize: 12,
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
    borderBottomColor: '#2e2e2e',
    marginTop: -1,
  },
  menuItem: {
    marginVertical: 10,
  },
  menuText: {
    color: 'white',
    fontSize: 20,
  },
  iconButton: {
    padding: 16,
  },
});

export default styles;