'use client'

import { useEffect, useState } from 'react'
import { fetchUsers } from './apis/user'
import { Table, Title, Container } from '@mantine/core'
import type { User } from '@/types'

export default function Page() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers()
      setUsers(data)
    }

    loadUsers()
  }, [])

  return (
    <Container size='md' mt='xl'>
      <Title order={2} mb='md'>
        User List
      </Title>

      <Table striped highlightOnHover withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>eMail</Table.Th>
            <Table.Th>Created At</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {users.map((user) => (
            <Table.Tr key={user.id}>
              <Table.Td>{user.id}</Table.Td>
              <Table.Td>{user.name}</Table.Td>
              <Table.Td>{user.eMail}</Table.Td>
              <Table.Td>{new Date(user.createdAt).toDateString()}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Container>
  )
}
