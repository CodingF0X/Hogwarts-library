export interface ICreateProfileApplication {
  createProfile(userId: string): Promise<void>;
}
