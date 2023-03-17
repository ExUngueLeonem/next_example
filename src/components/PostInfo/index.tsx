import { IPost } from 'models/post';
import { FC } from 'react';

interface IProps {
    post: IPost
}

const PostInfo: FC<IProps> = ({ post }) => {
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