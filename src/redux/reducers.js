import { combineReducers } from 'redux';

const initialState = {
    menuItems: [],
    activeApp: null,
    config: {}
};

const menuReducer = (state = initialState.menuItems, action) => {
    switch (action.type) {
        case 'SET_MENU_ITEMS':
            return action.payload;
        default:
            return state;
    }
};

const appReducer = (state = initialState.activeApp, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_APP':
            return action.payload;
        default:
            return state;
    }
};

const configReducer = (state = initialState.config, action) => {
    switch (action.type) {
        case 'SET_CONFIG':
            return action.payload;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    menuItems: menuReducer,
    activeApp: appReducer,
    config: configReducer
});

export default rootReducer;