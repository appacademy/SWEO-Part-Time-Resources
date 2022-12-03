document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('date-selector').addEventListener('change', (e) => {
        const newDate = new Date(Date.parse(e.target.value));
        location.href = `/${newDate.getFullYear()}/${newDate.getMonth() + 1}/${
            newDate.getDate() + 1
        }`;
    });
});
