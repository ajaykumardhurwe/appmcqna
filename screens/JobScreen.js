






















// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Button,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
// } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// export default function JobScreen() {
//   const [activeTab, setActiveTab] = useState('government');
//   const [jobsData, setJobsData] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [locationFilter, setLocationFilter] = useState('');
//   const navigation = useNavigation();

//   const googleSheetUrls = {
//     government:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
//     private:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const url = googleSheetUrls[activeTab];
//         const response = await fetch(url);
//         if (!response.ok) throw new Error('Failed to fetch data');

//         const csvText = await response.text();
//         const rows = csvText.split('\n');
//         const headers = rows[0].split(',').map((header) => header.trim());
//         const data = rows.slice(1).map((row) => {
//           const values = row.split(',');
//           const job = {};
//           headers.forEach((header, index) => {
//             job[header] = values[index]?.trim() || '';
//           });
//           return job;
//         });

//         const validJobs = data
//           .filter((job) => job['Job Title'])
//           .sort((a, b) => new Date(b['Start Date']) - new Date(a['Start Date']));

//         setJobsData(validJobs);
//         setFilteredJobs(validJobs);
//       } catch (error) {
//         console.error('Error fetching jobs:', error.message);
//         setJobsData([]);
//         setFilteredJobs([]);
//       }
//     };

//     fetchData();
//   }, [activeTab]);

//   const isValidDate = (dateString) => !isNaN(Date.parse(dateString));

//   const handleFilter = () => {
//     const filterStart = isValidDate(startDate) ? new Date(startDate) : null;
//     const filterEnd = isValidDate(endDate) ? new Date(endDate) : null;

//     const filtered = jobsData.filter((job) => {
//       const jobStartDate = new Date(job['Start Date']);
//       const jobEndDate = new Date(job['End Date']);
//       const matchesDate =
//         (!filterStart || jobStartDate >= filterStart) &&
//         (!filterEnd || jobEndDate <= filterEnd);
//       const matchesLocation =
//         !locationFilter ||
//         job['Location']?.toLowerCase().includes(locationFilter.toLowerCase());
//       return matchesDate && matchesLocation;
//     });

//     setFilteredJobs(filtered);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Jobs</Text>

//       <View style={styles.tabContainer}>
//         {['government', 'private'].map((tab) => (
//           <TouchableOpacity
//             key={tab}
//             style={[styles.tabButton, activeTab === tab && styles.activeTab]}
//             onPress={() => setActiveTab(tab)}
//           >
//             <Text style={styles.tabText}>
//               {tab === 'government' ? 'Government Jobs' : 'Private Jobs'}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <View style={styles.filterContainer}>
//         <Text>Filters</Text>
//         <TextInput
//           style={styles.input}
//           value={startDate}
//           onChangeText={setStartDate}
//           placeholder="Start Date (YYYY-MM-DD)"
//         />
//         <TextInput
//           style={styles.input}
//           value={endDate}
//           onChangeText={setEndDate}
//           placeholder="End Date (YYYY-MM-DD)"
//         />
//         <Picker
//           selectedValue={locationFilter}
//           style={styles.picker}
//           onValueChange={setLocationFilter}
//         >
//           <Picker.Item label="All Locations" value="" />
//           {['Bilaspur', 'Raipur', 'Durg', 'Bhilai'].map((location) => (
//             <Picker.Item key={location} label={location} value={location} />
//           ))}
//         </Picker>
//         <Button title="Apply Filter" onPress={handleFilter} />
//       </View>

//       <FlatList
//         data={filteredJobs}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.jobItem}
//             onPress={() => navigation.navigate('JobDetails', { job: item })}
//           >
//             <Image
//               source={{
//                 uri: item['Image Link'] || 'https://via.placeholder.com/50',
//               }}
//               style={styles.jobImage}
//             />
//             <View>
//               <Text>{item['Job Title']}</Text>
//               <Text>{item['Location']}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 10 },
//   header: { fontSize: 20 },
//   tabContainer: { flexDirection: 'row' },
//   tabButton: { padding: 10 },
//   activeTab: { backgroundColor: 'lightblue' },
//   filterContainer: { marginVertical: 10 },
//   input: { borderWidth: 1, marginVertical: 5 },
//   picker: { height: 50 },
//   jobItem: { flexDirection: 'row', marginVertical: 10 },
//   jobImage: { width: 50, height: 50 },
// });










// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Button,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
// } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// export default function JobScreen() {
//   const [activeTab, setActiveTab] = useState('government');
//   const [jobsData, setJobsData] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [locationFilter, setLocationFilter] = useState('');
//   const navigation = useNavigation();

//   const googleSheetUrls = {
//     government:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
//     private:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const url = googleSheetUrls[activeTab];
//         const response = await fetch(url);
//         if (!response.ok) throw new Error('Failed to fetch data');

//         const csvText = await response.text();
//         const rows = csvText.split('\n');
//         const headers = rows[0].split(',').map((header) => header.trim());
//         const data = rows.slice(1).map((row) => {
//           const values = row.split(',');
//           const job = {};
//           headers.forEach((header, index) => {
//             job[header] = values[index]?.trim() || '';
//           });
//           return job;
//         });

//         const validJobs = data
//           .filter((job) => job['Job Title'])
//           .sort((a, b) => new Date(b['Start Date']) - new Date(a['Start Date']));

//         setJobsData(validJobs);
//         setFilteredJobs(validJobs);
//       } catch (error) {
//         console.error('Error fetching jobs:', error.message);
//         setJobsData([]);
//         setFilteredJobs([]);
//       }
//     };

//     fetchData();
//   }, [activeTab]);

//   const isValidDate = (dateString) => !isNaN(Date.parse(dateString));

//   const handleFilter = () => {
//     const filterStart = isValidDate(startDate) ? new Date(startDate) : null;
//     const filterEnd = isValidDate(endDate) ? new Date(endDate) : null;

//     const filtered = jobsData.filter((job) => {
//       const jobStartDate = new Date(job['Start Date']);
//       const jobEndDate = new Date(job['End Date']);
//       const matchesDate =
//         (!filterStart || jobStartDate >= filterStart) &&
//         (!filterEnd || jobEndDate <= filterEnd);
//       const matchesLocation =
//         !locationFilter ||
//         job['Location']?.toLowerCase().includes(locationFilter.toLowerCase());
//       return matchesDate && matchesLocation;
//     });

//     setFilteredJobs(filtered);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>💼 Jobs</Text>

