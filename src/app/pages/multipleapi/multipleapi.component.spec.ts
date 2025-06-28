import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleapiComponent } from './multipleapi.component';

describe('MultipleapiComponent', () => {
  let component: MultipleapiComponent;
  let fixture: ComponentFixture<MultipleapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
