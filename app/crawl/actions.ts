'use server'

import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server'

export async function invokeCrawl(prevState: any, formData: FormData) {
  const supabase = createClient();

  const { data: auth_user_data , error: error_with_user_auth } = await supabase.auth.getUser()

  if (error_with_user_auth) {
    redirect('/error')
  }

  const { user } = auth_user_data

  if (!user) {
    redirect('/')
  }
  const url = (formData.get('url') as string).trim()

  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Accept', 'application/json')
  
  try {
    const apiUrl = process.env.FASTAPI_URL
    const request = new Request(
      `${apiUrl}/web-crawler/crawl-url-and-index`, {
        headers: headers,
        method: 'POST',
        mode: 'cors',
        body: `{"url": "${url}"}`
      }
    )
    const response = await fetch(request)
    const { task_id } =  await response.json()
    return {
      taskId: task_id,
      message: '',
      success: true,
    } 
  } catch (error) {
    return {
      message: error as string,
      success: false,
      taskId: undefined,
    }
  }
}
