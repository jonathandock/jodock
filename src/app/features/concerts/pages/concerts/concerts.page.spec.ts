import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertsPage } from './concerts.page';

describe('ConcertsPage', () => {
  let component: ConcertsPage;
  let fixture: ComponentFixture<ConcertsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcertsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcertsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
