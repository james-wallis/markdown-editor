import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';

const PublishModal = ({ id, documents, setPublished }) => {
    const handleOk = () => {
        const { published } = documents[id];
        setPublished(id, !published);
    };

    const handleCancel = () => {
        const { published } = documents[id];
        setPublished(id, published);
    };

    return (
        <Modal
            title={documents[id] && documents[id].published ? 'Convert to draft' : 'Publish'}
            visible={id !== null}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="cancel" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" onClick={handleOk}>
                    {documents[id] && documents[id].published ? 'Convert to draft' : 'Publish'}
                </Button>,
            ]}
        >
            {documents[id] && documents[id].published ? (
                <div>
                    <p>
                        Converting this to a draft will unpublish the document from the website
                        allowing you to edit without readers seeing any mistakes.
                    </p>
                    <p>Once the document is finished, you can re-publish it.</p>
                </div>
            ) : (
                <div>
                    <p>
                        Publishing this document will make it live
                        on the website by setting the value &apos;published&apos; to true.
                    </p>
                    <p>Anyone can then view the document, last chance to check spelling errors!</p>
                </div>
            )}
        </Modal>
    );
};

PublishModal.defaultProps = {
    id: null,
};

PublishModal.propTypes = {
    id: PropTypes.string,
    documents: PropTypes.shape({
        published: PropTypes.bool,
    }).isRequired,
    setPublished: PropTypes.func.isRequired,
};

export default PublishModal;
