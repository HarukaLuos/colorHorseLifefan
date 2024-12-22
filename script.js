const colorData = {
    "фиолетовый + красный": ["бордовый", "сиреневый", "фуксия"],
    "синий + клубничный": ["бордовый", "сиреневый"],
    "красный + желтый": ["оранжевый"],
    "синий + желтый": ["зеленый"]
};

function formatString(str) {
    return str.trim().toLowerCase();
}

function getParentColors() {
    const colorName = formatString(document.getElementById('colorName').value);
    const resultDiv = document.getElementById('result');
    let resultHTML = '';
    let found = false;

    for (let parents in colorData) {
        if (colorData[parents].map(c => c.toLowerCase()).includes(colorName)) {
            if (!found) {
                resultHTML += '<h3>Родительские цвета для ' + colorName + ':</h3><ul>';
                found = true;
            }
            resultHTML += '<li>' + parents + '</li>';
        }
    }

    if (found) {
        resultHTML += '</ul>';
        resultDiv.innerHTML = resultHTML;
    } else {
        resultDiv.innerHTML = '<p>Нет данных о родительских цветах для ' + colorName + '</p>';
    }
}
