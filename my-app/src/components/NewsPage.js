import React from 'react';
import PageHeader from './PageHeader';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';
import { AlertTriangle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const NewsPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-green-50">
      <PageHeader title="Farming News" onBack={onBack} />
      <div className="max-w-2xl mx-auto p-4 space-y-4">
        <Alert variant="warning" className="bg-amber-50">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Misinformation Detection Active</AlertTitle>
          <AlertDescription>
            News content is being verified for accuracy
          </AlertDescription>
        </Alert>
        {[1, 2, 3, 4, 5].map((item) => (
          <Card key={item}>
            <CardContent className="p-4">
              <h3 className="font-medium text-lg mb-2">Latest Farming Update {item}</h3>
              <p className="text-gray-600">
                Detailed news about sustainable farming practices, market updates, and agricultural innovations...
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
