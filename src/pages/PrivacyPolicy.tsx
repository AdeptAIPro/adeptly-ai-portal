
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-card rounded-lg shadow-sm p-8 md:p-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
          <p className="mb-6"><strong>Effective Date:</strong> May 14, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">1. Who We Are</h2>
            <p>Adept AI Pro is a professional services company specializing in talent matching, resume screening, and candidate sourcing using platforms such as CEIPAL, JobDiva, and LinkedIn.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">2. Information We Collect</h2>
            <p className="mb-2">We may collect and process the following personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Resume (employment history, education, skills)</li>
              <li>LinkedIn Profile URL</li>
              <li>Other voluntary information provided for job matching</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">3. How We Collect Information</h2>
            <p className="mb-2">We collect data through:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Resumes or forms submitted directly to us</li>
              <li>Third-party platforms like CEIPAL, JobDiva, and LinkedIn</li>
              <li>CRM and communication tools</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">4. How We Use Your Information</h2>
            <p className="mb-2">Your information may be used to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Match you with relevant job opportunities</li>
              <li>Evaluate your qualifications and professional background</li>
              <li>Contact you regarding roles and hiring processes</li>
              <li>Maintain records in our CRM system</li>
              <li>Comply with legal and contractual obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">5. Sharing of Information</h2>
            <p className="mb-2">We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Employers or clients actively hiring</li>
              <li>Platforms such as CEIPAL, JobDiva, and LinkedIn</li>
              <li>Service providers who assist with recruitment processes</li>
            </ul>
            <p>We do not sell your personal information.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">6. Cookies and Tracking Technologies</h2>
            <p>We may use cookies and third-party analytics tools to enhance website functionality and measure usage. This may include IP addresses, browser types, and visit behavior.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">7. Data Retention</h2>
            <p>We retain personal data for as long as necessary to fulfill recruitment purposes and legal obligations. You may request deletion at any time.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">8. Your Rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Access your data</li>
              <li>Request corrections or updates</li>
              <li>Request deletion of your data</li>
              <li>Opt out of future communications</li>
            </ul>
            <p>To exercise these rights, contact us below.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">9. Contact Us</h2>
            <p className="mb-2">If you have questions or requests, contact us at:</p>
            <p><strong>Email:</strong> <a href="mailto:support@adeptai.pro" className="text-blue-600 hover:underline">support@adeptai.pro</a></p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">10. Updates to This Policy</h2>
            <p>This policy may be updated periodically. Any changes will be posted here with a revised effective date.</p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
