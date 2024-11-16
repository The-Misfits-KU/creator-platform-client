import { createContext, useContext, useState, useEffect } from 'react';
import { useActiveAccount } from 'thirdweb/react';
import { contract } from '@/constants/contract';
import { useReadContract } from 'thirdweb/react';

export const UserContext = createContext({
  walletUser: null,
  isUserLoading: false,
});

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [walletUser, setWalletUser] = useState<any>(null);
  const [isUserLoading, setUserLoading] = useState<any>(false);
  const account = useActiveAccount();

  useEffect(() => {
    if (account?.address && !isUserLoading) {
      setUserLoading(true);
    }
  }, [account, isUserLoading]);

  const { data: user, isPending: isUserPending } = useReadContract({
    contract,
    method:
      'function getUser(address _user) view returns ((address wallet, string name, string bio, address[] followers, address[] following))',
    params: [account?.address as string],
  });

  useEffect(() => {
    if (user) {
      setWalletUser(user);
      setUserLoading(false);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ walletUser, isUserLoading }}>
      {children}
    </UserContext.Provider>
  );
};
