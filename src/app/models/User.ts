export interface User {
  age?: number;
  firstName: string;
  image?: string;
  isActive?: boolean;
  lastName: string;
  address?: {
    city?: string;
    state?: string;
    street?: string;
  };
}
