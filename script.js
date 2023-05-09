
// Selecting elements
const inputTextArea = document.querySelector('.input-text-area');
const outputSection = document.querySelector('.output-section');
const outputTextArea = document.querySelector('.output-text-area');
const nothingHereMessageBox = document.querySelector('.nothing-here-message-box');
const btnEncrypt = document.querySelector('.btn-encrypt');
const btnDecrypt = document.querySelector('.btn-decrypt');
const btnCopy = document.querySelector('.btn-copy');

// Defining the matrix code
const matrixCode = [
  ['e', 'enter'],
  ['i', 'imes'],
  ['a', 'ai'],
  ['o', 'ober'],
  ['u', 'ufat']
];

// Encrypts the given text
function encrypt(text) {
  for (let i = 0; i < matrixCode.length; i++) {
    if (text.includes(matrixCode[i][0])) {
      text = text.replaceAll(matrixCode[i][0], matrixCode[i][1]);
    }
  }
  return text;
}

// Decrypts the given text
function decrypt(text) {
  for (let i = 0; i < matrixCode.length; i++) {
    if (text.includes(matrixCode[i][1])) {
      text = text.replaceAll(matrixCode[i][1], matrixCode[i][0]);
    }
  }
  return text;
}

// Updates the output section's content
function updateOutputSectionContent() {
  if (outputTextArea.value.length > 0) {
    outputSection.style.height = 'auto';
    outputTextArea.style.backgroundImage = 'none';
    nothingHereMessageBox.style.visibility = 'hidden';
    btnCopy.style.visibility = 'visible';
  } else {
    nothingHereMessageBox.style.visibility = 'visible';
    btnCopy.style.visibility = 'hidden';
    if (screen.width > 768) {
      outputTextArea.style.backgroundImage = 'url(images/searching.png)';
    }
  }
}

// Adjusts the height of the given text area to fit its content
function adjustTextAreaToText(element) {
  if (screen.width <= 768) {
    element.style.height = '1px';
    element.style.height = element.scrollHeight + 'px';
  }
}

// Processes the input text to encrypt and updates the output section's content
function processTextToEncrypt() {
  if (inputTextArea.value.length > 0) {
    outputTextArea.value = encrypt(inputTextArea.value.toLowerCase().trim());
    inputTextArea.value = '';
    updateOutputSectionContent();
    inputTextArea.style.height = '100%';
    adjustTextAreaToText(outputTextArea);
  }
}

// Processes the input text to decrypt and updates the output section's content
function processTextToDecrypt() {
  if (inputTextArea.value.length > 0) {
    outputTextArea.value = decrypt(inputTextArea.value.toLowerCase());
    inputTextArea.value = '';
    updateOutputSectionContent();
    inputTextArea.style.height = '100%';
    adjustTextAreaToText(outputTextArea);
  }
}

// Event listeners
btnEncrypt.addEventListener('click', processTextToEncrypt);
btnDecrypt.addEventListener('click', processTextToDecrypt);
btnCopy.addEventListener('click', () => navigator.clipboard.writeText(outputTextArea.value));
inputTextArea.addEventListener('keyup', () => adjustTextAreaToText(inputTextArea));
setInterval(updateOutputSectionContent, 1);
