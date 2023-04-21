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
    catalog: [],
    file_number: '',
    dataFrom: [],
    dateB: '',
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
        case 'CHANGE_VISIBLE_MODAL':
            let visibleCheck = !state.isVisible
            return {
                ...state,
                error: false,
                message: '',
                fetchingData: false,
                isVisible: visibleCheck
            }
        case 'SET_CATALOG':
            return {
                ...state,
                error: false,
                message: '',
                fetchingData: false,
                catalog: action.payload.data,
                file_number: action.payload.file_number,
            }
        case 'SET_CATALOG':
            return {
                ...state,
                error: false,
                message: '',
                fetchingData: false,
                catalog: action.payload.data,
                file_number: action.payload.file_number,
            }
        case 'SET_MASK':
            let type = action.payload.typedata
            return {
                ...state,
                [type]: action.payload.value,
            }
        case 'SET_DATA':
            let typedata = action.payload.typedata
            let category = action.payload.category
            return {
                ...state,
                fetchingData: false,
                dataFrom: {
                    ...state.dataFrom,
                    [category]: {
                        ...state.dataFrom[category],
                        [typedata]: action.payload.value
                    }
                }
            }
        default:
            return state
    }

}


// dataFrom: {
//     ...state.dataFrom,
//     [category]: { ...category, [typedata]: action.payload.value }
// }
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

const handleInputChange = (dispatch) => {
    return async (value, typedata, category) => {

        dispatch({
            type: 'SET_DATA',
            payload: { value, typedata, category }
        })
    }
}

const handleInputChangeMask = (dispatch) => {
    return async (value, typedata) => {

        dispatch({
            type: 'SET_MASK',
            payload: { value, typedata, }
        })
    }
}

const getCatalog = (dispatch) => {
    return async () => {
        try {
            dispatch({ type: 'FETCHING_DATA', payload: { fetchingData: true } });
            const user = JSON.parse(await AsyncStorage.getItem('user'));
            const token = user.token

            const countries = await httpClient
                .get(`countries`, {
                    'Authorization': `Bearer ${token}`,
                }
                );
            const genders = await httpClient
                .get(`genders`, {
                    'Authorization': `Bearer ${token}`,
                }
                );
            const relations = await httpClient
                .get(`relations`, {
                    'Authorization': `Bearer ${token}`,
                }
                );
            const documents = await httpClient
                .get(`documents`, {
                    'Authorization': `Bearer ${token}`,
                }
                );
            const civil_statuses = await httpClient
                .get(`civil_statuses`, {
                    'Authorization': `Bearer ${token}`,
                }
                );
            const file_number = await httpClient
                .get(`file_number`, {
                    'Authorization': `Bearer ${token}`,
                }
                );
            const data = {
                countries,
                genders,
                relations,
                documents,
                civil_statuses,
            }
            if (data != '') {
                dispatch({
                    type: 'SET_CATALOG',
                    payload: { data, file_number }
                });
            } else {
                dispatch({
                    type: 'SET_REQUEST_ERROR',
                    payload: {
                        error: true,
                        message: 'Por el momento el servicio no está disponible, inténtelo mas tarde.'
                    }
                });
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: 'SET_REQUEST_ERROR',
                payload: {
                    error: true,
                    message: 'Por el momento el servicio no está disponible, inténtelo mas tarde.'
                }
            });
        }
    }

}

const handleVisibility = (dispatch) => {
    return async () => {
        dispatch({
            type: 'SET_VISIBILITY_STATE',
            payload: {
                isVisible: true,
            }
        })
    }

}



export const { Context, Provider } = createDataContext(
    RegistrationReducer,
    {
        clearState,
        handleVisibility,
        isVisibleModal,
        handleInputChange,
        handleInputChangeMask,
        getCatalog

    },
    initialState
);