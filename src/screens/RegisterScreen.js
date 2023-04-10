import React, { useState, useEffect, useContext, } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
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
import { FontAwesome } from "@expo/vector-icons";
import PatientRegister from "../components/PacientRegister";
import AddresRegister from "../components/AddresRegister";
import ContactsRegister from "../components/ContactsRegister";
import AllergiesForm from "../components/AllergiesForm";
import { Ionicons } from '@expo/vector-icons'; 

const RegisterScreen = () => {
  const navigation = useNavigation();

  

  const handleScanningFinished = (result) => {
    console.log(result);
  };
  

  const { state } = useContext(AccountDataContext);

  const renderContent = () => {

    
    return (
      <View style={general.container}>

        <View style={{height: 80, width: "92%", justifyContent: "space-between", flexDirection: "row", marginTop: 20, marginBottom: 10, alignContent: "center", alignItems: "center"}}>
          <View style={{height: 60, width: "65%", }}>
            <View style={{justifyContent: "space-between",}}>
              <Text style={{backgroundColor: "#F7F8FA", paddingLeft: 20,}}>Expediente/Buscar/Apellidos</Text>
                <TextInput style={{height: 45, width: "100%", paddingLeft: 20, borderWidth: 1, borderColor: ColorsG.border}} placeholder="Buscar"/>
            </View>
            
          </View>
          <View style={{height: 65, width: "30%", paddingTop: 1}}>
            <TouchableOpacity>
              <View style={{flexDirection: "row", justifyContent: "space-between", alignContent: "center", alignItems: "center", height: "100%", backgroundColor: ColorsG.primary}}>
                <Ionicons name="qr-code" size={26} color={ColorsG.ligth1} style={{paddingLeft: 5}}/>
                <Text style={{color: "#fff", fontSize: 16, fontWeight: "bold", paddingRight: 8}}>LEER CREDENCIAL</Text>
              </View>

            </TouchableOpacity>

          </View>

        </View>
        
          <ScrollView>
            <PatientRegister/>
            <AddresRegister/>
            <ContactsRegister/>
            <AllergiesForm/>
          </ScrollView>
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
export default RegisterScreen;

const styles = StyleSheet.create({});
