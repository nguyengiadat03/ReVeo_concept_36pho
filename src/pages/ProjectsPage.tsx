import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Grid3x3,
  List,
  Play,
  Copy,
  Trash2,
  Clock,
  Plus,
  FolderOpen,
} from "lucide-react";
import AppShell from "../layout/AppShell";
import { PageHeader } from "../components/layout";
import Tabs from "../components/ui/Tabs";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { projects } from "../data/mockData";
import { cn } from "../lib/utils";

const ProjectsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const tabs = [
    { id: "all", label: "Tất cả", count: projects.length },
    {
      id: "draft",
      label: "Nháp",
      count: projects.filter((p) => p.status === "draft").length,
    },
    {
      id: "review",
      label: "Đang xem xét",
      count: projects.filter((p) => p.status === "review").length,
    },
    {
      id: "completed",
      label: "Hoàn thành",
      count: projects.filter((p) => p.status === "completed").length,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.phoName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || project.status === activeTab;
    return matchesSearch && matchesTab;
  });

  const handleOpen = (project: (typeof projects)[0]) => {
    navigate(`/streets/${project.phoId}?projectId=${project.id}`);
  };

  const handleDuplicate = (project: (typeof projects)[0]) => {
    console.log("Duplicate project:", project.id);
    // Simulate duplication
  };

  const handleDelete = (project: (typeof projects)[0]) => {
    console.log("Delete project:", project.id);
    // Simulate deletion
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      draft: "bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300",
      review:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400",
      completed:
        "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
    };
    const labels = {
      draft: "Nháp",
      review: "Đang xem xét",
      completed: "Hoàn thành",
    };
    return (
      <span
        className={cn(
          "px-2.5 py-1 rounded-full text-xs font-medium",
          styles[status as keyof typeof styles]
        )}
      >
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <AppShell>
      <div className="page-container">
        {/* Page Header */}
        <PageHeader
          title="Dự án của tôi"
          description="Quản lý và theo dõi tất cả dự án video"
          actions={
            <Button
              variant="primary"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => navigate("/home")}
            >
              Tạo dự án mới
            </Button>
          }
        />

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between mb-6">
          <Input
            placeholder="Tìm kiếm dự án..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            leftIcon={<Search className="w-4 h-4" />}
            className="w-full sm:max-w-xs"
          />

          <div className="flex items-center gap-2 card p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={cn(
                "p-2 rounded-lg transition-colors",
                viewMode === "grid"
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-800"
              )}
              aria-label="Grid view"
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={cn(
                "p-2 rounded-lg transition-colors",
                viewMode === "list"
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-800"
              )}
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        </div>

        {/* Projects Content */}
        {filteredProjects.length === 0 ? (
          /* Empty State */
          <div className="card p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <FolderOpen className="w-8 h-8 text-gray-400 dark:text-zinc-500" />
            </div>
            <h3 className="heading-sm mb-2">
              {searchQuery ? "Không tìm thấy dự án" : "Chưa có dự án nào"}
            </h3>
            <p className="body-sm mb-6 max-w-sm mx-auto">
              {searchQuery
                ? "Thử tìm kiếm với từ khóa khác hoặc tạo dự án mới"
                : "Tạo dự án đầu tiên để bắt đầu sản xuất video với AI"}
            </p>
            <Button
              variant="primary"
              leftIcon={<Plus className="w-4 h-4" />}
              onClick={() => navigate("/home")}
            >
              Tạo dự án mới
            </Button>
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="card card-hover group overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 flex items-center justify-center text-6xl">
                  {project.thumbnail}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-zinc-100 mb-1 truncate group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-zinc-400">
                        {project.phoName}
                      </p>
                    </div>
                    {getStatusBadge(project.status)}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-zinc-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>
                      Cập nhật {project.updatedAt.toLocaleDateString("vi-VN")}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-100 dark:border-zinc-800">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleOpen(project)}
                      className="flex-1"
                    >
                      Mở dự án
                    </Button>
                    <button
                      onClick={() => handleDuplicate(project)}
                      className="p-2 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
                      title="Nhân bản"
                      aria-label="Duplicate project"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(project)}
                      className="p-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                      title="Xóa"
                      aria-label="Delete project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="card p-4 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4">
                  {/* Thumbnail */}
                  <div className="w-24 h-16 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                    {project.thumbnail}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-zinc-100 mb-1">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-zinc-400">
                      <span>{project.phoName}</span>
                      <span className="text-gray-300 dark:text-zinc-700">
                        •
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        Cập nhật {project.updatedAt.toLocaleDateString("vi-VN")}
                      </span>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="hidden sm:block flex-shrink-0">
                    {getStatusBadge(project.status)}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleOpen(project)}
                      className="hidden sm:flex"
                    >
                      Mở dự án
                    </Button>
                    <button
                      onClick={() => handleOpen(project)}
                      className="sm:hidden p-2 bg-primary text-white rounded-lg"
                      aria-label="Open project"
                    >
                      <Play className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDuplicate(project)}
                      className="p-2 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
                      title="Nhân bản"
                      aria-label="Duplicate project"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(project)}
                      className="p-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                      title="Xóa"
                      aria-label="Delete project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
};

export default ProjectsPage;
