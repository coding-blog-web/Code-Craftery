import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  const FeatureCard = ({ title, description }) => (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-yellow-500 mb-4">{title}</h3>
      <p className="text-sm text-blue-900">{description}</p>
    </div>
  );

const FeedbackCard = ({ name, role, feedback, image }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 shadow-lg bg-white">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{feedback}</p>
    </div>
  );
};
  const feedbacks = [
    {
      name: "Ashish Sekhva",
      role: "Chief Manager",
      feedback:
        "Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.",
      image: "https://via.placeholder.com/150", // Replace with actual image URLs
    },
    {
      name: "Dabhi Devang",
      role: "Chief Manager",
      feedback:
        "Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mr. Makwana",
      role: "Chief Manager",
      feedback:
        "Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <nav className="w-full py-4 px-6 flex justify-between items-center bg-gray-50 shadow-md">
        <div className="flex items-center">
          <img src="./assets/images/logo.png" alt="Code Craftery Logo" className="h-10" />
        </div>
        <Link to="/Login">
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition">Login</button>
        </Link>
      </nav>

      <section className="flex flex-col items-center text-center px-4 py-10    justify-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-500">Code Craftery Present</h1>
        <p className="mt-4  text-blue-900 text-justify text-sm md:text-lg max-w-2xl font-medium">
          <strong>Code Craftery</strong> website is a visionary coding blog website project that aims to create an immersive and enriching space for individuals passionate about programming. The project focuses on providing a user-friendly platform where both novice and seasoned developers can access valuable resources, engage with dynamic content, and foster a sense of community.
        </p>
        <Link to="/Login">
          <button className="mt-8 px-6 py-3 bg-yellow-500 text-white rounded-full shadow-md text-lg font-semibold hover:bg-yellow-600 transition">Get Started</button>
        </Link>
      </section>

      <section className="py-12 px-4 w-full">
        <h2 className="text-2xl font-bold text-yellow-500 text-center mb-8">Features of Code Craftery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <FeatureCard title="Easy-to-use interface" description="In-Browser Compilation: Write and compile code directly within the browser." />
          <FeatureCard title="Automatic document generation" description="Step-by-Step Guides: Clear tutorials breaking down complex tasks." />
          <FeatureCard title="Voice Control Dashboard" description="Interactive tutorials with feedback and progress tracking." />
        </div>
      </section>

      <section className="py-12 px-6 w-full">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold text-yellow-500 mb-12">Automate Your Process</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="mb-8">
                <h3 className="text-lg font-bold text-yellow-500">Streamline Intake</h3>
                <p className="text-sm text-blue-900">Send your clients an intake form to capture data and generate documents.</p>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-bold text-yellow-500">Demand Letter</h3>
                <p className="text-sm text-blue-900">Generate customized demand letters for your clients.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-yellow-500">Case Management</h3>
                <p className="text-sm text-blue-900">Easily manage client data and supplement as needed.</p>
              </div>
            </div>
            <div className="flex justify-end">
              <img src="./assets/images/grp.png" alt="Process illustration" className="w-[400px] h-[250px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <iframe className="w-full h-64" src="" title="Demo Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div>
              <h3 className="text-lg font-bold text-yellow-500">Watch a demo:</h3>
              <p className="text-sm font-semibold text-blue-900 mt-2">Complete Online Video  Tutorials :</p>
              <p className="text-sm text-blue-900 mt-2">Step-by-Step Guides: Clear and concise tutorials that break down complex coding tasks into manageable steps. Progress Tracking: A system to track readers' progress through tutorials and provide feedback.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center p-2">
      <h2 className="text-2xl md:text-4xl font-bold text-yellow-500 mb-8">
        Feedback from our clients
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.map((feedback, index) => (
          <FeedbackCard key={index} {...feedback} />
        ))}
      </div>
    </section>
    </div>
  );
}

export default LandingPage;
