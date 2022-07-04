// https://css-tricks.com/the-complete-guide-to-lazy-loading-images/
document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages: NodeListOf<HTMLElement>;

    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");

        const imageObserver: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]): void => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    const image = entry.target as HTMLElement;
                    image.classList.remove("lazy");
                    imageObserver.unobserve(image);
                }
            });
        });
        lazyloadImages.forEach((image: HTMLElement): void => {
            imageObserver.observe(image);
        });
    } else {
        var lazyloadThrottleTimeout:number;
        lazyloadImages = document.querySelectorAll(".lazy");

        function lazyload(){
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }

            lazyloadThrottleTimeout = setTimeout(function (): void {
                var scrollTop:number = window.pageYOffset;
                lazyloadImages.forEach(function (img: HTMLElement): void {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.setAttribute("src", img.dataset.src); 
                        img.classList.remove('lazy');
                    }
                });
                if (lazyloadImages.length == 0) {
                    document.removeEventListener("scroll", lazyload);
                    window.removeEventListener("resize", lazyload);
                    window.removeEventListener("orientationChange", lazyload);
                }
            }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    }

});
