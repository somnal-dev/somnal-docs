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
        <h1 style={{color: "white"}}>{text}</h1>
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
          style={{paddingTop:'30px', paddingLeft:'10vh', paddingRight:'10vh'}}
      >
        <Section
          text={"🤖 안드로이드"}
          desc={"문서보기"}
          to={"docs/category/-안드로이드"}
        />
        <br/>
        <Section
            text={"💻 프론트엔드"}
            desc={"문서보기"}
            to={"docs/category/-프론트엔드"}
        />
      </div>
    </Layout>
  );
}
