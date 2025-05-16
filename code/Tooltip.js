function waitForTooltipAndInit() {
    const tooltip = document.querySelector(".custom-tooltip");

    if (!tooltip) {
        requestAnimationFrame(waitForTooltipAndInit);
        return;
    }

    document.body.addEventListener("mouseover", (e) => {
        const target = e.target.closest("[tooltip]");
        if (target) {
            console.log("Tooltip target found:", target);
            tooltip.textContent = target.getAttribute("tooltip");
            tooltip.style.opacity = "1";
        }
    });

    document.body.addEventListener("mousemove", (e) => {
        const target = e.target.closest("[tooltip]");
        if (target) {
            tooltip.style.left = `${e.pageX + 20}px`;   // 20px to the right
            tooltip.style.top = `${e.pageY - 30}px`;    // 30px above
        }
    });

    document.body.addEventListener("mouseout", (e) => {
        if (e.target.closest("[tooltip]")) {
            tooltip.style.opacity = "0";
        }
    });
}

document.addEventListener("DOMContentLoaded", waitForTooltipAndInit);