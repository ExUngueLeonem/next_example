import React from 'react';
import Link from 'next/link';

/* middleware */
import {
    absoluteUrl,
    getAppCookies,
    verifyToken,
    setLogout,
} from '@/middleware/utils';

/* components */
import PageJWTLayout from '@/components/PageJWTLayout';

export default function About(props) {
    const { profile } = props;

    function handleOnClickLogout(e) {
        setLogout(e);
    }

    return (
        <PageJWTLayout title="Next.js with JWT Authentication | About Page">
            <div className="container">
                <main>
                    <h1 className="title">About Page</h1>
                    {!profile ? (
                        <Link href="/">Login to continue</Link>
                    ) : (
                        <div>
                            <div style={{ margin: '.5rem 0rem' }}>
                                <Link href={{ pathname: '/auth' }} style={{ marginRight: '.75rem' }}>
                                    &bull; Home Page Auth
                                </Link>
                                <a href="#" onClick={e => handleOnClickLogout(e)}>
                                    &bull; Logout
                                </a>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <fieldset>
                                    <legend>
                                        <h3>Your Profile</h3>
                                    </legend>
                                    <h4>ID: {profile.id}</h4>
                                    <h4>Email: {profile.email}</h4>
                                    <h4>Created: {profile.createdAt}</h4>
                                </fieldset>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </PageJWTLayout>
    );
}

export async function getServerSideProps(context) {
    const { req } = context;
    const { origin } = absoluteUrl(req);

    const baseApiUrl = `${origin}/api/about`;

    const { token } = getAppCookies(req);
    const profile = token ? verifyToken(token.split(' ')[1]) : '';

    return {
        props: {
            baseApiUrl,
            profile,
        },
    };
}