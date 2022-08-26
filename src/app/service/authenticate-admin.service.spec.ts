import { TestBed } from '@angular/core/testing';

import { AuthenticateAdminService } from './authenticate-admin.service';

describe('AuthenticateAdminService', () => {
  let service: AuthenticateAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticateAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
