class API {
  constructor() {
    this.baseUrl = "https://api.imgflip.com";
  }

  fetchMemes() {
    return fetch(`${this.baseUrl}/get_memes`)
      .then((response) => {
        if (!response.ok) {
          return;
        }
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
