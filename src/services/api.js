const randomApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

export const fetchRandomDrink = async () => {
  try {
    const response = await fetch(randomApiUrl);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Fetch a random drink failed");
    }
    return data.drinks[0];
  } catch (error) {
    console.error("Error fetching random drink:", error.message);
    throw error;
  }
};