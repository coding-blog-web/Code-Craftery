// import { Link } from 'react-router-dom';
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three'; 
// import HALO from 'vanta/dist/vanta.halo.min'; 

// function LandingPage() {
//   const vantaRef = useRef(null);
//   let vantaEffect = null;

//   useEffect(() => {
//     if (!vantaEffect) {
//       vantaEffect = HALO({
//         el: vantaRef.current,
//         THREE: THREE, // Explicitly pass the THREE object to Vanta
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.0,
//         minWidth: 200.0,
//         backgroundColor: 0x0c0c0c, // Subtle dark background
//         amplitudeFactor: 2.5, // Enhance halo effect
//       });
//     }

//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, []);

//   const FeatureCard = ({ title, description }) => (
//     <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
//       <h3 className="text-lg font-bold text-yellow-600 mb-4">{title}</h3>
//       <p className="text-sm text-gray-700">{description}</p>
//     </div>
//   );

//   const FeedbackCard = ({ name, role, feedback, image }) => (
//     <div className="border border-gray-200 rounded-lg p-6 shadow-lg bg-gray-100">
//       <div className="flex items-center space-x-4 mb-4">
//         <img
//           src={image}
//           alt={name}
//           className="w-16 h-16 rounded-full object-cover"
//         />
//         <div>
//           <h3 className="font-bold text-lg text-gray-900">{name}</h3>
//           <p className="text-gray-500 text-sm">{role}</p>
//         </div>
//       </div>
//       <p className="text-gray-800 text-sm">{feedback}</p>
//     </div>
//   );

//   const feedbacks = [
//     {
//       name: "Ashish Sekhva",
//       role: "Chief Manager",
//       feedback:
//         "Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       name: "Dabhi Devang",
//       role: "Chief Manager",
//       feedback:
//         "Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.",
//       image: "https://via.placeholder.com/150",
//     },
//     {
//       name: "Mr. Makwana",
//       role: "Chief Manager",
//       feedback:
//         "Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.",
//       image: "https://via.placeholder.com/150",
//     },
//   ];

//   return (
//     <div ref={vantaRef} className="min-h-screen flex flex-col">
//       <nav className="w-full py-4 px-6 flex justify-between items-center bg-opacity-75 bg-black text-white">
//         <div className="flex items-center">
//           <img
//             src="./assets/images/logo.png"
//             alt="Code Craftery Logo"
//             className="h-10"
//           />
//         </div>
//         <Link to="/Login">
//           <button className="px-4 py-2 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition">
//             Login
//           </button>
//         </Link>
//       </nav>

//       <section className="flex flex-col items-center text-center px-4 py-20 justify-center">
//         <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-500 mb-6">
//           Welcome to Code Craftery
//         </h1>
//         <p className="text-gray-200 text-lg md:text-xl max-w-2xl">
//           Your ultimate destination for programming knowledge. Access valuable
//           resources, dynamic content, and connect with a vibrant community of
//           developers.
//         </p>
//         <Link to="/Login">
//           <button className="mt-8 px-6 py-3 bg-yellow-500 text-white rounded-full shadow-md text-lg font-semibold hover:bg-yellow-600 transition">
//             Get Started
//           </button>
//         </Link>
//       </section>

//       <section className="py-12 px-6 w-full">
//         <h2 className="text-2xl font-bold text-yellow-600 text-center mb-8">
//           Features of Code Craftery
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//           <FeatureCard
//             title="Easy-to-use Interface"
//             description="Write and compile code directly within the browser."
//           />
//           <FeatureCard
//             title="Automatic Documentation"
//             description="Step-by-step guides to simplify complex tasks."
//           />
//           <FeatureCard
//             title="Voice-Control Dashboard"
//             description="Interactive tutorials with feedback and progress tracking."
//           />
//         </div>
//       </section>
//       <section className="py-12 px-6 w-full">
//          <div className="max-w-7xl mx-auto">
//            <h2 className="text-center text-3xl font-bold text-yellow-500 mb-12">Automate Your Process</h2>
//            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//              <div>
//                <div className="mb-8">
//                  <h3 className="text-lg font-bold text-yellow-500">Streamline Intake</h3>
//                  <p className="text-gray-200 text-lg md:text-xl">Send your clients an intake form to capture data and generate documents.</p>
//                </div>
//                <div className="mb-8">
//                  <h3 className="text-lg font-bold text-yellow-500">Demand Letter</h3>
//                  <p className="text-gray-200 text-lg md:text-x">Generate customized demand letters for your clients.</p>
//                </div>
//                <div>
//                  <h3 className="text-lg font-bold text-yellow-500">Case Management</h3>
//                  <p className="text-gray-200 text-lg md:text-x">Easily manage client data and supplement as needed.</p>
//                </div>
//              </div>
//              <div className="flex justify-end">
//                <img src="./assets/images/grp.png" alt="Process illustration" className="w-[400px] h-[250px]" />
//              </div>
//            </div>
//          </div>
//        </section>

