// import React, { useState } from 'react';
// import { View, TextInput, Button, Text } from 'react-native';

// export default function LoginScreen() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={{ padding: 16 }}>
//       <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>🔓 Login</Text>
//       <TextInput style={styles.input} placeholder="📧 Email" value={email} onChangeText={setEmail} />
//       <TextInput style={styles.input} placeholder="🔑 Password" value={password} onChangeText={setPassword} secureTextEntry />
//       <Button title="➡️ Login" onPress={() => {}} color="#2196F3" />
//     </View>
//   );
// }

// const styles = {
//   input: {
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
// };















// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={{ padding: 16 }}>
//       {/* Back Button */}
//       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//         <Icon name="arrow-left" size={30} color="#000" />
//       </TouchableOpacity>

//       <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>🔓 Login</Text>
//       <TextInput style={styles.input} placeholder="📧 Email" value={email} onChangeText={setEmail} />
//       <TextInput style={styles.input} placeholder="🔑 Password" value={password} onChangeText={setPassword} secureTextEntry />
//       <Button title="➡️ Login" onPress={() => {}} color="#2196F3" />
//     </View>
//   );
// }

// const styles = {
//   backButton: {
//     position: 'absolute',
//     top: 10,
//     left: 10,
//     padding: 5,
//   },
//   input: {
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 10,
//     marginTop: 40,
//   },
// };
















// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, TouchableOpacity, Alert } from 'react-native';
// import { auth, signInWithEmailAndPassword } from '../firebase/firebse';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// export default function LoginScreen({ navigation }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       Alert.alert("Success", "Logged in!");
//       navigation.navigate("Profile");
//     } catch (error) {
//       Alert.alert("Error", error.message);
//     }
//   };

//   return (
//     <View style={{ padding: 16 }}>
//       <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 10, left: 10 }}>
//         <Icon name="arrow-left" size={30} color="#000" />
//       </TouchableOpacity>

//       <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>🔓 Login</Text>
//       <TextInput style={styles.input} placeholder="📧 Email" value={email} onChangeText={setEmail} />
//       <TextInput style={styles.input} placeholder="🔑 Password" value={password} onChangeText={setPassword} secureTextEntry />
//       <Button title="➡️ Login" onPress={handleLogin} color="#2196F3" />
//     </View>
//   );
// }

// const styles = { input: { backgroundColor: '#F5F5F5', padding: 10, borderRadius: 10, marginBottom: 10, marginTop: 40 } };














import React, { useState } from 'react';
import { View, TextInput, Button, Alert, TouchableOpacity, Text } from 'react-native';
import { auth, signInWithEmailAndPassword } from '../firebase/firebse';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Logged In!");
      navigation.navigate("Profile");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={{ padding: 16 }}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 20 }}>
        <Icon name="arrow-left" size={30} color="#000" />
      </TouchableOpacity>

      <TextInput placeholder="✉️ Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="🔑 Password" value={password} secureTextEntry onChangeText={setPassword} style={styles.input} />
      <Button title="🔓 Login" onPress={handleLogin} color="blue" />
    </View>
  );
}

const styles = { input: { backgroundColor: '#F5F5F5', padding: 10, borderRadius: 10, marginBottom: 10 } };
