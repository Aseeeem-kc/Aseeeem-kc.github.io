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
                I'm pursuing BSc. Computer Science Hons. I'm interested in AI, data science, and all things tech. I love diving into the world of algorithms, coding up innovative solutions, and exploring the endless possibilities that technology offers.<br><br>
                Whether it's developing web applications, analyzing data to uncover hidden insights, or experimenting with machine learning models, I'm always eager to learn and create. <br><br>
                Welcome to my portfolio, where you can check out my projects, skills, and journey in the exciting field of technology!<br><br>
                Contact me at ashimkc7297@gmail.com
            </p>
        </div>`;
}

// Function to load the portfolio section
function loadPortfolio() {
    mainContent.innerHTML = `
       <div class="projects-section">
    <div class="main-content">
        <h2>Projects</h2>
        <div class="cards-container">
            <div class="project-card">
                <div class="card-image">
                    <img src="images/upstart_poster.png" alt="Project Image">
                </div>
                <div class="card-info">
                    <h2 class="project-title">Upstart</h2>
                    <p class="project-stack">Python, Django, HTML, Tailwind, sqlite</p>
                </div>
                <div class="card-description">
                    <p>An online marketplace where every user can list and buy all categories of products.<br>Features: Authentication, CustomUser, CRUD actions, Image Gallery</p>
                </div>
                 <div class="icon-container">
                    <img style="height: 30px" src="images/github.png" alt="GitHub">
                    <img style="height: 30px" src="images/link_icon.png" alt="Link">
                </div>
            </div>
            
             

            
           
        </div>
    </div>
</div>


`;
}


// function to load blog
function loadBlog() {
    mainContent.innerHTML = `
        <div class="blogs-section">
        <h2>Blogs</h2> 
    <div class="main-content">
        <!-- Blogs Section -->
        
        <a style = "text-decoration:none" href = "https://allbachelor.com/2024/04/03/exploratory-data-analysis-overview-and-techniques/">
        <div class="blog-post">
            <div class="blog-image-section">
                <img src="images/eda-blog-poster.jpg" alt="Blog Image" class="blog-image">
            </div>
            <div class="title-desc-section">
                <h2 class="blog-title">Exploratory Data Analysis: Overview and Techniques</h2>
                <p class="blog-description">Get to know what Exploratory  Data Analysis (EDA) is and its technique along with a simple example on a dataset.</p>
            </div>
        </div>
        </a>
        <a style = "text-decoration:none" href = "https://medium.com/@ashimkc7297/reinforcement-learning-for-game-ai-1ffc8f612dda">
        <div class="blog-post">
            <div class="blog-image-section">
                <img src="images/reinforcement_learning_for_game_ai_poster.webp" alt="Blog Image" class="blog-image">
            </div>
            <div class="title-desc-section">
                <h2 class="blog-title">Reinforcement learning for GAME AI</h2>
                <p class="blog-description"> In this report, we try to know the roots of AI and game industries and explore one field where they collide, games that integrate reinforcement learning.</p>
            </div>
        </div>
        
    </div>
</div>
`;
}

// Add event listeners for buttons
const HomeButton = document.querySelector('.home-button');
const portfolioButton = document.querySelector('.portfolio-button');
const blogButton = document.querySelector('.blogs-button');


HomeButton.addEventListener('click', () => {
    loadHome();
});

portfolioButton.addEventListener('click', () => {
    loadPortfolio();
});

blogButton.addEventListener('click', () => {
    loadBlog();
});

