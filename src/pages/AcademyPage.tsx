import { Play, Clock, Award } from 'lucide-react';
import AppShell from '../layout/AppShell';
import { courses } from '../data/mockData';
import { cn } from '../lib/utils';

const AcademyPage = () => {
  const handleContinue = (course: typeof courses[0]) => {
    console.log('Continue course:', course.id);
    // Simulate course continuation
  };

  const getPlatformColor = (platform: string) => {
    const colors = {
      TikTok: 'from-pink-500 to-purple-500',
      Shopee: 'from-orange-500 to-red-500',
      Lazada: 'from-blue-500 to-indigo-500',
      Facebook: 'from-blue-600 to-blue-800',
    };
    return colors[platform as keyof typeof colors] || 'from-gray-500 to-gray-700';
  };

  return (
    <AppShell>
      <div className="container-custom py-8 lg:py-12 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            ReVeo <span className="text-gradient">Academy</span>
          </h1>
          <p className="text-lg text-gray-600">
            Học cách bán hàng hiệu quả trên các nền tảng TMĐT
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl flex items-center justify-center">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
                <p className="text-sm text-gray-600">Khóa học</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">13h</p>
                <p className="text-sm text-gray-600">Tổng thời lượng</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">1</p>
                <p className="text-sm text-gray-600">Hoàn thành</p>
              </div>
            </div>
          </div>
        </div>

        {/* Courses */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Khóa học của bạn</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className={cn(
                  'p-6 bg-gradient-to-r text-white',
                  getPlatformColor(course.platform)
                )}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl">{course.thumbnail}</div>
                    <div>
                      <p className="text-sm opacity-90">{course.platform}</p>
                      <h3 className="text-xl font-bold">{course.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm opacity-90">{course.description}</p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <span>{course.lessons} bài học</span>
                  </div>

                  {/* Progress */}
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Tiến độ</span>
                      <span className="font-semibold text-primary">{course.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-pink-500 transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Action */}
                  <button
                    onClick={() => handleContinue(course)}
                    className={cn(
                      'w-full px-4 py-3 font-semibold rounded-xl transition-all',
                      course.progress === 0
                        ? 'bg-primary text-white hover:shadow-lg hover:shadow-primary/30'
                        : course.progress === 100
                        ? 'bg-green-500 text-white hover:shadow-lg hover:shadow-green-500/30'
                        : 'bg-primary text-white hover:shadow-lg hover:shadow-primary/30'
                    )}
                  >
                    {course.progress === 0 ? 'Bắt đầu học' : course.progress === 100 ? 'Xem lại' : 'Tiếp tục học'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default AcademyPage;
