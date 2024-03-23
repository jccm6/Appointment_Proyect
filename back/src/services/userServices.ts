import { AppDataSource } from "../config/data-source";
import { credentialEntity } from "../entity/credentialsEntity";
import { userEntity } from "../entity/userEntity";
import { createCredential } from "./credentialServices";

// let users: IUser[] = [];
let userIdCounter = 1;

export async function getAllUsersService(): Promise<userEntity[]> {
    const userRepository = AppDataSource.getRepository(userEntity)
    return await userRepository.find();
}

export async function getUserByIdService(id: number): Promise<userEntity | null> {
    // const userRepository = AppDataSource.getRepository(userEntity);
    // return await userRepository.findOneBy({ id });

    const userRepository = AppDataSource.getRepository(userEntity);
    return await userRepository.findOne({
    where: { id },
    relations: ["appointmentsId"]
    });
}

export async function createUserService(name: string, email: string, birthdate: Date, nDni: string, username: string, password: string): Promise<userEntity> {
    const userRepository = AppDataSource.getRepository(userEntity);
    const credentialRepository = AppDataSource.getRepository(credentialEntity);

    // Verificar si el username ya existe
    const usernameExisting = await credentialRepository.findOneBy({ username });
    if (usernameExisting) {
        throw new Error('El username ya existe');
    }

    //! Modularizar con createCredential - en credentialServices
    // Crear y guardar las credenciales
    const CreateCredential = new credentialEntity();
    const newCredential= await createCredential (username, password);
    await credentialRepository.save(newCredential);


    // const newCredential = new credentialEntity();
    // newCredential.username = username;
    // newCredential.password = password;
    // await credentialRepository.save(newCredential);

    // Crear y guardar el usuario
    const newUser = new userEntity();
    newUser.name = name;
    newUser.email = email;
    newUser.birthdate = birthdate;
    newUser.nDni = nDni;
    newUser.credentialsId = newCredential;
    await userRepository.save(newUser);

    return newUser;
}

export async function putUserService (id: number, updateData: Partial<userEntity>): Promise<userEntity | null> {
    const userRepository = AppDataSource.getRepository(userEntity);

    // Buscar el usuario por ID
    const user = await userRepository.findOneBy({ id });
    if (!user) {
        return null;
    }

    // Actualizar las propiedades del usuario
    userRepository.merge(user, updateData);
    await userRepository.save(user);

    return user;
};

export async function loginUserService (username:string, password:string): Promise<userEntity | null> {
    const credentialRepository = AppDataSource.getRepository(credentialEntity);
    const userRepository = AppDataSource.getRepository(userEntity);

    // Buscar las credenciales
    const credential = await credentialRepository.findOneBy({ username, password });
    if (!credential) {
        return null;
    }

    // Buscar el usuario asociado a las credenciales
    return await userRepository.findOneBy({ credentialsId: credential });
};