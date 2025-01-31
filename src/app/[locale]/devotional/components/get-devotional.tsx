import fs from 'fs'
import path from 'path'
import DailyDevotional from './daily-devotional'

interface Verse {
  text: string
  reference: string
}

interface ContentItem {
  paragraph?: string
  list?: { title: string; description: string }[]
}

interface Devotional {
  title: string
  week: string
  day: string
  verse: Verse
  content: ContentItem[]
  reflection_questions: string[]
  conclusion: string
}

const daysOfWeek = [
  'DUMINICĂ',
  'LUNI',
  'MARȚI',
  'MIERCURI',
  'JOI',
  'VINERI',
  'SÂMBĂTĂ'
]

async function getDevotional(): Promise<Devotional | null> {
  const filePath = path.join(process.cwd(), 'messages', 'ro-book.json')
  const fileData = fs.readFileSync(filePath, 'utf-8')
  const devotionals: Devotional[] = JSON.parse(fileData)

  const today = new Date()
  const dayIndex = today.getDay()
  const currentDay = daysOfWeek[dayIndex]
  const currentWeekNumber = Math.ceil(today.getDate() / 7)
  const currentWeek = `SĂPTĂMÂNA ${currentWeekNumber}`

  return (
    devotionals.find(
      (devotional) =>
        devotional.week === currentWeek && devotional.day === currentDay
    ) || null
  )
}

export default async function DevotionalFetcher() {
  const devotional = await getDevotional()

  return <DailyDevotional devotional={devotional} />
}
