import type { ILoginInput, ILoginResponse } from "~/interfaces/Ilogin";
import HttpFactory from "../httpFactory";

class AuthModule extends HttpFactory {

    private RESOURCES = '/auth'

    async login(credentials: ILoginInput): Promise<ILoginResponse> {
        return await this.call<ILoginResponse>("POST", `${this.RESOURCES}/login`, credentials)
    }
}

export default AuthModule