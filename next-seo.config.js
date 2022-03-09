const title = "Blog of a student front-end developer from Tashkent";
const description =
	"Student Front-End Developer, I tell my adventures and my experiences on the realization of my projects on this blog.";

const SEO = {
	title,
	description,
	canonical: "http://next-js-tailwind-blog.vercel.app/",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "http://next-js-tailwind-blog.vercel.app/",
		title,
		description,
		images: [
			{
				url: "http://next-js-tailwind-blog.vercel.app/static/images/banner.jpg",
				alt: title,
				width: 1280,
				height: 720,
			},
		],
	},
	gitHub: {
		handle: "@abdukhamiddev",
		site: "@abdukhamidded",
		cardType: "summary_large_image",
	},
};
