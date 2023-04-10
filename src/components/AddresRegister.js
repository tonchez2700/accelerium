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

const AddresRegister = () => {
  const navigation = useNavigation();

  

  const handleScanningFinished = (result) => {
    console.log(result);
  };
  

  const { state } = useContext(AccountDataContext);

  const renderContent = () => {

    
    return (
      <View style={general.container}>
        
        <View style={{alignContent: "flex-start", alignItems: "flex-start", width: "90%", paddingBottom: 5}}>
            <Text style={{color: ColorsG.primary, fontSize: 22, fontWeight: "bold", marginTop: "3%"}}>DOMICILIO</Text>
          </View>
          
           <View style={{width: "95%", height: "89%", borderWidth: 2, borderColor: ColorsG.primary, padding: 22}}>
          

          <View style={{ alignContent: "center",  height: 55, flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
            <View style={{width: "50%"}}>
              <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14,}}>Calle y numero</Text>
              <TextInput placeholder="Calle sin nombre 546" style={{width: "95%", height: "100%", paddingLeft: 16, borderWidth: 1, borderColor: ColorsG.border}}/>
            </View>
            
            <View style={{width: "53%"}}>
              <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14,}}>Colonia</Text>
               <TextInput placeholder="Nueva Colonia" style={{width: "95%", height: "100%", paddingLeft: 16, borderWidth: 1, borderColor: ColorsG.border}}/>
            </View>
          </View>

          <View style={{marginTop: 28}}>
            <Text style={{ paddingTop: 10, paddingLeft: 15, fontSize: 14,}}>Entre calles</Text>
            <View style={{ alignItems: "center", borderWidth: 1, borderColor: ColorsG.border,  height: 55}}>
              <TextInput placeholder="Calle 1 y calle 2" style={{width: "100%", height: "100%", paddingLeft: 10}}/>
            </View>
          </View>

          <View style={{ alignContent: "center",  height: 55, marginTop: 18, flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
            <View style={{width: "50%"}}>
              <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14,}}>C.P.</Text>
              <TextInput placeholder="64000" style={{width: "95%", height: "100%", paddingLeft: 16, borderWidth: 1, borderColor: ColorsG.border}}/>
            </View>
            
            <View style={{width: "53%"}}>
              <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14,}}>Ciudad</Text>
               <TextInput placeholder="Monterrey" style={{width: "95%", height: "100%", paddingLeft: 16, borderWidth: 1, borderColor: ColorsG.border}}/>
            </View>
          </View>

          <View style={{ alignContent: "center",  height: 55, marginTop: 30, flexDirection: "row", justifyContent: "space-between", width: "100%", marginBottom: 22}}>
            <View style={{width: "50%"}}>
              <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14,}}>Estado</Text>
              <TextInput placeholder="Gonzales" style={{width: "95%", height: "100%", paddingLeft: 16, borderWidth: 1, borderColor: ColorsG.border}}/>
            </View>
            
            <View style={{width: "53%",}}>
                <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14,}}>Pais</Text>
                <TextInput placeholder="Perex" style={{width: "95%", height: "100%", paddingLeft: 16, borderWidth: 1, borderColor: ColorsG.border}}/>
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
export default AddresRegister;

const styles = StyleSheet.create({});
