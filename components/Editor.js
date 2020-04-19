import { useState } from 'react';
import {
    Row, Col, Layout,
} from 'antd';

import SimpleMDE from 'react-simplemde-editor';

function Editor() {
    const [text, setText] = useState('');

    const updateText = (update) => {
        setText(update);
    };

    return (
        <Layout className="site-layout">
            <Row>
                <Col span={14} offset={5}>
                    <SimpleMDE
                        id="markdown-editor"
                        onChange={updateText}
                        value={text}
                        options={{
                            autofocus: true,
                            spellChecker: false,
                            toolbar: false,
                            status: false,
                        }}
                    />
                </Col>
            </Row>
        </Layout>
    );
}

export default Editor;
