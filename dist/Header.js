function loadHTML(containerId, fileName) {
    fetch(fileName)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${fileName}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
            checkCurrentPage(); 
        })
        .catch(error => console.error('Error loading ' + fileName, error));
}

window.onload = function() {
    loadHTML('footer-container', 'Footer.html');
    loadHTML('navbar-container', 'Header.html'); 
    loadHTML('cart-icon', 'Carticon.html');  
};

function checkCurrentPage() {
    let pageTitle = document.title.toLowerCase(); 
    const homeLink = document.getElementById('home-link');
    const contactLink = document.getElementById('contact-link');
    const aboutLink = document.getElementById('about-link');
    const faqLink = document.getElementById('faq-link');
    const menuLink = document.getElementById('menu-link');
   
    
        if (pageTitle.includes("home")) {  
            homeLink.classList.add('border', 'rounded-lg', 'p-2');
            console.log("This is the Home Page");
        } else if (pageTitle.includes("contact")) { 
            contactLink.classList.add('border', 'rounded-lg', 'p-2');
            console.log("This is the contact Page");
        }else if (pageTitle.includes("about")) { 
            aboutLink.classList.add('border', 'rounded-lg', 'p-2');
            console.log("This is the About Page");
        }else if (pageTitle.includes("faq")) { 
            faqLink.classList.add('border', 'rounded-lg', 'p-2');
            console.log("This is the Faq Page");
        }else if (pageTitle.includes("menu")) { 
            menuLink.classList.add('border', 'rounded-lg', 'p-2');
            console.log("This is the Menu Page");
        }
         else {
            console.log("This is some other page");
        }
    
   
    
}
function displayItems() {
    const demo3Element = document.getElementById('demo3');
    
    if (demo3Element) {
      demo3Element.addEventListener('click', function() {
        const cartIcon = document.getElementById('cart-icon');
        if (cartIcon) {
          cartIcon.style.display = 'block'; 
        } else {
          console.log("cart-icon element not found!");
        }
      });
    } else {
      console.log("demo3 element not found!");
    }
  }
  
  // Call the function to set up the event listener
  displayItems();
  
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
