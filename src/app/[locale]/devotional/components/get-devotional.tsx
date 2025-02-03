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

function getCurrentWeekNumber(): number {
  const startDate = new Date(new Date().getFullYear(), 0, 1) // 1 ianuarie
  const today = new Date()
  const diff = today.getTime() - startDate.getTime()
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1
  return Math.ceil(dayOfYear / 7 + 1) // Săptămâna curentă
}

async function getDevotional(): Promise<Devotional | null> {
  const filePath = path.join(process.cwd(), 'messages', 'ro-book.json')
  const fileData = fs.readFileSync(filePath, 'utf-8')
  const devotionals: Devotional[] = JSON.parse(fileData)

  const today = new Date()
  let dayIndex = today.getDay() // 0 = Duminică, 1 = Luni, ..., 6 = Sâmbătă

  // Dacă este sâmbătă (6) sau duminică (0), ia devotionalul de vineri (5)
  if (dayIndex === 0 || dayIndex === 6) {
    dayIndex = 5
  }

  const currentDay = daysOfWeek[dayIndex]
  const currentWeekNumber = getCurrentWeekNumber()
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
