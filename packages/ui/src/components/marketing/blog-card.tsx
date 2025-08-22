import { RiArrowRightLine } from '@remixicon/react';
import { Badge, BadgeProps } from '../ui/badge';
import { Button } from '../ui/button';
import Image from 'next/image';
type BlogCardProps = {
  imgUrl: string;
  badgeProps: BadgeProps;
  title: string;
  description: string;
  onReadMoreClick?: () => void;
}
function BlogCard({
  imgUrl,
  title,
  description,
  badgeProps,
  onReadMoreClick
}: BlogCardProps) {
  return (
    <div className="ui:w-[340px] ui:bg-white ui:rounded-lg ui:overflow-hidden ui:shadow-sm">
      <Image
        className="ui:h-[288px] ui:w-full ui:object-cover ui:block"
        height={288}
        width={340}
        alt="Blog card image"
        loading="lazy"
        src={imgUrl}
      />
      <div className="ui:px-6 ui:py-4 ui:flex ui:flex-col ui:items-start">
        <Badge variant="success" size="md" {...badgeProps} />

        <div className="ui:mt-2">
          <div className="ui:text-lg ui:font-semibold ui:mb-3 ui:text-neutral-900">
            {title}
          </div>
          <p className="ui:text-base ui:font-normal ui:mb-6 ui:text-neutral-600">
            {description}
          </p>
          <Button onClick={onReadMoreClick} variant="link-color">
            Read more <RiArrowRightLine />
          </Button>
        </div>
      </div>
    </div>

  )
}

export { BlogCard };
