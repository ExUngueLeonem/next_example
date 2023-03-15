import ContactInfo from '@/components/ContactInfo';
import Layout from '@/components/Layout';
import { IUser } from '@/models/contacts';
import { GetServerSideProps } from 'next';


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { id } = ctx.query

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await res.json();

        return {
            props: {
                contact: data,
            }
        }
    } catch {
        return { notFound: true }
    }
}

const Contact = ({ contact }: { contact: IUser }) => {
    return (
        <Layout>
            <ContactInfo contact={contact} />
        </Layout>
    );
}

export default Contact;