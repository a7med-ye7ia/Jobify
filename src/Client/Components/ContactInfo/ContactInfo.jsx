import React from 'react';

const ContactInfo = ({ title, description, contactDetails }) => {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactDetails.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <div className="text-teal-600">
                            {detail.icon}
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">{detail.title}</h3>
                            <p className="text-gray-600">{detail.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactInfo;