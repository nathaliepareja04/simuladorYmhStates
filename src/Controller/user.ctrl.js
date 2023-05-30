import { response } from "../helpers/Response.js";
import fs from "fs";

const userCtrl={}

userCtrl.listAll =  (req, reply) => {
    try {
      const data =  fs.readFileSync('fakeData.json');
      const jsonData =  JSON.parse(data);
      
      const users = jsonData.usuarios; 
    
      response(reply, 200, true, users, "List of users.");
    } catch (error) {
       response(
        reply,
        500,
        false,
        "",
        `An error has occurred in the 'listAll' function ${error.message}`
      );  
    }
};

userCtrl.listById =  (req, reply) => {
    try {
        const id = parseInt(req.params.id);

        const data =  fs.readFileSync('fakeData.json');
        const jsonData = JSON.parse(data);
          
        const usuario = jsonData.usuarios.find(user => user.id === id);
  
        if (!usuario) {
            response(reply, 404, false, "", "User not found");
        }
    
        response(reply, 200, true, usuario, "User found");

    } catch (error) {
      return response(
        reply,
        500,
        false,
        "",
        `An error has occurred in the 'listById' function ${error.message}`
      );
    }
};

export default userCtrl;