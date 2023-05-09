import React, {useState} from 'react';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Custom Components
import Editor from './components/Editor.js';
import Header from './components/Header.js';
import Output from './components/Output.js';
import Footer from './components/Footer.js';

const PORT = process.env.PORT || 8080;

const DARK_BODY = 'linear-gradient(#000B18, #000B18, #000B18, #00172D)';
const DARK_HEADER = 'linear-gradient(#000B18, #21201E)';
const LIGHT_BODY = 'linear-gradient(#ddeaee, #8cacd0, #709fdc, #274684)';
const LIGHT_HEADER = 'linear-gradient(#FFFFFF, #ddeaee)';

function App() {
  const [language, setLanguage] = useState("Javascript");
  const [output, setOutput] = useState("");
  const [errors, setErrors] = useState("");
  const [mode, setMode] = useState("dark");
  
  const execute = (code) => {
    fetch(`https://online-code-editor.herokuapp.com/execute?` + new URLSearchParams({
        code: code,
        language: language
      }))
      .then(res => res.json())
      .then(data => {
        setOutput(data.output);
        setErrors(data.errors);
      })
  }

  return (
    <>
    <Container fluid>
        <Row>
            <Col style={{backgroundImage:(mode === 'dark' ? DARK_HEADER : LIGHT_HEADER)}}><Header setLanguage={setLanguage} language={language} execute={execute} setGlobalMode={setMode}></Header></Col>
        </Row>
        <Row>
            <Col style={{backgroundImage: (mode === 'dark' ? DARK_BODY : LIGHT_BODY)}}><Editor execute={execute} language={language} mode={mode}></Editor></Col>
            <Col style={{backgroundImage: (mode === 'dark' ? DARK_BODY : LIGHT_BODY)}}><Output output={output} errors={errors} mode={mode}></Output></Col>
        </Row>
    </Container>
    <Footer mode={mode}></Footer>
    </>
  );
}

export default App;
