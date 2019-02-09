export interface User {
  age?: number;
  firstName: string;
  lastName: string;
  address?: {
    city?: string;
    state?: string;
    street?: string;
  };
}
