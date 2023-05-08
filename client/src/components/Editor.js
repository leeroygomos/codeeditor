import React, {useState} from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Button from 'react-bootstrap/Button';

export default function Editor({language, execute}){

    const [code, setCode] = useState(
        `console.log('hello world!');`
      );
    return (
        <div data-color-mode="dark" style={{marginTop:'15px', height: '90vh'}}>
            <CodeEditor
                value={code}
                language={language === 'C++' ? 'cpp' : language}
                placeholder="Please enter JS code."
                onChange={(evn) => setCode(evn.target.value)}
                style={{
                    fontSize: 16,
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    height: '85vh',
                    overflowY: 'auto',
                    marginBottom: '10px',
                    borderRadius: '10px'
                }}
            />
            <Button variant="primary" onClick={() => execute(code)} style={{float: 'right'}}>Run</Button>
        </div>
        
    );
}