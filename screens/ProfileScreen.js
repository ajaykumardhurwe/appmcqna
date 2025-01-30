// import React, { useState } from 'react';
// import { View, TextInput, Button } from 'react-native';

// export default function ProfileScreen() {
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [bio, setBio] = useState('');
//   const [exam, setExam] = useState('');

//   const handleSave = () => {
//     // Save data to Firebase
//   };

//   return (
//     <View className="p-4">
//       <TextInput placeholder="Name" value={name} onChangeText={setName} />
//       <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
//       <TextInput placeholder="Bio" value={bio} onChangeText={setBio} />
//       <TextInput placeholder="Preparing for Exam" value={exam} onChangeText={setExam} />
//       <Button title="Save" onPress={handleSave} />
//     </View>
//   );
// }
























// import React, { useState } from 'react';
// import { View, TextInput, Button, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// export default function ProfileScreen() {
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [bio, setBio] = useState('');
//   const [exam, setExam] = useState('');

//   const handleSave = () => {
//     // Save data to Firebase
//   };

//   return (
//     <View style={{ padding: 16 }}>
//       <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
//         👤 Profile Information
//       </Text>

//       {/* Name Input */}
//       <View style={styles.inputContainer}>
//         <Icon name="account" size={24} color="#555" />
//         <TextInput
//           style={styles.input}
//           placeholder="📝 Enter Name"
//           value={name}
//           onChangeText={setName}
//         />
//       </View>

//       {/* Username Input */}
//       <View style={styles.inputContainer}>
//         <Icon name="at" size={24} color="#555" />
//         <TextInput
//           style={styles.input}
//           placeholder="📛 Username"
//           value={username}
//           onChangeText={setUsername}
//         />
//       </View>

//       {/* Bio Input */}
//       <View style={styles.inputContainer}>
//         <Icon name="pen" size={24} color="#555" />
//         <TextInput
//           style={styles.input}
//           placeholder="✍️ Bio"
//           value={bio}
//           onChangeText={setBio}
//         />
//       </View>

//       {/* Exam Input */}
//       <View style={styles.inputContainer}>
//         <Icon name="book" size={24} color="#555" />
//         <TextInput
//           style={styles.input}
//           placeholder="📚 Preparing for Exam"
//           value={exam}
//           onChangeText={setExam}
//         />
//       </View>

//       {/* Save Button */}
//       <View style={{ marginTop: 10 }}>
//         <Button title="💾 Save" onPress={handleSave} color="#4CAF50" />
//       </View>
//     </View>
//   );
// }

// const styles = {
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   input: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 16,
//   },
// };













// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useNavigation } from '@react-navigation/native';

// export default function ProfileScreen({ navigation }) {
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [bio, setBio] = useState('');
//   const [exam, setExam] = useState('');

//   // Function to toggle drawer
//   const openDrawer = () => {
//     navigation.openDrawer();
//   };

//   return (
//     <View style={{ flex: 1, padding: 16 }}>
//       {/* Top Header with Drawer Button */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>👤 Profile</Text>
//         <TouchableOpacity onPress={openDrawer}>
//           <Icon name="menu" size={30} color="#000" />
//         </TouchableOpacity>
//       </View>

//       {/* Name Input */}
//       <View style={styles.inputContainer}>
//         <Icon name="account" size={24} color="#555" />
//         <TextInput
//           style={styles.input}
//           placeholder="📝 Enter Name"
//           value={name}
//           onChangeText={setName}
//         />
//       </View>

//       {/* Username Input */}
//       <View style={styles.inputContainer}>
//         <Icon name="at" size={24} color="#555" />
//         <TextInput
//           style={styles.input}
//           placeholder="📛 Username"
//           value={username}
//           onChangeText={setUsername}
//         />
//       </View>

//       {/* Bio Input */}
//       <View style={styles.inputContainer}>
//         <Icon name="pen" size={24} color="#555" />
//         <TextInput
//           style={styles.input}
//           placeholder="✍️ Bio"
//           value={bio}
//           onChangeText={setBio}
//         />
//       </View>

