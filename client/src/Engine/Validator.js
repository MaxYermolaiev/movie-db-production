export default class Validator {
    /*regexp for testing requiered fields
        email:email@provider.com
        password: only digits, min length 6
        phone: +380...with length 9
        string:string - min length 3
     */
    schema = {
        email: /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/,
        password: /(?=.*[0-9]){6,}/g,
        phone: /^\+380[0-9]{9}$/,
        string: /[A-Za-z]{3,}/
    }
    //in results will be pushed testing of inputs, if list empty ok
    #results = {}
    validateLogin = (data) => {
        if (data.length === 0) {
            return this.#results.push({dataError: true})
        }
        const email = this.schema.email.test(data.email);
        const password = this.schema.password.test(data.password);
        if (!email) {this.#results.email="email not correct"}
        if (!password) {this.#results.password= "password not correct"}

        return this.#results;
    }

    validateRegistartion=(data)=>{
        this.#results = {}
        this.validateLogin(data)
        let phone = this.schema.phone.test(data.data.phone);
        let nick = this.schema.string.test(data.data.nick);
        let city = this.schema.string.test(data.data.city);
        if(!phone){this.#results.phone="phone not correct"}
        if(!nick){this.#results.nick= "nick not correct"}
        if(!city){this.#results.city= "city not correct"}
        let result = this.#results;
        return result;
    }
}