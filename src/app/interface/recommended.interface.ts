import { recommendedTypeResponse } from '../enum/TypeResponse.enum';

export interface recommended {
  id?: number;
  name: string;
  description: string;
  foodTastes: number;
  preferences: number;
  typeResponse: recommendedTypeResponse;
  createAt?: Date;
}
