import PropTypes from 'prop-types';
import EditorContextProvider from '../contexts/EditorContext';
import ActiveDocumentContextProvider from '../contexts/ActiveDocumentContext';
import 'antd/dist/antd.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'easymde/dist/easymde.min.css';
import '../css/globalStyles.css';
import '../css/easymdeOverrides.css';

function MyApp({ Component, pageProps }) {
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
