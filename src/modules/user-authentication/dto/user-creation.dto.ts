export class UserCreationDto {
  userId: string;
  firstAccess: boolean;

  constructor(userId: string, firstAccess: boolean) {
    this.userId = userId;
    this.firstAccess = firstAccess;
  }

  static of(userId: string, firstAccess: boolean): UserCreationDto {
    return new UserCreationDto(userId, firstAccess);
  }
}
