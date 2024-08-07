'use server'

import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server'


export async function invokeQuery(prevState: any, formData: FormData) {
  const supabase = createClient();

  const { data: auth_user_data , error: error_with_user_auth } = await supabase.auth.getUser()
  
  if (error_with_user_auth) {
    redirect('/error')
  }

  const { user } = auth_user_data

  if (!user) {
    redirect('/')
  }
  
  const message  = (formData.get('message') as string).trim()

  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Accept', 'application/json')
 
  try {
    const apiUrl = process.env.FASTAPI_URL

    const request = new Request(
      `${apiUrl}/llm/query-pinecone-index`, {
        headers: headers,
        method: 'POST',
        mode: 'cors',
        body: `{"question": "${message}"}`
      }
    )

    const response = await fetch(request)
    const { answer } =  await response.json()
    return answer
  } catch (error) {
    // TODO 
  }
}