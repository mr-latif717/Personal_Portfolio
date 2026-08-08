import { motion } from "motion/react";
import Hero from "../components/Hero";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Project01 from "../assets/images/Project01.PNG";
import Project02 from "../assets/images/Project02.jpeg";
import Project03 from "../assets/images/Project03.PNG";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/contacts", formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Hero />

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container py-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold text-center mb-5">
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="card-custom p-4">
                  <h3 className="h4 mb-3">Professional Summary</h3>
                  <p className="mb-0">
                    I am a passionate Full Stack Developer with experience in
                    building scalable web applications. I thrive in solving
                    complex problems and designing elegant solutions using
                    modern technologies like React, Node.js, and Express.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="card-custom p-3 text-center">
                      <h4 className="h2 text-primary mb-1">1+</h4>
                      <p className="mb-0 text-secondary">Years Experience</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card-custom p-3 text-center">
                      <h4 className="h2 text-primary mb-1">3</h4>
                      <p className="mb-0 text-secondary">Projects Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-5">
        <div className="container py-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold text-center mb-5">
              <span className="text-gradient">Education</span>
            </h2>
            <div className="row g-4 justify-content-center">
              <div className="col-lg-8">
                <div className="card-custom p-4 mb-4">
                  <h4 className="fw-bold">
                    Bachelor of Science in Information Technology
                  </h4>
                  <h6 className="text-primary mb-3">
                    Bahauddin Zakariya University, Multan • 2022 - 2026
                  </h6>
                  <p className="text-secondary mb-0">
                    Graduated with Honors. Data Structures, Algorithms, Web
                    Development, Database Management and excellant FYP.
                  </p>
                </div>
                <div className="card-custom p-4 mb-4">
                  <h4 className="fw-bold">Intermediate</h4>
                  <h6 className="text-primary mb-3">
                    Superior Science School and College • 2019 - 2021
                  </h6>
                  <p className="text-secondary mb-0">
                    Specialized in Science and Mathematics with top grades.
                  </p>
                </div>

                <div className="card-custom p-4 mb-4">
                  <h4 className="fw-bold">Matriculation</h4>
                  <h6 className="text-primary mb-3">
                    Cadet College Wana • 2017 - 2019
                  </h6>
                  <p className="text-secondary mb-0">
                    Specialized in Science with top grades.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-opacity-10 bg-primary">
        <div className="container py-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold text-center mb-5">
              <span className="text-gradient">My Skills</span>
            </h2>
            <div className="row g-4">
              {["Frontend", "Backend", "Database", "Tools"].map(
                (category, idx) => (
                  <div className="col-md-6 col-lg-3" key={idx}>
                    <div className="card-custom p-4 h-100">
                      <h4 className="mb-4">{category}</h4>
                      <ul className="list-unstyled mb-0">
                        {category === "Frontend" &&
                          [
                            "React.js",
                            "Bootstrap 5",
                            "Framer Motion",
                            "HTML/CSS",
                          ].map((s) => (
                            <li
                              key={s}
                              className="mb-2 d-flex align-items-center gap-2"
                            >
                              <div
                                className="bg-primary rounded-circle"
                                style={{ width: 8, height: 8 }}
                              ></div>
                              {s}
                            </li>
                          ))}
                        {category === "Backend" &&
                          [
                            "Node.js",
                            "Express.js",
                            "REST API",
                            "Authentication",
                          ].map((s) => (
                            <li
                              key={s}
                              className="mb-2 d-flex align-items-center gap-2"
                            >
                              <div
                                className="bg-primary rounded-circle"
                                style={{ width: 8, height: 8 }}
                              ></div>
                              {s}
                            </li>
                          ))}
                        {category === "Database" &&
                          ["MySQL"].map((s) => (
                            <li
                              key={s}
                              className="mb-2 d-flex align-items-center gap-2"
                            >
                              <div
                                className="bg-primary rounded-circle"
                                style={{ width: 8, height: 8 }}
                              ></div>
                              {s}
                            </li>
                          ))}
                        {category === "Tools" &&
                          ["Git & GitHub", "VS Code", "Postman", "Docker"].map(
                            (s) => (
                              <li
                                key={s}
                                className="mb-2 d-flex align-items-center gap-2"
                              >
                                <div
                                  className="bg-primary rounded-circle"
                                  style={{ width: 8, height: 8 }}
                                ></div>
                                {s}
                              </li>
                            ),
                          )}
                      </ul>
                    </div>
                  </div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <div className="container py-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold text-center mb-5">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <div className="row g-4">
              {/* Project 01 */}
              <div className="col-md-6 col-lg-4">
                <div className="card-custom h-100 overflow-hidden">
                  <img
                    src={Project01}
                    style={{
                      width: "100%",
                      height: "450px",
                      borderRadius: "12px",
                    }}
                    alt="E-commerce website"
                  />
                  <div className="p-4">
                    <h4 className="mb-2">E-Commerce website</h4>
                    <p className="text-secondary mb-3">
                      A fully responsive e-commerce website built with React,
                      Node.js and MySQL. User can place order track order.
                    </p>
                    <div className="d-flex gap-2 flex-wrap mb-4">
                      <span className="badge bg-primary bg-opacity-25 text-primary">
                        React
                      </span>
                      <span className="badge bg-primary bg-opacity-25 text-primary">
                        Node.js
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <a
                        href="https://github.com/mr-latif717/E-commerce-website"
                        className="btn btn-sm btn-outline-primary"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://insaf-store.netlify.app"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 02 */}
              <div className="col-md-6 col-lg-4">
                <div className="card-custom h-100 overflow-hidden">
                  <img
                    src={Project02}
                    style={{
                      width: "100%",
                      height: "450px",
                      borderRadius: "12px",
                    }}
                    alt="Student Management Dashboard"
                  />
                  <div className="p-4">
                    <h4 className="mb-2">Student Management Dashboard</h4>
                    <p className="text-secondary mb-3">
                      A fully responsive modern web application built with
                      React, Node,js.
                    </p>
                    <div className="d-flex gap-2 flex-wrap mb-4">
                      <span className="badge bg-primary bg-opacity-25 text-primary">
                        React
                      </span>
                      <span className="badge bg-primary bg-opacity-25 text-primary">
                        Node.js
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <a
                        href="https://github.com/mr-latif717/Student-Management-Dashboard"
                        className="btn btn-sm btn-outline-primary"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://std-management-dashboard.netlify.app"
                        className="btn btn-sm btn-outline-primary"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* project 03 */}
              <div className="col-md-6 col-lg-4">
                <div className="card-custom h-100 overflow-hidden">
                  <img
                    src={Project03}
                    style={{
                      width: "100%",
                      height: "450px",
                      borderRadius: "12px",
                    }}
                    alt="Personal Portfolio"
                  />
                  <div className="p-4">
                    <h4 className="mb-2">Personal Portfolio</h4>
                    <p className="text-secondary mb-3">
                      A fully responsive personal Portfolio built with React,
                      Node,js and MySQL. Recruiters can message me.
                    </p>
                    <div className="d-flex gap-2 flex-wrap mb-4">
                      <span className="badge bg-primary bg-opacity-25 text-primary">
                        React
                      </span>
                      <span className="badge bg-primary bg-opacity-25 text-primary">
                        Node.js
                      </span>
                    </div>
                    <div className="d-flex gap-3">
                      <a href="#" className="btn btn-sm btn-outline-primary">
                        GitHub
                      </a>
                      <a href="#" className="btn btn-sm btn-outline-primary">
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-5 bg-opacity-10 bg-primary">
        <div className="container py-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold text-center mb-5">
              <span className="text-gradient">Experience</span>
            </h2>
            <div className="row g-4 justify-content-center">
              <div className="col-lg-8">
                <div className="card-custom p-4 mb-4 border-start border-4 border-primary">
                  <h4 className="fw-bold">Full Stack Developer</h4>
                  <h6 className="text-primary mb-3">
                    National Software Developers • Feb 2023 - Feb 2024
                  </h6>
                  <p className="text-secondary mb-0">
                    Developed and maintained scalable web applications using
                    React, Node.js, and MySQL. Improved performance by 40% -
                    50%.
                  </p>
                </div>
                <div className="card-custom p-4 border-start border-4 border-primary">
                  <h4 className="fw-bold">
                    Self Learning Full Stack Development
                  </h4>
                  <h6 className="text-primary mb-3">Youtube • Always</h6>
                  <p className="text-secondary mb-0">
                    Learned different web technologies and built so many
                    projects during the course.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-5 bg-opacity-10 bg-primary">
        <div className="container py-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold text-center mb-5">
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card-custom p-4 p-md-5">
                  <form onSubmit={handleContactSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-control bg-transparent text-inherit border-secondary"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-control bg-transparent text-inherit border-secondary"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="form-control bg-transparent text-inherit border-secondary"
                          placeholder="Subject"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="form-control bg-transparent text-inherit border-secondary"
                          rows="5"
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </div>
                      <div className="col-12 text-center mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary px-5 py-2 rounded-pill"
                          disabled={loading}
                        >
                          {loading ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
