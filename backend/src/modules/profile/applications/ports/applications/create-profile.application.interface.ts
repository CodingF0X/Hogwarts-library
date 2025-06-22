export interface ICreateProfileApplication {
  createProfile(userId: number): Promise<void>;
}
