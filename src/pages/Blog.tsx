import { motion } from 'framer-motion';
import { useSeason } from '../context/SeasonContext';
import { blogPosts } from '../data/blog';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Tag } from 'lucide-react';

export default function Blog() {
  const { theme } = useSeason();

  return (
    <main className="min-h-screen pt-24" style={{ background: 'var(--season-bg)' }}>
      <div className="container-main py-16 md:py-24">
        <motion.h1
          className="font-display text-5xl md:text-7xl text-white font-medium mb-4 tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Travel Journal & Intelligence
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-slate-300 font-light max-w-xl mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Editorial dispatches, insider guides, and seasonal lore curated by our master travel designers.
        </motion.p>

        {/* Featured Post */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link to={`/blog/${blogPosts[0].slug}`} className="grid grid-cols-1 lg:grid-cols-2 gap-8 group glass-panel p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="relative overflow-hidden rounded-2xl aspect-[16/10] border border-white/10">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80';
                }}
              />
              <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
                style={{ background: theme.primary, color: '#03070d' }}
              >
                Featured Dispatch
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/10 bg-white/5"
                  style={{ color: theme.primary }}
                >
                  {blogPosts[0].category}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  {blogPosts[0].readTime}
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-white font-medium mb-3 group-hover:text-slate-200 transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-slate-300 font-light text-base mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:translate-x-1 transition-transform">
                <span>Read Full Article</span> <ArrowRight className="w-4 h-4" style={{ color: theme.primary }} />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="group block glass-panel p-5 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-4 border border-white/10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80';
                    }}
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/10 bg-white/5"
                    style={{ color: theme.primary }}
                  >
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-white font-medium mb-2 group-hover:text-slate-200 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-300 font-light line-clamp-2 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[0.65rem] text-slate-400 flex items-center gap-1 uppercase tracking-wider">
                      <Tag className="w-2.5 h-2.5" style={{ color: theme.primary }} />{tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
