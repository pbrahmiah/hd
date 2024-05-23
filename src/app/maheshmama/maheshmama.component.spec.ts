import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaheshmamaComponent } from './maheshmama.component';

describe('MaheshmamaComponent', () => {
  let component: MaheshmamaComponent;
  let fixture: ComponentFixture<MaheshmamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaheshmamaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaheshmamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
