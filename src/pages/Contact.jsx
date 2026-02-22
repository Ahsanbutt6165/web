import { motion } from 'framer-motion';

const Contact = () => {
  const mapUrl = 'https://maps.app.goo.gl/rMNYu5GipfEnmfNb8';
  const address = 'St#6, Sector A, Bahria Enclave, Islamabad';

  const faqs = [
    {
      q: 'How do I know if my child needs therapy?',
      a: 'If you notice delays in speech, social interaction, behavior, or development compared to peers, it\'s worth getting a professional assessment. Early intervention makes a significant difference.'
    },
    {
      q: 'What age groups do you work with?',
      a: 'We work with children from 2 to 18 years of age across all our services.'
    },
    {
      q: 'How long does a typical therapy program last?',
      a: 'Duration varies based on the child\'s needs and goals. We assess progress regularly and adjust the program accordingly.'
    },
    {
      q: 'Can parents sit in during sessions?',
      a: 'Yes, we encourage parental involvement. For many therapies, parent participation is a key part of the process.'
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
            Contact Us
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            We're here to help. Get in touch with us today.
          </p>
        </motion.div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent mb-6">
              Choose Your Preferred Contact Method
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              We're here to help! Reach out through any of these convenient ways.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <motion.a
                href="tel:+923115367440"
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-blue-100 group"
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-900 transition-colors">Call Us</h3>
                <p className="text-blue-900 font-medium text-lg">0311-5367440</p>
                <p className="text-gray-500 text-sm mt-2">Click to call directly</p>
              </motion.a>

              <motion.a
                href="https://wa.me/923303866245?text=Hello, I would like to inquire about your services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-blue-100 group"
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-900 transition-colors">WhatsApp</h3>
                <p className="text-blue-900 font-medium text-lg">0330-3866245</p>
                <p className="text-gray-500 text-sm mt-2">Click to chat on WhatsApp</p>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Location
          </motion.h2>
          <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: '450px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.812!2d73.2074137!3d33.6902204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfe9006b316dd9%3A0x12447806a836ad98!2sPsych%20Heal!5e0!3m2!1sen!2spk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Psych Heal Clinic Location"
            ></iframe>
          </div>
          <div className="text-center mt-6">
            <p className="text-lg font-semibold text-gray-800 mb-2">{address}</p>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-900 via-blue-800 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-950 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl mt-2"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section — fills the empty gap */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-blue-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <h3 className="font-semibold text-blue-900 mb-2 flex items-start gap-2">
                  <span className="text-teal-500 mt-0.5">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Office Hours
            </motion.h2>
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl text-center border border-blue-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Monday - Friday</p>
                  <p className="text-teal-700 font-medium">9:00 AM - 4:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Saturday</p>
                  <p className="text-red-500 font-medium">Closed</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Sunday</p>
                  <p className="text-red-500 font-medium">Closed</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-6 italic">
                *Appointments available by request. Please call or WhatsApp to schedule.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;