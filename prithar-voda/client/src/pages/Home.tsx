import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart, Heart, Zap } from 'lucide-react';

/**
 * Prithar Voda Landing Page
 * 
 * Design Philosophy: Bold Maximalist Energy - Cyberpunk Luxury Aesthetic
 * - Deep black backgrounds (#0a0a0a) with hot pink (#ff0055) neon accents
 * - Glassmorphism effects for premium feel
 * - Dynamic animations and glowing borders
 * - Poppins typography for modern, geometric confidence
 * - Asymmetric layouts with diagonal divisions
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [orderModal, setOrderModal] = useState<{ open: boolean; pack?: string }>({ open: false });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleOrder = (packName: string) => {
    setOrderModal({ open: true, pack: packName });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 px-4 md:px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-md border-b border-pink-500/20">
        <div className="flex items-center space-x-2">
          <div className="text-2xl md:text-3xl font-bold">
            <span className="text-pink-500">PRITHAR</span>
            <span className="text-white ml-2">VODA</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <button onClick={() => scrollToSection('features')} className="hover:text-pink-500 transition duration-300">
            Features
          </button>
          <button onClick={() => scrollToSection('test')} className="hover:text-pink-500 transition duration-300">
            Live Test
          </button>
          <button onClick={() => scrollToSection('pricing')} className="hover:text-pink-500 transition duration-300">
            Pricing
          </button>
        </div>

        {/* Desktop CTA Button */}
        <Button
          onClick={() => scrollToSection('pricing')}
          className="hidden md:flex bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-bold btn-glow"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Order Now
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-pink-500/10 rounded-lg transition"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-pink-500/20 z-40 md:hidden">
          <div className="flex flex-col space-y-4 p-6">
            <button onClick={() => scrollToSection('features')} className="text-left hover:text-pink-500 transition">
              Features
            </button>
            <button onClick={() => scrollToSection('test')} className="text-left hover:text-pink-500 transition">
              Live Test
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-left hover:text-pink-500 transition">
              Pricing
            </button>
            <Button
              onClick={() => scrollToSection('pricing')}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-full font-bold btn-glow"
            >
              Order Now
            </Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663063925917/fkAJvTWEEehGpd3FbYnM2c/prithar-hero-main-djPdXdZTmJhKA583uF6tdg.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.6,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black z-1" />

        {/* Content */}
        <div className="container mx-auto px-4 text-center z-10 relative">
          <div className="float-up">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
              <span className="block mb-2">Kinar Age</span>
              <span className="text-pink-500 neon-glow block mb-2">Pritha k Chude</span>
              <span className="block">Check Kore Dekhun!</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Amader condom fate na, eta amra guarantee di. Tai kinar agei trial diye dekhe nin ashol durability!
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
              <Button
                onClick={() => scrollToSection('test')}
                className="bg-white text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-lg btn-glow hover:bg-gray-100"
              >
                Trial Sessions Dekhun
              </Button>
              <Button
                onClick={() => scrollToSection('pricing')}
                className="bg-transparent border-2 border-pink-500 text-pink-500 px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-lg hover:bg-pink-500 hover:text-white transition duration-300"
              >
                Ekhoni Order Korun
              </Button>
            </div>
          </div>

          {/* Animated Shield Icon */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden lg:block animate-bounce">
            <Zap className="w-24 h-24 text-pink-500" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
        {/* Accent Pattern Background */}
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-10"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663063925917/fkAJvTWEEehGpd3FbYnM2c/prithar-accent-pattern-TL5Y9ct9bQAcJm7TaJyCiq.webp)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Keno <span className="text-pink-500">Prithar Voda</span> Shobar Shera?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glassmorphism p-8 rounded-3xl text-center shake-hover transition-all border border-pink-500/30 hover:border-pink-500 group">
              <div className="bg-pink-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-500/40 transition">
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fate Na Kokhono</h3>
              <p className="text-gray-400">Jotoi jore chuden, amader condom phatar kono chance nai. Full safety guarantee!</p>
            </div>

            {/* Feature 2 */}
            <div className="glassmorphism p-8 rounded-3xl text-center shake-hover transition-all border border-pink-500/30 hover:border-pink-500 group">
              <div className="bg-pink-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-500/40 transition">
                <Zap className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ultra Thin Feel</h3>
              <p className="text-gray-400">Monei hobe na kicu poray achen. Skin-to-skin touch er moja paben protibar.</p>
            </div>

            {/* Feature 3 */}
            <div className="glassmorphism p-8 rounded-3xl text-center shake-hover transition-all border border-pink-500/30 hover:border-pink-500 group">
              <div className="bg-pink-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-500/40 transition">
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Extra Lubricated</h3>
              <p className="text-gray-400">Beshi pichil, beshi moja. Pritha k chude dekhe nin koto smooth experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Trial Section */}
      <section id="test" className="py-20 md:py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Live Trial <span className="text-pink-500">Prithar Sathe</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Amra amader product e etoi confident je amra apnader trial sujog dicchi. Amader model Pritha k chude apnar condom check kore nin. Jodi fate, tahole double tk ferot!
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3 text-pink-400">
                  <span className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</span>
                  <span>100% Reality Check</span>
                </li>
                <li className="flex items-center space-x-3 text-pink-400">
                  <span className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</span>
                  <span>Hardcore Testing Facility</span>
                </li>
                <li className="flex items-center space-x-3 text-pink-400">
                  <span className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</span>
                  <span>Discreet & Private Session</span>
                </li>
              </ul>

              <Button
                onClick={() => scrollToSection('pricing')}
                className="bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded-xl font-bold btn-glow text-white"
              >
                Session Book Korun
              </Button>
            </div>

            {/* Right Video Placeholder */}
            <div className="slide-in-right">
              <div className="glassmorphism p-4 rounded-3xl overflow-hidden border-2 border-dashed border-pink-500/30">
                <div className="aspect-video bg-zinc-900 rounded-2xl flex items-center justify-center border-2 border-dashed border-pink-500/30 hover:border-pink-500/60 transition">
                  <div className="text-center">
                    <Zap className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-pulse" />
                    <p className="text-pink-500 font-bold uppercase tracking-widest text-sm">Preview Video: Pritha Testing Condom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Pack</h2>
            <p className="text-gray-400 text-lg">Select the perfect package for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Trial Pack */}
            <div className="glassmorphism p-8 rounded-3xl border border-pink-500/30 hover:border-pink-500 transition-all group">
              <h3 className="text-2xl font-bold mb-2">Trial Pack</h3>
              <div className="text-5xl font-bold mb-6 text-pink-500">৳ ৯৯</div>
              <ul className="text-gray-400 space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-pink-500">•</span>
                  <span>৩ পিস কনডম</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-pink-500">•</span>
                  <span>১ টা ছোট লুব্রিকেন্ট</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-pink-500">•</span>
                  <span>নরমাল ডেলিভারি</span>
                </li>
              </ul>
              <Button
                onClick={() => handleOrder('Trial Pack')}
                className="w-full py-3 rounded-full border border-white/20 hover:bg-white hover:text-black font-bold transition duration-300"
              >
                Order
              </Button>
            </div>

            {/* Pro Pack - Featured */}
            <div className="glassmorphism p-8 rounded-3xl border-2 border-pink-500 scale-105 relative group">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                BEST VALUE
              </span>
              <h3 className="text-2xl font-bold mb-2">Pro Pack</h3>
              <div className="text-5xl font-bold mb-6 text-pink-500">৳ ২৯৯</div>
              <ul className="text-gray-400 space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-pink-500">•</span>
                  <span>১০ পিস মিক্সড ফ্লেভার</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-pink-500">•</span>
                  <span>১ টা বড় লুব্রিকেন্ট</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-pink-500">•</span>
                  <span>ফ্রি ১টি ট্রায়াল সেশন</span>
                </li>
              </ul>
              <Button
                onClick={() => handleOrder('Pro Pack')}
                className="w-full py-3 rounded-full bg-pink-600 hover:bg-pink-700 font-bold btn-glow text-white transition"
              >
                Order Now
              </Button>
            </div>

            {/* Legend Pack */}
            <div className="glassmorphism p-8 rounded-3xl border border-pink-500/30 hover:border-pink-500 transition-all group">
              <h3 className="text-2xl font-bold mb-2">Legend Pack</h3>
              <div className="text-5xl font-bold mb-6 text-pink-500">৳ ৫৯৯</div>
              <ul className="text-gray-400 space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-pink-500">•</span>
                  <span>৩০ পিস আল্ট্রা থিন</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-pink-500">•</span>
                  <span>২ টা লুব্রিকেন্ট + ১ টা ভাইব্রেটর</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-pink-500">•</span>
                  <span>৩ টি ফ্রি ট্রায়াল সেশন</span>
                </li>
              </ul>
              <Button
                onClick={() => handleOrder('Legend Pack')}
                className="w-full py-3 rounded-full border border-white/20 hover:bg-white hover:text-black font-bold transition duration-300"
              >
                Order
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-pink-500/20 text-center text-gray-500 bg-black">
        <p className="mb-4">© 2026 PRITHAR VODA CONDOMS. Shururokhit thakun, moja korun.</p>
        <div className="flex justify-center space-x-6 text-sm flex-wrap gap-4">
          <a href="#" className="hover:text-pink-500 transition">Privacy Policy</a>
          <a href="#" className="hover:text-pink-500 transition">Terms of Test</a>
          <a href="#" className="hover:text-pink-500 transition">Contact Us</a>
        </div>
      </footer>

      {/* Order Modal */}
      {orderModal.open && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <div className="glassmorphism p-8 rounded-3xl max-w-md w-full border-2 border-pink-500 float-up">
            <h2 className="text-3xl font-bold mb-4 text-pink-500">Order Successful!</h2>
            <p className="mb-6 text-gray-300">
              Apni <span className="text-pink-500 font-bold">{orderModal.pack}</span> choose korechen. Prithar sathe test session book korar jonno amader team call korbe.
            </p>
            <Button
              onClick={() => setOrderModal({ open: false })}
              className="w-full py-3 bg-pink-600 hover:bg-pink-700 rounded-xl font-bold text-white btn-glow"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
