
import React from 'react';
import feature1Image from '../assets/feature1.png';// Correct path
import feature2Image from '../assets/feature2.png'; // Correct path
import feature3Image from '../assets/feature3.png'; // Correct path
import yourImage from '../assets/feature4.png'; // Adjust the path based on where your image is
import ashishImage from '../assets/ashish.png';
import debbiImage from '../assets/debbi.png';
import makwanaImage from '../assets/makwana.png';
import abc from '../assets/& Video.png';
import logo from '../assets/unnamed 2.png'



const LandingPage = () => {
  return (
    <div className="light grayish-white text-gray-200 min-h-screen">
      {/* Header */}
      <header className="light grayish-white p-4">
      <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="Code Craftery Logo" className="h-10" />
          <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded">Login</button>
        </div>

      </header>

      {/* Main Section */}
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-yellow-400">Code Craftery Present</h2>
          <p className="text-blue-500 mb-6">
          Code Craftery website is a visionary coding blog website project that aims to create an immersive and enriching space for individuals passionate about programming. The project focuses on providing a user-friendly platform where both novice and seasoned developers can access valuable resources, engage with dynamic content, and foster a sense of community.          </p>
          <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded text-lg font-semibold">
            Get Started
          </button>
          <h2 className="text-3xl font-bold text-yellow-400">Features of Code Craftery</h2>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-6 mb-12">
      {/* Feature 1 */}
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        <img
          src={feature1Image}
          alt="Feature 1"
          className="mx-auto mb-4 rounded-lg"
        />
        <h3 className="text-xl font-bold mb-2 text-yellow-400">Easy-to-use interface</h3>
        <p className='text-blue-500'>In-Browser Compilation: Alow users to write and compile code directy within the browser, without the need for additional software.</p>
      </div>

      {/* Feature 2 */}
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        <img
          src={feature2Image}
          alt="Feature 2"
          className="mx-auto mb-4 rounded-lg"
        />
        <h3 className="text-xl font-bold mb-2 text-yellow-400">Automatic document generation</h3>
        <p className='text-blue-500'>Step-by-Step Guides: Clear and concise tutorials that break down complex coding tasks into manageable steps.</p>
      </div>

      {/* Feature 3 */}
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        <img
          src={feature3Image}
          alt="Feature 3"
          className="mx-auto mb-4 rounded-lg"
        />
        <h3 className="text-xl font-bold mb-2 text-yellow-400">Better than ChatGPT</h3>
        <p className='text-blue-500'>Step-by-Step Guides: Clear and concise tutorials that break down complex coding tasks into manageable steps.</p>
      </div>
    </section>
        {/* Automation Section */}
        <div>
  <section className="text-center mb-12">
    <h2 className="text-3xl font-bold text-yellow-400">Automate your process</h2>
    <div className="md:grid md:grid-cols-2 gap-6 items-start">
      {/* Left Column: Features */}
      <div className="space-y-6">
        {/* Feature: Streamline Intake */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2 text-yellow-400">Streamline Intake</h3>
          <p className='text-blue-500'>Send your clients an intake form to capture data and start using it for document generation.</p>
        </div>

        {/* Feature: Demand Letter */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2 text-yellow-400">Demand Letter</h3>
          <p className='text-blue-500'>Generate customized demand letters for your clients.</p>
        </div>

        {/* Feature: Case Management */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2 text-yellow-400">Case Management</h3>
          <p className='text-blue-500'>Easily manage your client's data and supplement as needed.</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Image */}
        <div>
          <img src={yourImage} alt="Automate Process" className="w-full h-auto rounded-lg" />
        </div>
        </div>
 
        {/* Watch a Demo */}

        <div className="mr-4 flex-shrink-0">
    <img src={abc} alt="Automate Process1" className="w-full h-auto rounded-lg object-cover" />
  </div>
        <div className="bg-gray-100 p-6 rounded-lg  items-start ">
          <h3 className="text-xl font-bold mb-2 text-yellow-400">Watch a Demo</h3>
          <p className='text-blue-500'>Step-by-Step Guides: Clear and concise tutorials that break down complex coding tasks into manageable steps. Progress Tracking: A system to track readers' progress through tutorials and provide feedback.Step-by-Step Guides: Clear and concise tutorials that break down complex coding tasks into manageable steps. Progress Tracking: A system to track readers' progress through tutorials and provide feedback.</p>
        </div>
      
      
    </div>
  </section>
</div>



{/* Feedback Section */}

<section className="mb-12">
  <h2 className="text-3xl font-bold text-yellow-400">Feedback from our clients</h2>
  <div className="grid md:grid-cols-3 gap-6">
    
    {/* Feedback Card 1 */}
    <div className="bg-gray-100 p-6 rounded-lg flex items-center">
      {/* Person's Image */}
      <div className="w-16 h-16 rounded-full mr-6">
        <img src={ashishImage} alt="Ashish Sekhva" className="w-full h-full object-cover  overflow-visible" />
      </div>
      {/* Feedback Text */}
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">Ashish Sekhva</h3>
        <p className='text-black'>"Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business."</p>
      </div>
    </div>

    {/* Feedback Card 2 */}
    <div className="bg-gray-100 p-6 rounded-lg flex items-center">
      {/* Person's Image */}
      <div className="w-12 h-12 rounded-full mr-6">
        <img src={debbiImage} alt="Debbi Devang" className="w-full h-full object-cover overflow-visible" />
      </div>
      {/* Feedback Text */}
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">Debbi Devang</h3>
        <p className='text-black'>"Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business."</p>
      </div>
    </div>

    {/* Feedback Card 3 */}
    <div className="bg-gray-100 p-6 rounded-lg flex items-center">
      {/* Person's Image */}
      <div className="w-12 h-12 rounded-full mr-6">
        <img src={makwanaImage} alt="Mr. Makwana" className="w-full h-full object-cover overflow-visible" />
      </div>
      {/* Feedback Text */}
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">Mr. Makwana</h3>
        <p className='text-black'>"Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business."</p>
      </div>
    </div>

  </div>
</section>
</main>

      {/* Footer */}
      
      <footer className="bg-black p-4">
      
        <div className="container mx-auto text-center">
          <ul className="flex justify-center space-x-4 mt-2">
            <li>PROJECT</li>
            <li>SOCIALS</li>
            <li>LEGAL</li>
          </ul>
          <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="Code Craftery Logo" className="h-10" />
        </div>
        <p>&copy; 2024 Code Craftery. All rights reserved.</p>

        </div>
        
      </footer>
    </div>
  );
};

export default LandingPage;