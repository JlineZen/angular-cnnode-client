import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendlyLinkComponent } from './friendly-link.component';

describe('FriendlyLinkComponent', () => {
  let component: FriendlyLinkComponent;
  let fixture: ComponentFixture<FriendlyLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendlyLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendlyLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
