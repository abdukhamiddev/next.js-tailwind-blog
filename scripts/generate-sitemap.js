const globby = require('globby');
const prettier = require('prettier');

//prettier-ignore
(async () => {
  const prettierConfig = await prettier.resolveConfig('../prettierrc.js');
  console.log(prettierConfig);
  const pages = await globby([
    'pages/*.js',
    '_posts/**/*.md',
    '!pages/_*.js',
    '!pages/api'
  ]);
  const sitemap = `       
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('pages', '')
            .replace('_posts', '/posts')
            .replace('data', '')
            .replace('.js', '')
            .replace('.md', '');
          const route = path === '/index' ? '' : path;

          return `
                  <url>
                      <loc>${`http://next-js-tailwind-blog.vercel.app${route}`}</loc>
                      <changefreq>weekly</changefreq>
                  </url>
              `;
        })
        .join('')}
  </urlset>`;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });
})