//       <View style={styles.tabContainer}>
//         {['government', 'private'].map((tab) => (
//           <TouchableOpacity
//             key={tab}
//             style={[styles.tabButton, activeTab === tab && styles.activeTab]}
//             onPress={() => setActiveTab(tab)}
//           >
//             <Text style={styles.tabText}>
//               {tab === 'government' ? '🏢 Government Jobs' : '💼 Private Jobs'}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <View style={styles.filterContainer}>
//         <Text>🔍 Filters</Text>
//         <TextInput
//           style={styles.input}
//           value={startDate}
//           onChangeText={setStartDate}
//           placeholder="📅 Start Date (YYYY-MM-DD)"
//         />
//         <TextInput
//           style={styles.input}
//           value={endDate}
//           onChangeText={setEndDate}
//           placeholder="📅 End Date (YYYY-MM-DD)"
//         />
//         <Picker
//           selectedValue={locationFilter}
//           style={styles.picker}
//           onValueChange={setLocationFilter}
//         >
//           <Picker.Item label="🌍 All Locations" value="" />
//           {['Bilaspur', 'Raipur', 'Durg', 'Bhilai'].map((location) => (
//             <Picker.Item key={location} label={location} value={location} />
//           ))}
//         </Picker>
//         <Button title="🔍 Apply Filter" onPress={handleFilter} />
//       </View>

//       <FlatList
//         data={filteredJobs}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.jobItem}
//             onPress={() => navigation.navigate('JobDetails', { job: item })}
//           >
//             <Image
//               source={{
//                 uri: item['Image Link'] || 'https://via.placeholder.com/50',
//               }}
//               style={styles.jobImage}
//             />
//             <View>
//               <Text>{item['Job Title']}</Text>
//               <Text>{item['Location']}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 10 },
//   header: { fontSize: 20 },
//   tabContainer: { flexDirection: 'row' },
//   tabButton: { padding: 10 },
//   activeTab: { backgroundColor: 'lightblue' },
//   filterContainer: { marginVertical: 10 },
//   input: { borderWidth: 1, marginVertical: 5 },
//   picker: { height: 50 },
//   jobItem: { flexDirection: 'row', marginVertical: 10 },
//   jobImage: { width: 50, height: 50 },
// });















// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Button,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
// } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { Picker } from '@react-native-picker/picker';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';

// export default function JobScreen() {
//   const [activeTab, setActiveTab] = useState('government');
//   const [jobsData, setJobsData] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [locationFilter, setLocationFilter] = useState('');
//   const [showStartDatePicker, setShowStartDatePicker] = useState(false);
//   const [showEndDatePicker, setShowEndDatePicker] = useState(false);
//   const navigation = useNavigation();

//   const googleSheetUrls = {
//     government:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
//     private:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const url = googleSheetUrls[activeTab];
//         const response = await fetch(url);
//         if (!response.ok) throw new Error('Failed to fetch data');

//         const csvText = await response.text();
//         const rows = csvText.split('\n');
//         const headers = rows[0].split(',').map((header) => header.trim());
//         const data = rows.slice(1).map((row) => {
//           const values = row.split(',');
//           const job = {};
//           headers.forEach((header, index) => {
//             job[header] = values[index]?.trim() || '';
//           });
//           return job;
//         });

//         const validJobs = data.filter((job) => job['Job Title']);

//         setJobsData(validJobs);
//         setFilteredJobs(validJobs);
//       } catch (error) {
//         console.error('Error fetching jobs:', error.message);
//         setJobsData([]);
//         setFilteredJobs([]);
//       }
//     };

//     fetchData();
//   }, [activeTab]);

//   const handleFilter = () => {
//     const filtered = jobsData.filter((job) => {
//       const jobStartDate = new Date(job['Start Date']);
//       const jobEndDate = new Date(job['End Date']);

//       const matchesDate =
//         (!startDate || jobStartDate >= startDate) &&
//         (!endDate || jobEndDate <= endDate);

//       const matchesLocation =
//         !locationFilter ||
//         job['Location']?.toLowerCase().includes(locationFilter.toLowerCase());

//       return matchesDate && matchesLocation;
//     });

//     setFilteredJobs(filtered);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>💼 Jobs</Text>

//       {/* Tabs */}
//       <View style={styles.tabContainer}>
//         {['government', 'private'].map((tab) => (
//           <TouchableOpacity
//             key={tab}
//             style={[styles.tabButton, activeTab === tab && styles.activeTab]}
//             onPress={() => setActiveTab(tab)}
//           >
//             <Text style={styles.tabText}>
//               {tab === 'government' ? '🏢 Government Jobs' : '💼 Private Jobs'}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Filters */}
//       <View style={styles.filterContainer}>
//         <Text style={styles.filterTitle}>🔍 Filters</Text>

//         {/* Start Date Picker */}
//         <TouchableOpacity onPress={() => setShowStartDatePicker(true)} style={styles.dateButton}>
//           <Text>📅 Start Date: {startDate ? startDate.toDateString() : 'Select Date'}</Text>
//         </TouchableOpacity>
//         {showStartDatePicker && (
//           <DateTimePicker
//             value={startDate || new Date()}
//             mode="date"
//             display="default"
//             onChange={(event, date) => {
//               setShowStartDatePicker(false);
//               if (date) setStartDate(date);
//             }}
//           />
//         )}

//         {/* End Date Picker */}
//         <TouchableOpacity onPress={() => setShowEndDatePicker(true)} style={styles.dateButton}>
//           <Text>⏳ End Date: {endDate ? endDate.toDateString() : 'Select Date'}</Text>
//         </TouchableOpacity>
//         {showEndDatePicker && (
//           <DateTimePicker
//             value={endDate || new Date()}
//             mode="date"
//             display="default"
//             onChange={(event, date) => {
//               setShowEndDatePicker(false);
//               if (date) setEndDate(date);
//             }}
//           />
//         )}

//         {/* Location Filter */}
//         <Picker
//           selectedValue={locationFilter}
//           style={styles.picker}
//           onValueChange={setLocationFilter}
//         >
//           <Picker.Item label="🌍 All Locations" value="" />
//           {['Bilaspur', 'Raipur', 'Durg', 'Bhilai'].map((location) => (
//             <Picker.Item key={location} label={location} value={location} />
//           ))}
//         </Picker>

//         <Button title="🔍 Apply Filter" onPress={handleFilter} />
//       </View>

//       {/* Job List */}
//       <FlatList
//         data={filteredJobs}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.jobItem}
//             onPress={() => navigation.navigate('JobDetails', { job: item })}
//           >
//             <Image
//               source={{
//                 uri: item['Image Link'] || 'https://via.placeholder.com/50',
//               }}
//               style={styles.jobImage}
//             />
//             <View>
//               <Text>🏢 {item['Company']}</Text>
//               <Text>📍 {item['Location']}</Text>
//               <Text>📅 Start: {item['Start Date']}</Text>
//               <Text>⏳ End: {item['End Date']}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 10 },
//   header: { fontSize: 20 },
//   tabContainer: { flexDirection: 'row' },
//   tabButton: { padding: 10 },
//   activeTab: { backgroundColor: 'lightblue' },
//   filterContainer: { marginVertical: 10 },
//   filterTitle: { fontSize: 16, fontWeight: 'bold' },
//   dateButton: { padding: 10, backgroundColor: '#ddd', marginVertical: 5 },
//   picker: { height: 50 },
//   jobItem: { flexDirection: 'row', marginVertical: 10 },
//   jobImage: { width: 50, height: 50, marginRight: 10 },
// });














// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Button,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
// } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { Picker } from '@react-native-picker/picker';
// import { useNavigation } from '@react-navigation/native';

// export default function JobScreen() {
//   const [activeTab, setActiveTab] = useState('government');
//   const [jobsData, setJobsData] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [locationFilter, setLocationFilter] = useState('');
//   const [showStartDatePicker, setShowStartDatePicker] = useState(false);
//   const [showEndDatePicker, setShowEndDatePicker] = useState(false);
//   const navigation = useNavigation();

//   const googleSheetUrls = {
//     government:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
//     private:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const url = googleSheetUrls[activeTab];
//         const response = await fetch(url);
//         if (!response.ok) throw new Error('Failed to fetch data');

//         const csvText = await response.text();
//         const rows = csvText.split('\n');
//         const headers = rows[0].split(',').map((header) => header.trim());
//         const data = rows.slice(1).map((row) => {
//           const values = row.split(',');
//           const job = {};
//           headers.forEach((header, index) => {
//             job[header] = values[index]?.trim() || '';
//           });
//           return job;
//         });

//         const validJobs = data.filter((job) => job['Job Title']);

//         setJobsData(validJobs);
//         setFilteredJobs(validJobs);
//       } catch (error) {
//         console.error('Error fetching jobs:', error.message);
//         setJobsData([]);
//         setFilteredJobs([]);
//       }
//     };

//     fetchData();
//   }, [activeTab]);

//   const handleFilter = () => {
//     const filtered = jobsData.filter((job) => {
//       const jobStartDate = new Date(job['Start Date']);
//       const jobEndDate = new Date(job['End Date']);

//       const matchesDate =
//         (!startDate || jobStartDate >= startDate) &&
//         (!endDate || jobEndDate <= endDate);

//       const matchesLocation =
//         !locationFilter ||
//         job['Location']?.toLowerCase().includes(locationFilter.toLowerCase());

//       return matchesDate && matchesLocation;
//     });

//     setFilteredJobs(filtered);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>💼 Jobs</Text>

//       {/* Tabs */}
//       <View style={styles.tabContainer}>
//         {['government', 'private'].map((tab) => (
//           <TouchableOpacity
//             key={tab}
//             style={[styles.tabButton, activeTab === tab && styles.activeTab]}
//             onPress={() => setActiveTab(tab)}
//           >
//             <Text style={styles.tabText}>
//               {tab === 'government' ? '🏢 Government Jobs' : '💼 Private Jobs'}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Filters */}
//       <View style={styles.filterContainer}>
//         <Text style={styles.filterTitle}>🔍 Filters</Text>

//         {/* Start Date Picker */}
//         <TouchableOpacity onPress={() => setShowStartDatePicker(true)} style={styles.dateButton}>
//           <Text>📅 Start Date: {startDate ? startDate.toDateString() : 'Select Date'}</Text>
//         </TouchableOpacity>
//         {showStartDatePicker && (
//           <DateTimePicker
//             value={startDate || new Date()}
//             mode="date"
//             display="default"
//             onChange={(event, date) => {
//               setShowStartDatePicker(false);
//               if (date) setStartDate(date);
//             }}
//           />
//         )}

//         {/* End Date Picker */}
//         <TouchableOpacity onPress={() => setShowEndDatePicker(true)} style={styles.dateButton}>
//           <Text>⏳ End Date: {endDate ? endDate.toDateString() : 'Select Date'}</Text>
//         </TouchableOpacity>
//         {showEndDatePicker && (
//           <DateTimePicker
//             value={endDate || new Date()}
//             mode="date"
//             display="default"
//             onChange={(event, date) => {
//               setShowEndDatePicker(false);
//               if (date) setEndDate(date);
//             }}
//           />
//         )}

//         {/* Location Filter */}
//         <Picker
//           selectedValue={locationFilter}
//           style={styles.picker}
//           onValueChange={setLocationFilter}
//         >
//           <Picker.Item label="🌍 All Locations" value="" />
//           {['Bilaspur', 'Raipur', 'Durg', 'Bhilai'].map((location) => (
//             <Picker.Item key={location} label={location} value={location} />
//           ))}
//         </Picker>

//         <Button title="🔍 Apply Filter" onPress={handleFilter} />
//       </View>

//       {/* Job List */}
//       <FlatList
//         data={filteredJobs}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.jobItem}
//             onPress={() => navigation.navigate('JobDetails', { job: item })}
//           >
//             <Image
//               source={{
//                 uri: item['Image Link'] || 'https://via.placeholder.com/50',
//               }}
//               style={styles.jobImage}
//             />
//             <View style={styles.jobDetails}>
//               <Text style={styles.jobTitle}>📝 {item['Job Title']}</Text>
//               <Text style={styles.company}>🏢 {item['Company']}</Text>
//               <Text style={styles.location}>📍 {item['Location']}</Text>
//               <Text style={styles.date}>📅 Start: {item['Start Date']}</Text>
//               <Text style={styles.date}>⏳ End: {item['End Date']}</Text>
//               <Text style={styles.description}>📖 {item['Description']}</Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 10 },
//   header: { fontSize: 22, fontWeight: 'bold' },
//   tabContainer: { flexDirection: 'row' },
//   tabButton: { padding: 10 },
//   activeTab: { backgroundColor: 'lightblue' },
//   filterContainer: { marginVertical: 10 },
//   filterTitle: { fontSize: 16, fontWeight: 'bold' },
//   dateButton: { padding: 10, backgroundColor: '#ddd', marginVertical: 5 },
//   picker: { height: 50 },
//   jobItem: { flexDirection: 'row', marginVertical: 10 },
//   jobImage: { width: 50, height: 50, marginRight: 10 },
//   jobDetails: { flex: 1 },
//   jobTitle: { fontSize: 16, fontWeight: 'bold' },
//   company: { fontSize: 14, color: 'gray' },
//   location: { fontSize: 14, color: 'gray' },
//   date: { fontSize: 12, color: 'blue' },
//   description: { fontSize: 12, color: 'black' },
// });















// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
// } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { Picker } from '@react-native-picker/picker';
// import { useNavigation } from '@react-navigation/native';
// import { Card } from 'react-native-paper';

// export default function JobScreen() {
//   const [activeTab, setActiveTab] = useState('government');
//   const [jobsData, setJobsData] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [locationFilter, setLocationFilter] = useState('');
//   const [showStartDatePicker, setShowStartDatePicker] = useState(false);
//   const [showEndDatePicker, setShowEndDatePicker] = useState(false);
//   const navigation = useNavigation();

//   const googleSheetUrls = {
//     government:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
//     private:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const url = googleSheetUrls[activeTab];
//         const response = await fetch(url);
//         if (!response.ok) throw new Error('Failed to fetch data');

//         const csvText = await response.text();
//         const rows = csvText.split('\n');
//         const headers = rows[0].split(',').map((header) => header.trim());
//         const data = rows.slice(1).map((row) => {
//           const values = row.split(',');
//           const job = {};
//           headers.forEach((header, index) => {
//             job[header] = values[index]?.trim() || '';
//           });
//           return job;
//         });

