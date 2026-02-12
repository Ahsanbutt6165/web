import { motion } from 'framer-motion';

const BookAppointment = () => {
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
            Book an Appointment
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Take the first step towards helping your child reach their full potential
          </p>
        </motion.div>
      </section>

      {/* Booking Options */}
      <section className="py-16 bg-gradient-to-b from-white to-sky-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent text-center mb-6">
              Book Your Appointment
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Choose your preferred method to schedule an appointment. We're here to help you take the first step towards your child's wellbeing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Phone Booking */}
              <motion.a
                href="tel:+923115367440"
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-sky-100 text-center group"
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
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-sky-600 transition-colors">
                  Call Us
                </h3>
                <p className="text-sky-600 font-bold text-xl mb-3">0311-5367440</p>
                <p className="text-gray-500 text-sm">
                  Click to call directly and speak with our team
                </p>
              </motion.a>

              {/* WhatsApp Booking */}
              <motion.a
                href="https://wa.me/923303866245?text=Hello, I would like to book an appointment for my child. Please let me know your available dates and times."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-sky-100 text-center group"
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
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-sky-600 transition-colors">
                  WhatsApp
                </h3>
                <p className="text-sky-600 font-bold text-xl mb-3">0330-3866245</p>
                <p className="text-gray-500 text-sm">
                  Click to chat on WhatsApp instantly
                </p>
              </motion.a>
            </div>

            {/* Office Hours Info */}
            <motion.div
              className="bg-gradient-to-br from-sky-50 to-cyan-50 p-8 rounded-2xl text-center border border-sky-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                Office Hours
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Monday - Friday</p>
                  <p className="text-gray-600">9:00 AM - 4:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Saturday</p>
                  <p className="text-gray-600">Closed</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Sunday</p>
                  <p className="text-gray-600">Closed</p>
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