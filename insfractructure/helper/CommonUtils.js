export default class CommonUtils {

    static getRandomString() {
        const randString = Math.random().toString(36);
        return randString.substr(2, 10);
    }
}