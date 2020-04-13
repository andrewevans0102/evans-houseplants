import Header from '../components/Header';
import { getAllPosts } from '../lib/api';
import markdownToHtml from '../lib/markdownToHtml';
import Post from '../components/Post';

const HomePage = ({ allPosts }) => (
    <div>
        <Header></Header>
        <div className="home">
            {allPosts.map((singlePost) => (
                <Post post={singlePost} key={singlePost.postNumber} />
            ))}
        </div>
    </div>
);

export default HomePage;

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'content',
        'coverImage',
        'postNumber',
    ]);

    allPosts.sort(function (a, b) {
        if (a.postNumber < b.postNumber) {
            return 1;
        }

        if (a.postNumber > b.postNumber) {
            return -1;
        }

        return 0;
    });

    allPosts.forEach(async (post) => {
        const originalContent = post.content;
        post.content = await markdownToHtml(originalContent);
    });

    return {
        props: { allPosts },
    };
}
