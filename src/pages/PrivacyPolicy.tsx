import { motion } from "motion/react";
import { ArrowLeft, Shield, CheckCircle2, ShieldCheck, Eye, Share2, Clipboard, RefreshCw, HelpCircle, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
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
            <Shield size={12} /> Privacy
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-brand-purple text-lg md:text-xl font-medium leading-relaxed italic bg-purple-500/5 border border-purple-500/10 rounded-2xl p-6">
            At THAKUR Innovation, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the information you provide when using our website or services.
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
                <Clipboard size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-display font-bold text-white mb-3">Information We Collect</h2>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  We may collect personal information such as your name, email address, phone number, company details, and any information submitted through contact forms or service inquiries.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white/2 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-brand-purple/25 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple flex-shrink-0 mt-1">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-display font-bold text-white mb-3">How We Use Your Information</h2>
                <p className="text-white/60 leading-relaxed text-sm md:text-base mb-4">
                  The information we collect may be used to:
                </p>
                <ul className="space-y-2 text-white/50 text-sm md:text-base pl-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span> Respond to inquiries and client requests
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span> Provide and improve our services
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span> Communicate project updates and support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span> Enhance website performance and user experience
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span> Send relevant updates or marketing communications when permitted
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white/2 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-[#ff8a80]/25 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ff8a80]/10 border border-[#ff8a80]/20 flex items-center justify-center text-[#ff8a80] flex-shrink-0 mt-1">
                <Lock size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-display font-bold text-white mb-3">Data Protection</h2>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  We implement reasonable security measures to protect your information from unauthorized access, disclosure, or misuse. However, no online platform can guarantee complete security.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white/2 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-brand-blue/25 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue flex-shrink-0 mt-1">
                <Eye size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-display font-bold text-white mb-3">Third-Party Services</h2>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  Our website may use third-party tools, analytics services, or external platforms to improve functionality and performance. These services may collect limited technical data according to their own privacy policies.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white/2 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-brand-purple/25 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple flex-shrink-0 mt-1">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-display font-bold text-white mb-3">Cookies & Analytics</h2>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  We may use cookies and analytics tools to understand website traffic, improve user experience, and optimize our services. Users can choose to disable cookies through their browser settings.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white/2 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-brand-blue/25 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue flex-shrink-0 mt-1">
                <Share2 size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-display font-bold text-white mb-3">Information Sharing</h2>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  THAKUR Innovation does not sell, rent, or trade your personal information to third parties. Information may only be shared when required by law or necessary to provide requested services.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-white/2 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-brand-purple/25 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple flex-shrink-0 mt-1">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-display font-bold text-white mb-3">Your Rights</h2>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  You may request access, correction, or removal of your personal information by contacting us directly.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="bg-white/2 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-[#ff8a80]/25 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ff8a80]/10 border border-[#ff8a80]/20 flex items-center justify-center text-[#ff8a80] flex-shrink-0 mt-1">
                <RefreshCw size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-display font-bold text-white mb-3">Policy Updates</h2>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  We reserve the right to update or modify this Privacy Policy at any time. Changes will be reflected on this page.
                </p>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div className="bg-white/2 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-brand-blue/25 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue flex-shrink-0 mt-1">
                <HelpCircle size={20} />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-display font-bold text-white mb-3">Contact Us</h2>
                <p className="text-white/60 leading-relaxed text-sm md:text-base">
                  If you have any questions regarding this Privacy Policy, please contact THAKUR Innovation directly through our website or official communication channels at <a href="mailto:thakurinnovation2058@gmail.com" className="text-brand-blue hover:underline">thakurinnovation2058@gmail.com</a>.
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
