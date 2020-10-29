import { useState, useEffect } from "react";
import {
  getSalesChannelToken,
  getCustomerToken,
  getIntegrationToken,
  authorizeWebapp,
  getWebappToken,
} from "@commercelayer/js-auth";

function useAuthToken() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await getSalesChannelToken({
          clientId: "EdngI8XG9KApf8xCxtfO4r0yQfEAnvrc1Fm_qmrYoGQ",
          endpoint: "https://acme-wine.commercelayer.io",
          scope: "market:3360",
        });
        setToken(response.accessToken);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { token, isLoading, isError };
}

export default useAuthToken;
