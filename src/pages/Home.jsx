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

  const signsToWatch = [
    {
      category: "Speech & Communication",
      color: "from-rose-500 to-pink-500",
      borderColor: "border-rose-200",
      signs: [
        "Not babbling by 12 months",
        "No words by 16 months",
        "Difficulty understanding simple instructions",
        "Loss of previously acquired speech"
      ]
    },
    {
      category: "Social & Behavioral",
      color: "from-amber-500 to-orange-500",
      borderColor: "border-amber-200",
      signs: [
        "Avoids eye contact consistently",
        "Doesn't respond to their name",
        "Prefers to play alone, avoids other children",
        "Repetitive behaviors or unusual routines"
      ]
    },
    {
      category: "Developmental",
      color: "from-violet-500 to-purple-500",
      borderColor: "border-violet-200",
      signs: [
        "Not walking by 18 months",
        "Difficulty with fine motor skills",
        "Struggles with age-appropriate tasks",
        "Significant delays compared to peers"
      ]
    },
    {
      category: "Emotional & Mental Health",
      color: "from-sky-500 to-blue-500",
      borderColor: "border-sky-200",
      signs: [
        "Frequent, intense tantrums beyond toddler age",
        "Excessive worry, fear, or sadness",
        "Withdrawal from family and activities",
        "Sudden changes in behavior or mood"
      ]
    }
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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-28 relative overflow-hidden">
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
            className="absolute bottom-20 right-20 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl"
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
                className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
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

      {/* Services */}
      <section className="py-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-600 bg-clip-text text-transparent"
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
              <motion.div key={i} variants={itemVariants}>
                <Link
                  to={s.link}
                  className="block bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-6 shadow-lg min-h-54 hover:shadow-2xl transition-all duration-300 border border-blue-100 group"
                >
                  <motion.div
                    className="text-4xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {s.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 text-blue-900 group-hover:text-teal-700 transition-colors">
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
                className="inline-block bg-gradient-to-r from-blue-900 via-blue-800 to-teal-600 text-white px-10 py-3 rounded-full font-semibold hover:from-blue-950 hover:to-teal-700 transition-all shadow-xl hover:shadow-2xl"
              >
                View All Services
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Signs to Watch For */}
      <section className="pb-10 bg-gradient-to-b from-white to-rose-50/30">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl pb-1 md:text-4xl font-bold mb-4 bg-gradient-to-r from-rose-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Signs You Shouldn't Ignore
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every child develops differently, but some signs may indicate your child needs professional support. Early recognition makes all the difference.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {signsToWatch.map((group, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`bg-white rounded-2xl p-6 shadow-lg border ${group.borderColor} hover:shadow-xl transition-all duration-300`}
              >
                <div className={`inline-block px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-4 bg-gradient-to-r ${group.color}`}>
                  {group.category}
                </div>
                <ul className="space-y-3">
                  {group.signs.map((sign, j) => (
                    <li key={j} className="flex items-start text-sm text-gray-600">
                      <span className="text-rose-400 mr-2 mt-0.5 flex-shrink-0">&#9679;</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Early Intervention CTA */}
      <section className="py-20 bg-gradient-to-r from-rose-600 via-pink-500 to-orange-400 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], x: [0, 60, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
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
            Don't Wait — Early Intervention Changes Lives
          </motion.h2>
          <motion.p
            className="text-lg mb-4 text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Research shows that the earlier a child receives support, the better their outcomes. The brain is most adaptable in the early years — waiting can mean missed opportunities for growth.
          </motion.p>
          <motion.p
            className="text-lg mb-10 text-white font-semibold"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            If you notice any of these signs, trust your instincts. A consultation costs nothing — but waiting can cost your child valuable time.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/book-appointment"
                className="inline-block bg-white text-rose-600 px-8 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Book a Free Consultation
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://wa.me/923303866245?text=Hello, I am concerned about my child's development and would like to schedule a consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                Message Us on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-blue-50/20">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-600 bg-clip-text text-transparent"
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
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-blue-100 group"
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {w.icon}
                </motion.div>
                <h3 className="font-semibold mb-2 text-gray-800 group-hover:text-blue-900 transition-colors">{w.title}</h3>
                <p className="text-sm text-gray-600">{w.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-b from-blue-50/30 to-white">
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
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-teal-600 bg-clip-text text-transparent mb-2">{s.value}</div>
              <div className="text-gray-700 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Welcome */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/50">
        <motion.div
          className="max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-600 bg-clip-text text-transparent">
            Welcome to Psych Heal Clinic
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We provide a safe, playful, and supportive environment where children grow at their own pace with compassion, care, and professional guidance.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700 text-white relative overflow-hidden">
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
            className="absolute bottom-0 right-0 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl"
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
                className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
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
