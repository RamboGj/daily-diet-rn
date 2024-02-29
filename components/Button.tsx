import { ReactNode } from 'react'
import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  slots: {
    container:
      'py-4 px-6 flex-row rounded-md space-x-3 items-center justify-center',
    text: 'text-sm font-nunitoBold leading-[130%]',
  },
  variants: {
    variant: {
      default: {
        container: 'bg-gray2',
        text: 'text-white',
      },
      ghost: {
        container: 'border border-gray1 bg-transparent',
        text: 'text-gray1',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface ButtonProps
  extends TouchableOpacityProps,
    VariantProps<typeof button> {
  children: ReactNode
}

interface ButtonTextProps extends TextProps, VariantProps<typeof button> {
  children: ReactNode
}

function Button({ children, variant, className, ...rest }: ButtonProps) {
  const { container } = button({ className, variant })

  return (
    <TouchableOpacity activeOpacity={0.8} className={container()} {...rest}>
      {children}
    </TouchableOpacity>
  )
}

function ButtonText({
  children,
  variant,
  className,
  ...rest
}: ButtonTextProps) {
  const { text } = button({ className, variant })

  return (
    <Text className={text()} {...rest}>
      {children}
    </Text>
  )
}

function ButtonIcon({ children }: { children: ReactNode }) {
  return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }
