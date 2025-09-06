import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  ArrowRight, 
  Home, 
  ChevronRight,
  Keyboard
} from 'lucide-react';

interface NavigationProps {
  className?: string;
  showBreadcrumbs?: boolean;
}

export function Navigation({ className = '', showBreadcrumbs = true }: NavigationProps) {
  const navigate = useNavigate();
  const location = useLocation();

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey) {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          window.history.back();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          window.history.forward();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const canGoBack = window.history.length > 1;
  const canGoForward = window.history.length > 1;

  const getBreadcrumbs = () => {
    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    
    const breadcrumbMap: Record<string, string> = {
      '': 'Home',
      'login': 'Login',
      'student-dashboard': 'Student Dashboard',
      'mentor-dashboard': 'Mentor Dashboard',
      'skills-directory': 'Skills Directory',
      'rankings': 'Rankings',
      'events': 'Events',
      'ai-recommendations': 'AI Recommendations'
    };

    const breadcrumbs = [
      { label: 'Home', path: '/' }
    ];

    let currentPath = '';
    segments.forEach((segment) => {
      currentPath += `/${segment}`;
      breadcrumbs.push({
        label: breadcrumbMap[segment] || segment,
        path: currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className={`flex items-center justify-between ${className}`}>
      {/* Navigation Controls */}
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.history.back()}
          disabled={!canGoBack}
          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.history.forward()}
          disabled={!canGoForward}
          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowRight className="w-4 h-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate('/')}
          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
        >
          <Home className="w-4 h-4" />
        </Button>
      </div>

      {/* Breadcrumbs */}
      {showBreadcrumbs && breadcrumbs.length > 1 && (
        <div className="flex items-center space-x-2 flex-1 mx-4">
          <nav className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.path} className="flex items-center space-x-2">
                {index > 0 && <ChevronRight className="w-3 h-3 text-gray-400" />}
                <button
                  onClick={() => navigate(crumb.path)}
                  className={`hover:text-green-400 transition-colors ${
                    index === breadcrumbs.length - 1
                      ? 'text-green-400 font-medium'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {crumb.label}
                </button>
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Keyboard Shortcut Hint */}
      <Badge className="bg-black/40 backdrop-blur-sm text-white border-white/20 text-xs">
        <Keyboard className="w-3 h-3 mr-1" />
        Alt+←/→
      </Badge>
    </div>
  );
}