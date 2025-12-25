const discordjoin = document.getElementById("discordlink");
const javajoin = document.getElementById("javaip");
const bedrockjoin = document.getElementById("bedrockip");
const eaglerplay = document.getElementById("eaglerip");
const eaglerjoin = document.getElementById("eaglerlink");
discordjoin.addEventListener("click", function() {
    window.location.href = "https://discord.gg/JrvGFTauq3";
});
javajoin.addEventListener("click", function() {
    navigator.clipboard.writeText("safety-submission.gl.joinmc.link");
    javajoin.textContent = "Copied!";
});
bedrockjoin.addEventListener("click", function() {
    navigator.clipboard.writeText("sources-equivalent.gl.at.ply.gg");
    bedrockjoin.textContent = "Copied!";
});
eaglerplay.addEventListener("click", function() {
    navigator.clipboard.writeText("wss://infinite-suitably-gobbler.ngrok-free.app");
    eaglerjoin.textContent = "Copied!";
});
eaglerjoin.addEventListener("click", function() {
    window.location.href = "/client.html";
});
