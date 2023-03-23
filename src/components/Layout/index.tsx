import { FC, ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

interface IProps {
    children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="container">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;