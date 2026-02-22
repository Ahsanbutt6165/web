import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      role: 'Clinical Psychologist',
      icon: '👩‍⚕️',
      description: 'Specializing in child behavioral assessment, autism spectrum disorders, and evidence-based therapeutic interventions.'
    },
    {
      role: 'Speech & Language Therapist',
      icon: '🗣️',
      description: 'Expert in communication disorders, language delays, and articulation therapy for children of all ages.'
    },
    {
      role: 'Occupational Therapist',
      icon: '🎨',
      description: 'Focused on sensory integration, fine motor skills, and helping children achieve independence in daily activities.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <motion.div
          className="container mx-auto px-4 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About Psych Heal Clinic
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Empowering children with psychological and developmental challenges
          </p>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 md:p-12 rounded-3xl border-l-4 border-teal-500 mb-12 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent mb-6 text-center">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                To empower children with psychological and developmental challenges by providing holistic care, early intervention, and family support — helping every child grow with confidence and dignity.
              </p>
            </motion.div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be a beacon of hope and support for children and families, creating a world where every child, regardless of their challenges, can thrive, learn, and achieve their fullest potential.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
                <ul className="space-y-3 text-gray-600">
                  {[
                    { title: 'Compassion', desc: 'We approach every child and family with empathy, understanding, and genuine care.' },
                    { title: 'Excellence', desc: 'We maintain the highest standards in our therapeutic interventions and care delivery.' },
                    { title: 'Inclusion', desc: 'We celebrate diversity and ensure every child feels valued and respected.' },
                    { title: 'Collaboration', desc: 'We work closely with families, schools, and other professionals to ensure comprehensive support.' },
                    { title: 'Growth', desc: 'We believe in continuous learning and improvement to better serve our community.' },
                  ].map((value, i) => (
                    <motion.li
                      key={value.title}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <span className="text-teal-600 mr-3 font-bold">✓</span>
                      <span><strong>{value.title}:</strong> {value.desc}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Approach
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: '👶', title: 'Child-Centered', desc: 'Every therapy plan is customized to the unique needs, interests, and pace of each child.' },
              { icon: '👨‍👩‍👧‍👦', title: 'Family-Focused', desc: 'We involve families as active partners in the therapeutic process, providing support and resources.' },
              { icon: '🔬', title: 'Evidence-Based', desc: 'Our methods are grounded in research and proven therapeutic approaches.' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white p-6 rounded-2xl shadow-lg text-center border border-blue-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section — Improved */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Team
          </motion.h2>
          <motion.p
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our multidisciplinary team of specialists works together to deliver comprehensive, compassionate care for every child.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.role}
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl border border-blue-100 text-center shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
              >
                <motion.div
                  className="text-6xl mb-4"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {member.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">{member.role}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10 bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl border border-blue-100 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-600 italic text-lg">
              "We are dedicated professionals committed to creating positive change in children's lives. Our combined expertise ensures every child receives the right support at the right time."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent text-center mb-12">
            What Families Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Psych Heal Clinic has been a blessing for our family. The therapists truly understand our child's needs and have helped him make incredible progress."
              </p>
              <p className="text-gray-800 font-semibold">— Parent of a 6-year-old</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "The team's dedication and expertise have transformed our daughter's communication skills. We're so grateful for their support."
              </p>
              <p className="text-gray-800 font-semibold">— Parent of an 8-year-old</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Rose/warm gradient to differentiate from hero */}
      <section className="py-16 bg-gradient-to-r from-rose-600 via-pink-500 to-orange-400 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.4, 1], x: [0, -50, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Child's Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with us to discuss how we can support your child's growth and development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/book-appointment"
                className="inline-block bg-white text-rose-600 px-8 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Book Appointment
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;