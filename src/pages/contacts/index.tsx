import Layout from "@/components/Layout";
import { IUser } from "@/models/contacts";
import Head from "next/head";
import Link from "next/link";

const Contacts = ({ contacts }: { contacts: IUser[] }) => {

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
        const contacts = await res.json();

        return {
            props: {
                contacts,
            }
        }
    } catch {
        return { notFound: true }
    }
}

export default Contacts;