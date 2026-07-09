import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

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
        { error: 'Erro ao salvar convite' },
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