//         const validJobs = data.filter((job) => job['Job Title']);

//         setJobsData(validJobs);
//         setFilteredJobs(validJobs);
//       } catch (error) {
//         console.error('Error fetching jobs:', error.message);
//         setJobsData([]);
//         setFilteredJobs([]);
//       }
//     };

//     fetchData();
//   }, [activeTab]);

//   const handleFilter = () => {
//     const filtered = jobsData.filter((job) => {
//       const jobStartDate = new Date(job['Start Date']);
//       const jobEndDate = new Date(job['End Date']);

//       const matchesDate =
//         (!startDate || jobStartDate >= startDate) &&
//         (!endDate || jobEndDate <= endDate);

//       const matchesLocation =
//         !locationFilter ||
//         job['Location']?.toLowerCase().includes(locationFilter.toLowerCase());

//       return matchesDate && matchesLocation;
//     });

//     setFilteredJobs(filtered);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>💼 Job Listings</Text>

//       {/* Tabs */}
//       <View style={styles.tabContainer}>
//         {['government', 'private'].map((tab) => (
//           <TouchableOpacity
//             key={tab}
//             style={[styles.tabButton, activeTab === tab && styles.activeTab]}
//             onPress={() => setActiveTab(tab)}
//           >
//             <Text style={styles.tabText}>
//               {tab === 'government' ? '🏢 Government Jobs' : '💼 Private Jobs'}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Filters */}
//       <View style={styles.filterContainer}>
//         <Text style={styles.filterTitle}>🔍 Filters</Text>

//         {/* Start Date Picker */}
//         <TouchableOpacity onPress={() => setShowStartDatePicker(true)} style={styles.dateButton}>
//           <Text>📅 Start Date: {startDate ? startDate.toDateString() : 'Select Date'}</Text>
//         </TouchableOpacity>
//         {showStartDatePicker && (
//           <DateTimePicker
//             value={startDate || new Date()}
//             mode="date"
//             display="default"
//             onChange={(event, date) => {
//               setShowStartDatePicker(false);
//               if (date) setStartDate(date);
//             }}
//           />
//         )}

//         {/* End Date Picker */}
//         <TouchableOpacity onPress={() => setShowEndDatePicker(true)} style={styles.dateButton}>
//           <Text>⏳ End Date: {endDate ? endDate.toDateString() : 'Select Date'}</Text>
//         </TouchableOpacity>
//         {showEndDatePicker && (
//           <DateTimePicker
//             value={endDate || new Date()}
//             mode="date"
//             display="default"
//             onChange={(event, date) => {
//               setShowEndDatePicker(false);
//               if (date) setEndDate(date);
//             }}
//           />
//         )}

//         {/* Location Filter */}
//         <Picker
//           selectedValue={locationFilter}
//           style={styles.picker}
//           onValueChange={setLocationFilter}
//         >
//           <Picker.Item label="🌍 All Locations" value="" />
//           {['Bilaspur', 'Raipur', 'Durg', 'Bhilai'].map((location) => (
//             <Picker.Item key={location} label={location} value={location} />
//           ))}
//         </Picker>

//         <TouchableOpacity style={styles.applyFilterButton} onPress={handleFilter}>
//           <Text style={styles.filterButtonText}>🔍 Apply Filter</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Job List */}
//       <FlatList
//         data={filteredJobs}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <Card style={styles.jobCard}>
//             <TouchableOpacity onPress={() => navigation.navigate('JobDetails', { job: item })}>
//               <Image
//                 source={{ uri: item['Image Link'] || 'https://via.placeholder.com/50' }}
//                 style={styles.jobImage}
//               />
//               <View style={styles.jobDetails}>
//                 <Text style={styles.jobTitle}>📝 {item['Job Title']}</Text>
//                 <Text style={styles.company}>🏢 {item['Company']}</Text>
//                 <Text style={styles.location}>📍 {item['Location']}</Text>
//                 <Text style={styles.salary}>💰 Salary: {item['Salary'] || 'N/A'}</Text>
//                 <Text style={styles.date}>📅 Start: {item['Start Date']}</Text>
//                 <Text style={styles.date}>⏳ End: {item['End Date']}</Text>
//               </View>
//             </TouchableOpacity>
//           </Card>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 10, backgroundColor: '#f8f9fa' },
//   header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
//   tabContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
//   activeTab: { backgroundColor: 'lightblue' },
//   jobCard: { padding: 10, marginVertical: 5, borderRadius: 10, backgroundColor: '#fff', shadowColor: '#000' },
//   jobTitle: { fontSize: 16, fontWeight: 'bold' },
// });
















// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Share,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Card } from 'react-native-paper';
// import { Picker } from '@react-native-picker/picker';

// export default function JobScreen() {
//   const [activeTab, setActiveTab] = useState('government');
//   const [jobsData, setJobsData] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [locationFilter, setLocationFilter] = useState('');
//   const [dateFilter, setDateFilter] = useState('all');
//   const navigation = useNavigation();

//   const googleSheetUrls = {
//     government:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
//     private:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const url = googleSheetUrls[activeTab];
//         const response = await fetch(url);
//         if (!response.ok) throw new Error('Failed to fetch data');

//         const csvText = await response.text();
//         const rows = csvText.split('\n');
//         const headers = rows[0].split(',').map((header) => header.trim());
//         const data = rows.slice(1).map((row) => {
//           const values = row.split(',');
//           const job = {};
//           headers.forEach((header, index) => {
//             job[header] = values[index]?.trim() || '';
//           });
//           return job;
//         });

//         const validJobs = data.filter((job) => job['Job Title']);

//         setJobsData(validJobs);
//         setFilteredJobs(validJobs);
//       } catch (error) {
//         console.error('Error fetching jobs:', error.message);
//         setJobsData([]);
//         setFilteredJobs([]);
//       }
//     };

//     fetchData();
//   }, [activeTab]);

//   // Filter jobs based on the selected date
//   useEffect(() => {
//     let updatedJobs = [...jobsData];
    
//     if (dateFilter === 'upcoming') {
//       const today = new Date();
//       updatedJobs = updatedJobs.filter((job) => {
//         const jobEndDate = new Date(job['End Date']);
//         return jobEndDate >= today;
//       });
//     } else if (dateFilter === 'past') {
//       const today = new Date();
//       updatedJobs = updatedJobs.filter((job) => {
//         const jobEndDate = new Date(job['End Date']);
//         return jobEndDate < today;
//       });
//     }

//     // Apply location filter if any
//     if (locationFilter) {
//       updatedJobs = updatedJobs.filter((job) => job['Location'] === locationFilter);
//     }

//     setFilteredJobs(updatedJobs);
//   }, [dateFilter, locationFilter, jobsData]);

//   const shareJob = async (job) => {
//     const message = `📢 *Job Opportunity Available!* 📢

// 📝 *Job Title:* ${job['Job Title']}
// 🏢 *Company:* ${job['Company']}
// 📍 *Location:* ${job['Location']}
// 📅 *Start Date:* ${job['Start Date']}
// ⏳ *End Date:* ${job['End Date']}
// 📖 *Description:* ${job['Description']}

