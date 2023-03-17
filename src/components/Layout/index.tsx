import Header from "components/Header";
import { FC, ReactNode } from "react";
import Footer from "../Footer";
import Heading from "../Heading";

interface IProps {
    children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
    return (
        <>
            <Header />
            <Heading />
            <main className="container">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;