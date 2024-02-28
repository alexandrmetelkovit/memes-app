class API {
  constructor() {
    this.baseUrl = "https://api.imgflip.com";
    // this.apiUrl = "https://api.imgflip.com/get_memes";
  }

  fetchMemes() {
    return fetch(`${this.baseUrl}/get_memes`)
      .then((response) => {
        if (!response.ok) return;

        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //   fetchMemes() {
  //     return fetch(this.apiUrl)
  //         .then(data => data.json())
  // }
}
