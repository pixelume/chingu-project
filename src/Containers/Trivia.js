import React, { useState, useEffect } from 'react';
import {RadioButtonGroup} from 'grommet';
// import styled from 'styled-components';

export default () => {
    const [cat, setCat] = useState('Computers');
    useEffect(() => {
        console.log(cat)
    })
    return (
        <RadioButtonGroup
            name="cat"
            options={['Computers', 'Science & Nature', 'Films', 'Books']}
            value={cat}
            onChange={(event) => setCat(event.target.value)}
        />
        // <h2 style={{color: 'white'}}>Coming Soon</h2>
    )
}