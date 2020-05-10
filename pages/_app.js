import { useEffect } from 'react';
import PropTypes from 'prop-types';
import EditorContextProvider from '../contexts/EditorContext';
import ActiveDocumentContextProvider from '../contexts/ActiveDocumentContext';
import 'antd/dist/antd.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'easymde/dist/easymde.min.css';
import '../css/globalStyles.css';
import '../css/easymdeOverrides.css';

function MyApp({ Component, pageProps }) {
    // const loadGapi = () => {
    //     const script = document.createElement('script');
    //     script.src = 'https://apis.google.com/js/client.js';
    //     script.onload = () => {
    //         window.gapi.load('client:auth2', () => {
    //             window.gapi.client.init({
    //                 clientId: '707722307792-hummtvqukmi42ethaqkkead945rql4dk.apps.googleusercontent.com',
    //                 // discoveryDocs: [discoveryUrl],
    //                 scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
    //             });
    //         });
    //     };

    //     document.body.appendChild(script);
    // };

    // useEffect(() => {
    //     loadGapi();
    // });

    return (
        <EditorContextProvider>
            <ActiveDocumentContextProvider>
                <Component {...pageProps} />
            </ActiveDocumentContextProvider>
        </EditorContextProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    pageProps: PropTypes.object.isRequired,
};

export default MyApp;
