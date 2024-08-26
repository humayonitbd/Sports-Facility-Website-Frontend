import ContactDetails from "./ContactDetails/ContactDetails";
import ContactForm from "./ContactForm/ContactForm";
import MapIntigration from "./MapIntigration/MapIntigration";

const Contact = () => {
    return (
        <div>
            <ContactForm />
            <MapIntigration />
            <ContactDetails />
        </div>
    );
};

export default Contact;