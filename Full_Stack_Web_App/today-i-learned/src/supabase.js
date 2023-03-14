
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ukqlugyetshtxoodfhoc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrcWx1Z3lldHNodHhvb2RmaG9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc2MzgxMDcsImV4cCI6MTk5MzIxNDEwN30.E2owPgd3V0wURxkVB6VklqC5dx6nn1b1_o5rhi5r2PU'
const supabase = createClient(supabaseUrl, supabaseKey)

export  default  supabase;