import Layout from '@/components/Layout';
import PostInfo from '@/components/PostInfo';
import { IPost } from '@/models/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

const Post = ({ post }: { post: IPost }) => {
    return (
        <Layout>
            <PostInfo post={post} />
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data: IPost[] = await res.json();

    const paths = data.map(({ id }) => ({ params: { id: id.toString() } }))
    return {
        paths,
        fallback: false,
    }
}

interface IParams extends ParsedUrlQuery {
    id: string
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    try {
        const { id } = ctx.params as IParams
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await res.json();

        return { props: { post: data } }
    } catch {
        return {
            notFound: true
        }
    }
}

export default Post;