import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useAuth } from "../../app/providers/AuthProvider";
import LoginForm from "./AuthFormLogin";
import RegisterForm from "./AuthFormSignup";
import TogglePanel from "./TogglePanel";

const AuthCard = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isLoginMode, setIsLoginMode] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/create");
    }
  }, [isAuthenticated, navigate]);

  const handleToggle = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 z-30 flex items-center gap-2 px-5 py-2.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all group border border-gray-200 dark:border-gray-800"
      >
        <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 hidden sm:inline">
          Về trang chủ
        </span>
      </button>

      {/* Logo Badge */}
      <div className="fixed top-6 right-6 z-30 flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-pink-500 rounded-xl shadow-lg">
        <Sparkles className="w-5 h-5 text-white" />
        <span className="text-sm font-bold text-white hidden sm:inline">
          ReVeo AI
        </span>
      </div>

      {/* Auth Container - Desktop */}
      <div className="hidden lg:block relative w-full max-w-5xl h-[650px] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 animate-slide-up">
        {/* Login Form Container */}
        <div
          className={`absolute top-0 w-1/2 h-full transition-all duration-700 ${
            isLoginMode ? "left-0" : "left-1/2"
          }`}
        >
          <LoginForm isActive={isLoginMode} />
        </div>

        {/* Register Form Container */}
        <div
          className={`absolute top-0 w-1/2 h-full transition-all duration-700 ${
            isLoginMode ? "left-1/2" : "left-0"
          }`}
        >
          <RegisterForm isActive={!isLoginMode} />
        </div>

        {/* Toggle Panel Overlay */}
        <TogglePanel isLoginMode={isLoginMode} onToggle={handleToggle} />
      </div>

      {/* Auth Container - Mobile */}
      <div className="lg:hidden w-full max-w-md animate-slide-up">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
          {/* Mobile Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-800">
            <button
              onClick={() => setIsLoginMode(true)}
              className={`flex-1 py-4 text-center font-semibold transition-all ${
                isLoginMode
                  ? "text-primary border-b-2 border-primary bg-orange-50 dark:bg-orange-900/20"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              Đăng nhập
            </button>
            <button
              onClick={() => setIsLoginMode(false)}
              className={`flex-1 py-4 text-center font-semibold transition-all ${
                !isLoginMode
                  ? "text-primary border-b-2 border-primary bg-orange-50 dark:bg-orange-900/20"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              Đăng ký
            </button>
          </div>

          {/* Mobile Forms */}
          <div className="p-6">
            {isLoginMode ? (
              <LoginForm isActive={true} />
            ) : (
              <RegisterForm isActive={true} />
            )}
          </div>
        </div>

        {/* Mobile Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Trải nghiệm tốt nhất trên desktop
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
