'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Clock, Tag } from 'lucide-react'
import { staggerContainer, fadeInUp, scaleIn } from '@/lib/animations'

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications with Next.js 14',
    excerpt: 'Exploring the new App Router and Server Components for building high-performance web apps.',
    category: 'React',
    date: 'Jan 15, 2024',
    readTime: '8 min read',
    gradient: 'from-primary/30 to-secondary/30',
  },
  {
    id: 2,
    title: 'The Future of AI in Web Development',
    excerpt: 'How AI tools are transforming the way we write code and design interfaces.',
    category: 'AI/ML',
    date: 'Jan 8, 2024',
    readTime: '6 min read',
    gradient: 'from-accent/30 to-primary/30',
  },
  {
    id: 3,
    title: 'Mastering TypeScript: Advanced Patterns',
    excerpt: 'Deep dive into TypeScript generics, decorators, and conditional types.',
    category: 'TypeScript',
    date: 'Dec 28, 2023',
    readTime: '10 min read',
    gradient: 'from-secondary/30 to-accent/30',
  },
  {
    id: 4,
    title: 'CSS Architecture at Scale with Tailwind',
    excerpt: 'Best practices for managing Tailwind CSS in large codebases.',
    category: 'CSS',
    date: 'Dec 15, 2023',
    readTime: '5 min read',
    gradient: 'from-neon/20 to-accent/30',
  },
  {
    id: 5,
    title: 'Optimizing Performance in Three.js Applications',
    excerpt: 'Techniques for building smooth 60fps 3D experiences on the web.',
    category: 'Three.js',
    date: 'Dec 1, 2023',
    readTime: '7 min read',
    gradient: 'from-primary/20 to-neon/20',
  },
  {
    id: 6,
    title: 'Modern Authentication with Next.js and JWT',
    excerpt: 'Implementing secure authentication flows in Next.js applications.',
    category: 'Security',
    date: 'Nov 20, 2023',
    readTime: '9 min read',
    gradient: 'from-secondary/30 to-primary/20',
  },
]

const categories = ['All', 'React', 'AI/ML', 'TypeScript', 'CSS', 'Three.js', 'Security']

export default function BlogPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [page, setPage] = useState(1)
  const postsPerPage = 4

  const filtered = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const paginatedPosts = filtered.slice(0, page * postsPerPage)
  const hasMore = paginatedPosts.length < filtered.length

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <h1 className="text-5xl sm:text-6xl font-black mb-4">
              My <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-[#94a3b8] max-w-xl mx-auto">
              Thoughts, tutorials and insights on web development and technology.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 glass rounded-xl text-white placeholder-[#94a3b8] outline-none focus:border-primary transition-colors"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setPage(1) }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-neon-primary'
                    : 'glass text-[#94a3b8] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {paginatedPosts.map((post, i) => (
            <motion.article
              key={post.id}
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden cursor-pointer group hover:border-primary/50 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className={`h-40 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Tag className="w-12 h-12 text-white/20" />
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 glass text-xs rounded-full text-white font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#94a3b8] text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-[#94a3b8]">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-[#94a3b8]">
            <p className="text-lg">No articles found.</p>
          </div>
        )}

        {hasMore && (
          <div className="text-center">
            <button
              onClick={() => setPage(p => p + 1)}
              className="px-8 py-3 glass rounded-xl font-semibold hover:border-primary transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
