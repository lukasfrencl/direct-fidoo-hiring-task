interface CheckUsernameResponse {
  error: string | null
  data: string
}

export async function checkUsername(username: string): Promise<CheckUsernameResponse> {
  // simulate API response delay
  await new Promise((res) => setTimeout(res, 100))

  if (!RegExp(/^[a-z-_.]+$/i).test(username)) {
    return { error: 'InvalidFormat', data: 'username can only consist of characters a-z, A-Z, \'-\', \'_\' and \'.\'' }
  }

  if (['admin', 'null', 'root'].includes(username)) {
    return { error: 'AlreadyExists', data: 'this username is already taken' }
  }

  return {
    error: null,
    data: `${username.toLowerCase()}@fidoo.com`,
  }
}
