import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [exam, setExam] = useState('');

  const handleSave = () => {
    // Save data to Firebase
  };

  return (
    <View className="p-4">
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Bio" value={bio} onChangeText={setBio} />
      <TextInput placeholder="Preparing for Exam" value={exam} onChangeText={setExam} />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}
