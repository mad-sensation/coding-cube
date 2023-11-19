import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingWordComponent } from './coding-word.component';

describe('CodingWordComponent', () => {
  let component: CodingWordComponent;
  let fixture: ComponentFixture<CodingWordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodingWordComponent]
    });
    fixture = TestBed.createComponent(CodingWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
