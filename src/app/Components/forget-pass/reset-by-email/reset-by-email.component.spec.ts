import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetByEmailComponent } from './reset-by-email.component';

describe('ResetByEmailComponent', () => {
  let component: ResetByEmailComponent;
  let fixture: ComponentFixture<ResetByEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetByEmailComponent]
    });
    fixture = TestBed.createComponent(ResetByEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
