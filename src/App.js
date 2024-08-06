import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DynamicMenu from './components/DynamicMenu';
import ViewPanel from './components/ViewPanel';
import menuConfig from './config/menuConfig.json';
import appConfig from './config/appConfig.json';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'SET_MENU_ITEMS', payload: menuConfig });
        dispatch({ type: 'SET_CONFIG', payload: appConfig });
    }, [dispatch]);

    return (
        <div>
            <h1>Dynamic App</h1>
            <DynamicMenu />
            <ViewPanel />
        </div>
    );
};

export default App;