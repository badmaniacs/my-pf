import { motion } from 'framer-motion';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { GridItemStyle } from '../grid-item';

const options = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Article: React.FC<PropsWithChildren<{ title: string }>> = ({
  children,
  title,
}) => {
  const t = `${title} - Kyungtae Park`;
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={options}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <title>{t}</title>
            <meta name="twitter:title" content={t} />
            <meta property="og:title" content={t} />
          </Head>
        )}
        {children}
        <GridItemStyle />
      </>
    </motion.article>
  );
};

export default Article;
