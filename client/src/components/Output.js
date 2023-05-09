import React from 'react';
import Container from 'react-bootstrap/Container';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Output({errors, output, mode}){
    return (
        <>
            <div style={{
                    display: 'grid',
                    height: '90vh',
                    marginTop:'15px'
                }}>
                <Container>
                    <CodeEditor
                        readOnly
                        value={errors}
                        placeholder="Errors"
                        data-color-mode={mode}
                        style={{
                            fontSize: 16,
                            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                            height: '40vh',
                            borderRadius: '10px',
                            overflowY: 'auto',
                        }}
                    />
                </Container>
                <Container>
                    <CodeEditor
                        readOnly
                        value={output}
                        placeholder="Output"
                        data-color-mode={mode}
                        style={{
                            fontSize: 16,
                            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                            height: '40vh',
                            borderRadius: '10px',
                            overflowY: 'auto',
                        }}
                    />
                </Container>
            </div>
        </>
    );
}