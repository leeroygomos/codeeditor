import React, {useEffect, useState} from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Button from 'react-bootstrap/Button';
import getBoilerplate from './Boilerplate';

export default function Editor({language, execute, mode}){

    const [code, setCode] = useState(
        getBoilerplate(language)
    );

    const [placeholder, setPlaceholder] = useState(
        `Enter ${language} code`
    );

    useEffect(() => {
        setPlaceholder(`Enter ${language} code`);
        setCode(getBoilerplate(language));
    },[language]);

    return (
        <div data-color-mode={mode} style={{marginTop:'2vh', height: '85vh'}}>
            <CodeEditor
                value={code}
                language={(language === 'C++' || language === 'C#') ? ((language === 'C++') ? 'cpp' : 'csharp') : language}
                placeholder={placeholder}
                onChange={(evn) => setCode(evn.target.value)}
                style={{
                    fontSize: 16,
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    height: '82vh',
                    overflowY: 'auto',
                    marginBottom: '10px',
                    borderRadius: '10px'
                }}
            />
            <Button variant="primary" onClick={() => execute(code)} style={{float: 'right'}}>Run</Button>
        </div>
    );
}