if (typeof window !== 'undefined') {
    const Navbarscroll = () => {
      const logo = document.querySelector(".logonav");
      const wrapper = document.querySelector(".navigation")
        if (window.scrollY > 50) {
            wrapper.classList.add("white")
            wrapper.classList.remove("clear")
            logo.classList.add("tinylogo")
            logo.classList.remove("logo")
        } else {
            wrapper.classList.remove("white")
            wrapper.classList.add("clear")
            logo.classList.add("logo")
            logo.classList.remove("tinylogo")
        }
    };
    window.addEventListener('scroll', Navbarscroll);
}