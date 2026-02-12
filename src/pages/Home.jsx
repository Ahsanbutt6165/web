import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const services = [
    { icon: "🧩", title: "Autism Assessment & Therapy", description: "Comprehensive evaluation and personalized intervention plans", link: "/services#autism" },
    { icon: "🗣️", title: "Speech & Communication Support", description: "Language development and communication skills", link: "/services#speech" },
    { icon: "🧠", title: "Behavioral & Emotional Therapy", description: "Managing emotions and behaviors effectively", link: "/services#behavioral" },
    { icon: "🧸", title: "Play-Based Therapy", description: "Learning through play and creative activities", link: "/services#play" },
    { icon: "🎨", title: "Occupational Therapy", description: "Daily living skills and sensory integration", link: "/services#occupational" },
    { icon: "👨‍👩‍👧", title: "Parent Counseling & Training", description: "Supporting parents in supporting their children", link: "/services#parent" },
    { icon: "💭", title: "Psychotherapy", description: "Professional mental health support for children", link: "/services#psycho" },
    { icon: "💬", title: "Counseling", description: "Individual and family counseling services", link: "/services#counseling" }
  ];

  const whyChooseUs = [
    { icon: "👶", title: "Child-Centered Approach", description: "Therapy plans tailored to each child" },
    { icon: "👨‍👩‍👧‍👦", title: "Family-Focused Care", description: "Parents involved at every step" },
    { icon: "🎯", title: "Customized Plans", description: "Personalized interventions for growth" },
    { icon: "🛡️", title: "Safe Environment", description: "Sensory-friendly & nurturing space" },
    { icon: "📚", title: "Evidence-Based", description: "Research-backed therapy methods" },
    { icon: "👩‍⚕️", title: "Expert Team", description: "Experienced psychologists & therapists" },
    { icon: "📊", title: "Progress Tracking", description: "Continuous evaluation & improvement" },
    { icon: "🤝", title: "Parent Support", description: "Guidance & emotional support" }
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

  return (
    <div className="min-h-screen font-sans text-gray-800">
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-600 via-cyan-500 to-teal-400 text-white py-28 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <motion.div
          className="max-w-7xl mx-auto px-6 text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Every Child Has a Voice
          </motion.h1>
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-3xl font-medium mb-6"
          >
            We Help Them Find It
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/90 mb-10"
          >
            Autism • ADHD • Developmental Delays • Mental Health
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/book-appointment"
                className="inline-block bg-white text-sky-600 px-8 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Book Appointment
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/about"
                className="inline-block border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section className="py-24 bg-gradient-to-b from-white to-sky-50/50">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
            Welcome to Psych Heal Clinic
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We provide a safe, playful, and supportive environment where children grow at their own pace with compassion, care, and professional guidance.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-5 bg-gradient-to-b from-indigo-50/30 to-white">
        <motion.div
          className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { value: "500+", label: "Children Helped" },
            { value: "8", label: "Specialized Services" },
            { value: "15+", label: "Years of Experience" }
          ].map((s, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-sky-100"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent mb-2">{s.value}</div>
              <div className="text-gray-700 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((s, i) => (
              <motion.div  key={i} variants={itemVariants}>
                <Link
                  to={s.link}
                  className="block bg-gradient-to-br from-white to-sky-50/50 rounded-2xl p-6 shadow-lg min-h-54 hover:shadow-2xl transition-all duration-300 border border-sky-100 group"
                >
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {s.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 text-sky-700 group-hover:text-teal-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {s.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-14"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                className="inline-block bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 text-white px-10 py-3 rounded-full font-semibold hover:from-sky-700 hover:via-cyan-600 hover:to-teal-600 transition-all shadow-xl hover:shadow-2xl"
              >
                View All Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-white via-sky-50/30 to-cyan-50/20">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((w, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-teal-100 group"
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {w.icon}
                </motion.div>
                <h3 className="font-semibold mb-2 text-gray-800 group-hover:text-teal-600 transition-colors">{w.title}</h3>
                <p className="text-sm text-gray-600">{w.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-400 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              x: [0, 100, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-300/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              x: [0, -80, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <motion.div
          className="max-w-3xl mx-auto px-6 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Ready to Begin Your Child's Journey?
          </motion.h2>
          <motion.p
            className="text-lg mb-10 text-white/90"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Our caring professionals are here to support your family every step of the way.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/book-appointment"
                className="inline-block bg-white text-sky-600 px-8 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Book Appointment
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:+923115367440"
                className="inline-block border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                Call: 0311-5367440
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
