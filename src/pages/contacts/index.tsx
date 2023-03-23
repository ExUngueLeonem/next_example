import Layout from "components/Layout";
import { IUser } from "models/contacts";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

interface IProps {
    contacts: IUser[];
}

const Contacts: FC<IProps> = ({ contacts }) => {

    return (
        <>
            <Head>
                <title>Contacts</title>
            </Head>
            <Layout>
                <h1>
                    Contacts
                </h1>
                <ul>
                    {contacts && contacts.map(item => (
                        <li key={item.id}>
                            <Link href={`/contacts/${item.id}`}>
                                {item.name}, ({item.email})
                            </Link>
                        </li>
                    ))}
                </ul>
            </Layout>
        </>
    );
};

//getStaticProps - SSG - static site generation - генерация статической страницы
export const getStaticProps = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();

        return {
            props: {
                contacts: data,
            }
        }
    } catch {
        return { notFound: true }
    }
}

export default Contacts;