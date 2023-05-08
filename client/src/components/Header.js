import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const JAVASCRIPT_TOOLTIP_TEXT = 'Node.js version 19';
const PYTHON_TOOLTIP_TEXT = 'Latest version of Python3';
const CPP_TOOLTIP_TEXT = 'Compiled with gcc';

export default function Header({setLanguage, language}){
    const [tooltipText, setTooltipText] = useState(JAVASCRIPT_TOOLTIP_TEXT);

    const renderTooltip = (props) => (
        <Tooltip id="dropdown-tooltip" {...props}>
            {tooltipText}
        </Tooltip>
    );
      
    return (
        <Stack direction='horizontal' gap={3} style={{padding:'5px'}}>
            <OverlayTrigger
                placement="right"
                delay={{ show: 100, hide: 200 }}
                overlay={renderTooltip}
                >
                <Dropdown style={{marginLeft:'20px'}}>
                    <Dropdown.Toggle variant="success" id="language">
                        {language}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => {setLanguage("Javascript"); setTooltipText(JAVASCRIPT_TOOLTIP_TEXT)}}>Javascript</Dropdown.Item>
                        <Dropdown.Item onClick={() => {setLanguage("Python"); setTooltipText(PYTHON_TOOLTIP_TEXT)}}>Python</Dropdown.Item>
                        <Dropdown.Item onClick={() => {setLanguage("C++"); setTooltipText(CPP_TOOLTIP_TEXT)}}>C++</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </OverlayTrigger>
        </Stack>
    );
}