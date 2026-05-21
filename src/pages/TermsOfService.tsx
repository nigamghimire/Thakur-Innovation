import { motion } from "motion/react";
import { ArrowLeft, FileText, CheckCircle2, ShieldAlert, Award, Clock, HelpCircle, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfService() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col pt-20">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-white/60 hover:text-brand-blue mb-10 transition-colors group cursor-pointer bg-transparent border-0 outline-none p-0"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-semibold uppercase tracking-wider mb-4">
            <FileText size={12} /> Legal
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-brand-purple text-lg md:text-xl font-medium leading-relaxed italic bg-purple-500/5 border border-purple-500/10 rounded-2xl p-6">
            "Please read these terms carefully before using our services or website."
          </p>
        </motion.div>

        {/* Core Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8"
        >
          {/* Section 1 */}
          <div className="bg-white/2 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-brand-blue/25 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue flex-shrink-0 mt-1">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-display font-bold text-white mb-3">1. Agreement to Terms & Services</h2>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  By accessing or using THAKUR Innovation’s website and services, you agree to comply with these Terms of Service. Our services include digital marketing, branding, software development, IT solutions, consulting, and creative services.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white/2 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-brand-purple/25 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple flex-shrink-0 mt-1">
                <Award size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-display font-bold text-white mb-3">2. Intellectual Property Rights</h2>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  All website content, branding, graphics, and materials are the intellectual property of THAKUR Innovation unless otherwise stated. Unauthorized use, reproduction, or distribution is prohibited.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white/2 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-brand-blue/25 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue flex-shrink-0 mt-1">
                <Briefcase size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-display font-bold text-white mb-3">3. Client Responsibilities</h2>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  Clients are responsible for providing accurate information and timely communication during projects. Project timelines and deliverables may vary depending on scope and requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white/2 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-[#ff8a80]/25 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ff8a80]/10 border border-[#ff8a80]/20 flex items-center justify-center text-[#ff8a80] flex-shrink-0 mt-1">
                <ShieldAlert size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-display font-bold text-white mb-3">4. Limitation of Liability</h2>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  THAKUR Innovation is not liable for indirect damages, business losses, or interruptions resulting from the use of our services or third-party platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white/2 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-brand-purple/25 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple flex-shrink-0 mt-1">
                <Clock size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-display font-bold text-white mb-3">5. Modifications of These Terms</h2>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  We reserve the right to update or modify these terms at any time without prior notice.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white/2 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-brand-blue/25 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue flex-shrink-0 mt-1">
                <HelpCircle size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-display font-bold text-white mb-3">6. Questions</h2>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  For questions regarding these terms, please contact us directly by email at <a href="mailto:thakurinnovation2058@gmail.com" className="text-brand-blue hover:underline">thakurinnovation2058@gmail.com</a>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
