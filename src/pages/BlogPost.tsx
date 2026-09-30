import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSeason } from '../context/SeasonContext';
import { getBlogBySlug, blogPosts } from '../data/blog';
import { Clock, ArrowLeft, Tag, User, Calendar } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();
  const { theme } = useSeason();
  const post = getBlogBySlug(slug || '');

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center pt-24" style={{ background: 'var(--season-bg)' }}>
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4" style={{ color: theme.text }}>Post Not Found</h1>
          <Link to="/blog" className="magnetic-btn" style={{ background: theme.primary }}>Back to Blog</Link>
        </div>
      </main>
    );
  }

  const otherPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <main className="min-h-screen pt-24" style={{ background: 'var(--season-bg)' }}>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container-main max-w-3xl">
            <Link to="/blog" className="flex items-center gap-2 text-white/60 text-sm mb-4 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: theme.primary, color: '#fff' }}>
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-white/60">
                <Clock className="w-3 h-3" />{post.readTime}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl text-white font-light">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-main max-w-3xl py-12">
        {/* Meta */}
        <div className="flex items-center gap-6 mb-8 pb-8 border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
          <div className="flex items-center gap-2 text-sm opacity-60" style={{ color: theme.text }}>
            <User className="w-4 h-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-2 text-sm opacity-60" style={{ color: theme.text }}>
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none" style={{ color: theme.text }}>
          {post.content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <motion.h2
                  key={i}
                  className="font-display text-2xl mt-8 mb-4"
                  style={{ color: theme.text }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {paragraph.replace(/\*\*/g, '')}
                </motion.h2>
              );
            }
            if (paragraph.startsWith('- ') || paragraph.startsWith('1. ')) {
              const items = paragraph.split('\n').filter(Boolean);
              return (
                <ul key={i} className="list-disc list-inside space-y-2 my-4 opacity-70">
                  {items.map((item, j) => (
                    <li key={j}>{item.replace(/^[-\d.]\s*/, '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <motion.p
                key={i}
                className="mb-4 leading-relaxed opacity-70"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.7 }}
                viewport={{ once: true }}
              >
                {paragraph}
              </motion.p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 mt-12 pt-8 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
          <Tag className="w-4 h-4 opacity-30" style={{ color: theme.text }} />
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full text-xs"
              style={{ background: `${theme.primary}10`, color: theme.primary }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Related Posts */}
        {otherPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="font-display text-2xl mb-6" style={{ color: theme.text }}>More Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <Link key={p.id} to={`/blog/${p.slug}`} className="group">
                  <div className="overflow-hidden rounded-xl aspect-[16/10] mb-3">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <h4 className="font-display text-lg group-hover:opacity-70 transition-opacity" style={{ color: theme.text }}>
                    {p.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
