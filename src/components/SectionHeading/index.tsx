// React
import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
}

export default function SectionHeading({
  children }: SectionHeadingProps) {
  return <h1 className="text-3xl underline font-bold text-purple-500 capitalize mb-8 text-center dark:text-yellow-500"
  >{children}</h1>;
}
