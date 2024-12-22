const colorData = {
    "cipheris + cipheris": ["cipheris", "mocca", "slate", "shadow", "prune"],
    "cipheris + raisin": ["cipheris", "blackberry", "raisin", "depth", "gunmetal", "seal", "mauve"],
    "red + blue": ["purple", "violet", "lavender"],  // Пример новой строки
    "cipheris + eggplant": ["cipheris", "blackberry", "raisin", "depth", "wool", "seal", "eggplant"]
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
        const childColors = colorData[parents].map(color => color.toLowerCase());
        if (childColors.includes(colorName)) {
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
