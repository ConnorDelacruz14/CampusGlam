import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import NavBar from "../components/NavBar";

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([
    { id: "1", title: "Appointment 1" },
    { id: "2", title: "Appointment 2" },
    { id: "3", title: "Appointment 3" },
  ]);

  const renderAppointmentItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.appointmentItem}>
        <Text style={styles.appointmentTitle}>{item.title}</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  appointmentItem: {
    padding: 16,
    marginBottom: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  appointmentTitle: {
    fontSize: 16,
  },
});

export default AppointmentsPage;
