import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ex02Component } from './ex02.component';

describe('Ex02Component', () => {
  let component: Ex02Component;
  let fixture: ComponentFixture<Ex02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex02Component]  // Usamos "declarations" para declarar el componente a probar
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ex02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct values after component initialization', () => {
    expect(component.x).toEqual(5);
    expect(component.y).toEqual(10);
    expect(component.word).toEqual('Angular');
    
    // Assuming you have a 'person' object initialized in your component
    expect(component.person).toEqual({ name: 'John Doe', position: 'Developer' });
  });
});

