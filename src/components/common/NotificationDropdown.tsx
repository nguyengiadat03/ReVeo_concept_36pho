import { useState, useRef, useEffect } from 'react';
import { Bell, Check, Trash2, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'success' | 'warning' | 'error';
}

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Video đã tạo thành công',
      message: 'Video "Áo thun nam basic" đã được tạo và sẵn sàng sử dụng',
      time: '5 phút trước',
      read: false,
      type: 'success',
    },
    {
      id: '2',
      title: 'Credits sắp hết',
      message: 'Bạn còn 150 credits. Nạp thêm để tiếp tục tạo video',
      time: '1 giờ trước',
      read: false,
      type: 'warning',
    },
    {
      id: '3',
      title: 'Template mới đã có',
      message: '5 template mới cho Shopee vừa được thêm vào thư viện',
      time: '3 giờ trước',
      read: true,
      type: 'info',
    },
    {
      id: '4',
      title: 'Khóa học mới',
      message: 'Khóa học "Bán hàng hiệu quả trên TikTok Shop" đã sẵn sàng',
      time: 'Hôm qua',
      read: true,
      type: 'info',
    },
  ]);

  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const unreadCount = notifications.filter(n => !n.read).length;

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Notification Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
        aria-label="Notifications"
      >
        <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 min-w-[18px] h-[18px] bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center px-1">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 z-50 overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100">Thông báo</h3>
              {unreadCount > 0 && (
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                  {unreadCount} thông báo chưa đọc
                </p>
              )}
            </div>
            <div className="flex items-center gap-2">
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-xs text-primary hover:text-primary/80 font-medium"
                >
                  Đánh dấu đã đọc
                </button>
              )}
              <button
                onClick={() => navigate('/settings')}
                className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                title="Cài đặt thông báo"
              >
                <Settings className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>

          {/* Notifications List */}
          <div className="max-h-[400px] overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center">
                <Bell className="w-12 h-12 text-gray-300 dark:text-gray-700 mx-auto mb-3" />
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Không có thông báo nào
                </p>
              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    'p-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group',
                    !notification.read && 'bg-blue-50/50 dark:bg-blue-900/10'
                  )}
                >
                  <div className="flex items-start gap-3">
                    {/* Type Indicator */}
                    <div className={cn(
                      'w-2 h-2 rounded-full mt-2 flex-shrink-0',
                      !notification.read ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'
                    )} />

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className={cn(
                          'text-sm font-semibold',
                          !notification.read 
                            ? 'text-gray-900 dark:text-gray-100' 
                            : 'text-gray-700 dark:text-gray-300'
                        )}>
                          {notification.title}
                        </h4>
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-all"
                          title="Xóa"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-500">
                          {notification.time}
                        </span>
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="text-xs text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                          >
                            <Check className="w-3 h-3" />
                            Đánh dấu đã đọc
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <div className="p-3 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
              <button
                onClick={() => {
                  setIsOpen(false);
                  // Navigate to notifications page if you have one
                }}
                className="w-full text-sm text-primary hover:text-primary/80 font-medium text-center py-1"
              >
                Xem tất cả thông báo
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
