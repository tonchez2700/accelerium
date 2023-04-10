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
import moment from "moment";
import { ColorsG } from "../../constants/ColorsGlobal";
import { FontAwesome } from "@expo/vector-icons";

const AllergiesForm = () => {
  const navigation = useNavigation();

  

  const handleScanningFinished = (result) => {
    console.log(result);
  };
  

  const { state } = useContext(AccountDataContext);

  const renderContent = () => {

    
    return (
      <View style={general.container}>
        
          <View style={{alignContent: "flex-start", alignItems: "flex-start", paddingBottom: 5, width: "85%"}}>
            <Text style={{color: ColorsG.primary, fontSize: 22, fontWeight: "bold", marginTop: "3%"}}>ALERGIAS</Text>
          </View>
          
           <View style={{width: "95%", height: "70%", borderWidth: 2, borderColor: ColorsG.primary, padding: 22}}>

           <View style={{}}>
            <Text style={{  paddingLeft: 15, fontSize: 14,}}>Medicamentos</Text>
            <View style={{ alignItems: "center", borderWidth: 1, borderColor: ColorsG.border,  flex: 1}}>
              <TextInput placeholder="Maria Ester Ramirewz Castañeda" style={{width: "100%", height: 55, paddingLeft: 10}}/>
            </View>
          </View>

          

          <View style={{marginTop: 28}}>
            <Text style={{ paddingTop: 10, paddingLeft: 15, fontSize: 14,}}>Alimentos</Text>
            <View style={{ alignItems: "center", borderWidth: 1, borderColor: ColorsG.border,  height: 55}}>
              <TextInput placeholder="..." style={{width: "100%", height: "100%", paddingLeft: 10}}/>
            </View>
          </View>

          
         
        </View>

        <View style={{marginTop: 25, width: "80%", flexDirection: "row", justifyContent: "space-between"}}>
            {/* <TouchableOpacity style={styles.Buttons}>
              <Text style={{color: "#fff"}}>PressMe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Buttons}>
              <Text style={{color: "#fff"}}>PressMe222</Text>
            </TouchableOpacity> */}
            <Button title={"button1"}/>
            
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
export default AllergiesForm;

const styles = StyleSheet.create({
  Buttons:{
    height: 55, 
    width: "50%", 
    backgroundColor: ColorsG.primary
  }
});
