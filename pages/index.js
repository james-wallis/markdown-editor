import { Layout } from 'antd';
import Menu from '../components/Menu';
import Editor from '../components/Editor';

export default () => (
    <div>
        <Layout style={{ minHeight: '100vh' }}>
            <Menu />
            <Editor />
        </Layout>
    </div>
);
