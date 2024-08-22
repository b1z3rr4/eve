async function getGeolocation() {
    if (navigator.geolocation) {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const cep = await getPostalCode(latitude, longitude);
                        const cepFormatted = cep.replace('-', '');
                        resolve(cepFormatted);
                    } catch (error) {
                        reject(error);
                    }
                },
                (error) => {
                    reject(new Error('Erro ao obter a localização: ' + error.message));
                },
                {
                    enableHighAccuracy: true, // Melhor precisão
                    timeout: 5000,            // Tempo máximo de espera
                    maximumAge: 0             // Não usar dados de localização em cache
                }
            );
        });
    } else {
        throw new Error('Geolocation não é suportado pelo navegador.');
    }
}

async function getPostalCode(latitude, longitude) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`);
        if (!response.ok) {
            throw new Error('Erro na resposta da API.');
        }
        const data = await response.json();

        if (data && data.address && data.address.postcode) {
            return data.address.postcode;
        } else {
            throw new Error('CEP não encontrado.');
        }
    } catch (error) {
        throw new Error('Erro ao buscar o CEP: ' + error.message);
    }
}

async function getCityAndStateFromCep(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
            throw new Error('Erro na resposta da API.');
        }
        const data = await response.json();

        if (data.erro) {
            throw new Error('CEP não encontrado.');
        }

        const { localidade: cidade, uf: estado } = data;
        return { cidade, estado };
    } catch (error) {
        throw new Error('Erro ao buscar cidade e estado: ' + error.message);
    }
}

const cep = await getGeolocation();

const { cidade, estado } = await getCityAndStateFromCep(cep);

const search = document.querySelector('eve-search');

search.setAttribute('location', `${cidade}, ${estado}`);
