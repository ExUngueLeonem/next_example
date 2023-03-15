import Link from "next/link";

interface ILink {
    id: string;
    path: string;
    name: string;
}

const NavBar = ({ links }: { links: ILink[] }) => {
    return (
        <div>
            {links.map(item => <Link key={item.id} href={item.path}>{item.name}</Link>)}
        </div>
    );
};

export default NavBar;