# Weather-Based Outfit Generator

This project is a **Weather-Based Outfit Generator** that provides outfit suggestions based on the current weather conditions for a selected city. The user can choose their gender and input a city to receive customized outfit recommendations. Additionally, the project provides a sunscreen recommendation based on the UV index retrieved from the weather data.

## Features

- **Weather Data Retrieval**: Utilizes a weather API to fetch real-time weather information (temperature, rain, UV index, etc.) for any city the user searches.
- **Outfit Suggestions**: Recommends weather-appropriate outfits for both males and females. The suggestions are tailored to weather conditions like rain and no rain.
- - **City and Gender Selection**: The user can select a city and gender (Male/Female) to get relevant outfit suggestions.
- **Sunscreen Recommendation**: Based on the UV index from the weather API, the app will suggest whether sunscreen is necessary.

## How It Works

1. **City Selection**: The user enters the name of a city they want the weather information for.
2. **Gender Selection**: The user selects either "Male" or "Female."
3. **Weather Fetching**: The app fetches the weather conditions (rain or no rain, temperature, UV index, etc.) for the selected city using a weather API.
4. **Outfit Recommendation**: Based on the weather and gender, a random outfit is chosen from a pre-defined 2D array containing different varieties of weather-related outfits.
5. **Sunscreen Advice**: If the UV index exceeds a certain threshold, the app recommends using sunscreen.

## Technologies Used

- **HTML/CSS**: Frontend structure and styling.
- **NodeJS with ExpressJS**:Server Side Backend Logic for fetching weather data and generating outfit suggestions.
- **Weather API**: Fetches real-time weather conditions.
- **VS Code**: Code editor used for development.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/weather-outfit-generator.git
```

2. Navigate to the project directory:

```bash
cd weather-outfit-generator
```

3. Install the necessary dependencies if any.

4. Replace the Weather API key with your own in the JavaScript code.

```javascript
const apiKey = 'your-weather-api-key';
```

5. Run the project in your local environment using any live server or directly by opening the HTML file.

## Usage

1. Open the app in your browser.
2. Enter a city name and select a gender (Male/Female).
3. Click on the "Get Outfit" button.
4. The app will display a weather-based outfit recommendation along with advice on whether to use sunscreen.

## Future Improvements

- Add options for more weather conditions (e.g., snow, windy).
- Include more diverse outfit combinations for different styles (casual, formal, etc.).
- Add a database to store outfit data dynamically.
- Implement user login functionality for a personalized experience.

## Contribution

Feel free to contribute to this project! You can:

1. Fork the repository.
2. Create a new branch for your feature.
3. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to modify this based on any additional features or technologies you used!
