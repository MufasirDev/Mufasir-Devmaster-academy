import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bkjypyjiffgcaczppqrv.supabase.co'
const supabaseKey = 'sb_publishable_wpnte9fbL1yDmZuhzn7T2A_mcGiT0qO'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)
