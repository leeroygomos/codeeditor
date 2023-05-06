import React, {useEffect, useState} from 'react';
// import './App.css';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Custom Components
import Editor from './components/Editor.js';
import Header from './components/Header.js';
import Output from './components/Output.js';

function App() {
  const [language, setLanguage] = useState("Javascript");
  const [output, setOutput] = useState("");
  // const [console, setConsole] = useState("");

  const execute = (code) => {
    fetch('http://localhost:3000/execute?' + new URLSearchParams({
        code: code,
        language: language
      }))
      .then(res => res.json())
      .then(data => setOutput(data.output))
  }

  return (
    <Container fluid>
        <Row>
            <Col style={{backgroundColor:"black"}}><Header setLanguage={setLanguage} language={language} execute={execute}></Header></Col>
        </Row>
        <Row>
            <Col style={{backgroundColor:"grey"}}><Editor execute={execute}></Editor></Col>
            <Col style={{backgroundColor:"grey"}}><Output output={output}></Output></Col>
        </Row>
    </Container>
  );
}

export default App;
