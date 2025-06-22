export interface ICreateProfileService {
  createProfile(userId: string): Promise<void>;
}
