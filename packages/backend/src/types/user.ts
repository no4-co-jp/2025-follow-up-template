import type { RowDataPacket } from 'mysql2'
import type { User } from '@/types'

export interface UserEntity extends User, RowDataPacket {}
