import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              Contact
            </h1>
            <p className="description">
              If you have a question please send me an email or a message on
              WhatsApp.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: alex.nmr@icloud.com</li>
              <li className="contact-item">Phone: +436765466018</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
