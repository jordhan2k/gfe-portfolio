import { cn } from "#dep/lib/utils";
import Image from "next/image";
import React, { type ReactNode } from "react";

type TestimonialCardProps = React.ComponentProps<'div'> & {
  name: string;
  username: string;
  avatarUrl: string;
  description: string;
}
function TestimonialCard({
  name,
  username,
  avatarUrl,
  description,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn("ui:mx-auto ui:bg-white ui:w-[340px] ui:p-6 ui:shadow-sm ui:rounded-lg ui:flex ui:flex-col ui:gap-4", className)}
    >
      <div className="ui:flex ui:w-full ui:flex-row ui:gap-4">
        <Image
          alt={`${name}'s profile thumbnail`}
          src={avatarUrl}
          height="48"
          width="48"
          loading="lazy"
          className="ui:size-12 ui:rounded-full"
        />
        <div>
          <div className="ui:text-lg ui:text-neutral-900 ui:font-semibold">{name}</div>
          <div className="ui:text-sm ui:text-neutral-600">{username}</div>
        </div>
      </div>

      <blockquote>
        <p className="ui:text-neutral-600 ui:text-base ui:line-clamp-5 ui:text-ellipsis">
          {description}
        </p>
      </blockquote>
    </div>
  )
}

export { TestimonialCard, type TestimonialCardProps }
