import { IHttp } from "../interfaces/Http.js";

export class HttpClient extends IHttp {
    constructor() {
        super(); // Chama o construtor da classe base
        this.xhr = new XMLHttpRequest();
    }

    async get(url, options = {}) {
        return new Promise((resolve, reject) => {
            this.xhr.open('GET', url, true);

            // Configura cabeçalhos personalizados
            if (options.headers) {
                for (const [key, value] of Object.entries(options.headers)) {
                    this.xhr.setRequestHeader(key, value);
                }
            }

            this.xhr.onload = () => {
                if (this.xhr.status >= 200 && this.xhr.status < 300) {
                    resolve(JSON.parse(this.xhr.responseText));
                } else {
                    reject(new Error(`Erro ${this.xhr.status}: ${this.xhr.statusText}`));
                }
            };

            this.xhr.onerror = () => reject(new Error('Erro de rede'));

            this.xhr.send();
        });
    }

    async post(url, data, options = {}) {
        return new Promise((resolve, reject) => {
            this.xhr.open('POST', url, true);

            // Configura cabeçalhos personalizados
            this.xhr.setRequestHeader('Content-Type', 'application/json');
            if (options.headers) {
                for (const [key, value] of Object.entries(options.headers)) {
                    this.xhr.setRequestHeader(key, value);
                }
            }

            this.xhr.onload = () => {
                if (this.xhr.status >= 200 && this.xhr.status < 300) {
                    resolve(JSON.parse(this.xhr.responseText));
                } else {
                    reject(new Error(`Erro ${this.xhr.status}: ${this.xhr.statusText}`));
                }
            };

            this.xhr.onerror = () => reject(new Error('Erro de rede'));

            this.xhr.send(JSON.stringify(data));
        });
    }

    async put(url, data, options = {}) {
        return new Promise((resolve, reject) => {
            this.xhr.open('PUT', url, true);

            // Configura cabeçalhos personalizados
            this.xhr.setRequestHeader('Content-Type', 'application/json');
            if (options.headers) {
                for (const [key, value] of Object.entries(options.headers)) {
                    this.xhr.setRequestHeader(key, value);
                }
            }

            this.xhr.onload = () => {
                if (this.xhr.status >= 200 && this.xhr.status < 300) {
                    resolve(JSON.parse(this.xhr.responseText));
                } else {
                    reject(new Error(`Erro ${this.xhr.status}: ${this.xhr.statusText}`));
                }
            };

            this.xhr.onerror = () => reject(new Error('Erro de rede'));
    
            this.xhr.send(JSON.stringify(data));
        });
    }

    async delete(url, options = {}) {
        return new Promise((resolve, reject) => {
            this.xhr.open('DELETE', url, true);

            // Configura cabeçalhos personalizados
            if (options.headers) {
                for (const [key, value] of Object.entries(options.headers)) {
                    this.xhr.setRequestHeader(key, value);
                }
            }

            this.xhr.onload = () => {
                if (this.xhr.status >= 200 && this.xhr.status < 300) {
                    resolve(JSON.parse(this.xhr.responseText));
                } else {
                    reject(new Error(`Erro ${this.xhr.status}: ${this.xhr.statusText}`));
                }
            };

            this.xhr.onerror = () => reject(new Error('Erro de rede'));

            this.xhr.send();
        });
    }
}
