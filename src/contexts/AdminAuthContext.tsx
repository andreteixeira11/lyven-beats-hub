import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const API_BASE = 'https://api.yvent.com/v1';

interface User {
  id: string;
  name: string;
  email: string;
  userType: string;
}

interface AdminAuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const AdminAuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('admin_token');
    const storedUser = localStorage.getItem('admin_user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Verificar credenciais locais primeiro
    if (email === 'geral@lyven.pt' && password === 'Lyven2025') {
      const mockUser = {
        id: 'admin_1',
        name: 'Administrador Lyven',
        email: 'geral@lyven.pt',
        userType: 'admin'
      };
      const mockToken = 'lyven_admin_token_' + Date.now();
      
      setToken(mockToken);
      setUser(mockUser);
      localStorage.setItem('admin_token', mockToken);
      localStorage.setItem('admin_user', JSON.stringify(mockUser));
      return;
    }

    // Tentar autenticação via API
    try {
      const response = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Credenciais inválidas');
      }

      const data = await response.json();
      
      setToken(data.token);
      setUser(data.user);
      localStorage.setItem('admin_token', data.token);
      localStorage.setItem('admin_user', JSON.stringify(data.user));
    } catch (error) {
      throw new Error('Credenciais inválidas');
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
  };

  return (
    <AdminAuthContext.Provider value={{ user, token, login, logout, isLoading }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within AdminAuthProvider');
  }
  return context;
};

export const fetchAPI = async (endpoint: string, token: string, options?: RequestInit) => {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...options?.headers
    }
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
};
