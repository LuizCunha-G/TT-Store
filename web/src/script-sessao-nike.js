    function filtro() {
        const filterOptions = document.getElementById('filter-options');
        filterOptions.classList.toggle('visible');

}

function filterAndSortProducts() {
    const selectedFilters = {
        color: [],
        gender: [],
        size: [],
        type: []
    };

    filterCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const filterType = checkbox.closest('.filter').dataset.filterType;
            selectedFilters[filterType].push(checkbox.value);
        }
    });

    const sortBy = sortSelect.value;

    let filteredProducts = Array.from(products).filter(product => {
        const productColor = product.dataset.color;
        const productGender = product.dataset.gender;
        const productSize = product.dataset.size;
        const productType = product.dataset.type;

        const matchesColor = selectedFilters.color.length === 0 || selectedFilters.color.includes(productColor);
        const matchesGender = selectedFilters.gender.length === 0 || selectedFilters.gender.includes(productGender);
        const matchesSize = selectedFilters.size.length === 0 || selectedFilters.size.includes(productSize);
        const matchesType = selectedFilters.type.length === 0 || selectedFilters.type.includes(productType);

        return matchesColor && matchesGender && matchesSize && matchesType;
    });

    if (sortBy === 'most-recent') {
        filteredProducts.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));
    } else if (sortBy === 'relevant') {
        // Implementar lógica de relevância aqui
    } else if (sortBy === 'best-selling') {
        // Implementar lógica de mais vendidos aqui
    } else if (sortBy === 'highest-price') {
        filteredProducts.sort((a, b) => b.dataset.price - a.dataset.price);
    } else if (sortBy === 'lowest-price') {
        filteredProducts.sort((a, b) => a.dataset.price - b.dataset.price);
    } else if (sortBy === 'a-to-z') {
        filteredProducts.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
    } else if (sortBy === 'z-to-a') {
        filteredProducts.sort((a, b) => b.dataset.name.localeCompare(a.dataset.name));
    }

    products.forEach(product => {
        product.style.display = 'none';
    });

    filteredProducts.forEach(product => {
        product.style.display = 'block';
    });
}

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const arrow = section.previousElementSibling.querySelector('.arrow');
        const options = document.getElementById(sectionId);
        
        if (arrow.textContent === '▼') {
            arrow.textContent = '▲';
            options.classList.remove('hidden');
        } else {
            arrow.textContent = '▼';
            options.classList.add('hidden');
        }
    } else {
        console.error(`Elemento com ID '${sectionId}' não encontrado.`);
    }
}

// Captura o botão "Ver Mais"
const verMaisBtn = document.getElementById('verMaisBtn');

// Define a função para adicionar mais produtos
function adicionarMaisProdutos() {
    // Aqui você pode adicionar lógica para buscar mais produtos ou simplesmente clonar e adicionar mais elementos
    // Exemplo simples: clonando e adicionando os três primeiros produtos novamente
    const conjuntoImagens = document.querySelector('#sessao-produtos .sessao-produtos');
    const produtosOriginais = conjuntoImagens.innerHTML;
    conjuntoImagens.innerHTML += produtosOriginais;
}

// Adiciona um listener para o evento de clique no botão
verMaisBtn.addEventListener('click', adicionarMaisProdutos);
