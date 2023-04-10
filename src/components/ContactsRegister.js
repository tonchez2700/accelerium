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

const ContactsRegister = () => {
  const navigation = useNavigation();

  

  const handleScanningFinished = (result) => {
    console.log(result);
  };
  

  const { state } = useContext(AccountDataContext);

  const renderContent = () => {

    
    return (
      <View style={general.container}>
        
          <View style={{alignContent: "flex-start", alignItems: "flex-start", width: "90%", paddingBottom: 5}}>
            <Text style={{color: ColorsG.primary, fontSize: 22, fontWeight: "bold", marginTop: "3%"}}>CONTACTOS</Text>
          </View>
          
           <View style={{width: "95%", height: "88%", borderWidth: 2, borderColor: ColorsG.primary, padding: 22}}>

           <View style={{}}>
            <Text style={{  paddingLeft: 15, fontSize: 14,}}>Persona Responsable</Text>
            <View style={{ alignItems: "center", borderWidth: 1, borderColor: ColorsG.border,  height: 55}}>
              <TextInput placeholder="Maria Ester Ramirewz Castañeda" style={{width: "100%", height: "100%", paddingLeft: 10}}/>
            </View>
          </View>

          

          <View style={{ alignContent: "center",  height: 55, flexDirection: "row", justifyContent: "space-between", width: "100%", paddingTop: 5}}>
            <View style={{width: "50%"}}>
              <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14,}}>Relación</Text>
              <TextInput placeholder="Esposa" style={{width: "95%", height: "100%", paddingLeft: 16, borderWidth: 1, borderColor: ColorsG.border}}/>
            </View>
            
            <View style={{width: "53%"}}>
              <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14,}}>Telefono</Text>
               <TextInput placeholder="811 567 8901" style={{width: "95%", height: "100%", paddingLeft: 16, borderWidth: 1, borderColor: ColorsG.border}}/>
            </View>
          </View>

          <View style={{marginTop: 28}}>
            <Text style={{ paddingTop: 10, paddingLeft: 15, fontSize: 14,}}>Persona de Emergencia</Text>
            <View style={{ alignItems: "center", borderWidth: 1, borderColor: ColorsG.border,  height: 55}}>
              <TextInput placeholder="julio Gonzales Ramirez" style={{width: "100%", height: "100%", paddingLeft: 10}}/>
            </View>
          </View>

          <View style={{ alignContent: "center",  height: 55, marginTop: 18, flexDirection: "row", justifyContent: "space-between", width: "100%", paddingBottom: 10}}>
            <View style={{width: "50%"}}>
              <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14,}}>Relacion</Text>
              <TextInput placeholder="Hijo" style={{width: "95%", height: "100%", paddingLeft: 16, borderWidth: 1, borderColor: ColorsG.border}}/>
            </View>
            
            <View style={{width: "53%"}}>
              <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14,}}>Telefono</Text>
               <TextInput placeholder="8115678901" style={{width: "95%", height: "100%", paddingLeft: 16, borderWidth: 1, borderColor: ColorsG.border}}/>
            </View>
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
export default ContactsRegister;

const styles = StyleSheet.create({});