// Apply Now! 🚀`;

//     try {
//       await Share.share({
//         message,
//       });
//     } catch (error) {
//       console.error('Error sharing job:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>💼 Job Listings</Text>

//       {/* Tabs */}
//       <View style={styles.tabContainer}>
//         {['government', 'private'].map((tab) => (
//           <TouchableOpacity
//             key={tab}
//             style={[styles.tabButton, activeTab === tab && styles.activeTab]}
//             onPress={() => setActiveTab(tab)}
//           >
//             <Text style={styles.tabText}>
//               {tab === 'government' ? '🏢 Government Jobs' : '💼 Private Jobs'}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Location Filter */}
//       <Picker
//         selectedValue={locationFilter}
//         style={styles.picker}
//         onValueChange={setLocationFilter}
//       >
//         <Picker.Item label="🌍 All Locations" value="" />
//         {['Bilaspur', 'Raipur', 'Durg', 'Bhilai'].map((location) => (
//           <Picker.Item key={location} label={location} value={location} />
//         ))}
//       </Picker>

//       {/* Date Filter (Top Right Corner) */}
//       <View style={styles.dateFilterContainer}>
//         <Text style={styles.filterLabel}>Filter by Date:</Text>
//         <Picker
//           selectedValue={dateFilter}
//           style={styles.picker}
//           onValueChange={setDateFilter}
//         >
//           <Picker.Item label="All Jobs" value="all" />
//           <Picker.Item label="Upcoming Jobs" value="upcoming" />
//           <Picker.Item label="Past Jobs" value="past" />
//         </Picker>
//       </View>

//       {/* Job List */}
//       <FlatList
//         data={filteredJobs}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <Card style={styles.jobCard}>
//             <TouchableOpacity onPress={() => navigation.navigate('JobDetails', { job: item })}>
//               <Image
//                 source={{ uri: item['Image Link'] || 'https://via.placeholder.com/50' }}
//                 style={styles.jobImage}
//               />
//               <View style={styles.jobDetails}>
//                 <Text style={styles.jobTitle}>📝 {item['Job Title']}</Text>
//                 <Text style={styles.company}>🏢 {item['Company']}</Text>
//                 <Text style={styles.location}>📍 {item['Location']}</Text>
//                 <Text style={styles.salary}>💰 Salary: {item['Salary'] || 'N/A'}</Text>
//                 <Text style={styles.date}>📅 Start: {item['Start Date']}</Text>
//                 <Text style={styles.date}>⏳ End: {item['End Date']}</Text>
//               </View>
//             </TouchableOpacity>

//             {/* Share Button */}
//             <TouchableOpacity style={styles.shareButton} onPress={() => shareJob(item)}>
//               <Text style={styles.shareButtonText}>📤 Share</Text>
//             </TouchableOpacity>
//           </Card>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 10, backgroundColor: '#f8f9fa' },
//   header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
//   tabContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
//   tabButton: {
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#ddd',
//   },
//   activeTab: { backgroundColor: 'lightblue' },
//   tabText: { fontWeight: 'bold' },
//   picker: { height: 50, marginVertical: 10 },
//   jobCard: {
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   jobImage: { width: 50, height: 50, marginRight: 10, borderRadius: 5 },
//   jobDetails: { padding: 10 },
//   jobTitle: { fontSize: 16, fontWeight: 'bold' },
//   company: { fontSize: 14, color: 'gray' },
//   location: { fontSize: 14, color: 'gray' },
//   salary: { fontSize: 14, fontWeight: 'bold', color: 'green' },
//   date: { fontSize: 12, color: 'blue' },
//   shareButton: {
//     backgroundColor: '#28a745',
//     padding: 8,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   shareButtonText: { color: '#fff', fontWeight: 'bold' },
//   dateFilterContainer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     marginBottom: 10,
//     alignItems: 'center',
//   },
//   filterLabel: { fontSize: 14, marginRight: 10 },
// });











// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Share,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Card } from 'react-native-paper';
// import { Picker } from '@react-native-picker/picker';

// export default function JobScreen() {
//   const [activeTab, setActiveTab] = useState('government');
//   const [jobsData, setJobsData] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [locationFilter, setLocationFilter] = useState('');
//   const navigation = useNavigation();

//   const googleSheetUrls = {
//     government:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
//     private:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const url = googleSheetUrls[activeTab];
//         const response = await fetch(url);
//         if (!response.ok) throw new Error('Failed to fetch data');

//         const csvText = await response.text();
//         const rows = csvText.split('\n');
//         const headers = rows[0].split(',').map((header) => header.trim());
//         const data = rows.slice(1).map((row) => {
//           const values = row.split(',');
//           const job = {};
//           headers.forEach((header, index) => {
//             job[header] = values[index]?.trim() || '';
//           });
//           return job;
//         });

//         const validJobs = data.filter((job) => job['Job Title']);

//         setJobsData(validJobs);
//         setFilteredJobs(validJobs);
//       } catch (error) {
//         console.error('Error fetching jobs:', error.message);
//         setJobsData([]);
//         setFilteredJobs([]);
//       }
//     };

//     fetchData();
//   }, [activeTab]);

//   const shareJob = async (job) => {
//     const message = `📢 *Job Opportunity Available!* 📢

// 📝 *Job Title:* ${job['Job Title']}
// 🏢 *Company:* ${job['Company']}
// 📍 *Location:* ${job['Location']}
// 📅 *Start Date:* ${job['Start Date']}
// ⏳ *End Date:* ${job['End Date']}
// 📖 *Description:* ${job['Description']}

// Apply Now! 🚀`;

//     try {
//       await Share.share({
//         message,
//       });
//     } catch (error) {
//       console.error('Error sharing job:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>💼 Job Listings</Text>

//       {/* Tabs */}
//       <View style={styles.tabContainer}>
//         {['government', 'private'].map((tab) => (
//           <TouchableOpacity
//             key={tab}
//             style={[styles.tabButton, activeTab === tab && styles.activeTab]}
//             onPress={() => setActiveTab(tab)}
//           >
//             <Text style={styles.tabText}>
//               {tab === 'government' ? '🏢 Government Jobs' : '💼 Private Jobs'}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Location Filter */}
//       <Picker
//         selectedValue={locationFilter}
//         style={styles.picker}
//         onValueChange={setLocationFilter}
//       >
//         <Picker.Item label="🌍 All Locations" value="" />
//         {['Bilaspur', 'Raipur', 'Durg', 'Bhilai'].map((location) => (
//           <Picker.Item key={location} label={location} value={location} />
//         ))}
//       </Picker>

