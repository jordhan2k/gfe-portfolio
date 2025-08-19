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
    <a className={cn("size-9 flex items-center justify-center [&_svg]:text-indigo-700 [&_svg]:size-5 rounded-[0.25rem] hover:bg-neutral-50 focus:bg-neutral-50 focus:outline-none focus:ring-4 focus:ring-indigo-800/20",
      className)} {...props}>
      <Icon />
    </a>
  )
}

export { SocialLink, type SocialLinkProps }
