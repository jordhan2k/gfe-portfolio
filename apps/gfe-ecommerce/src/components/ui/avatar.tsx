import Image from 'next/image'
import React from 'react'

const getInitials = (value?: string) => {
  if (typeof value !== 'string' || !value.trim().length) return '?';
  return value
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function Avatar({
  username,
  alt,
  ...props
}: React.ComponentProps<typeof Image> & {
  username: string;
}) {
  return props.src
    ? (
      <Image
        alt={alt ?? `${username}'s avatar`}
        width={100}
        height={100}
        className='size-12 rounded-full bg-neutral-200 object-cover'
        {...props}
      />
    )
    : <div className='size-12 rounded-full bg-neutral-200 flex items-center justify-center text-xl font-medium text-neutral-600'>
      {getInitials(username)}
    </div>
}

export { Avatar }