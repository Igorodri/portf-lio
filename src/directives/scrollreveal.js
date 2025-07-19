import ScrollReveal from 'scrollreveal';

export default {
  mounted(el) {
    ScrollReveal().reveal(el, {
      reset: true,                
      distance: '200px',           
      duration: 1000,             
      delay: 200,                 
      origin: 'left',
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
      mobile: true
    });
  }
};
