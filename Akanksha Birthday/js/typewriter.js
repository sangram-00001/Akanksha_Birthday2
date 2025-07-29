const message = `
Dear Akanksha,

On this special day, I just want to say...
You light up every room you walk into 🌟

You’ve made my life brighter with your friendship, your kindness, and your beautiful soul 💖

Here’s to laughter, memories, and endless reasons to smile 😊

Happy Birthday to the most amazing girl I know! 🎉

Yours always,
Sangram 💫
`;

let index = 0;
function typeWriter() {
  if (index < message.length) {
    document.getElementById("message").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}
window.onload = typeWriter;