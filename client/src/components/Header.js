import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';

const JAVASCRIPT_TOOLTIP_TEXT = 'Node.js v19.9.0';
const PYTHON_TOOLTIP_TEXT = 'Latest version of Python3';
const CPP_TOOLTIP_TEXT = 'Compiled with gcc';
const CSHARP_TOOLTIP_TEXT = 'Compiled with Mono';
const C_TOOLTIP_TEXT = 'Compiled with gcc';
const JAVA_TOOLTIP_TEXT = 'Compiled with JDK';
const GO_TOOLTIP_TEXT = 'Compiled with gc';
const RUST_TOOLTIP_TEXT = 'Compiled with rustc';

export default function Header({setLanguage, language, setGlobalMode}){
    const [tooltipText, setTooltipText] = useState(JAVASCRIPT_TOOLTIP_TEXT);
    const [mode, setMode] = useState('Dark Mode');
    const [variant, setVariant] = useState('dark');

    const switchMode = () => {
        if (mode === "Dark Mode"){
            setMode('Light Mode');
            setVariant('light');
            setGlobalMode('light');
        }
        else{
            setMode("Dark Mode");
            setVariant('dark');
            setGlobalMode('dark');
        }
    }

    const renderTooltip = (props) => (
        <Tooltip id="dropdown-tooltip" {...props}>
            {tooltipText}
        </Tooltip>
    );
      
    return (
        <Stack direction='horizontal' gap={3} style={{padding:'5px'}}>
            <Dropdown style={{marginLeft:'20px'}}>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 200, hide: 0 }}
                    overlay={renderTooltip}
                    >
                    <Dropdown.Toggle variant="success" id="language">
                        {language}
                    </Dropdown.Toggle>
                </OverlayTrigger>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => {setLanguage("Javascript"); setTooltipText(JAVASCRIPT_TOOLTIP_TEXT)}}>Javascript</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setLanguage("Python"); setTooltipText(PYTHON_TOOLTIP_TEXT)}}>Python</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setLanguage("C++"); setTooltipText(CPP_TOOLTIP_TEXT)}}>C++</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setLanguage("Java"); setTooltipText(JAVA_TOOLTIP_TEXT)}}>Java</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setLanguage("C#"); setTooltipText(CSHARP_TOOLTIP_TEXT)}}>C#</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setLanguage("C"); setTooltipText(C_TOOLTIP_TEXT)}}>C</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setLanguage("Go"); setTooltipText(GO_TOOLTIP_TEXT)}}>Go</Dropdown.Item>
                    <Dropdown.Item onClick={() => {setLanguage("Rust"); setTooltipText(RUST_TOOLTIP_TEXT)}}>Rust</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Button variant={variant} onClick={()=>switchMode()}>{mode}</Button>
        </Stack>
    );
}