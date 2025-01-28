// SubjectCard.tsx
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface SubjectCardProps {
  title: string;
  thumbnail: string; // URL of the image
  description: string;
  onPressDetails: () => void; // Callback for "Test Details" button
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  title,
  thumbnail,
  description,
  onPressDetails,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.card}>
      {/* Card Header */}
      <TouchableOpacity onPress={toggleDropdown}>
        <View style={styles.header}>
          <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>

      {/* Dropdown Content */}
      {isExpanded && (
        <View style={styles.dropdown}>
          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity onPress={onPressDetails} style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>Test Details</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  dropdown: {
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 16,
  },
  detailsButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  detailsButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SubjectCard;
