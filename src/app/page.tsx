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
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-10 font-sans">
      <main className="max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-12 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* HEADER */}
          <header className="border-b border-white/10 pb-8 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-black uppercase italic">
                Internship Agreement
              </h1>
              <p className="text-gray-500 text-[10px] tracking-[0.4em] uppercase font-bold">
                NextGen Company • Sanothimi, Bhaktapur
              </p>
            </div>
            <img src="/pn.jpg" alt="Logo" className="h-12" />
          </header>

          {/* STUDENT INFO */}
          <section className="grid md:grid-cols-2 gap-8">
            <Input
              label="Intern Full Name"
              icon={<User size={12} />}
              value={formData.internName}
              onChange={(v) => setFormData({ ...formData, internName: v })}
            />
            <Input
              label="Address"
              icon={<MapPin size={12} />}
              value={formData.internAddress}
              onChange={(v) => setFormData({ ...formData, internAddress: v })}
            />
            <Input
              label="Contact Number"
              icon={<Phone size={12} />}
              value={formData.internPhone}
              onChange={(v) => setFormData({ ...formData, internPhone: v })}
            />
            <Input
              label="Email"
              icon={<Mail size={12} />}
              type="email"
              value={formData.internEmail}
              onChange={(v) => setFormData({ ...formData, internEmail: v })}
            />
          </section>

          {/* DATE & ROLE */}
          <section className="grid md:grid-cols-2 gap-8 border-t border-white/10 pt-6">
            <div className="space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-widest">
                Start Date
              </p>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) =>
                  setFormData({ ...formData, startDate: e.target.value })
                }
                className="bg-transparent border-b border-white/20 outline-none w-full pb-2"
              />
              <p className="text-[11px] text-gray-400 font-bold">
                Duration: <span className="text-white">1 Month</span>
              </p>

              <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <PenTool size={12} /> Role
              </label>
              <select
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className="w-full bg-white/[0.05] border border-white/10 p-3 rounded-lg"
              >
                <option>Frontend Development</option>
                <option>Backend Development</option>
                <option>Fullstack Development</option>
              </select>
            </div>

            {/* CHARGE */}
            <div className="space-y-4">
              <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <ShieldCheck size={12} /> Internship Charge
              </label>

              {["500", "1000"].map((amt) => (
                <label key={amt} className="flex items-center gap-2">
                  <input
                    type="radio"
                    value={amt}
                    checked={formData.internCharge === amt}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        internCharge: e.target.value,
                      })
                    }
                  />
                  Rs. {amt}
                </label>
              ))}
            </div>
          </section>

          {/* SUBMIT */}
          <div className="text-center pt-10">
            <button
              disabled={loading}
              className="bg-white text-black px-20 py-5 rounded-full font-black text-xl flex items-center gap-4 mx-auto"
            >
              {loading ? (
                <Loader2 className="animate-spin w-6 h-6" />
              ) : (
                "Secure Agreement"
              )}
            </button>
          </div>
        </form>

        {/* SUCCESS */}
        {success && (
          <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50">
            <CheckCircle className="text-green-500 w-20 h-20" />
            <h2 className="text-4xl font-black mt-6">
              Internship Confirmed
            </h2>
          </div>
        )}
      </main>

      <footer className="text-center text-[10px] opacity-40 mt-12">
        <Globe size={12} className="inline mr-2" />
        2026 NextGen Coder • Governing Law: Nepal
      </footer>
    </div>
  );
}

/* REUSABLE INPUT */
function Input({
  label,
  icon,
  value,
  onChange,
  type = "text",
}: any) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
        {icon} {label}
      </label>
      <input
        type={type}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/[0.05] border border-white/10 p-4 rounded-xl outline-none"
      />
    </div>
  );
}