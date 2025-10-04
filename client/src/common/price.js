const priceRange = () => {
  const slider = document.getElementById("slider");
  if (!slider) {
    console.warn("[priceRange] #slider tapılmadı, init dayandırıldı.");
    return;
  }

  if (typeof noUiSlider === "undefined") {
    console.warn("[priceRange] noUiSlider yüklənməyib/import olunmayıb.");
    return;
  }

  noUiSlider.create(slider, {
    start: [0, 171],
    connect: true,
    range: { min: 0, max: 171 },
  });

  const minEl = document.getElementById("min");
  const maxEl = document.getElementById("max");

  slider.noUiSlider.on("update", (values) => {
    const [v1, v2] = values.map(v => Math.floor(Number(v)));
    if (minEl) minEl.textContent = v1;
    if (maxEl) maxEl.textContent = v2;
  });
};

export default priceRange;
