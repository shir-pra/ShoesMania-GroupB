import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ HttpClientTestingModule ], // import HttpClientTestingModule to mock http requests
      providers: [ ProductService ] // provide ProductService for the test
    })
    .compileComponents();
  });
    beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

// it('should fetch products on ngOnInit', () => {
//   const mockProducts = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
//   spyOn(productService, 'getAllProducts').and.returnValue(of(mockProducts)); // mock the service method
//   component.ngOnInit();
//   expect(productService.getAllProducts).toHaveBeenCalled(); // expect service method to have been called
//   expect(component.products).toEqual(mockProducts); // expect products to have been fetched
// });
// it('should handle error when fetching products', () => {
//   const mockError = new Error('An error occurred');
//   spyOn(productService, 'getAllProducts').and.returnValue(of(mockError).pipe(throwError(mockError))); // mock the service method to return an error
//   spyOn(console, 'error'); // spy on console.error method
//   component.ngOnInit();
//   expect(productService.getAllProducts).toHaveBeenCalled(); // expect service method to have been called
//   expect(console.error).toHaveBeenCalledWith(mockError.message); // expect error message to have been logged
// });
});
