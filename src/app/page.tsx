'use client'

import { useState, useEffect } from 'react'
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Heart,
  Target,
  Compass,
  Star,
  CheckCircle,
  ArrowRight,
  Shield,
  Gift,
  Users,
  Coffee,
  BookOpen
} from 'lucide-react'
import Link from 'next/link'

// ============================================================================
// COUNTDOWN HOOK
// ============================================================================

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function useCountdown(targetDate: Date): TimeLeft | null {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    const target = targetDate.getTime()

    const calculateTimeLeft = () => {
      const difference = target - Date.now()
      if (difference <= 0) return null

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return timeLeft
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function CódigoMulherDeValorPage() {
  const eventDate = new Date('2026-07-18T09:00:00')
  const timeLeft = useCountdown(eventDate)

  const checkoutUrl = 'https://pay.kiwify.com.br/knLgii5'

  // Theme colors - Paleta original Adriane Zago
  const dourado = '#D9B44C' // Dourado vibrante
  const marinho = '#1a2744' // Marinho profundo
  const marinhoLight = '#2a3a5c' // Marinho mais claro
  const background = '#FFFFFF' // Branco limpo
  const offWhite = '#F8F9FA' // Off-white suave

  // Video de fundo - mulheres em evento/conferencia presencial
  // Usando video local - coloque seu video em /public/videos/hero-evento.mp4
  const heroVideoUrl = '/videos/hero-evento.mp4'

  return (
    <div className="min-h-screen antialiased" style={{ fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: background }}>

      {/* ================================================================== */}
      {/* HERO SECTION COM VIDEO */}
      {/* ================================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
          {/* Overlay escuro para legibilidade */}
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to bottom, ${marinho}e6 0%, ${marinho}cc 50%, ${marinho}e6 100%)` }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: `1px solid ${dourado}50` }}
          >
            <Sparkles className="w-4 h-4" style={{ color: dourado }} />
            <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: dourado }}>
              Convite Exclusivo
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-[1.1] text-white">
            O Código da{' '}
            <span style={{ color: dourado }}>Mulher de Valor</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl mb-3 sm:mb-4 max-w-3xl mx-auto text-white/80 px-2">
            Uma imersão de transformação emocional para mulheres que buscam{' '}
            <span className="font-medium text-white">clareza, propósito e direção</span>
          </p>

          <p className="text-base sm:text-lg mb-8 sm:mb-10 text-white/60">
            Um mergulho profundo no seu EU interior
          </p>

          {/* Event Info Cards */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2">
            <div
              className="flex items-center justify-center gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <Calendar className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: dourado }} />
              <span className="font-medium text-white text-sm sm:text-base">18 de Julho de 2026</span>
            </div>

            <div
              className="flex items-center justify-center gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <Clock className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: dourado }} />
              <span className="font-medium text-white text-sm sm:text-base">Sábado, das 9h às 19h</span>
            </div>

            <div
              className="flex items-center justify-center gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <MapPin className="w-4 sm:w-5 h-4 sm:h-5" style={{ color: dourado }} />
              <span className="font-medium text-white text-sm sm:text-base">Hotel Wyndham Ibirapuera, SP</span>
            </div>
          </div>

          {/* Countdown */}
          {timeLeft && (
            <div className="mb-8 sm:mb-12">
              <p className="text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 text-white/50">Faltam</p>
              <div className="flex justify-center gap-2 sm:gap-4">
                {[
                  { value: timeLeft.days, label: 'dias' },
                  { value: timeLeft.hours, label: 'horas' },
                  { value: timeLeft.minutes, label: 'min' },
                  { value: timeLeft.seconds, label: 'seg' },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div
                      className="w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center rounded-xl sm:rounded-2xl text-xl sm:text-3xl font-bold mb-1 sm:mb-2 backdrop-blur-sm"
                      style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: dourado, border: `1px solid ${dourado}30` }}
                    >
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-white/50">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link
              href={checkoutUrl}
              className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: dourado,
                color: marinho,
                boxShadow: `0 20px 60px ${dourado}50`,
              }}
            >
              Quero Estar Lá
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <Shield className="w-4 h-4" style={{ color: dourado }} />
              <span>Pagamento 100% Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <Users className="w-4 h-4" style={{ color: dourado }} />
              <span>Vagas Limitadas</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* O QUE TE ESPERA - 4 PILARES */}
      {/* ================================================================== */}
      <section className="relative py-16 sm:py-28 px-4 sm:px-6" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-6 px-4 py-2 rounded-full"
              style={{ backgroundColor: `${dourado}15`, color: dourado }}
            >
              <Sparkles className="w-4 h-4" />
              O que te espera
            </div>
            <h2 className="text-2xl sm:text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: marinho }}>
              Os 4 Pilares da Transformação
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Uma metodologia exclusiva que combina hipnoterapia, neurociência e psicologia positiva
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: 'Autoconsciência',
                description: 'Descubra seus valores e potenciais pessoais que estavam adormecidos',
              },
              {
                icon: Compass,
                title: 'Clareza',
                description: 'Defina os próximos passos concretos para sua jornada de transformação',
              },
              {
                icon: Star,
                title: 'Propósito Real',
                description: 'Reconecte-se com sua missão de vida e desperte seu poder interior',
              },
              {
                icon: Target,
                title: 'Objetivo Definido',
                description: 'Construa uma rota executável para os próximos meses da sua vida',
              },
            ].map((pillar, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2"
                style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.05)' }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${dourado}15` }}
                >
                  <pillar.icon className="w-8 h-8" style={{ color: dourado }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: marinho }}>
                  {pillar.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PARA QUEM E - FUNDO MARINHO */}
      {/* ================================================================== */}
      <section className="relative py-16 sm:py-28 px-4 sm:px-6 overflow-hidden" style={{ backgroundColor: marinho }}>
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-[150px] opacity-20"
            style={{ backgroundColor: dourado }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-6 px-4 py-2 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: dourado, border: `1px solid ${dourado}50` }}
            >
              <Users className="w-4 h-4" />
              Para quem é essa imersão
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Essa experiência é para você que...
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Entrou em uma nova fase da vida e busca fortalecer sua confiança',
              'Saiu de relacionamentos destrutivos e quer se reconstruir',
              'Precisa se reposicionar profissionalmente com clareza',
              'Enfrenta dificuldades em tomar decisões importantes',
              'Busca recuperar sua autoestima e identidade pessoal',
              'Quer sair do piloto automático e viver com intenção',
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${dourado}20` }}
                >
                  <CheckCircle className="w-5 h-5" style={{ color: dourado }} />
                </div>
                <p className="text-lg text-white/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SOBRE A ADRIANE */}
      {/* ================================================================== */}
      <section className="relative py-16 sm:py-28 px-4 sm:px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Foto da Adriane */}
            <div className="relative">
              <img
                src="/images/adriane-zago.jpg"
                alt="Adriane Zago"
                className="w-full max-w-md mx-auto rounded-3xl object-cover aspect-[4/5]"
                style={{
                  boxShadow: `0 40px 80px ${marinho}20`,
                  border: `1px solid ${dourado}20`
                }}
              />

              {/* Badge */}
              <div
                className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-white rounded-2xl p-6"
                style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${dourado}15` }}
                  >
                    <Star className="w-6 h-6" style={{ color: dourado }} />
                  </div>
                  <div>
                    <p className="font-bold" style={{ color: marinho }}>+20 Anos</p>
                    <p className="text-sm text-gray-500">de Experiência</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-6 px-4 py-2 rounded-full"
                style={{ backgroundColor: `${dourado}15`, color: dourado }}
              >
                <Heart className="w-4 h-4" />
                Sua Mentora
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8" style={{ color: marinho }}>
                Adriane Zago
              </h2>

              <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                Especialista em transformação emocional com mais de 20 anos de experiência e formação em{' '}
                <span className="font-medium text-gray-700">hipnose clínica, neurociência, gestão de pessoas e gestão emocional</span>.
              </p>

              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                Sua trajetória inclui uma jornada real de reconstrução pessoal apos enfrentar sindrome do pânico,
                depressão e divórcio. Essa experiência a transformou em uma guia autêntica para mulheres que buscam
                reconexão e empoderamento.
              </p>

              <div className="space-y-4">
                {[
                  'Hipnoterapeuta Clínica Certificada',
                  'Especialista em Neurociência Aplicada',
                  'Gestora de Pessoas e Emoções',
                  'Mentora de Transformação Feminina',
                ].map((credential, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl"
                    style={{ backgroundColor: '#FAFAFA' }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-medium" style={{ color: marinho }}>{credential}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PARTICIPACAO ESPECIAL - GABRIELA ARTZ - FUNDO MARINHO */}
      {/* ================================================================== */}
      <section className="relative py-16 sm:py-28 px-4 sm:px-6 overflow-hidden" style={{ backgroundColor: marinho }}>
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full blur-[180px] opacity-20"
            style={{ backgroundColor: dourado }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-6 px-4 py-2 rounded-full"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: dourado, border: `1px solid ${dourado}50` }}
              >
                <Sparkles className="w-4 h-4" />
                Participação Especial
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 text-white">
                Gabriela Artz
              </h2>

              <p className="text-xl mb-6 leading-relaxed text-white/90">
                Empresária, referência internacional em hipnoterapia, especialista em ansiedade e estrategista de negócios que faturam alto com autenticidade.
              </p>

              <p className="text-lg mb-10 leading-relaxed text-white/70">
                Com sua expertise, Gabriela vai compartilhar insights poderosos sobre como alinhar sua transformação pessoal com resultados extraordinários nos negócios e na vida.
              </p>

              <div className="space-y-4">
                {[
                  'Fundadora da All Exclusive',
                  'Especialista em Ansiedade',
                  'Estrategista de Negócios',
                  'Referência Internacional em Hipnoterapia',
                ].map((credential, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl backdrop-blur-sm"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    <CheckCircle className="w-5 h-5" style={{ color: dourado }} />
                    <span className="font-medium text-white">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Foto Gabriela Artz */}
            <div className="relative order-1 lg:order-2">
              <img
                src="/images/gabriela-artz.jpg"
                alt="Gabriela Artz"
                className="w-full max-w-md mx-auto rounded-3xl object-cover aspect-[4/5]"
                style={{
                  boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
                  border: `2px solid ${dourado}40`
                }}
              />

              {/* Badge */}
              <div
                className="absolute -bottom-6 -left-6 rounded-2xl p-6"
                style={{
                  backgroundColor: dourado,
                  boxShadow: `0 20px 60px ${dourado}40`
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                  >
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Convidada</p>
                    <p className="text-sm text-white/80">Especial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* O QUE ESTA INCLUSO */}
      {/* ================================================================== */}
      <section className="relative py-16 sm:py-28 px-4 sm:px-6" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-6 px-4 py-2 rounded-full"
              style={{ backgroundColor: `${dourado}15`, color: dourado }}
            >
              <Gift className="w-4 h-4" />
              Incluso na imersão
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ color: marinho }}>
              Uma experiência completa
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: 'Material Didático',
                description: 'Apostila completa para práticas escritas e exercícios de reflexão',
              },
              {
                icon: Coffee,
                title: 'Welcome Coffee',
                description: 'Mesa posta especial para recepcioná-la com todo carinho',
              },
              {
                icon: Coffee,
                title: 'Coffee Break',
                description: 'Pausa para networking e conexão com outras participantes',
              },
              {
                icon: Users,
                title: 'Momento Hot Seat',
                description: 'Compartilhamento e aprendizado coletivo em ambiente seguro',
              },
              {
                icon: Heart,
                title: 'Ambiente Acolhedor',
                description: 'Espaço seguro criado com presença e coerência para sua transformação',
              },
              {
                icon: Star,
                title: 'Certificado',
                description: 'Reconhecimento oficial da sua participação na imersão',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${dourado}15` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: dourado }} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: marinho }}>{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* INVESTIMENTO - FUNDO MARINHO */}
      {/* ================================================================== */}
      <section className="relative py-16 sm:py-28 px-4 sm:px-6 overflow-hidden" style={{ backgroundColor: marinho }}>
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] opacity-20"
            style={{ backgroundColor: dourado }}
          />
        </div>

        <div className="relative max-w-xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-6 px-4 py-2 rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: dourado, border: `1px solid ${dourado}50` }}
          >
            <Gift className="w-4 h-4" />
            Investimento
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Invista em Você
          </h2>
          <p className="mb-10 text-white/60">Vagas limitadas para garantir a qualidade da experiência</p>

          {/* Pricing Card */}
          <div
            className="relative rounded-3xl p-10 md:p-12"
            style={{
              backgroundColor: 'white',
              boxShadow: '0 40px 80px rgba(0,0,0,0.08)',
            }}
          >
            {/* Badge */}
            <div
              className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: dourado }}
            >
              Oferta Especial
            </div>

            <div className="mb-8">
              <p className="text-2xl line-through mb-2" style={{ color: `${marinho}50` }}>R$ 697,00</p>
              <p className="text-6xl md:text-7xl font-bold mb-2" style={{ color: dourado }}>
                R$ 397
              </p>
              <p style={{ color: `${marinho}70` }}>à vista no PIX</p>
            </div>

            <div
              className="p-4 rounded-2xl mb-8"
              style={{ backgroundColor: offWhite }}
            >
              <p style={{ color: `${marinho}cc` }}>
                ou <span className="font-bold" style={{ color: marinho }}>10x de R$ 47,04</span> no cartão
              </p>
            </div>

            {/* Security badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm" style={{ color: `${marinho}70` }}>
                <Shield className="w-4 h-4" style={{ color: dourado }} />
                <span>Pagamento Seguro via Kiwify</span>
              </div>
            </div>

            <Link
              href={checkoutUrl}
              className="group w-full inline-flex items-center justify-center gap-3 px-10 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: dourado,
                color: 'white',
                boxShadow: `0 20px 60px ${dourado}50`,
              }}
            >
              Quero Garantir Agora
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* LOCAL */}
      {/* ================================================================== */}
      <section className="relative py-16 sm:py-28 px-4 sm:px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-6 px-4 py-2 rounded-full"
            style={{ backgroundColor: `${dourado}15`, color: dourado }}
          >
            <MapPin className="w-4 h-4" />
            Local do Evento
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8" style={{ color: marinho }}>
            Hotel Wyndham São Paulo Ibirapuera
          </h2>

          <p className="text-xl text-gray-500 mb-8">
            Av. Ibirapuera, 2907 - Moema, São Paulo - SP
          </p>

          {/* Google Maps Embed */}
          <div className="w-full h-80 rounded-3xl mb-8 overflow-hidden" style={{ border: `1px solid ${dourado}20` }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5029046403547!2d-46.66376492376529!3d-23.591973963406896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b8b44b8a7%3A0x8b8b8b8b8b8b8b8b!2sHotel%20Wyndham%20S%C3%A3o%20Paulo%20Ibirapuera!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FAFAFA' }}>
              <Calendar className="w-6 h-6 mx-auto mb-3" style={{ color: dourado }} />
              <p className="font-bold" style={{ color: marinho }}>18 de Julho</p>
              <p className="text-sm text-gray-500">Sábado</p>
            </div>
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FAFAFA' }}>
              <Clock className="w-6 h-6 mx-auto mb-3" style={{ color: dourado }} />
              <p className="font-bold" style={{ color: marinho }}>8h - Credenciamento</p>
              <p className="text-sm text-gray-500">9h - Início</p>
            </div>
            <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FAFAFA' }}>
              <Users className="w-6 h-6 mx-auto mb-3" style={{ color: dourado }} />
              <p className="font-bold" style={{ color: marinho }}>Vagas Limitadas</p>
              <p className="text-sm text-gray-500">Ambiente acolhedor</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FINAL CTA - FUNDO MARINHO */}
      {/* ================================================================== */}
      <section className="relative py-16 sm:py-28 px-4 sm:px-6 overflow-hidden" style={{ backgroundColor: marinho }}>
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full blur-[250px] opacity-20"
            style={{ backgroundColor: dourado }}
          />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Sua transformação começa{' '}
            <span style={{ color: dourado }}>agora</span>
          </h2>

          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/70">
            Não deixe mais um momento importante passar. Reserve sua vaga e dê o primeiro passo
            rumo a uma vida com mais clareza, propósito e direção.
          </p>

          <Link
            href={checkoutUrl}
            className="group inline-flex items-center justify-center gap-3 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: dourado,
              color: marinho,
              boxShadow: `0 20px 60px ${dourado}50`,
            }}
          >
            Quero Participar da Imersão
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <div className="mt-8">
            <a
              href="https://wa.me/5511972780098"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-white/60 hover:text-white transition-colors"
            >
              Dúvidas? Entre em contato pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FOOTER */}
      {/* ================================================================== */}
      <footer className="py-8 px-6 border-t" style={{ backgroundColor: marinho, borderColor: `${dourado}20` }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-white/50">
            O Código da Mulher de Valor - Uma imersão por Adriane Zago
          </p>
          <p className="text-xs mt-2 text-white/30">
            Todos os direitos reservados
          </p>
        </div>
      </footer>

      {/* ================================================================== */}
      {/* WHATSAPP FLOATING BUTTON */}
      {/* ================================================================== */}
      <a
        href="https://wa.me/5511972780098"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Fale conosco pelo WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-7 h-7 sm:w-8 sm:h-8"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}
