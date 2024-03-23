import { AppDataSource } from "../config/data-source";
import { credentialEntity } from "../entity/credentialsEntity";

// let credentials: ICredential[] = []; // Arreglo de base de datos
let credentialIdCounter: number = 1;

export async function createCredential(username: string, password: string): Promise<credentialEntity> {
    const credentialRepository = AppDataSource.getRepository(credentialEntity);

    const newCredential = new credentialEntity();
    newCredential.username = username;
    newCredential.password = password;
    await credentialRepository.save(newCredential);

    return newCredential;
}

export async function validateCredential(username: string, password: string): Promise<credentialEntity | null> {
    const credentialRepository = AppDataSource.getRepository(credentialEntity);
    const credential = await credentialRepository.findOneBy({ username, password });

    return credential;
}