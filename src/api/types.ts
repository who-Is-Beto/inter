export type GetUserInput = { id: string };

export type CreateUserInput = { name: string; email: string };

export type User = {
  id: string;
  name: string;
  email: string;
  createdOn: string;
  createdBy: string;
};

export const DEFAULT_FETCH_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
  },
};
