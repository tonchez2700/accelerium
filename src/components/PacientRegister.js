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
import { MaterialIcons } from '@expo/vector-icons'; 
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ComboBox from 'react-native-combobox';
import SelectDropdown from 'react-native-select-dropdown'


const PatientRegister = () => {
  const navigation = useNavigation();

  
            
  const handleScanningFinished = (result) => {
    console.log(result);
  };
  

  const { state } = useContext(AccountDataContext);

  const renderContent = () => {
    const [selectedDate, setSelectedDate] = useState();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const countries = ["Masculino", "Femeninio", ]


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };

    
    return (
      <View style={general.container}>
        
          <View style={{alignContent: "flex-start", alignItems: "flex-start", width: "90%", paddingBottom: 5}}>
            <Text style={{color: ColorsG.primary, fontSize: 22, fontWeight: "bold", marginTop: "3%"}}>HOJA DE ADMISIÓN</Text>
          </View>
           <View style={{width: "95%", height: "95%", borderWidth: 2, borderColor: ColorsG.primary, padding: 22}}>
          <Text style={{ marginTop: 10, paddingLeft: 15, fontSize: 14,}}>No. Expediente</Text>
          <View style={{ alignItems: "center", borderWidth: 1, borderColor: ColorsG.border,  height: 55}}>
            <TextInput placeholder="ABCD12345" style={{width: "100%", height: "100%", paddingLeft: 16}}/>
          </View>

          <View style={{ alignContent: "center",  height: 55, marginTop: 22, flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
            <View style={{width: "50%"}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignContent:"center", alignItems: "center", borderWidth: 1, height: 60, width: 320 }}>
                    <View>
                        <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14, backgroundColor: "#F7F8FA"}}>Fecha</Text>
                        <Text style={{paddingLeft: 10, fontSize: 20}}>{`Fecha:  ${selectedDate? moment(selectedDate).format("MM/DD/YYYY"):"MM/DD/YYYY"}`}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={showDatePicker}
                        style={{paddingRight: 20, paddingTop: 10}}
                    >
                        <MaterialIcons name="date-range" size={26} color={ColorsG.primary} />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                        
                    </TouchableOpacity>
                </View>
              
            </View>
            
            <View style={{width: "50%"}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignContent:"center", alignItems: "center", borderWidth: 1, height: 60, width: 370 }}>
                    <View>
                        <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14, backgroundColor: "#F7F8FA"}}>Hora</Text>
                        <Text style={{paddingLeft: 10, fontSize: 20}}>{`Fecha:  ${selectedDate? moment(selectedDate).format("MM/DD/YYYY"):"MM/DD/YYYY"}`}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={showDatePicker}
                        style={{paddingRight: 20, paddingTop: 10}}
                    >
                        <MaterialIcons name="date-range" size={26} color={ColorsG.primary} />
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                        
                    </TouchableOpacity>
                </View>
              
            </View>
          </View>

          <View style={{marginTop: 28}}>
            <View style={{flexDirection: "row"}}>
              <Text style={{ paddingTop: 10, paddingLeft: 15, fontSize: 14,}}>Nombre(s)</Text>
              <Text style={{color: "red"}}>*</Text>
            </View>
            
            <View style={{ alignItems: "center", borderWidth: 1, borderColor: ColorsG.border,  height: 55}}>
              <TextInput placeholder="Juan Manuel" style={{width: "100%", height: "100%", paddingLeft: 10}}/>
            </View>
          </View>

          <View style={{ alignContent: "center",  height: 55, marginTop: 18, flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
            <View style={{width: "50%"}}>
              <View style={{flexDirection: "row"}}>
                <Text style={{ paddingTop: 10, paddingLeft: 15, fontSize: 14,}}>Apellido paterno</Text>
                <Text style={{color: "red"}}>*</Text>
              </View>
              <TextInput placeholder="Gonzales" style={{width: "95%", height: "100%", paddingLeft: 16, borderWidth: 1, borderColor: ColorsG.border}}/>
            </View>
            
            <View style={{width: "53%"}}>
              <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14,}}>Apellido Materno</Text>
               <TextInput placeholder="Perex" style={{width: "95%", height: "100%", paddingLeft: 16, borderWidth: 1, borderColor: ColorsG.border}}/>
            </View>
          </View>

          <View style={{marginTop: 26}}>
            <Text style={{ paddingTop: 10, paddingLeft: 15, fontSize: 14,}}>CURP</Text>
            <View style={{ alignItems: "center", borderWidth: 1, borderColor: ColorsG.border,  height: 55}}>
              <TextInput placeholder="GOPJ690816HNLNNL08" style={{width: "100%", height: "100%", paddingLeft: 10}}/>
            </View>
          </View>

          <View style={{ alignContent: "center",  height: 60, marginTop: 18, flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
            <View style={{width: "50%"}}>
              <View style={{flexDirection: "row"}}>
                <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14,}}>Sexo</Text>
                <Text style={{color: "red"}}>*</Text>
              </View>
              
              <SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonStyle={{backgroundColor: "red", flex: 1 }}
                
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
              />
            
            </View>
            
            <View style={{width: "53%"}}>
              <View style={{flexDirection: "row"}}>
                <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14,}}>Estado Civil</Text>
                <Text style={{color: "red"}}>*</Text>
              </View>
              
               <TextInput placeholder="Perex" style={{width: "95%", height: "100%", paddingLeft: 16, borderWidth: 1, borderColor: ColorsG.border}}/>
            </View>
          </View>

          <View style={{ alignContent: "center",  height: 55, marginTop: 33, flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
            <View style={{width: "50%"}}>
              <View style={{flexDirection: "row"}}>
                <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14,}}>Fecha de Nacimiento</Text>
                <Text style={{color: "red"}}>*</Text>
              </View>
              
              <TextInput placeholder="16 - Agosto - 1969" style={{width: "95%", height: "100%", paddingLeft: 16, borderWidth: 1, borderColor: ColorsG.border}}/>
            </View>
            
            <View style={{width: "53%"}}>
              <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14,}}>Edad</Text>
               <TextInput placeholder="54 años" style={{width: "95%", height: "100%", paddingLeft: 16, borderWidth: 1, borderColor: ColorsG.border}}/>
            </View>
          </View>

          <View style={{marginTop: 33}}>
            <Text style={{ paddingTop: 10, paddingLeft: 15, fontSize: 14,}}>Correo</Text>
            <View style={{ alignItems: "center", borderWidth: 1, borderColor: ColorsG.border,  height: 55}}>
              <TextInput placeholder="juan.manuel@correo.com.mx" style={{width: "100%", height: "100%", paddingLeft: 10}}/>
            </View>
          </View>

          <View style={{marginTop: 15}}>
            <View style={{flexDirection: "row"}}>
              <Text style={{ paddingTop: 10, paddingLeft: 15, fontSize: 14,}}>Telefono</Text>
              <Text style={{color: "red"}}>*</Text>
            </View>
            
            <View style={{ alignItems: "center", borderWidth: 1, borderColor: ColorsG.border,  height: 55}}>
              <TextInput placeholder="818 1223 345" style={{width: "100%", height: "100%", paddingLeft: 10}}/>
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
export default PatientRegister;

const styles = StyleSheet.create({});
