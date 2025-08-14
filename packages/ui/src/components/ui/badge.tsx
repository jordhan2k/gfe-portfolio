import { cn } from '#dep/lib/utils'
import { cva, type VariantProps } from "class-variance-authority";



const badgeVariants = cva(
  'text-sm rounded-full font-normal',
  {
    variants: {
      variant: {
        neutral: 'text-neutral-600 bg-gray-50 border border-neutral-200',
        danger: 'text-red-600 bg-red-50 border border-red-200',
        warning: 'text-amber-700 bg-amber-50 border border-amber-200',
        success: 'text-green-700 bg-green-50 border border-green-200',
        brand: 'text-indigo-700 bg-indigo-50 border border-indigo-200',
      },
      size: {
        sm: 'px-1.5 py-0.5 text-xs',
        md: 'px-2 py-0.5',
        lg: 'px-2.5 py-1'
      }
    },
    defaultVariants: {
      variant: 'neutral',
      size: 'sm'

    }
  }
)


function Badge({
  children,
  className,
  variant,
  size,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>
  & VariantProps<typeof badgeVariants>) {
  return (
    <span
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </span>
  );
}

export { Badge }