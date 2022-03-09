import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export function getSlugs() {
	return fs.readdirSync(postsDirectory).map((d) => d.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug, fields = []) {
	const file = join(postsDirectory, `${slug}.mdx`);
	const fileContent = fs.readFileSync(file, "utf-8");
	const { data, content } = matter(fileContent);

	const items = {};

	fields.forEach((field) => {
		if (field === slug) {
			items[field] = slug;
		}
		if (field === "content") {
			items[field] = content;
		}
		if (data[field]) {
			items[field] = data[field];
		}
	});
	return items;
}

export function getAllPosts(fields = []) {
	const slugs = getSlugs();
	const posts = slugs
		.map((slug) => getPostBySlug(slug, fields))
		.sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));

	return posts;
}
