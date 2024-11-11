function searchsComponent() {}

function inputText({ defaultValue = "" }) {
  const div = document.createElement("div");
  const input = document.createElement("input");
  const inputResult = document.createElement("span");

  input.value = defaultValue;
  input.oninput = () => {
    inputResult.textContent = input.value;
  };

  // input.addEventListener("input", (e) => {
  //   inputResult.textContent = e.target.value;
  // });

  input.textContent = defaultValue;

  div.appendChild(input);
  div.appendChild(inputResult);

  return div;
}
document.body.appendChild(inputText({ defaultValue: "Texte" }));
document.body.appendChild(inputText({ defaultValue: "Texte" }));
document.body.appendChild(inputText({ defaultValue: "Texte" }));
document.body.appendChild(inputText({ defaultValue: "Texte" }));
document.body.appendChild(inputText({ defaultValue: "Texte" }));
document.body.appendChild(inputText({ defaultValue: "Texte" }));
document.body.appendChild(inputText({ defaultValue: "Texte" }));
document.body.appendChild(inputText({ defaultValue: "Texte" }));
document.body.appendChild(inputText({ defaultValue: "Texte" }));
