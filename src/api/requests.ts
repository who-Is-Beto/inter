import { useFetch } from '@/hooks/useFetch';
import { GetUserInput, User } from './types';

export const useGetUser = () => {
  const { data, isLoading, fetchData, error } = useFetch<User>({
    url: 'http://localhost:3000/user', // TODO: Update this to get tracked all endpoint in an enum, and set url as base URL just pass the endpoint
  });

  const getUser = (input: GetUserInput) => fetchData({ input });
  return { data, isLoading, getUser, error };
};

export const useCreateUser = () => {
  const { data, isLoading, fetchData, error } = useFetch<User>({
    url: 'http://localhost:3000/user',
    method: 'POST',
  });

  const createUser = (input: User) => fetchData({ input });
  return { data, isLoading, createUser, error };
};
