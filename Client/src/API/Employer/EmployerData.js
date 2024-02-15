import axios from "axios";

class EmployerData {
  constructor(url) {
    this.url = url;
  }
  async JobDetails(data){
    console.log('peeche ke values',data)
    try {

      const formData = new FormData();


Object.entries(data).forEach(([key, value]) => {
// Conditionally stringify only if the value is an object
// const serializedValue = typeof value === 'object' ? JSON.stringify(value) : value;

formData.append(key, value);
});
console.log('formmm',formData)
        const response = await axios.post(`${this.url}/job-details`,JSON.stringify(data), {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }) 
        console.log("server response:",response)
        return response
    } catch (error) {
       if(error.response){
          console.log("server responed:",error.response)
          return error.response

       }
       else if(error.request){
          // console.log("client side error ", error.request);
          console.log(error)
          return null
       }
      
    }
  }
  
  async CandidateDetails(data){
    console.log('peeche ke values',data)
    try {
        const response = await axios.post(`${this.url}/candidate-requirement`,JSON.stringify(data), {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }) 
        console.log("server response:",response)
        return response
    } catch (error) {
       if(error.response){
          console.log("server responed:",error.response)
          return error.response

       }
       else if(error.request){
          // console.log("client side error ", error.request);
          console.log(error)
          return null
       }
      
    }
  }

  async CompanyVerifaction(images,data){
    console.log(images)
    try {

      const formData = new FormData();


Object.entries(data).forEach(([key, value]) => {
// Conditionally stringify only if the value is an object
const serializedValue = typeof value === 'object' ? JSON.stringify(value) : value;

formData.append(key, serializedValue);
});

  // Append images to FormData
  images.forEach((image) => {
    formData.append(image.name, image.File);
  });


        const response = await axios.post(`${this.url}/company-details`,formData, {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }) 
        console.log("server response:",response)
        return response
    } catch (error) {
       if(error.response){
          console.log("server responed:",error.response)
          return error.response

       }
       else if(error.request){
          // console.log("client side error ", error.request);
          console.log(error)
          return null
       }
      
    }
  }

async getEmployerData(){
  try {
    const response = await axios.get(`${this.url}/get-employer-data`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    }) 
    console.log("server response:",response)
    return response
  } catch (error) {
    if(error.response){
      console.log("server responed:",error.response)
      return error.response

   }
   else if(error.request){
      // console.log("client side error ", error.request);
      console.log(error)
      return null
   }
  }
}
  
}

const employerData = new EmployerData('http://localhost:3000/employer');

export default employerData;
