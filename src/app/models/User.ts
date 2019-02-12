export interface User {
  age?: number;
  firstName: string;
  isActive?: boolean;
  lastName: string;
  registered?: any;
  address?: {
    city?: string;
    state?: string;
    street?: string;
  };
}
