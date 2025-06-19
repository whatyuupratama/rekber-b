import { Card, CardContent } from '@/components/ui/card';
import { works } from '@/app/api/static';
import { ArrowRight } from 'lucide-react';

interface WorkStep {
  title: string;
  desc: string;
  bgClass: string;
  iconClass: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function HowItWorksSection() {
  const steps = works as WorkStep[];

  return (
    <section id='works' className='py-20 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Cara Kerja Rekber
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Proses sederhana dalam 4 langkah untuk transaksi yang aman
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {steps.map((step, idx) => (
            <div className='text-center' key={idx}>
              <Card className='bg-white border-0 shadow-lg rounded-2xl p-8 mb-4 hover:shadow-xl transition-shadow'>
                <CardContent className='p-0'>
                  <div
                    className={`w-16 h-16 ${step.bgClass} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <step.icon className={step.iconClass} />
                  </div>
                  <h3 className='text-lg font-bold text-gray-900 mb-3'>
                    {idx + 1}. {step.title}
                  </h3>
                  <p className='text-gray-600 text-sm'>{step.desc}</p>
                </CardContent>
              </Card>
              {idx < steps.length - 1 && (
                <div className='hidden lg:block'>
                  <ArrowRight className='w-6 h-6 text-gray-400 mx-auto' />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
