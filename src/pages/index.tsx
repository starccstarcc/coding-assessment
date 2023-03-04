import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useCheckout } from '../mock-backend';

import { StoreBanner, StoreContainer } from '../components';

const Index = () => {
  const [loading, setLoading] = useState(false);
  const { items, buy, balance } = useCheckout();

  const handleBuy = useCallback(
    (itemId: number) => {
      setLoading(true);
      const toastId = toast.loading('Processing...');
      buy(itemId)
        .then(() => {
          setLoading(false);
          toast.dismiss(toastId);
          toast.success(`Purchased, $${balance} remained`, {
            duration: 2000,
          });
        })
        .catch((error) => {
          setLoading(false);
          toast.dismiss(toastId);
          switch (error.message) {
            case 'INSUFFICIENTBALANCE':
              toast.error(
                `You don't have enough balance to buy it. Your current balance: $${balance}`,
                {
                  duration: 2500,
                }
              );
              break;
            default:
              toast.error(error.message, {
                duration: 1000,
              });
              break;
          }
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [buy]
  );

  return (
    <main>
      <StoreBanner />
      <StoreContainer
        loading={loading}
        goodsList={items}
        handleBuy={handleBuy}
      />
    </main>
  );
};

export default Index;
