export interface User {
  age?: number;
  firstName: string;
  hide?: boolean;
  isActive?: boolean;
  lastName: string;
  registered?: any;
  address?: {
    city?: string;
    state?: string;
    street?: string;
  };
}
