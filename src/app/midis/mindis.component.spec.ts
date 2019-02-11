import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindisComponent } from './mindis.component';

describe('MindisComponent', () => {
  let component: MindisComponent;
  let fixture: ComponentFixture<MindisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
