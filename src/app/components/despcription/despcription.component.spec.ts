import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespcriptionComponent } from './despcription.component';

describe('DespcriptionComponent', () => {
  let component: DespcriptionComponent;
  let fixture: ComponentFixture<DespcriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespcriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DespcriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
