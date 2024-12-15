// Alterna o menu dropdown
function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  }
  
  // Fecha o menu dropdown ao clicar fora dele
  window.onclick = function (event) {
    const dropdownMenu = document.getElementById("dropdown-menu");
    if (!event.target.matches(".dropdown-btn")) {
      dropdownMenu.style.display = "none";
    }
  };
  
  // Funções de conversão permanecem as mesmas (já otimizadas)
  function convertTextToBinary() {
    const input = document.getElementById("input").value.trim();
    if (!input) return displayResult("Por favor, insira um texto válido.");
    const binary = input
      .split("")
      .map(char => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
    addToHistory(`Texto: ${input}`, `Binário: ${binary}`);
    displayResult(binary);
  }
  
  function convertBinaryToText() {
    const input = document.getElementById("input").value.trim();
    if (!isBinary(input)) return displayResult("Por favor, insira um binário válido.");
    const text = input
      .split(" ")
      .map(bin => String.fromCharCode(parseInt(bin, 2)))
      .join("");
    addToHistory(`Binário: ${input}`, `Texto: ${text}`);
    displayResult(text);
  }
  
  function convertDecimalToBinary() {
    const input = document.getElementById("input").value.trim();
    if (isNaN(input)) return displayResult("Por favor, insira um número válido.");
    const binary = Number(input).toString(2);
    addToHistory(`Decimal: ${input}`, `Binário: ${binary}`);
    displayResult(binary);
  }
  
  function convertBinaryToDecimal() {
    const input = document.getElementById("input").value.trim();
    if (!isBinary(input)) return displayResult("Por favor, insira um binário válido.");
    const decimal = parseInt(input, 2);
    addToHistory(`Binário: ${input}`, `Decimal: ${decimal}`);
    displayResult(decimal);
  }
  
  function isBinary(input) {
    return /^[01\s]+$/.test(input);
  }
  
  function displayResult(text) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = text;
    resultDiv.classList.add("show");
    setTimeout(() => resultDiv.classList.remove("show"), 2000);
  }
  
  // Histórico
  const history = [];
  function addToHistory(input, output) {
    history.unshift({ input, output });
    if (history.length > 5) history.pop();
    updateHistoryUI();
  }
  
  function updateHistoryUI() {
    const historyDiv = document.getElementById("history");
    historyDiv.innerHTML = history
      .map(entry => `<p><strong>${entry.input}</strong> → ${entry.output}</p>`)
      .join("");
  }
  
  // Tema
  function toggleTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  }
  
  document.body.classList.add(localStorage.getItem("theme") || "light");
  