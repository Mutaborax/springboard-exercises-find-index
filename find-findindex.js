function findUserByUsername(usersArray, username) {
  return usersArray.find(user => user.username === username);
}

function removeUser(usersArray, username) {
  const index = usersArray.findIndex(user => user.username === username);
  if (index === -1) return;
  return usersArray.splice(index, 1)[0];
}
