import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetappComponent } from './getapp.component';

describe('GetappComponent', () => {
  let component: GetappComponent;
  let fixture: ComponentFixture<GetappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetappComponent]
    });
    fixture = TestBed.createComponent(GetappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
