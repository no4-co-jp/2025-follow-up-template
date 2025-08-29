'use client'

import { Table, Title, Container } from '@mantine/core'
import { useSample } from '@/app/hooks/useSample'

export default function Page() {
  const { users, error, isLoading } = useSample()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching users: {error.message}</div>

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
          {users?.map((user) => (
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
