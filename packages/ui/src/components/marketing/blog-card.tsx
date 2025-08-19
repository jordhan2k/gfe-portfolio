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
    <div className="w-[340px] bg-white rounded-lg overflow-hidden shadow-sm">
      <Image
        className="h-[288px] w-full object-cover block"
        height={288}
        width={340}
        alt="Blog card image"
        loading="lazy"
        src={imgUrl}
      />
      <div className="px-6 py-4 flex flex-col items-start">
        <Badge variant="success" size="md"  {...badgeProps} />

        <div className="mt-2">
          <div className="text-lg font-semibold mb-3 text-neutral-900">
            {title}
          </div>
          <p className="text-base font-normal mb-6 text-neutral-600">
            {description}
          </p>
          <Button onClick={onReadMoreClick} variant={'link-color'}>Read more <RiArrowRightLine /></Button>
        </div>
      </div>
    </div>
  )
}

export { BlogCard };
