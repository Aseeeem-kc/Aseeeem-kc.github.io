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
                    <img src="images/project1.jpg" alt="Project Image">
                </div>
                <div class="card-info">
                    <h2 class="project-title">Project Title</h2>
                    <p class="project-stack">Stack Used: HTML, CSS, JavaScript</p>
                </div>
                <div class="card-description">
                    <p>Brief description of the project. Explain what the project is about, the technologies used, and any other relevant details.</p>
                </div>
            </div>
            <div class="project-card">
                <div class="card-image">
                    <img src="images/linkedin.png" alt="Project Image">
                </div>
                <div class="card-info">
                    <h2 class="project-title">Project Title</h2>
                    <p class="project-stack">Stack Used: Python, Django</p>
                </div>
                <div class="card-description">
                    <p>Brief description of the project. Explain what the project is about, the technologies used, and any other relevant details.</p>
                </div>
            </div>
             <div class="project-card">
                <div class="card-image">
                    <img src="images/linkedin.png" alt="Project Image">
                </div>
                <div class="card-info">
                    <h2 class="project-title">Project Title</h2>
                    <p class="project-stack">Stack Used: Python, Django</p>
                </div>
                <div class="card-description">
                    <p>Brief description of the project. Explain what the project is about, the technologies used, and any other relevant details.</p>
                </div>
            </div>
             <div class="project-card">
                <div class="card-image">
                    <img src="images/linkedin.png" alt="Project Image">
                </div>
                <div class="card-info">
                    <h2 class="project-title">Project Title</h2>
                    <p class="project-stack">Stack Used: Python, Django</p>
                </div>
                <div class="card-description">
                    <p>Brief description of the project. Explain what the project is about, the technologies used, and any other relevant details.</p>
                </div>
            </div>
            <!-- Add more cards as needed -->
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
        
        <div class="blog-post">
            <div class="blog-image-section">
                <img src="images/batman.jpg" alt="Blog Image" class="blog-image">
            </div>
            <div class="title-desc-section">
                <h2 class="blog-title">Blog Title</h2>
                <p class="blog-description">Brief summary of the blog post. Introduce the topic, discuss the key points, and provide a compelling reason for readers to dive into the full post.</p>
            </div>
        </div>
        <div class="blog-post">
            <div class="blog-image-section">
                <img src="images/batman.jpg" alt="Blog Image" class="blog-image">
            </div>
            <div class="title-desc-section">
                <h2 class="blog-title">Blog Title</h2>
                <p class="blog-description">Brief summary of the blog post. Introduce the topic, discuss the key points, and provide a compelling reason for readers to dive into the full post.</p>
            </div>
        </div>
        <div class="blog-post">
            <div class="blog-image-section">
                <img src="images/instagram.png" alt="Blog Image" class="blog-image">
            </div>
            <div class="title-desc-section">
                <h2 class="blog-title">Blog Title</h2>
                <p class="blog-description">Brief summary of the blog post. Introduce the topic, discuss the key points, and provide a compelling reason for readers to dive into the full post.</p>
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

