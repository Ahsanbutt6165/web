import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 'autism',
      icon: '🧩',
      title: 'Autism Assessment & Therapy',
      description: 'Comprehensive evaluation and personalized intervention plans for children with autism spectrum disorders.',
      whoItsFor: 'Children aged 2-18 years showing signs of autism spectrum disorder',
      whatToExpect: 'Initial comprehensive assessment including developmental history, behavioral observations, and standardized testing. Followed by personalized therapy sessions using evidence-based approaches.',
      benefits: [
        'Improved social communication skills',
        'Enhanced behavioral regulation',
        'Better sensory processing',
        'Increased independence in daily activities',
        'Family support and training'
      ],
      duration: 'Sessions typically 30-35 minutes',
      frequency: '5 days a week'
    },
    {
      id: 'speech',
      icon: '🗣️',
      title: 'Speech & Communication Support',
      description: 'Language development and communication skills enhancement for children with speech and language delays.',
      whoItsFor: 'Children with speech delays, language disorders, or communication difficulties',
      whatToExpect: 'Speech and language assessment followed by targeted interventions to improve articulation, language comprehension, and expressive communication.',
      benefits: [
        'Improved speech clarity',
        'Enhanced vocabulary and language skills',
        'Better communication abilities',
        'Increased confidence in social situations',
        'Parent training for continued support'
      ],
      duration: 'Sessions typically 30-35 minutes',
      frequency: '5 days a week'
    },
    {
      id: 'behavioral',
      icon: '🧠',
      title: 'Behavioral & Emotional Therapy',
      description: 'Managing emotions and behaviors effectively through evidence-based therapeutic approaches.',
      whoItsFor: 'Children experiencing behavioral challenges, emotional regulation difficulties, or anxiety',
      whatToExpect: 'Behavioral assessment and development of personalized strategies to manage emotions, reduce challenging behaviors, and build coping skills.',
      benefits: [
        'Improved emotional regulation',
        'Reduced challenging behaviors',
        'Enhanced coping strategies',
        'Better social interactions',
        'Increased self-confidence'
      ],
     duration: 'Sessions typically 30-35 minutes',
      frequency: '5 days a week'
    },
    {
      id: 'play',
      icon: '🧸',
      title: 'Play-Based Therapy',
      description: 'Learning through play and creative activities in a therapeutic setting.',
      whoItsFor: 'Young children (ages 2-10) who benefit from play-based learning approaches',
      whatToExpect: 'Structured play activities designed to address specific developmental goals while engaging children in fun, meaningful play experiences.',
      benefits: [
        'Natural learning through play',
        'Improved social skills',
        'Enhanced problem-solving abilities',
        'Better emotional expression',
        'Increased engagement and motivation'
      ],
duration: 'Sessions typically 30-35 minutes',
      frequency: '5 days a week'
    },
    {
      id: 'occupational',
      icon: '🎨',
      title: 'Occupational Therapy',
      description: 'Daily living skills and sensory integration support for children with developmental needs.',
      whoItsFor: 'Children needing support with daily living skills, sensory processing, or motor coordination',
      whatToExpect: 'Assessment of functional abilities and sensory needs, followed by activities to improve fine motor skills, self-care abilities, and sensory integration.',
      benefits: [
        'Improved fine and gross motor skills',
        'Better sensory processing',
        'Enhanced daily living independence',
        'Improved attention and focus',
        'Increased participation in activities'
      ],
duration: 'Sessions typically 30-35 minutes',
      frequency: '5 days a week'
    },
    {
      id: 'parent',
      icon: '👨‍👩‍👧',
      title: 'Parent Counseling & Training',
      description: 'Supporting parents in supporting their children through education and guidance.',
      whoItsFor: 'Parents and caregivers of children with developmental, behavioral, or mental health needs',
      whatToExpect: 'Individual or group sessions focused on understanding your child\'s needs, learning effective parenting strategies, and managing stress.',
      benefits: [
        'Increased understanding of your child\'s needs',
        'Effective parenting strategies',
        'Better family communication',
        'Reduced parental stress',
        'Stronger parent-child relationship'
      ],
      duration: 'Sessions typically 50-60 minutes',
      frequency: 'Weekly or bi-weekly'
    },
    {
      id: 'psycho',
      icon: '💭',
      title: 'Psycho Therapy',
      description: 'Professional mental health support for children experiencing psychological challenges.',
      whoItsFor: 'Children dealing with anxiety, depression, trauma, or other mental health concerns',
      whatToExpect: 'Therapeutic sessions using age-appropriate interventions such as cognitive-behavioral therapy, art therapy, or talk therapy to address psychological needs.',
      benefits: [
        'Improved mental health and wellbeing',
        'Enhanced coping mechanisms',
        'Better emotional processing',
        'Reduced anxiety and stress',
        'Increased resilience'
      ],
      duration: 'Sessions typically 50-60 minutes',
      frequency: '1-2 times per week'
    },
    {
      id: 'counseling',
      icon: '💬',
      title: 'Counseling',
      description: 'Individual and family counseling services for comprehensive support.',
      whoItsFor: 'Children and families seeking support for various life challenges, transitions, or relationship issues',
      whatToExpect: 'A safe, confidential space to explore feelings, address concerns, and develop solutions with a trained counselor.',
      benefits: [
        'Emotional support and validation',
        'Improved family dynamics',
        'Better conflict resolution',
        'Enhanced communication skills',
        'Personal growth and self-awareness'
      ],
      duration: 'Sessions typically 50-60 minutes',
      frequency: 'Weekly or bi-weekly'
    }
  ];

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
            Our Services
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Comprehensive care tailored to your child's unique needs
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className={`bg-white rounded-3xl shadow-lg overflow-hidden border border-sky-100 flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <motion.div
                  className={`${index % 2 === 0 ? 'md:w-1/3' : 'md:w-1/3'} w-full bg-gradient-to-br from-sky-500 via-cyan-400 to-teal-400 flex items-center justify-center p-8`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="text-8xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                </motion.div>
                <div className={`${index % 2 === 0 ? 'md:w-2/3' : 'md:w-2/3'} w-full p-8 md:p-12`}>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Who It's For:</h3>
                      <p className="text-gray-600">{service.whoItsFor}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">What to Expect:</h3>
                      <p className="text-gray-600">{service.whatToExpect}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Benefits:</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Duration:</h3>
                        <p className="text-gray-600">{service.duration}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Frequency:</h3>
                        <p className="text-gray-600">{service.frequency}</p>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                          to="/book-appointment"
                          className="inline-block bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:from-sky-700 hover:via-cyan-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl"
                        >
                          Book This Service
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-400 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl"
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
            Not Sure Which Service Your Child Needs?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us for a consultation and we'll help you determine the best approach for your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-block bg-white text-sky-600 px-8 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:+923115367440"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Call: 0311-5367440
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;