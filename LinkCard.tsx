import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, X, Copy, Share2, Check, type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import type { CategoryCardData } from "../types";

interface LinkCardProps {
  data: CategoryCardData;
  index: number;
  key?: string | number;
}

export default function LinkCard({ data, index }: LinkCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const IconComponent = (Icons as any)[data.icon] as LucideIcon || Icons.BookOpen;

  const handleCopy = async (e: React.MouseEvent, url: string, idx: number) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(url);
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const handleShare = async (e: React.MouseEvent, title: string, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (err) {
        console.error("Error sharing", err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      await navigator.clipboard.writeText(url);
      alert("تم نسخ الرابط للمشاركة");
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex flex-col h-full"
      >
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ y: -8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative w-full bg-white rounded-3xl p-6 shadow-sm border-2 border-brand-primary/30 hover:border-brand-primary transition-all duration-300 text-right flex flex-col items-center justify-center gap-4 h-full min-h-[160px]"
        >
          <div className="p-4 rounded-2xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-all duration-300">
            <IconComponent size={32} strokeWidth={2.5} />
          </div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-slate-800 text-center">
            {data.title}
          </h3>
          
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center">
              <ExternalLink size={16} className="text-black" />
            </div>
          </div>
        </motion.button>
      </motion.div>

      {/* Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
              dir="rtl"
            >
              {/* Modal Header */}
              <div className="bg-brand-primary p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-xl bg-black/10 text-black">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-black">
                    {data.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-black/10 rounded-full transition-colors text-black"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 max-h-[70vh] overflow-y-auto">
                {data.description && (
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                    {data.description}
                  </p>
                )}

                <div className="grid gap-3">
                  {data.links.map((link, i) => (
                    <div
                      key={i}
                      className="group/link flex flex-col sm:flex-row items-center gap-2 w-full p-2 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-primary/50 transition-all duration-200"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-between p-2 text-slate-700 hover:text-black font-bold h-full truncate w-full"
                      >
                        <span className="truncate">{link.label}</span>
                        <ExternalLink size={18} className="flex-shrink-0 rtl:rotate-180 opacity-40" />
                      </a>
                      
                      <div className="flex items-center gap-1 bg-white/50 p-1 rounded-xl w-full sm:w-auto justify-end">
                        <button
                          onClick={(e) => handleCopy(e, link.url, i)}
                          className="p-2 rounded-lg hover:bg-brand-primary text-slate-400 hover:text-black transition-colors"
                          title="نسخ الرابط"
                        >
                          {copiedIndex === i ? <Check size={18} className="text-green-600" /> : <Copy size={18} />}
                        </button>
                        <button
                          onClick={(e) => handleShare(e, link.label, link.url)}
                          className="p-2 rounded-lg hover:bg-brand-primary text-slate-400 hover:text-black transition-colors"
                          title="مشاركة"
                        >
                          <Share2 size={18} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
