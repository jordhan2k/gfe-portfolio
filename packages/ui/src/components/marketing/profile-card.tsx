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
      className="w-[340px] rounded-lg shadow-sm px-4 py-6 bg-white flex flex-col gap-10"
    >
      <div className="flex flex-col gap-6 items-center text-center">
        <Image
          width={64}
          height={64}
          alt="Sarah Dole's profile picture"
          src={avatar}
          className="size-16 rounded-full"
          loading="lazy"
        />
        <div className="flex flex-col gap-1 items-center">
          <div className="text-xl text-neutral-900">{name}</div>
          <div className="text-sm text-neutral-600">
            {subtitle}
          </div>
        </div>
        <p className="text-base font-normal text-neutral-600">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <Button>
          Contact me
        </Button>
        <div className="flex flex-row gap-4 items-center justify-center">
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