window.addEventListener("DOMContentLoaded", event => {
    const mirroredDiv = document.getElementById("mirrored");
    const originalText = document.getElementById("original");
    originalText.addEventListener("input", event => {
        let text = originalText.value;
        // make the new mirror the original text, so change will reflect
        mirroredDiv.innerText = text;

    })
});