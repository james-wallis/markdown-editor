import { useState, useContext } from 'react';
import { Layout, Menu } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { EditOutlined, FileAddOutlined } from '@ant-design/icons';
import { v1 as uuidv1 } from 'uuid';
import { EditorContext } from '../contexts/EditorContext';
import { ActiveDocumentContext } from '../contexts/ActiveDocumentContext';
import { removeMarkdownFromString, convertMarkdownToHTML } from '../modules/utils';
import PublishModal from './PublishModal';

const { Sider } = Layout;
const { SubMenu } = Menu;

function SideMenu() {
    const [collapsed, setCollapsed] = useState(true);
    const [publishModalDocument, setPublishModalDocument] = useState(null);
    const { documents, createDocument, deleteDocument, togglePublished } = useContext(EditorContext);
    const { setActiveDocument, activeDocumentID } = useContext(ActiveDocumentContext);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const createNewDocument = () => {
        const id = uuidv1();
        createDocument(id);
        setActiveDocument(id);
    };

    const deleteDocumentAndResetActive = (id) => {
        deleteDocument(id);
        // Only reset the document ID if it is currently active
        if (id === activeDocumentID) setActiveDocument(null);
    };

    const setDocumentPublished = (id, shouldPublish) => {
        setPublishModalDocument(null);
        const { published } = documents[id];
        if (shouldPublish !== published) togglePublished(id);
    };

    const exportToMarkdown = (id) => {
        const element = document.createElement('a');
        const { content } = documents[id];
        const file = new Blob([content], { type: 'text/plain' });
        const [firstline = 'empty_file'] = content.split('\n');
        const filename = removeMarkdownFromString(firstline);
        element.href = URL.createObjectURL(file);
        element.download = `${filename.replace(/ /g, '_')}.md`;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    const exportToHTML = (id) => {
        const { content } = documents[id];
        convertMarkdownToHTML(content);
    }

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="vertical" selectable={false}>
                <Menu.Item key="1" onClick={createNewDocument}>
                    <EditOutlined />
                    <span>New</span>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={
                        (
                            <span>
                                <FileAddOutlined />
                                <span>Open</span>
                            </span>
                        )
                    }
                >
                    <Menu.Item key="2">File</Menu.Item>
                    {/* <Menu.Item key="3">MongoDB</Menu.Item> */}
                </SubMenu>
                <Menu.Divider />
                <PublishModal id={publishModalDocument} documents={documents} setPublished={setDocumentPublished} />
                {
                    Object.keys(documents).map((id) => {
                        const { content, published } = documents[id];
                        const title = content || 'A new note.';
                        return (
                            <SubMenu
                                key={`document-${id}`}
                                className="menu-document"
                                title={
                                    (
                                        <span>
                                            {removeMarkdownFromString(title)}
                                        </span>
                                    )
                                }
                            >
                                <Menu.Item id={id} key={`document-${id}-1`} onClick={() => setActiveDocument(id)}>Open</Menu.Item>
                                <Menu.ItemGroup key={`document-${id}-2`} title="Blog">
                                    <Menu.Item key={`document-${id}-2-1`}>Edit Metadata</Menu.Item>
                                    <Menu.Item key={`document-${id}-2-2`}>Save to MongoDB</Menu.Item>
                                    <Menu.Item key={`document-${id}-2-3`} onClick={() => setPublishModalDocument(id)}>
                                        {published ? 'Published' : 'Not published'}
                                    </Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key={`document-${id}-3`} title="Export">
                                    <Menu.Item key={`document-${id}-3-1`} onClick={() => exportToMarkdown(id)}>Markdown</Menu.Item>
                                    <Menu.Item key={`document-${id}-3-2`} onClick={() => exportToHTML(id)}>HTML</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.Item id={id} key={`document-${id}-4`} onClick={() => deleteDocumentAndResetActive(id)}>Delete</Menu.Item>
                            </SubMenu>
                        );
                    })
                }
            </Menu>
        </Sider>
    );
}

export default SideMenu;
