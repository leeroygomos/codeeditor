import React from 'react';
import Container from 'react-bootstrap/Container';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Output({errors, output}){
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
                        style={{
                            fontSize: 16,
                            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                            height: '40vh',
                            borderRadius: '10px'
                        }}
                    />
                </Container>
                <Container>
                    <CodeEditor
                        readOnly
                        value={output}
                        placeholder="Output"
                        style={{
                            fontSize: 16,
                            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                            height: '40vh',
                            borderRadius: '10px'
                        }}
                    />
                </Container>
            </div>
        </>
    );
}