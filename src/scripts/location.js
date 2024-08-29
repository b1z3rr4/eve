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
                    reject(new Error('Erro ao obter a localização.'));
                },
                {
                    enableHighAccuracy: true, // Melhor precisão
                    timeout: 5000,            // Tempo máximo de espera
                    maximumAge: 0             // Não usar dados de localização em cache
                }
            );
        });
    } else {
        alert('Geolocation não é suportado pelo navegador.'); // Snackbar/Toast
    }
}

async function getPostalCode(latitude, longitude) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`);
        if (!response.ok) {
            alert('Erro na resposta da API.');
        }
        const data = await response.json();

        if (data && data.address && data.address.postcode) {
            return data.address.postcode;
        } else {
            alert('CEP não encontrado.');
        }
    } catch (error) {
        alert('Erro ao buscar o CEP.');
    }
}

async function getCityAndStateFromCep(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) {
            alert('Erro na resposta da API.');
        }
        const data = await response.json();

        if (data.erro) {
            alert('CEP não encontrado.');
        }

        const { localidade: cidade, uf: estado } = data;
        return { cidade, estado };
    } catch (error) {
        alert('Erro ao buscar cidade e estado.');
    }
}

const cep = await getGeolocation();

const { cidade, estado } = await getCityAndStateFromCep(cep);

const search = document.querySelector('eve-search');

search.setAttribute('location', `${cidade}, ${estado}`);
