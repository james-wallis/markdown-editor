import { useContext } from 'react';
import { Row, Col, Layout } from 'antd';
import SimpleMDE from 'react-simplemde-editor';
import { EditorContext } from '../contexts/EditorContext';
import { ActiveDocumentContext } from '../contexts/ActiveDocumentContext';

function Editor() {
    const { documents, updateDocument } = useContext(EditorContext);
    const { activeDocumentID } = useContext(ActiveDocumentContext);
    const document = documents[activeDocumentID];
    const content = (document && document.content) ? document.content : '';
    return (
        <Layout className="site-layout">
            <Row>
                <Col span={14} offset={5}>
                    {activeDocumentID !== null && (content || content === '') ? (
                        <SimpleMDE
                            id="markdown-editor"
                            onChange={(newContent) => updateDocument(activeDocumentID, newContent)}
                            value={content}
                            options={{
                                autofocus: true,
                                spellChecker: false,
                                toolbar: false,
                                status: false,
                                tabSize: 4,
                                indentWithTabs: false,
                                placeholder: 'Type here...',
                                autoDownloadFontAwesome: false,
                                shortcuts: {
                                    togglePreview: null,
                                    toggleSideBySide: null,
                                    toggleFullScreen: null,
                                    drawTable: 'Cmd-Alt-T', // bind Cmd-Alt-T to drawTable action, which doesn't come with a default shortcut
                                },
                            }}
                        />
                    ) : <p className="CodeMirror-sizer">Open or create a note</p>}
                </Col>
            </Row>
        </Layout>
    );
}

export default Editor;
