document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offset = targetElement.getBoundingClientRect().top;
                const duration = 1000; // Duração da animação 
                
                window.scrollTo({
                    top: offset,
                    behavior: "smooth", //cria uma animação de rolagem
                    duration: duration
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            header.classList.add("transparent");
        } else {
            header.classList.remove("transparent");
        }
    });
});