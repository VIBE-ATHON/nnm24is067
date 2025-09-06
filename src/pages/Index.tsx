import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Award, 
  BookOpen, 
  MessageCircle, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  Code,
  Zap,
  Brain,
  Rocket,
  Target,
  Globe,
  Star,
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Connect with Mentors",
      description: "Find experienced professionals and faculty members who can guide your career journey",
      image: "/images/Mentorship.jpg"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Showcase Your Skills",
      description: "Create detailed skill profiles with projects, certifications, and achievements",
      image: "/assets/images/skills-showcase.svg"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Matching",
      description: "Get personalized recommendations for mentors and opportunities based on your skills",
      image: "/assets/images/talent-discovery.svg"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Skill Rankings",
      description: "Compete with peers and track your progress on leaderboards",
      image: "/assets/images/skills-showcase.svg"
    }
  ];

  const stats = [
    { number: "10K+", label: "Students Connected" },
    { number: "2K+", label: "Expert Mentors" },
    { number: "50+", label: "Skill Categories" },
    { number: "95%", label: "Success Rate" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full animate-bounce delay-500"></div>
      
      {/* Tech Icons */}
      <div className="absolute top-32 right-32 animate-float">
        <Code className="w-12 h-12 text-blue-500/20" />
      </div>
      <div className="absolute bottom-32 left-32 animate-float delay-1000">
        <Zap className="w-10 h-10 text-green-500/20" />
      </div>
      <div className="absolute top-1/2 left-10 animate-float delay-500">
        <Brain className="w-14 h-14 text-purple-500/20" />
      </div>
      <div className="absolute top-1/4 right-10 animate-float delay-1500">
        <Rocket className="w-10 h-10 text-indigo-500/20" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-float delay-2000">
        <Target className="w-8 h-8 text-pink-500/20" />
      </div>
      <div className="absolute top-3/4 right-1/4 animate-float delay-2500">
        <Globe className="w-12 h-12 text-cyan-500/20" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <FloatingElements />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-1 animate-scan"></div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="p-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl shadow-2xl">
              <Users className="w-12 h-12 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                TalentHub
              </h1>
              <p className="text-lg text-gray-300 font-medium">College Skill Marketplace</p>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
              Where College{' '}
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                Talents
              </span>{' '}
              Connect
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The ultimate marketplace for college students to showcase skills, connect with expert mentors, 
              and accelerate their career journey through meaningful connections.
            </p>
          </div>

          {/* Hero Images */}
          <div className="flex justify-center items-center space-x-8 py-8">
            <div className="relative group">
              <img 
                src="/assets/images/skills-showcase.svg" 
                alt="Skills Showcase" 
                className="w-32 h-24 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/placeholder.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-lg"></div>
            </div>
            <div className="relative group">
              <img 
                src="/assets/images/talent-discovery.svg" 
                alt="Talent Discovery" 
                className="w-32 h-24 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/placeholder.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-lg"></div>
            </div>
            <div className="relative group">
              <img 
                src="/images/Mentorship.jpg" 
                alt="Mentorship Network" 
                className="w-32 h-24 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/placeholder.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Join as Student
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate('/login')}
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-white/5 transform hover:scale-105 transition-all duration-300"
            >
              Become a Mentor
              <Users className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 opacity-80">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm">Trusted by 500+ colleges</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-green-400" />
              <span className="text-sm">10K+ successful connections</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-sm">AI-powered matching</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Achievements Feed Preview */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">
              Student{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Achievements
              </span>
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Discover amazing projects, skills, and accomplishments shared by talented students from top universities.
            </p>
            <Button 
              onClick={() => navigate('/achievements')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 font-semibold transform hover:scale-105 transition-all duration-300"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              View All Achievements
            </Button>
          </div>

          {/* Achievement Preview Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Sarah Chen</h4>
                    <p className="text-sm text-gray-300">MIT • 3rd Year</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h5 className="text-lg font-bold text-white mb-2">React Native Food Delivery App</h5>
                <p className="text-gray-300 text-sm mb-3">Full-stack mobile app with real-time tracking and payment integration</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-blue-500/20 text-blue-300 border-0">React Native</Badge>
                  <Badge className="bg-green-500/20 text-green-300 border-0">Node.js</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>127 likes</span>
                  <span>23 comments</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Alex Rodriguez</h4>
                    <p className="text-sm text-gray-300">Stanford • 2nd Year</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h5 className="text-lg font-bold text-white mb-2">AI Model - 95% Accuracy</h5>
                <p className="text-gray-300 text-sm mb-3">Machine learning model for stock price prediction using TensorFlow</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-purple-500/20 text-purple-300 border-0">Python</Badge>
                  <Badge className="bg-orange-500/20 text-orange-300 border-0">TensorFlow</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>89 likes</span>
                  <span>31 comments</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Maya Patel</h4>
                    <p className="text-sm text-gray-300">UC Berkeley • 4th Year</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h5 className="text-lg font-bold text-white mb-2">Mental Health App UI</h5>
                <p className="text-gray-300 text-sm mb-3">Complete UI/UX design focused on accessibility and user wellness</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className="bg-pink-500/20 text-pink-300 border-0">Figma</Badge>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-0">UI Design</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>156 likes</span>
                  <span>42 comments</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">
              Revolutionizing College{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Talent Discovery
              </span>
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform bridges the gap between talented students and experienced mentors, 
              creating opportunities for growth and success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature Cards */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer group ${
                    currentFeature === index ? 'ring-2 ring-blue-500/50 bg-white/10' : ''
                  }`}
                  onClick={() => setCurrentFeature(index)}
                >
                  <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                    <div className={`p-3 rounded-xl mr-4 transition-all duration-300 ${
                      currentFeature === index 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                        : 'bg-white/10 text-gray-300 group-hover:bg-white/20'
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-gray-300 text-base mt-2">
                        {feature.description}
                      </CardDescription>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                      currentFeature === index ? 'rotate-90 text-blue-400' : 'text-gray-400'
                    }`} />
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Feature Showcase */}
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="text-center space-y-6">
                  <div className="relative mx-auto w-80 h-60 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={features[currentFeature].image} 
                      alt={features[currentFeature].title}
                      className="w-full h-full object-cover transition-all duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/placeholder.jpg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    {features[currentFeature].title}
                  </h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {features[currentFeature].description}
                  </p>
                  <Button 
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 font-semibold transform hover:scale-105 transition-all duration-300"
                    onClick={() => navigate('/login')}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h3 className="text-4xl font-bold">
              Ready to Join the{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                TalentHub Community?
              </span>
            </h3>
            <p className="text-xl text-gray-300">
              Whether you are a student looking to showcase your skills or a mentor ready to guide the next generation, 
              TalentHub is your gateway to meaningful connections and career growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => navigate('/login')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Start Your Journey
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 bg-black/40 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">TalentHub</div>
                <div className="text-sm text-gray-400">College Skill Marketplace</div>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 TalentHub. Connecting college talents with opportunities.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}