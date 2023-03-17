import { IUser } from "models/contacts";
import { FC } from "react";

interface IProps {
    contact: IUser;
}

const ContactInfo: FC<IProps> = ({ contact }) => {
    const { name, email, address } = contact || {};
    const { street, suite, city, zipcode } = address || {};


    if (!contact) {
        return <h2>пустой контакт</h2>
    }

    return (
        <>
            <div>
                <strong>
                    {contact.name}
                    {email}
                </strong>

            </div >

            <div>
                <strong>
                    {street}, {suite}, {city}, {zipcode}
                </strong>s
            </div>
        </>
    );
};

export default ContactInfo;