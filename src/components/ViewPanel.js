import React from 'react';
import { useSelector } from 'react-redux';
import RegistrationFormV1 from './RegistrationFormV1';
import RegistrationFormV2 from './RegistrationFormV2';

const ViewPanel = () => {
    const activeApp = useSelector(state => state.activeApp);
    const config = useSelector(state => state.config);

    const renderComponent = (component) => {
        switch (component) {
            case 'RegistrationFormV1':
                return <RegistrationFormV1 />;
            case 'RegistrationFormV2':
                return <RegistrationFormV2 />;
            default:
                return <div>Select an app to load</div>;
        }
    };

    return (
        <div>
            {activeApp ? renderComponent(config[activeApp]) : <div>Select an app from the menu</div>}
        </div>
    );
};

export default ViewPanel;
