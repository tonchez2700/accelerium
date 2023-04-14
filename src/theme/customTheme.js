import { StyleSheet } from 'react-native';



export const general = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20
    },
    Tittle: {
        marginTop: 43,
        fontSize: 29,
        color: '#6C6767',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textCardQuiz: {

        fontSize: 14,
        color: '#6C6767',
        lineHeight: 14,
        textAlign: 'left',
        fontWeight: '700',
    },
    textCountCuestions: {
        fontSize: 12,
        lineHeight: 12,
        textAlign: 'left',
        fontWeight: '500',
    },
    CardIconQuiz: {

        backgroundColor: '#012B54',
        height: 39,
        width: 37,
        justifyContent: 'center',
        borderRadius: 4

    },
    CardQuiz: {
        borderWidth: 1,
        borderColor: '#B7B7B7',
        padding: 5,
        flexDirection: 'row',
        width: '100%'

    },
})

export const RegistrationStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    ViewBoder: {
        borderWidth: 2,
        borderColor: '#7F7F7F',
        padding: 10,
        margin: 10,
        position: 'relative',
        borderRadius: 4
    },
    TextBoder: {
        position: 'absolute',
        top: -10,
        left: 10,
        backgroundColor: 'white',
        paddingHorizontal: 5,
        fontSize: 16
    },
    Input: {
        paddingLeft: 20,
    },
    InputAcordion: {
        borderWidth: 2,
        borderColor: '#7F7F7F',
        padding: 10,
        borderRadius: 4
    },
    PersonalPato: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: '#7F7F7F',
        padding: 10,
        position: 'relative',
        borderRadius: 4,

    },

})