"use client";

import axios from "axios";
import { Field, Form, Formik } from 'formik';
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Headers from "../../components/Header";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Footer from "../../components/Footer";

interface DataProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact: React.FC = () => {

    const {replace} = useRouter();

    const handleSubmitted = useCallback(async (data: DataProps, FormikHelpers: ({
        resetForm: any; name: '', email: '', subject: '', message: ''
    })) => {
        await axios.post("http://localhost:3000/dataUser", data);
        FormikHelpers.resetForm();
        return replace("/table")
    }, [])

    const validate = (value: string) => {
        let errorMessage;
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            errorMessage = 'Invalid email address';
        }
        return errorMessage;
    };

    return (
        <div>
            <Headers />
            <div className="page-header flex items-start justify-start bg-cover bg-no-repeat bg-scroll bg-bottom bg-center bg-[#202020] min-h-[280px] relative" style={{ backgroundImage: "url('https://abffreightsolution.com/wp-content/uploads/2021/06/pexels-samuel.jpg')" }}>
                <div className="breadcrumbs breadcrumbs-align-right breadcrumbs-inline">
                    <div className="page-header_wrapper">
                        <div className="wgl-container">
                            <div className="page-header_content font-bold">
                                <div className="title page-header font-semibold text-white text-5xl leading-[60px]">Contacts</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className="flex justify-between mx-12">
                <div className="px-6 py-12 w-1/2">
                    <div>
                        <h1 className="text-4xl">Drop Us a Line</h1>
                        <p className="my-6"> Please give us a call, drop us an email or fill out the contact formand we’ll get back to you.</p>
                    </div>
                    <div className="icone space-y-4">
                        {/* Location */}
                        <div className="flex items-center space-x-2">
                            <MapPinIcon className="h-6 w-6 text-blue-500" />
                            <span className="font-medium">Behbehani Complex Jaber Al Mubarak Street Floor 7 Office No 11</span>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center space-x-2">
                            <PhoneIcon className="h-6 w-6 text-blue-500" />
                            <span className="font-medium">+965 516 44517</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-2">
                            <EnvelopeIcon className="h-6 w-6 text-blue-500" />
                            <span className="font-medium">inquiry@abffreightsolution.com</span>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 px-6 py-12 flex justify-center items-center">

                    <Formik
                        initialValues={{ name: '', email: '', subject: '', message: '' }}
                        onSubmit={handleSubmitted}
                    >
                        {({
                            errors,
                            touched,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <Form className="w-2/3" onSubmit={handleSubmit}>
                                <div>Name</div>
                                <div className="input-group flex-nowrap mb-4 border-2 rounded px-2">
                                    <Field
                                        type='text'
                                        name="name"
                                        className="form-control w-full"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>Email</div>
                                <div className="input-group flex-nowrap mb-4 border-2 rounded px-2">
                                    <Field
                                        type='email'
                                        name="email"
                                        validate={validate}
                                        className="form-control w-full"
                                        placeholder="name@example.com"
                                        aria-describedby="addon-wrapping" />
                                </div>

                                {errors.email && touched.email ? (
                                    <div style={{ color: "red" }}>{errors.email}</div>
                                ) : null}

                                <div>Subject</div>
                                <div className="input-group flex-nowrap mb-4 border-2 rounded px-2">
                                    <Field
                                        type='text'
                                        name="subject"
                                        className="form-control w-full"
                                        placeholder="For web design work Enquire"
                                        aria-describedby="addon-wrapping" />
                                </div>

                                <div>Message</div>
                                <div className="input-group flex-nowrap mb-4 border-2 rounded px-2">
                                    <Field
                                        type='text'
                                        name="message"
                                        className="form-control w-full"
                                        placeholder="Type your Message"
                                        aria-describedby="addon-wrapping" />
                                </div>
                                <button type="submit" disabled={isSubmitting} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition">SUBMIT</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;

