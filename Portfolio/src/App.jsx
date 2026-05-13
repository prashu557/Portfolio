import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "./assets/Prashant.jpeg";

function App() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };

  }, []);

  const skills = [
    "Java",
    "Python",
    "Machine Learning",
    "Deep Learning",
    "React",
    "Tailwind CSS",
    "DBMS",
    "MySQL",
    "GitHub",
    "OpenCV",
    "Computer Vision",
    "VS Code",
  ];

  const certificates = [
    "Cyber Security Certificate - IBM",
    "Cloud Computing Fundamentals - IBM",
    "Foundations in Effective Mentoring - IBM",
    "Introduction to Generative AI Studio - Google",
    "Introduction to MS Excel - Microsoft",
  ];

  const projects = [
    {
      title: "AI-Based Plant Disease Detection",
      description:
        "Implemented preprocessing techniques and trained models to classify plant diseases with high accuracy and developed a real-time prediction interface.",
    },

    {
      title: "Drone Detection System",
      description:
        "Developed a real-time drone detection system using Python, OpenCV and Machine Learning to identify unauthorized drones.",
    },
  ];

  return (

    <div className="bg-[#07011B] text-white min-h-screen overflow-hidden relative">

      {/* Animated Cursor */}
      <motion.div
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="w-5 h-5 rounded-full bg-purple-500 fixed top-0 left-0 pointer-events-none z-50"
      />

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 md:px-20 py-8 relative z-20">

        <h1 className="text-4xl font-bold">
          Port<span className="text-purple-500">folio.</span>
        </h1>

        <ul className="hidden md:flex gap-10 text-lg text-gray-300">

          <li className="hover:text-purple-400 transition cursor-pointer">
            Home
          </li>

          <li className="hover:text-purple-400 transition cursor-pointer">
            About
          </li>

          <li className="hover:text-purple-400 transition cursor-pointer">
            Skills
          </li>

          <li className="hover:text-purple-400 transition cursor-pointer">
            Projects
          </li>

          <li className="hover:text-purple-400 transition cursor-pointer">
            Contact
          </li>

        </ul>

        <button className="hidden md:block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30 hover:scale-105 transition duration-300">
          Download CV
        </button>

      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative z-10">

        {/* Floating Card Left */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="hidden md:block absolute left-20 top-52 bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl"
        >

          <h2 className="text-4xl font-bold text-purple-300">
            1st
          </h2>

          <p className="text-gray-300">
            Model Not Code
          </p>

        </motion.div>

        {/* Floating Card Right */}
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="hidden md:block absolute right-20 top-60 bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl"
        >

          <h2 className="text-4xl font-bold text-pink-300">
            AI
          </h2>

          <p className="text-gray-300">
            ML Developer
          </p>

        </motion.div>

        {/* Center Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-2 shadow-2xl shadow-purple-500/40 mb-12"
        >

          <img
            src={profile}
            alt="Prashant"
            className="w-full h-full rounded-full object-cover"
          />

        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-black leading-tight"
        >

          Prashant
          <br />

          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Kumar Srivastava
          </span>

        </motion.h1>

        {/* Typing Animation */}
        <div className="mt-8 text-3xl text-purple-300 font-semibold">

          <TypeAnimation
            sequence={[
              "AI/ML Engineer",
              1500,
              "Frontend Developer",
              1500,
              "React Developer",
              1500,
              "Creative Problem Solver",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />

        </div>

        {/* Description */}
        <p className="max-w-5xl text-gray-300 text-2xl leading-10 mt-10">

          Computer Science undergraduate with practical experience in
          Java, Machine Learning, Deep Learning and DBMS.

          <br /><br />

          Passionate about creating intelligent systems and futuristic
          digital experiences that solve real-world problems using
          Artificial Intelligence and modern web technologies.

          <br /><br />

          My vision is to combine creativity with innovation and build
          scalable smart solutions that make technology more impactful.

        </p>

        {/* Buttons */}
        <div className="flex gap-6 mt-12 flex-wrap justify-center">

          <button className="px-10 py-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-xl font-semibold shadow-xl shadow-purple-500/30 hover:scale-105 transition duration-300">
            View Portfolio
          </button>

          <button className="px-10 py-5 rounded-full border border-purple-500 text-xl hover:bg-purple-500/20 transition duration-300">
            Hire Me
          </button>

        </div>

        {/* Social Links */}
        <div className="flex gap-5 mt-12 flex-wrap justify-center">

          <a
            href="https://github.com/prashu557"
            target="_blank"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500 hover:scale-105 transition duration-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/prashant-srivastava-67763a326/"
            target="_blank"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500 hover:scale-105 transition duration-300"
          >
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/"
            target="_blank"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-yellow-500 hover:scale-105 transition duration-300"
          >
            LeetCode
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-pink-500 hover:scale-105 transition duration-300"
          >
            Instagram
          </a>

          <a
            href="https://codolio.com/profile/prashu557"
            target="_blank"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-green-500 hover:scale-105 transition duration-300"
          >
            Codolio
          </a>

        </div>

      </section>

      {/* Skills */}
      <section className="py-32 px-8 md:px-20">

        <h2 className="text-6xl font-bold text-center mb-20">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill) => (

            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 2,
              }}
              key={skill}
              className="bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-3xl text-center hover:border-purple-500 transition duration-300"
            >

              <h3 className="text-3xl font-bold text-purple-300">
                {skill}
              </h3>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Projects */}
      <section className="py-32 px-8 md:px-20">

        <h2 className="text-6xl font-bold text-center mb-20">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project) => (

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              key={project.title}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500 transition duration-300"
            >

              <div className="h-64 bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">

                <h1 className="text-7xl font-black text-white/30">
                  AI
                </h1>

              </div>

              <div className="p-10">

                <h3 className="text-4xl font-bold mb-6 text-purple-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-xl leading-9">
                  {project.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Achievement */}
      <section className="py-32 px-8 md:px-20">

        <h2 className="text-6xl font-bold text-center mb-20">
          Achievement
        </h2>

        <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl">

          <h3 className="text-4xl font-bold text-purple-300 mb-8">
            🏆 Model Not Code 2026
          </h3>

          <p className="text-2xl text-gray-300 leading-10">

            Secured 1st Position in
            “Designing Intelligent Solutions”
            at Model Not Code 2026
            by developing innovative AI-driven ideas
            focused on solving real-world challenges.

          </p>

        </div>

      </section>

      {/* Education */}
      <section className="py-32 px-8 md:px-20">

        <h2 className="text-6xl font-bold text-center mb-20">
          Education
        </h2>

        <div className="space-y-10 max-w-6xl mx-auto">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl">

            <h3 className="text-4xl font-bold text-purple-300">
              🎓 B.Tech - Computer Science Engineering
            </h3>

            <p className="text-2xl text-gray-300 mt-5">
              Galgotias University | CGPA: 8.56
            </p>

            <p className="text-xl text-gray-400 mt-2">
              October 2023 - July 2027
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl">

            <h3 className="text-3xl font-bold text-white">
              Class XII
            </h3>

            <p className="text-2xl text-gray-300 mt-4">
              Beena Public School | Percentage: 71.6%
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-xl">

            <h3 className="text-3xl font-bold text-white">
              Class X
            </h3>

            <p className="text-2xl text-gray-300 mt-4">
              M.P Memorial School | Percentage: 69%
            </p>

          </div>

        </div>

      </section>

      {/* Certificates */}
      <section className="py-32 px-8 md:px-20">

        <h2 className="text-6xl font-bold text-center mb-20">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {certificates.map((certificate) => (

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              key={certificate}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-purple-500 transition duration-300"
            >

              <h3 className="text-2xl font-bold text-purple-300">
                📜 {certificate}
              </h3>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Contact */}
      <section className="py-32 px-8 md:px-20 text-center">

        <h2 className="text-6xl font-bold mb-16">
          Contact Me
        </h2>

        <div className="space-y-6 text-2xl text-gray-300">

          <p>
            📧 prashantsrivastava4809@gmail.com
          </p>

          <p>
            📱 7052641833
          </p>

          <p>
            📍 Greater Noida, Uttar Pradesh
          </p>

          <p>
            💻 GitHub: github.com/prashu557
          </p>

        </div>

      </section>

    </div>
  );
}

export default App;