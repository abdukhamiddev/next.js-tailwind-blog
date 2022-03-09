import Head from 'next/head';
import Dashboard from '../components/Dashboard';
import HeaderTitle from '../components/HeaderTitle';
import HeroBanner from '../components/HeroBanner';
import Layout from '../components/Layout';
import MoreStories from '../components/More-Stories';
import { getAllPosts } from '../lib/api';
import { motion } from 'framer-motion';

export default function Home({ allPosts }) {
  const morePosts = allPosts.slice(0);
  console.log(morePosts);
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Layout>
        <Head />
        <HeroBanner />
        <Dashboard />
        <HeaderTitle />
        <MoreStories posts={morePosts} />
      </Layout>
    </motion.div>
  );
}
export async function getStaticProps() {
  const allPosts = await getAllPosts([
    'title',
    'date',
    'slug',
    'tag',
    'author',
    'coverImage',
    'excerpt'
  ]);

  return {
    props: { allPosts }
  };
}
