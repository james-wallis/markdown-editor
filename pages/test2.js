import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';

const Page = () => (
    <Modal
        title={
            (
                <div>
                    <p className="title">
                        <span>Claim: Coronavirus is like the flu</span>
                        <span className="google-search"> Search this claim on Google</span>
                    </p>
                    <p className="percentage">87% of sources agree</p>
                </div>
            )
        }
        visible
        footer={false}
    >
        <div className="agree">
            <h2>Sources that agree</h2>
            <div className="source">
                <p className="article">Critics said the flu kills more than coronavirus. Why that&apos;s not a fair comparison -- and now, it&apos;s not even true</p>
                <p className="author">CNN</p>
                <p className="link">https://edition.cnn.com/2020/05/01/health/flu-vs-coronavirus-deaths/index.html</p>
            </div>
            <div className="source">
                <p className="article">Can a face mask protect me from coronavirus? Covid-19 myths busted</p>
                <p className="author">The Guardian</p>
                <p className="link">https://www.theguardian.com/world/2020/apr/11/can-a-face-mask-protect-me-from-coronavirus-covid-19-myths-busted</p>
            </div>
            <div className="source">
                <p className="article">Coronavirus: One in five deaths now linked to virus</p>
                <p className="author">BBC News</p>
                <p className="link">https://www.bbc.co.uk/news/health-52278825</p>
            </div>
        </div>
        <div className="disagree">
            <h2>Sources that disagree</h2>
            <div className="source">
                <p className="article">Get a grippe, America. The flu is a much bigger threat than coronavirus, for now.</p>
                <p className="author">Washington Post</p>
                <p className="link">https://www.washingtonpost.com/health/time-for-a-reality-check-america-the-flu-is-a-much-bigger-threat-than-coronavirus-for-now/2020/01/31/46a15166-4444-11ea-b5fc-eefa848cde99_story.html</p>
            </div>
            <div className="source">
                <p className="article">Here&apos;s What We Do And Don&apos;t Know About The Deadly Coronavirus Outbreak</p>
                <p className="author">Buzzfeed</p>
                <p className="link">https://www.buzzfeednews.com/article/danvergano/coronavirus-cases-deaths-flu</p>
            </div>
        </div>
        <style jsx>
            {`
            .title, .percentage {
                margin: 0;
            }
            .title span {
                    display: inline-block;
                    width: 50%;
            }
            .title span.google-search {
                width: 46%;
                text-align: right;
                text-decoration: underline;
                font-size: 14px;
                color: #777;
            }
            .percentage {
                font-size: 14px;
                color: green;
            }
            .disagree {
                border-top: 1px solid #ddd;
                margin-top: 10px;
                padding-top: 10px;
            }
            .source {
                padding: 5px 0;
            }
            .article {
                font-size: 14px;
                margin: 0;
            }
            .author, .link {
                font-size: 12px;
                margin: 0;
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
