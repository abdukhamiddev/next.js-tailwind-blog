import Head from 'next/head';
import Dashboard from '../components/Dashboard';
import HeaderTitle from '../components/HeaderTitle';
import HeroBanner from '../components/HeroBanner';
import Layout from '../components/Layout';
import MoreStories from '../components/More-Stories';

export default function Home() {
  return (
    <div className="">
      <Layout>
        <Head />
        <HeroBanner />
        <Dashboard />
        <HeaderTitle />
        <MoreStories />
      </Layout>
    </div>
  );
}
