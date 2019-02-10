export interface User {
  age?: number;
  balance?: number;
  firstName: string;
  image?: string;
  isActive?: boolean;
  lastName: string;
  registered?: any;
  address?: {
    city?: string;
    state?: string;
    street?: string;
  };
}
