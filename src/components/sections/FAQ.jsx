import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, BookOpen, Briefcase, CreditCard, GraduationCap, Rocket } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const CATEGORIES = [
  { id: 'all',      label: 'All',       icon: <BookOpen size={14} /> },
  { id: 'course',   label: 'Course',    icon: <GraduationCap size={14} /> },
  { id: 'learning', label: 'Learning',  icon: <BookOpen size={14} /> },
  { id: 'placement',label: 'Placement', icon: <Briefcase size={14} /> },
  { id: 'payment',  label: 'Payment',   icon: <CreditCard size={14} /> },
  { id: 'career',   label: 'Career',    icon: <Rocket size={14} /> },
];

const faqs = [
  {
    category: 'course',
    q: 'What exactly is the MERN Stack?',
    a: 'MERN stands for MongoDB, Express.js, React.js, and Node.js — four powerful JavaScript technologies that together form a complete, end-to-end web development stack. With MERN, you can build anything from a simple blog to an enterprise-grade SaaS product using a single programming language: JavaScript.',
  },
  {
    category: 'course',
    q: 'Who is this course designed for?',
    a: 'This course is designed for anyone who wants to become a professional full-stack developer. Whether you\'re a complete beginner, a frontend developer looking to go full stack, a CS graduate preparing for interviews, or a working professional switching careers — this course has a path for you.',
  },
  {
    category: 'learning',
    q: 'Do I need any prior coding experience to join?',
    a: 'No prior experience is required. We start from the very foundations — variables, data types, control flow — and progressively build up to advanced topics like authentication, real-time communication, and cloud deployment. A willingness to learn is all you need.',
  },
  {
    category: 'course',
    q: 'How long does the course take to complete?',
    a: 'The full curriculum is structured as a 16-week program with live classes 3 times a week. However, with lifetime access to all recorded content, you can also complete it at your own pace. Most self-paced learners finish within 3–6 months.',
  },
  {
    category: 'learning',
    q: 'Are there live classes or only recorded videos?',
    a: 'We offer both. Live online classes are scheduled 3 days a week with real-time doubt clearing. All sessions are recorded and added to your dashboard within 24 hours, so you never miss a class. You also get dedicated office hours with mentors.',
  },
  {
    category: 'learning',
    q: 'Will I have lifetime access to the course content?',
    a: 'Yes, absolutely. Once enrolled, you get permanent lifetime access to all course videos, notes, source code, assignments, and any future updates we add to the curriculum. There is no expiry — learn at your own pace, revisit anytime.',
  },
  {
    category: 'course',
    q: 'What kind of projects will I build during the course?',
    a: 'You\'ll build 10+ real-world, production-ready applications including: a full-featured E-Commerce platform with Stripe payments, a Hospital Management System, a real-time Chat App using Socket.io, a Food Delivery App with live tracking, and an Admin Analytics Dashboard. Every project is portfolio-ready.',
  },
  {
    category: 'learning',
    q: 'Will I receive the complete source code for all projects?',
    a: 'Yes. You\'ll receive the full, commented source code for every single project and assignment. The code follows industry best practices and is structured exactly how you\'d find it in a professional development environment.',
  },
  {
    category: 'course',
    q: 'Will I receive a certificate upon completion?',
    a: 'Yes. After successfully completing all modules, assignments, and the capstone project, you\'ll receive a verifiable digital certificate. Our certificate is recognized by leading tech companies and can be shared directly to your LinkedIn profile and resume.',
  },
  {
    category: 'learning',
    q: 'How does doubt support work?',
    a: 'We offer multiple channels: a live chat during every class, a dedicated Discord community, weekly Q&A sessions with instructors, and an active forum where questions are answered within 48 hours. No doubt goes unanswered.',
  },
  {
    category: 'placement',
    q: 'Do you provide placement assistance?',
    a: 'Yes — we have a dedicated placement cell. This includes resume review and optimization, LinkedIn profile auditing, mock technical interviews, access to our hiring partner network (60+ companies), soft skills workshops, and live referrals to job openings.',
  },
  {
    category: 'placement',
    q: 'Are there internship opportunities available?',
    a: 'Yes. Our Premium plan includes access to internship opportunities with our partner startups and tech companies. Interns have gone on to secure full-time roles at the same organizations. We also run a 3-month paid internship program for top performers.',
  },
  {
    category: 'placement',
    q: 'Will you help me build a professional resume?',
    a: 'Absolutely. The Professional and Premium plans include 1-on-1 resume building sessions with our career advisors, a curated resume template designed specifically for MERN stack developers, and up to 3 rounds of revision before you start applying.',
  },
  {
    category: 'placement',
    q: 'Do you conduct mock interviews?',
    a: 'Yes. Mock interviews are conducted by industry professionals from companies like TCS, Infosys, Wipro, and tech startups. You\'ll go through both technical rounds (DSA, system design, live coding) and HR rounds, with detailed feedback after each session.',
  },
  {
    category: 'learning',
    q: 'Will the course content be updated as technologies evolve?',
    a: 'Absolutely. Our curriculum is reviewed and updated every quarter to stay current with the latest versions of React, Node.js, and MongoDB. Any new modules or updates are automatically added to your account at no extra cost — forever.',
  },
  {
    category: 'career',
    q: 'What career opportunities open up after completing this course?',
    a: 'Graduates are qualified for roles such as: Full Stack Developer (₹6–18 LPA), Frontend Developer (₹5–14 LPA), Backend/Node.js Developer (₹6–16 LPA), React Developer (₹5–15 LPA), and Software Engineer at product companies. Many students also go on to freelance or build their own startups.',
  },
  {
    category: 'career',
    q: 'How is this course different from free YouTube tutorials?',
    a: 'Free tutorials give you scattered knowledge. This course gives you a structured, interview-ready curriculum with guided projects, live mentorship, placement support, community, mock interviews, and a certificate. The value is in the outcomes, not just the content.',
  },
  {
    category: 'payment',
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards, UPI (Google Pay, PhonePe, Paytm), Net Banking, and EMI options through Razorpay and PayPal. International payments via Stripe are also supported. Choose the option that\'s most convenient for you.',
  },
  {
    category: 'payment',
    q: 'Is there a refund policy?',
    a: 'Yes, we offer a full, no-questions-asked 7-day money-back guarantee from the date of enrollment. If you complete more than 30% of the course content, the refund policy no longer applies. Partial refunds may be considered on a case-by-case basis.',
  },
  {
    category: 'career',
    q: 'Can I access the course on a mobile device?',
    a: 'Yes. Our platform is fully responsive and optimized for mobile, tablet, and desktop. You can watch lectures, read notes, and submit assignments from any device. We also offer a progressive web app (PWA) so you can access content even offline.',
  },
];

