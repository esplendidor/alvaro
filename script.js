const api = "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";
async function getCompletion(prompt) {
  const response = await fetch(`https://api.openai.com/v1/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: "información de "+ prompt,
      max_tokens: 150,
    }),
  });

  const data = await response.json();
  return data;
}
const prompt = document.querySelector("#prompt");
const button = document.querySelector("#bot");
const res = document.querySelector("#resl");
button.addEventListener("click", async () => {
  const response = await getCompletion(prompt.value);
  res.innerHTML = response.choices[0].text;
});