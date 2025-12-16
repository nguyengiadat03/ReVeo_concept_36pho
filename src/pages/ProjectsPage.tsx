import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Grid3x3, List, Play, Copy, Trash2, Clock } from 'lucide-react';
import AppShell from '../layout/AppShell';
import Tabs from '../components/ui/Tabs';
import { projects } from '../data/mockData';
import { cn } from '../lib/utils';

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const tabs = [
    { id: 'all', label: 'Tất cả', count: projects.length },
    { id: 'draft', label: 'Nháp', count: projects.filter(p => p.status === 'draft').length },
    { id: 'review', label: 'Đang xem xét', count: projects.filter(p => p.status === 'review').length },
    { id: 'completed', label: 'Hoàn thành', count: projects.filter(p => p.status === 'completed').length },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.phoName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || project.status === activeTab;
    return matchesSearch && matchesTab;
  });

  const handleOpen = (project: typeof projects[0]) => {
    navigate(`/streets/${project.phoId}?projectId=${project.id}`);
  };

  const handleDuplicate = (project: typeof projects[0]) => {
    console.log('Duplicate project:', project.id);
    // Simulate duplication
  };

  const handleDelete = (project: typeof projects[0]) => {
    console.log('Delete project:', project.id);
    // Simulate deletion
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      draft: 'bg-gray-100 text-gray-700',
      review: 'bg-yellow-100 text-yellow-700',
      completed: 'bg-green-100 text-green-700',
    };
    const labels = {
      draft: 'Nháp',
      review: 'Đang xem xét',
      completed: 'Hoàn thành',
    };
    return (
      <span className={cn('px-2.5 py-1 rounded-full text-xs font-medium', styles[status as keyof typeof styles])}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <AppShell>
      <div className="container-custom py-8 lg:py-12 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Dự án của tôi
            </h1>
            <p className="text-lg text-gray-600 mt-2">
              Quản lý và chỉnh sửa các video của bạn
            </p>
          </div>
          <button
            onClick={() => navigate('/home')}
            className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            + Dự án mới
          </button>
        </div>

        {/* Search & View Toggle */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm dự án..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={cn(
                'p-2 rounded-lg transition-colors',
                viewMode === 'grid' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
              )}
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={cn(
                'p-2 rounded-lg transition-colors',
                viewMode === 'list' ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'
              )}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

        {/* Projects Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-orange-50 to-pink-50 flex items-center justify-center text-6xl">
                  {project.thumbnail}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 mb-1 truncate">{project.name}</h3>
                      <p className="text-sm text-gray-600">{project.phoName}</p>
                    </div>
                    {getStatusBadge(project.status)}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Cập nhật {project.updatedAt.toLocaleDateString('vi-VN')}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2">
                    <button
                      onClick={() => handleOpen(project)}
                      className="flex-1 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all text-sm"
                    >
                      Mở
                    </button>
                    <button
                      onClick={() => handleDuplicate(project)}
                      className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      title="Nhân bản"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(project)}
                      className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                      title="Xóa"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4">
                  {/* Thumbnail */}
                  <div className="w-24 h-16 bg-gradient-to-br from-orange-50 to-pink-50 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                    {project.thumbnail}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1">{project.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{project.phoName}</span>
                      <span>•</span>
                      <span>Cập nhật {project.updatedAt.toLocaleDateString('vi-VN')}</span>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex-shrink-0">
                    {getStatusBadge(project.status)}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => handleOpen(project)}
                      className="px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all text-sm"
                    >
                      Mở
                    </button>
                    <button
                      onClick={() => handleDuplicate(project)}
                      className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      title="Nhân bản"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(project)}
                      className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                      title="Xóa"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 mb-4">Không tìm thấy dự án nào</p>
            <button
              onClick={() => navigate('/home')}
              className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              Tạo dự án mới
            </button>
          </div>
        )}
      </div>
    </AppShell>
  );
};

export default ProjectsPage;
