import React from 'react'

type SectionHeadingProps = {
  children: React.ReactNode;
}

export default function SectionHeading({
  children }: SectionHeadingProps) {
  return <h1 className="text-3xl font-bold text-purple-500 capitalize mb-8 text-center"
  >{children}</h1>;
}