//       {/* Job List */}
//       <FlatList
//         data={filteredJobs}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <Card style={styles.jobCard}>
//             <TouchableOpacity onPress={() => navigation.navigate('JobDetails', { job: item })}>
//               <Image
//                 source={{ uri: item['Image Link'] || 'https://via.placeholder.com/50' }}
//                 style={styles.jobImage}
//               />
//               <View style={styles.jobDetails}>
//                 <Text style={styles.jobTitle}>📝 {item['Job Title']}</Text>
//                 <Text style={styles.company}>🏢 {item['Company Name']}</Text>
//                 <Text style={styles.location}>📍 {item['Location']}</Text>
//                 <Text style={styles.salary}>💰 Salary: {item['Salary'] || 'N/A'}</Text>
//                 <Text style={styles.date}>📅 Start: {item['Start Date']}</Text>
//                 <Text style={styles.date}>⏳ End: {item['End Date']}</Text>
//               </View>
//             </TouchableOpacity>

//             {/* Share Button */}
//             <TouchableOpacity style={styles.shareButton} onPress={() => shareJob(item)}>
//               <Text style={styles.shareButtonText}>📤 Share</Text>
//             </TouchableOpacity>
//           </Card>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 10, backgroundColor: '#f8f9fa' },
//   header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
//   tabContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
//   tabButton: {
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#ddd',
//   },
//   activeTab: { backgroundColor: 'lightblue' },
//   tabText: { fontWeight: 'bold' },
//   picker: { height: 50, marginVertical: 10 },
//   jobCard: {
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   jobImage: { width: 50, height: 50, marginRight: 10, borderRadius: 5 },
//   jobDetails: { padding: 10 },
//   jobTitle: { fontSize: 16, fontWeight: 'bold' },
//   company: { fontSize: 14, color: 'gray' },
//   location: { fontSize: 14, color: 'gray' },
//   salary: { fontSize: 14, fontWeight: 'bold', color: 'green' },
//   date: { fontSize: 12, color: 'blue' },
//   shareButton: {
//     backgroundColor: '#28a745',
//     padding: 8,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   shareButtonText: { color: '#fff', fontWeight: 'bold' },
// });











// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Share,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Card } from 'react-native-paper';
// import { Picker } from '@react-native-picker/picker';

// export default function JobScreen() {
//   const [activeTab, setActiveTab] = useState('government');
//   const [jobsData, setJobsData] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [locationFilter, setLocationFilter] = useState('');
//   const navigation = useNavigation();

//   const googleSheetUrls = {
//     government:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
//     private:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const url = googleSheetUrls[activeTab];
//         const response = await fetch(url);
//         if (!response.ok) throw new Error('Failed to fetch data');

//         const csvText = await response.text();
//         const rows = csvText.split('\n');
//         const headers = rows[0].split(',').map((header) => header.trim());
//         const data = rows.slice(1).map((row) => {
//           const values = row.split(',');
//           const job = {};
//           headers.forEach((header, index) => {
//             job[header] = values[index]?.trim() || '';
//           });
//           return job;
//         });

//         const validJobs = data.filter((job) => job['Job Title']);

//         setJobsData(validJobs);
//         setFilteredJobs(validJobs);
//       } catch (error) {
//         console.error('Error fetching jobs:', error.message);
//         setJobsData([]);
//         setFilteredJobs([]);
//       }
//     };

//     fetchData();
//   }, [activeTab]);

//   const shareJob = async (job) => {
//     const message = `📢 *Job Opportunity Available!* 📢

// 📝 *Job Title:* ${job['Job Title']}
// 🏢 *Company:* ${job['Company']}
// 📍 *Location:* ${job['Location']}
// 📅 *Start Date:* ${job['Start Date']}
// ⏳ *End Date:* ${job['End Date']}
// 📖 *Description:* ${job['Description']}

// Apply Now! 🚀`;

//     try {
//       await Share.share({
//         message,
//       });
//     } catch (error) {
//       console.error('Error sharing job:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>💼 Job Listings</Text>

//       {/* Tabs */}
//       <View style={styles.tabContainer}>
//         {['government', 'private'].map((tab) => (
//           <TouchableOpacity
//             key={tab}
//             style={[styles.tabButton, activeTab === tab && styles.activeTab]}
//             onPress={() => setActiveTab(tab)}
//           >
//             <Text style={styles.tabText}>
//               {tab === 'government' ? '🏢 Government Jobs' : '💼 Private Jobs'}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Location Filter */}
//       <Picker
//         selectedValue={locationFilter}
//         style={styles.picker}
//         onValueChange={setLocationFilter}
//       >
//         <Picker.Item label="🌍 All Locations" value="" />
//         {['Bilaspur', 'Raipur', 'Durg', 'Bhilai'].map((location) => (
//           <Picker.Item key={location} label={location} value={location} />
//         ))}
//       </Picker>

//       {/* Job List */}
//       <FlatList
//         data={filteredJobs}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <Card style={styles.jobCard}>
//             <TouchableOpacity onPress={() => navigation.navigate('JobDetails', { job: item })}>
//               <View style={styles.iconContainer}>
//                 <Text style={styles.jobIcon}>💼</Text>
//               </View>
//               <View style={styles.jobDetails}>
//                 <Text style={styles.jobTitle}>📝 {item['Job Title']}</Text>
//                 <Text style={styles.company}>🏢 {item['Company Name']}</Text>
//                 <Text style={styles.location}>📍 {item['Location']}</Text>
//                 <Text style={styles.salary}>💰 Salary: {item['Salary'] || 'N/A'}</Text>
//                 <Text style={styles.date}>📅 Start: {item['Start Date']}</Text>
//                 <Text style={styles.date}>⏳ End: {item['End Date']}</Text>
//               </View>
//             </TouchableOpacity>

