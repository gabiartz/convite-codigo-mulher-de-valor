import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ygddgjishoqvotpbvubi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnZGRnamlzaG9xdW90cGJ2dWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0OTY3MTEsImV4cCI6MjA5ODA3MjcxMX0.MjER56cSvjHSHJLyzcSQZwgpu2549NJkCmPno2CnHqs'

const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nome, telefone, codigo } = body

    if (!nome || !telefone || !codigo) {
      return NextResponse.json(
        { error: 'Nome, telefone e código são obrigatórios' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('convites_mulher_de_valor')
      .insert([{ nome, telefone, codigo }])
      .select()

    if (error) {
      console.error('Erro ao salvar convite:', error)
      return NextResponse.json(
        { error: 'Erro ao salvar convite', details: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Erro na API:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
