import React, { useState, useEffect, useContext } from 'react'
import {
    StyleSheet, View, ScrollView, TextInput,
    Text, ActivityIndicator
} from 'react-native';
import { RegistrationStyle } from '../theme/customTheme';
import { Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { Context as RegistrationContext } from '../context/RegistrationContext';
import { AccordionItem } from 'react-native-accordion-list-view';
import AnimetedText from '../components/AnimetedText';
import ModalAlert from '../components/Modal/ModalAlert';
import tw from 'tailwind-react-native-classnames'


const PatientRegistrationScreen = () => {


    const navigation = useNavigation();
    const { state, } = useContext(RegistrationContext);
    const [text, setText] = useState('');
    const [height, setHeight] = useState(35);
    const renderContent = () => {

        return (
            <ScrollView style={RegistrationStyle.container}>

                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', }}>
                    <View style={[RegistrationStyle.ViewBoder, { flex: 1 }]}>
                        <Text style={RegistrationStyle.TextBoder}>Expediente / Nombre / Apellidos</Text>
                        <TextInput
                            style={RegistrationStyle.Input}
                            value={text}
                            onChangeText={setText}
                        />
                    </View>
                    <View style={[RegistrationStyle.ViewBoder, { flex: 1 }]}>
                        <Text style={RegistrationStyle.TextBoder}>Fecha</Text>
                        <TextInput
                            style={RegistrationStyle.Input}
                            value={text}
                            onChangeText={setText}
                        />
                    </View>
                </View>

                <View style={[RegistrationStyle.ViewBoder, { flex: 1 }]}>
                    <Text style={RegistrationStyle.TextBoder}>Nombre</Text>
                    <TextInput
                        style={RegistrationStyle.Input}
                        value={text}
                        onChangeText={setText}
                    />
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', }}>
                    <View style={[RegistrationStyle.ViewBoder, { flex: 1 }]}>
                        <Text style={RegistrationStyle.TextBoder}>Fecha de nacimiento</Text>
                        <TextInput
                            style={RegistrationStyle.Input}
                            value={text}
                            onChangeText={setText}
                        />
                    </View>
                    <View style={[RegistrationStyle.ViewBoder, { flex: 1 }]}>
                        <Text style={RegistrationStyle.TextBoder}>Edad</Text>
                        <TextInput
                            style={RegistrationStyle.Input}
                            value={text}
                            onChangeText={setText}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', }}>
                    <View style={[RegistrationStyle.ViewBoder, { flex: 1 }]}>
                        <Text style={RegistrationStyle.TextBoder}>Número de expediente</Text>
                        <TextInput
                            style={RegistrationStyle.Input}
                            value={text}
                            onChangeText={setText}
                        />
                    </View>
                    <View style={[RegistrationStyle.ViewBoder, { flex: 1 }]}>
                        <Text style={RegistrationStyle.TextBoder}>Sexo</Text>
                        <TextInput
                            style={RegistrationStyle.Input}
                            value={text}
                            onChangeText={setText}
                        />
                    </View>
                </View>
                <Text style={{ fontSize: 30, textAlign: 'center', color: '#003C71', fontWeight: 'bold' }}>
                    ¿Alergias a algún medicamento, alimento o sustancia?
                </Text>
                <View style={[RegistrationStyle.ViewBoder, { flex: 1 }]}>
                    <Text style={RegistrationStyle.TextBoder}>Alergias</Text>
                    <TextInput
                        style={RegistrationStyle.Input}
                        value={text}
                        onChangeText={setText}
                    />
                </View>


                <AnimetedText title="ANTECEDENTES HEREDOFAMILIARES" content={
                    <View style={{ flex: 1, padding: 10, }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 26, color: '#003C71', fontWeight: 'bold' }}>Diabetes</Text>
                            <TextInput
                                style={[RegistrationStyle.InputAcordion, { flex: 1 }]}
                                value={text}
                                onChangeText={setText}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 26, color: '#003C71', fontWeight: 'bold' }}>Cáncer</Text>
                            <TextInput
                                style={[RegistrationStyle.InputAcordion, { flex: 1 }]}
                                value={text}
                                onChangeText={setText}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 26, color: '#003C71', fontWeight: 'bold' }}>Cardiopatías</Text>
                            <TextInput
                                style={[RegistrationStyle.InputAcordion, { flex: 1 }]}
                                value={text}
                                onChangeText={setText}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 26, color: '#003C71', fontWeight: 'bold' }}>Enfermedades tiroideas</Text>
                            <TextInput
                                style={[RegistrationStyle.InputAcordion, { flex: 1 }]}
                                value={text}
                                onChangeText={setText}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 26, color: '#003C71', fontWeight: 'bold' }}>Otras enfermedades</Text>
                            <TextInput
                                style={[RegistrationStyle.InputAcordion, { flex: 1 }]}
                                value={text}
                                onChangeText={setText}
                            />
                            <TextInput
                                value={text}
                                onContentSizeChange={(event) => {
                                    const { height } = event.nativeEvent.contentSize;
                                    setHeight(height);
                                }}
                                style={[RegistrationStyle.InputAcordion, { flex: 1, marginTop: 15, height: Math.max(100, height) }]}
                                multiline={true}
                                onChangeText={setText}
                            />
                        </View>
                    </View>
                } />
                <ModalAlert />
            </ScrollView >
        );
    }

    return (
        !state.fetchingData
            ?
            !state.error
                ?
                renderContent()
                :
                <View style={tw`flex-1 p-5 justify-center items-center`}>
                    <Text style={tw`text-center text-lg mb-3`}>
                        {state.message}
                    </Text>
                    <Button
                        containerStyle={{ width: 120 }}
                        buttonStyle={[{ backgroundColor: '#118ea6' }]}
                        title="Actualizar"
                        onPress={() => console.log('error')}
                    />
                </View>
            :
            <ActivityIndicator size="large" color="#118EA6" style={tw`mt-5`} />
    )
}
export default PatientRegistrationScreen

const styles = StyleSheet.create({})