//       {/* Exam Input */}
//       <View style={styles.inputContainer}>
//         <Icon name="book" size={24} color="#555" />
//         <TextInput
//           style={styles.input}
//           placeholder="📚 Preparing for Exam"
//           value={exam}
//           onChangeText={setExam}
//         />
//       </View>

//       {/* Save Button */}
//       <View style={{ marginTop: 10 }}>
//         <Button title="💾 Save" onPress={() => {}} color="#4CAF50" />
//       </View>
//     </View>
//   );
// }

// const styles = {
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingBottom: 10,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   input: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 16,
//   },
// };
















// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// export default function ProfileScreen({ navigation }) {
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [bio, setBio] = useState('');
//   const [exam, setExam] = useState('');

//   // Open Drawer
//   const openDrawer = () => {
//     navigation.openDrawer();
//   };

//   return (
//     <View style={{ flex: 1, padding: 16 }}>
//       {/* Header with Drawer Button */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>👤 Profile</Text>
//         <TouchableOpacity onPress={openDrawer}>
//           <Icon name="menu" size={30} color="#000" />
//         </TouchableOpacity>
//       </View>

//       {/* Name Input */}
//       <View style={styles.inputContainer}>
//         <Icon name="account" size={24} color="#555" />
//         <TextInput style={styles.input} placeholder="📝 Enter Name" value={name} onChangeText={setName} />
//       </View>

//       {/* Username Input */}
//       <View style={styles.inputContainer}>
//         <Icon name="at" size={24} color="#555" />
//         <TextInput style={styles.input} placeholder="📛 Username" value={username} onChangeText={setUsername} />
//       </View>

//       {/* Bio Input */}
//       <View style={styles.inputContainer}>
//         <Icon name="pen" size={24} color="#555" />
//         <TextInput style={styles.input} placeholder="✍️ Bio" value={bio} onChangeText={setBio} />
//       </View>

//       {/* Exam Input */}
//       <View style={styles.inputContainer}>
//         <Icon name="book" size={24} color="#555" />
//         <TextInput style={styles.input} placeholder="📚 Preparing for Exam" value={exam} onChangeText={setExam} />
//       </View>

//       {/* Save Button */}
//       <View style={{ marginTop: 10 }}>
//         <Button title="💾 Save" onPress={() => {}} color="#4CAF50" />
//       </View>
//     </View>
//   );
// }

// const styles = {
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingBottom: 10,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   input: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 16,
//   },
// };


















// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';
// import { auth, db, doc, getDoc, updateDoc, signOut } from '../firebase/firebse';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// export default function ProfileScreen({ navigation }) {
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [bio, setBio] = useState('');
//   const [exam, setExam] = useState('');

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const user = auth.currentUser;
//       if (user) {
//         const userDoc = await getDoc(doc(db, "users", user.uid));
//         if (userDoc.exists()) {
//           const data = userDoc.data();
//           setName(data.name);
//           setUsername(data.username);
//           setBio(data.bio);
//           setExam(data.exam);
//         }
//       }
//     };
//     fetchProfile();
//   }, []);

//   const handleSave = async () => {
//     const user = auth.currentUser;
//     if (user) {
//       await updateDoc(doc(db, "users", user.uid), { name, username, bio, exam });
//       Alert.alert("Success", "Profile Updated!");
//     }
//   };

//   const handleLogout = async () => {
//     await signOut(auth);
//     navigation.navigate("Login");
//   };

//   return (
//     <View style={{ padding: 16 }}>
//       {/* Drawer Menu Icon (Top-Right) */}
//       <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ position: 'absolute', top: 10, right: 10 }}>
//         <Icon name="menu" size={30} color="#000" />
//       </TouchableOpacity>

//       <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>👤 Profile</Text>

