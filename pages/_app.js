import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'easymde/dist/easymde.min.css';
import '../css/globalStyles.css';
import '../css/easymdeOverrides.css';

function MyApp({ Component, pageProps }) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...pageProps} />;
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    pageProps: PropTypes.object.isRequired,
};

export default MyApp;
