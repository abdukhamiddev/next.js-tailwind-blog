import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Layout from '../../components/Layout';
import Head from 'next/head';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import { mdxToString } from '../../lib/mdxSerialization';

export default function Post({ post, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
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
              <h1>{post.title}</h1>
              <p>{post.excerpt}</p>
            </div>
          </>
        )}
      </Layout>
    </div>
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
