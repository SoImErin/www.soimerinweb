document.addEventListener('DOMContentLoaded', function () {
    const pageSize = 4; // or 5
    const projectList = document.querySelector('.paginated-projects-list');
    const projectCards = Array.from(projectList.children);
    const totalPages = Math.ceil(projectCards.length / pageSize);
    const topControls = document.querySelector('.pagination-controls.top');
    const bottomControls = document.querySelector('.pagination-controls.bottom');

    let currentPage = 1;

    function showPage(page) {
        currentPage = page;

        projectCards.forEach((card, index) => {
            if (index >= (page - 1) * pageSize && index < page * pageSize) {
                card.classList.add('activePage');
            } else {
                card.classList.remove('activePage');
            }
        });

        // renderPagination(topControls);
        renderPagination(bottomControls);
    }

    function renderPagination(container) {
        container.innerHTML = '';
        const prevBtn = document.createElement('button');
        prevBtn.textContent = '<';
        prevBtn.disabled = currentPage === 1;
        prevBtn.onclick = () => showPage(currentPage - 1);
        container.appendChild(prevBtn);

        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.textContent = i;

            if (i === currentPage) {
                pageBtn.disabled = true;
                pageBtn.classList.add('active');
            }

            pageBtn.onclick = () => showPage(i);
            container.appendChild(pageBtn);
        }

        const nextBtn = document.createElement('button');
        nextBtn.textContent = '>';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.onclick = () => showPage(currentPage + 1);
        container.appendChild(nextBtn);
    }

    showPage(1); // initial page load
});
