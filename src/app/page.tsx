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
  X,
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
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-black text-white px-4 py-8 md:px-6 lg:px-10 font-sans selection:bg-white selection:text-black">
      <main className="max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl md:rounded-3xl px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12 shadow-[0_25px_80px_rgba(15,23,42,0.85)]">
        <form
          onSubmit={handleSubmit}
          className="space-y-10 sm:space-y-12"
          noValidate
        >
          {/* HEADER */}
          <header className="border-b border-white/10 pb-6 sm:pb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6">
            <div className="space-y-2">
              <p className="text-[10px] font-bold tracking-[0.35em] text-gray-400 uppercase">
                Digital Legal Record
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-tight">
                Internship Agreement
              </h1>
              <p className="text-gray-500 font-bold text-[10px] tracking-[0.35em] uppercase">
                NextGen Company • Sanothimi, Bhaktapur
              </p>
            </div>

            <div className="bg-white/5 p-3 sm:p-4 rounded-2xl border border-white/10 shrink-0 flex items-center justify-center">
              <img
                src="/pn.jpg"
                alt="NextGen Logo"
                className="h-10 sm:h-12 w-auto object-contain brightness-125"
              />
            </div>
          </header>

          {/* STUDENT INFORMATION */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 flex items-center gap-2">
                <User size={12} /> Intern Full Name
              </label>
              <input
                required
                value={formData.internName}
                onChange={(e) =>
                  setFormData({ ...formData, internName: e.target.value })
                }
                className="w-full bg-white/5 border border-white/15 p-3.5 sm:p-4 rounded-xl font-semibold text-sm sm:text-base tracking-tight outline-none focus:border-white/40 focus:ring-2 focus:ring-white/25 transition-colors"
                placeholder="Enter your full legal name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 flex items-center gap-2">
                <MapPin size={12} /> Address
              </label>
              <input
                required
                value={formData.internAddress}
                onChange={(e) =>
                  setFormData({ ...formData, internAddress: e.target.value })
                }
                className="w-full bg-white/5 border border-white/15 p-3.5 sm:p-4 rounded-xl font-semibold text-sm sm:text-base tracking-tight outline-none focus:border-white/40 focus:ring-2 focus:ring-white/25 transition-colors"
                placeholder="City, Country"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 flex items-center gap-2">
                <Phone size={12} /> Contact Number
              </label>
              <input
                required
                type="tel"
                value={formData.internPhone}
                onChange={(e) =>
                  setFormData({ ...formData, internPhone: e.target.value })
                }
                className="w-full bg-white/5 border border-white/15 p-3.5 sm:p-4 rounded-xl font-semibold text-sm sm:text-base tracking-tight outline-none focus:border-white/40 focus:ring-2 focus:ring-white/25 transition-colors"
                placeholder="+977..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 flex items-center gap-2">
                <Mail size={12} /> Email Address
              </label>
              <input
                required
                type="email"
                value={formData.internEmail}
                onChange={(e) =>
                  setFormData({ ...formData, internEmail: e.target.value })
                }
                className="w-full bg-white/5 border border-white/15 p-3.5 sm:p-4 rounded-xl font-semibold text-sm sm:text-base tracking-tight outline-none focus:border-white/40 focus:ring-2 focus:ring-white/25 transition-colors"
                placeholder="student@example.com"
              />
            </div>
          </section>

          {/* DATES & CHARGE */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 sm:pt-6 border-t border-white/5">
            <div className="bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 space-y-4">
              <h3 className="font-black uppercase tracking-tighter flex items-center gap-2 text-gray-200 text-sm sm:text-base">
                <Calendar size={16} /> Internship Duration
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.25em]">
                  Start Date
                </p>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                  className="bg-transparent border-b border-white/20 outline-none cursor-pointer font-semibold text-white w-full pb-1.5 text-sm sm:text-base focus:border-white/50 transition-colors"
                />
                <div className="space-y-1 pt-1">
                  <p className="text-[11px] text-gray-400 font-semibold">
                    Duration: <span className="text-white">1 Month</span>
                  </p>
                  <p className="text-[11px] text-gray-400 font-semibold">
                    Role:{" "}
                    <span className="text-white underline underline-offset-4 decoration-white/40">
                      Frontend Development
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-4 sm:p-6 rounded-xl border border-white/10 space-y-4">
              <h3 className="font-black uppercase tracking-tighter flex items-center gap-2 text-gray-200 text-sm sm:text-base">
                <PenTool size={16} /> Internship Charge
              </h3>

              <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-[0.25em]">
                One-time Training Fee
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-1">
                {["500", "1000"].map((val) => {
                  const selected = formData.internCharge === val;
                  return (
                    <button
                      key={val}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, internCharge: val })
                      }
                      className={`flex-1 flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm sm:text-base font-semibold tracking-tight transition-all ${
                        selected
                          ? "bg-white text-black border-white shadow-[0_12px_35px_rgba(255,255,255,0.25)]"
                          : "bg-black/20 border-white/20 text-gray-300 hover:border-white/40 hover:bg-white/5"
                      }`}
                    >
                      <span>Rs. {val}</span>
                      <span
                        className={`h-3 w-3 rounded-full border-2 ${
                          selected
                            ? "border-black bg-black"
                            : "border-white/40"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* RESPONSIBILITIES */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 pt-4 sm:pt-6 border-t border-white/5">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tighter italic flex items-center gap-2">
                <ShieldCheck size={18} className="text-blue-500" /> 5.
                Responsibilities of Intern
              </h2>
              <div className="text-sm text-gray-300 leading-relaxed tracking-tight space-y-3 font-medium">
                <p className="border-l border-white/15 pl-4 hover:border-white/50 transition-colors">
                  • Complete all assigned tasks within the specified deadlines.
                </p>
                <p className="border-l border-white/15 pl-4 hover:border-white/50 transition-colors">
                  • Follow company instructions and professional code standards.
                </p>
                <p className="border-l border-white/15 pl-4 hover:border-white/50 transition-colors">
                  • Maintain strict confidentiality of all project and company
                  information.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tighter italic flex items-center gap-2">
                <ShieldCheck size={18} className="text-green-500" /> 6.
                Responsibilities of Company
              </h2>
              <div className="text-sm text-gray-300 leading-relaxed tracking-tight space-y-3 font-medium">
                <p className="border-l border-white/15 pl-4 hover:border-white/50 transition-colors">
                  • Provide professional guidance and technical learning
                  opportunities.
                </p>
                <p className="border-l border-white/15 pl-4 hover:border-white/50 transition-colors">
                  • Issue an official Internship Certificate after successful
                  completion.
                </p>
              </div>
            </div>
          </section>

          {/* SIGNATURES */}
          <section className="pt-8 sm:pt-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-5">
              <p className="font-black uppercase tracking-tighter text-[10px] text-gray-500 underline decoration-white/10">
                Company CEO Signature:
              </p>
              <div className="h-16 sm:h-20 flex items-end">
                <span
                  className="font-serif italic text-3xl sm:text-4xl text-white/85 drop-shadow-md"
                  style={{ fontFamily: "cursive" }}
                >
                  Sachendra Shrestha
                </span>
              </div>
              <div className="border-t border-white/10 pt-3 sm:pt-4">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">
                  NextGen Coder
                </p>
                <p className="text-[10px] text-gray-500 mt-1 font-bold">
                  JANUARY 12, 2026
                </p>
              </div>
            </div>

            <div className="space-y-5 text-right">
              <p className="font-black uppercase tracking-tighter text-[10px] text-gray-500 underline decoration-white/10">
                Student / Intern Signature:
              </p>
              <div className="h-16 sm:h-20 flex items-end justify-end">
                <span
                  className="font-serif italic text-2xl sm:text-3xl text-blue-400/85"
                  style={{ fontFamily: "cursive" }}
                >
                  {formData.internName || "Signatory"}
                </span>
              </div>
              <div className="border-t border-white/10 pt-3 sm:pt-4 flex flex-col items-end">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white underline decoration-blue-500/50">
                  Digital Verification
                </p>
                <p className="text-[10px] text-gray-500 mt-1 font-bold uppercase tracking-widest">
                  Verified on: {formData.startDate}
                </p>
              </div>
            </div>
          </section>

          {/* SUBMIT */}
          <div className="pt-6 sm:pt-8 flex flex-col items-center gap-3 sm:gap-4">
            <button
              disabled={loading}
              className="w-full sm:w-auto bg-white text-black px-6 sm:px-16 md:px-24 py-3.5 sm:py-4 rounded-full font-black uppercase tracking-tighter text-base sm:text-xl hover:bg-gray-200 transition-all active:scale-[0.97] flex items-center justify-center gap-3 shadow-[0_18px_45px_rgba(255,255,255,0.22)] disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-700"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin w-5 h-5 sm:w-6 sm:h-6" />
                  Processing...
                </>
              ) : (
                "Secure Agreement"
              )}
            </button>
            <p className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em] text-center">
              Official NextGen Legal Record • Read-only after submission
            </p>
          </div>
        </form>

        {/* SUCCESS MODAL */}
        {success && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-center z-50 px-4">
            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-gray-300"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <CheckCircle className="text-green-500 w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 animate-bounce" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter italic text-center">
              Internship Confirmed
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-[0.4em] mt-3 sm:mt-4 text-[9px] sm:text-[10px] text-center">
              Application Verified • Record Stored Securely
            </p>
          </div>
        )}
      </main>

      <footer className="max-w-4xl mx-auto mt-10 sm:mt-14 text-center opacity-40 pb-6 sm:pb-10">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.45em]">
          <Globe size={11} className="shrink-0" /> 2026 NextGen Coder •
          Governing Law: Nepal
        </div>
      </footer>
    </div>
  );
}