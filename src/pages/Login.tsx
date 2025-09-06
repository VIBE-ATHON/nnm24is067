import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Palette, 
  Sparkles,
  Code,
  Zap,
  Brain,
  Rocket,
  ArrowLeft,
  Users
} from 'lucide-react';
import { loginThemes, getRandomTheme, getThemeByTime, LoginTheme } from '@/lib/themes';
import { getRandomQuote } from '@/lib/quotes';
import { QuoteCard } from '@/components/QuoteCard';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [currentTheme, setCurrentTheme] = useState<LoginTheme>(getThemeByTime());
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'student' | 'mentor'>('student');
  const [quote, setQuote] = useState(getRandomQuote('learning'));

  useEffect(() => {
    const themeInterval = setInterval(() => {
      setCurrentTheme(getRandomTheme());
    }, 10000);

    const quoteInterval = setInterval(() => {
      setQuote(getRandomQuote());
    }, 15000);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.key === 'ArrowLeft') {
        event.preventDefault();
        navigate('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(themeInterval);
      clearInterval(quoteInterval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userRole', role);
    navigate(role === 'student' ? '/student-dashboard' : '/mentor-dashboard');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userRole', role);
    localStorage.setItem('userName', name);
    navigate(role === 'student' ? '/student-dashboard' : '/mentor-dashboard');
  };

  return (
    <div className={`min-h-screen ${currentTheme.background} ${currentTheme.textColor} relative transition-all duration-1000 ease-in-out`}>
      <div className="absolute top-4 right-4 z-50">
        <Badge className="bg-black/40 backdrop-blur-sm text-white border-white/20">
          <Palette className="w-3 h-3 mr-1" />
          {currentTheme.name}
        </Badge>
      </div>

      <div className="absolute top-4 left-4 z-50">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl w-full">
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                <div className={`p-3 bg-gradient-to-r ${currentTheme.accentColor} rounded-xl`}>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    TalentHub
                  </h1>
                  <p className="text-sm text-gray-300">College Skill Marketplace</p>
                </div>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                Welcome to the Future of{' '}
                <span className={`bg-gradient-to-r ${currentTheme.accentColor} bg-clip-text text-transparent`}>
                  College Talent
                </span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-8">
                Connect with mentors, showcase your skills, and discover opportunities 
                in our innovative marketplace designed for college talents.
              </p>
            </div>

            <QuoteCard 
              quote={quote} 
              variant="featured" 
              className="transform hover:scale-105 transition-all duration-300"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 bg-gradient-to-r ${currentTheme.accentColor} rounded-lg`}>
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm">AI-Powered Matching</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className={`p-2 bg-gradient-to-r ${currentTheme.accentColor} rounded-lg`}>
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm">Skill Rankings</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className={`p-2 bg-gradient-to-r ${currentTheme.accentColor} rounded-lg`}>
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm">Tech Events</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className={`p-2 bg-gradient-to-r ${currentTheme.accentColor} rounded-lg`}>
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm">Peer Learning</span>
              </div>
            </div>
          </div>

          <div className="w-full max-w-md mx-auto">
            <Card className={`${currentTheme.cardStyle} transition-all duration-1000`}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Join TalentHub</CardTitle>
                <CardDescription className="text-gray-400">
                  Sign in to your account or create a new one
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="login" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-2 bg-black/20">
                    <TabsTrigger value="login" className="data-[state=active]:bg-white/20">
                      Sign In
                    </TabsTrigger>
                    <TabsTrigger value="signup" className="data-[state=active]:bg-white/20">
                      Sign Up
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="login">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-300"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">I am a:</Label>
                        <div className="flex space-x-4">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="role"
                              value="student"
                              checked={role === 'student'}
                              onChange={(e) => setRole(e.target.value as 'student' | 'mentor')}
                              className="text-blue-500"
                            />
                            <span className="text-sm">Student</span>
                          </label>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="role"
                              value="mentor"
                              checked={role === 'mentor'}
                              onChange={(e) => setRole(e.target.value as 'student' | 'mentor')}
                              className="text-blue-500"
                            />
                            <span className="text-sm">Mentor</span>
                          </label>
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className={`w-full bg-gradient-to-r ${currentTheme.accentColor} hover:opacity-90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
                      >
                        Sign In
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="signup">
                    <form onSubmit={handleSignup} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="signup-email" className="text-sm font-medium">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="signup-email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="signup-password" className="text-sm font-medium">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="signup-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-300"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-sm font-medium">I am a:</Label>
                        <div className="flex space-x-4">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="signup-role"
                              value="student"
                              checked={role === 'student'}
                              onChange={(e) => setRole(e.target.value as 'student' | 'mentor')}
                              className="text-blue-500"
                            />
                            <span className="text-sm">Student</span>
                          </label>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              name="signup-role"
                              value="mentor"
                              checked={role === 'mentor'}
                              onChange={(e) => setRole(e.target.value as 'student' | 'mentor')}
                              className="text-blue-500"
                            />
                            <span className="text-sm">Mentor</span>
                          </label>
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className={`w-full bg-gradient-to-r ${currentTheme.accentColor} hover:opacity-90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
                      >
                        Create Account
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}