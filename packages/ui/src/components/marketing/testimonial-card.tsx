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
      className={cn("mx-auto bg-white w-[340px] p-6 shadow-sm rounded-lg flex flex-col gap-4", className)}
    // {...props}
    >
      <div className="flex w-full flex-row gap-4">
        <Image
          alt={`${name}'s profile thumbnail`}
          src={avatarUrl}
          height="48"
          width="48"
          loading="lazy"
          className="size-12 rounded-full"
        />
        <div>
          <div className="text-lg text-neutral-900 font-semibold">{name}</div>
          <div className="text-sm text-neutral-600">{username}</div>
        </div>
      </div>

      <blockquote>
        <p className="text-neutral-600 text-base line-clamp-5 text-ellipsis">
          {description}
        </p>
      </blockquote>
    </div>
  )
}

export { TestimonialCard }
