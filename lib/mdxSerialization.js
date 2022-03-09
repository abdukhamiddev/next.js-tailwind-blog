import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export async function mdxToString(mdx) {
	return await serialize(mdx);
}

export function stringToMdx(string) {
	return <MDXRemote {...string} />;
}
