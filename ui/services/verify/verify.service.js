import ApiService from "@/services/api/api.service";
import {saveToken} from "~/services/jwt/jwt.service";
const verifyUrl = "academic/verify"

const verifyService = {
  verify(token){
    saveToken(token);
    return ApiService.getBearer(`${verifyUrl}?token=${token}`);

  }
}

export default verifyService;
