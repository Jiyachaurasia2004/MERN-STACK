import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => console.log(data);

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10" />
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass-card rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="heading-lg mb-4">Register Now</h2>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-500">Secure your spot in the next batch.</p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input {...register("name", { required: true })} className="w-full bg-white dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors duration-500" placeholder="Full Name" />
                {errors.name && <span className="text-red-500 text-xs mt-1">This field is required</span>}
              </div>
              <div>
                <input {...register("email", { required: true })} type="email" className="w-full bg-white dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors duration-500" placeholder="Email Address" />
                {errors.email && <span className="text-red-500 text-xs mt-1">This field is required</span>}
              </div>
              <div>
                <input {...register("phone", { required: true })} className="w-full bg-white dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors duration-500" placeholder="Phone Number" />
              </div>
              <div>
                <input {...register("college")} className="w-full bg-white dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors duration-500" placeholder="College / Company" />
              </div>
              <div>
                <select {...register("qualification")} className="w-full bg-white dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors duration-500 appearance-none">
                  <option value="" disabled selected>Current Qualification</option>
                  <option value="BTech">B.Tech / B.E.</option>
                  <option value="BCA">BCA / MCA</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <select {...register("skill")} className="w-full bg-white dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors duration-500 appearance-none">
                  <option value="" disabled selected>Skill Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>
            
            <textarea {...register("message")} rows="4" className="w-full bg-white dark:bg-black/40 border border-gray-300 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors duration-500" placeholder="Any specific requirements or questions?"></textarea>
            
            <div className="flex items-start gap-3">
              <input type="checkbox" {...register("terms", { required: true })} className="mt-1" />
              <label className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-500">I agree to receive course updates and promotional emails.</label>
            </div>
            
            <button type="submit" className="w-full btn-primary py-4 text-lg">Submit Application</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
export default RegistrationForm;
