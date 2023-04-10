import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { ColorsG } from '../../../constants/ColorsGlobal'

const ButtonFrom = ({ handleSubmit, ...otherProps }) => {
    return (
        <View style={{ flexDirection: 'row', zIndex: -1, elevation: -1, marginTop: 20 }}>
            <View style={{ flex: 1, marginBottom: 15 }}>
                <Button buttonStyle={{ backgroundColor: ColorsG.primary, borderRadius: 5 }} onPress={handleSubmit} title="Iniciar Sesión" {...otherProps} />
            </View>
        </View>
    )
}

export default ButtonFrom
