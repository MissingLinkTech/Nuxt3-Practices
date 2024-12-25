import type { IProduct } from "~/interfaces/product";
import HttpFactory from "../httpFactory";

class ProductModule extends HttpFactory {
  private RESOURCES = "/products";

  async getAllProducts(): Promise<IProduct[]> {
    return await this.call<IProduct[]>("GET", `${this.RESOURCES}`);
  }
}

export default ProductModule;
