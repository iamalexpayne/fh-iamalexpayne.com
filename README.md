
# My Personal Website & Resume

Welcome to my personal website and resume, built using the FastHTML framework. This site serves as a digital portfolio showcasing my professional background, skills, and accomplishments. It is designed to be lightweight, responsive, and easy to navigate.

## Features

- **Clean and Simple Design**: Focused on readability and ease of navigation.
- **Interactive Elements**: Leveraging HTMX for dynamic content updates without requiring extensive JavaScript.
- **Responsive Layout**: Optimized for viewing on both desktop and mobile devices.
- **Fully Python-Based**: Built entirely using Python, showcasing the power and simplicity of FastHTML.

## Technologies Used

- **FastHTML**: A Python framework that allows for fast and scalable web application development.
- **HTMX**: Enables dynamic interactions on the page with minimal JavaScript.
- **Pico CSS**: A lightweight CSS framework that provides a clean and modern aesthetic.

## Installation and Setup

To run this site locally, you'll need to set up a Python environment and install the necessary dependencies.

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
\`\`\`

### 2. Set Up a Virtual Environment

\`\`\`bash
python -m venv venv
\`\`\`

### 3. Activate the Virtual Environment

- **On Windows**:
  \`\`\`bash
  .\venv\Scripts\activate
  \`\`\`
- **On macOS/Linux**:
  \`\`\`bash
  source venv/bin/activate
  \`\`\`

### 4. Install Dependencies

\`\`\`bash
pip install -r requirements.txt
\`\`\`

### 5. Run the Application

\`\`\`bash
python main.py
\`\`\`

After running the above command, open your web browser and navigate to \`http://localhost:5001\` to view the site.

## Deploying to GitHub Pages

Since this site is designed to be hosted on GitHub Pages, follow these steps to deploy it:

1. **Generate Static Files**: If necessary, generate the static files for your site by running the application and saving the rendered output.
2. **Push to GitHub**: Ensure your static files are placed in the \`docs\` directory and push your changes to the \`main\` branch.
3. **Enable GitHub Pages**: In your repository settings, set the GitHub Pages source to the \`docs\` folder on the \`main\` branch.
4. **Custom Domain (Optional)**: If you have a custom domain, configure it in your DNS settings and update your repository’s GitHub Pages settings accordingly.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the FastHTML community for the continuous development and support of this framework.
- Special thanks to the creators of HTMX and Pico CSS for providing such amazing tools.
