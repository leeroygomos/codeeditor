import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Button from 'react-bootstrap/Button';


export default function Editor({execute}){
    const [code, setCode] = useState(
        `function add(a, b) {\n  return a + b;\n}`
      );
    return (
        <div data-color-mode="dark">
            <CodeEditor
                value={code}
                language="javascript"
                placeholder="Please enter JS code."
                onChange={(evn) => setCode(evn.target.value)}
                padding={10}
                style={{
                    fontSize: 12,
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
            />
            <Button variant="primary" onClick={() => execute(code)}>Run</Button>
        </div>
        
    );
}