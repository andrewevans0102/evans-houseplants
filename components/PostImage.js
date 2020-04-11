const PostImage = ({ coverImage }) => {
    return (
        <div>
            <div className="post__image--container">
                <img className="post__image--show" src={coverImage} />
            </div>
        </div>
    );
};

export default PostImage;
