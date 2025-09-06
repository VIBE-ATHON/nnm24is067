import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import MentorDashboard from './pages/MentorDashboard';
import SkillsDirectory from './pages/SkillsDirectory';
import Rankings from './pages/Rankings';
import Events from './pages/Events';
import AIRecommendations from './pages/AIRecommendations';
import AchievementsFeedPage from './pages/AchievementsFeedPage';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/mentor-dashboard" element={<MentorDashboard />} />
          <Route path="/mentor-discover" element={<SkillsDirectory />} />
          <Route path="/mentor-connections" element={<StudentDashboard />} />
          <Route path="/mentor-messages" element={<StudentDashboard />} />
          <Route path="/mentor-calendar" element={<Events />} />
          <Route path="/mentor-progress" element={<Rankings />} />
          <Route path="/skills-directory" element={<SkillsDirectory />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/events" element={<Events />} />
          <Route path="/ai-recommendations" element={<AIRecommendations />} />
          <Route path="/achievements" element={<AchievementsFeedPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;