import { Inject, Injectable } from '@nestjs/common';
import { ICreateProfileApplication, ICreateProfileService } from './ports';
import { PROFILE_TOKEN } from '../DI';

@Injectable()
export class CreateProfileApplication implements ICreateProfileApplication {
  constructor(
    @Inject(PROFILE_TOKEN.SERVICES.CREATE_PROFILE)
    private readonly createProfileService: ICreateProfileService,
  ) {}
  createProfile(id: number): Promise<void> {
    return this.createProfileService.createProfile(id);
  }
}
