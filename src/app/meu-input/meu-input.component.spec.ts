import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuInputComponent } from './meu-input.component';

describe('MeuInputComponent', () => {
  let component: MeuInputComponent;
  let fixture: ComponentFixture<MeuInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
