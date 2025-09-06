export interface LoginTheme {
  id: string;
  name: string;
  background: string;
  cardStyle: string;
  accentColor: string;
  textColor: string;
  description: string;
}

export const loginThemes: LoginTheme[] = [
  {
    id: 'cyber-neon',
    name: 'Cyber Neon',
    background: 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900',
    cardStyle: 'bg-black/40 backdrop-blur-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20',
    accentColor: 'from-purple-500 to-pink-500',
    textColor: 'text-white',
    description: 'Futuristic cyberpunk aesthetic with neon accents'
  },
  {
    id: 'matrix-green',
    name: 'Matrix Code',
    background: 'bg-gradient-to-br from-black via-green-900/20 to-black',
    cardStyle: 'bg-black/60 backdrop-blur-xl border border-green-400/30 shadow-2xl shadow-green-400/20',
    accentColor: 'from-green-400 to-emerald-500',
    textColor: 'text-green-100',
    description: 'Matrix-inspired digital rain theme'
  },
  {
    id: 'ocean-tech',
    name: 'Ocean Tech',
    background: 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900',
    cardStyle: 'bg-slate-800/40 backdrop-blur-xl border border-blue-400/30 shadow-2xl shadow-blue-400/20',
    accentColor: 'from-blue-400 to-cyan-500',
    textColor: 'text-blue-100',
    description: 'Deep ocean technology with flowing gradients'
  },
  {
    id: 'sunset-code',
    name: 'Sunset Code',
    background: 'bg-gradient-to-br from-orange-900 via-red-900 to-pink-900',
    cardStyle: 'bg-black/40 backdrop-blur-xl border border-orange-400/30 shadow-2xl shadow-orange-400/20',
    accentColor: 'from-orange-400 to-red-500',
    textColor: 'text-orange-100',
    description: 'Warm sunset colors with tech elements'
  },
  {
    id: 'aurora-tech',
    name: 'Aurora Tech',
    background: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900',
    cardStyle: 'bg-black/30 backdrop-blur-xl border border-indigo-400/30 shadow-2xl shadow-indigo-400/20',
    accentColor: 'from-indigo-400 to-purple-500',
    textColor: 'text-indigo-100',
    description: 'Northern lights inspired tech theme'
  },
  {
    id: 'minimal-dark',
    name: 'Minimal Dark',
    background: 'bg-gradient-to-br from-gray-900 to-gray-800',
    cardStyle: 'bg-gray-800/60 backdrop-blur-xl border border-gray-600/30 shadow-2xl',
    accentColor: 'from-gray-600 to-gray-700',
    textColor: 'text-gray-100',
    description: 'Clean minimal dark theme'
  }
];

export const getRandomTheme = (): LoginTheme => {
  return loginThemes[Math.floor(Math.random() * loginThemes.length)];
};

export const getThemeByTime = (): LoginTheme => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return loginThemes[3]; // Sunset Code for morning
  if (hour >= 12 && hour < 18) return loginThemes[2]; // Ocean Tech for afternoon
  if (hour >= 18 && hour < 22) return loginThemes[4]; // Aurora Tech for evening
  return loginThemes[0]; // Cyber Neon for night
};