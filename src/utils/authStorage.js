import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage{
    constructor(namespace = 'auth'){
        this.namespace = namespace;
    }

    async getAccessToken(){
        const authorizationToken = await AsyncStorage.getItem(`${this.namespace}:token`);

        return authorizationToken;
    }

    async setAccessToken(token){
        await AsyncStorage.setItem(`${this.namespace}:token`, token);
    }

    async deleteAccessToken(){
        await AsyncStorage.removeItem(`${this.namespace}:token`);
    }
}

export default AuthStorage;