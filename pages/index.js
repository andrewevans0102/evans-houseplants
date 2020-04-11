import Header from '../components/Header';
import { getAllPosts } from '../lib/api';
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

    return {
        props: { allPosts },
    };
}
