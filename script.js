function publishEndorsement() {
    const endorsementText = document.getElementById("endorsement-input").value;
    const endorsementResult = document.getElementById("endorsement-result");

    endorsementResult.textContent = endorsementText;
}