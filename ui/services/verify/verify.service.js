import ApiService from "@/services/api/api.service";
import {saveToken,getToken} from "~/services/jwt/jwt.service";
const verifyUrl = "academic/verify"

const verifyService = {
  verify(token){
    saveToken(token);
    return ApiService.getBearer(`${verifyUrl}?token=${token}`);

  },
  verifyInPage(){
    let token = getToken();
    return ApiService.getBearer(`${verifyUrl}?token=${token}`).then((resp)=> {
      if(resp.statusCode === 401)
        window.location.href = "/";
    }).catch(()=> {
      window.location.href = "/";
    });
  }
}

export default verifyService;
