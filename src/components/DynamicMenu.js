import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DynamicMenu = () => {
    const menuItems = useSelector(state => state.menuItems);
    const dispatch = useDispatch();

    const loadApp = (app) => {
        dispatch({ type: 'SET_ACTIVE_APP', payload: app });
    };

    return (
        <div>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} onClick={() => loadApp(item.app)}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DynamicMenu;