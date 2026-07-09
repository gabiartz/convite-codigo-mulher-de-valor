'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Users, Download, RefreshCw, Crown, Phone, Calendar } from 'lucide-react'

const supabase = createClient(
  'https://ygddgjishoquotpbvubi.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnZGRnamlzaG9xdW90cGJ2dWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0OTY3MTEsImV4cCI6MjA5ODA3MjcxMX0.MjER56cSvjHSHJLyzcSQZwgpu2549NJkCmPno2CnHqs'
)

interface Convite {
  nome: string
  telefone: string
  codigo: string
}

export default function AdminPage() {
  const [convites, setConvites] = useState<Convite[]>([])
  const [loading, setLoading] = useState(true)

  const dourado = '#D9B44C'
  const marinho = '#1a2744'

  const fetchConvites = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('convites_mulher_de_valor')
      .select('*')

    if (error) {
      console.error('Erro ao buscar convites:', error.message, error.code, error.hint)
    } else {
      console.log('Convites encontrados:', data)
      setConvites(data || [])
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchConvites()
  }, [])

  const exportCSV = () => {
    const headers = ['Nome', 'Telefone', 'Código']
    const rows = convites.map(c => [
      c.nome,
      c.telefone,
      c.codigo
    ])

    const csv = [headers, ...rows].map(row => row.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `convites-vip-mulher-de-valor-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F8F9FA' }}>
      {/* Header */}
      <header className="py-6 px-6" style={{ backgroundColor: marinho }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Crown className="w-8 h-8" style={{ color: dourado }} />
            <div>
              <h1 className="text-xl font-bold text-white">Painel de Convites VIP</h1>
              <p className="text-sm text-white/60">O Código da Mulher de Valor</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={fetchConvites}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-white/80 hover:text-white transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Atualizar
            </button>
            <button
              onClick={exportCSV}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: dourado, color: marinho }}
            >
              <Download className="w-4 h-4" />
              Exportar CSV
            </button>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${dourado}20` }}>
                <Users className="w-6 h-6" style={{ color: dourado }} />
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: marinho }}>{convites.length}</p>
                <p className="text-gray-500">Total de Convites</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${dourado}20` }}>
                <Calendar className="w-6 h-6" style={{ color: dourado }} />
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: marinho }}>18/07</p>
                <p className="text-gray-500">Data do Evento</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${dourado}20` }}>
                <Crown className="w-6 h-6" style={{ color: dourado }} />
              </div>
              <div>
                <p className="text-3xl font-bold" style={{ color: marinho }}>VIP</p>
                <p className="text-gray-500">Tipo de Convite</p>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b" style={{ borderColor: '#eee' }}>
            <h2 className="text-lg font-bold" style={{ color: marinho }}>Lista de Convidadas VIP</h2>
          </div>

          {loading ? (
            <div className="p-12 text-center">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4" style={{ color: dourado }} />
              <p className="text-gray-500">Carregando...</p>
            </div>
          ) : convites.length === 0 ? (
            <div className="p-12 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p className="text-gray-500">Nenhum convite registrado ainda</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead style={{ backgroundColor: '#FAFAFA' }}>
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-semibold" style={{ color: marinho }}>#</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold" style={{ color: marinho }}>Nome</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold" style={{ color: marinho }}>Telefone</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold" style={{ color: marinho }}>Código</th>
                  </tr>
                </thead>
                <tbody>
                  {convites.map((convite, index) => (
                    <tr key={convite.codigo} className="border-t hover:bg-gray-50" style={{ borderColor: '#eee' }}>
                      <td className="px-6 py-4 text-gray-500">{index + 1}</td>
                      <td className="px-6 py-4 font-medium" style={{ color: marinho }}>{convite.nome}</td>
                      <td className="px-6 py-4">
                        <a
                          href={`https://wa.me/55${convite.telefone.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-green-600 hover:underline"
                        >
                          <Phone className="w-4 h-4" />
                          {convite.telefone}
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: `${dourado}20`, color: dourado }}>
                          {convite.codigo}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
