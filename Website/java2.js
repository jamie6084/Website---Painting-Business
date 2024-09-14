const sections = document.querySelectorAll('.section');

const options = {
    threshold: 0.5
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});