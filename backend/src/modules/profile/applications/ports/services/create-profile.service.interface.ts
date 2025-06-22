export interface ICreateProfileService {
  createProfile(userId: number): Promise<void>;
}
