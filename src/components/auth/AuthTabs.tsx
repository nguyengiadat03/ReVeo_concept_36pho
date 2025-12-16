interface AuthTabsProps {
  activeTab: 'login' | 'signup';
  onTabChange: (tab: 'login' | 'signup') => void;
}

const AuthTabs = ({ activeTab, onTabChange }: AuthTabsProps) => {
  return (
    <div className="flex gap-2 p-1 bg-gray-100 rounded-lg mb-8">
      <button
        onClick={() => onTabChange('login')}
        className={`
          flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300
          ${
            activeTab === 'login'
              ? 'bg-white text-primary shadow-md'
              : 'text-gray-600 hover:text-gray-900'
          }
        `}
        role="tab"
        aria-selected={activeTab === 'login'}
      >
        Đăng nhập
      </button>
      <button
        onClick={() => onTabChange('signup')}
        className={`
          flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300
          ${
            activeTab === 'signup'
              ? 'bg-white text-primary shadow-md'
              : 'text-gray-600 hover:text-gray-900'
          }
        `}
        role="tab"
        aria-selected={activeTab === 'signup'}
      >
        Đăng ký
      </button>
    </div>
  );
};

export default AuthTabs;
