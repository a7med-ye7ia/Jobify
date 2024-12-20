import React from 'react';
import { BsTelephone, BsEnvelope, BsClock, BsBuilding } from 'react-icons/bs';
import ContactForm from '../../Components/ContactForm/ContactForm';
import ContactInfo from '../../Components/ContactInfo/ContactInfo';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const Contactus = () => {
    const contactDetails = [
        {
            icon: <BsTelephone className="w-6 h-6" />,
            title: 'Call for inquiry',
            content: '+257 356 6595'
        },
        {
            icon: <BsEnvelope className="w-6 h-6" />,
            title: 'Send us email',
            content: 'hrm.data@stackblitz.net'
        },
        {
            icon: <BsClock className="w-6 h-6" />,
            title: 'Opening hours',
            content: 'Mon - Fri, 10AM - 10PM'
        },
        {
            icon: <BsBuilding className="w-6 h-6" />,
            title: 'Office',
            content: '78 North Road Broadway, NY 09856'
        }
    ];

    return <>
        <Header title={"Contact-us"} />
        <div className="w-full px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-16">Contact Us</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ContactInfo
                        title="You Will Grow, You Will Succeed. We Promise That"
                        description="Please contact us to find out how we can help. Our team is ready to provide consulting and advice. Don't wait while credit score keeps declining."
                        contactDetails={contactDetails}
                    />
                    <ContactForm />
                </div>

                <div className="mt-16">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763!3d40.697403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043435129!5m2!1sen!2s"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map"
                        className="rounded-lg shadow-lg"
                    />
                </div>

                <div className="mt-16 w-full flex justify-center space-x-16 flex-wrap px-6 md:px-12 lg:px-24">
                    <img src="/public/contact-us/zoom.png" alt="Zoom" className="h-12 md:h-16 lg:h-20" />
                    <img src="/public/contact-us/Tinder1.png" alt="Tinder" className="h-12 md:h-16 lg:h-20" />
                    <img src="/public/contact-us/dripple.png" alt="Dribbble" className="h-12 md:h-16 lg:h-20" />
                    <img src="/public/contact-us/asna.png" alt="Asana" className="h-12 md:h-16 lg:h-20" />
                </div>

            </div>
        </div>
    </>
};

export default Contactus;