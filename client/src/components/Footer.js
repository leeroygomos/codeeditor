import React from 'react';
import Stack from 'react-bootstrap/Stack';

export default function Footer({mode}){      
    return (
        <Stack direction='horizontal' gap={3} style={
            {
                paddingLeft:'5px', 
                backgroundColor: (mode === 'dark' ? '#00172D' : "#274684" ), 
                color: (mode === 'dark' ? "#FFFFFF" :  "#FFFFFF")
            }
            }>
            <div>
                <p>Created by <a href='https://leeroygomos.github.io/' target="_blank">Lee Roy Gomos</a></p>
            </div>
            <div style={{float:'right'}}>
                <p><a href='https://github.com/leeroygomos/codeeditor' target="_blank">View source code</a></p>
            </div>
        </Stack>
    );
}