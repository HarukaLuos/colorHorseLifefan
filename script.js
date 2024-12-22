  const colorData = {
         "cipheris + cipheris": "cipheris",
         "cipheris + cipheris": "mocca",
         "cipheris + cipheris": "slate",
          "cipheris + cipheris": "shadow",
           "cipheris + cipheris": "prune",
           "cipheris + raisin": "cipheris",
           "cipheris + raisin": "blackberry",
           "cipheris + raisin": "raisin",
           "cipheris + raisin": "depth",
           "cipheris + raisin": "gunmetal",
           "cipheris + raisin": "seal",
           "cipheris + raisin": "mauve",
           "cipheris + eggplant": "cipheris",
           "cipheris + eggplant": "eggplant",
           "cipheris + eggplant": "blackberry",
           "cipheris + eggplant": "seal",
           "cipheris + eggplant": "raisin",
           "cipheris + eggplant": "wool",
           "cipheris + eggplant": "depth",
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
                if (colorData[parents].toLowerCase() === colorName) {
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
