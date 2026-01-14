"use client";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {
  Loader2,
  CheckCircle,
  User,
  MapPin,
  Phone,
  Mail,
  Calendar,
  PenTool,
  Globe,
  ShieldCheck,
} from "lucide-react";

export default function DigitalAgreement() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    internName: "",
    internAddress: "",
    internPhone: "",
    internEmail: "",
    startDate: "2026-01-12",
    internCharge: "500",
    role: "Frontend Development",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "internship_records"), {
        ...formData,
        company: "NextGen Company",
        ceo: "Sachendra Shrestha",
        role: "Frontend Development",
        duration: "1 Month",
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setFormData({
        internName: "",
        internAddress: "",
        internPhone: "",
        internEmail: "",
        startDate: "2026-01-12",
        internCharge: "500",
         role: "Frontend Development",
      });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("Firebase Error:", error);
      alert("Logic Error: Check Connection");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-10 font-sans selection:bg-white selection:text-black">
      <main className="max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-12 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* NEW BALANCED HEADER INSIDE THE BOX */}
          <header className="border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-black uppercase tracking-tighter italic leading-none selection:bg-white selection:text-black">
                Internship Agreement
              </h1>
              <p className="text-gray-600 font-bold text-[10px] tracking-[0.4em] uppercase italic">
                NextGen Company • Sanothimi, Bhaktapur
              </p>
            </div>

            {/* LOGO MOVED TO THE RIGHT SIDE */}
            <div className="bg-white/5 p-3 rounded-xl border border-white/10">
              <img
                src="/pn.jpg"
                alt="NextGen Logo"
                className="h-12 w-auto object-contain brightness-125"
              />
            </div>
          </header>

          {/* ... rest of the form fields stay the same */}

          {/* STUDENT INFORMATION SECTION */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 flex items-center gap-2">
                <User size={12} /> Intern Full Name
              </label>
              <input
                required
                value={formData.internName}
                onChange={(e) =>
                  setFormData({ ...formData, internName: e.target.value })
                }
                className="w-full bg-white/[0.05] border border-white/10 p-4 rounded-xl font-bold tracking-tight outline-none focus:border-white/40"
                placeholder="Enter Full Name..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 flex items-center gap-2">
                <MapPin size={12} /> Address
              </label>
              <input
                required
                value={formData.internAddress}
                onChange={(e) =>
                  setFormData({ ...formData, internAddress: e.target.value })
                }
                className="w-full bg-white/[0.05] border border-white/10 p-4 rounded-xl font-bold tracking-tight outline-none focus:border-white/40"
                placeholder="City, Nepal"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 flex items-center gap-2">
                <Phone size={12} /> Contact Number
              </label>
              <input
                required
                value={formData.internPhone}
                onChange={(e) =>
                  setFormData({ ...formData, internPhone: e.target.value })
                }
                className="w-full bg-white/[0.05] border border-white/10 p-4 rounded-xl font-bold tracking-tight outline-none focus:border-white/40"
                placeholder="+977..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 flex items-center gap-2">
                <Mail size={12} /> Email Address
              </label>
              <input
                required
                type="email"
                value={formData.internEmail}
                onChange={(e) =>
                  setFormData({ ...formData, internEmail: e.target.value })
                }
                className="w-full bg-white/[0.05] border border-white/10 p-4 rounded-xl font-bold tracking-tight outline-none focus:border-white/40"
                placeholder="student@example.com"
              />
            </div>
          </section>

          {/* DATES & INTERN ROLE SECTION */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
            <div className="bg-white/[0.02] p-6 rounded-xl border border-white/5 space-y-4">
              <h3 className="font-black uppercase tracking-tighter flex items-center gap-2 text-gray-300">
                <Calendar size={16} /> Internship Duration
              </h3>
              <div className="space-y-2">
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest">
                  Start Date:
                </p>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                  className="bg-transparent border-b border-white/20 outline-none cursor-pointer font-bold text-white w-full pb-2 color-scheme-dark"
                />
                <p className="text-[11px] text-gray-400 font-bold mt-2">
                  Duration: <span className="text-white">1 Month</span>
                </p>
                <div className="space-y-2">
  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 flex items-center gap-2">
    <PenTool size={12} /> Specialization Role
  </label>
  <select
    required
    value={formData.role}
    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
    className="w-full bg-white/[0.05] border border-white/10 p-4 rounded-xl font-bold tracking-tight outline-none focus:border-white/40 appearance-none cursor-pointer text-white"
  >
    <option value="Frontend Development" className="bg-[#050505]">Frontend Development</option>
    <option value="Backend Development" className="bg-[#050505]">Backend Development</option>
    <option value="Fullstack Development" className="bg-[#050505]">Fullstack Development</option>
  </select>
</div>
              </div>
            </div>

            <div className="bg-white/[0.05] border border-white/10 p-6 rounded-xl space-y-6">
  <div className="space-y-4">
    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 flex items-center gap-2">
      <ShieldCheck size={12} /> Internship Charge
    </label>
    
    <div className="flex gap-6">
      <label className="flex items-center gap-3 cursor-pointer group">
        <input
          type="radio"
          name="internCharge"
          value="500"
          checked={formData.internCharge === "500"}
          onChange={(e) => setFormData({ ...formData, internCharge: e.target.value })}
          className="w-4 h-4 accent-white"
        />
        <span className="text-sm font-bold tracking-widest uppercase">Rs. 500</span>
      </label>
      <label className="flex items-center gap-3 cursor-pointer group">
        <input
          type="radio"
          name="internCharge"
          value="1000"
          checked={formData.internCharge === "1000"}
          onChange={(e) => setFormData({ ...formData, internCharge: e.target.value })}
          className="w-4 h-4 accent-white"
        />
        <span className="text-sm font-bold tracking-widest uppercase">Rs. 1000</span>
      </label>
    </div>
  </div>

  {/* NEW CONTENT TO FILL THE GAP */}
  <div className="pt-6 border-t border-white/5 space-y-3">
    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">
      Payment Policy
    </h4>
    <ul className="text-[11px] text-gray-400 space-y-2 leading-relaxed tracking-wide italic">
      <li>• Fee is non-refundable once the training commences.</li>
      <li>• Includes certification and digital resources access.</li>
      <li>• Payment confirms your seat in the specialization track.</li>
    </ul>
  </div>
</div>

          </section>

          {/* RESPONSIBILITIES SECTION - RESTORED & STYLED [cite: 2026-01-03] */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6 border-t border-white/5">
            <div className="space-y-6">
              <h2 className="text-xl font-black uppercase tracking-tighter italic flex items-center gap-2">
                <ShieldCheck size={18} className="text-blue-500" /> 5.
                Responsibilities of Intern
              </h2>
              <div className="text-sm text-gray-400 leading-relaxed tracking-tight space-y-3 font-medium">
                <p className="border-l border-white/10 pl-4 hover:border-white transition-colors">
                  • Complete all assigned tasks within the specified deadlines.
                </p>
                <p className="border-l border-white/10 pl-4 hover:border-white transition-colors">
                  • Follow company instructions and professional code standards.
                </p>
                <p className="border-l border-white/10 pl-4 hover:border-white transition-colors">
                  • Maintain strict confidentiality of all project and company
                  information.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-black uppercase tracking-tighter italic flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-500" /> 6.
                Responsibilities of Company
              </h2>
              <div className="text-sm text-gray-400 leading-relaxed tracking-tight space-y-3 font-medium">
                <p className="border-l border-white/10 pl-4 hover:border-white transition-colors">
                  • Provide professional guidance and technical learning
                  opportunities.
                </p>
                <p className="border-l border-white/10 pl-4 hover:border-white transition-colors">
                  • Issue an official Internship Certificate after successful
                  completion.
                </p>
              </div>
            </div>
          </section>

          {/* SIGNATURE SECTION */}
          <section className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-6">
              <p className="font-black uppercase tracking-tighter text-[10px] text-gray-600 underline decoration-white/10">
                Company CEO Signature:
              </p>
              <div className="h-20 flex items-end">
                <span
                  className="font-serif italic text-4xl text-white/80 drop-shadow-md"
                  style={{ fontFamily: "cursive" }}
                >
                  Sachendra Shrestha
                </span>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                  NextGen Coder
                </p>
                <p className="text-[10px] text-gray-700 mt-1 font-bold">
                  JANUARY 12, 2026
                </p>
              </div>
            </div>

            <div className="space-y-6 text-right">
              <p className="font-black uppercase tracking-tighter text-[10px] text-gray-600 underline decoration-white/10">
                Student / Intern Signature:
              </p>
              <div className="h-20 flex items-end justify-end">
                <span
                  className="font-serif italic text-3xl text-blue-400/80"
                  style={{ fontFamily: "cursive" }}
                >
                  {formData.internName || "Signatory"}
                </span>
              </div>
              <div className="border-t border-white/10 pt-4 flex flex-col items-end">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white underline decoration-blue-500/50">
                  Digital Verification
                </p>
                <p className="text-[10px] text-gray-700 mt-1 font-bold uppercase tracking-widest">
                  Verified on: {formData.startDate}
                </p>
              </div>
            </div>
          </section>

          {/* SUBMIT BUTTON */}
          <div className="pt-10 flex flex-col items-center gap-4">
            <button
              disabled={loading}
              className="bg-white text-black px-24 py-6 rounded-full font-black uppercase tracking-tighter text-2xl hover:bg-gray-200 transition-all active:scale-95 flex items-center gap-4 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
            >
              {loading ? (
                <Loader2 className="animate-spin w-8 h-8" />
              ) : (
                "Secure Agreement"
              )}
            </button>
            <p className="text-[10px] text-gray-700 font-bold uppercase tracking-[0.5em]">
             Official NextGen Legal Record
            </p>
          </div>
        </form>

        {/* SUCCESS FEEDBACK */}
        {success && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center z-50 animate-in fade-in duration-500">
            <CheckCircle className="text-green-500 w-24 h-24 mb-6 animate-bounce" />
            <h2 className="text-5xl font-black uppercase tracking-tighter italic">
             Internship Confirmed
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-[0.5em] mt-4">
             Application Verified
            </p>
          </div>
        )}
      </main>

      <footer className="max-w-4xl mx-auto mt-16 text-center opacity-30 pb-10">
        <div className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.6em]">
          <Globe size={12} />  2026 NextGen Coder • Governing Law: Nepal
        </div>
      </footer>
    </div>
  );
}
