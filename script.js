const colorData = [
    { parents: "cipheris + cipheris", children: ["cipheris", "mocca", "slate", "shadow", "prune"] },
    { parents: "cipheris + raisin", children: ["cipheris", "blackberry", "raisin", "depth", "gunmetal", "seal", "mauve"] },
    { parents: "cipheris + eggplant", children: ["cipheris", "blackberry", "raisin", "depth", "wool", "seal", "eggplant"] },
];

function formatString(str) {
    return str.trim().toLowerCase();
}

function getParentColors() {
    const colorName = formatString(document.getElementById('colorName').value);
    console.log("Введенное название цвета:", colorName); // Отладочное сообщение
    const resultDiv = document.getElementById('result');
    let resultHTML = '';
    let found = false;

    for (let entry of colorData) {
        const childColors = entry.children.map(color => color.toLowerCase());
        console.log("Проверка родительских цветов:", entry.parents, childColors); // Отладочное сообщение
        if (childColors.includes(colorName)) {
            if (!found) {
                resultHTML += '<h3>Родительские цвета для ' + colorName + ':</h3><ul>';
                found = true;
            }
            resultHTML += '<li>' + entry.parents + '</li>';
        }
    }

    if (found) {
        resultHTML += '</ul>';
        resultDiv.innerHTML = resultHTML;
    } else {
        resultDiv.innerHTML = '<p>Нет данных о родительских цветах для ' + colorName + '</p>';
    }
}

