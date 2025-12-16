import { TrendingUp, Video, Coins } from 'lucide-react';
import { useCredits } from '../../app/providers/CreditsProvider';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  trend?: string;
}

const StatCard = ({ icon, label, value, trend }: StatCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-1">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {trend && (
            <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              {trend}
            </p>
          )}
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
    </div>
  );
};

const StatsCards = () => {
  const { credits } = useCredits();

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: 'Phố đã ghé',
      value: '12',
      trend: '+3 tuần này',
    },
    {
      icon: <Video className="w-6 h-6" />,
      label: 'Video đã tạo',
      value: '47',
      trend: '+8 tuần này',
    },
    {
      icon: <Coins className="w-6 h-6" />,
      label: 'Credits còn lại',
      value: credits.toLocaleString(),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsCards;
