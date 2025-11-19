const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-400 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} Wealth Assist. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">YouTube</a>
          <a href="#" className="hover:text-white">Facebook</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
