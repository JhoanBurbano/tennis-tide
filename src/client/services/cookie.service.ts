import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { cookies } from 'next/headers'
 

export default class CookieService {
    private cookieStore: ReadonlyRequestCookies;
    constructor(){
        this.cookieStore = cookies()
    }

    public hasCookie(name: string){
        return this.cookieStore.has(name)
    }

    public getCookie(name: string){
        return this.cookieStore.get(name)
    }


    public setCookie(name: string, value: string){
        return this.cookieStore.set(name, value)
    }

    public deleteCookie(name: string){
        return this.cookieStore.delete(name)
    }
}
