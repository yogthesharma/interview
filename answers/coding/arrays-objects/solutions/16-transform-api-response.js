function transformUsers(apiResponse) {
  return apiResponse.data.users.map(({ id, profile }) => ({
    id,
    fullName: `${profile.first} ${profile.last}`,
  }));
}

module.exports = { transformUsers };