/* ── Single FAQ item ──────────────────────────────────────────── */
const FAQItem = ({ faq, index, isOpen, onToggle }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.04 }}
    className={`rounded-2xl overflow-hidden border transition-all duration-300 group
      ${isOpen
        ? 'border-primary/40 shadow-[0_0_20px_rgba(59,130,246,0.12)] dark:shadow-[0_0_20px_rgba(59,130,246,0.2)] bg-white dark:bg-white/5'
        : 'border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] hover:border-primary/25 hover:shadow-[0_0_15px_rgba(59,130,246,0.08)]'
      }`}
  >
    <button
      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-2xl"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span className={`font-semibold text-sm md:text-base pr-4 transition-colors duration-300 ${isOpen ? 'text-primary dark:text-cyan-400' : 'text-gray-900 dark:text-white'}`}>
        {faq.q}
      </span>
      <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
        ${isOpen
          ? 'bg-primary text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]'
          : 'bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 group-hover:bg-primary/10 group-hover:text-primary'
        }`}
      >
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <p className="px-6 pb-5 text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-500 border-t border-gray-100 dark:border-white/5 pt-4">
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

/* ── FAQ Section ──────────────────────────────────────────────── */
const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const [search, setSearch]   = useState('');
  const [activeCat, setActiveCat] = useState('all');

  const filtered = useMemo(() => {
    return faqs.filter((f) => {
      const matchCat    = activeCat === 'all' || f.category === activeCat;
      const matchSearch = search.trim() === '' ||
        f.q.toLowerCase().includes(search.toLowerCase()) ||
        f.a.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, activeCat]);

  const toggle = (i) => setOpenIdx((prev) => (prev === i ? -1 : i));

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading
          badge="Got Questions?"
          title={<>Everything You <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-secondary">Need to Know</span></>}
          subtitle="Browse through our most commonly asked questions. Can't find your answer? Reach out to us directly — we reply within a few hours."
        />

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-6"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setOpenIdx(-1); }}
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)] transition-all duration-300 text-sm"
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCat(cat.id); setOpenIdx(-1); }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200
                ${activeCat === cat.id
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                  : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-primary/10 hover:text-primary dark:hover:text-cyan-400 border border-gray-200 dark:border-white/10'
                }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        {filtered.length > 0 ? (
          <div className="space-y-3">
            {filtered.map((faq, i) => (
              <FAQItem
                key={`${activeCat}-${search}-${i}`}
                faq={faq}
                index={i}
                isOpen={openIdx === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-gray-500 dark:text-gray-400"
          >
            <Search size={40} className="mx-auto mb-3 opacity-30" />
            <p className="font-medium">No questions found for "<em>{search}</em>"</p>
            <p className="text-sm mt-1">Try a different keyword or clear the search.</p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-8 glass-card rounded-2xl"
        >
          <p className="text-gray-900 dark:text-white font-semibold mb-2">Still have questions?</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Our team is available Mon–Sat, 9 AM–7 PM IST.</p>
          <button
            onClick={() => window.open("https://wa.me/919993376705?text=Hi,%20I'm%20interested%20in%20your%20MERN%20Stack%20Course.%20Please%20share%20complete%20details.", "_blank")}
            className="btn-primary"
          >
            Contact Us Directly
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
