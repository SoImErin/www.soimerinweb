document.addEventListener("DOMContentLoaded", () => {
    const tooltip = document.querySelector(".custom-tooltip");

    document.body.addEventListener("mouseover", (e) => {
        const target = e.target.closest("[tooltip]");
        if (!target) return;

        const text = target.getAttribute("tooltip");
        if (!text) return;

        tooltip.textContent = text;
        tooltip.style.opacity = "1";

        const moveHandler = (e) => {
            const tooltipRect = tooltip.getBoundingClientRect();
            let left = e.clientX;
            let top = e.clientY - 20;

            tooltip.style.left = `${left}px`;
            tooltip.style.top = `${top}px`;
        };

        const leaveHandler = () => {
            tooltip.style.opacity = "0";
            document.removeEventListener("mousemove", moveHandler);
            target.removeEventListener("mouseleave", leaveHandler);
        };

        document.addEventListener("mousemove", moveHandler);
        target.addEventListener("mouseleave", leaveHandler);
    });
});
