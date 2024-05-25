import { IoReturnDownForwardOutline } from 'react-icons/io5'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/utils'

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
            isDesktop ? 'absolute mt-6 min-w-fit rounded-md shadow-lg ' : ''
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
                ? 'p-3 bg-white/[.4] backdrop-blur-md shadow-md rounded-md'
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
                className="text-black flex items-center gap-2 px-3 py-2 w-fit text-sm hover:bg-gray-100 hover:!no-underline hover:text-gray-900 bg-[#e3ae04] transition-all duration-300 rounded-md no-underline truncate"
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
                className="text-black flex items-center gap-2 px-3 py-2 w-fit text-sm hover:bg-gray-100 hover:!no-underline hover:text-gray-900 bg-[#e3ae04] transition-all duration-300 rounded-md no-underline"
                href={`/${language}/projects/podcast`}
                onClick={handleSubMenuItemClick}
                role="menuitem"
              >
                <IoReturnDownForwardOutline className="size-5" />
                {t('header.project_subPodcast')}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SubMenu
