import { motion } from 'framer-motion';

const BookAppointment = () => {
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
            Book an Appointment
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Take the first step towards helping your child reach their full potential
          </p>
        </motion.div>
      </section>

      {/* Booking Options */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent text-center mb-6">
              Book Your Appointment
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Choose your preferred method to schedule an appointment. We're here to help you take the first step towards your child's wellbeing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Phone Booking */}
              <motion.a
                href="tel:+923115367440"
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-blue-100 text-center group"
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  className="text-6xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  📞
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-900 transition-colors">
                  Call Us
                </h3>
                <p className="text-blue-900 font-bold text-xl mb-3">0311-5367440</p>
                <p className="text-gray-500 text-sm">
                  Click to call directly and speak with our team
                </p>
              </motion.a>

              {/* WhatsApp Booking — improved pre-filled message */}
              <motion.a
                href="https://wa.me/923303866245?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20for%20my%20child.%0A%0AChild's%20Name%3A%20%0AAge%3A%20%0AConcern%2FReason%3A%20%0APreferred%20Days%3A%20%0A%0APlease%20let%20me%20know%20the%20available%20time%20slots."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-blue-100 text-center group"
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="text-6xl mb-6"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  💬
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-blue-900 transition-colors">
                  WhatsApp
                </h3>
                <p className="text-blue-900 font-bold text-xl mb-3">0330-3866245</p>
                <p className="text-gray-500 text-sm">
                  Click to send a booking request on WhatsApp
                </p>
                <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-3">
                  <p className="text-green-700 text-xs font-medium">📋 Pre-filled form will open — just fill in your child's details!</p>
                </div>
              </motion.a>
            </div>

            {/* What to bring / prepare */}
            <motion.div
              className="bg-white border border-blue-100 rounded-2xl p-8 shadow-md mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">What to Prepare for Your First Visit</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: '📋', title: 'Medical History', desc: 'Previous diagnoses, reports, or doctor notes if available' },
                  { icon: '👶', title: 'Child\'s Info', desc: 'Birth date, school details, and developmental milestones' },
                  { icon: '❓', title: 'Your Questions', desc: 'Any concerns or questions you want to discuss with our team' }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-blue-50/50">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h4 className="font-semibold text-gray-800 mb-1 text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Office Hours Info */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl text-center border border-blue-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-teal-600 bg-clip-text text-transparent mb-6">
                Office Hours
              </h3>
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
                *Appointments are subject to availability. Please call or WhatsApp for same-day appointments.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;