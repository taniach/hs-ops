import React, { useState } from 'react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

export const Datepick = () => {
    
    const [currentDate, setNewDate] = useState(null);
    const onChange = (event, data) => setNewDate(data.value);
    return <SemanticDatepicker format="DD-MM-YYYY" onChange={onChange} />;
    
}
