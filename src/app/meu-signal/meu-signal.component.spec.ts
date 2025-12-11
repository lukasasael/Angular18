import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuSignalComponent } from './meu-signal.component';

describe('MeuSignalComponent', () => {
  let component: MeuSignalComponent;
  let fixture: ComponentFixture<MeuSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeuSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
