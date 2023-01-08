export interface ListAndChipsModel {
  readonly name: string;
  readonly avatar: string;
  readonly followedBy: [
    {
      name: string;
    }
  ];
}
