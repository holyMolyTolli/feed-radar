import { type FormEvent, type ChangeEvent, useState } from 'react';
import { ArrowLeft, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { RadarFormData } from '@/types';

interface RadarFormProps {
  data: Partial<RadarFormData>;
  onSubmit: (data: RadarFormData) => void;
  onBack: () => void;
}

export function RadarForm({ data, onSubmit, onBack }: RadarFormProps) {
  const [formData, setFormData] = useState<Partial<RadarFormData>>(data);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isValidFormData(formData)) {
      onSubmit(formData);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const isValidFormData = (data: Partial<RadarFormData>): data is RadarFormData => {
    return !!(
      data.linkedinCookie &&
      data.description &&
      data.exclusionCriteria &&
      data.inclusionCriteria &&
      data.notificationEmail
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-3xl font-bold text-foreground">
          {data.linkedinCookie ? 'Edit Radar' : 'New Radar'}
        </h1>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label htmlFor="linkedinCookie">LinkedIn Cookie</Label>
              <Input
                id="linkedinCookie"
                name="linkedinCookie"
                value={formData.linkedinCookie || ''}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notificationEmail">Notification Email</Label>
              <Input
                id="notificationEmail"
                name="notificationEmail"
                type="email"
                placeholder="email@example.com"
                value={formData.notificationEmail || ''}
                onChange={handleChange}
                required
              />
              <p className="text-sm text-muted-foreground">
                You'll receive notifications at this email when matching posts are found
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description || ''}
                onChange={handleChange}
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="exclusionCriteria">Exclusion Criteria</Label>
              <Textarea
                id="exclusionCriteria"
                name="exclusionCriteria"
                value={formData.exclusionCriteria || ''}
                onChange={handleChange}
                rows={2}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="inclusionCriteria">Inclusion Criteria</Label>
              <Textarea
                id="inclusionCriteria"
                name="inclusionCriteria"
                value={formData.inclusionCriteria || ''}
                onChange={handleChange}
                rows={2}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="context">Additional Context (Optional)</Label>
              <Textarea
                id="context"
                name="context"
                value={formData.context || ''}
                onChange={handleChange}
                rows={2}
              />
            </div>
          </CardContent>

          <CardFooter className="justify-end">
            <Button type="submit">
              <Save className="w-5 h-5 mr-2" />
              Save Radar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}