import { CreateProfileApplication } from '../applications/create-profile.application';
import { GetProfileApplication } from '../applications/get-profile.application';
import { CreateProfileService } from '../applications/services/create-profile.service';
import { GetProfileService } from '../applications/services/get-profile.service';
import { UpdateProfileService } from '../applications/services/update-profile.service';
import { UpdateProfileApplication } from '../applications/update-profile.application';
import { PROFILE_TOKEN } from './injection.token';

export class ProfileProviders {
  static readonly createProfileApp = {
    provide: PROFILE_TOKEN.APPLICATIONS.CREATE_PROFILE,
    useClass: CreateProfileApplication,
  };

  static readonly createProfileSvc = {
    provide: PROFILE_TOKEN.SERVICES.CREATE_PROFILE,
    useClass: CreateProfileService,
  };

  static readonly getProfileApp = {
    provide: PROFILE_TOKEN.APPLICATIONS.GET_PROFILE,
    useClass: GetProfileApplication,
  };

  static readonly getProfileSvc = {
    provide: PROFILE_TOKEN.SERVICES.GET_PROFILE,
    useClass: GetProfileService,
  };

  static readonly updateProfileApp = {
    provide: PROFILE_TOKEN.APPLICATIONS.UPDATE_PROFILE,
    useClass: UpdateProfileApplication,
  };

  static readonly updateProfileSvc = {
    provide: PROFILE_TOKEN.SERVICES.UPDATE_PROFILE,
    useClass: UpdateProfileService,
  };

  public static readonly all = [
    this.createProfileApp,
    this.getProfileApp,
    this.updateProfileApp,
    this.createProfileSvc,
    this.getProfileSvc,
    this.updateProfileSvc,
  ];
}
