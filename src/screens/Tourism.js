import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";
import { api } from "../services/serviceAPI";

const styles = {
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Ajusta la opacidad según tus necesidades
  },
  dropdown: {
    width: "80%",
    backgroundColor: "#E7E7E7", // COLORS.DEFAULT
  },
  selectedInfoContainer: {
    backgroundColor: "#E7E7E7",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
  },
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    overflow: "hidden",
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0033A0", // o el color que desees para el título
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: "#4A4A4A", // o el color que desees para la descripción
  },
  selectedInfoText: {
    color: "#4A4A4A", // COLORS.ICON
    marginBottom: 5,
  },
  changeSelectionButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#0033A0",
    borderRadius: 8,
  },
  changeSelectionText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
};

const Tourism = () => {
  const [selectedTouristicAttraction, setSelectedTouristicAttraction] = useState(null);
  const [selectedNaturalArea, setSelectedNaturalArea] = useState(null);
  const [touristicAttractions, setTouristicAttractions] = useState([]);
  const [naturalAreas, setNaturalAreas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const touristicAttractionsResponse = await axios.get(api + "TouristicAttraction");
        const naturalAreasResponse = await axios.get(api + "NaturalArea");

        setTouristicAttractions(touristicAttractionsResponse.data);
        setNaturalAreas(naturalAreasResponse.data);
      } catch (error) {
        console.log("Error al buscar los datos: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderDropdown = (items, onSelect, selectedValue) => {
    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0033A0" />
        </View>
      );
    }

    return (
      <RNPickerSelect
        placeholder={{
          label: "Seleccione información",
          value: null,
          color: "#4A4A4A",
        }}
        items={items.map((item) => ({
          label: item.name,
          value: item.id,
        }))}
        onValueChange={(value) => onSelect(value)}
        style={{
          inputIOS: {
            ...styles.dropdown,
            color: "#4A4A4A",
          },
          inputAndroid: {
            ...styles.dropdown,
            color: "#4A4A4A",
          },
        }}
        value={selectedValue}
      />
    );
  };

  const renderSelectedInfo = (selectedItem, onSelect) => {
    if (!selectedItem) {
      return null;
    }

    return (
      <View style={styles.selectedInfoContainer}>
        <ScrollView style={styles.scrollViewContainer}>
          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{selectedItem.name}</Text>
            {selectedItem.images && selectedItem.images.length > 0 && (
              <Image
                source={{ uri: selectedItem.images[0] }}
                style={styles.cardImage}
              />
            )}
            <Text style={styles.cardDescription}>
              {selectedItem.description}
            </Text>
            {/* Renderizar toda la información disponible */}
            {Object.entries(selectedItem).map(([key, value]) => (
              <Text key={key} style={styles.selectedInfoText}>
                {key}: {value}
              </Text>
            ))}
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.changeSelectionButton}
          onPress={() => onSelect(null)}
        >
          <Text style={styles.changeSelectionText}>
            Cambiar selección
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ImageBackground
      source={require("../assets/colombiaBG.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={{ color: "#0033A0", fontSize: 20 }}>
          Sitios Turísticos
        </Text>
        {renderDropdown(touristicAttractions, setSelectedTouristicAttraction, selectedTouristicAttraction)}
        {renderSelectedInfo(
          touristicAttractions.find((item) => item.id === selectedTouristicAttraction),
          setSelectedTouristicAttraction
        )}
        
        <Text style={{ color: "#0033A0", fontSize: 20, marginTop: 20 }}>
          Áreas Naturales
        </Text>
        {renderDropdown(naturalAreas, setSelectedNaturalArea, selectedNaturalArea)}
        {renderSelectedInfo(
          naturalAreas.find((item) => item.id === selectedNaturalArea),
          setSelectedNaturalArea
        )}
      </View>
    </ImageBackground>
  );
};

export default Tourism;
