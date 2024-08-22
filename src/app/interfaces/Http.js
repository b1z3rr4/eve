/**
 * Interface Http
 * @interface
 */
export class IHttp {
    /**
     * Faz uma requisição GET.
     * @param {string} url - URL da requisição.
     * @param {Object} [options] - Opções adicionais para a requisição.
     * @param {Object} [options.headers] - Cabeçalhos adicionais para a requisição.
     * @param {Object<string, string>} [options.headers] - Cabeçalhos HTTP adicionais onde a chave é o nome do cabeçalho e o valor é o conteúdo.
     * @returns {Promise<any>} - Promessa com a resposta da requisição.
     */
    async get(url, options) {}

    /**
     * Faz uma requisição POST.
     * @param {string} url - URL da requisição.
     * @param {Object} data - Dados a serem enviados.
     * @param {Object} [options] - Opções adicionais para a requisição.
     * @param {Object} [options.headers] - Cabeçalhos adicionais para a requisição.
     * @param {Object<string, string>} [options.headers] - Cabeçalhos HTTP adicionais onde a chave é o nome do cabeçalho e o valor é o conteúdo.
     * @returns {Promise<any>} - Promessa com a resposta da requisição.
     */
    async post(url, data, options) {}

    /**
     * Faz uma requisição PUT.
     * @param {string} url - URL da requisição.
     * @param {Object} data - Dados a serem enviados.
     * @param {Object} [options] - Opções adicionais para a requisição.
     * @param {Object} [options.headers] - Cabeçalhos adicionais para a requisição.
     * @param {Object<string, string>} [options.headers] - Cabeçalhos HTTP adicionais onde a chave é o nome do cabeçalho e o valor é o conteúdo.
     * @returns {Promise<any>} - Promessa com a resposta da requisição.
     */
    async put(url, data, options) {}

    /**
     * Faz uma requisição DELETE.
     * @param {string} url - URL da requisição.
     * @param {Object} [options] - Opções adicionais para a requisição.
     * @param {Object} [options.headers] - Cabeçalhos adicionais para a requisição.
     * @param {Object<string, string>} [options.headers] - Cabeçalhos HTTP adicionais onde a chave é o nome do cabeçalho e o valor é o conteúdo.
     * @returns {Promise<any>} - Promessa com a resposta da requisição.
     */
    async delete(url, options) {}
}
