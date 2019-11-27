export interface Questions{
  questionId: number;
  questionnarieId: number;
  questionNumber: number;
  question: string;
  questionType: string;
  required: boolean;
  requiredConditions: string;
  auraVariableName: string;
  auraXmlTag: string;
  productId: string;
  businessLineId: string;
}
