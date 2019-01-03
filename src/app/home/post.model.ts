import { Author } from './author.model'

export class Post {
  author: Author
  author_id: string
  content: string
  create_at: Date
  good: boolean
  id: string
  last_reply_at: Date
  reply_count: number
  replies?: object[]
  tab: string
  title: string
  top: boolean
  visit_count: number
  is_collect?: boolean
}
