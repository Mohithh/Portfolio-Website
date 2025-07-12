import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-24 text-gray-800">
      {/* Header */}
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-1 md:mb-1 animate-fade-in mt-9 md:mt-0">
          About Me
        </h2>
        <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full"></div>
      </div>

      {/* Profile Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 mb-12 md:mb-16 lg:mb-20 animate-fade-in-delay">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="mx-auto w-32 sm:w-40 md:w-52 lg:w-64 aspect-square rounded-full overflow-hidden shadow-xl border-4 border-white hover:scale-105 transition-transform duration-300">
            <Image 
              src="/Mohit kumar yadav.jpg"
              alt="Mohit"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mohit Kumar Yadav
              <span className="block text-lg md:text-xl font-medium text-indigo-600 mt-1">Full Stack Web Developer</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-6">
              Hello! I&apos;m Mohit Kumar Yadav, a passionate Full Stack Developer from Uttar Pradesh, India with expertise in MERN stack (MongoDB, Express.js, React, Node.js), Next.js, and Tailwind CSS. I specialize in building secure, scalable web applications with optimized performance and intuitive user interfaces.
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mohityadavhh@gmail.com&su=Hello%20Mohit&body=I%20want%20to%20connect%20with%20you!" 
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow hover:shadow-md transition-all flex items-center gap-2 hover:scale-105"
              >
                <span>✉️</span>
                Email Me
              </a>
              <a  
                href="https://github.com/Mohithh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-lg shadow hover:shadow-md transition-all flex items-center gap-2 hover:scale-105"
              >
                <span>👨‍💻</span>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Education */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-indigo-100 p-3 rounded-full">
              <span className="text-indigo-600 text-xl">🎓</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Education</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-indigo-50 p-5 rounded-xl">
              <h4 className="font-bold text-indigo-700">Bachelor of Engineering in Computer Science</h4>
              <p className="text-gray-600 mt-2">Chandigarh University (2020–2024)</p>
              <p className="text-sm text-gray-500 mt-3">CGPA: 7.5</p>
              <p className="text-sm text-gray-600 mt-2">
                Relevant Courses: Data Structures & Algorithms, Web Development, Database Management, Operating Systems, Artificial Intelligence
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-full">
              <span className="text-purple-600 text-xl">🛠️</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Skills</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Programming</h4>
              <ul className="space-y-1 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  JavaScript
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Python
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                  Java
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Development</h4>
              <ul className="space-y-1 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  React.js/Next.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Node.js/Express
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  MongoDB
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Tailwind CSS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Certifications */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <span className="text-green-600 text-xl">📜</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Certifications</h3>
          </div>
          <ul className="space-y-3">
            {[
              "Crash Course on Python (Google - Coursera)",
              "Programming with Python (Internshala Training)",
              "Programming with JavaScript, HTML, and CSS (Coursera)",
              "Core Java Specialization (Coursera)",
              "Data Mining (NPTEL)"
            ].map((cert, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <span className="text-gray-700">{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-yellow-100 p-3 rounded-full">
              <span className="text-yellow-600 text-xl">🏆</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Achievements</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">★</span>
              <div>
                <h4 className="font-medium text-gray-800">Hackathon 2023 Finalist</h4>
                <p className="text-gray-600">Developed a real-time chat application using Next.js</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">★</span>
              <div>
                <h4 className="font-medium text-gray-800">Tech Community Leader</h4>
                <p className="text-gray-600">Conducted MongoDB Performance Workshop for 50+ students</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-3 mt-1">★</span>
              <div>
                <h4 className="font-medium text-gray-800">Mentor</h4>
                <p className="text-gray-600">Guided junior developers in Next.js & backend development</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 md:p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-blue-100 p-3 rounded-full">
            <span className="text-blue-600 text-xl">🚀</span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">Featured Projects</h3>
        </div>

        {/* Project 1 */}
        <div className="mb-8 p-5 bg-blue-50 rounded-xl">
          <h4 className="text-xl font-bold text-blue-700 mb-2">E-Commerce Platform (Full-Stack)</h4>
          <p className="text-gray-700 mb-4">
            High-performance e-commerce platform with secure transactions and optimized database performance.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
            <li>Optimized database queries with MongoDB indexing and Redis caching, reducing API response times by 40%</li>
            <li>Implemented JWT authentication with bcrypt hashing and role-based access control</li>
            <li>Developed responsive UI with Tailwind CSS and integrated Stripe payment processing</li>
            <li>Tech Stack: Next.js, Node.js, MongoDB, Redis, JWT, Stripe API</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="p-5 bg-indigo-50 rounded-xl">
          <h4 className="text-xl font-bold text-indigo-700 mb-2">ProConnect – Professional Networking</h4>
          <p className="text-gray-700 mb-4">
            Secure platform connecting users with experts across various fields with real-time communication.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Enabled role-based login (User/Faculty) with JWT authentication and encrypted credentials</li>
            <li>Implemented searchable profiles, file uploads (Multer), and real-time notifications</li>
            <li>Added category-based expert filtering and document download functionality</li>
            <li>Tech Stack: Next.js, Node.js, Express, MongoDB, JWT, bcrypt, Multer</li>
          </ul>
        </div>
      </div>
 
      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-10 text-white text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Let&apos;s Work Together</h3>
        <p className="text-lg text-indigo-100 mb-6 max-w-2xl mx-auto">
          I&apos;m currently available for freelance projects and full-time opportunities. Whether you have a question or just want to say hi, I&apos;ll get back to you!
        </p>
        <a 
          href="mailto:mohityadavhh@gmail.com" 
          className="inline-block px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-lg hover:bg-opacity-90 transition-all"
        >
          ✉️ Contact Me
        </a>
      </div>
    </section>
  );
};

export default About;
