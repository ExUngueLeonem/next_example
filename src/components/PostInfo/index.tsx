import { IPost } from '@/models/post';

const PostInfo = ({ post }: { post: IPost }) => {
    const { id, title, body } = post
    return (
        <>
            <h1>
                {id}<strong>{title}</strong>
            </h1 >
            <div>
                <strong>
                    {body}
                </strong>
            </div>
        </>
    );
}

export default PostInfo;