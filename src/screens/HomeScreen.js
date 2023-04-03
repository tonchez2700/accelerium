import React, { useState, useEffect, useContext } from 'react'
import {
    StyleSheet, View, ScrollView, TouchableOpacity,
    Text, ActivityIndicator, Animated
} from 'react-native';
import { general } from '../theme/customTheme';
import { Icon, Button, Slider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { Context as AccountDataContext } from '../context/RegistrationContext';
import tw from 'tailwind-react-native-classnames'
import MenuItem from '../components/MenuItem';
import moment from 'moment';

const HomeScreen = () => {


    const navigation = useNavigation();

    const handleScanningFinished = (result) => {
        console.log(result);
    };

    const { state } = useContext(AccountDataContext);

    const renderContent = () => {

        return (
            <View style={{ flex: 1, backgroundColor: '#F7F8FAF', padding: 20, }}>
                <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 20, borderWidth: 1, borderColor: '#7F7F7F', borderRadius: 10, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%' }}>
                        <MenuItem
                            title='REGISTRO DE PACIENTES'
                            icon='user-plus'
                            color='#003C71'
                            fontFamily='font-awesome-5'
                            navigateScreen='PatientRegistration' />
                        <MenuItem
                            title='PACIENTES'
                            icon='user'
                            color='#003C71'
                            fontFamily='font-awesome-5'
                            navigateScreen='PatientRegistration' />
                    </View>
                </View >
            </View >

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
                        onPress={() => setDataAccount()}
                    />
                </View>
            :
            <ActivityIndicator size="large" color="#118EA6" style={tw`mt-5`} />
    )
}
export default HomeScreen

const styles = StyleSheet.create({})
