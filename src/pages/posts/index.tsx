import { GetStaticProps } from 'next';

import { FC } from 'react';
import { IPost } from 'models/post';

import Head from 'next/head';
import Link from 'next/link';

import Layout from 'components/Layout';

interface IProps {
    posts: IPost[];
}

const Posts: FC<IProps> = ({ posts }: { posts: IPost[] }) => {
    return (
        <>
            <Head>
                <title>Posts</title>
            </Head>
            <Layout>
                <h1>
                    Posts
                </h1>
                <ul>
                    {posts && posts.map(item => (
                        <li key={item.id}>
                            <Link href={`/posts/${item.id}`}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Layout>
        </>
    );
}


export const getStaticProps: GetStaticProps = async (ctx) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
        const data = await res.json();

        return { props: { posts: data } }
    } catch {
        return {
            notFound: true
        }
    }
}

export default Posts;