//       <TextInput placeholder="👨‍💼 Name" value={name} onChangeText={setName} style={styles.input} />
//       <TextInput placeholder="🔖 Username" value={username} onChangeText={setUsername} style={styles.input} />
//       <TextInput placeholder="📜 Bio" value={bio} onChangeText={setBio} style={styles.input} />
//       <TextInput placeholder="📚 Preparing for Exam" value={exam} onChangeText={setExam} style={styles.input} />

//       <Button title="💾 Save" onPress={handleSave} color="green" />
//       <Button title="🚪 Logout" onPress={handleLogout} color="red" />
//     </View>
//   );
// }

// const styles = { 
//   input: { backgroundColor: '#F5F5F5', padding: 10, borderRadius: 10, marginBottom: 10, marginTop: 40 } 
// };

















// import React, { useState, useEffect } from "react";
// import { 
//   View, TextInput, Button, Alert, Text, TouchableOpacity, Image 
// } from "react-native";
// import { auth, db, doc, getDoc, updateDoc, signOut } from "../firebase/firebse";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// export default function ProfileScreen({ navigation }) {
//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const [bio, setBio] = useState("");
//   const [exam, setExam] = useState("");

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const user = auth.currentUser;
//       if (user) {
//         const userDoc = await getDoc(doc(db, "users", user.uid));
//         if (userDoc.exists()) {
//           const data = userDoc.data();
//           setName(data.name);
//           setUsername(data.username);
//           setBio(data.bio);
//           setExam(data.exam);
//         }
//       }
//     };
//     fetchProfile();
//   }, []);

//   const handleSave = async () => {
//     const user = auth.currentUser;
//     if (user) {
//       await updateDoc(doc(db, "users", user.uid), {
//         name, username, bio, exam,
//       });
//       Alert.alert("Success", "Profile Updated!");
//     }
//   };

//   const handleLogout = async () => {
//     await signOut(auth);
//     navigation.navigate("Login");
//   };

//   return (
//     <View style={styles.container}>
//       {/* Drawer Menu Icon (Top-Right) */}
//       <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuIcon}>
//         <Icon name="menu" size={30} color="#000" />
//       </TouchableOpacity>

//       {/* Profile Avatar */}
//       <View style={styles.profileAvatarContainer}>
//         <Image 
//           source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }} 
//           style={styles.profileAvatar} 
//         />
//         <TouchableOpacity style={styles.editAvatarButton}>
//           <Icon name="camera" size={20} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       {/* Profile Heading */}
//       <Text style={styles.heading}>👤 Profile</Text>

//       {/* Profile Fields */}
//       <TextInput placeholder="👨‍💼 Name" value={name} onChangeText={setName} style={styles.input} />
//       <TextInput placeholder="🔖 Username" value={username} onChangeText={setUsername} style={styles.input} />
//       <TextInput placeholder="📜 Bio" value={bio} onChangeText={setBio} style={styles.input} />
//       <TextInput placeholder="📚 Preparing for Exam" value={exam} onChangeText={setExam} style={styles.input} />

//       {/* Save & Logout Buttons */}
//       <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//         <Text style={styles.buttonText}>💾 Save</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
//         <Text style={styles.buttonText}>🚪 Logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = {
//   container: { 
//     flex: 1, padding: 16, alignItems: "center", backgroundColor: "#F9F9F9" 
//   },
//   menuIcon: { 
//     position: "absolute", top: 10, right: 10 
//   },
//   profileAvatarContainer: { 
//     position: "relative", marginBottom: 20 
//   },
//   profileAvatar: { 
//     width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: "#000" 
//   },
//   editAvatarButton: { 
//     position: "absolute", bottom: 0, right: 0, backgroundColor: "#007bff", borderRadius: 50, padding: 6 
//   },
//   heading: { 
//     fontSize: 20, fontWeight: "bold", marginBottom: 10, color: "#333" 
//   },
//   input: { 
//     width: "90%", padding: 12, backgroundColor: "#FFF", borderRadius: 10, 
//     borderWidth: 1, borderColor: "#ddd", marginBottom: 10, elevation: 3 
//   },
//   saveButton: { 
//     width: "90%", padding: 12, backgroundColor: "green", borderRadius: 10, 
//     alignItems: "center", marginTop: 10 
//   },
//   logoutButton: { 
//     width: "90%", padding: 12, backgroundColor: "red", borderRadius: 10, 
//     alignItems: "center", marginTop: 10 
//   },
//   buttonText: { 
//     color: "#FFF", fontSize: 16, fontWeight: "bold" 
//   }
// };



















