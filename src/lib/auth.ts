// In a real application, you would fetch the user from a session or an API.
// For this example, we are mocking the authenticated user.

export type User = {
  name: string;
  email: string;
  role: 'soporte' | 'intermedio' | 'inicial';
  avatarUrl: string;
};

export const getAuthenticatedUser = (): User => {
  // To test different roles, change this value to 'intermedio' or 'inicial'
  const role: User['role'] = 'soporte';

  switch (role) {
    case 'intermedio':
      return {
        name: 'Alex Doe',
        email: 'alex.doe@example.com',
        role: 'intermedio',
        avatarUrl: 'https://picsum.photos/seed/user2/40/40',
      };
    case 'inicial':
      return {
        name: 'Sam Jones',
        email: 'sam.jones@example.com',
        role: 'inicial',
        avatarUrl: 'https://picsum.photos/seed/user3/40/40',
      };
    case 'soporte':
    default:
      return {
        name: 'Taylor Smith',
        email: 'taylor.smith@example.com',
        role: 'soporte',
        avatarUrl: 'https://picsum.photos/seed/user1/40/40',
      };
  }
};
