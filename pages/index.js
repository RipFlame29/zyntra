import Head from 'next/head';
import { useRef } from 'react';

export default function Home() {
  const formRef = useRef(null);

  const handleScrollToForm = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Your Company Name - Join Us!</title>
        <meta name="description" content="Apply to join our coding company and work on exciting projects!" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center">
        {/* Landing Section */}
        <header className="w-full py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Your Company Name</h1>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            We build innovative software and open source projects. Join our team of passionate developers and make an impact!
          </p>
          <button
            onClick={handleScrollToForm}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Apply Now
          </button>
        </header>

        {/* Application Form */}
        <main ref={formRef} className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Application Form</h2>
          <form
            className="flex flex-col gap-4"
            action="https://formspree.io/f/your-form-id" // Replace with your Formspree or backend endpoint
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border rounded px-4 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border rounded px-4 py-2"
            />
            <select name="role" required className="border rounded px-4 py-2">
              <option value="">Select Role</option>
              <option value="developer">Developer</option>
              <option value="manager">Manager</option>
              <option value="designer">Designer</option>
              <option value="other">Other</option>
            </select>
            <input
              type="url"
              name="resume"
              placeholder="Link to Resume or GitHub"
              required
              className="border rounded px-4 py-2"
            />
            <textarea
              name="message"
              placeholder="Why do you want to join?"
              required
              className="border rounded px-4 py-2"
              rows={4}
            />
            <button
              type="submit"
              className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Submit Application
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
