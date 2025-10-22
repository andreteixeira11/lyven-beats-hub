import { useEffect, useState } from 'react';
import { useAdminAuth, fetchAPI } from '@/contexts/AdminAuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Calendar, Ticket, DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';

interface OverviewData {
  users: {
    total: number;
    new: number;
    active: number;
  };
  events: {
    total: number;
    published: number;
  };
  tickets: {
    totalSold: number;
    totalRevenue: number;
  };
  revenue: {
    gross: number;
    platformFees: number;
  };
}

export default function AdminDashboard() {
  const { token } = useAdminAuth();
  const [data, setData] = useState<OverviewData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (!token) return;
      try {
        const overview = await fetchAPI('/analytics/overview', token);
        setData(overview);
      } catch (error) {
        console.error('Error loading dashboard:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [token]);

  if (isLoading) {
    return (
      <AdminLayout>
        <div>A carregar...</div>
      </AdminLayout>
    );
  }

  const stats = [
    {
      title: 'Total Utilizadores',
      value: data?.users.total.toLocaleString() || '0',
      change: `+${data?.users.new || 0} novos`,
      icon: Users,
      trend: 'up'
    },
    {
      title: 'Eventos Ativos',
      value: data?.events.published.toLocaleString() || '0',
      change: `${data?.events.total || 0} total`,
      icon: Calendar,
      trend: 'up'
    },
    {
      title: 'Bilhetes Vendidos',
      value: data?.tickets.totalSold.toLocaleString() || '0',
      change: 'Este mês',
      icon: Ticket,
      trend: 'up'
    },
    {
      title: 'Receita Total',
      value: `€${(data?.revenue.gross || 0).toLocaleString()}`,
      change: `€${(data?.revenue.platformFees || 0).toLocaleString()} taxas`,
      icon: DollarSign,
      trend: 'up'
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral da plataforma YVent</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <TrendIcon className="h-3 w-3" />
                    {stat.change}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Utilizadores Ativos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{data?.users.active.toLocaleString()}</div>
              <p className="text-sm text-muted-foreground mt-1">
                Utilizadores com atividade recente
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Receita Média por Bilhete</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                €{data?.tickets.totalSold ? (data.tickets.totalRevenue / data.tickets.totalSold).toFixed(2) : '0'}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Valor médio de venda
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
