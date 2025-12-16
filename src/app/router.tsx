import { createBrowserRouter, Navigate } from 'react-router-dom';
import { useAuth } from './providers/AuthProvider';
import LandingPage from '../pages/LandingPage';
import AuthPage from '../pages/AuthPage';
import PhoPhuong from '../pages/PhoPhuong';
import DaoPho from '../pages/DaoPho';
import XuongVideo from '../pages/XuongVideo';
import XuongHinhAnh from '../pages/XuongHinhAnh';
import StreetWorkspacePage from '../pages/StreetWorkspacePage';
import TemplatesPage from '../pages/TemplatesPage';
import ProjectsPage from '../pages/ProjectsPage';
import MarketplacePage from '../pages/MarketplacePage';
import AcademyPage from '../pages/AcademyPage';
import CreditsPage from '../pages/CreditsPage';
import SettingsPage from '../pages/SettingsPage';

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  
  return <>{children}</>;
};

// Auth Route Component (redirect to home if already logged in)
const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }
  
  return <>{children}</>;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/auth',
    element: (
      <AuthRoute>
        <AuthPage />
      </AuthRoute>
    ),
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <PhoPhuong />
      </ProtectedRoute>
    ),
  },
  {
    path: '/dao-pho',
    element: (
      <ProtectedRoute>
        <DaoPho />
      </ProtectedRoute>
    ),
  },
  {
    path: '/dao-pho/:phoId',
    element: (
      <ProtectedRoute>
        <DaoPho />
      </ProtectedRoute>
    ),
  },
  {
    path: '/xuong-video',
    element: (
      <ProtectedRoute>
        <XuongVideo />
      </ProtectedRoute>
    ),
  },
  {
    path: '/xuong-hinh-anh',
    element: (
      <ProtectedRoute>
        <XuongHinhAnh />
      </ProtectedRoute>
    ),
  },
  {
    path: '/streets/:streetId',
    element: (
      <ProtectedRoute>
        <StreetWorkspacePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/templates',
    element: (
      <ProtectedRoute>
        <TemplatesPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/projects',
    element: (
      <ProtectedRoute>
        <ProjectsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/marketplace',
    element: (
      <ProtectedRoute>
        <MarketplacePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/academy',
    element: (
      <ProtectedRoute>
        <AcademyPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/credits',
    element: (
      <ProtectedRoute>
        <CreditsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings',
    element: (
      <ProtectedRoute>
        <SettingsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/create',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
