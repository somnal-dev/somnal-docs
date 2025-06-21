import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function Section({
                     text,
                     desc,
                     to
                 }) {
    return (
        <a
            className="pagination-nav__link text--center"
            href={to}>
            <h1 style={{color: 'var(--ifm-color-emphasis-800)'}}>{text}</h1>
            <div className="pagination-nav__label">{desc}</div>
        </a>
    )
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout>
            <div
                className="container"
                style={{paddingTop: '30px', paddingLeft: '10vh', paddingRight: '10vh'}}
            >
                <Section
                    text={"Android"}
                    desc={"문서보기"}
                    to={"docs/category/android"}
                />
                <br/>
                <Section
                    text={"Frontend"}
                    desc={"문서보기"}
                    to={"docs/category/frontend"}
                />
                <br/>
                <Section
                    text={"Backend"}
                    desc={"문서보기"}
                    to={"docs/category/backend"}
                />
            </div>
        </Layout>
    );
}
