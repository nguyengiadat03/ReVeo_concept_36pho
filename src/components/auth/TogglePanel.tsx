interface TogglePanelProps {
  isLoginMode: boolean;
  onToggle: () => void;
}

const TogglePanel = ({ isLoginMode, onToggle }: TogglePanelProps) => {
  return (
    <div
      className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 z-20 ${
        isLoginMode ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div
        className={`relative w-[200%] h-full transition-transform duration-700 ${
          isLoginMode ? 'translate-x-0' : '-translate-x-1/2'
        }`}
      >
        {/* Left Panel - Sign Up Overlay */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-primary via-orange-600 to-pink-600 text-white flex items-center justify-center px-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Chào mừng trở lại!</h1>
            <p className="mb-8 leading-relaxed">
              Đăng nhập để tiếp tục tạo video AI cho sản phẩm của bạn
            </p>
            <button
              onClick={onToggle}
              className="px-12 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full uppercase tracking-wide hover:bg-white hover:text-primary transition-all"
            >
              Đăng nhập
            </button>
          </div>
        </div>

        {/* Right Panel - Login Overlay */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-primary via-orange-600 to-pink-600 text-white flex items-center justify-center px-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Xin chào!</h1>
            <p className="mb-8 leading-relaxed">
              Tạo tài khoản và bắt đầu hành trình tạo video bán hàng AI
            </p>
            <button
              onClick={onToggle}
              className="px-12 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full uppercase tracking-wide hover:bg-white hover:text-primary transition-all"
            >
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TogglePanel;
