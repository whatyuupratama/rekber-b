import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: 'up' | 'down';
}

export function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  trend,
}: StatsCardProps) {
  return (
    <Card className='bg-white border-blue-100 hover:shadow-md transition-shadow'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium text-gray-600'>
          {title}
        </CardTitle>
        <Icon className='h-4 w-4 text-blue-600' />
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold text-blue-900'>{value}</div>
        <p
          className={`text-xs ${
            trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {change} from last month
        </p>
      </CardContent>
    </Card>
  );
}
