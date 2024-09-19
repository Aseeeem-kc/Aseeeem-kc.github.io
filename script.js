// Load home section by default when the page is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    loadHome();
});


const mainContent = document.querySelector('.content');

// Function to load the home section
function loadHome() {
    mainContent.innerHTML = `
        <div class="home-content">
            <h1>Hello!</h1>
            <p>I'm Ashim, a computer science student and AI enthusiast living in Kathmandu, Nepal.<br><br>
                Currently pursuing a BSc in Computer Science Hons, I have a keen interest in AI, data science, and technology. I enjoy exploring algorithms, coding innovative solutions, and discovering the vast possibilities that technology offers.<br><br>
                Whether it's developing web applications, analyzing data for insights, experimenting with machine learning models or exploring web3, I'm always eager to learn and create.<br><br>
                Feel free to contact me at ashimkc7297@gmail.com and get connect in the platforms below. 
            </p>
        </div>`;
}

