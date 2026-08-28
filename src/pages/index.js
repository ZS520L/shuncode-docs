import {useEffect} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const href = useBaseUrl('/docs/intro');
  useEffect(() => {
    window.location.replace(href);
  }, [href]);
  return null;
}

