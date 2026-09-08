document.addEventListener("DOMContentLoaded", function () {

    const imageInput = document.getElementById("editImage");
    const imagePreview = document.getElementById("imagePreview");
    const previewIcon = document.getElementById("previewIcon");

    imageInput.addEventListener("input", function () {
        imagePreview.src = this.value;

        imagePreview.classList.remove("hidden");
        previewIcon.classList.add("hidden");
    });
});