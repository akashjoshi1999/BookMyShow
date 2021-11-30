import { React, useState, useEffect } from "react";
import Axios from "axios";

export default function Contact() {
    const [show, setShow] = useState(false);
    const [id, setId] = useState("");
    const [contactname, setcontactname] = useState("");
    const [emailid, setemailid] = useState("");
    const [reason, setreason] = useState("");
    const [date, setdate] = useState("");
    // const [editBUttonSHow, seteditBUttonSHow] = useState(false);
    const [contact, setcontact] = useState([]);


    useEffect(() => {
        Axios.post("http://localhost:3004/contact/contact_us").then((response) => {
            if (response.data) {
                setcontact(response.data);
                console.log(response.data);
            }
        })
    }, [])

    //   const displayform = () => {
    //     setShow(!show);
    //     seteditBUttonSHow(false);
    //     setcontactname("");
    //     setemailid("");
    //     setreason("");
    //     setdate("");
    //   };


    const onDelete = (contacts) => {
        console.log(contact.id);
        setcontact(
            contacts.filter((e) => {
                return e !== contact;
            })
        );
        Axios.post("http://localhost:3004/contact/delete_contact", {
            contactId: contact.id,
        }).then((response) => {
            setcontact(response.data);
        });
    };

    return (
        <div className="movie-container">

            <div>
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Contact Name</th>
                            <th>Email ID</th>
                            <th>Reason</th>
                            <th>DATE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>

                        {contact.map((contact) => {
                            console.log(contact.id)
                            return (

                                <tr>
                                    <td>{contact.id}</td>
                                    <td>{contact.contactname}</td>
                                    <td>{contact.emailid}</td>
                                    <td>{contact.reason}</td>
                                    <td>{contact.date}</td>
                                    <td><button onClick={() => { onDelete(contact) }}>❌ &nbsp;</button></td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}