import Link from "next/link";
import { FC } from "react";

interface ILink {
    id: string;
    path: string;
    name: string;
}

interface IProps {
    links: ILink[];
}

const NavBar: FC<IProps> = ({ links }) => {
    return (
        <div>
            {links.map(item => <Link key={item.id} href={item.path}>{item.name}</Link>)}
        </div>
    );
};

export default NavBar;