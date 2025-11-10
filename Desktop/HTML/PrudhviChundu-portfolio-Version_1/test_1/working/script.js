window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");
  const terraformText = document.getElementById("terraform-text");

  const terraformData = `locals {
  DevOps = { 
    name       = "Prudhvi Chundu" 
    experience = "4 years" 
    passion    = "DevOps Engineer, SRE" 
  }
}`;

  let i = 0;
  const speed = 8; // increase this value to speed up typing

  function typeEffect() {
    if (i < terraformData.length) {
      terraformText.textContent += terraformData.charAt(i);
      i++;
      setTimeout(typeEffect, speed);
    } else {
      setTimeout(() => {
        loader.classList.add("hidden");
        mainContent.style.display = "block";
      }, 1000); // wait 1s before showing main content
    }
  }

  typeEffect();
});
