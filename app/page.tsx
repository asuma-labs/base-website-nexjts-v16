'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Globe, Sparkles, Rocket, Code2, Layers, Clock, History,
  Smartphone, Star, ArrowRight, Coins, Crown, Check,
  ShieldCheck, MessageSquare, Mail, ChevronDown, Send, Menu
} from 'lucide-react'

export default function HomePage() {
  const currentYear = new Date().getFullYear()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#top' },
    { label: 'Cara Kerja', href: '#how-it-works' },
    { label: 'Fitur', href: '#features' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'Harga', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  const steps = [
    {
      step: '01',
      icon: Globe,
      title: 'Tempel URL Target',
      desc: 'Cukup salin dan tempel alamat URL halaman website yang ingin kamu kloning. Mendukung HTTP/HTTPS untuk landing page, portofolio, hingga dokumentasi.',
      bg: 'border-orange-100 bg-orange-50 dark:border-orange-900/40 dark:bg-orange-950/30',
      iconColor: 'text-orange-500',
    },
    {
      step: '02',
      icon: Layers,
      title: 'Inlining Aset & Render DOM',
      desc: 'Sistem merender DOM target dengan browser headless cloud, lalu mengunduh seluruh stylesheet, skrip, font, dan gambar eksternal jadi satu file mandiri.',
      bg: 'border-blue-100 bg-blue-50 dark:border-blue-900/40 dark:bg-blue-950/30',
      iconColor: 'text-blue-500',
    },
    {
      step: '03',
      icon: Code2,
      title: 'Visual Edit & Ekspor',
      desc: 'Pratinjau interaktif, edit teks langsung di browser, atau buka Visual Editor Monaco untuk pengeditan kode tingkat lanjut.',
      bg: 'border-emerald-100 bg-emerald-50 dark:border-emerald-900/40 dark:bg-emerald-950/30',
      iconColor: 'text-emerald-500',
    },
  ]

  const features = [
    { icon: Code2, title: 'Inlining Aset Otomatis', desc: 'Semua stylesheet, skrip, gambar, dan font eksternal disematkan langsung ke dalam satu file HTML.' },
    { icon: Layers, title: 'Monaco Editor', desc: 'Edit source code hasil kloning secara mendalam pakai engine yang sama dengan VS Code, langsung di browser.' },
    { icon: Sparkles, title: 'Visual Click & Edit', desc: 'Klik elemen teks atau tombol apa pun di pratinjau untuk mengubah isinya tanpa menyentuh baris kode.' },
    { icon: Clock, title: 'Kloning Secepat Kilat', desc: 'Render DOM, inlining aset, dan kompresi HTML rata-rata selesai dalam waktu kurang dari 5 detik.' },
    { icon: History, title: 'Riwayat Kloning Aman', desc: 'Aktivitas kloning tersimpan otomatis di cloud pribadimu, siap diunduh atau diedit kembali kapan saja.' },
    { icon: Smartphone, title: 'Pratinjau Multi-Device', desc: 'Cek hasil kloning secara responsif di resolusi desktop, tablet, maupun mobile secara akurat.' },
  ]

  const testimonials = [
    { name: 'Setyadi Nugroho', role: 'Lead Front-end Developer, Bandung', text: 'Asuma membantu tim kami menduplikasi landing page portofolio klien dengan sangat akurat. Proses inlining aset menghemat waktu coding kami hingga 80%.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Setyadi' },
    { name: 'Rian Hermawan', role: 'Full-stack Developer, Jakarta', text: 'Semua script, stylesheet, dan aset eksternal di-inline otomatis dan rapi, menghasilkan satu file HTML tunggal yang langsung siap dipakai.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rian' },
    { name: 'Amanda Widjaja', role: 'UI/UX Engineer, Surabaya', text: 'Integrasi Monaco Editor bikin penyesuaian CSS hasil kloning jadi gampang. Hasil scraping-nya bersih dari link eksternal yang rusak.', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda' },
  ]

  const pricingPlans = [
    {
      name: '1 Token',
      price: 'Rp 10.000',
      desc: 'Pilihan uji coba hemat untuk kloning instan satu halaman.',
      features: ['1 Kloning Website Sukses', 'Akses Source Code Lengkap', 'Dukungan Aset CSS & JS Inline', 'Aktif Selamanya'],
      highlight: false,
      waText: 'membeli paket 1 Token seharga Rp 10.000',
    },
    {
      name: '10 Token',
      price: 'Rp 85.000',
      desc: 'Lebih hemat untuk proyek kecil, hemat Rp 15.000 dibanding beli satuan.',
      features: ['10 Kloning Website Sukses', 'Akses Source Code Lengkap', 'Dukungan Aset CSS & JS Inline', 'Aktif Selamanya', 'Hemat hingga 15%'],
      highlight: true,
      badge: 'Paling Populer',
      waText: 'membeli paket 10 Token seharga Rp 85.000',
    },
    {
      name: '25 Token',
      price: 'Rp 225.000',
      desc: 'Pilihan populer developer, hemat Rp 25.000 dengan performa tinggi.',
      features: ['25 Kloning Website Sukses', 'Akses Source Code Lengkap', 'Dukungan Aset CSS & JS Inline', 'Lebih hemat & efisien', 'Prioritas Antrean'],
      highlight: false,
      waText: 'membeli paket 25 Token seharga Rp 225.000',
    },
    {
      name: 'VIP Unlimited',
      price: 'Rp 2.500.000',
      desc: 'Akses mutlak tanpa batasan token. Kloning situs web sebanyak apa pun.',
      features: ['Kloning Tanpa Batas', 'Prioritas Pemrosesan Tertinggi', 'Status VIP Badge', 'Akses Fitur Premium Mendatang'],
      highlight: false,
      vip: true,
      badge: 'Akses Utama',
      waText: 'membeli paket VIP Unlimited seharga Rp 2.500.000',
    },
  ]

  const faqs = [
    { q: 'Bagaimana cara kerja Asuma?', a: 'Asuma menggunakan browser headless cloud untuk memuat halaman target secara penuh, mengeksekusi JavaScript, mengunduh seluruh aset eksternal, lalu menyatukannya menjadi satu file HTML mandiri (inline).' },
    { q: 'Apakah file HTML hasil kloning bisa dipakai langsung?', a: 'Bisa. Karena semua aset disematkan inline, file HTML-nya self-contained. Tinggal simpan dan buka di browser mana saja, online maupun offline.' },
    { q: 'Bagaimana sistem token bekerja?', a: 'Setiap kloning yang sukses memotong 1 Token dari saldo akunmu. Kloning yang gagal atau error tidak memotong token.' },
    { q: 'Bagaimana cara mengedit halaman yang sudah dikloning?', a: 'Pakai Visual Editor untuk mengedit teks langsung di pratinjau, atau buka Visual Editor Monaco untuk pengeditan kode tingkat lanjut dengan sinkronisasi pratinjau real-time.' },
    { q: 'Apakah riwayat kloning saya aman?', a: 'Aman. Seluruh riwayat kloning disimpan di database cloud terenkripsi, dan kamu bisa menghapusnya kapan saja secara permanen.' },
  ]

  const waNumber = '6281227856788'
  const waLink = (text: string) => `https://api.whatsapp.com/send/?phone=${waNumber}&text=${encodeURIComponent(`Halo Admin, saya ingin ${text} untuk Asuma. Email akun saya: [Email Anda]`)}&type=phone_number&app_absent=0`

  return (
    <div id="top" className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-white to-emerald-50/40 dark:from-gray-900 dark:via-gray-950 dark:to-emerald-950/20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-200/15 dark:bg-orange-900/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-200/15 dark:bg-emerald-900/8 rounded-full blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <Link href="#top" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-emerald-500 rounded-lg flex items-center justify-center shadow-sm overflow-hidden">
                <Image src="/icons/icon.webp" alt="Asuma" width={32} height={32} className="w-full h-full object-cover" priority unoptimized />
              </div>
              <span className="font-bold text-lg text-gray-900 dark:text-white">Asuma</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="px-3 py-2 rounded-full hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link href="/login" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition">
                Masuk
              </Link>
              <Link href="/register">
                <button className="px-5 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-bold hover:scale-[1.02] transition-transform">
                  Daftar
                </button>
              </Link>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800" aria-label="Buka Menu">
              <Menu className="w-4.5 h-4.5" />
            </button>
          </div>

          {menuOpen && (
            <nav className="lg:hidden mt-4 flex flex-col gap-1 text-sm font-medium text-gray-600 dark:text-gray-300">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main>
        <section className="pt-16 pb-20 sm:pt-24 sm:pb-24">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium">Engine Cloner — Coba Kloning Instan</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="text-gray-900 dark:text-white">Replikasi Halaman </span>
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-500 bg-clip-text text-transparent">Website Secara Instan</span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
              Masukkan tautan target. Sistem kami merender halaman secara mendalam, menyematkan seluruh CSS, JS, dan gambar secara inline, lalu memberikan satu file HTML utuh yang siap pakai.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/register">
                <button className="group px-7 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-bold shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  <Rocket className="w-4.5 h-4.5" />
                  Mulai Kloning Gratis
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a href="#how-it-works" className="px-7 py-3.5 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-900 dark:text-white rounded-full font-bold border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition">
                Pelajari Cara Kerja
              </a>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 scroll-mt-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-14">
              <span className="text-orange-600 dark:text-orange-400 text-sm font-semibold tracking-wide uppercase">Cara Kerja</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">Tiga Langkah Kloning</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mt-3">
                Dari menempelkan tautan hingga mengunduh kode — hanya butuh beberapa detik untuk menduplikasi halaman website secara sempurna.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((item) => (
                <div key={item.step} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border mb-5 ${item.bg}`}>
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Langkah {item.step}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-16 bg-gray-900 dark:bg-gray-950 rounded-3xl mx-4 text-white">
          <div className="container mx-auto px-6 max-w-7xl py-4">
            <div className="text-center mb-12">
              <span className="text-orange-400 text-sm font-semibold tracking-wide uppercase">Fitur Unggulan</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">Kenapa Memilih Kami?</h2>
              <p className="text-gray-400 max-w-xl mx-auto mt-3">
                Semua alat yang kamu butuhkan untuk mereplikasi, memodifikasi, dan mengekspor halaman website secara instan dan mandiri.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.07] transition">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-white/70" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-16 scroll-mt-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <span className="text-orange-600 dark:text-orange-400 text-sm font-semibold tracking-wide uppercase">Testimoni Pengguna</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">Disukai oleh Developer &amp; Designer</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{item.text}&rdquo;</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image src={item.avatar} alt={item.name} width={40} height={40} className="rounded-full border-2 border-white dark:border-gray-700" unoptimized />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">{item.name}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 scroll-mt-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <span className="text-orange-600 dark:text-orange-400 text-sm font-semibold tracking-wide uppercase">Harga Paket</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">Pilih Kekuatan Kloningmu</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mt-3">
                Dapatkan saldo token tambahan atau buka akses VIP tanpa batas untuk mengkloning halaman website apa pun.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col justify-between rounded-2xl border p-6 transition hover:-translate-y-1 ${
                    plan.vip
                      ? 'border-pink-300 dark:border-pink-800 bg-white dark:bg-gray-900'
                      : plan.highlight
                      ? 'border-gray-900 dark:border-white bg-white dark:bg-gray-900 shadow-lg'
                      : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'
                  }`}
                >
                  {plan.badge && (
                    <span className={`absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full text-white shadow-md whitespace-nowrap ${plan.vip ? 'bg-pink-500' : 'bg-gray-900 dark:bg-white dark:text-gray-900'}`}>
                      {plan.vip ? <Crown className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
                      {plan.badge}
                    </span>
                  )}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                      <Coins className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">{plan.price}</div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-5 min-h-[32px]">{plan.desc}</p>
                    <ul className="space-y-2.5 mb-6">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                          <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${plan.vip ? 'text-pink-500' : 'text-emerald-500'}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={waLink(plan.waText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center py-2.5 rounded-full text-xs font-bold transition ${
                      plan.vip
                        ? 'bg-pink-600 text-white hover:bg-pink-500'
                        : plan.highlight
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90'
                        : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    Beli {plan.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 sm:p-6 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 rounded-2xl flex items-start gap-4 max-w-3xl mx-auto">
              <div className="p-2 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Cara Melakukan Transaksi</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Setelah klik tombol pembelian, kamu akan diarahkan ke WhatsApp Admin. Setelah pembayaran selesai, Admin akan membagikan kode token unik untuk kamu inputkan di halaman Home.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16 scroll-mt-20 bg-gray-50/60 dark:bg-gray-900/30 rounded-3xl mx-4">
          <div className="container mx-auto px-6 max-w-3xl py-4">
            <div className="text-center mb-10">
              <span className="text-orange-600 dark:text-orange-400 text-sm font-semibold tracking-wide uppercase">FAQ</span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">Pertanyaan Umum</h2>
            </div>

            <div className="flex flex-col gap-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-5 py-4 flex justify-between items-center gap-4"
                  >
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{faq.q}</span>
                    <ChevronDown className={`w-4.5 h-4.5 text-gray-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <p className="px-5 pb-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 scroll-mt-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-orange-600 dark:text-orange-400 text-sm font-semibold tracking-wide uppercase">Hubungi Kami</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mt-2">Tim Dukungan Asuma</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mt-3">
                Punya kendala teknis, pertanyaan seputar kemitraan, atau transaksi pembelian token? Kami siap membantu.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                  <div className="p-2.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">WhatsApp Admin</h4>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">+62 812-2785-6788</p>
                    <p className="text-[11px] text-gray-400">Respon cepat dalam hitungan menit</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                  <div className="p-2.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Hubungan</h4>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">support@asuma.my.id</p>
                    <p className="text-[11px] text-gray-400">Tanggapan resmi dalam 24 jam</p>
                  </div>
                </div>
              </div>

              <form className="md:col-span-3 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Nama Lengkap" className="w-full h-11 text-sm px-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-gray-400" />
                  <input type="email" placeholder="you@example.com" className="w-full h-11 text-sm px-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-gray-400" />
                </div>
                <input type="text" placeholder="Subjek" className="w-full h-11 text-sm px-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-gray-400" />
                <textarea placeholder="Tuliskan pertanyaanmu di sini..." rows={5} className="w-full text-sm p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-gray-400 resize-none" />
                <button type="submit" className="w-full h-11 text-sm bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Kirim Pesan via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-emerald-500 rounded-lg flex items-center justify-center overflow-hidden">
                <Image src="/icons/icon.webp" alt="Asuma" width={32} height={32} className="w-full h-full object-cover" unoptimized />
              </div>
              <span className="font-bold text-gray-900 dark:text-white">Asuma</span>
              <span className="text-gray-400 text-sm">© {currentYear}</span>
            </div>

            <div className="flex gap-6 text-sm">
              <Link href="/terms" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Syarat &amp; Ketentuan</Link>
              <Link href="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Kebijakan Privasi</Link>
              <a href="#contact" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Hubungi Kami</a>
            </div>

            <div className="text-gray-400 text-xs flex items-center gap-1">
              <Globe className="w-3 h-3" /> Powered by Asuma
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
