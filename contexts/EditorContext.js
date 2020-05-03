import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const EditorContext = createContext();

const EditorContextProvider = ({ children }) => {
    const document = {
        published: false,
        metadata: {
            title: 'title',
        },
        content: 'some content',
    };
    const [documents, setDocuments] = useState({ first: document });

    const createDocument = (id) => {
        const newDocument = {
            published: false,
            metadata: {
                title: '',
            },
            content: '',
            lastEditted: new Date().toISOString(),
        };
        setDocuments({
            ...documents,
            [id]: newDocument,
        });
    };

    const updateDocument = (id, content) => {
        const lastEditted = new Date().toISOString();
        const updatedDocuments = {
            ...documents,
            [id]: {
                ...documents[id],
                content,
                lastEditted,
            },
        };
        setDocuments(updatedDocuments);
    };

    const deleteDocument = (id) => {
        const updatedDocuments = { ...documents };
        delete updatedDocuments[id];
        setDocuments(updatedDocuments);
    };

    const togglePublished = (id) => {
        const { published } = documents[id];
        const updatedDocuments = {
            ...documents,
            [id]: {
                ...documents[id],
                published: !published,
            },
        };
        setDocuments(updatedDocuments);
    };

    useEffect(() => {
        const localData = localStorage.getItem('documents');
        if (localData) setDocuments(JSON.parse(localData));
    }, []);
    useEffect(() => {
        localStorage.setItem('documents', JSON.stringify(documents));
    }, [documents]);
    return (
        <EditorContext.Provider value={{ documents, setDocuments, createDocument, updateDocument, deleteDocument, togglePublished }}>
            {children}
        </EditorContext.Provider>
    );
};

EditorContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default EditorContextProvider;
