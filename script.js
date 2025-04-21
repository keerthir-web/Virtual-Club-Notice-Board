document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
const showMoreBtn = document.getElementById('showMoreBtn');
const showLessBtn = document.getElementById('showLessBtn');
const hiddenNotices = document.querySelectorAll('.notice-card.hidden');
showMoreBtn.addEventListener('click', function() {
    hiddenNotices.forEach(notice => {
        notice.classList.remove('hidden');
    });
    this.style.display = 'none';
    showLessBtn.style.display = 'inline-block';
});
showLessBtn.addEventListener('click', function() {
    hiddenNotices.forEach(notice => {
        notice.classList.add('hidden');
    });
    this.style.display = 'none';
    showMoreBtn.style.display = 'inline-block';
});