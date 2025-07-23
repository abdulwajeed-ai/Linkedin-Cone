import { GoogleLogin } from "@react-oauth/google";
const GoogleLoginComp = () => {
  const handleOnSucess = (credResponse) =>{
    console.log(credResponse)
  }
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse)=>handleOnSucess(credentialResponse) }
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default GoogleLoginComp; 
