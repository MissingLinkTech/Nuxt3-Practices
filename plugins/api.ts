import { $fetch, type FetchOptions } from "ofetch";
import AuthModule from "~/repositories/modules/auth";
import ProductModule from "~/repositories/modules/product";

/** ApiInstance interface provides us with good typing */
interface IApiInstance {
  auth: AuthModule;
  product: ProductModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const fetchOptions: FetchOptions = {
    baseURL: nuxtApp.$config.public.baseURL,
  };

  /** create a new instance of $fetcher with custom option */
  const apiFetcher = $fetch.create(fetchOptions);

  /** an object containing all repositories we need to expose */
  const modules: IApiInstance = {
    auth: new AuthModule(apiFetcher),
    product: new ProductModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
