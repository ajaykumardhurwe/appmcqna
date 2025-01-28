// import React from 'react';
// import { View, Text } from 'react-native';

// export default function JobScreen() {
//   return (
//     <View className="flex-1 justify-center items-center">
//       <Text>Job Screen</Text>
//     </View>
//   );
// }























import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function JobScreen() {
  const [activeTab, setActiveTab] = useState('government');
  const [jobsData, setJobsData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const navigation = useNavigation();

  const googleSheetUrls = {
    government:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
    private:
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = googleSheetUrls[activeTab];
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch data');

        const csvText = await response.text();
        const rows = csvText.split('\n');
        const headers = rows[0].split(',').map((header) => header.trim());
        const data = rows.slice(1).map((row) => {
          const values = row.split(',');
          const job = {};
          headers.forEach((header, index) => {
            job[header] = values[index]?.trim() || '';
          });
          return job;
        });

        const validJobs = data
          .filter((job) => job['Job Title'])
          .sort((a, b) => new Date(b['Start Date']) - new Date(a['Start Date']));

        setJobsData(validJobs);
        setFilteredJobs(validJobs);
      } catch (error) {
        console.error('Error fetching jobs:', error.message);
        setJobsData([]);
        setFilteredJobs([]);
      }
    };

    fetchData();
  }, [activeTab]);

  const isValidDate = (dateString) => !isNaN(Date.parse(dateString));

  const handleFilter = () => {
    const filterStart = isValidDate(startDate) ? new Date(startDate) : null;
    const filterEnd = isValidDate(endDate) ? new Date(endDate) : null;

    const filtered = jobsData.filter((job) => {
      const jobStartDate = new Date(job['Start Date']);
      const jobEndDate = new Date(job['End Date']);
      const matchesDate =
        (!filterStart || jobStartDate >= filterStart) &&
        (!filterEnd || jobEndDate <= filterEnd);
      const matchesLocation =
        !locationFilter ||
        job['Location']?.toLowerCase().includes(locationFilter.toLowerCase());
      return matchesDate && matchesLocation;
    });

    setFilteredJobs(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Jobs</Text>

      <View style={styles.tabContainer}>
        {['government', 'private'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={styles.tabText}>
              {tab === 'government' ? 'Government Jobs' : 'Private Jobs'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.filterContainer}>
        <Text>Filters</Text>
        <TextInput
          style={styles.input}
          value={startDate}
          onChangeText={setStartDate}
          placeholder="Start Date (YYYY-MM-DD)"
        />
        <TextInput
          style={styles.input}
          value={endDate}
          onChangeText={setEndDate}
          placeholder="End Date (YYYY-MM-DD)"
        />
        <Picker
          selectedValue={locationFilter}
          style={styles.picker}
          onValueChange={setLocationFilter}
        >
          <Picker.Item label="All Locations" value="" />
          {['Bilaspur', 'Raipur', 'Durg', 'Bhilai'].map((location) => (
            <Picker.Item key={location} label={location} value={location} />
          ))}
        </Picker>
        <Button title="Apply Filter" onPress={handleFilter} />
      </View>

      <FlatList
        data={filteredJobs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.jobItem}
            onPress={() => navigation.navigate('JobDetails', { job: item })}
          >
            <Image
              source={{
                uri: item['Image Link'] || 'https://via.placeholder.com/50',
              }}
              style={styles.jobImage}
            />
            <View>
              <Text>{item['Job Title']}</Text>
              <Text>{item['Location']}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}





const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  header: { fontSize: 20 },
  tabContainer: { flexDirection: 'row' },
  tabButton: { padding: 10 },
  activeTab: { backgroundColor: 'lightblue' },
  filterContainer: { marginVertical: 10 },
  input: { borderWidth: 1, marginVertical: 5 },
  picker: { height: 50 },
  jobItem: { flexDirection: 'row', marginVertical: 10 },
  jobImage: { width: 50, height: 50 },
});














