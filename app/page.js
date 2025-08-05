"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Page = () => {
  // Skills with icons
  const skills = [
    { name: "Next.js", icon: "/Next.js.png" },
    { name: "React.js", icon: "/reactjs.png" },
    { name: "Node.js", icon: "/node.png" },
    { name: "MongoDB", icon: "/mongodb.png" },
    { name: "JavaScript", icon: "/javascript.png" },
    { name: "Tailwind CSS", icon: "/tailwind.png" },
    { name: "HTML", icon: "/html.png" },
    { name: "CSS", icon: "/css.png" },
    { name: "GitHub", icon: "/github.png" },
    { name: "Express.js", icon: "/express.png" },
    { name: "REST API", icon: "/api.png" },
    { name: "Thunder Client", icon: "/thunder.png" },
    { name: "+ More Tools", icon: "/plus.png" },
  ];

  const project = [
     {
      title: "Cloud-Notebook",
      tech: ["React.js", "Context API", "Node.js", "MongoDB"],
      description:
        "Cloud-Notebook is a secure, full-stack note-taking app that supports user authentication, text and image uploads, and complete CRUD operations — all in a clean, responsive UI",
      code: "https://github.com/Mohithh/Cloud-Notebook",
      file: "https://cloud-notebookk.vercel.app/",
      category: "major",
      image: "/iNodebook _ you data has been Encrypted - Google Chrome 06-07-2025 11_33_17.png",
      tag: ""
    },
    {
      title: "ProConnect – Professional Networking",
      tech: ["MERN Stack", "Cloudinary", "JWT Auth", "Socket.io"],
      description:
        "A secure and interactive networking platform for professionals and students...",
      code: "https://github.com/Mohithh/ExpertMate",
      file: "https://expert-mate.vercel.app/",
      category: "major",
      image: "/SettleSmart Solutions - Google Chrome 19-05-2025 18_14_19.png",
      tag: "Major"
    },
    {
      title: "E-Commerce App",
      tech: ["MERN Stack", "Stripe", "Tailwind CSS"],
      description:
        "A full-stack e-commerce platform with authentication, cart, orders, admin panel...",
      code: "https://github.com/Mohithh/Shopping",
      file: "https://drive.google.com/file/d/1hNFGlt66pSnDfsmlZLsndGWT8FU7DLB0/view?usp=sharing",
      category: "major",
      image: "/localhost_3000_signup - Google Chrome 21-06-2025 19_47_42.png",
      tag: "Major"
    },
    
    {
      title: "Portfolio Website",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      description:
        "A modern portfolio website with transitions, animations, and responsive layout.",
      code: "https://github.com/Mohithh/Portfolio-Website",
      file: "https://mohityyadav.vercel.app/",
      category: "major",
      image: "/Mohithh_Frontend-design - Google Chrome 05-07-2025 20_12_49.png",
      tag: ""
    },
    
    {
      title: "UI Components Library",
      tech: ["React.js", "Tailwind CSS"],
      description:
        "Reusable components like navbars, cards, layouts for quick frontend development.",
      code: "https://github.com/Mohithh/Frontend-design",
      file: "https://drive.google.com/file/d/1c0Komqlfp2EGW1QCEPgPa2eQ1OZgYKnP/view?usp=sharing",
      category: "major",
      image: "/NextJS Assignment (Part 1) by webbywolf (Community) – Figma - Google Chrome 19-06-2025 16_54_24.png",
      tag: ""
    },
    {
      title: "EduTrack System",
      tech: ["MERN Stack (Planned)", "Role-Based Access"],
      description:
        "Student/faculty dashboards with attendance, marks, fee tracking, and more.",
      code: "#",
      file: "#",
      category: "upcoming",
      image: "/underdevelopmentlogo.webp",
      tag: "Under Development"
    },
    {
      title: "SnackRush",
      tech: ["Next.js", "Tailwind", "MongoDB (Planned)"],
      description:
        "A food delivery app with restaurant listings, tracking, coupons and AI suggestions.",
      code: "#",
      file: "#",
      category: "upcoming",
      image: "/underdevelopmentlogo.webp",
      tag: "Not Started Yet"
    }
  ];

  // Social links
  const socialLinks = [
    {
      name: "Resume",
      icon: "/rresume.jpg",
      url: "https://drive.google.com/file/d/1L7kvDgZ8cHnuyhEGPDAgGfpy2msOJuBv/view",
    },
    {
      name: "LinkedIn",
      icon: "/linkedin.png",
      url: "https://www.linkedin.com/in/mohit-kumar-yadav-898711230/",
    },
    {
      name: "GitHub",
      icon: "/github.png", 
      url: "https://github.com/Mohithh",
    },
    {
      name: "Email",
      icon: "/ggmail.png",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=mohityadavhh@gmail.com&su=Hello%20Mohit&body=I%20want%20to%20connect%20with%20you!",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <main className="font-sans bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="relative group  mt-10 md:mt-0">
            <Image
              src="/Mohit kumar yadav.jpg"
              alt="Mohit"
              width={224}
              height={224}
              className="w-56 h-56 rounded-full object-cover shadow-xl border-4 border-white ring-2 ring-indigo-200 group-hover:ring-4 group-hover:ring-indigo-300 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-indigo-300 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 animate-spin-slow"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center md:text-left max-w-2xl">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Mohit Kumar Yadav <span className="wave ml-2">👋</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              A passionate{" "}
              <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Full Stack Developer
              </span>{" "}
              building modern web apps using <strong className="text-indigo-700">MERN</strong>,{" "}
              <strong className="text-indigo-700">Next.js</strong> & more.
            </p>

            {/* Social Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              variants={containerVariants}
            >
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white px-5 py-3 md:px-7 md:py-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition"
                  />
                  <span className="text-sm font-semibold text-gray-800 tracking-wide">
                    {item.name}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-6 py-16" id="skills">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Tools & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-xl p-5 transition-all hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                variants={itemVariants}
              >
                <div className="w-14 h-14 mb-3 flex items-center justify-center bg-gray-50 rounded-lg p-2">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-6 py-16" id="projects">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              My Projects
            </h2>
            <p className="text-gray-500 text-lg">Live, In Progress & Upcoming Projects</p>
          </div>

          {["major", "development", "upcoming"].map((category) => {
            const titles = {
              major: "🚀 Major Projects",
              development: "🛠️ Under Development",
              upcoming: "📦 Upcoming Projects",
            };

            const badgeColors = {
              "Major": "bg-indigo-100 text-indigo-700",
              "Under Development": "bg-amber-100 text-amber-700",
              "Not Started Yet": "bg-rose-100 text-rose-600",
            };

            const filtered = project.filter((p) => p.category === category);
            if (filtered.length === 0) return null;

            return (
              <motion.div 
                key={category} 
                className="mb-20"
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-8 text-gray-700">{titles[category]}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {filtered.map((p) => (
                    <motion.div
                      key={p.title}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                    >
                      {/* Project Image */}
                      {p.image && (
                        <div className="relative h-56 overflow-hidden">
                          <Image
                            src={p.image}
                            alt={p.title}
                            width={600}
                            height={300}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          />
                          {p.tag && (
                            <span
                              className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full shadow ${badgeColors[p.tag] || "bg-gray-200 text-gray-700"}`}
                            >
                              {p.tag}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Text & Buttons */}
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">
                          {p.title}
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {p.tech.map((tech) => (
                            <span key={tech} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-600 mb-4">
                          {p.description}
                        </p>

                        <div className="flex gap-3">
                          {p.code !== "#" && (
                            <a
                              href={p.code}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-center text-sm bg-indigo-600 text-white px-4 py-2.5 rounded-lg hover:bg-indigo-700 transition font-medium"
                            >
                              View Code
                            </a>
                          )}
                          {p.file !== "#" && (
                            <a
                              href={p.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-center text-sm bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg hover:bg-gray-200 transition font-medium"
                            >
                              Go to Live
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-200 mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Let&apos;s Build Something Amazing Together</h3>
          <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow hover:shadow-md hover:bg-indigo-50 transition"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain opacity-80 hover:opacity-100"
                />
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-8">© {new Date().getFullYear()} Mohit Kumar Yadav. All rights reserved.</p>
        </motion.div>
      </footer>
    </main>
  );
};

export default Page;