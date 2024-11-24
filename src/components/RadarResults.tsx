import React from 'react';
import { Calendar, Link as LinkIcon } from 'lucide-react';
import type { RadarRun } from '../types';

interface RadarResultsProps {
  runs: RadarRun[];
}

export function RadarResults({ runs }: RadarResultsProps) {
  const [activeTab, setActiveTab] = React.useState<'recent' | 'all'>('recent');

  const sortedRuns = [...runs].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  const recentRuns = sortedRuns.slice(0, 5);
  const displayRuns = activeTab === 'recent' ? recentRuns : sortedRuns;

  return (
    <div className="mt-8 border-t pt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Radar Results</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('recent')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'recent'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Recent
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            All Results
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {displayRuns.map((run) => (
          <div
            key={run.id}
            className="bg-white rounded-lg border border-gray-200 p-4"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <Calendar className="w-4 h-4" />
              <span>{new Date(run.timestamp).toLocaleString()}</span>
            </div>

            <div className="space-y-3">
              {run.results.map((result) => (
                <div
                  key={result.id}
                  className="p-3 bg-gray-50 rounded-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-gray-900 flex-grow">{result.content}</p>
                    <a
                      href={result.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <LinkIcon className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="mt-2 flex items-center gap-4">
                    <span className="text-sm text-gray-500">
                      Match score: {result.matchScore}
                    </span>
                    <span className="text-sm text-gray-500">
                      {result.matchReason}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}