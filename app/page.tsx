"use client";

import { useState } from "react";
import { 
  Briefcase, Award, Mail, Phone, MapPin, ChevronDown, 
  ChevronUp, Send, Sparkles, Terminal, CheckCircle2 
} from "lucide-react";

export default function Portfolio() {
  const [expandedRole, setExpandedRole] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"experience" | "credentials" | "ask">("experience");
  const [chatQuery, setChatQuery] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", text: "Hi! I'm Arindam's AI assistant. Ask me anything about his 12+ years of ITSM leadership experience." }
  ]);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const toggleRole = (index: number) => {
    setExpandedRole(expandedRole === index ? null : index);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatQuery.trim()) return;

    const userMsg = chatQuery;
    setChatMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setChatQuery("");

    // Simulated grounded response based on profile
    setTimeout(() => {
      let reply = "Arindam is an IT Service Management and Operations Leader with 12+ years of experience specializing in service delivery, incident/problem management, and operational excellence.";
      const lower = userMsg.toLowerCase();
      if (lower.includes("experience") || lower.includes("tcs") || lower.includes("canon")) {
        reply = "Arindam has over 12 years of experience in IT Service Management, having served at TCS and currently driving ITSM Service & Transition management, focusing on high availability, SLA compliance, and cross-functional operational workflows.";
      } else if (lower.includes("certif") || lower.includes("itil") || lower.includes("sigma")) {
        reply = "Arindam holds professional certifications in ITIL V4 Foundation and Lean Six Sigma Green Belt, emphasizing process optimization and structured framework execution.";
      } else if (lower.includes("europe") || lower.includes("international") || lower.includes("travel")) {
        reply = "He has managed international client portfolios and deployments across Europe, including onsite engagements in the Netherlands, France, and Belgium.";
      }
      setChatMessages(prev => [...prev, { role: "assistant", text: reply }]);
    }, 600);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Header / Hero Section */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold mb-1 tracking-wider uppercase">
              <Sparkles size={16} /> AI-Powered Professional Profile
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Arindam Banerjee</h1>
            <p className="text-slate-400 font-medium">IT Service Management & Operations Leader</p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-slate-300">
            <span className="flex items-center gap-1 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
              <MapPin size={14} className="text-cyan-400" /> India
            </span>
            <span className="flex items-center gap-1 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
              <Briefcase size={14} className="text-cyan-400" /> 12+ Years Exp
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-6 py-10">
        
        {/* Intro Card */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-8 mb-8 shadow-xl">
          <h2 className="text-xl font-semibold mb-3 text-white">Executive Profile</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Results-driven IT Service Management and Operations Leader with over 12 years of experience specializing in global service delivery, process engineering, and high-stakes incident governance. Backed by **ITIL V4 Foundation** and **Lean Six Sigma Green Belt** certifications, driving operational efficiency, cross-functional alignment, and SLA excellence.
          </p>
          
          <div className="flex border-b border-slate-800 gap-6 text-sm font-medium">
            <button 
              onClick={() => setActiveTab("experience")}
              className={`pb-3 border-b-2 transition-colors ${activeTab === "experience" ? "border-cyan-400 text-cyan-400" : "border-transparent text-slate-400 hover:text-slate-200"}`}
            >
              Experience Timeline
            </button>
            <button 
              onClick={() => setActiveTab("credentials")}
              className={`pb-3 border-b-2 transition-colors ${activeTab === "credentials" ? "border-cyan-400 text-cyan-400" : "border-transparent text-slate-400 hover:text-slate-200"}`}
            >
              Credentials & Skills
            </button>
            <button 
              onClick={() => setActiveTab("ask")}
              className={`pb-3 border-b-2 transition-colors flex items-center gap-1.5 ${activeTab === "ask" ? "border-cyan-400 text-cyan-400" : "border-transparent text-slate-400 hover:text-slate-200"}`}
            >
              <Terminal size={14} /> Ask Arindam AI
            </button>
          </div>
        </section>

        {/* Tab 1: Experience */}
        {activeTab === "experience" && (
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">Career History</h3>
            
            {/* Role 1 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <button 
                onClick={() => toggleRole(0)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-850 transition-colors"
              >
                <div>
                  <div className="text-xs text-cyan-400 font-semibold mb-1">Canon Europe Ltd / Global Enterprise Delivery</div>
                  <h4 className="text-lg font-bold text-white">ITSM Service and Transition Manager</h4>
                  <p className="text-sm text-slate-400">Global Operations & Service Transition</p>
                </div>
                <div className="text-slate-400">
                  {expandedRole === 0 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
              
              {expandedRole === 0 && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-800 text-sm text-slate-300 space-y-3">
                  <p>Accountable for end-to-end IT service transitions, operational stability, and continuous improvement frameworks across regional portfolios.</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                    <li>Spearheaded ITSM workflow optimizations using structured ITIL methodologies, lowering incident resolution cycle times.</li>
                    <li>Managed cross-functional coordination across distributed onsite and offshore teams to ensure zero-disruption go-lives.</li>
                    <li>Applied Lean Six Sigma principles to eliminate process bottlenecks in change management and service request pipelines.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="bg-slate-800 text-cyan-300 px-2.5 py-1 rounded text-xs">ITSM</span>
                    <span className="bg-slate-800 text-cyan-300 px-2.5 py-1 rounded text-xs">Service Transition</span>
                    <span className="bg-slate-800 text-cyan-300 px-2.5 py-1 rounded text-xs">ITIL V4</span>
                  </div>
                </div>
              )}
            </div>

            {/* Role 2 */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <button 
                onClick={() => toggleRole(1)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-850 transition-colors"
              >
                <div>
                  <div className="text-xs text-cyan-400 font-semibold mb-1">Tata Consultancy Services (TCS)</div>
                  <h4 className="text-lg font-bold text-white">IT Operations & Delivery Leader</h4>
                  <p className="text-sm text-slate-400">2014 – Present (12+ Years Total IT Experience)</p>
                </div>
                <div className="text-slate-400">
                  {expandedRole === 1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
              
              {expandedRole === 1 && (
                <div className="px-6 pb-6 pt-2 border-t border-slate-800 text-sm text-slate-300 space-y-3">
                  <p>Progressed through multiple leadership and technical roles spanning large enterprise accounts, AD-AMS transitions, and complex system upgrades.</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
                    <li>Directed enterprise support operations, major incident response frameworks, and stringent SLA reporting.</li>
                    <li>Managed stakeholder expectations across international deployments, contributing to seamless global operations in Europe (Netherlands, France, Belgium).</li>
                    <li>Established process governance protocols and automated recurring service tasks to enhance delivery throughput.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="bg-slate-800 text-cyan-300 px-2.5 py-1 rounded text-xs">Incident Management</span>
                    <span className="bg-slate-800 text-cyan-300 px-2.5 py-1 rounded text-xs">Operations Leadership</span>
                    <span className="bg-slate-800 text-cyan-300 px-2.5 py-1 rounded text-xs">Service Delivery</span>
                  </div>
                </div>
              )}
            </div>

          </section>
        )}

        {/* Tab 2: Credentials */}
        {activeTab === "credentials" && (
          <section className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Certifications & Core Competencies</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="text-cyan-400" size={24} />
                  <h4 className="font-semibold text-white">ITIL V4 Foundation</h4>
                </div>
                <p className="text-sm text-slate-400">Certified practitioner in modern IT Service Management framework guidelines, value chains, and continuous improvement models.</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="text-cyan-400" size={24} />
                  <h4 className="font-semibold text-white">Lean Six Sigma Green Belt</h4>
                </div>
                <p className="text-sm text-slate-400">Trained in statistical process control, root cause analysis, and reducing variance in enterprise operational workflows.</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
              <h4 className="font-semibold text-white mb-3">Core Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {["IT Service Management", "Incident & Problem Management", "Service Transition", "Process Optimization", "SLA Governance", "Global Stakeholder Management", "Agile & Lean Methodologies"].map((skill, i) => (
                  <span key={i} className="bg-slate-800 border border-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Tab 3: Ask Arindam AI Chat */}
        {activeTab === "ask" && (
          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col h-[450px]">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="text-cyan-400" size={18} />
                <h3 className="font-semibold text-white">Interactive Career Chat</h3>
              </div>
              <span className="text-xs bg-cyan-950 text-cyan-300 border border-cyan-800 px-2.5 py-0.5 rounded-full">AI Powered</span>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-2 mb-4">
              {chatMessages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] p-3.5 rounded-xl text-sm ${msg.role === "user" ? "bg-cyan-600 text-white rounded-br-none" : "bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleChatSubmit} className="flex gap-2">
              <input 
                type="text"
                value={chatQuery}
                onChange={(e) => setChatQuery(e.target.value)}
                placeholder="Ask about Arindam's leadership style, ITIL expertise..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
              <button 
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <Send size={16} />
              </button>
            </form>
          </section>
        )}

        {/* Footer Contact Section */}
        <section className="mt-12 border-t border-slate-800 pt-8">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Get in Touch</h3>
            <p className="text-sm text-slate-400 mb-6">Send a direct inquiry or collaboration proposal.</p>
            
            {submitted ? (
              <div className="bg-cyan-950/50 border border-cyan-800 text-cyan-200 p-4 rounded-lg flex items-center gap-3 text-sm">
                <CheckCircle2 className="text-cyan-400" size={20} />
                Thank you! Your message has been noted.
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    required
                    placeholder="Your Name" 
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                  <input 
                    type="email" 
                    required
                    placeholder="Email Address" 
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <textarea 
                  required
                  rows={3}
                  placeholder="Your Message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-white hover:bg-slate-200 text-slate-950 font-medium py-2.5 rounded-lg text-sm transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </section>

      </main>
    </div>
  );
}