import { ReactNode } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, LayoutDashboard, Users, Calendar, Ticket, TrendingUp, Megaphone, UserCog } from 'lucide-react';
import lyvenLogo from '@/assets/lyven-logo.svg';

interface AdminLayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Utilizadores', href: '/admin/users', icon: Users },
  { name: 'Eventos', href: '/admin/events', icon: Calendar },
  { name: 'Bilhetes', href: '/admin/tickets', icon: Ticket },
  { name: 'Promotores', href: '/admin/promoters', icon: UserCog },
  { name: 'Analytics', href: '/admin/analytics', icon: TrendingUp },
  { name: 'Anúncios', href: '/admin/ads', icon: Megaphone },
];

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { user, logout, isLoading } = useAdminAuth();
  const navigate = useNavigate();

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">A carregar...</div>;
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-card border-r border-border">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-border">
            <img src={lyvenLogo} alt="Lyven" className="h-8" />
            <p className="text-sm text-muted-foreground mt-2">Portal Admin</p>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = window.location.pathname === item.href;
              return (
                <Button
                  key={item.name}
                  variant={isActive ? "secondary" : "ghost"}
                  className="w-full justify-start gap-3"
                  onClick={() => navigate(item.href)}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium">{user.name?.[0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user.name}</p>
                <p className="text-xs text-muted-foreground truncate">{user.email}</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              onClick={logout}
            >
              <LogOut className="h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
