if (typeof window !== 'undefined') {
    const Navbarscroll = () => {
      const logo = document.querySelector(".logonav");
      const wrapper = document.querySelector(".navigation")
        if (window.scrollY > 50) {
            wrapper.classList.add("tinynav")
            wrapper.classList.remove("wrapper")
            logo.classList.add("tinylogo")
            logo.classList.remove("logo")
        } else {
            wrapper.classList.remove("tinynav")
            wrapper.classList.add("wrapper")
            logo.classList.add("logo")
            logo.classList.remove("tinylogo")
        }
    };
    window.addEventListener('scroll', Navbarscroll);
}