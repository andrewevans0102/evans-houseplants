import ReactMarkdown from 'react-markdown';
import PostImage from './PostImage';

const Post = ({ post }) => {
    return (
        <section className="post">
            <div className="post__title">{post.title}</div>
            <div className="post__date">{post.date}</div>
            {post.coverImage && <PostImage coverImage={post.coverImage} />}
            <article className="post__content">
                <ReactMarkdown source={post.content} />
            </article>
        </section>
    );
};

export default Post;
