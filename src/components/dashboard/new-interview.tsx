import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function NewInterview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>开始新的面试</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Button className="w-full">开始面试</Button>
        </div>
      </CardContent>
    </Card>
  )
} 