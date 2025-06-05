import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Tabs } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import highlate from '../../assets/images/highlate.png'; // Corrected relative path

// Custom tab icon with highlight background
const TabIcon = ({ focused, icon }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={highlate}
        style={styles.tabIconContainer}
        resizeMode="stretch"
      >
        <Ionicons name={icon} size={24} color="#ffffff" />
      </ImageBackground>
    );
  }
  return (
    <View style={styles.tabIconDefault}>
      <Ionicons name={icon} size={24} color="#A8B5DB" />
    </View>
  );
};

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#cccccc',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {
          paddingTop: 10,
          paddingBottom: 6,
          height: 70,
        },
        
        headerShown: false,
        tabBarBackground: () => (
          <LinearGradient
            colors={['#0d0b2f', '#2a1faa']}
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarIcon: ({ focused }) => {
          let iconName: string;

          switch (route.name) {
            case 'index':
              iconName = 'home';
              break;
            case 'Chatbot':
              iconName = 'chatbubble-ellipses';
              break;
            case 'Profile':
              iconName = 'person-circle';
              break;
            case 'Journal':
              iconName ='book';
              break;
            case 'Explore':
              iconName = 'musical-notes';
              break;
            default:
              iconName = 'apps';
          }

          return <TabIcon focused={focused} icon={iconName} />;
        },
        tabBarLabel: route.name === 'index' ? 'Home' : route.name,
      })}
    >
      {/* Visible Tabs */}
      <Tabs.Screen name="index" />
      <Tabs.Screen name="Explore" />
      <Tabs.Screen name="Chatbot" />
       <Tabs.Screen name="Journal" />
      <Tabs.Screen name="Profile" />
     

      {/* Hidden Screens */}
      <Tabs.Screen name="MoodDetection" options={{ href: null }} />
      <Tabs.Screen name="Meditation" options={{ href: null }} />
      <Tabs.Screen name="Trends" options={{ href: null }} />
      <Tabs.Screen name="Recommendations" options={{ href: null }} />

    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
   flexDirection: 'row',       
    width: '100%',              
    flex: 1,                    
    minWidth: 100,              
    minHeight: 80,              
    marginTop: 16,             
    justifyContent: 'center',  
    alignItems: 'center',     
    borderRadius: 100,       
    overflow: 'hidden',  
  },
  tabIconDefault: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    borderRadius: 32,
  },
});
