import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Layout from '../../components/Layout';
import Head from 'next/head';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import { mdxToString, stringToMdx } from '../../lib/mdxSerialization';
import { motion } from 'framer-motion';
import PostHeader from '../../components/PostHeader';
import PostBody from '../../components/PostBody';
import Avatar from '../../components/avatar';

export default function Post({ post, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>{post.title} | Entrepreneurship study </title>
        <meta name="description" content={post.excerpt} />
        <meta name="title" content={post.title} />
        <meta property="og:title" content="{post.title}" />
        <meta
          property="og:url"
          content="http://next-js-tailwind-blog.vercel.app/"
        />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
      </Head>
      <Layout preview={preview}>
        {router.isFallback ? (
          <div>Loading....</div>
        ) : (
          <>
            <div>
              {' '}
              <motion.div className="px-6">
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                />
              </motion.div>
              <PostBody>{stringToMdx(post.content)}</PostBody>
              <div className="w-1/2 mx-auto my-8 border border-gray"></div>
              <Avatar />
            </div>
            <div className="w-1/2 mx-auto my-8 border border-gray"></div>
          </>
        )}
      </Layout>
    </motion.div>
  );
}
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
    'excerpt'
  ]);
  const content = await mdxToString(post.content || '');
  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}
