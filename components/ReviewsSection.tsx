"use client";

import { useState, useEffect } from "react";
import { Star, MessageCircle, User, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabase";

type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
};

function Glass({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_8px_32px_-8px_rgba(34,211,238,0.25)] ${className}`}>
      {children}
    </div>
  );
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const { data } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(6);
    
    if (data) setReviews(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    setIsSubmitting(true);
    const { error } = await supabase.from("reviews").insert([{ name, rating, comment }]);
    
    if (!error) {
      setIsOpen(false);
      setName("");
      setComment("");
      setRating(5);
      fetchReviews();
    }
    setIsSubmitting(false);
  };

  return (
    <section className="relative px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-cyan-200 backdrop-blur-md">
            <Star className="h-3 w-3 fill-cyan-400 text-cyan-400" /> Reseñas Reales
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl mb-6">
            Lo que dicen nuestros{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-sky-500 bg-clip-text text-transparent">
              clientes
            </span>
          </h2>
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            Dejar una reseña
          </button>
        </div>

        {reviews.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Glass className="flex h-full flex-col p-6 transition-all hover:border-cyan-400/50">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 ${
                          index < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-slate-700 text-slate-700"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="flex-grow text-sm italic text-slate-300">"{review.comment}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-900/50">
                      <User className="h-4 w-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{review.name}</p>
                      <p className="text-xs text-slate-400">
                        {new Date(review.created_at).toLocaleDateString("es-VE")}
                      </p>
                    </div>
                  </div>
                </Glass>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-slate-400 py-10">
            Aún no hay reseñas. ¡Sé el primero en dejarnos tu opinión!
          </div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm bg-black/60">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/20 bg-slate-900 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
              
              <div className="relative p-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                
                <h3 className="mb-6 text-2xl font-bold text-white">Escribe tu reseña</h3>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">Tu Nombre</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      placeholder="Ej. María Pérez"
                    />
                  </div>
                  
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">Calificación</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            className={`h-8 w-8 ${
                              star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-slate-700 text-slate-700"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">Comentario</label>
                    <textarea
                      required
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows={4}
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                      placeholder="¿Qué tal fue nuestro servicio?"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 w-full rounded-xl bg-cyan-500 px-4 py-3 font-bold text-slate-950 transition-colors hover:bg-cyan-400 disabled:opacity-50"
                  >
                    {isSubmitting ? "Enviando..." : "Publicar Reseña"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
