import { Author } from '../home/author.model'

export class PostComment {
  author: Author
  content: string
  create_at: Date
  id: string
}
