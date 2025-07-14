const output = document.getElementById("output");
const text = `INITIATION PROTOCOL: ENGAGED\n\nWelcome,\nThe first step into knowing who WE are starts now.`;

let i = 0;

function type() {
  if (i < text.length) {
    const char = text[i] === '\n' ? '<br>' : text[i];
    output.innerHTML += char;
    i++;
    setTimeout(type, 40);
  }
}

type();
