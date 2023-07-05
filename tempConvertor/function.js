      const form = document.querySelector("form");
      const resultArea = document.querySelector(".result p:nth-child(2)");
      const convert2F = degree => (degree * 1.8 + 32).toFixed(2);
      const convert2C = degree => ((degree - 32) * 0.5556).toFixed(2);
      const submitHandler = e => {
        e.preventDefault();
        const degrees = Number(e.target.degrees.value) || 0;
        const type = e.target.type.value;
        const strategy = {
          C: convert2F,
          F: convert2C,
        };
        const result = strategy[type](degrees);
        resultArea.innerHTML = `${result} ${type === "C" ? "&#8457" : " &#8451"}`;
      };
      form.addEventListener("submit", submitHandler);