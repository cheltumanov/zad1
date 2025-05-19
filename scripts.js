let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let alphabetString = '';
for (let i = 0; i < alphabet.length; i++) {
    alphabetString += alphabet[i];
    if (i < alphabet.length - 1) {
        alphabetString += ' ';
    }
}
document.getElementById('alphabet').innerText = 'Алфавит: ' + alphabetString;
let inputText = document.getElementById('inputText');
let stepsDiv = document.getElementById('steps');
let outputText = document.getElementById('outputText');
inputText.addEventListener('input', decript);
function decript() {
    let text = inputText.value.toLowerCase();
    let encrypted = '';
    let steps = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let index = alphabet.indexOf(char);
        
        if (index === -1) {
            encrypted += char;
            steps += `Шаг ${i + 1}: '${char}' не в алфавите, оставляем без изменений.`;
        } else {
            let newIndex = (index + 13) % 26;
            let newChar = alphabet[newIndex];
            encrypted += newChar;
            steps += `Шаг ${i + 1}: '${char}' → '${newChar}' (индекс ${index} → ${newIndex})`;
        }
    }
    outputText.value = encrypted;
    stepsDiv.innerText = steps;
};