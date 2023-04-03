import { Alert } from 'react-native'
import createDataContext from './createDataContext'
import AsyncStorage from '@react-native-async-storage/async-storage';
import httpClient from '../services/httpClient'
import * as rootNavigation from '../helpers/rootNavigation';
import { INVITED_ENTRY_TYPE, PROVIDER_ENTRY_TYPE, SERVICE_ENTRY_TYPE } from '../config/defines';
import moment from 'moment';

const initialState = {
    error: false,
    message: null,
    isVisible: false,
    fetchingData: false,
    indexSection: 0,
    indexQuestion: 0,
    questionnaire: [],
    sections: [],
    questionSection: '',
    questions: '',

}

const RegistrationReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CLEAR_STATE':
            return {
                ...initialState,
            }
        case 'FETCHING_DATA':
            return { ...state, fetchingData: action.payload.fetchingData }
        case 'SET_REQUEST_ERROR':
            return {
                ...state,
                error: true,
                message: action.payload.message,
                fetchingData: false
            }
        case 'SET_REQUEST_PAYMENTS':
            return {
                ...state,
                payments: action.payload.response,
                fetchingData: false
            }
        case 'SET_QUESTIONARY_USER':
            return {
                ...state,
                questionnaire: action.payload.response,
                fetchingData: false
            }
        case 'SET_SECTIONS_USER':
            return {
                ...state,
                questionSection: action.payload.data,
                fetchingData: false
            }
        case 'SET_QUESTION_USER':
            return {
                ...state,
                questions: action.payload.data,
                fetchingData: false
            }
        case 'CHANGE_VISIBLE_MODAL':
            let visibleCheck = !state.isVisible
            return {
                ...state,
                error: false,
                message: '',
                fetchingData: false,
                isVisible: visibleCheck
            }
        default:
            return state
    }

}

const clearState = (dispatch) => {
    return () => {
        dispatch({ type: 'CLEAR_STATE' });
    }
}

const isVisibleModal = (dispatch) => {
    return async (message) => {
        dispatch({
            type: 'CHANGE_VISIBLE_MODAL',
            payload: { message }
        })
    }
}

const getUserQuestionnaires = (dispatch) => {
    return async () => {
        try {
            const user = JSON.parse(await AsyncStorage.getItem('user'));
            const token = user.token;
            const id = user.userData.id;
            const response = await httpClient.get(`users/${id}/questionnaires`,
                {
                    'Authorization': `Bearer ${token}`,
                }
            );
            console.log(response);
            dispatch({
                type: 'SET_QUESTIONARY_USER',
                payload: {
                    response
                }
            })
        } catch (error) {
            dispatch({
                type: 'SET_REQUEST_ERROR',
                payload: {
                    error: true,
                    message: 'Por el momento el getUserQuestionnaires no está disponible, inténtelo mas tarde.'
                }
            })
        }
    }
}

const getUsersections = (dispatch) => {
    return async (data) => {



        // console.log(JSON.stringify(data, null, 2));
        console.log('pato');
        dispatch({
            type: 'SET_SECTIONS_USER',
            payload: {
                data
            }
        })
    }
}


const getUserQuestion = (dispatch) => {
    return async (data) => {

        // console.log(JSON.stringify(data, null, 2));
        dispatch({
            type: 'SET_QUESTION_USER',
            payload: {
                data
            }
        })
    }
}




export const { Context, Provider } = createDataContext(
    RegistrationReducer,
    {
        clearState,
        getUserQuestionnaires,
        getUserQuestion,
        getUsersections,
        isVisibleModal

    },
    initialState
);