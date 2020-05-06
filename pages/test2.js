import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';

const Page = () => (
    <Modal
        title={
            (
                <div>
                    <p className="title">
                        <span>Claim: Coronavirus is more deadly than the flu</span>
                        {/* <span className="google-search"> Search this claim on Google</span> */}
                    </p>
                    <p className="percentage">75% of sources agree</p>
                </div>
            )
        }
        visible
        footer={(
            <div>
                <Button type="primary">Search this claim on Google</Button>
                {/* <Button>Close</Button> */}
            </div>
        )}
    >
        <div className="disagree">
            <h2>Sources that disagree</h2>
            <div className="source">
                <p className="article">Get a grippe, America. The flu is a much bigger threat than coronavirus, for now.</p>
                <p className="author">Washington Post</p>
                {/* <p className="link">https://www.washingtonpost.com/health/time-for-a-reality-check-america-the-flu-is-a-much-bigger-threat-than-coronavirus-for-now/2020/01/31/46a15166-4444-11ea-b5fc-eefa848cde99_story.html</p> */}
            </div>
            {/* <div className="source">
                <p className="article">Here&apos;s What We Do And Don&apos;t Know About The Deadly Coronavirus Outbreak</p>
                <p className="author">Buzzfeed</p>
                <p className="link">https://www.buzzfeednews.com/article/danvergano/coronavirus-cases-deaths-flu</p>
            </div> */}
            <p className="more">Show more</p>
        </div>
        <div className="agree">
            <h2>Sources that agree</h2>
            {/* <div className="source">
                <p className="article">Critics said the flu kills more than coronavirus. Why that&apos;s not a fair comparison -- and now, it&apos;s not even true</p>
                <p className="author">CNN</p>
            </div> */}
            {/* <div className="source">
                <p className="article">Can a face mask protect me from coronavirus? Covid-19 myths busted</p>
                <p className="author">The Guardian</p>
                <p className="link">https://www.theguardian.com/world/2020/apr/11/can-a-face-mask-protect-me-from-coronavirus-covid-19-myths-busted</p>
            </div> */}
            <div className="source">
                <p className="article">Coronavirus: One in five deaths now linked to virus</p>
                <p className="author">BBC News</p>
            </div>
            <p className="more">Show more</p>
        </div>
        <style jsx>
            {`
            .more {
                padding-top: 5px;
                font-size: 14px;
            }
            .title, .percentage {
                margin: 0;
            }
            .title span {
                    display: inline-block;
                    width: 100%;
                    font-weight: 500;
                    font-size: 22px;
            }
            .title span.google-search {
                width: 36%;
                text-align: right;
                text-decoration: underline;
                font-size: 14px;
                color: #777;
            }
            .percentage {
                font-size: 20px;
                color: green;
                font-weight: 500;
                padding-top: 10px;
            }
            .agree h2, .disagree h2 {
                // font-weight: 600 !important;
                font-size: 20px;
            }
            .agree {
                border-top: 1px solid #ddd;
                margin-top: 10px;
                padding-top: 10px;
            }
            // .agree-text {
            //     font-weight: 600;
            // }
            .source {
                padding: 5px 0;
            }
            .article {
                font-size: 14px;
                margin: 0;
                color: blue;
                font-weight: 500;
                text-decoration: underlined;
            }
            .author, .link {
                font-size: 12px;
                margin: 0;
                // color: blue;
            }
            .link {
                font-size: 12px;
                color: #bbb;
            }
            `}
        </style>
    </Modal>
);

export default Page;
