import {FC, ReactNode} from "react";
import Footer from "../Footer";
import Header from "../Header";
import {useSession} from "next-auth/react";

interface IProps {
    children: ReactNode;
}

const Layout: FC<IProps> = ({children}) => {
    const {data, status} = useSession()
    console.log("data", data, "status", status)
    return (
        <>
            <Header/>
            <main className="container">
                {status === "authenticated" ?
                    <>
                        {children}
                    </>
                    :
                    "you are not logged in"
                }
            </main>
            <Footer/>
        </>
    );
};

export default Layout;