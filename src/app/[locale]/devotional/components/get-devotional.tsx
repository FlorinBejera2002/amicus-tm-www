import fs from 'fs'
import path from 'path'
import DailyDevotional from './daily-devotional'
import { useTranslations } from 'next-intl'

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
const daysOfWeekEN = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY'
]
const daysOfWeekRO = [
  'DUMINICĂ',
  'LUNI',
  'MARȚI',
  'MIERCURI',
  'JOI',
  'VINERI',
  'SÂMBĂTĂ'
]


function getCurrentWeekNumber(): number {
  const startDate = new Date(new Date().getFullYear(), 0, 1)
  const today = new Date()

  const firstMonday = new Date(
    startDate.setDate(startDate.getDate() - startDate.getDay() + 1)
  )

  const diffInTime = today.getTime() - firstMonday.getTime()
  const dayOfYear = Math.floor(diffInTime / (1000 * 60 * 60 * 24))

  return Math.ceil((dayOfYear + 1) / 7)
}

    const firstMonday = new Date(
      startDate.setDate(startDate.getDate() - startDate.getDay() + 1)
    )

    const diffInTime = today.getTime() - firstMonday.getTime()
    const dayOfYear = Math.floor(diffInTime / (1000 * 60 * 60 * 24))

    return Math.ceil((dayOfYear + 1) / 7)
  }

  async function getDevotional(): Promise<Devotional | null> {
    const filePath =
      t('daily_verset.language') === 'ro'
        ? path.join(process.cwd(), 'messages', 'ro-book.json')
        : path.join(process.cwd(), 'messages', 'en-book.json')
    const fileData = fs.readFileSync(filePath, 'utf-8')
    const devotionals: Devotional[] = JSON.parse(fileData)

    const today = new Date()
    let dayIndex = today.getDay()

    if (dayIndex === 0 || dayIndex === 6) {
      dayIndex = 5
    }

    const currentDay =
      t('daily_verset.language') === 'ro'
        ? daysOfWeekRO[dayIndex]
        : daysOfWeekEN[dayIndex]
    const currentWeekNumber = getCurrentWeekNumber()
    const currentWeek =
      t('daily_verset.language') === 'ro'
        ? `SĂPTĂMÂNA ${currentWeekNumber}`
        : `WEEK ${currentWeekNumber}`

    return (
      devotionals.find(
        (devotional) =>
          devotional.week === currentWeek && devotional.day === currentDay
      ) || null
    )
  }
  const devotional = await getDevotional()
  return <DailyDevotional devotional={devotional} />
}
