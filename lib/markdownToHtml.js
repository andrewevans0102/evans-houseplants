import remark from 'remark';
import html from 'remark-html';

// this was originally copied from the React.js blog starter here
// https://github.com/zeit/next.js/blob/canary/examples/blog-starter/lib/markdownToHtml.js

// the "content" of this site's posts are just raw text for the most part, but using
// remark and remark-html here enables support if I want to use additional Markdown syntax

// if you get a terminal message like
// "mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead"
// this is in the "mdast-util-to-hast project and is already being fixed by the PR here
// https://github.com/remarkjs/remark-html/pull/29

export default async function markdownToHtml(markdown) {
    const result = await remark().use(html).process(markdown);
    return result.toString();
}
