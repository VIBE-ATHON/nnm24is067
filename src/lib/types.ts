export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'mentor';
  avatar?: string;
  bio: string;
  college: string;
  department: string;
  year?: number; // for students
  position?: string; // for mentors
  specializations: string[];
  createdAt: Date;
}

export interface Skill {
  id: string;
  userId: string;
  title: string;
  category: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  tags: string[];
  workSamples: WorkSample[];
  achievements: Achievement[];
  createdAt: Date;
}

export interface WorkSample {
  id: string;
  title: string;
  description: string;
  url?: string;
  imageUrl?: string;
  type: 'project' | 'certificate' | 'portfolio' | 'other';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: Date;
  type: 'award' | 'competition' | 'certification' | 'recognition';
}

export interface Connection {
  id: string;
  studentId: string;
  mentorId: string;
  skillCategory: string;
  status: 'pending' | 'accepted' | 'declined';
  message: string;
  createdAt: Date;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: Date;
  read: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  type: 'competition' | 'workshop' | 'seminar' | 'hackathon' | 'conference' | 'networking' | 'other';
  category: string;
  organizer: string;
  college: string;
  location: string;
  isOnline: boolean;
  startDate: Date;
  endDate: Date;
  registrationDeadline: Date;
  maxParticipants?: number;
  currentParticipants: number;
  tags: string[];
  requirements: string[];
  prizes?: string[];
  registrationUrl?: string;
  contactEmail: string;
  imageUrl?: string;
  isRegistrationOpen: boolean;
  createdAt: Date;
}

export interface IndustryLeader {
  id: string;
  name: string;
  title: string;
  company: string;
  expertise: string[];
  bio: string;
  achievements: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    website?: string;
    github?: string;
  };
  avatar?: string;
  category: string;
  experience: number; // years of experience
  isVerified: boolean;
  followers?: number;
  matchScore?: number; // AI calculated match score
}

export interface AIRecommendation {
  id: string;
  userId: string;
  skillCategory: string;
  leaders: IndustryLeader[];
  platforms: Platform[];
  learningPaths: LearningPath[];
  matchReason: string;
  confidence: number; // 0-100
  createdAt: Date;
}

export interface Platform {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  type: 'learning' | 'community' | 'portfolio' | 'job' | 'networking';
  tags: string[];
  isPopular: boolean;
  userCount?: number;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  estimatedTime: string; // e.g., "3 months", "6 weeks"
  steps: string[];
  resources: string[];
  outcomes: string[];
}

export const SKILL_CATEGORIES = [
  'Programming',
  'Design',
  'Marketing',
  'Writing',
  'Music',
  'Art',
  'Sports',
  'Leadership',
  'Research',
  'Public Speaking',
  'Photography',
  'Video Editing',
  'Data Analysis',
  'Web Development',
  'Mobile Development',
  'Other'
];

export const EVENT_TYPES = [
  'competition',
  'workshop',
  'seminar',
  'hackathon',
  'conference',
  'networking',
  'other'
];