
document.addEventListener('DOMContentLoaded', () => {
    /* ### Login Popup ### */
    try {
      const wrapper5 = document.querySelector('.wrapper');
      const btnPopup = document.querySelector('.btnLogin-popup');
  
      if (btnPopup && wrapper5) {
        if (!btnPopup.hasAttribute('data-listener-added')) {
          btnPopup.addEventListener('click', () => {
            wrapper5.classList.add('active-popup');
          });
          btnPopup.setAttribute('data-listener-added', 'true');
        }
      } else {
        console.warn('Login popup elements are missing.');
      }
    } catch (error) {
      console.error('Error initializing login popup:', error);
    }
  
    /* ### Gallery Carousel ### */
    try {
      const nextDom = document.getElementById('next');
      const prevDom = document.getElementById('prev');
      const carouselDom = document.querySelector('.carousel');
      const sliderList = carouselDom?.querySelector('.list');
      const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
      const thumbnailItems = thumbnailBorderDom?.querySelectorAll('.item');
      const timeRunning = 3000;
      const timeAutoNext = 7000;
      let currentIndex = 0;
  
      if (carouselDom && sliderList && thumbnailBorderDom) {
        thumbnailBorderDom.appendChild(thumbnailItems[0].cloneNode(true));
        let isCarouselRunning = true;
  
        function showSlider(type) {
          try {
            const sliderItems = sliderList.querySelectorAll('.item');
            if (type === 'next') {
              currentIndex = (currentIndex + 1) % sliderItems.length;
            } else {
              currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
            }
  
            sliderList.appendChild(sliderItems[currentIndex]);
            thumbnailBorderDom.appendChild(thumbnailItems[currentIndex].cloneNode(true));
  
            carouselDom.classList.add(type);
            setTimeout(() => carouselDom.classList.remove(type), timeRunning);
  
            if (isCarouselRunning) {
              setTimeout(() => showSlider('next'), timeAutoNext);
            }
          } catch (error) {
            console.error('Error in showSlider function:', error);
          }
        }
  
        nextDom?.addEventListener('click', () => showSlider('next'));
        prevDom?.addEventListener('click', () => showSlider('prev'));
        setTimeout(() => showSlider('next'), timeAutoNext);
      } else {
        console.warn('Carousel elements are missing.');
      }
    } catch (error) {
      console.error('Error initializing carousel:', error);
    }
  });
  
/* ### Sidebar  ### */

const Sidebar = document.querySelector('.siderbar');
const togglebtn = document.querySelector('.toggle-btn');

togglebtn.addEventListener('click', () => {
    Sidebar.classList.toggle('active');
});


/*  ### Dash-Toggle ### */
document.addEventListener('DOMContentLoaded', () => {
    // Select the ion-icon element
    const ionIcon = document.querySelector('ion-icon[name="add-outline"]');
  
    if (ionIcon) {
      // Add a click event listener
      ionIcon.addEventListener('click', () => {
        // Toggle a rotation class to add/remove rotation effect
        ionIcon.classList.toggle('rotated');
      });
    }
  });
  


