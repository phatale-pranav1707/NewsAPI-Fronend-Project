# News App

## Overview

The News App is a simple web application that fetches and displays news articles based on user input and predefined categories. The application uses the NewsAPI to get the latest news articles and displays them in a user-friendly card format.

## Features

- Fetch and display news articles based on predefined categories (IPL, Finance, Politics).
- Search for news articles using custom keywords.
- Responsive design with a clean and modern UI.
- Click on a news card to open the full article in a new tab.

## Technologies Used

- HTML
- CSS
- JavaScript
- [NewsAPI](https://newsapi.org/)


### `index.html`

The HTML file contains the structure of the web application, including the navigation bar, search bar, and the template for news cards.

### `style.css`

The CSS file contains styles for the various components of the application, ensuring a consistent and visually appealing design.

### `script.js`

The JavaScript file handles the fetching of news data from the API, binding data to the DOM elements, and managing user interactions.

## Setup

1. Clone the repository or download the files to your local machine.
2. Open `index.html` in your favorite web browser.

## Usage

1. Upon loading the app, it will display news articles related to "India" by default.
2. Click on any category (IPL, Finance, Politics) in the navigation bar to fetch and display news articles related to that category.
3. Use the search bar to find news articles based on custom keywords. Enter a keyword and click the "Search" button.
4. Click on any news card to open the full article in a new tab.

## Code Explanation

### HTML Structure (`index.html`)

- **Navigation Bar**: Contains the company logo, predefined category links, and a search bar.
- **Main Section**: Contains a container for the news cards.
- **Template**: A hidden template element used to clone and display news cards dynamically.

### CSS Styles (`style.css`)

- **Global Styles**: Defines global styles, including font imports, variables, and base styles.
- **Navigation Bar**: Styles for the navigation bar, including the company logo, category links, and search bar.
- **Main Section**: Styles for the main container and the news cards.
- **News Card**: Styles for the individual news cards, including hover effects.

### JavaScript Functionality (`script.js`)

- **API Key and URL**: Defines the API key and base URL for fetching news articles.
- **Fetch News**: Fetches news articles based on the query and binds the data to the DOM elements.
- **Bind Data**: Binds the fetched data to the news card template and appends the cards to the container.
- **Fill Data in Card**: Fills the news card template with data from the fetched articles.
- **Navigation Item Click**: Fetches news articles based on the clicked category and updates the active class.
- **Search Functionality**: Fetches news articles based on the search input and updates the navigation bar with the searched keyword.
- **Reload Function**: Reloads the page to reset the application state.

## Diagrams

### Click on IPL, Finance, or Politics

When a user clicks on one of the categories (IPL, Finance, Politics):

1. The `navitemclick(id)` function is triggered.
2. This function calls `fetchnews(id)` with the respective category.
3. News articles related to the selected category are fetched and displayed.


### Click on Search Button

When a user enters a keyword and clicks on the search button:

1. The search button's click event triggers a function.
2. The function reads the input value and calls `fetchnews(query)` with the keyword.
3. News articles related to the search query are fetched and displayed.
4. The searched keyword is added to the navigation bar.






