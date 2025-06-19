import { Button } from '@/components/ui/button';
import { heroSectionText, heroStats } from '@/app/api/static';
import { Cardsection } from '@/app/components/atom/cardsection';
export default function HeroSection() {
  return (
    <section
      id='home'
      className='bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20'
    >
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-8'>
            <div className='space-y-6'>
              <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'>
                {heroSectionText.heading}
                <span className='block text-blue-600'>
                  {heroSectionText.highlight}
                </span>
                <span className='block'>{heroSectionText.subheading}</span>
              </h1>
              <p className='text-xl text-gray-600 leading-relaxed max-w-lg'>
                {heroSectionText.description}
              </p>
            </div>
            <Button
              size='lg'
              className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors'
            >
              {heroSectionText.button}
            </Button>
            <div className='grid grid-cols-3 gap-8 pt-8'>
              {heroStats.map((stat, idx) => (
                <div className='text-center' key={idx}>
                  <div className='text-3xl font-bold text-blue-600'>
                    {stat.value}
                  </div>
                  <div className='text-gray-600 text-sm'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <Cardsection />
          <div className='flex justify-center lg:justify-end'></div>
        </div>
      </div>
    </section>
  );
}
