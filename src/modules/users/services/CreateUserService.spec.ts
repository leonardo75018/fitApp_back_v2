describe('CreateUser', () => {
  it('should be able to create a new user', () => {
    expect(1).toBe(1);
  });
  it('should not be able to create two clients whith the same email', () => {
    expect(1).toBe(2);
  });
});
