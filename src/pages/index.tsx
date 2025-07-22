import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { useEffect } from 'react';

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
  useEffect(() => {
    window.location.href = "/docs";
  }, []);
  return null;
}
