import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, orderBy, query, serverTimestamp, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { Star, Send, MessageSquare, Loader2, CheckCircle2 } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  school: string;
  rating: number;
  message: string;
  createdAt: Timestamp | null;
}

const StarPicker: React.FC<{ value: number; onChange: (v: number) => void }> = ({ value, onChange }) => {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="focus:outline-none transition-transform hover:scale-110"
          aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
        >
          <Star
            size={28}
            className="transition-colors"
            fill={(hovered || value) >= star ? '#f59e0b' : 'none'}
            stroke={(hovered || value) >= star ? '#f59e0b' : '#d1d5db'}
            strokeWidth={1.5}
          />
        </button>
      ))}
    </div>
  );
};

const StarDisplay: React.FC<{ rating: number; size?: number }> = ({ rating, size = 16 }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={size}
        fill={rating >= star ? '#f59e0b' : 'none'}
        stroke={rating >= star ? '#f59e0b' : '#d1d5db'}
        strokeWidth={1.5}
      />
    ))}
  </div>
);

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  const initials = review.name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  const colors = [
    'bg-brand-600', 'bg-emerald-600', 'bg-violet-600', 'bg-rose-500',
    'bg-sky-600', 'bg-amber-500', 'bg-teal-600', 'bg-indigo-600',
  ];
  const colorIndex = review.name.charCodeAt(0) % colors.length;

  const timeAgo = (ts: Timestamp | null) => {
    if (!ts) return 'Just now';
    const diff = Date.now() - ts.toMillis();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'Just now';
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    if (days < 30) return `${days}d ago`;
    return ts.toDate().toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <StarDisplay rating={review.rating} />
        <span className="text-xs text-gray-400">{timeAgo(review.createdAt)}</span>
      </div>
      <p className="text-dark-800 text-sm leading-relaxed flex-1">"{review.message}"</p>
      <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
        <div className={`w-9 h-9 rounded-full ${colors[colorIndex]} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
          {initials}
        </div>
        <div>
          <p className="font-semibold text-dark-900 text-sm">{review.name}</p>
          {review.school && <p className="text-xs text-gray-400">{review.school}</p>}
        </div>
      </div>
    </div>
  );
};

const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({ name: '', school: '', rating: 0, message: '' });

  // Subscribe to real-time reviews from Firestore
  useEffect(() => {
    const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snap) => {
      setReviews(
        snap.docs.map((doc) => ({ id: doc.id, ...(doc.data() as Omit<Review, 'id'>) }))
      );
      setLoading(false);
    }, () => setLoading(false));
    return () => unsub();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim()) return setError('Please enter your name.');
    if (form.rating === 0) return setError('Please select a star rating.');
    if (!form.message.trim() || form.message.trim().length < 10)
      return setError('Please write at least 10 characters.');

    setSubmitting(true);
    try {
      await addDoc(collection(db, 'reviews'), {
        name: form.name.trim(),
        school: form.school.trim(),
        rating: form.rating,
        message: form.message.trim(),
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
      setForm({ name: '', school: '', rating: 0, message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const avgRating = reviews.length
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <MessageSquare size={15} /> Student Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-3">
            What Our Students Say
          </h2>
          {avgRating && (
            <div className="flex items-center justify-center gap-2 mt-2">
              <StarDisplay rating={Math.round(Number(avgRating))} size={20} />
              <span className="text-2xl font-bold text-dark-900">{avgRating}</span>
              <span className="text-gray-500 text-sm">/ 5 &nbsp;·&nbsp; {reviews.length} review{reviews.length !== 1 ? 's' : ''}</span>
            </div>
          )}
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Real experiences from students we've worked with. Leave yours below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Review Cards */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="animate-spin text-brand-500" size={36} />
              </div>
            ) : reviews.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <MessageSquare size={48} className="mx-auto mb-3 opacity-30" />
                <p className="font-medium">No reviews yet — be the first!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-h-[620px] overflow-y-auto pr-1 custom-scrollbar">
                {reviews.map((r) => <ReviewCard key={r.id} review={r} />)}
              </div>
            )}
          </div>

          {/* Submit Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sticky top-24">
              <h3 className="text-xl font-bold text-dark-900 mb-1">Leave a Review</h3>
              <p className="text-gray-500 text-sm mb-6">Share your experience with Research Mate</p>

              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-10 text-center">
                  <CheckCircle2 className="text-emerald-500" size={48} />
                  <p className="font-bold text-dark-900 text-lg">Thank you! 🎉</p>
                  <p className="text-gray-500 text-sm">Your review is now live on the site.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Ama Owusu"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-sm"
                      maxLength={60}
                    />
                  </div>

                  {/* School */}
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-1">School / University <span className="text-gray-400 font-normal">(optional)</span></label>
                    <input
                      type="text"
                      value={form.school}
                      onChange={(e) => setForm({ ...form, school: e.target.value })}
                      placeholder="e.g. KNUST, University of Ghana"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-sm"
                      maxLength={80}
                    />
                  </div>

                  {/* Star rating */}
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">Your Rating *</label>
                    <StarPicker value={form.rating} onChange={(v) => setForm({ ...form, rating: v })} />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-1">Your Review *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell others about your experience…"
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-sm resize-none"
                    />
                    <p className="text-xs text-gray-400 text-right mt-1">{form.message.length}/500</p>
                  </div>

                  {error && (
                    <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-brand-600 text-white py-3 rounded-xl font-bold hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <><Loader2 size={18} className="animate-spin" /> Submitting…</>
                    ) : (
                      <><Send size={16} /> Submit Review</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
