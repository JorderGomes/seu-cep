$(document).ready(function() {
    const BASE_URL = 'https://viacep.com.br/ws/';
    const SUFFIX = '/json/';

    const $zipCodeForm = $('#zip-code-form');
    const $addressResult = $('#address-result');
    const $addressForm = $('#address-form');
    const $zipCodeResult = $('#zip-code-result');

    /**
     * CONSULTA POR CEP
     */
    $zipCodeForm.on('submit', async function(event) {
        event.preventDefault();
        
        const zipCodeInput = $('#zip-code-input').val();
        
        $addressResult.html('<span class="text-support">Buscando...</span>');
        
        const addressData = await getAddressByZipCode(zipCodeInput);
        
        if (addressData && !addressData.erro) {
            $addressResult.html(`
                <p class="mb-1">${addressData.logradouro}</p>
                <p class="mb-1">${addressData.bairro} - ${addressData.localidade}/${addressData.uf}</p>
            `);
            this.reset(); // Limpa o formulário
        } else {
            $addressResult.html('<span class="text-danger">CEP não encontrado.</span>');
        }
    });

    /**
     * CONSULTA POR ENDEREÇO
     */
    $addressForm.on('submit', async function(event) {
        event.preventDefault();

        const searchData = {
            state: $('#state-input').val(),
            city: $('#city-input').val(),
            street: $('#street-input').val()
        };

        $zipCodeResult.html('Buscando CEPs...');

        const results = await getZipCodeByAddress(searchData);
        
        if (results && results.length > 0) {
            let htmlContent = '<ul class="list-unstyled mb-0">';
            $.each(results.slice(0, 3), function(i, item) {
                htmlContent += `
                    <li class="mb-3 pb-2 border-bottom border-secondary">
                        <span class="d-block fw-bold text-white">${item.cep}</span>
                        <span class="small text-support">${item.logradouro} - ${item.bairro}</span>
                    </li>`;
            });
            htmlContent += '</ul>';
            
            $zipCodeResult.html(htmlContent);
            this.reset();
        } else {
            $zipCodeResult.html('<span class="text-danger small">Nenhum CEP encontrado.</span>');
        }
    });

    async function getAddressByZipCode(zipCode) {
        const cleanZip = zipCode.replace(/\D/g, '');
        try {
            const response = await fetch(`${BASE_URL}${cleanZip}${SUFFIX}`);
            return await response.json();
        } catch (error) { return null; }
    }

    async function getZipCodeByAddress(address) {
        try {
            const url = `${BASE_URL}${address.state}/${encodeURIComponent(address.city)}/${encodeURIComponent(address.street)}${SUFFIX}`;
            const response = await fetch(url);
            return await response.json();
        } catch (error) { return null; }
    }
});