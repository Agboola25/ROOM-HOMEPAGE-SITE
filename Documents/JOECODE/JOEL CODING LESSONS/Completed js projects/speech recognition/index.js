const convert = document.getElementById("convert");
const text = document.getElementById("text");

convert.addEventListener("click", () => {
  if (convert.innerHTML === "Voice to text") {
    const speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.addEventListener("result", (e) => {
      const translate = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript);
      text.innerHTML = translate;
    });

    if (speech == true) {
      recognition.start();
    }

    convert.innerHTML = "Restart";
  } else {
    text.innerHTML = "";
    convert.innerHTML = "Voice to text";
  }
});
