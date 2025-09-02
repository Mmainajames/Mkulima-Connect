import {
  DollarSign,
  Users,
  CreditCard,
  Activity,
  BarChart3
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { users, disputes } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-8">
       <div className="text-left">
          <h1 className="text-4xl font-headline font-bold text-primary">Admin Dashboard</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">Overview of Mkulima Connect platform.</p>
        </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card className="rounded-2xl shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Transactions
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KES 45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Commission Revenue
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KES 2,261.59</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+235</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Produce</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Tomatoes</div>
            <p className="text-xs text-muted-foreground">Most traded this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
        <Card className="rounded-2xl shadow-lg lg:col-span-1">
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Joined Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.slice(0, 5).map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                        <Badge variant={user.role === 'Farmer' ? 'secondary' : 'default'}>{user.role}</Badge>
                    </TableCell>
                    <TableCell>{user.joined}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl shadow-lg lg:col-span-1">
            <CardHeader>
                <CardTitle>Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible>
                    {disputes.filter(d => d.status === 'Open').map(dispute => (
                        <AccordionItem key={dispute.id} value={dispute.id}>
                            <AccordionTrigger>
                                <div className="flex justify-between w-full pr-4">
                                    <span>{dispute.orderId} - {dispute.user}</span>
                                    <span className="text-sm text-muted-foreground">{dispute.date}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                               <div className="p-2">
                                  <p className="font-semibold">Reason:</p>
                                  <p className="mb-4">{dispute.reason}</p>
                                  <Button size="sm" className="rounded-full">Resolve</Button>
                               </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
