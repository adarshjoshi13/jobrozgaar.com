import axios from "axios";
import { data } from "jquery";

class Employee {
  constructor(url) {
    this.url = url;
  }

  async PersonalProfile(images,data){
    console.log('check kijye sahab',data)
    try {

      const formData = new FormData();


Object.entries(data).forEach(([key, value]) => {
// Conditionally stringify only if the value is an object
// const serializedValue = typeof value === 'object' ? JSON.stringify(value) : value;

formData.append(key, value);
});

  // Append images to FormData
  images.forEach((image) => {
    formData.append(image.name, image.File);
  });


        const response = await axios.post(`${this.url}/personal-profile`,formData, {
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
  async EditPersonalProfile(data){
    console.log('thise is data',JSON.stringify(data))
    try {

       const response = await axios.put(`${this.url}/update-personal-profile`,JSON.stringify(data), {
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
          console.log("client side error ", error.request);
          console.log(error)
          return null
       }
      
    }
  }

   async getPersonalProfile(){
    try {
      const data = await axios.get(`${this.url}/get-personal-profile`,{
        withCredentials:true
      });
      console.log("data",data)
      return data;
    } catch (error) {
      if(error.response){
        console.log("server side error",error.response)
      }
      console.log("error while fectching destination",error);
     return null;
    }
  }
  async  getintialdata(){
    try {
      const data = await axios.get(`${this.url}/get-intialdata`,{
        withCredentials:true
      });
      console.log("data",data)
      return data;
    } catch (error) {
      if(error.response){
        console.log("server side error",error.response)
      }
      console.log("error while fectching destination",error);
     return null;
    }
  }

  async  AddWorkingEXprince(data){
    console.log('peeche ke values',data)
    try {

      const formData = new FormData();


Object.entries(data).forEach(([key, value]) => {
// Conditionally stringify only if the value is an object
// const serializedValue = typeof value === 'object' ? JSON.stringify(value) : value;

formData.append(key, value);
});
console.log('formmm',formData)
        const response = await axios.post(`${this.url}/work-experience`,JSON.stringify(data), {
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
  
  async AddEducationData(data){
    console.log('peeche ke values',data)
    try {

      const formData = new FormData();


Object.entries(data).forEach(([key, value]) => {
// Conditionally stringify only if the value is an object
// const serializedValue = typeof value === 'object' ? JSON.stringify(value) : value;

formData.append(key, value);
});
console.log('formmm',formData)
        const response = await axios.post(`${this.url}/education-details`,JSON.stringify(data), {
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


  async UpdateWorkingExperince(data){
    console.log('thise is data',JSON.stringify(data))
    try {

       const response = await axios.put(`${this.url}/work-experience-update`,JSON.stringify(data), {
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
          console.log("client side error ", error.request);
          console.log(error)
          return null
       }
      
    }
  }

  async ChangePassword(data){
    console.log('thise is data',JSON.stringify(data))
    try {

       const response = await axios.put(`${this.url}/change-password`,JSON.stringify(data), {
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
          console.log("client side error ", error.request);
          console.log(error)
          return null
       }
      
    }
  }

  async ProfilePic(image){
    try {
       const formdata = new FormData()
       formdata.append('ProfilePicture',image)
       
       const response = await axios.put(`${this.url}/update-profile-pic`,formdata, {
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
  
  async   GetRecommandJobs(query){
    console.log('dekhoserchquery',query)
    try {
      const data = await axios.get(`${this.url}/recommanded-jobs?${query}`,{
        withCredentials:true
      });
      console.log("data",data)
      return data;
    } catch (error) {
      if(error.response){
        console.log("server side error",error.response)
      }
      console.log("error while fectching destination",error);
     return null;
    }
  }

  async  JobDetails(id){
    console.log('dekhoserchquery',id)
    try {
      const data = await axios.get(`${this.url}/get-job-details/${id}`,{
        withCredentials:true
      });
      console.log("data",data)
      return data;
    } catch (error) {
      if(error.response){
        console.log("server side error",error.response)
      }
      console.log("error while fectching jobs dtails",error);
     return null;
    }
  }

  async  saveJob(id){
    console.log('dekhoserchquery',id)
    try {
      const data = await axios.post(`${this.url}/save-job/${id}`,{},{
        withCredentials:true,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log("data",data)
      return data;
    } catch (error) {
      if(error.response){
        console.log("server side error",error.response)
        return error.response
      }
      console.log("error while saving jobs",error);
     return null;
    }
  }
  

}

const employee = new Employee('https://jobrozgaar-com-server.onrender.com/employee');

export default employee;
