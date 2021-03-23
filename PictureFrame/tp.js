var control = document.querySelectorAll(".slider");
// console.log();
function handle() {
  let suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
control.forEach(cont => cont.addEventListener("change", handle));
// control.forEach(cont => cont.addEventListener("mouseover", handle));
