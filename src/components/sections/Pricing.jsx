import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import SectionHeading from '../ui/SectionHeading';

const Pricing = () => {
  const { openModal } = useModal();
  const plans = [
    { name: 'Starter', price: '₹4,999', features: ['Recorded Videos', 'Source Code', 'Community Access', 'Certificate'], highlight: false },
    { name: 'Professional', price: '₹9,999', features: ['Everything in Starter', 'Live Doubt Sessions', '10+ Projects', 'Resume Review'], highlight: true },
    { name: 'Premium', price: '₹14,999', features: ['Everything in Pro', '1-on-1 Mentorship', 'Mock Interviews', 'Job Guarantee'], highlight: false },
  ];

  const handleEnrollClick = (planName) => {
    openModal(
      `Enroll in ${planName}`,
      <div>
        <p className="text-gray-600 dark:text-gray-400 mb-4">You've selected the <strong>{planName}</strong> plan. We are redirecting you to the secure checkout process.</p>
        <button 
          onClick={() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            document.querySelector('[aria-label="Close"]')?.click();
          }}
          className="btn-primary w-full"
        >
          Complete Registration
        </button>
      </div>
    );
  };

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading
          badge="Simple Pricing"
          title={<>Invest in Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-secondary">Future</span></>}
          subtitle="Transparent, one-time pricing. No hidden fees, no subscriptions. Pick the plan that fits your goals and get full lifetime access."
        />
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className={`p-8 rounded-2xl border transition-all duration-500 ${plan.highlight ? 'bg-gradient-to-b from-primary/10 to-white dark:from-primary/20 dark:to-surface border-primary shadow-[0_0_30px_rgba(59,130,246,0.2)] dark:shadow-[0_0_30px_rgba(59,130,246,0.3)] scale-105 z-10' : 'glass-card border-gray-200 dark:border-white/10'}`}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-500">{plan.name}</h3>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 mb-6 transition-colors duration-500">{plan.price}</div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 transition-colors duration-500">
                    <Check size={18} className="text-secondary" /> {f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handleEnrollClick(plan.name)}
                className={`w-full py-3 rounded-full font-bold transition-all ${plan.highlight ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'border border-gray-300 dark:border-white/20 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10'}`}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;
