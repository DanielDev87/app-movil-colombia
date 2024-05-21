import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import axios from "axios";
import RNPickerSelect from "react-native-picker-select";
import { api } from "../services/serviceAPI";

const InfoCol = () => {
  const [colombiaData, setColombiaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [departmentDetails, setDepartmentDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api + "Country/Colombia");
        setColombiaData(response.data);
      } catch (error) {
        console.log("Error al buscar los datos: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(api + "Department");
        setDepartments(response.data);
      } catch (error) {
        console.log("Error al obtener información de departamentos: ", error);
      }
    };

    fetchDepartments();
  }, []);

  useEffect(() => {
    const fetchDepartmentDetails = async () => {
      if (selectedDepartment) {
        try {
          const response = await axios.get(api + `Department/${selectedDepartment.id}`);
          setDepartmentDetails(response.data);
        } catch (error) {
          console.log("Error al obtener detalles del departamento: ", error);
        }
      }
    };

    fetchDepartmentDetails();
  }, [selectedDepartment]);

  const handleDepartmentChange = (value) => {
    // Aquí puedes manejar el cambio de departamento seleccionado
    setSelectedDepartment(value);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Información {colombiaData?.name || "Sin Nombre"} 💛💙❤
      </Text>
      {colombiaData ? (
        <ScrollView>
          {/* Información general */}
          <Text>Población: {colombiaData.population || "No hay población"}</Text>
          <Text>Capital: {colombiaData.stateCapital || "No hay capital"}</Text>
          <Text>{colombiaData.description || "Sin descripción"}</Text>

          {/* Dropdown para seleccionar departamento */}
          <Text style={styles.title}>Selecciona un departamento:</Text>
          <RNPickerSelect
            placeholder={{ label: "Selecciona un departamento...", value: null }}
            items={departments.map((dept) => ({ label: dept.name, value: dept }))}
            onValueChange={handleDepartmentChange}
          />

          {/* Mostrar información del departamento seleccionado */}
          {selectedDepartment && (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{selectedDepartment.name}</Text>
              <Text>{selectedDepartment.description || "Sin descripción"}</Text>
              <Text>Población: {selectedDepartment.population || "No hay población"}</Text>
              <Text>Superficie: {selectedDepartment.surface || "No hay superficie"}</Text>
              <Text>Capital: {selectedDepartment.cityCapital || "No hay capital"}</Text>
              {/* Puedes agregar más detalles según tus necesidades */}
            </View>
          )}
        </ScrollView>
      ) : (
        <Text>No se han encontrado datos</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(233,240,9,0.8)",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#3498db",
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default InfoCol;
