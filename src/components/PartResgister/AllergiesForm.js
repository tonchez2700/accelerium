import React, { useState, useEffect, useContext, } from "react";
import { StyleSheet, View, Text, TextInput, LayoutAnimation, UIManager } from "react-native";
import { RegisterStyle } from "../../theme/customTheme";
import { Icon, Button, CheckBox } from "react-native-elements";
import moment from "moment";

const AllergiesForm = ({ data, onChangeText }) => {

  const [check2, setCheck2] = useState();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = (id, type) => {
    setCheck2(id)
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(type);
  };
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <View style={RegisterStyle.container}>
      <Text style={RegisterStyle.TittlePage}>ALERGIAS</Text>
      <View style={{ borderWidth: 2.3, borderColor: '#003C71', padding: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <CheckBox
            title='Si'
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            iconRight
            checkedColor='#003C71'
            textStyle={{ fontSize: 26 }}
            containerStyle={{ backgroundColor: '#FFFFFF', borderWidth: 0 }}
            checked={check2 === 0}
            onPress={() => {
              toggleAccordion(0, true)
              onChangeText(1, 'has_alergy', 'patient')
            }}
          />
          <CheckBox
            title='No (Sin alergias)'
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor='#003C71'
            textStyle={{ fontSize: 26 }}
            containerStyle={{ backgroundColor: '#FFFFFF', borderWidth: 0 }}
            iconRight
            checked={check2 === 1}
            onPress={() => {
              toggleAccordion(1, false)
              onChangeText(0, 'has_alergy', 'patient')
            }}
          />
        </View>
        {isExpanded && (
          <View style={[RegisterStyle.ViewBoder, { flex: 1 }]}>
            <Text style={RegisterStyle.TextBoder}>Alergia</Text>
            <TextInput
              fontSize={24}
              placeholder="Alergia a"
              style={RegisterStyle.Input}
              value={data?.patient?.alergies}
              onChangeText={(value) => onChangeText(value, 'alergies', 'patient')}
            />
          </View>
        )}
      </View>
    </View>
  );
};
export default AllergiesForm;

const styles = StyleSheet.create({});
