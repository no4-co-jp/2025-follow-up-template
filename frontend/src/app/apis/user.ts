import type { User } from '@/types'

export async function fetchUsers(): Promise<User[]> {
  try {
    const res = await fetch('http://localhost:8000')
    if (!res.ok) throw new Error('Failed to fetch users')
    const data: User[] = await res.json()
    return data
  } catch (err) {
    console.error('Error fetching users:', err)
    return []
  }
}
