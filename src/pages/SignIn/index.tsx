import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  }
});

const SignIn: React.FC = () => {
  const { signed, signIn, user } = useAuth();

  console.log(signed)
  console.log(user)

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça seu Login</Text>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
}

export default SignIn;