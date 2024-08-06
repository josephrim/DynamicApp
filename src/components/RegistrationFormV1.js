import React from 'react';

const RegistrationFormV1 = () => {
    return (
        <form>
            <h1>Registration Form V1</h1>
            <label>Name:</label>
            <input type="text" name="name" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationFormV1;