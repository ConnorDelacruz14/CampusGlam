import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import NavBar from "../components/NavBar";

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([
    { id: "1", title: "Appointment 1" },
    { id: "2", title: "Appointment 2" },
    { id: "3", title: "Appointment 3" },
  ]);

  const handleReschedule = (itemId) => {
    // Logic to handle rescheduling the appointment with the given itemId
    console.log("Reschedule appointment with id:", itemId);
  };

  const renderAppointmentItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.appointmentItem}>
        <Text style={styles.appointmentTitle}>{item.title}</Text>
        <TouchableOpacity
          style={styles.rescheduleButton}
          onPress={() => handleReschedule(item.id)}
        >
          <Text style={styles.rescheduleButtonText}>Reschedule</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointments</Text>
      <FlatList
        data={appointments}
        renderItem={renderAppointmentItem}
        keyExtractor={(item) => item.id}
      />
      <NavBar></NavBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  appointmentItem: {
    padding: 16,
    marginBottom: 11,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  appointmentTitle: {
    fontSize: 16,
  },
  rescheduleButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  rescheduleButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default AppointmentsPage;
