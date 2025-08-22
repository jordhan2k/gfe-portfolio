import Image from "next/image"
import { Button } from "../ui/button"
import { SocialLink, SocialLinkProps } from "../ui/social-link";

type ProfileCardProps = {
  avatar: string;
  name: string;
  subtitle?: string;
  description: string;
  socialLinks: SocialLinkProps[];
}
function ProfileCard({
  avatar,
  description,
  name,
  subtitle,
  socialLinks
}: ProfileCardProps) {
  return (
    <div
      className="ui:w-[340px] ui:rounded-lg ui:shadow-sm ui:px-4 ui:py-6 ui:bg-white ui:flex ui:flex-col ui:gap-10"
    >
      <div className="ui:flex ui:flex-col ui:gap-6 ui:items-center ui:text-center">
        <Image
          width={64}
          height={64}
          alt="Sarah Dole's profile picture"
          src={avatar}
          className="ui:size-16 ui:rounded-full"
          loading="lazy"
        />
        <div className="ui:flex ui:flex-col ui:gap-1 ui:items-center">
          <div className="ui:text-xl ui:text-neutral-900">{name}</div>
          <div className="ui:text-sm ui:text-neutral-600">
            {subtitle}
          </div>
        </div>
        <p className="ui:text-base ui:font-normal ui:text-neutral-600">
          {description}
        </p>
      </div>
      <div className="ui:flex ui:flex-col ui:gap-6">
        <Button>
          Contact me
        </Button>
        <div className="ui:flex ui:flex-row ui:gap-4 ui:items-center ui:justify-center">
          {
            socialLinks?.map((link, index) => (
              <SocialLink key={`${link.type}-${index}`} {...link} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export { ProfileCard }