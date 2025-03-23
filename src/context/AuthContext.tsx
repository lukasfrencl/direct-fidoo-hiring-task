import * as React from 'react'

interface User {
  username: string
  email: string
}

interface AuthContextType {
  user?: User
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
}

const SESSION_STORAGE_USER_KEY = 'user'

const loadUserFromSession = (): User | undefined => {
  const savedUser = sessionStorage.getItem(SESSION_STORAGE_USER_KEY)
  if (savedUser) {
    return JSON.parse(savedUser) as User
  }
  return undefined
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined)

export const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children?: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const loadedUser = loadUserFromSession()

  const [user, setUser] = React.useState<User | undefined>(loadedUser)
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(!!loadedUser)

  const login = React.useCallback((user: User) => {
    sessionStorage.setItem(SESSION_STORAGE_USER_KEY, JSON.stringify(user))
    setUser(user)
    setIsAuthenticated(true)
  }, [])

  const logout = React.useCallback(() => {
    sessionStorage.clear()
    setUser(undefined)
    setIsAuthenticated(false)
  }, [])

  const contextValue = React.useMemo(
    () => ({ user, isAuthenticated, login, logout }),
    [user, isAuthenticated, login, logout]
  )

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}
