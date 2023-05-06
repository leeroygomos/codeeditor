import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

export default function Header({setLanguage, language, execute}){
    return (
        <Stack direction='horizontal' gap={3}>
            {/*DROPDOWN*/}
            <Dropdown>
                <Dropdown.Toggle variant="success" id="language">
                    {language}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setLanguage("Javascript")}>Javascript</Dropdown.Item>
                    <Dropdown.Item onClick={() => setLanguage("Python3")}>Python3</Dropdown.Item>
                    <Dropdown.Item onClick={() => setLanguage("C++")}>C++</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/*BUTTON*/}
            <Button variant="primary" onClick={() => execute()}>Run</Button>
        </Stack>
    );
}