import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Avatar from '../components/avatar';
import Highlight from '../components/highlight';

const components = { Avatar, Highlight };
export async function mdxToString(mdx) {
  return await serialize(mdx, { components });
}

export function stringToMdx(string) {
  return <MDXRemote {...string} {...components} />;
}
