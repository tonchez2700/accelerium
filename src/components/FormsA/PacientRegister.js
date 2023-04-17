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
  Platform,
} from "react-native";
import { general } from "../../theme/customTheme";
import { Icon, Button, Slider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Context as AccountDataContext } from "../../context/AccountDataContext";
import EntryList from "../EntryList";
import moment from "moment";
import { ColorsG } from "../../../constants/ColorsGlobal";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SelectDropdown from 'react-native-select-dropdown'
import DateTimePicker from '@react-native-community/datetimepicker';
import MaskInput from 'react-native-mask-input';
//import MaskInput from 'react-native-mask-input';



const PatientRegister = () => {
  const navigation = useNavigation();

  
            
  const handleScanningFinished = (result) => {
    console.log(result);
  };
  

  const { state } = useContext(AccountDataContext);

  const renderContent = () => {
    const [selectedDate, setSelectedDate] = useState();
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    //Numero telefonico 
    const [personalphone, setPersonalPhone] = React.useState('');

    //TimePikerInit
    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const [textdate, setTextDate] = useState('');
    
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
      let tempDate = new Date(currentDate);
      let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
      let fTime = 'Hora: ' + tempDate.getHours() + ':' + tempDate.getMinutes(); 
      setText(fTime);
      setTextDate(fDate);
    } 

    
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    }

    const sexNames = ["Masculino", "Femeninio", ]
    const stateMarriage = ["Soltero/a", "Casado/a", "Viudo/a", "Divorciado/a", "Unión libre", "Concubinato", "'Separado/a", "Matrimonio"]


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

    const handlePhoneChange = (maskedText, rawText) => {
      setPhoneNumber(rawText);
    };


    
    return (
      <View style={general.container}>
        
          <View style={{alignContent: "flex-start", alignItems: "flex-start", width: "90%", paddingBottom: 5}}>
            <Text style={styles.textTitle}>HOJA DE ADMISIÓN</Text>
          </View>
           <View style={{width: "95%", height: "95%", borderWidth: 2, borderColor: ColorsG.primary, padding: 22}}>
          <Text style={{ marginTop: 10, paddingLeft: 15, fontSize: 14,}}>No. Expediente</Text>
          <View style={{ alignItems: "center", borderWidth: 1, borderColor: ColorsG.border,  height: 55}}>
            <TextInput placeholder="ABCD12345" style={{width: "100%", height: "100%", paddingLeft: 16, fontSize: 20}}/>
          </View>

          <View style={{ alignContent: "center",  height: 55, marginTop: 22, flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
            <View style={{width: "50%"}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignContent:"center", alignItems: "center", borderWidth: 1, height: 50, width: 350 }}>
                    <View>
                        <Text style={{ marginTop: 2, paddingLeft: 20, fontSize: 14, backgroundColor: "#F7F8FA"}}>Fecha</Text>
                        <Text style={{paddingLeft: 10, fontSize: 20, marginBottom: 20}}>{textdate}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => showMode('date')}
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
                <View style={{flexDirection: "row", justifyContent: "space-between", alignContent:"center", alignItems: "center", borderWidth: 1, height: 50, width: 370 }}>
                    <View>
                        <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14, backgroundColor: "#F7F8FA"}}>Hora</Text>
                        <Text style={{paddingLeft: 10, fontSize: 20, marginBottom: 20}}>{text}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => showMode('time')}
                        style={{paddingRight: 20, paddingTop: 10}}
                    >
                        <Icon type='font-awesome' name='clock-o' size={26} color={ColorsG.primary} />
                        { show && 
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={date}
                          mode={mode}
                          is24Hour={true}
                          display="default"
                          onChange={onChange}
                          />
                        }
                    </TouchableOpacity>
                </View>
              
            </View>
          </View>

          <View style={{marginTop: 14}}>
            <View style={{flexDirection: "row"}}>
              <Text style={{ paddingTop: 10, paddingLeft: 15, fontSize: 14,}}>Nombre(s)</Text>
              <Text style={{color: "red"}}>*</Text>
            </View>
            
            <View style={{ alignItems: "center", borderWidth: 1, borderColor: ColorsG.border,  height: 55}}>
              <TextInput placeholder="Juan Manuel" style={{width: "100%", height: "100%", paddingLeft: 10, fontSize: 20}}/>
            </View>
          </View>

          <View style={{ alignContent: "center",  height: 55, marginTop: 18, flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
            <View style={{width: "50%"}}>
              <View style={{flexDirection: "row"}}>
                <Text style={{ paddingTop: 10, paddingLeft: 15, fontSize: 14,}}>Apellido paterno</Text>
                <Text style={{color: "red"}}>*</Text>
              </View>
              <TextInput placeholder="Gonzales" style={{width: "95%", height: "100%", paddingLeft: 16, borderWidth: 1, borderColor: ColorsG.border, fontSize: 20}}/>
            </View>
            
            <View style={{width: "53%"}}>
              <Text style={{ marginTop: 10, paddingLeft: 15, fontSize: 14,}}>Apellido Materno</Text>
               <TextInput placeholder="Perex" style={{width: "95%", height: "100%", paddingLeft: 16, borderWidth: 1, borderColor: ColorsG.border, fontSize: 20}}/>
            </View>
          </View>

          <View style={{marginTop: 26}}>
            <Text style={{ paddingTop: 10, paddingLeft: 15, fontSize: 14,}}>CURP</Text>
            <View style={{ alignItems: "center", borderWidth: 1, borderColor: ColorsG.border,  height: 55}}>
              <TextInput placeholder="GOPJ690816HNLNNL08" style={{width: "100%", height: "100%", paddingLeft: 10, fontSize: 20}}/>
            </View>
          </View>

          <View style={{ alignContent: "center",  height: 60, marginTop: 18, flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
            <View style={{width: "50%"}}>
              <View style={{flexDirection: "row"}}>
                <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14,}}>Sexo</Text>
                <Text style={{color: "red"}}>*</Text>
              </View>
              
              <SelectDropdown
                data={sexNames}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonStyle={{backgroundColor: "#F7F8FA", width: "95%", borderColor: ColorsG.border, borderWidth: 1 }}
                defaultButtonText="Selecciona una opción"
                
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
              
              <SelectDropdown
                data={stateMarriage}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonStyle={{backgroundColor: "#F7F8FA", width: "95%", borderColor: ColorsG.border, borderWidth: 1 }}
                defaultButtonText="Selecciona una opción"
                
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                  return item
                }}
              />
            </View>
          </View>

          <View style={{ alignContent: "center",  height: 55, marginTop: 33, flexDirection: "row", justifyContent: "space-between", width: "100%"}}>
            <View style={{width: "50%"}}>
                  <View style={{flexDirection: "row", justifyContent: "space-between", alignContent:"center", alignItems: "center", borderWidth: 1, height: 60, width: 350, marginTop: 15 }}>
                      <View>
                          <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14, backgroundColor: "#F7F8FA"}}>Fecha de Nacimiento</Text>
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
                
            <View style={{width: "53%"}}>
              <Text style={{ marginTop: 2, paddingLeft: 15, fontSize: 14,}}>Edad</Text>
               <TextInput placeholder="54 años" style={{width: "95%", height: "100%", paddingLeft: 16, borderWidth: 1, borderColor: ColorsG.border, fontSize: 20}}/>
            </View>
          </View>

          <View style={{marginTop: 33}}>
            <Text style={{ paddingTop: 10, paddingLeft: 15, fontSize: 14,}}>Correo</Text>
            <View style={{ alignItems: "center", borderWidth: 1, borderColor: ColorsG.border,  height: 55}}>
              <TextInput placeholder="juan.manuel@correo.com.mx" style={{width: "100%", height: "100%", paddingLeft: 10, fontSize: 20}}/>
            </View>
          </View>

          <View style={{marginTop: 15}}>
            <View style={{flexDirection: "row"}}>
              <Text style={{ paddingTop: 10, paddingLeft: 15, fontSize: 14,}}>Telefono</Text>
              <Text style={{color: "red"}}>*</Text>
            </View>
            
            <View style={{ alignItems: "flex-start", borderWidth: 1, borderColor: ColorsG.border,  height: 55, alignContent: "center", width: "100%", justifyContent: "center"}}>
                <MaskInput
                  value={personalphone}
                  style={{fontSize: 18, paddingLeft: 10}}
                  onChangeText={(masked, unmasked) => {
                    setPersonalPhone(masked); // you can use the unmasked value as well

                    // assuming you typed "9" all the way:
                    console.log(masked); // (99) 99999-9999
                    console.log(unmasked); // 99999999999
                  }}
                  mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                />
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

const styles = StyleSheet.create({
  textTitle: {
    color: ColorsG.primary, 
    fontSize: 22, 
    fontWeight: "bold", 
    marginTop: "3%"
  }
});
