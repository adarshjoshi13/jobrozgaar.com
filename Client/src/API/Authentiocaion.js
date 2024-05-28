import axios from "axios";

class Authentication {
  constructor(url) {
    this.url = url;
  }

  async login(data) {
    try {
      const result = await axios.post(`${this.url}/sign-in`, data, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json', 
        },
      });

      console.log("Response from server:", result);

      return result;
    } catch (error) {
        if (error.response) {
          return error.response
          } else if (error.request) {
            console.error('No response received:', error.request);
            return null
          } else {
           return null 
          }
    }
  }
  

  async signup(data) {
    try {
      const result = await axios.post(`${this.url}/sign-up`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log("Response from server:", result);

      return result;
    } catch (error) {
        if (error.response) {
          console.log("data",error.response.data)
          return error.response
          } else if (error.request) {
            console.error('No response received:', error.request);
            return null
          } else {
           return null 
          }
    }
  }

  async VerifyAuth(){
    try {
      const result = await axios.get(`${this.url}/verify-auth`,{
        withCredentials: true
      })
      return result
    } catch (error) {
      if (error.response) {
        console.log("data",error.response)
        return error.response
        } else if (error.request) {
          console.error('No response received:', error.request);
          return null
        } else {
         return null 
        }
    }
  }

  async Logout(){
    try {
      const result = await axios.get(`${this.url}/logout`,{
        withCredentials: true
      })
      return result
    } catch (error) {
      if (error.response) {
        console.log("data",error.response)
        return error.response
        } else if (error.request) {
          console.error('No response received:', error.request);
          return null
        } else {
         return null 
        }
    }
  }


}

const auth = new Authentication('https://jobrozgaar-com-server.onrender.com/');

export default auth;
