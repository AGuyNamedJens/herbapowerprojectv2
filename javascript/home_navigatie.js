if (typeof window !== 'undefined') {
    const Navbarscroll = () => {
      const logo = document.querySelector(".logonav");
      const wrapper = document.querySelector(".navigation")
        if (window.scrollY > 50) {
            wrapper.classList.add("white")
            wrapper.classList.remove("clear")
        } else {
            wrapper.classList.remove("white")
            wrapper.classList.add("clear")
        }
    };
    window.addEventListener('scroll', Navbarscroll);
}