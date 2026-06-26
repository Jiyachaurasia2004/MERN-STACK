import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
const Footer = () => {
  return (
  <footer className="bg-white dark:bg-[#0F172A] border-t border-gray-200 dark:border-gray-700 pt-16 pb-8 transition-colors duration-500">
  <div className="container mx-auto px-6 max-w-7xl">

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">

      {/* Contact */}
      <div>
        <h3 className="text-xl font-bold text-primary mb-6">
          CONTACT
        </h3>

        <ul className="space-y-4 text-gray-700 dark:text-gray-300">

          <li className="flex items-start gap-3">
            <FaPhoneAlt className="text-primary mt-1" />
            <div>
              <p> 9752740090, 7471112020</p>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <FaEnvelope className="text-primary mt-1" />
            <a
              href="mailto:hello@example.com"
              className="hover:text-primary"
            >
               beangate.official@gmail.com
            </a>
          </li>

          <li className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-primary mt-1" />
            <p>
             Flat No. A-4/501, Kokta Transport Nagar,<br />
Bhopal (M.P.) – 462022
            </p>
          </li>

          <li className="flex items-start gap-3">
            <FaGlobe className="text-primary mt-1" />
            <a
              href="https://yourwebsite.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              https://beangates.com/
            </a>
          </li>
        </ul>
      </div>

      {/* Useful Links */}
      <div>
        <h3 className="text-xl font-bold text-primary mb-6">
          USEFUL LINKS
        </h3>

        <ul className="space-y-4">

          <li>
            <a href="#about" className="hover:text-primary">
              About Course
            </a>
          </li>

          <li>
            <a href="#curriculum" className="hover:text-primary">
              Curriculum
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-primary">
              Projects
            </a>
          </li>

          <li>
            <a href="#faq" className="hover:text-primary">
              FAQ
            </a>
          </li>

          <li>
            <a href="#register" className="hover:text-primary">
              Register Now
            </a>
          </li>

        </ul>
      </div>

      {/* About */}
      <div>

        <h3 className="text-xl font-bold text-primary mb-6">
          MERN STACK ACADEMY
        </h3>

        <p className="text-gray-600 dark:text-gray-300 leading-8">
          MERN Stack Academy provides industry-focused training in
          MongoDB, Express.js, React.js and Node.js. Learn through
          real-world projects, expert mentorship, interview preparation,
          and placement assistance to become a professional Full Stack
          Developer.
        </p>

        <div className="flex gap-4 mt-8">

          <a
            href="https://wa.me/919993376705"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 transition"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Jiyachaurasia2004"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-full bg-gray-800 text-white flex items-center justify-center hover:scale-110 transition"
          >
            <FaGithub />
          </a>

        </div>

      </div>

    </div>

    <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-6 text-center text-gray-500">

      © {new Date().getFullYear()} MERN Stack Academy. All Rights Reserved.

    </div>

  </div>
</footer>
  );
};
export default Footer;
