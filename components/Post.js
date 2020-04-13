import PostImage from './PostImage';

const Post = ({ post }) => {
    return (
        <section className="post">
            <div className="post__title">{post.title}</div>
            <div className="post__date">{post.date}</div>
            {post.coverImage && <PostImage coverImage={post.coverImage} />}
            <article
                className="post__content"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </section>
    );
};

export default Post;
