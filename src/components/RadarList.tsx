import { PlusCircle, Radar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Radar as RadarType } from '@/types';

interface RadarListProps {
  radars: RadarType[];
  onSelect: (id: string) => void;
  onCreate: () => void;
}

export function RadarList({ radars, onSelect, onCreate }: RadarListProps) {
  const getResultsCount = (radar: RadarType) => {
    return radar.runs?.reduce((acc, run) => acc + run.results.length, 0) || 0;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-foreground">Your Radars</h1>
        <Button onClick={onCreate}>
          <PlusCircle className="w-5 h-5 mr-2" />
          New Radar
        </Button>
      </div>
      
      {radars.length === 0 ? (
        <Card className="w-full">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Radar className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No radars yet</h3>
            <CardDescription className="mb-4">Create your first radar to start monitoring LinkedIn feeds</CardDescription>
            <Button variant="outline" onClick={onCreate}>
              Create a radar
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {radars.map((radar) => (
            <Card
              key={radar.id}
              onClick={() => onSelect(radar.id)}
              className="cursor-pointer hover:border-primary transition-colors"
            >
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <div className="flex items-center gap-2">
                  <Radar className="w-6 h-6 text-primary" />
                  <div className="flex gap-2">
                    <Badge variant="secondary">
                      {radar.runs?.length || 0} runs
                    </Badge>
                    <Badge variant="outline">
                      {getResultsCount(radar)} results
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-medium text-card-foreground mb-2 line-clamp-2">
                  {radar.description}
                </h3>
                <CardDescription className="line-clamp-3">
                  {radar.context || 'No additional context provided'}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}