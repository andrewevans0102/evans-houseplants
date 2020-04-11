import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

// this was originally copied from the blog starter here
// https://github.com/zeit/next.js/blob/canary/examples/blog-starter/lib/api.js

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }

        if (data[field]) {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllPosts(fields = []) {
    const slugs = getPostSlugs();
    return slugs.map((slug) => getPostBySlug(slug, fields));
}
