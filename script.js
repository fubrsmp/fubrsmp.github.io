const discordjoin = document.getElementById("discordlink");
const javajoin = document.getElementById("javaip");
const bedrockjoin = document.getElementById("bedrockip");
const eaglerjoin = document.getElementById("eaglercraftlink");
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
eaglerjoin.addEventListener("click", function() {
    window.location.href = "/client.html";

});

