import * as bcrypt from 'bcrypt';

export const hashPassword = (password:string,salt:10):string => {
   return  bcrypt.hashSync(password,salt)
}

export const comparePassword = (hashPass:string,userPasword:string) =>{
    return bcrypt.compareSync(hashPass,userPasword)
}