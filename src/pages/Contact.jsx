import { motion } from 'framer-motion';

const Contact = () => {
  const mapUrl = 'https://www.google.com/maps/search/?api=1&query=St+6+Sector+A+Bahria+Enclave+Islamabad';
  const address = 'St#6, Sector A, Bahria Enclave, Islamabad';
  const emailAddress = 'info@psychhealclinic.com'; // Replace with your actual email
  const emailSubject = 'Inquiry from Website';
  const emailBody = 'Hello, I would like to inquire about your services.';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-600 via-cyan-500 to-teal-400 py-20 text-white relative overflow-hidden">
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

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <motion.div
              className="bg-gradient-to-br from-white to-sky-50/50 p-6 rounded-2xl text-center hover:shadow-xl transition-all border border-sky-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                📞
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Phone</h3>
              <motion.a
                href="tel:+923115367440"
                className="text-sky-600 hover:text-cyan-600 font-medium text-lg inline-block"
                whileHover={{ scale: 1.1 }}
              >
                0311-5367440
              </motion.a>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              className="bg-gradient-to-br from-white to-sky-50/50 p-6 rounded-2xl text-center hover:shadow-xl transition-all border border-sky-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                💬
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">WhatsApp</h3>
              <motion.a
                href="https://wa.me/923303866245?text=Hello, I would like to inquire about your services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-cyan-600 font-medium text-lg inline-block"
                whileHover={{ scale: 1.1 }}
              >
                0330-3866245
              </motion.a>
            </motion.div>

         

            {/* Address */}
            <motion.div
              className="bg-gradient-to-br from-white to-sky-50/50 p-6 rounded-2xl text-center hover:shadow-xl transition-all border border-sky-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                📍
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Address</h3>
              <motion.a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-cyan-600 font-medium text-sm leading-relaxed inline-block"
                whileHover={{ scale: 1.05 }}
              >
                {address}
              </motion.a>
            </motion.div>
          </div>

          {/* Map */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center" style={{ height: '450px' }}>
            <div className="text-center p-8">
              <div className="text-6xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{address}</h3>
              <p className="text-gray-600 mb-6">View our location on Google Maps</p>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:from-sky-700 hover:via-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-gradient-to-b from-white to-sky-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Choose Your Preferred Contact Method
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              We're here to help! Reach out to us through any of these convenient ways. Click on any option below to get in touch instantly.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <motion.a
                href="tel:+923115367440"
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-sky-100 group"
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-sky-600 transition-colors">Call Us</h3>
                <p className="text-sky-600 font-medium text-lg">0311-5367440</p>
                <p className="text-gray-500 text-sm mt-2">Click to call directly</p>
              </motion.a>

              <motion.a
                href="https://wa.me/923303866245?text=Hello, I would like to inquire about your services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-sky-100 group"
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-sky-600 transition-colors">WhatsApp</h3>
                <p className="text-sky-600 font-medium text-lg">0330-3866245</p>
                <p className="text-gray-500 text-sm mt-2">Click to chat on WhatsApp</p>
              </motion.a>


            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-gradient-to-b from-white to-sky-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Office Hours
            </motion.h2>
            <motion.div
              className="bg-gradient-to-br from-sky-50 to-cyan-50 p-8 rounded-2xl text-center border border-sky-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Monday - Friday</p>
                  <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Saturday</p>
                  <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Sunday</p>
                  <p className="text-gray-600">Closed</p>
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