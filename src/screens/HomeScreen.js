import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Animated,
} from "react-native";
import { general } from "../theme/customTheme";
import { Icon, Button, Slider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Context as AccountDataContext } from "../context/AccountDataContext";
//import setLicense
//import tw from 'tailwind-react-native-classnames'
import EntryList from "../components/EntryList";
import moment from "moment";
import { ColorsG } from "../../constants/ColorsGlobal";
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 


const HomeScreen = () => {
  const navigation = useNavigation();

  const handleScanningFinished = (result) => {
    console.log(result);
  };

  const { state } = useContext(AccountDataContext);

  const renderContent = () => {
    return (
      <View style={general.container}>
        {/* <BlinkID
                    licenseKey="sRwAAAAgY29tLnRvbmNoZXoyNzAwLmFjY2VsZXJpdW1wcnVlYmHBchTg6pO2Os9iNO18Al+CvT6AVwcmqXCK1Op5d0MjkgV+6kuIcYM8rBFRHJhwt4HNg2UYkj4NdVl4f1Dhi9uzLtlC7t6UuTuJwxoKPXNLRebawBHW22lmd0FvC0CfpOfrAvZbtL7fI2Q6YE/sUxetQY48/7U3SF4wOUPtfH1xiXD/3Sdb0RL34GVMvhGcJUkP0DFUD+RilXHpWKw6rdiPskzTzbunQ7Yn"
                    onScanningFinished={handleScanningFinished}
                /> */}
        {/* <Text style={styles.instructions}>Apunta la cámara al documento</Text> */}
        <View style={styles.primaryContainer}>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.cardOption} onPress={()=> navigation.navigate("Register")}>
                <FontAwesome name="user-plus" size={40} color={ColorsG.primary} />
                <Text style={{fontSize: 16, fontWeight: "bold", marginTop: 5}}>REGISTRO DE</Text>
                <Text style={{fontSize: 16, fontWeight: "bold"}}>PACIENTES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardOption}>
                <FontAwesome name="user" size={40} color={ColorsG.primary} />
                <Text style={{fontSize: 16, fontWeight: "bold"}}>PACIENTES</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.cardOption} onPress={()=> navigation.navigate("Register")}>
                <FontAwesome5 name="folder-plus" size={40} color={ColorsG.primary} />
                <Text style={{fontSize: 16, fontWeight: "bold", marginTop: 5}}>REGISTRO DE</Text>
                <Text style={{fontSize: 16, fontWeight: "bold"}}>EXPEDIENTE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return !state.fetchingData ? (
    !state.error ? (
      renderContent()
    ) : (
      <View style={tw`flex-1 p-5 justify-center items-center`}>
        <Text style={tw`text-center text-lg mb-3`}>{state.message}</Text>
        <Button
          containerStyle={{ width: 120 }}
          buttonStyle={[{ backgroundColor: "#118ea6" }]}
          title="Actualizar"
          onPress={() => setDataAccount()}
        />
      </View>
    )
  ) : (
    <ActivityIndicator size="large" color="#118EA6" style={tw`mt-5`} />
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  primaryContainer: {
    width: "90%",
    height: "70%",
    borderWidth: 2,
    borderColor: "#7F7F7F",
    borderRadius: 10,
    marginTop: "5%",
    alignItems: "center",
  },
  optionsContainer: {
    width: "80%",
    height: "25%",
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardOption: {
    width: "47%",
    height: "100%",
    borderWidth: 2,
    borderColor: ColorsG.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
});
