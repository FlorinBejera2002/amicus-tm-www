import { type SVGMotionProps, type Transition, motion } from 'framer-motion'

interface Props extends SVGMotionProps<unknown> {
  color?: string
  isOpen?: boolean
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  lineProps?: any
  strokeWidth?: number | string
  transition?: Transition
}

const MenuButton = ({
  color = '#000',
  height = 24,
  isOpen = false,
  lineProps = null,
  strokeWidth = 1,
  transition,
  width = 24,
  ...props
}: Props) => {
  const variant = isOpen ? 'opened' : 'closed'
  const top = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: 45,
      translateY: 2
    }
  }
  const center = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  }
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: -45,
      translateY: -2
    }
  }

  lineProps = {
    animate: variant,
    initial: 'closed',
    stroke: color,
    strokeWidth: strokeWidth as number,
    transition,
    vectorEffect: 'non-scaling-stroke',
    ...lineProps
  }
  const unitHeight = 4
  const unitWidth = (unitHeight * (width as number)) / (height as number)

  return (
    <motion.svg
      height={height}
      overflow="visible"
      preserveAspectRatio="none"
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      width={width}
      {...props}
    >
      <motion.line
        variants={top}
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        {...lineProps}
      />
      <motion.line
        variants={center}
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        {...lineProps}
      />
      <motion.line
        variants={bottom}
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        {...lineProps}
      />
    </motion.svg>
  )
}

export { MenuButton }
