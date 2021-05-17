import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecifradoComponent } from './decifrado.component';

describe('DecifradoComponent', () => {
  let component: DecifradoComponent;
  let fixture: ComponentFixture<DecifradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecifradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecifradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
