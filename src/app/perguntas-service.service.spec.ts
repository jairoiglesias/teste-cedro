import { TestBed, inject } from '@angular/core/testing';

import { PerguntasServiceService } from './perguntas-service';

describe('PerguntasServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerguntasServiceService]
    });
  });

  it('should be created', inject([PerguntasServiceService], (service: PerguntasServiceService) => {
    expect(service).toBeTruthy();
  }));
});
