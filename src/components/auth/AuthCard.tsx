import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../app/providers/AuthProvider';
import LoginForm from './AuthFormLogin';
import RegisterForm from './AuthFormSignup';
import TogglePanel from './TogglePanel';

const AuthCard = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isLoginMode, setIsLoginMode] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/create');
    }
  }, [isAuthenticated, navigate]);

  const handleToggle = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      {/* Back to Home Button */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-30 flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all group"
      >
        <svg
          className="w-5 h-5 text-gray-700 group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span className="text-sm font-medium text-gray-700">Về trang chủ</span>
      </button>

      {/* Auth Container */}
      <div className="relative w-full max-w-4xl h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Login Form Container */}
        <div
          className={`absolute top-0 w-1/2 h-full transition-all duration-700 ${
            isLoginMode ? 'left-0' : 'left-1/2'
          }`}
        >
          <LoginForm isActive={isLoginMode} />
        </div>

        {/* Register Form Container */}
        <div
          className={`absolute top-0 w-1/2 h-full transition-all duration-700 ${
            isLoginMode ? 'left-1/2' : 'left-0'
          }`}
        >
          <RegisterForm isActive={!isLoginMode} />
        </div>

        {/* Toggle Panel Overlay */}
        <TogglePanel isLoginMode={isLoginMode} onToggle={handleToggle} />
      </div>

      {/* Mobile Warning */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 lg:hidden bg-white px-6 py-3 rounded-full shadow-lg">
        <p className="text-sm text-gray-600">Trải nghiệm tốt nhất trên desktop</p>
      </div>
    </div>
  );
};

export default AuthCard;
