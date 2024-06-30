const APP_ID = '4562c830'; // Substitua pelo seu APP ID
const APP_KEY = '175f55ff119e42afe1ec982399c78540'; // Substitua pelo seu APP KEY

document.getElementById('food-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const food = document.getElementById('food-input').value;
    fetchNutritionInfo(food);
});

document.getElementById('show-foods-button').addEventListener('click', function () {
    fetchCommonFoods();
});

const fetchNutritionInfo = async (query) => {
    try {
        const response = await fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${query}`, {
            method: 'GET',
            headers: {
                'x-app-id': APP_ID,
                'x-app-key': APP_KEY
            }
        });
        const data = await response.json();
        displayResult(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const displayResult = (data) => {
    const resultDiv = document.getElementById('result');
    if (data.common.length > 0) {
        const foodItem = data.common[0];
        fetchFoodDetails(foodItem.food_name);
    } else {
        resultDiv.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    }
};

const fetchFoodDetails = async (foodName) => {
    try {
        const response = await fetch(`https://trackapi.nutritionix.com/v2/natural/nutrients`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-app-id': APP_ID,
                'x-app-key': APP_KEY
            },
            body: JSON.stringify({
                query: foodName
            })
        });
        const data = await response.json();
        displayDetailedResult(data);
    } catch (error) {
        console.error('Error fetching food details:', error);
    }
};

const displayDetailedResult = (data) => {
    const resultDiv = document.getElementById('result');
    if (data.foods && data.foods.length > 0) {
        const foodDetails = data.foods[0];
        resultDiv.innerHTML = `
            <h2>Resultados da Pesquisa:</h2>
            <p><strong>Nome:</strong> ${foodDetails.food_name}</p>
            <p><strong>Calorias:</strong> ${foodDetails.nf_calories} kcal</p>
            <p><strong>Porção:</strong> ${foodDetails.serving_qty} ${foodDetails.serving_unit} (${foodDetails.serving_weight_grams} gramas)</p>
            <p><strong>Gordura:</strong> ${foodDetails.nf_total_fat} g</p>
            <p><strong>Proteína:</strong> ${foodDetails.nf_protein} g</p>
            <p><strong>Carboidratos:</strong> ${foodDetails.nf_total_carbohydrate} g</p>
        `;
    } else {
        resultDiv.innerHTML = '<p>Nenhum detalhe encontrado.</p>';
    }
};

const commonFoodsInPortuguese = [
    "banana",
    "queijo",
    "arroz",
    "frango",
    "carne bovina",
    "batata",
];

const fetchCommonFoods = async () => {
    const commonFoodsDiv = document.getElementById('common-foods');
    const errorFoodsDiv = document.getElementById('error-foods');
    commonFoodsDiv.innerHTML = ''; // Limpa a lista antes de adicionar novos itens
    errorFoodsDiv.innerHTML = ''; // Limpa a lista de erros antes de adicionar novos itens
    for (let food of commonFoodsInPortuguese) {
        try {
            const response = await fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${food}`, {
                method: 'GET',
                headers: {
                    'x-app-id': APP_ID,
                    'x-app-key': APP_KEY
                }
            });
            const data = await response.json();
            if (data.common.length > 0) {
                displayCommonFoods(food, data.common);
            } else {
                errorFoodsDiv.innerHTML += `<p>${food}: Nenhum resultado encontrado.</p>`;
            }
        } catch (error) {
            console.error(`Error fetching data for ${food}:`, error);
            errorFoodsDiv.innerHTML += `<p>Erro ao buscar dados para ${food}: ${error.message}</p>`;
        }
    }
};

const displayCommonFoods = (foodName, foods) => {
    const commonFoodsDiv = document.getElementById('common-foods');
    commonFoodsDiv.innerHTML += `<h3>${foodName}</h3>`;
    foods.forEach(food => {
        commonFoodsDiv.innerHTML += `<p><a href="#" onclick="fetchNutritionInfo('${food.food_name}')">${food.food_name}</a></p>`;
    });
};