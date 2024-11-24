import { useState } from 'react';
import type { Radar, RadarFormData } from '@/types';

export function useRadars() {
  const [radars, setRadars] = useState<Radar[]>([
    {
      id: '1',
      linkedinCookie: 'sample-cookie',
      description: 'Tech Jobs Radar',
      exclusionCriteria: 'recruitment agencies',
      inclusionCriteria: 'senior developer, tech lead',
      notificationEmail: 'demo@example.com',
      runs: [
        {
          id: '1',
          timestamp: new Date().toISOString(),
          results: [
            {
              id: '1',
              postUrl: 'https://linkedin.com/post/1',
              content: 'Looking for a Senior React Developer to join our team...',
              matchScore: 0.95,
              matchReason: 'High relevance to inclusion criteria',
              profile: {
                id: 'john-doe',
                name: 'John Doe',
                avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&dpr=2&q=80',
              },
            },
            {
              id: '2',
              postUrl: 'https://linkedin.com/post/2',
              content: 'Tech Lead position available for a growing startup...',
              matchScore: 0.88,
              matchReason: 'Matches job title criteria',
              profile: {
                id: 'jane-smith',
                name: 'Jane Smith',
                avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&dpr=2&q=80',
              },
            },
          ],
        },
      ],
    },
  ]);

  const createRadar = (radarData: RadarFormData) => {
    const newRadar: Radar = {
      id: crypto.randomUUID(),
      ...radarData,
      runs: [],
    };
    setRadars(prev => [...prev, newRadar]);
  };

  const updateRadar = (id: string, radarData: RadarFormData) => {
    setRadars(prev =>
      prev.map(radar =>
        radar.id === id
          ? { ...radar, ...radarData }
          : radar
      )
    );
  };

  const deleteRadar = (id: string) => {
    setRadars(prev => prev.filter(radar => radar.id !== id));
  };

  return {
    radars,
    createRadar,
    updateRadar,
    deleteRadar,
  };
}