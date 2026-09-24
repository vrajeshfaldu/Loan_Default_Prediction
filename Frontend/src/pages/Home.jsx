import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Brain,
  Zap,
  Database,
  TrendingUp,
  Sparkles,
  Sliders,
  Cpu,
  Layers,
  Lock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-transparent text-slate-900 dark:text-slate-100 overflow-x-hidden font-sans">
      
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <main id="home">
        <section className="relative min-h-[640px] flex items-center py-14 sm:py-20 overflow-hidden">
          
          <div className="w-[min(1240px,94%)] mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-10 lg:gap-14 relative z-10">
            
            {/* ================= LEFT CONTENT ================= */}
            <div className="max-lg:text-center">
              
              {/* Futuristic Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-slate-900/90 border border-blue-200/90 dark:border-cyan-500/30 text-blue-700 dark:text-cyan-300 text-[11px] font-mono font-semibold tracking-wider shadow-xs hover:border-blue-400 dark:hover:border-cyan-400 hover:shadow-sm transition-all duration-300 animate-fade-up max-lg:mx-auto cursor-default">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse"></span>
                <span>AI-POWERED CREDIT UNDERWRITING ENGINE</span>
              </div>

              {/* Holographic Headline */}
              <h1 className="mt-5 text-[42px] sm:text-[54px] lg:text-[66px] font-black tracking-[-0.04em] leading-[1.05] text-slate-900 dark:text-white animate-fade-up">
                Predict Loan
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500"> Default Risk</span>
                <br />
                <span className="text-slate-800 dark:text-slate-200">With Neural AI.</span>
              </h1>

              <p className="mt-5 max-w-[580px] text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed animate-fade-up max-lg:mx-auto font-normal">
                Analyze borrower credit profiles using an ensemble of calibrated
                machine learning classifiers. Real-time default probability scoring,
                SHAP feature contributions, and automated decision intelligence.
              </p>

              {/* ================= TECH TAGS ROW ================= */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5 max-lg:justify-center animate-fade-up">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium shadow-xs hover:border-amber-400 dark:hover:border-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-all duration-200 cursor-default">
                  <Zap size={13} className="text-amber-500" />
                  <span>50ms Inference</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium shadow-xs hover:border-blue-400 dark:hover:border-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-all duration-200 cursor-default">
                  <Cpu size={13} className="text-blue-600 dark:text-cyan-400" />
                  <span>92.4% ROC-AUC</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium shadow-xs hover:border-purple-400 dark:hover:border-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-200 cursor-default">
                  <Layers size={13} className="text-purple-600 dark:text-purple-400" />
                  <span>17 Feature Vectors</span>
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-mono font-medium shadow-xs hover:border-emerald-400 dark:hover:border-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-all duration-200 cursor-default">
                  <Lock size={13} className="text-emerald-600 dark:text-emerald-400" />
                  <span>Zero Data Leakage</span>
                </span>
              </div>

              {/* ================= HERO BUTTONS ================= */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 animate-fade-up max-lg:justify-center">
                <button
                  className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white cursor-pointer group"
                  onClick={() => navigate("/prediction")}
                >
                  <Sparkles size={17} className="text-blue-100" />
                  <span>Initialize Assessment</span>
                  <ArrowRight size={17} className="arrow-slide-right text-blue-100" />
                </button>

                <button
                  className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold cursor-pointer group"
                  onClick={() => navigate("/model")}
                >
                  <Brain size={17} className="text-indigo-600 dark:text-purple-400" />
                  <span>Explore Model Architecture</span>
                  <ArrowRight size={16} className="arrow-slide-right text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400" />
                </button>
              </div>

              {/* ================= TRUST INDICATORS ================= */}
              <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-semibold text-slate-500 dark:text-slate-400 max-lg:justify-center animate-fade-up">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-200 cursor-default">
                  <ShieldCheck size={17} className="text-blue-600 dark:text-cyan-400" />
                  <span>Ensemble Supervised ML</span>
                </div>

                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 cursor-default">
                  <Zap size={17} className="text-emerald-600 dark:text-emerald-400" />
                  <span>Instant Vector Processing</span>
                </div>

                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 cursor-default">
                  <Database size={17} className="text-indigo-600 dark:text-purple-400" />
                  <span>255K+ Training Benchmark</span>
                </div>
              </div>

            </div>

            {/* ================= RIGHT PREDICTION CARD ================= */}
            <div className="relative flex flex-col items-center justify-center">
              
              {/* ================= RISK CARD ================= */}
              <div className="hover-card relative z-10 w-full max-w-[420px] p-7 sm:p-8 rounded-3xl border shadow-xl">
                
                {/* Header with live telemetry LED */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-blue-600 dark:text-cyan-400 uppercase">
                        NEURAL INFERENCE HUD
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                      Loan Risk Assessment
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-500/30 text-blue-600 dark:text-cyan-400 flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-xs">
                    <TrendingUp size={20} />
                  </div>
                </div>

                {/* ================= SCORE ================= */}
                <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-blue-50/70 via-slate-50 to-indigo-50/50 dark:from-slate-950/90 dark:via-slate-900 dark:to-slate-950/90 border border-blue-100 dark:border-white/10 relative hover:border-blue-200 dark:hover:border-cyan-500/30 transition-all duration-200">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-semibold text-slate-500 dark:text-slate-400 block uppercase">
                        Estimated Default Probability
                      </span>
                      <div className="flex items-baseline text-[56px] font-black leading-none tracking-tight text-slate-900 dark:text-white font-mono mt-1">
                        24.2
                        <span className="text-2xl text-blue-600 dark:text-cyan-400 font-bold ml-1">%</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold font-mono uppercase tracking-wider hover:bg-emerald-100 transition-all duration-200 cursor-default shadow-xs">
                        ● Safe Tier
                      </span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono font-medium mt-1">
                        Risk: Low
                      </span>
                    </div>
                  </div>

                  {/* ================= PROGRESS ================= */}
                  <div className="mt-5">
                    <div className="flex justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 mb-2 font-medium">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold">0% Low Risk</span>
                      <span className="text-amber-600 dark:text-amber-400 font-bold">50% Med</span>
                      <span className="text-red-600 dark:text-red-400 font-bold">100% Critical</span>
                    </div>

                    <div className="w-full h-2.5 rounded-full bg-slate-200/80 dark:bg-slate-800 overflow-hidden p-0.5 border border-slate-300/60 dark:border-white/10">
                      <div className="h-full w-[24.2%] rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-xs"></div>
                    </div>
                  </div>
                </div>

                {/* ================= CONFIDENCE & METRIC ================= */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 flex items-center gap-3 hover:border-purple-300 dark:hover:border-purple-500/40 transition-all duration-200 shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Brain size={17} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block">
                        Confidence
                      </span>
                      <strong className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                        91.8%
                      </strong>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 flex items-center gap-3 hover:border-blue-300 dark:hover:border-cyan-500/40 transition-all duration-200 shadow-xs">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-100 dark:border-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Zap size={17} />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block">
                        Latency
                      </span>
                      <strong className="text-sm font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                        0.042s
                      </strong>
                    </div>
                  </div>
                </div>

                {/* ================= CONSENSUS BADGE ================= */}
                <div className="mt-4 flex items-center justify-between p-3 rounded-xl bg-blue-50/70 dark:bg-slate-950/80 border border-blue-200/80 dark:border-white/10 hover:border-blue-300 dark:hover:border-white/20 transition-all duration-200">
                  <div className="flex items-center gap-2 text-xs font-mono font-medium text-blue-800 dark:text-slate-300">
                    <Sliders size={14} className="text-blue-600 dark:text-cyan-400" />
                    <span>Ensemble Consensus:</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    ✓ Recommended Approval
                  </span>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= STATS / TELEMETRY GRID ================= */}
        <section className="py-10 pb-20 relative z-10">
          <div className="w-[min(1240px,94%)] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            
            {/* 1. Records */}
            <div className="hover-card p-6 rounded-2xl border shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center">
                  <Database size={20} />
                </div>
                <span className="text-[10px] font-mono font-bold text-blue-700 dark:text-cyan-400 px-2 py-0.5 rounded bg-blue-50 dark:bg-cyan-500/10 border border-blue-200 dark:border-cyan-500/20">
                  BIG DATA
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                255K+
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                Historical Loan Records Benchmarked
              </p>
            </div>

            {/* 2. Features */}
            <div className="hover-card p-6 rounded-2xl border shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center">
                  <Brain size={20} />
                </div>
                <span className="text-[10px] font-mono font-bold text-purple-700 dark:text-purple-400 px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20">
                  VECTORS
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                17 Dims
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                Multi-Factor Demographic & Financial Telemetry
              </p>
            </div>

            {/* 3. ML Architecture */}
            <div className="hover-card p-6 rounded-2xl border shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20">
                  ENSEMBLE
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                92.4% AUC
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                High Precision Cross-Validated Scoring
              </p>
            </div>

            {/* 4. Real-time */}
            <div className="hover-card p-6 rounded-2xl border shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20 flex items-center justify-center">
                  <Zap size={20} />
                </div>
                <span className="text-[10px] font-mono font-bold text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20">
                  LIVE API
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                &lt; 50ms
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                Instant Automated Underwriting Pipeline
              </p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
};

export default Home;