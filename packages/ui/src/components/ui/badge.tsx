import { cn } from '#dep/lib/utils'
import { cva, type VariantProps } from "class-variance-authority";



const badgeVariants = cva(
  'ui:text-sm ui:rounded-full ui:font-normal',
  {
    variants: {
      variant: {
        neutral: 'ui:text-neutral-600 ui:bg-gray-50 ui:border ui:border-neutral-200',
        danger: 'ui:text-red-600 ui:bg-red-50 ui:border ui:border-red-200',
        warning: 'ui:text-amber-700 ui:bg-amber-50 ui:border ui:border-amber-200',
        success: 'ui:text-green-700 ui:bg-green-50 ui:border ui:border-green-200',
        brand: 'ui:text-indigo-700 ui:bg-indigo-50 ui:border ui:border-indigo-200',
      },
      size: {
        sm: 'ui:px-1.5 ui:py-0.5 ui:text-xs',
        md: 'ui:px-2 ui:py-0.5',
        lg: 'ui:px-2.5 ui:py-1'
      }
    },
    defaultVariants: {
      variant: 'neutral',
      size: 'sm'
    }
  }
)

type BadgeProps = React.HTMLAttributes<HTMLSpanElement>
  & VariantProps<typeof badgeVariants>


function Badge({
  children,
  className,
  variant,
  size,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </span>
  );
}

export { Badge, type BadgeProps }