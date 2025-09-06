import { ReactNode } from 'react';
import { Navigation } from './Navigation';

interface PageLayoutProps {
  children: ReactNode;
  showNavigation?: boolean;
  showBreadcrumbs?: boolean;
  className?: string;
}

export function PageLayout({ 
  children, 
  showNavigation = true, 
  showBreadcrumbs = true,
  className = '' 
}: PageLayoutProps) {
  return (
    <div className={`min-h-screen ${className}`}>
      {showNavigation && (
        <div className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4 py-3">
            <Navigation showBreadcrumbs={showBreadcrumbs} />
          </div>
        </div>
      )}
      {children}
    </div>
  );
}