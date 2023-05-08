import React, {useState} from 'react';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Custom Components
import Editor from './components/Editor.js';
import Header from './components/Header.js';
import Output from './components/Output.js';

const PORT = process.env.PORT || 3000;

function App() {
  const [language, setLanguage] = useState("Javascript");
  const [output, setOutput] = useState("");
  const [errors, setErrors] = useState("");

  const execute = (code) => {
    fetch(`http://localhost:${PORT}/execute?` + new URLSearchParams({
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
    <Container fluid>
        <Row>
            <Col style={{backgroundImage:'linear-gradient(#000B18, #21201E)'}}><Header setLanguage={setLanguage} language={language} execute={execute}></Header></Col>
        </Row>
        <Row>
            <Col style={{backgroundImage: 'linear-gradient(#000B18, #000B18, #000B18, #00172D)'}}><Editor execute={execute} language={language}></Editor></Col>
            <Col style={{backgroundImage: 'linear-gradient(#000B18, #000B18, #000B18, #00172D)'}}><Output output={output} errors={errors}></Output></Col>
        </Row>
    </Container>
  );
}

export default App;
