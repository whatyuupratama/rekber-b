import type React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProcessCardProps {
  title: string;
  description: string;
  illustration: React.ReactNode;
  learnMoreHref?: string;
}

export function ProcessCard({
  title,
  description,
  illustration,
  learnMoreHref = '#',
}: ProcessCardProps) {
  return (
    <Card className='bg-white border border-blue-200 hover:shadow-lg hover:border-blue-300 transition-all duration-200'>
      <CardContent className='p-8 text-center'>
        <div className='mb-6 flex justify-center'>{illustration}</div>

        <h3 className='text-xl font-semibold text-blue-900 mb-4'>{title}</h3>

        <p className='text-blue-700 text-sm leading-relaxed mb-6 max-w-xs mx-auto'>
          {description}
        </p>
        <Button
          variant='link'
          className='text-blue-500 hover:text-blue-600 p-0 h-auto font-normal'
          asChild
        >
          <a href={learnMoreHref}>Learn More</a>
        </Button>
      </CardContent>
    </Card>
  );
}
