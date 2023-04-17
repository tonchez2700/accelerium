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
import { general } from "../../theme/customTheme";
import { Icon, Button, Slider, CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Context as AccountDataContext } from "../../context/AccountDataContext";
import moment from "moment";
import { ColorsG } from "../../../constants/ColorsGlobal";
import { FontAwesome } from "@expo/vector-icons";

const ServicesRegister = () => {
  const navigation = useNavigation();

  const [isEditable, setIsEditable] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleScanningFinished = (result) => {
    console.log(result);
  };
  
  const { state } = useContext(AccountDataContext);


  const renderContent = () => {

    
    return (
      <View style={general.container}>
        
        <View style={{alignContent: "center", alignItems: "center", paddingBottom: 5, width: "85%", flexDirection: "row"}}>
            <Text style={{color: ColorsG.primary, fontSize: 22, fontWeight: "bold", marginTop: "3%"}}>SERVICIOS</Text>
            <CheckBox
            title="Ver Servicio anterior"
            checked={isChecked}
            onPress={() => {
              setIsChecked(!isChecked);
              setIsEditable(true);
            }}
          />
          </View>
          
           <View style={{width: "95%", height: "50%", borderWidth: 2, borderColor: ColorsG.primary, padding: 22, justifyContent: "flex-start", alignContent: "flex-start", borderRadius: 4}}>
            <View style={{flexDirection: "row"}}>
                <Text style={{paddingLeft: 15, fontSize: 14, alignContent: "flex-start"}}>SERVICIOS</Text>
                <Text style={{color: "red"}}>*</Text>
            </View>
            
            <View style={{ alignItems: "center", borderWidth: 1, borderColor: ColorsG.border,  height: 55}}>
              <TextInput placeholder="SERVICIOS" style={{width: "100%", height: "100%", paddingLeft: 10, fontSize: 20}}/>
            </View>
          </View>

        <View style={{width: "95%", height: 60, paddingTop: 25}}>
          <View style={{flexDirection: "row", flex: 1, justifyContent: "space-between"}}>
          <TouchableOpacity 
            style={{width: "20%", backgroundColor: ColorsG.primary, alignContent: "center", alignItems: "center", justifyContent: "center"}}
            onPress={()=> navigation.navigate("Inicio")}>
                <Text style={styles.butonsText}>CANCELAR</Text>
              </TouchableOpacity>
            <View style={{flexDirection: "row", justifyContent: "space-between", width: "65%"}}>
              <TouchableOpacity style={styles.Buttons}>
                <Text style={styles.butonsText}>GUARDAR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.Buttons}>
                <Text style={styles.butonsText}>GUARDAR E IMPRIMIR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* <View style={{marginTop: 25, width: "69%", flexDirection: "row", justifyContent: "space-between", borderWidth: 1, height: 80, alignContent: "center", alignItems: "center"}}>
        
          <TouchableOpacity style={{backgroundColor: "red", width: "45%"}}>
            <Text>Botton 1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Botton 1</Text>
          </TouchableOpacity>
          
            {/* <TouchableOpacity style={styles.Buttons}>
              <Text style={{color: "#fff"}}>PressMe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Buttons}>
              <Text style={{color: "#fff"}}>PressMe222</Text>
            </TouchableOpacity> */} 

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
export default ServicesRegister;

const styles = StyleSheet.create({
  Buttons:{
    width: "40%", 
    backgroundColor: ColorsG.primary, 
    alignContent: "center", 
    alignItems: "center", 
    justifyContent: "center"
  },
  butonsText: {
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "500"
  }
});
