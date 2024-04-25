import UserModel from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import VerifyToken from '../models/VerifyToken.js';
import crypto from 'crypto';
import {sendEmail} from '../utils/index.js';
import 'dotenv/config';
import RoleModel from '../models/Role.js';

export const registerUser = async (request, response) => {
    try {
        const {firstName, lastName, password, email, avatarUrl} = request.body;

        let chekUser = await UserModel.findOne({ email: email });
       
        if (chekUser) {
            return response.status(400).json({message: "User with given email already exist!"});
        }
        
        const salt = await bcrypt.genSalt(+process.env.BCRYPT_SALT);
        const passHash = await bcrypt.hash(password, salt);
        const userRole = await RoleModel.findOne({value: 'ADMIN'})

        const data = new UserModel({
            email,
            firstName,
            lastName,
            passwordHash: passHash,
            roles: [userRole.value],
            verified: true
        });

        const userFromDB = await data.save();
        
        // if (userFromDB) {
        //     let setToken = await VerifyToken.create({
        //         user: userFromDB._id,
        //         token: crypto.randomBytes(16).toString("hex"),
        //     });

        //     const message = `${process.env.CLIENT_URL}/auth/verify/${userFromDB._id}?token=${setToken.token}`;
        //     await sendEmail(userFromDB.email, "Verify Email", message);
        //     return response.status(200).json({message: 'We sent letter to your email to confir registration'})
        // }

        // const token = jwt.sign({
        //     _id: userFromDB._id,

        // }, process.env.SECRET_KEY, {expiresIn: '30d'});

        // const {passwordHash, ...user} = userFromDB._doc;

        // return response.status(200).json({...user, token});

        return response.status(200).json({...user});

    } catch (error) {
        console.log(error);
        response.status(500).json({message: 'Rgistration Failed'});
    }

};