//             {/* Share Button */}
//             <TouchableOpacity style={styles.shareButton} onPress={() => shareJob(item)}>
//               <Text style={styles.shareButtonText}>📤 Share</Text>
//             </TouchableOpacity>
//           </Card>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 10, backgroundColor: '#f8f9fa' },
//   header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
//   tabContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
//   tabButton: {
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#ddd',
//   },
//   activeTab: { backgroundColor: 'lightblue' },
//   tabText: { fontWeight: 'bold' },
//   picker: { height: 50, marginVertical: 10 },
//   jobCard: {
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconContainer: {
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   jobIcon: { fontSize: 30 },
//   jobDetails: { flex: 1 },
//   jobTitle: { fontSize: 16, fontWeight: 'bold' },
//   company: { fontSize: 14, color: 'gray' },
//   location: { fontSize: 14, color: 'gray' },
//   salary: { fontSize: 14, fontWeight: 'bold', color: 'green' },
//   date: { fontSize: 12, color: 'blue' },
//   shareButton: {
//     backgroundColor: '#28a745',
//     padding: 8,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   shareButtonText: { color: '#fff', fontWeight: 'bold' },
// });



















// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,s
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Share,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { Card } from 'react-native-paper';
// import { Picker } from '@react-native-picker/picker';

// export default function JobScreen() {
//   const [activeTab, setActiveTab] = useState('government');
//   const [jobsData, setJobsData] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [locationFilter, setLocationFilter] = useState('');
//   const navigation = useNavigation();

//   const googleSheetUrls = {
//     government:
//     'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
//       // 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
//     private:
//       'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const url = googleSheetUrls[activeTab];
//         const response = await fetch(url);
//         if (!response.ok) throw new Error('Failed to fetch data');

//         const csvText = await response.text();
//         const rows = csvText.split('\n');
//         const headers = rows[0].split(',').map((header) => header.trim());
//         const data = rows.slice(1).map((row) => {
//           const values = row.split(',');
//           const job = {};
//           headers.forEach((header, index) => {
//             job[header] = values[index]?.trim() || '';
//           });
//           return job;
//         });

//         const validJobs = data.filter((job) => job['Job Title']);

//         setJobsData(validJobs);
//         setFilteredJobs(validJobs);
//       } catch (error) {
//         console.error('Error fetching jobs:', error.message);
//         setJobsData([]);
//         setFilteredJobs([]);
//       }
//     };

//     fetchData();
//   }, [activeTab]);

//   const shareJob = async (job) => {
//     const message = `📢 *Job Opportunity Available!* 📢

// 📝 *Job Title:* ${job['Job Title']}
// 🏢 *Company:* ${job['Company']}
// 📍 *Location:* ${job['Location']}
// 📅 *Start Date:* ${job['Start Date']}
// ⏳ *End Date:* ${job['End Date']}
// 📖 *Description:* ${job['Description']}

// Apply Now! 🚀`;

//     try {
//       await Share.share({
//         message,
//       });
//     } catch (error) {
//       console.error('Error sharing job:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>💼 Job Listings</Text>

//       {/* Tabs */}
//       <View style={styles.tabContainer}>
//         {['government', 'private'].map((tab) => (
//           <TouchableOpacity
//             key={tab}
//             style={[styles.tabButton, activeTab === tab && styles.activeTab]}
//             onPress={() => setActiveTab(tab)}
//           >
//             <Text style={styles.tabText}>
//               {tab === 'government' ? '🏢 Government Jobs' : '💼 Private Jobs'}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Location Filter */}
//       <Picker
//         selectedValue={locationFilter}
//         style={styles.picker}
//         onValueChange={setLocationFilter}
//       >
//         <Picker.Item label="🌍 All Locations" value="" />
//         {['Bilaspur', 'Raipur', 'Durg', 'Bhilai'].map((location) => (
//           <Picker.Item key={location} label={location} value={location} />
//         ))}
//       </Picker>

//       {/* Job List */}
//       <FlatList
//         data={filteredJobs}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <Card style={styles.jobCard}>
//             {/* First Row - Job Icon and Title */}
//             <View style={styles.row}>
//               <Text style={styles.jobIcon}>💼</Text>
//               <Text style={styles.jobTitle}>{item['Job Title']}</Text>
//             </View>

//             {/* Second Row - Start Date and End Date */}
//             <View style={styles.row}>
//               <Text style={[styles.date, { color: 'green' }]}>
//                 📅 Start: {item['Start Date']}
//               </Text>
//               <Text style={[styles.date, { color: 'red' }]}>
//                 ⏳ End: {item['End Date']}
//               </Text>
//             </View>

//             {/* Third Row - Location and Salary */}
//             <View style={styles.row}>
//               <Text style={styles.location}>📍 {item['Location']}</Text>
//               <Text style={styles.salary}>💰 {item['Salary'] || 'N/A'}</Text>
//             </View>

//             {/* Fourth Row - Job Details and Share */}
//             <View style={styles.row}>
//               <TouchableOpacity
//                 style={styles.detailsButton}
//                 onPress={() => navigation.navigate('JobDetails', { job: item })}
//               >
//                 <Text style={styles.buttonText}>📄 Job Details</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.shareButton}
//                 onPress={() => shareJob(item)}
//               >
//                 <Text style={styles.buttonText}>📤 Share</Text>
//               </TouchableOpacity>
//             </View>
//           </Card>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 10, backgroundColor: '#f8f9fa' },
//   header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
//   tabContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
//   tabButton: {
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#ddd',
//   },
//   activeTab: { backgroundColor: 'lightblue' },
//   tabText: { fontWeight: 'bold' },
//   picker: { height: 50, marginVertical: 10 },
//   jobCard: {
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 },
//   jobIcon: { fontSize: 24 },
//   jobTitle: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', flex: 1 },
//   date: { fontSize: 14 },
//   location: { fontSize: 14 },
//   salary: { fontSize: 14, fontWeight: 'bold', color: 'green' },
//   detailsButton: { backgroundColor: '#007bff', padding: 8, borderRadius: 5 },
//   shareButton: { backgroundColor: '#28a745', padding: 8, borderRadius: 5 },
//   buttonText: { color: '#fff', fontWeight: 'bold' },
// });












// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Share,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { Card } from "react-native-paper";
// import { Picker } from "@react-native-picker/picker";

// export default function JobScreen() {
//   const [activeTab, setActiveTab] = useState("government");
//   const [jobsData, setJobsData] = useState([]);
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [locationFilter, setLocationFilter] = useState("");
//   const navigation = useNavigation();

//   const googleSheetUrls = {
//     government:
//       "https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv",
//     private:
//       "https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv",
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const url = googleSheetUrls[activeTab];
//         const response = await fetch(url);
//         if (!response.ok) throw new Error("Failed to fetch data");

//         const csvText = await response.text();
//         const rows = csvText.split("\n");
//         const headers = rows[0].split(",").map((header) => header.trim());
//         const data = rows.slice(1).map((row) => {
//           const values = row.split(",");
//           const job = {};
//           headers.forEach((header, index) => {
//             job[header] = values[index]?.trim() || "";
//           });
//           return job;
//         });

//         const validJobs = data.filter((job) => job["Job Title"]);

//         setJobsData(validJobs);
//         setFilteredJobs(validJobs);
//       } catch (error) {
//         console.error("Error fetching jobs:", error.message);
//         setJobsData([]);
//         setFilteredJobs([]);
//       }
//     };

//     fetchData();
//   }, [activeTab]);

//   const shareJob = async (job) => {
//     const message = `📢 *Job Opportunity Available!* 📢

// 📝 *Job Title:* ${job["Job Title"]}
// 🏢 *Company:* ${job["Organization/Company Name"]}
// 📍 *Location:* ${job["Location"]}
// 📅 *Start Date:* ${job["Start Date"]}
// ⏳ *End Date:* ${job["End Date"]}
// 📖 *Description:* ${job["Description"]}

// Apply Now! 🚀`;

//     try {
//       await Share.share({ message });
//     } catch (error) {
//       console.error("Error sharing job:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>💼 Job Listings</Text>

//       {/* Tabs */}
//       <View style={styles.tabContainer}>
//         {["government", "private"].map((tab) => (
//           <TouchableOpacity
//             key={tab}
//             style={[styles.tabButton, activeTab === tab && styles.activeTab]}
//             onPress={() => setActiveTab(tab)}
//           >
//             <Text style={styles.tabText}>
//               {tab === "government" ? "🏢 Government Jobs" : "💼 Private Jobs"}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Location Filter */}
//       <Picker
//         selectedValue={locationFilter}
//         style={styles.picker}
//         onValueChange={setLocationFilter}
//       >
//         <Picker.Item label="🌍 All Locations" value="" />
//         {["Bilaspur", "Raipur", "Durg", "Bhilai"].map((location) => (
//           <Picker.Item key={location} label={location} value={location} />
//         ))}
//       </Picker>