import React, { useState, useEffect } from "react";
import { 
  View, TextInput, Text, TouchableOpacity, Image, Alert 
} from "react-native";
import { auth, db, doc, getDoc, updateDoc, signOut } from "../firebase/firebse";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ProfileScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [exam, setExam] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser;
      if (user) {
        setEmail(user.email); // Fetch user email
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const data = userDoc.data();
          setName(data.name);
          setUsername(data.username);
          setBio(data.bio);
          setExam(data.exam);
        }
      }
    };
    fetchProfile();
  }, []);

  const handleSave = async () => {
    const user = auth.currentUser;
    if (user) {
      await updateDoc(doc(db, "users", user.uid), {
        name, username, bio, exam,
      });
      Alert.alert("Success", "Profile Updated!");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* Drawer Menu Icon (Top-Right) */}
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menuIcon}>
        <Icon name="menu" size={30} color="#000" />
      </TouchableOpacity>

      {/* Profile Avatar */}
      <View style={styles.profileAvatarContainer}>
        <Image 
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }} 
          style={styles.profileAvatar} 
        />
        <TouchableOpacity style={styles.editAvatarButton}>
          <Icon name="camera" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Profile Heading */}
      <Text style={styles.heading}>👤 Profile</Text>

      {/* Email (Non-Editable) */}
      <View style={styles.emailContainer}>
        <Icon name="email" size={20} color="#000" />
        <Text style={styles.emailText}>{email}</Text>
      </View>

      {/* Editable Profile Fields */}
      <TextInput placeholder="👨‍💼 Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="🔖 Username" value={username} onChangeText={setUsername} style={styles.input} />
      <TextInput placeholder="📜 Bio" value={bio} onChangeText={setBio} style={styles.input} />
      <TextInput placeholder="📚 Preparing for Exam" value={exam} onChangeText={setExam} style={styles.input} />

      {/* Save & Logout Buttons */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>💾 Save</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>🚪 Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: { 
    flex: 1, padding: 16, alignItems: "center", backgroundColor: "#F9F9F9" 
  },
  menuIcon: { 
    position: "absolute", top: 10, right: 10 
  },
  profileAvatarContainer: { 
    position: "relative", marginBottom: 20 
  },
  profileAvatar: { 
    width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: "#000" 
  },
  editAvatarButton: { 
    position: "absolute", bottom: 0, right: 0, backgroundColor: "#007bff", borderRadius: 50, padding: 6 
  },
  heading: { 
    fontSize: 20, fontWeight: "bold", marginBottom: 10, color: "#333" 
  },
  emailContainer: { 
    flexDirection: "row", alignItems: "center", backgroundColor: "#EFEFEF", 
    padding: 10, borderRadius: 10, width: "90%", marginBottom: 10 
  },
  emailText: { 
    marginLeft: 10, fontSize: 16, color: "#333" 
  },
  input: { 
    width: "90%", padding: 12, backgroundColor: "#FFF", borderRadius: 10, 
    borderWidth: 1, borderColor: "#ddd", marginBottom: 10, elevation: 3 
  },
  saveButton: { 
    width: "90%", padding: 12, backgroundColor: "green", borderRadius: 10, 
    alignItems: "center", marginTop: 10 
  },
  logoutButton: { 
    width: "90%", padding: 12, backgroundColor: "red", borderRadius: 10, 
    alignItems: "center", marginTop: 10 
  },
  buttonText: { 
    color: "#FFF", fontSize: 16, fontWeight: "bold" 
  }
};





















