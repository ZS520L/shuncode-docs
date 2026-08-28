import {useEffect} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const href = useBaseUrl('/docs/intro');
  useEffect(() => {
    window.location.replace(href);
  }, [href]);
  return (
    <Layout title="ShunCode 文档" description="打辅助、不做替代">
      <main style={{padding: '4rem 1.5rem', maxWidth: 640, margin: '0 auto'}}>
        <h1>ShunCode 文档</h1>
        <p>正在进入产品简介。如果没有自动跳转，请点下面的链接。</p>
        <p>
          <Link to="/docs/intro">进入产品简介 →</Link>
        </p>
      </main>
    </Layout>
  );
}

