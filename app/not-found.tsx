import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
      <h1 className="text-8xl font-black gradient-text">404</h1>
      <p className="text-2xl font-bold">Page Not Found</p>
      <p className="text-[#94a3b8]">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary rounded-xl font-semibold hover:bg-secondary transition-colors"
      >
        Go Home
      </Link>
    </main>
  )
}
