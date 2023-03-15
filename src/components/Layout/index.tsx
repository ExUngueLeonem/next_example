import { FC, ReactNode } from "react";
import Footer from "../Footer";
import Heading from "../Heading";

interface IProps {
    children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
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