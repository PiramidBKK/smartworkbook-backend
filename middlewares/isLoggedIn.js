import { getTokenFromHeader } from "../utils/getTokenFromHeaders.js";
import { verifyToken } from "../utils/verifyToken.js";

export const isLoggedIn = (req, res, next) => {
  //get token from header
  const token = getTokenFromHeader(req);
  //verify the token
  const decodeUser = verifyToken(token);

  //save
  if(!decodeUser){
    throw new Error("Invalid/Expired token, please login again");
  }else{
    req.userAuthId = decodeUser?.id;
    next();
  }

};