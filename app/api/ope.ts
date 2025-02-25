// KEY - 34dd178f-03dc-4d01-bf3b-967f4279d76c





async function fetchData(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was an error!', error);
      throw error;
    }
  }
  
  fetchData('https://api.example.com/data')
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));