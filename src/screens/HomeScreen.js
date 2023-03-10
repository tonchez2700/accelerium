import React, { useState, useEffect, useContext } from 'react'
import {
    StyleSheet, View, ScrollView, TouchableOpacity,
    Text, ActivityIndicator, Animated
} from 'react-native';
import { general } from '../theme/customTheme';
import { Icon, Button, Slider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { Context as AccountDataContext } from '../context/AccountDataContext';
import setLicense
import tw from 'tailwind-react-native-classnames'
import EntryList from '../components/EntryList';
import moment from 'moment';

const HomeScreen = () => {


    const navigation = useNavigation();

    const handleScanningFinished = (result) => {
        console.log(result);
    };

    const { state } = useContext(AccountDataContext);

    const renderContent = () => {

        return (
            <View>
                {/* <BlinkID
                    licenseKey="sRwAAAAgY29tLnRvbmNoZXoyNzAwLmFjY2VsZXJpdW1wcnVlYmHBchTg6pO2Os9iNO18Al+CvT6AVwcmqXCK1Op5d0MjkgV+6kuIcYM8rBFRHJhwt4HNg2UYkj4NdVl4f1Dhi9uzLtlC7t6UuTuJwxoKPXNLRebawBHW22lmd0FvC0CfpOfrAvZbtL7fI2Q6YE/sUxetQY48/7U3SF4wOUPtfH1xiXD/3Sdb0RL34GVMvhGcJUkP0DFUD+RilXHpWKw6rdiPskzTzbunQ7Yn"
                    onScanningFinished={handleScanningFinished}
                /> */}
                <Text style={styles.instructions}>Apunta la cámara al documento</Text>
            </View>

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
