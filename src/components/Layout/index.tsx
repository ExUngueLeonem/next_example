import { ReactNode } from "react";
import Footer from "../Footer";
import Heading from "../Heading";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Heading />
            <main className="container">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;