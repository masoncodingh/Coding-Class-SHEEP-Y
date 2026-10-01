const stars = document.querySelectorAll('.stars span');
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = star.getAttribute('data-value');
        stars.forEach(s => s.classList.remove('active'));
        for (let i = 0; i < selectedRating; i++) {
            stars[i].classList.add('active');
        }
    });
});

document.getElementById('submit-review').addEventListener('click', () => {
    const reviewText = document.getElementById('review-text').value;
    if (selectedRating === 0 || reviewText.trim() === '') {
        alert('Please select a star rating and write a review.');
        return;
    }
    alert(`Thank you! You rated us ${selectedRating} stars.`);
});
