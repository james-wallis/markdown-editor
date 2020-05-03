import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const ActiveDocumentContext = createContext();

const ActiveDocumentContextProvider = ({ children }) => {
    const [activeDocumentID, setActiveDocument] = useState('first');
    const set = (e) => {
        console.log('set', e);
        setActiveDocument(e);
    };
    useEffect(() => {
        const localData = localStorage.getItem('active-document-id');
        if (localData) setActiveDocument(localData);
    }, []);
    useEffect(() => {
        localStorage.setItem('active-document-id', activeDocumentID);
    }, [activeDocumentID]);
    return (
        <ActiveDocumentContext.Provider value={{ activeDocumentID, setActiveDocument }}>
            {children}
        </ActiveDocumentContext.Provider>
    );
};

ActiveDocumentContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ActiveDocumentContextProvider;
