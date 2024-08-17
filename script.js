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
        <div class="portfolio-section">
            <div class="main-content">
                <!-- Project Section -->
                <div class="project-section">
                    <div class="project-image-section">
                        <img src="images/batman.jpg" alt="Project Image" class="project-image">
                    </div>
                    <div class="title-desc-section">
                        <h2 class="project-title">Project Title</h2>
                        <p class="project-description">Brief description of the project. Explain what the project is about, the technologies used, and any other relevant details.</p>
                    </div>
                </div>
                <div class="project-section">
                    <div class="project-image-section">
                        <img src="images/batman.jpg" alt="Project Image" class="project-image">
                    </div>
                    <div class="title-desc-section">
                        <h2 class="project-title">Project Title</h2>
                        <p class="project-description">Brief description of the project. Explain what the project is about, the technologies used, and any other relevant details.</p>
                    </div>
                </div>
                <div class="project-section">
                    <div class="project-image-section">
                        <img src="images/instagram.png" alt="Project Image" class="project-image">
                    </div>
                    <div class="title-desc-section">
                        <h2 class="project-title">Project Title</h2>
                        <p class="project-description">Brief description of the project. Explain what the project is about, the technologies used, and any other relevant details.</p>
                    </div>
                </div>
                <!-- Skillset Section -->
                <div class="skillset-section">
                    <h2 class="skillset-title">My Skillset</h2>
                    <div class="skill">
                        <p>Web Development- HTML, CSS, JS, PHP, FastAPI, Django</p>
                        <div class="skill-bar">
                            <div class="skill-level" style="width: 100%; background-color: #4CAF50;"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>Data Structures and algorithm</p>
                        <div class="skill-bar">
                            <div class="skill-level" style="width: 85%; background-color: #2196F3;"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>JavaScript</p>
                        <div class="skill-bar">
                            <div class="skill-level" style="width: 80%; background-color: #FF9800;"></div>
                        </div>
                    </div>
                    <!-- Add more skills as needed -->
                </div>
            </div>
        </div>`;
}

// Add event listeners for buttons
const HomeButton = document.querySelector('.home-button');
const portfolioButton = document.querySelector('.portfolio-button');

HomeButton.addEventListener('click', () => {
    loadHome();
});

portfolioButton.addEventListener('click', () => {
    loadPortfolio();
});

// Load home section by default when the page is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    loadHome();
});
