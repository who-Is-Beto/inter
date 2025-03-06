import { useCreateUser, useGetUser } from './requests';

const useUserAPI = () => {
  const {
    getUser,
    isLoading: getUserLoading,
    data: getUserData,
  } = useGetUser();

  const {
    createUser,
    isLoading: createUserLoading,
    data: createUserData,
  } = useCreateUser();

  return {
    getUser: {
      getUser,
      getUserLoading,
      getUserData,
    },
    createUser: {
      createUser,
      createUserLoading,
      createUserData,
    },
  };
};
