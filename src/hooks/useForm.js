import { useState } from 'react';
import shortid from 'shortid';

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value,
            id: shortid.generate(),
        });
    };
    return [values, handleInputChange];
};
