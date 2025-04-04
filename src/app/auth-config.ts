// src/app/auth-config.ts
// src/app/auth-config.ts
export const msalConfig = {
    auth: {
      clientId: 'YOUR_CLIENT_ID',
      authority: 'https://yourtenant.b2clogin.com/yourtenant.onmicrosoft.com/B2C_1_SignUpSignIn',
      knownAuthorities: ['yourtenant.b2clogin.com'],
      redirectUri: '/',
      postLogoutRedirectUri: '/'
    },
    cache: {
      cacheLocation: 'localStorage',
      storeAuthStateInCookie: false
    }
  };
  
  
  export const loginRequest = {
    scopes: ['openid', 'profile']
  };
  
  export const protectedResources = {
    api: {
      endpoint: 'https://your-api-endpoint.azurewebsites.net/api',
      scopes: ['https://yourtenant.onmicrosoft.com/api/access']
    }
  };
  