import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLogComponent } from './edit-log.component';

describe('EditLogComponent', () => {
  let component: EditLogComponent;
  let fixture: ComponentFixture<EditLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
