import { TestBed, async, inject } from '@angular/core/testing';

import { NoauthGuard } from './noauth.guard';

describe('NoauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoauthGuard]
    });
  });

  it('should ...', inject([NoauthGuard], (guard: NoauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
