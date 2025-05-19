let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
document.getElementById('alphabet').innerText = 'Алфавит: ' + alphabet.join(' ');
const inputText = document.getElementById('inputText');
const stepsDiv = document.getElementById('steps');
const outputText = document.getElementById('outputText');
inputText.addEventListener('input', decript) 
function decript () {
    let text = inputText.value.toLowerCase();
    let encrypted = [];
    let steps = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let index = alphabet.indexOf(char);
    if (index === -1) {
        encrypted.push(char);
        steps += `Шаг ${i + 1}: '${char}' не в алфавите, оставляем без изменений.`;
    } else {
        let newIndex = (index + 13) % 26;
        let newChar = alphabet[newIndex];
        encrypted.push(newChar);
        steps += `Шаг ${i + 1}: '${char}' → '${newChar}' (индекс ${index} → ${newIndex})`;
        }
    }
  outputText.value = encrypted.join('');
  stepsDiv.innerText = steps;
};