//       <section className="py-12 px-6 w-full">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
//             <iframe
//               className="w-full h-64"
//               src=""
//               title="Demo Video"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//           <div>
//             <h3 className="text-lg font-bold text-yellow-600 mb-4">Watch a Demo:</h3>
//             <p className="text-gray-200 text-lg md:text-x">
//               Clear and concise tutorials that break down complex coding tasks
//               into manageable steps. Track progress and gain valuable insights.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-12 px-6 bg-gray-100 w-full">
//         <h2 className="text-2xl font-bold text-yellow-600 text-center mb-8">
//           Feedback from Our Clients
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
//           {feedbacks.map((feedback, index) => (
//             <FeedbackCard key={index} {...feedback} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default LandingPage;






import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three'; // Required by Vanta.js
import NET from 'vanta/dist/vanta.net.min'; // Import the NET effect

function LandingPage() {
  const vantaRef = useRef(null);
  let vantaEffect = null;

  useEffect(() => {
    if (!vantaEffect) {
      vantaEffect = NET({
        el: vantaRef.current,
        THREE: THREE, // Explicitly pass the THREE object to Vanta
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        backgroundColor: 0x0c0c0c, // Subtle dark background
        color: 0xff9933, // Customize the color of the net
        points: 10.0, // Adjust the density of points
        maxDistance: 20.0, // Adjust the spacing between points
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  const FeatureCard = ({ title, description }) => (
        <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition">
          <h3 className="text-lg font-bold text-yellow-600 mb-4">{title}</h3>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      );
    
      const FeedbackCard = ({ name, role, feedback, image }) => (
        <div className="border border-gray-200 rounded-lg p-6 shadow-lg bg-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={image}
              alt={name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold text-lg text-gray-900">{name}</h3>
              <p className="text-gray-500 text-sm">{role}</p>
            </div>
          </div>
          <p className="text-gray-800 text-sm">{feedback}</p>
        </div>
      );
    
      const feedbacks = [
        {
          name: "Ashish Sekhva",
          role: "Chief Manager",
          feedback:
            "Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.",
          image: "https://via.placeholder.com/150",
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
    <div ref={vantaRef} className="min-h-screen flex flex-col">
      <nav className="w-full py-4 px-6 flex justify-between items-center bg-opacity-75 bg-black text-white">
        <div className="flex items-center">
           <img
            src="./assets/images/logo.png"
            alt="Code Craftery Logo"
            className="h-10"
          />
        </div>
        <Link to="/Login">
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-full shadow-md hover:bg-yellow-600 transition">
            Login
          </button>
        </Link>
      </nav>

      <section className="flex flex-col items-center text-center px-4 py-20 justify-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-500 mb-6">
          Welcome to Code Craftery
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl">
          Your ultimate destination for programming knowledge. Access valuable
          resources, dynamic content, and connect with a vibrant community of
          developers.
        </p>
        <Link to="/Login">
          <button className="mt-8 px-6 py-3 bg-yellow-500 text-white rounded-full shadow-md text-lg font-semibold hover:bg-yellow-600 transition">
            Get Started
          </button>
        </Link>
      </section>

      <section className="py-12 px-6 w-full">
        <h2 className="text-2xl font-bold text-yellow-600 text-center mb-8">
          Features of Code Craftery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <FeatureCard
            title="Easy-to-use Interface"
            description="Write and compile code directly within the browser."
          />
          <FeatureCard
            title="Automatic Documentation"
            description="Step-by-step guides to simplify complex tasks."
          />
          <FeatureCard
            title="Voice-Control Dashboard"
            description="Interactive tutorials with feedback and progress tracking."
          />
        </div>
      </section>
      <section className="py-12 px-6 w-full">
         <div className="max-w-7xl mx-auto">
           <h2 className="text-center text-3xl font-bold text-yellow-500 mb-12">Automate Your Process</h2>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             <div>
               <div className="mb-8">
                 <h3 className="text-lg font-bold text-yellow-500">Streamline Intake</h3>
                 <p className="text-gray-200 text-lg md:text-xl">Send your clients an intake form to capture data and generate documents.</p>
               </div>
               <div className="mb-8">
                 <h3 className="text-lg font-bold text-yellow-500">Demand Letter</h3>
                 <p className="text-gray-200 text-lg md:text-x">Generate customized demand letters for your clients.</p>
               </div>
               <div>
                 <h3 className="text-lg font-bold text-yellow-500">Case Management</h3>
                 <p className="text-gray-200 text-lg md:text-x">Easily manage client data and supplement as needed.</p>
               </div>
             </div>
             <div className="flex justify-end">
               <img src="./assets/images/grp.png" alt="Process illustration" className="w-[400px] h-[250px]" />
             </div>
           </div>
         </div>
       </section>

      <section className="py-12 px-6 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-64"
              src=""
              title="Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h3 className="text-lg font-bold text-yellow-600 mb-4">Watch a Demo:</h3>
            <p className="text-gray-200 text-lg md:text-x">
              Clear and concise tutorials that break down complex coding tasks
              into manageable steps. Track progress and gain valuable insights.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-100 w-full">
        <h2 className="text-2xl font-bold text-yellow-600 text-center mb-8">
          Feedback from Our Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {feedbacks.map((feedback, index) => (
            <FeedbackCard key={index} {...feedback} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
