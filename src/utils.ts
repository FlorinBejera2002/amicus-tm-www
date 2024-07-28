import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const MAILCHIMP_URL =
  'https://ariseforchrist.us8.list-manage.com/subscribe/post?u=2e2f0dbc155ffea12f7b6621c&amp;id=a1fd3925be&amp;f_id=00a321e3f0'

export const CMS_URL = 'https://cms-backend.ariseforchrist.com'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
