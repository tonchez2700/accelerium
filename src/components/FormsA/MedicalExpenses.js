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

const MedicalExpenses = () => {
  const navigation = useNavigation();

  

  const handleScanningFinished = (result) => {
    console.log(result);
  };
  

  const { state } = useContext(AccountDataContext);

  
  const [isEditable, setIsEditable] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [medicalExpense, setMedicalExpense] = useState("");


  const renderContent = () => {

    
    return (
      <View style={general.container}>
        
          <View style={{alignContent: "center", alignItems: "center", paddingBottom: 5, width: "85%", flexDirection: "row"}}>
            <Text style={{color: ColorsG.primary, fontSize: 22, fontWeight: "bold", marginTop: "3%"}}>GASTOS MEDICOS</Text>
                <CheckBox
              title="Sí"
              checked={isChecked}
              onPress={() => {
                setIsChecked(true);
                setIsEditable(true);
              }}
            />
            <CheckBox
              title="No"
              checked={!isChecked}
              onPress={() => {
                setIsChecked(false);
                setIsEditable(false);
              }}
            />
          </View>
          
           <View style={{width: "95%", height: "70%", borderWidth: 2, borderColor: ColorsG.primary, padding: 22, justifyContent: "flex-start", alignContent: "flex-start", borderRadius: 4}}>
            <Text style={{  paddingLeft: 15, fontSize: 14, alignContent: "flex-start"}}>Cuales</Text>
              <View style={{width: "95%", height: "70%", borderWidth: 2, borderColor: ColorsG.primary, padding: 22, justifyContent: "center", alignContent: "flex-start", borderRadius: 4}}>
               
                    <TextInput placeholder="GASTOS MEDICOS" style={{width: "100%", height: "100%", paddingLeft: 10, fontSize: 20}} editable={isEditable} />
                    
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
export default MedicalExpenses;

const styles = StyleSheet.create({
  Buttons:{
    height: 55, 
    width: "50%", 
    backgroundColor: ColorsG.primary
  }
});
