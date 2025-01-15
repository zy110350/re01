import {defineStore} from "pinia";
import pinia from "@/store";
import { userLogin, refreshUserInfo } from '@/api/user';

// console.log(userLogin, refreshUserInfo);

export interface UserState {
    username: string;
    accessToken: string;
    refreshToken?: string;
    roles: Array<string>;
}
export type LoginRequest = {
    username: string;
    password: string;
};

export const useUserStoreHook = defineStore('userInfo', {
    state: (): UserState => ({
        username: '大伟',
        accessToken: '',
        roles: ['common'],
    }),
    getters: {},
    actions: {
        storeUserLogin(data: LoginRequest) {
            return userLogin(data).then((res) => {
                this.username = res.username;
                this.roles = res.roles;
                this.accessToken = res.accessToken;
                return res;
            });
        },
        storeRefreshUserInfo() {
            if (this.username == '大伟' && this.accessToken != '') {
                refreshUserInfo({
                    accessToken: this.accessToken,
                }).then((res) => {
                        this.username = res.username;
                        this.roles = res.roles;
                        this.accessToken = res.accessToken;
                    })
                    .catch(() => {
                        this.accessToken = '';
                    });
            }
        },
    },
    persist: {
        key: 'userInfo',
        storage: sessionStorage,
        paths: ['accessToken'],
    },
});

//console.log(useUserStoreHook);//useUserStoreHook其实是一个useStore函数

export function useUserStore() {
    return useUserStoreHook(pinia);
}