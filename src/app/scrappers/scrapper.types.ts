export interface IScrapper<InputType> {
  execute(input: InputType): Promise<void>;
}
