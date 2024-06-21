COVID-19 Dynamic Dashboard
Overview
This project is an interactive and visually appealing dashboard built using React. The dashboard presents COVID-19 statistics, demonstrating skills in React development, including component structure, state management, and UI design.

Features
Header Section: Displays the title and a brief description of the dashboard’s purpose.
Data Visualization: Includes a Bar Chart and a Pie Chart to visualize COVID-19 data.
Interactive Elements: Features a dropdown menu for selecting different countries.
Responsive Design: The dashboard is fully responsive, working well on both desktop and mobile devices.
Styling and UX: Custom CSS is used to style the dashboard, ensuring a visually appealing and user-friendly experience.
Technologies Used
React: For building the user interface.
Chart.js: For data visualization.
Fetch API: For fetching COVID-19 data from a public API.
CSS: For styling and responsive design.
Getting Started
Prerequisites
Ensure you have the following installed on your local development environment:

Node.js
npm (Node Package Manager)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/react-dashboard.git
cd react-dashboard
Install the dependencies:

bash
Copy code
npm install
Running the Application
Start the development server:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to view the dashboard.

Project Structure
css
Copy code
react-dashboard/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── BarChart.js
│   │   ├── CountrySelector.js
│   │   ├── Dashboard.js
│   │   ├── Header.js
│   │   └── PieChart.js
│   │
│   ├── App.css
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md
Components
Header: Displays the title and description.
BarChart: Displays a bar chart of COVID-19 cases and deaths.
PieChart: Displays a pie chart of COVID-19 cases, deaths, and recoveries.
CountrySelector: Dropdown menu for selecting countries.
Dashboard: Main component that integrates all other components and fetches data.
API
The dashboard fetches data from the disease.sh API:

Global data: https://disease.sh/v3/covid-19/all
Country-specific data: https://disease.sh/v3/covid-19/countries/{country}
