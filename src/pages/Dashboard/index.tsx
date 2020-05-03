import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import {useAuth} from '../../contexts/auth'

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  name: {
    fontSize: 22,
    color: '#666',
    marginBottom: 20,
  }
});

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Hello {user?.name}</Text>
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
}

export default Dashboard;