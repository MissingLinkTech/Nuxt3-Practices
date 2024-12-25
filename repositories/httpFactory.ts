import type { $Fetch } from "ofetch";
import type { methods } from "~/interfaces/httpRequest";

/**
 * The FetchFactory acts as a wrapper around an HTTP client.
 * It encapsulates the functionality for making API requests asynchronously
 * through the call function, utilizing the provided HTTP client.
 */
class HttpFactory {
  private $fetch: $Fetch;

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  /**
   * The HTTP client is utilized to control the process of making API requests.
   * @param method the HTTP method (GET, POST, ...)
   * @param url the endpoint url
   * @param data the body data
   * @param extras
   * @returns Promise
   */

  async call<T>(method: methods, url: string, data?: object, extras = {}) {
    const $response: T = await this.$fetch(url, {
      method,
      body: data,
      ...extras,
    });
    return $response;
  }
}

export default HttpFactory;
