// GetGoogleUrl.js
function GetGoogleUrl() {
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
  
    const options = {
      redirect_uri: 'https://jobrozgaar-com-server.onrender.com/oauth/google',
      client_id: '653939059864-69sp52o11p4dmjv31p7m4tniapr2maji.apps.googleusercontent.com',
      access_type: 'offline',
      response_type: 'code',
      prompt: 'consent',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ].join(" ")
    };
  
    const qs = new URLSearchParams(options);
    return `${rootUrl}?${qs.toString()}`;
  }
  
  export default GetGoogleUrl;
  