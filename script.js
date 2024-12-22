const colorData = {
    "cipheris + cipheris": ["cipheris", "mocca", "slate", "shadow", "prune"],
    "cipheris + raisin": ["cipheris", "blackberry", "raisin", "depth", "gunmetal", "seal", "mauve"],
    "red + blue": ["purple", "violet", "lavender"],
    "cipheris + ash": ["cipheris", "blackberry", "raisin", "depth", "gunmetal", "seal", "mauve"],
    "cipheris + vf": ["cipheris", "blackberry", "raisin", "depth", "gunmetal", "seal", "mauve"],
    "cipheris + eggplant": ["cipheris", "blackberry", "raisin", "depth", "wool", "seal", "eggplant"]
};

function formatString(str) {
    return str.trim().toLowerCase();
}

function getParentColors() {
    const colorName = formatString(document.getElementById('colorName').value);
    console.log("Введенное название цвета:", colorName); // Отладочное сообщение
    const resultDiv = document.getElementById('result');
    let resultHTML = '';
    let found = false;

    for (let parents in colorData) {
        const childColors = colorData[parents].map(color => color.toLowerCase());
        console.log("Проверка родительских цветов:", parents, childColors); // Отладочное сообщение
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

