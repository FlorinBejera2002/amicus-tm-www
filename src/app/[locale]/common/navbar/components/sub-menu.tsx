import { cn } from '@/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { IoReturnDownForwardOutline } from 'react-icons/io5'

interface ISubMenu {
  handleSubMenuItemClick: () => void
  isDesktop?: boolean
  language: string
  subMenu: boolean
}

const SubMenu = ({
  handleSubMenuItemClick,
  isDesktop = true,
  language,
  subMenu
}: ISubMenu) => {
  const t = useTranslations()

  return (
    <AnimatePresence>
      {subMenu && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          aria-orientation="vertical"
          className={cn(
            isDesktop
              ? 'absolute mt-6 min-w-fit rounded-md shadow-lg '
              : '-mt-5 ml-20'
          )}
          exit={{ opacity: 0, y: -10 }}
          initial={{ opacity: 0, y: -10 }}
          role="menu"
          transition={{ duration: 0.2 }}
        >
          <div
            className={cn(
              'flex flex-col gap-2',
              isDesktop
                ? 'rounded-md bg-white/[.4] p-3 shadow-md backdrop-blur-md'
                : 'ml-[100px]'
            )}
          >
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                className="flex w-fit items-center gap-2 truncate rounded-md bg-accent px-3 py-2 text-sm text-black no-underline transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 hover:!no-underline"
                href={`/${language}/projects/time-is-now`}
                onClick={handleSubMenuItemClick}
                role="menuitem"
              >
                <IoReturnDownForwardOutline className="size-5" />
                {t('header.project_subProject')}
              </Link>
            </motion.div>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.1, duration: 0.25 }}
            >
              <Link
                className="flex w-fit items-center gap-2 rounded-md bg-accent px-3 py-2 text-sm text-black no-underline transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 hover:!no-underline"
                href={`/${language}/projects/podcast`}
                onClick={handleSubMenuItemClick}
                role="menuitem"
              >
                <IoReturnDownForwardOutline className="size-5" />
                {t('header.project_subPodcast')}
              </Link>
            </motion.div>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.1, duration: 0.25 }}
            >
              <Link
                className="flex w-fit items-center gap-2 rounded-md bg-accent px-3 py-2 text-sm text-black no-underline transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 hover:!no-underline"
                href={`/${language}/projects/book`}
                onClick={handleSubMenuItemClick}
                role="menuitem"
              >
                <IoReturnDownForwardOutline className="size-5" />
                {t('book.book')}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SubMenu
