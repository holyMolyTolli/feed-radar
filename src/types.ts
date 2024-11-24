export interface Radar {
  id: string;
  linkedinCookie: string;
  description: string;
  exclusionCriteria: string;
  inclusionCriteria: string;
  notificationEmail: string;
  context?: string;
  runs?: RadarRun[];
}

export interface RadarRun {
  id: string;
  timestamp: string;
  results: RadarResult[];
}

export interface RadarResult {
  id: string;
  postUrl: string;
  content: string;
  matchScore: number;
  matchReason: string;
  profile: {
    id: string;
    name: string;
    avatarUrl: string;
  };
}

export type RadarFormData = Omit<Radar, 'id' | 'runs'>