import { cn } from "#dep/lib/utils"
import { RiFacebookBoxFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTwitterXFill } from "@remixicon/react"

const iconMap = {
  facebook: RiFacebookBoxFill,
  github: RiGithubFill,
  instagram: RiInstagramFill,
  linkedin: RiLinkedinFill,
  twitter: RiTwitterXFill,
} as const


type SocialLinkProps = React.ComponentProps<'a'>
  & {
    type: 'facebook' | 'github' | 'instagram' | 'linkedin' | 'twitter';
  }
function SocialLink({
  type,
  className,
  ...props
}: SocialLinkProps) {
  const Icon = iconMap[type]
  return (
    <a
      className={cn(
        "ui:size-9 ui:flex ui:items-center ui:justify-center ui:[&_svg]:text-indigo-700 ui:[&_svg]:size-5 ui:rounded-[0.25rem] ui:hover:bg-neutral-50 ui:focus:bg-neutral-50 ui:focus:outline-none ui:focus:ring-4 ui:focus:ring-indigo-800/20",
        className
      )}
      {...props}
    >
      <Icon />
    </a>
  )
}

export { SocialLink, type SocialLinkProps }
