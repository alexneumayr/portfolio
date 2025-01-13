import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              Originally from Salzburg, but now living in Vienna since quite
              some time. Likes coding, hiking, traveling and exotic foods. Can't
              stop watching every single episode of American Dad.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