//       {/* Job List */}
//       <FlatList
//         data={filteredJobs}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <Card style={styles.jobCard}>
//             {/* First Row - Job Icon and Title */}
//             <View style={styles.row}>
//               <Text style={styles.jobIcon}>💼</Text>
//               <Text style={styles.jobTitle}>{item["Job Title"]}</Text>
//             </View>

//             {/* Second Row - Start Date and End Date */}
//             <View style={styles.row}>
//               <Text style={[styles.date, { color: "green" }]}>
//                 📅 Start: {item["Start Date"]}
//               </Text>
//               <Text style={[styles.date, { color: "red" }]}>
//                 ⏳ End: {item["End Date"]}
//               </Text>
//             </View>

//             {/* Third Row - Location and Salary */}
//             <View style={styles.row}>
//               <Text style={styles.location}>📍 {item["Location"]}</Text>
//               <Text style={styles.salary}>💰 {item["Salary"] || "N/A"}</Text>
//             </View>

//             {/* Fourth Row - Job Details and Share */}
//             <View style={styles.row}>
//               <TouchableOpacity
//                 style={styles.detailsButton}
//                 onPress={() => navigation.navigate("JobDetails", { job: item })}
//               >
//                 <Text style={styles.buttonText}>📄 Job Details</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.shareButton}
//                 onPress={() => shareJob(item)}
//               >
//                 <Text style={styles.buttonText}>📤 Share</Text>
//               </TouchableOpacity>
//             </View>
//           </Card>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 10, backgroundColor: "#f8f9fa" },
//   header: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
//   tabContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 10 },
//   tabButton: { padding: 10, borderRadius: 5, backgroundColor: "#ddd" },
//   activeTab: { backgroundColor: "lightblue" },
//   tabText: { fontWeight: "bold" },
//   picker: { height: 50, marginVertical: 10 },
//   jobCard: {
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 10,
//     backgroundColor: "#fff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 5 },
//   jobIcon: { fontSize: 24 },
//   jobTitle: { fontSize: 16, fontWeight: "bold", textAlign: "center", flex: 1 },
//   date: { fontSize: 14 },
//   location: { fontSize: 14 },
//   salary: { fontSize: 14, fontWeight: "bold", color: "green" },
//   detailsButton: { backgroundColor: "#007bff", padding: 8, borderRadius: 5 },
//   shareButton: { backgroundColor: "#28a745", padding: 8, borderRadius: 5 },
//   buttonText: { color: "#fff", fontWeight: "bold" },
// });










import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Share,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

export default function JobScreen() {
  const [activeTab, setActiveTab] = useState("government");
  const [jobsData, setJobsData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");
  const navigation = useNavigation();

  const googleSheetUrls = {
    government:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv",
    private:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = googleSheetUrls[activeTab];
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data");

        const csvText = await response.text();
        const rows = csvText.split("\n");
        const headers = rows[0].split(",").map((header) => header.trim());
        const data = rows.slice(1).map((row) => {
          const values = row.split(",");
          const job = {};
          headers.forEach((header, index) => {
            job[header] = values[index]?.trim() || "";
          });
          return job;
        });

        const validJobs = data.filter((job) => job["Job Title"]);

        setJobsData(validJobs);
        setFilteredJobs(validJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error.message);
        setJobsData([]);
        setFilteredJobs([]);
      }
    };

    fetchData();
  }, [activeTab]);

  const handleFilter = () => {
    const filtered = jobsData.filter((job) =>
      !locationFilter || job["Location"]?.toLowerCase().includes(locationFilter.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const shareJob = async (job) => {
    const message = `📢 *Job Opportunity Available!* 📢

📝 *Job Title:* ${job["Job Title"]}
🏢 *Company:* ${job["Organization/Company Name"]}
📍 *Location:* ${job["Location"]}
📅 *Start Date:* ${job["Start Date"]}
⏳ *End Date:* ${job["End Date"]}
📖 *Description:* ${job["Description"]}

Apply Now! 🚀`;

    try {
      await Share.share({ message });
    } catch (error) {
      console.error("Error sharing job:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>💼 Job Listings</Text>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {["government", "private"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={styles.tabText}>
              {tab === "government" ? "🏢 Government Jobs" : "💼 Private Jobs"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Location Filter */}
      <Picker
        selectedValue={locationFilter}
        style={styles.picker}
        onValueChange={setLocationFilter}
      >
        <Picker.Item label="🌍 All Locations" value="" />
        {["Bilaspur", "Raipur", "Durg", "Bhilai"].map((location) => (
          <Picker.Item key={location} label={location} value={location} />
        ))}
      </Picker>
      <Button title="🔍 Apply Filter" onPress={handleFilter} />

      {/* Job List */}
      <FlatList
        data={filteredJobs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={styles.jobCard}>
            {/* First Row - Job Icon and Title */}
            <View style={styles.row}>
              <Text style={styles.jobIcon}>💼</Text>
              <Text style={styles.jobTitle}>{item["Job Title"]}</Text>
            </View>

            {/* Second Row - Start Date and End Date */}
            <View style={styles.row}>
              <Text style={[styles.date, { color: "green" }]}>
                📅 Start: {item["Start Date"]}
              </Text>
              <Text style={[styles.date, { color: "red" }]}>
                ⏳ End: {item["End Date"]}
              </Text>
            </View>

            {/* Third Row - Location and Salary */}
            <View style={styles.row}>
              <Text style={styles.location}>📍 {item["Location"]}</Text>
              <Text style={styles.salary}>💰 {item["Salary"] || "N/A"}</Text>
            </View>

            {/* Fourth Row - Job Details and Share */}
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => navigation.navigate("JobDetails", { job: item })}
              >
                <Text style={styles.buttonText}>📄 Job Details</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.shareButton}
                onPress={() => shareJob(item)}
              >
                <Text style={styles.buttonText}>📤 Share</Text>
              </TouchableOpacity>
            </View>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#f8f9fa" },
  header: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  tabContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 10 },
  tabButton: { padding: 10, borderRadius: 5, backgroundColor: "#ddd" },
  activeTab: { backgroundColor: "lightblue" },
  tabText: { fontWeight: "bold" },
  picker: { height: 50, marginVertical: 10 },
  jobCard: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 5 },
  jobIcon: { fontSize: 24 },
  jobTitle: { fontSize: 16, fontWeight: "bold", textAlign: "center", flex: 1 },
  date: { fontSize: 14 },
  location: { fontSize: 14 },
  salary: { fontSize: 14, fontWeight: "bold", color: "green" },
  detailsButton: { backgroundColor: "#007bff", padding: 8, borderRadius: 5 },
  shareButton: { backgroundColor: "#28a745", padding: 8, borderRadius: 5 },
  buttonText: { color: "#fff", fontWeight: "bold" },
});





