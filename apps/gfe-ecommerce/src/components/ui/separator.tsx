import { cn } from "@/lib/utils"

const Separator = (props: React.ComponentProps<'hr'>) => <hr {...props} className={cn('text-neutral-200 w-full', props.className)} />
const DashedSeparator = (props: React.ComponentProps<'div'>) => <div {...props} className='border border-dashed border-neutral-200' />

export { Separator, DashedSeparator }