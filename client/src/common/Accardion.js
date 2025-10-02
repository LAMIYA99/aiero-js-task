const accardions = () => {
    const firstTab = document.querySelectorAll("#firstAcc");
    const ACC_CONTENT = document.querySelectorAll("#accardion_content");
    const ACC_ICON = document.querySelectorAll(".icons");
  
    firstTab.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        const acc = ACC_CONTENT[idx];
        acc.classList.toggle("max-h-0");
        acc.classList.toggle("max-h-50");
        ACC_ICON[idx].classList.toggle("rotate-45");
      });
    });
  };
  
  
export default accardions;